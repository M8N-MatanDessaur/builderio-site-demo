"use client";

import { useEffect, useMemo } from "react";
import { RenderBuilderContent } from "../../../components/builder";
import useLocationStore from "@/store/useLocationStore";
import useBuilderData from "@/hooks/useBuilderData";

const ClientPage = ({
  locale,
  content,
}: {
  locale: string;
  content: any;
}) => {
  // Get the setSelectedLocale function from the Zustand store
  // This step is necessary to hydrate the Zustand store with the server-provided locale
  const setSelectedLocale = useLocationStore((state) => state.setSelectedLocale);

  // Hydrate the Zustand store with the server-provided locale
  // Set the selected locale in the Zustand store
  useEffect(() => {
    setSelectedLocale(locale);
  }, [locale, setSelectedLocale]);

  const filters = useMemo(() => ({ status: "active" }), []);
  const { data, error: fetchError } = useBuilderData({
    model: "navigation-model",
    filters
  });

  useEffect(() => {
    if (data) {
      console.log('navigation', data);
    }
    if (fetchError) {
      console.error('Navigation error:', fetchError);
    }
  }, [data, fetchError]);

  return <RenderBuilderContent content={content} model="page" locale={locale} />;
};

export default ClientPage;
