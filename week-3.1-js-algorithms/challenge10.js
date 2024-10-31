// Challenge 10: Meal Suggestion
// Write a function suggestMeal(time, diet) that takes a time of the day ("morning", "afternoon", "evening")
// and a type of diet ("vegan", "vegetarian", "omnivore") as input. The function should return meal suggestions
// based on the input parameters.
function suggestMeal(time, diet) {
    switch (time) {
      case "morning":
        if (diet === "vegan") return "Fruit smoothie with oats";
        if (diet === "vegetarian") return "Vegetarian scrambled eggs with toast";
        if (diet === "omnivore") return "Bacon and eggs with toast";
        break;
      case "afternoon":
        if (diet === "vegan") return "Vegan burrito";
        if (diet === "vegetarian") return "Vegetarian pizza";
        if (diet === "omnivore") return "Chicken sandwich";
        break;
      case "evening":
        if (diet === "vegan") return "Vegan lentil stew";
        break;
    }
    return "No suggestion available for this combination";
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