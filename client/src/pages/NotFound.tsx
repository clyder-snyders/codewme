import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="flex items-center justify-center py-32">
        <div className="container-x text-center">
          <h1 className="text-display text-9xl md:text-[10rem] text-brand/20">404</h1>
          <h2 className="text-display text-4xl md:text-5xl mt-4 mb-4">Page not found</h2>
          <p className="text-lg text-ink-soft max-w-md mx-auto mb-8">
            Looks like you've ventured into uncharted territory. Let me help you get back on track.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white transition-all hover:scale-[1.03] hover:shadow-lg"
          >
            Back to home <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
