const ingredients = {
  caffeine: {
    dosage: 0,
    minDosage: 99,
    maxDosage: 300
  },
  betaAlanine: {
    dosage: 0,
    minDosage: 2999,
    maxDosage: 6000
  },
  creatine: {
    dosage: 0,
    minDosage: 2999,
    maxDosage: 5000
  },
  citrulline: {
    dosage: 0,
    minDosage: 5999,
    maxDosage: 10000
  }
};

function calculateIngredientScore(ingredient) {
  if (ingredient.dosage < ingredient.minDosage) {
    return 0;
  }
  if (ingredient.dosage > ingredient.maxDosage) {
    return 2.5;
  }
  return (ingredient.dosage - ingredient.minDosage) / (ingredient.maxDosage - ingredient.minDosage) * 2.5;
}

function calculateEnergyScore() {
  const caffeineScore = calculateIngredientScore(ingredients.caffeine);
  return caffeineScore / 2.5 * 10;
}

function calculateStrengthScore() {
  const betaAlanineScore = calculateIngredientScore(ingredients.betaAlanine);
  return betaAlanineScore / 2.5 * 10;
}

function calculateEnduranceScore() {
  const creatineScore = calculateIngredientScore(ingredients.creatine);
  const citrullineScore = calculateIngredientScore(ingredients.citrulline);
  return ((creatineScore + citrullineScore) / 2) / 2.5 * 10;
}

function calculateTotalScore() {
  const creatineScore = calculateIngredientScore(ingredients.creatine);
  const caffeineScore = calculateIngredientScore(ingredients.caffeine);
  const citrullineScore = calculateIngredientScore(ingredients.citrulline);
  const betaAlanineScore = calculateIngredientScore(ingredients.betaAlanine);
  return (creatineScore + caffeineScore + citrullineScore + betaAlanineScore);
}

function displayScores(productName, totalScore, energyScore, strengthScore, enduranceScore) {
  const totalScoreElement = document.getElementById('totalScore');
  const energyScoreElement = document.getElementById('energyScore');
  const strengthScoreElement = document.getElementById('strengthScore');
  const enduranceScoreElement = document.getElementById('enduranceScore');

  totalScoreElement.innerHTML = totalScore.toFixed(1);
  energyScoreElement.innerHTML = energyScore.toFixed(1);
  strengthScoreElement.innerHTML = strengthScore.toFixed(1);
  enduranceScoreElement.innerHTML = enduranceScore.toFixed(1);
}




const calculatorForm = document.getElementById('calculator-form');
const productNameInput = document.getElementById('product-name');
const betaAlanineInput = document.getElementById('beta-alanine');
const caffeineInput = document.getElementById('caffeine');
const creatineInput = document.getElementById('creatine');
const citrullineInput = document.getElementById('citrulline');



calculatorForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const productName = productNameInput.value;
  ingredients.creatine.dosage = Number(creatineInput.value);
  ingredients.caffeine.dosage = Number(caffeineInput.value);
  ingredients.citrulline.dosage = Number(citrullineInput.value);
  ingredients.betaAlanine.dosage = Number(betaAlanineInput.value);

  const totalScore = calculateTotalScore();
  const energyScore = calculateEnergyScore();
  const strengthScore = calculateStrengthScore();
  const enduranceScore = calculateEnduranceScore();

  displayScores(productName, totalScore, energyScore, strengthScore, enduranceScore);
});
