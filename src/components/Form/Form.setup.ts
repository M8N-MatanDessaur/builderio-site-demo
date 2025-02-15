import { CommonComponentProps } from '@/utils/common-types';

export type FieldType = 'text' | 'email' | 'tel' | 'number' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'date' | 'time' | 'file' | 'password';

export interface BuilderFieldType {
  '@type': '@builder.io/core:LocalizedValue';
  Default: FieldType;
}

export interface BuilderFormField {
  type: FieldType | BuilderFieldType;
  name?: string;
  fieldName?: string;
  label: string;
  placeholder?: string;
  defaultValue?: string;
  required?: boolean;
  validation?: {
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    customMessage?: string;
  };
  options?: Array<{
    label: string;
    value: string;
  }>;
  width?: 'full' | 'half' | 'third';
  helpText?: string;
}

export interface FormField {
  type: FieldType;
  name: string;
  label: string;
  placeholder?: string;
  defaultValue?: string;
  required?: boolean;
  validation?: {
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    customMessage?: string;
  };
  options?: Array<{
    label: string;
    value: string;
  }>;
  width?: 'full' | 'half' | 'third';
  helpText?: string;
}

export interface BuilderFormData {
  formName: string;
  description?: string;
  submitButton: string;
  submitEndpoint?: string;
  successMessage: string;
  errorMessage: string;
  fields: BuilderFormField[];
}

export interface FormData {
  name: string;
  description?: string;
  submitButtonText: string;
  submitEndpoint?: string;
  successMessage: string;
  errorMessage: string;
  fields: FormField[];
}

export interface BuilderReference {
  '@type': '@builder.io/core:Reference';
  id: string;
  model: string;
  value: {
    query: any[];
    folders: any[];
    createdDate: number;
    id: string;
    name: string;
    modelId: string;
    published: string;
    data: BuilderFormData;
    variations: Record<string, any>;
    lastUpdated: number;
    firstPublished: number;
    testRatio: number;
    createdBy: string;
    lastUpdatedBy: string;
    rev: string;
  };
}

export interface FormProps extends CommonComponentProps {
  selectedForm?: BuilderReference;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  borderRadius?: number;
  padding?: number;
}
