/**
 * @file Application Global Store
 * @description Central state management for app-wide concerns
 * @typedef {Object} AppStates - Global application state types
 * @property {string} testMessage - Test message state
 */

import { create } from 'zustand';

// Define the shape of the store
type AppStates = {
  testMessage: string;
};

// Create the store
// The store is a hook that can be used in any component
// It will return the state and the set function
const useAppStore = create<AppStates>(() => ({
  testMessage: 'I am stored on the App Store!',
}));

export default useAppStore;
