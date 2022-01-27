if (recipe == "SPANISH") {
  amt = base * SPANISH_FUDGE;
} else if (recipe == "FRENCH") {
  amt = base * FRENCH_FUDGE;
  chocolate = 7;
} else if (recipe == "ENGLISH") {
  amt = base * ENGLISH_FUDGE;
} else {
  amt = base;
}
sugar = 2 * bottom(amt) + top(amt) * 1.17;
