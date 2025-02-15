'use client';

import { useEffect, useState } from 'react';
import styles from './Form.module.css';
import { FormProps, FormData, FormField, BuilderFormField, FieldType } from './Form.setup';
import { builder } from '@builder.io/sdk';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const isValidFieldType = (type: string): type is FieldType => {
  const validTypes: FieldType[] = [
    'text',
    'email',
    'tel',
    'number',
    'textarea',
    'select',
    'radio',
    'checkbox',
    'date',
    'time',
    'file',
    'password'
  ];
  return validTypes.includes(type as FieldType);
};

export default function Form({ 
  selectedForm,
  backgroundColor = '#ffffff',
  textColor = '#000000',
  accentColor = 'var(--accent)',
  borderRadius = 8,
  padding = 32,
  className = ''
}: FormProps) {
  console.log('Form props:', { selectedForm, backgroundColor, textColor, accentColor });
  
  const [formData, setFormData] = useState<FormData | null>(null);
  const [formState, setFormState] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchForm() {
      if (!selectedForm?.value?.data) {
        console.log('No form data found in selectedForm');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        console.log('Form props:', { selectedForm });
        
        const formContent = selectedForm.value.data;
        console.log('Form content:', formContent);
        
        const processedForm: FormData = {
          name: formContent.formName || 'Untitled Form',
          description: formContent.description || '',
          submitButtonText: formContent.submitButton || 'Submit',
          submitEndpoint: formContent.submitEndpoint,
          successMessage: formContent.successMessage || 'Form submitted successfully!',
          errorMessage: formContent.errorMessage || 'There was an error submitting the form.',
          fields: Array.isArray(formContent.fields) ? formContent.fields.map((field: BuilderFormField) => {
            // Extract the field type as a string
            const fieldType = typeof field.type === 'object' && 'Default' in field.type
              ? field.type.Default
              : field.type as string;
            
            // Ensure field type is valid
            if (!isValidFieldType(fieldType)) {
              console.warn(`Invalid field type: ${fieldType}, defaulting to 'text'`);
              return {
                type: 'text' as FieldType,
                name: field.name || field.fieldName || '',
                label: field.label,
                placeholder: field.placeholder || '',
                required: field.required || false,
                validation: field.validation || {},
                options: field.options || [],
                width: field.width || 'full',
                helpText: field.helpText || ''
              };
            }

            return {
              type: fieldType,
              name: field.name || field.fieldName || '',
              label: field.label,
              placeholder: field.placeholder || '',
              required: field.required || false,
              validation: field.validation || {},
              options: field.options || [],
              width: field.width || 'full',
              helpText: field.helpText || ''
            };
          }) : []
        };

        console.log('Processed form data:', processedForm);
        setFormData(processedForm);

        // Initialize form state with default values
        const initialState: Record<string, any> = {};
        if (Array.isArray(formContent.fields)) {
          formContent.fields.forEach((field: BuilderFormField) => {
            const fieldName = field.name || field.fieldName || '';
            initialState[fieldName] = field.defaultValue || '';
          });
        }
        setFormState(initialState);
      } catch (error) {
        console.error('Error processing form:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchForm();
  }, [selectedForm]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');

    // Validate all fields
    const newErrors: Record<string, string> = {};
    formData?.fields.forEach(field => {
      const error = validateField(field, formState[field.name]);
      if (error) {
        newErrors[field.name] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitStatus('error');
      return;
    }

    try {
      if (formData?.submitEndpoint) {
        const response = await fetch(formData.submitEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formState),
        });

        if (!response.ok) throw new Error('Submission failed');
      }
      
      setSubmitStatus('success');
      setFormState({});
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    }
  };

  const validateField = (field: FormField, value: any): string => {
    if (field.required && !value) {
      return 'This field is required';
    }

    if (field.validation) {
      const { pattern, minLength, maxLength, min, max } = field.validation;
      
      if (pattern && !new RegExp(pattern).test(value)) {
        return field.validation.customMessage || 'Invalid format';
      }
      
      if (typeof value === 'string') {
        if (minLength && value.length < minLength) {
          return `Minimum length is ${minLength} characters`;
        }
        if (maxLength && value.length > maxLength) {
          return `Maximum length is ${maxLength} characters`;
        }
      }
      
      if (typeof value === 'number') {
        if (min && value < min) {
          return `Minimum value is ${min}`;
        }
        if (max && value > max) {
          return `Maximum value is ${max}`;
        }
      }
    }

    return '';
  };

  const handleInputChange = (name: string, value: any) => {
    setFormState(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  if (loading) {
    console.log('Form is loading');
    return <div className={styles.loading}>Loading form...</div>;
  }

  if (!formData) {
    console.log('No form data available');
    return <div className={styles.error}>Form not found</div>;
  }

  console.log('Rendering form with data:', formData);

  const containerStyle = {
    backgroundColor,
    color: textColor,
    '--text-color': textColor,
    '--text-secondary': textColor + '99',
    '--accent': accentColor,
    borderRadius: `${borderRadius}px`,
    padding: `${padding}px`,
  } as React.CSSProperties;

  return (
    <div className={`${styles.formContainer} ${className}`} style={containerStyle}>
      {formData.name && (
        <div className={styles.header}>
          <h2>{formData.name}</h2>
          {formData.description && <p>{formData.description}</p>}
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form}>
        {formData.fields.map((field, index) => (
          <div
            key={field.name}
            className={`${styles.fieldWrapper} ${styles[field.width || 'full']}`}
          >
            <label className={styles.label}>
              {field.label}
              {field.required && <span className={styles.required}>*</span>}
            </label>

            {field.type === 'textarea' ? (
              <textarea
                name={field.name}
                value={formState[field.name] || ''}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                placeholder={field.placeholder}
                className={`${styles.input} ${styles.textarea}`}
                required={field.required}
              />
            ) : field.type === 'select' ? (
              <select
                name={field.name}
                value={formState[field.name] || ''}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                className={styles.select}
                required={field.required}
              >
                <option value="">{field.placeholder || 'Select an option'}</option>
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formState[field.name] || ''}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                placeholder={field.placeholder}
                className={styles.input}
                required={field.required}
              />
            )}

            {field.helpText && (
              <p className={styles.helpText}>{field.helpText}</p>
            )}

            {errors[field.name] && (
              <p className={styles.error}>{errors[field.name]}</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className={styles.submitButton}
          disabled={submitStatus === 'loading'}
        >
          {submitStatus === 'loading' ? 'Submitting...' : formData.submitButtonText}
        </button>

        {submitStatus === 'success' && (
          <p className={styles.successMessage}>{formData.successMessage}</p>
        )}
        {submitStatus === 'error' && (
          <p className={styles.errorMessage}>{formData.errorMessage}</p>
        )}
      </form>
    </div>
  );
}
