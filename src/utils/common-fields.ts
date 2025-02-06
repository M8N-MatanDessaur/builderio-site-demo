import { Input } from "@builder.io/sdk";

/**
 * Common field configurations for Builder.io components.
 * These configurations ensure consistency across all components while
 * providing clear descriptions for the marketing and design teams.
 */
export interface CommonFieldConfig extends Partial<Input> {
  name: string;
  friendlyName: string;
  type: string;
  required?: boolean;
  defaultValue?: any;
}

/**
 * Common button configuration with text and URL.
 */
export const buttonField: Input = {
  name: "button",
  friendlyName: "Call-to-Action Button",
  type: "object",
  subFields: [
    {
      name: "buttonText",
      friendlyName: "Button Label",
      type: "text",
    },
    {
      name: "url",
      friendlyName: "Button Link",
      type: "url",
    },
  ],
};

/**
 * Primary and secondary button configurations.
 */
export const primaryButtonField: Input = {
  ...buttonField,
  name: "primaryButton",
  friendlyName: "Primary Call-to-Action",
};

export const secondaryButtonField: Input = {
  ...buttonField,
  name: "secondaryButton",
  friendlyName: "Secondary Call-to-Action",
};

/**
 * Common text content fields.
 */
export const textContentField: Input = {
  name: "textContent",
  friendlyName: "Content",
  type: "richText",
};

export const titleField: Input = {
  name: "title",
  friendlyName: "Title",
  type: "text",
};

export const preTitleField: Input = {
  name: "preTitle",
  friendlyName: "Pre-Title Text",
  type: "text",
};

export const descriptionField: Input = {
  name: "description",
  friendlyName: "Description",
  type: "text",
};

/**
 * Common styling fields.
 */
export const backgroundColorField: Input = {
  name: "backgroundColor",
  friendlyName: "Background Color",
  type: "color",
  defaultValue: "rgb(255, 255, 255)",
};

export const textColorField: Input = {
  name: "textColor",
  friendlyName: "Text Color",
  type: "color",
};

/**
 * Common image fields.
 */
export const imageField: Input = {
  name: "image",
  friendlyName: "Image",
  type: "file",
  allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
};

export const beforeImageField: Input = {
  name: "beforeImage",
  friendlyName: "Before Image",
  type: "file",
  allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
};

export const afterImageField: Input = {
  name: "afterImage",
  friendlyName: "After Image",
  type: "file",
  allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
};

/**
 * Common link fields.
 */
export const urlField: Input = {
  name: "url",
  friendlyName: "URL",
  type: "url",
};

export const linkTextField: Input = {
  name: "linkText",
  friendlyName: "Link Text",
  type: "text",
};

/**
 * Common search-related fields.
 */
export const placeholderTextField: Input = {
  name: "placeholderText",
  friendlyName: "Placeholder Text",
  type: "text",
};

export const errorTextField: Input = {
  name: "errorText",
  friendlyName: "Error Message",
  type: "text",
};

export const searchButtonTextField: Input = {
  name: "buttonText",
  friendlyName: "Button Text",
  type: "text",
};

/**
 * Common list field creator function.
 */
export const createItemsField = (
  subFields: Input[],
  friendlyName: string = "Items",
): Input => ({
  name: "items",
  friendlyName,
  type: "list",
  subFields,
});
