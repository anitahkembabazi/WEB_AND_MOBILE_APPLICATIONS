// Define the flood risk threshold
const floodRiskThreshold = 100;

// Define a function to calculate cumulative rainfall
function calculateCumulativeRainfall(rainfallData) {
  let cumulativeRainfall = 0;
  for (let rainfall of rainfallData) {
    cumulativeRainfall += rainfall;
  }
  return cumulativeRainfall;
}

// Define a function to check flood risk
function checkFloodRisk(cumulativeRainfall) {
  if (cumulativeRainfall > floodRiskThreshold) {
    return "FLOOD RISK: High";
  } else {
    return "FLOOD RISK: Low";
  }
}

// Simulate rainfall data for a period
const rainfallData = [20, 30, 40, 50, 60, 70, 80];

// Calculate cumulative rainfall
const cumulativeRainfall = calculateCumulativeRainfall(rainfallData);

// Check flood risk and print the result
console.log(`Cumulative Rainfall: ${cumulativeRainfall}`);
console.log(checkFloodRisk(cumulativeRainfall));