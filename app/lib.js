import {sanityFetch} from "@/sanity/lib/client";
import {
  analysesQuery,
  weeklyAnalysisQuery,
  latestAnalysisQuery,
  analysisBySlugQuery,
  lessonsQuery,
  lessonBySlugQuery,
  signalsQuery,
} from "@/sanity/lib/queries";

export async function getAnalyses() {
  const sanity = await sanityFetch({query: analysesQuery});
  return Array.isArray(sanity) ? sanity : [];
}

export async function getWeeklyAnalysis() {
  const featured = await sanityFetch({query: weeklyAnalysisQuery});
  if (featured) return featured;

  const latest = await sanityFetch({query: latestAnalysisQuery});
  return latest || null;
}

export async function getAnalysis(slug) {
  const sanity = await sanityFetch({query: analysisBySlugQuery, params: {slug}});
  return sanity || null;
}

export async function getLessons() {
  const sanity = await sanityFetch({query: lessonsQuery});
  return Array.isArray(sanity) ? sanity : [];
}

export async function getLesson(slug) {
  const sanity = await sanityFetch({query: lessonBySlugQuery, params: {slug}});
  return sanity || null;
}

export async function getSignals() {
  const sanity = await sanityFetch({query: signalsQuery});
  return Array.isArray(sanity) ? sanity : [];
}
