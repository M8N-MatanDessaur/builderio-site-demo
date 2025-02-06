"use client";

import React, { useEffect } from "react";
import { RenderBuilderContent } from "@/components/builder";
import BlogSearch from "@/components/BlogSearch/BlogSearch";
import styles from "@/components/BlogSearch/styles.module.css";
import useLocationStore from "@/store/useLocationStore";

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

  return (
    <div className={styles.BlogSearchPage}>
      <RenderBuilderContent content={content} model="blog-search-page" locale={locale} />
      <BlogSearch content={content} />
    </div>
  );
};

export default ClientPage;
