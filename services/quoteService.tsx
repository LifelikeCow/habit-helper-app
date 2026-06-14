import { quotes } from "../constants/quotes";

export function getDailyQuote() {
  const today = new Date();

  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;

  const dayOfYear = Math.floor(diff / oneDay);

  return quotes[dayOfYear % quotes.length] ?? "Stay consistent.";
}