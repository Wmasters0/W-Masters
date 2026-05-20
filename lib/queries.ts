export const analysesQuery = `*[_type == "analysis"] | order(publishedAt desc){title, slug, pair, timeframe, bias, summary, publishedAt}`
export const lessonsQuery = `*[_type == "lesson"] | order(order asc){title, slug, category, summary, order}`
export const roiQuery = `*[_type == "roi"] | order(date desc){title, pair, side, leverage, roiPercent, date}`
export const courseQuery = `*[_type == "courseModule"] | order(order asc){title, summary, order}`
