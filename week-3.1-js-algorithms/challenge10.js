// Challenge 10: Meal Suggestion
// Write a function suggestMeal(time, diet) that takes a time of the day ("morning", "afternoon", "evening")
// and a type of diet ("vegan", "vegetarian", "omnivore") as input. The function should return meal suggestions
// based on the input parameters.
function suggestMeal(time, diet) {
  switch (time) {
    case "morning":
      switch (diet) {
        case "vegan":
          return "Fruit smoothie with oats";
        case "vegetarian":
          return "Vegetarian scrambled eggs with toast";
        case "omnivore":
          return "Bacon and eggs with toast";
        default:
          return "No suggestion available for this diet";
      }
    case "afternoon":
      switch (diet) {
        case "vegan":
          return "Vegan burrito";
        case "vegetarian":
          return "Vegetarian pizza";
        case "omnivore":
          return "Chicken sandwich";
        default:
          return "No suggestion available for this diet";
      }
    case "evening":
      switch (diet) {
        case "vegan":
          return "Vegan lentil stew";
        case "vegetarian":
          return "Vegetarian stir-fry";
        case "omnivore":
          return "Grilled salmon with vegetables";
        default:
          return "No suggestion available for this diet";
      }
    default:
      return "No suggestion available for this time";
  }
}

  // Usage examples:
console.log(suggestMeal("morning", "vegan")); // "Fruit smoothie with oats"
console.log(suggestMeal("morning", "vegetarian")); // "Vegetarian scrambled eggs with toast"
console.log(suggestMeal("morning", "omnivore")); // "Bacon and eggs with toast"
console.log(suggestMeal("afternoon", "vegan")); // "Vegan burrito"
console.log(suggestMeal("afternoon", "vegetarian")); // "Vegetarian pizza"
console.log(suggestMeal("afternoon", "omnivore")); // "Chicken sandwich"
console.log(suggestMeal("evening", "vegan")); // "Vegan lentil stew"
console.log(suggestMeal("morning", "coffee"));
