
import { useEffect, useState } from "react";
import { builder } from "@builder.io/sdk";
import useLocationStore from "@/store/useLocationStore";
import { useShallow } from "zustand/react/shallow";
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
// Define the shape of the props for the useBuilderData hook
/**
  * @typedef {Object} UseBuilderDataProps - Props for the useBuilderData hook
  * @property {string} model - The model name to fetch data from
  * @property {string} [fields] - The fields to fetch from the model
  * @property {Record<string, any>} [filters] - The filters to apply to the data
  * @property {Record<string, any>} [query] - The query to apply to the data
  * @property {Number} [limit] - The limit to apply to the data
  * @property {{ field: string; direction: '1' | '-1' }} [sortBy] - The field to sort by and the direction
*/
interface UseBuilderDataProps {
  model: string; 
  fields?: string; 
  filters?: Record<string, any>; 
  query?: Record<string, any>; 
  limit?: Number,
  offset?: Number
  sortBy?: { field: string; direction: '1' | '-1' }; 
}

// Custom hook to fetch data from Builder.io
/**
 * @function useBuilderData
 * @description Custom hook to fetch data from Builder.io
 * @param {UseBuilderDataProps} props - The props for the useBuilderData hook
 * @returns {Object} - The data and error state
 */
const useBuilderData = ({ model, fields, filters={}, query = {}, offset, limit, sortBy}: UseBuilderDataProps) => {
  
  // State to store the fetched data
  const [data, setData] = useState<any[]>([]);
  // State to store any errors encountered during the fetch operation
  const [error, setError] = useState<string | null>(null);

  // Extracting setSelectedLocale from Zustand store
  const { selectedLocale } = useLocationStore(
    useShallow((state) => ({
      selectedLocale: state.selectedLocale,
    }))
  );

// Fetch data from Builder.io on component mount
  useEffect(() => {

    
    const fetchData = async () => {
      setError(null); // Reset the error state before starting the fetch process
      try {
        const options: any = {         
          userAttributes: {
            locale: selectedLocale
          },
          options: {
             enrich: true, 
             locale: selectedLocale,
             offset: offset || 0,
          },
          fields,
          filters, 
          query,
        };

         // Only add limit if it's not blank or undefined
         if (limit !== undefined && limit !== null) {
          options.limit = limit;
          
        }

        // If sorting is specified, include it in the options
        if (sortBy) {
          options.sort = {
              [sortBy.field]: sortBy.direction,
            }
        }

        const content = await builder.getAll(model, options);
        setData(content || []);
      } catch (err) {
        setData([]);
        setError("Failed to fetch data");
      } 
    };

    fetchData();
  }, [selectedLocale, model, fields, JSON.stringify(filters), JSON.stringify(query), offset]);

  return { data, error };
};

export default useBuilderData;
