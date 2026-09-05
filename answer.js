// Question No. 1: Value Detective
function describeValue(val) {
  let valueType = typeof val;
  let status = val ? "truthy" : "falsy";
  return valueType + " | " + status;
}

// Question No. 2: Bangladesh Weekend Machine
function getDayType(day) {
  let formattedDay = day.toLowerCase();
  
  switch (formattedDay) {
    case "friday":
    case "saturday":
      return "Weekend";
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";
    default:
      return "Invalid Day";
  }
}

// Question No. 3: Username Gatekeeper
function validateUsername(username) {
  if (username.length < 4) {
    return "Too Short";
  }
  
  if (username.includes(" ")) {
    return "No Space Allowed";
  }
  
  if (username.toLowerCase().includes("admin")) {
    return "Reserved Word";
  }
  
  return "Available";
}

// Question No. 4: Dhaka CNG Fare Meter
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let fare = 50;
  
  if (distance > 2) {
    fare = fare + (distance - 2) * 15;
  }
  
  fare = fare + (waitingMinutes * 2);
  
  if (isNight) {
    fare = fare + (fare * 0.20);
  }
  
  return fare;
}

// Question No. 5: Run Chase Commentator
const getChaseVerdict = (target, scored, ballsLeft) => {
  let runsNeeded = target - scored;
  
  if (runsNeeded <= 0) {
    return "Won";
  }
  
  if (ballsLeft <= 0) {
    return "Lost";
  }
  
  let requiredRate = (runsNeeded / ballsLeft) * 6;
  let verdict = "";
  
  if (requiredRate <= 6) {
    verdict = "Comfortable";
  } else if (requiredRate <= 12) {
    verdict = "Tough";
  } else {
    verdict = "Almost Impossible";
  }
  
  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};

// ==========================================
// CONSOLE LOG TESTS (Question Wise)
// ==========================================

console.log("--- Question 1 ---");
console.log(describeValue("hello")); // string | truthy
console.log(describeValue(""));        // string | falsy
console.log(describeValue(25));        // number | truthy
console.log(describeValue(0));         // number | falsy
console.log(describeValue(true));      // boolean | truthy
console.log(describeValue(null));      // object | falsy
console.log(describeValue(undefined)); // undefined | falsy

console.log("\n--- Question 2 ---");
console.log(getDayType("Friday"));   // Weekend
console.log(getDayType("friday"));   // Weekend
console.log(getDayType("MONDAY"));   // Working Day
console.log(getDayType("Bandarban"));// Invalid Day

console.log("\n--- Question 3 ---");
console.log(validateUsername("rahim123"));    // Available
console.log(validateUsername("ab"));          // Too Short
console.log(validateUsername("a b"));         // Too Short
console.log(validateUsername("abcd"));        // Available
console.log(validateUsername("rahim islam")); // No Space Allowed
console.log(validateUsername("superadmin99"));// Reserved Word
console.log(validateUsername("Admin_Rahim")); // Reserved Word

console.log("\n--- Question 4 ---");
console.log(getCngFare(2));                // 50
console.log(getCngFare(1));                // 50
console.log(getCngFare(5));                // 95
console.log(getCngFare(10));               // 170
console.log(getCngFare(5, false, 10));     // 115
console.log(getCngFare(5, true));          // 114
console.log(getCngFare(5, true, 10));      // 138

console.log("\n--- Question 5 ---");
console.log(getChaseVerdict(200, 200, 12)); // Won
console.log(getChaseVerdict(200, 190, 0));  // Lost
console.log(getChaseVerdict(100, 90, 12));  // Need 10 runs in 12 balls | Comfortable
console.log(getChaseVerdict(100, 80, 12));  // Need 20 runs in 12 balls | Tough
console.log(getChaseVerdict(100, 70, 12));  // Need 30 runs in 12 balls | Almost Impossible
console.log(getChaseVerdict(150, 149, 1));  // Need 1 runs in 1 balls | Comfortable