import {groq} from 'next-sanity'

export const analysesQuery = groq`
*[_type == "analysis"] | order(coalesce(date, _createdAt) desc) {
  _id,
  title,
  "slug": slug.current,
  date,
  featured,
  ticker,
  market,
  timeframe,
  bias,
  setup_type,
  entry_zone,
  targets,
  stop_loss,
  risk_reward,
  chart_image,
  summary
}`

export const weeklyAnalysisQuery = groq`
*[_type == "analysis" && featured == true] | order(coalesce(date, _createdAt) desc)[0] {
  _id,
  title,
  "slug": slug.current,
  date,
  featured,
  ticker,
  market,
  timeframe,
  bias,
  setup_type,
  entry_zone,
  targets,
  stop_loss,
  risk_reward,
  chart_image,
  summary
}`

export const latestAnalysisQuery = groq`
*[_type == "analysis"] | order(coalesce(date, _createdAt) desc)[0] {
  _id,
  title,
  "slug": slug.current,
  date,
  featured,
  ticker,
  market,
  timeframe,
  bias,
  setup_type,
  entry_zone,
  targets,
  stop_loss,
  risk_reward,
  chart_image,
  summary
}`

export const analysisBySlugQuery = groq`
*[_type == "analysis" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  date,
  featured,
  ticker,
  market,
  timeframe,
  bias,
  setup_type,
  entry_zone,
  targets,
  stop_loss,
  risk_reward,
  chart_image,
  summary,
  body
}`

export const lessonsQuery = groq`
*[_type == "lesson"] | order(coalesce(date, _createdAt) desc) {
  _id,
  title,
  "slug": slug.current,
  date,
  category,
  level,
  cover_image,
  summary
}`

export const lessonBySlugQuery = groq`
*[_type == "lesson" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  date,
  category,
  level,
  cover_image,
  summary,
  body
}`

export const signalsQuery = groq`
*[_type == "signal"] | order(coalesce(date, _createdAt) desc) {
  _id,
  asset,
  date,
  setup,
  exchange,
  entry,
  exit,
  roi,
  status,
  image
}`
