/**
 * @file RenderBuilderContent Component
 * @description Renders Builder.io content with preview mode support
 */
// This file contains the RenderBuilderContent component that renders the BuilderComponent
// with the specified content and model props. The component also uses the useIsPreviewing
// hook to determine if the page is being previewed in Builder. If the content is falsy and
// the page is not being previewed in Builder, the component renders the DefaultErrorPage
// with a 404 status code.

"use client";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { builder } from "@builder.io/sdk";
import DefaultErrorPage from "next/error";
import "../builder-registry";
import { BuilderPageProps } from "./builder.setup";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export function RenderBuilderContent({ content, model, locale }: BuilderPageProps) {
  // Call the useIsPreviewing hook to determine if
  // the page is being previewed in Builder
  const isPreviewing = useIsPreviewing();
  
  // If "content" has a value or the page is being previewed in Builder,
  // render the BuilderComponent with the specified content and model props.
  if (content || isPreviewing) {
    return (
      <BuilderComponent
        content={content}
        model={model}
        locale={locale}
      />
    );
  }

  // If the "content" is falsy and the page is
  // not being previewed in Builder, render the
  // DefaultErrorPage with a 404.
  return <DefaultErrorPage statusCode={404} />;
}
