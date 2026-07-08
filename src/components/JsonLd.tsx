/** Renders a JSON-LD structured-data block. Server component — the script is
 *  emitted into the HTML so crawlers see it without running JS. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is trusted, first-party content built from site.ts.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
