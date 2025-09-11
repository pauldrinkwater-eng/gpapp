// lib/getNews.js
import Parser from "rss-parser";
const parser = new Parser();

const FEED_URL = "https://www.malthousesurgery.co.uk/feed/";

export async function getNews(limit = 5) {
  try {
    const feed = await parser.parseURL(FEED_URL);
    const items = (feed.items || []).slice(0, limit).map((i) => ({
      title: i.title || "Untitled",
      link: i.link,
      excerpt:
        i.contentSnippet ||
        i.summary ||
        (i.content ? i.content.replace(/<[^>]+>/g, "").slice(0, 160) + "…" : ""),
      image:
        (i.enclosure && i.enclosure.url) ||
        (i["content:encoded"] &&
          (i["content:encoded"].match(/<img[^>]+src="([^"]+)"/i)?.[1] || null)) ||
        null,
      pubDate: i.isoDate || i.pubDate || null,
    }));
    return items;
  } catch (e) {
    console.error("RSS fetch failed", e);
    return [];
  }
}