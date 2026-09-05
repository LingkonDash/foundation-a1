// Question No. 1: Value Detective
function describeValue(val) {
  let valueType = typeof val;
  let status = val ? "truthy" : "falsy";
  return valueType + " | " + status;
}

// console.log(describeValue("hello")); // string | truthy

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

// console.log(getDayType("Friday")); // Weekend


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

// console.log(validateUsername("rahim123")); // Available

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

// console.log(getCngFare(2)); // 50 

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

// console.log(getChaseVerdict(200, 200, 12)); // Won