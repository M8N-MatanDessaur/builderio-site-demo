// src/utils/builderUtils.ts

import { builder } from "@builder.io/sdk";

// Initialize Builder.io with the public API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// List of valid locales in your application\
//Todo - Update the list of valid locales to match the application's locales. If possible dynamically fetch the locales from the application.
const VALID_LOCALES = [
  'en',
  'fr',
];

/**
 * Checks if a given locale is valid by comparing it against the predefined list of valid locales.
 * @param locale The locale string to validate.
 * @returns `true` if the locale is in the VALID_LOCALES list, otherwise `false`.
 */
export const isValidLocale = (locale: string): boolean => {
  return VALID_LOCALES.includes(locale);
};

/**
 * Fetch content dynamically from Builder.io.
 * Assumes that the locale has already been validated.
 *
 * @param urlPath The URL path of the content (e.g., "/blog/search").
 * @param locale The locale of the content
 * @param builderModelName The Builder.io model name (e.g., "page", "blog-search-page").
 * @returns The fetched content if found, or `null` if not found or an error occurs.
 */
export const fetchBuilderContent = async (
  urlPath: string,
  locale: string,
  builderModelName: string
) => {
  try {
    // Fetch content from Builder.io
    const content = await builder
      .get(builderModelName, {
        userAttributes: {
          urlPath,
          locale
        },
        options: {
          locale
        },
      })
      .toPromise();

    return content;
  } catch (error) {
    console.error("Error fetching content from Builder.io:", error);
    return null;
  }
};
