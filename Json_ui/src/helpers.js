import { differenceInDays, format } from "date-fns";

export function dateFormat(date) {
  const formattedDate = format(new Date(date), "MMM d yyy");

  return formattedDate;
}

export function differenceInDate(date) {
  const difference = differenceInDays(new Date(date), new Date());

  return difference;
}

export function differenceDateText(difference) {
  if (difference < 0) {
    return `${Math.abs(difference)} ${difference === -1 ? "day" : "days"} ago`;
  }
  if (difference === 0) {
    return "Today";
  }
  if (difference > 0) {
    return `In ${Math.abs(difference)} ${difference === 1 ? "day" : "days"}`;
  }
}
