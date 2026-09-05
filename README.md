# Foundation Program - Assignment 1

Solutions for Foundation Program Assignment 1 focusing on core JavaScript fundamentals (variables, conditions, switch statements, and arrow functions).

## File Overview

- `answer.js`: Contains all function implementations for Questions 1 to 5.

---

## Problem & Approach Summary

### Question 1: Value Detective (`describeValue`)
* **Problem**: Determine the data type and truthiness/falsiness of any given input value and return them formatted as `<type> | <truthy/falsy>`.
* **Approach**: Used `typeof` to get the primitive/object type, followed by a ternary operator (`val ? "truthy" : "falsy"`) to evaluate boolean coercion without needing complex conditional blocks.

### Question 2: Bangladesh Weekend Machine (`getDayType`)
* **Problem**: Categorize days into "Weekend", "Working Day", or "Invalid Day" regardless of letter casing, using a `switch` statement.
* **Approach**: Normalized the input string to lowercase using `.toLowerCase()` before evaluating it in a `switch` block. Grouped multiple cases together without `break` statements to share return values cleanly.

### Question 3: Username Gatekeeper (`validateUsername`)
* **Problem**: Validate usernames against specific rules in strict priority order (Length < 4 $\rightarrow$ Space check $\rightarrow$ "admin" keyword check).
* **Approach**: Implemented sequential `if` checks returning early upon the first failing rule:
  1. `.length < 4` for short names.
  2. `.includes(" ")` to catch spaces.
  3. `.toLowerCase().includes("admin")` to catch reserved words regardless of casing.

### Question 4: Dhaka CNG Fare Meter (`getCngFare`)
* **Problem**: Calculate total CNG fare based on distance, waiting time, and night surcharge with default parameter values.
* **Approach**: Set default parameters (`isNight = false`, `waitingMinutes = 0`). Initialized a base fare of 50 taka covering up to 2 km, added extra distance charges for anything above 2 km, added waiting charges, and finally applied a 20% surcharge at the end if `isNight` was true.

### Question 5: Run Chase Commentator (`getChaseVerdict`)
* **Problem**: Calculate cricket run chase statuses and required run rates using an arrow function.
* **Approach**: Used arrow function syntax `const getChaseVerdict = (...) => {}`. Checked instant exit conditions (`runsNeeded <= 0` for "Won" and `ballsLeft <= 0` for "Lost") before calculating `requiredRate = (runsNeeded / ballsLeft) * 6`. Evaluated rate ranges to pick the verdict and formatted the output string using template literals.
