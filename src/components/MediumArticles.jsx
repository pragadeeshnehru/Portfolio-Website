import { useEffect, useState } from "react";
import RevealOnScroll from "./ui/scroll-reveal";

export default function MediumArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/medium")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="w-full py-5 sm:py-10">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-md font-semibold text-white sm:text-2xl">
              Checkout my Medium Articles
            </h2>

            <a
              href="https://medium.com/@pragadeeshnehru"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white/70 hover:text-white transition"
            >
              View all →
            </a>
          </div>
        </RevealOnScroll>

        {loading ? (
          <p className="text-white/60">Loading articles...</p>
        ) : articles?.length === 0 ? (
          <p className="text-white/60">No articles found.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a, i) => (
              <a
                key={i}
                href={a.link}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
              >
                <p className="text-xs text-white/50 mb-2">
                  {new Date(a.pubDate).toDateString()}
                </p>

                <h3 className="text-lg font-semibold text-white group-hover:text-violet-300 transition line-clamp-2">
                  {a.title}
                </h3>

                <p className="mt-3 text-sm text-white/60">Read on Medium →</p>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
