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
      required: true,
      helperText: "Text displayed on the button"
    },
    {
      name: "url",
      friendlyName: "Button Link",
      type: "url",
      required: true,
      helperText: "URL the button links to"
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#0070f3",
      helperText: "Button background color"
    },
    {
      name: "textColor",
      type: "color",
      defaultValue: "#ffffff",
      helperText: "Button text color"
    },
    {
      name: "borderColor",
      type: "color",
      defaultValue: "#0070f3",
      helperText: "Button border color"
    }
  ],
};

/**
 * Primary and secondary button configurations.
 */
export const primaryButtonField: Input = {
  ...buttonField,
  name: "primaryButton",
  friendlyName: "Primary Call-to-Action",
  required: true,
  defaultValue: {
    buttonText: "Get Started",
    url: "#",
    backgroundColor: "#0070f3",
    textColor: "#ffffff",
    borderColor: "#0070f3"
  }
};

export const secondaryButtonField: Input = {
  ...buttonField,
  name: "secondaryButton",
  friendlyName: "Secondary Call-to-Action",
  defaultValue: {
    buttonText: "Learn More",
    url: "#",
    backgroundColor: "transparent",
    textColor: "#ffffff",
    borderColor: "#ffffff"
  }
};

/**
 * Common text content fields.
 */
export const textContentField: Input = {
  name: "textContent",
  friendlyName: "Content",
  type: "richText",
  helperText: "Rich text content with formatting options"
};

export const titleField: Input = {
  name: "title",
  friendlyName: "Title",
  type: "text",
  required: true,
  defaultValue: "Section Title",
  helperText: "Main heading text"
};

export const preTitleField: Input = {
  name: "preTitle",
  friendlyName: "Pre-Title Text",
  type: "text",
  helperText: "Optional small text displayed above the main title"
};

export const descriptionField: Input = {
  name: "description",
  friendlyName: "Description",
  type: "text",
  helperText: "Supporting text or description"
};

/**
 * Common styling fields.
 */
export const backgroundColorField: Input = {
  name: "backgroundColor",
  friendlyName: "Background Color",
  type: "color",
  defaultValue: "#ffffff",
  helperText: "Background color of the section"
};

export const textColorField: Input = {
  name: "textColor",
  friendlyName: "Text Color",
  type: "color",
  defaultValue: "#000000",
  helperText: "Main text color"
};

/**
 * Common image fields.
 */
export const imageField: Input = {
  name: "image",
  friendlyName: "Image",
  type: "file",
  allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
  helperText: "Upload an image file (JPEG, PNG, or WebP)"
};

export const beforeImageField: Input = {
  ...imageField,
  name: "beforeImage",
  friendlyName: "Before Image",
};

export const afterImageField: Input = {
  ...imageField,
  name: "afterImage",
  friendlyName: "After Image",
};

/**
 * Common link fields.
 */
export const urlField: Input = {
  name: "url",
  friendlyName: "URL",
  type: "url",
  helperText: "Link URL"
};

export const linkTextField: Input = {
  name: "linkText",
  friendlyName: "Link Text",
  type: "text",
  helperText: "Text for the link"
};

/**
 * Common search-related fields.
 */
export const placeholderTextField: Input = {
  name: "placeholderText",
  friendlyName: "Placeholder Text",
  type: "text",
  helperText: "Text shown when input is empty"
};

export const errorTextField: Input = {
  name: "errorText",
  friendlyName: "Error Message",
  type: "text",
  helperText: "Message shown when an error occurs"
};

export const searchButtonTextField: Input = {
  name: "buttonText",
  friendlyName: "Button Text",
  type: "text",
  defaultValue: "Search",
  helperText: "Text for the search button"
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

/**
 * Common animation fields
 */
export const animationDurationField: Input = {
  name: "animationDuration",
  friendlyName: "Animation Duration",
  type: "number",
  defaultValue: 1000,
  helperText: "Duration of the animation in milliseconds"
};

export const animationDelayField: Input = {
  name: "animationDelay",
  friendlyName: "Animation Delay",
  type: "number",
  defaultValue: 0,
  helperText: "Delay before animation starts in milliseconds"
};

/**
 * Common spacing fields
 */
export const paddingField: Input = {
  name: "padding",
  friendlyName: "Section Padding",
  type: "object",
  defaultValue: {
    top: "4rem",
    bottom: "4rem",
    left: "1rem",
    right: "1rem"
  },
  subFields: [
    {
      name: "top",
      type: "string",
      defaultValue: "4rem"
    },
    {
      name: "bottom",
      type: "string",
      defaultValue: "4rem"
    },
    {
      name: "left",
      type: "string",
      defaultValue: "1rem"
    },
    {
      name: "right",
      type: "string",
      defaultValue: "1rem"
    }
  ]
};

export const gapField: Input = {
  name: "gap",
  friendlyName: "Grid Gap",
  type: "string",
  defaultValue: "2rem",
  helperText: "Space between grid items"
};
