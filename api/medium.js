import Parser from "rss-parser";

const parser = new Parser();

export default async function handler(req, res) {
  try {
    const feed = await parser.parseURL("https://medium.com/feed/@pragadeeshnehru");

    const articles = feed.items.slice(0, 6).map((item) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      author: item.creator || item.author || "Medium",
    }));

    res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=300");
    return res.status(200).json(articles);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch Medium feed" });
  }
}
