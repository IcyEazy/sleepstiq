import { Star } from "../../assets/icons";

export const displayStars = (averageRating: number) => {
  // Round based on decimal place
  const roundedRating = Math.round(averageRating);

  // Generate the star elements with unique keys
  const filledStars = Array(roundedRating)
    .fill(null)
    .map((_, index) => <Star key={`filled-${index}`} />); // Apply key to each filled star

  const unfilledStars = Array(5 - roundedRating)
    .fill(null)
    .map((_, index) => <span key={`unfilled-${index}`}>☆</span>); // Apply key to each unfilled star

  return [...filledStars, ...unfilledStars];
};
