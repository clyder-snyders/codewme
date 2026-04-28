import { ExternalLink, Calendar, Building2 } from "lucide-react";

/**
 * Design: Warm Editorial
 * - Card-based layout for news items
 * - Publication details and dates
 * - Linked headlines to original articles
 * - Context summary for each mention
 */

interface NewsItem {
  id: string;
  headline: string;
  publication: string;
  date: string;
  summary: string;
  url: string;
  category: "press" | "interview" | "feature" | "coverage";
}

interface NewsMentionsProps {
  items: NewsItem[];
}

const categoryColors = {
  press: "bg-blue-100 text-blue-700",
  interview: "bg-purple-100 text-purple-700",
  feature: "bg-amber-100 text-amber-700",
  coverage: "bg-green-100 text-green-700",
};

const categoryLabels = {
  press: "Press Release",
  interview: "Interview",
  feature: "Feature",
  coverage: "Coverage",
};

export default function NewsMentions({ items }: NewsMentionsProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-ink-soft">No news mentions yet. Check back soon!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="surface-card group block p-6 hover:surface-card-hover transition-all"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            {/* Main content */}
            <div className="flex-1 min-w-0">
              {/* Category badge */}
              <div className="inline-block mb-3">
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${
                    categoryColors[item.category]
                  }`}
                >
                  {categoryLabels[item.category]}
                </span>
              </div>

              {/* Headline */}
              <h3 className="text-display text-lg md:text-xl font-medium text-ink group-hover:text-brand transition-colors">
                {item.headline}
              </h3>

              {/* Publication & Date */}
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-ink-soft">
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  <span>{item.publication}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
              </div>

              {/* Summary */}
              <p className="mt-4 text-sm text-ink-soft leading-relaxed">
                {item.summary}
              </p>
            </div>

            {/* External link icon */}
            <div className="flex-shrink-0 pt-2 md:pt-0">
              <ExternalLink className="h-5 w-5 text-ink-soft group-hover:text-brand transition-colors" />
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
