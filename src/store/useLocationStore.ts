/**
 * @file Location Feature Store
 * @description State management for location-specific features with URL-based locale initialization
 */

import { create } from "zustand";

// Define the shape of the store
type LocationStates = {
  selectedLocale: string;
  setSelectedLocale: (locale: string) => void;
  initializeLocaleFromUrl: () => void;
};

// Helper function to get locale from URL
const getLocaleFromUrl = (): string => {
  if (typeof window !== "undefined") {
    const pathname = window.location.pathname;
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length > 0) {
      const localeSegment = segments[0];
      // Check if the segment matches a locale pattern (e.g., en)
      if (/^[a-z]{2}-[a-z]{2}$/.test(localeSegment)) {
        return localeSegment;
      }
    }
  }
  return "en"; // Default locale
};

// Create the Zustand store
const useLocationStore = create<LocationStates>((set) => ({
  selectedLocale: getLocaleFromUrl(),
  setSelectedLocale: (locale) => set({ selectedLocale: locale }),
  initializeLocaleFromUrl: () => {
    if (typeof window !== "undefined") {
      const localeFromUrl = getLocaleFromUrl();
      set({ selectedLocale: localeFromUrl });
    }
  },
}));

// Initialize locale from URL if in the browser (on the client side)
if (typeof window !== "undefined") {
  // Defer initialization to avoid potential timing issues
  window.addEventListener("load", () => {
    useLocationStore.getState().initializeLocaleFromUrl();
  });
}

export default useLocationStore;
