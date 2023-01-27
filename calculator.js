const ingredients = {

  caffeine: {
    dosage: 0,
    minDosage: 99,
    maxDosage: 300,
    minValue: 100,
    maxValue: 300
  },
  creatine: {
    dosage: 0,
    minDosage: 2999,
    maxDosage: 5000,
    minValue: 3000,
    maxValue: 5000,
  },
  citrulline: {
    dosage: 0,
    minDosage: 5999,
    maxDosage: 10000,
    minValue: 6000,
    maxValue: 10000
  },
  betaAlanine: {
    dosage: 0,
    minDosage: 2999,
    maxDosage: 6000,
    minValue: 3000,
    maxValue: 6000
  }
};

const calculatorForm = document.getElementById('calculate-score-btn');




/////////////////////////////////////////////Create Div Elements




const addBtn = document.getElementById("addBtn");
const nameSelect = document.getElementById("nameSelect");
const IngredientsList = document.getElementById("ingredientsList");


addBtn.addEventListener("click", function() {
  // Get the selected name from the select element
  const selectedName = nameSelect.value;

  // Get the selected name's age and color
  const selectedNameDetails = ingredients[selectedName];
  const minValue = selectedNameDetails.minValue;
  const maxValue = selectedNameDetails.maxValue;
  
  // Create a div element with the selected name, age and color
  const div = document.createElement("div");
  div.innerHTML = `ingredient: ${selectedName}<br>minimum value: ${minValue}<br>maximum value ${maxValue}`;

  // Create a number input element
  const input = document.createElement("input");
  input.type = "number";
  input.id = selectedName;
  div.appendChild(input);

  // Create a delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.classList.add("deleteBtn");
  div.appendChild(deleteBtn);

  ingredientsList.appendChild(div);
});



// Add event listener for delete button
ingredientsList.addEventListener("click", function(event) {
  if (event.target.classList.contains("deleteBtn")) {
    event.target.parentNode.remove();
  }
});





/////////////////////////////////////////////Create Div Elements


function calculateIngredientScore(ingredient) {
  if (ingredient.dosage === undefined) {
    return 0;
  } else if (ingredient.dosage < ingredient.minDosage) {
    return 0;
  } else if (ingredient.dosage > ingredient.maxDosage) {
    return 2.5;
  } else {
    return (ingredient.dosage - ingredient.minDosage) / (ingredient.maxDosage - ingredient.minDosage) * 2.5;
  }
}



function calculateTotalScore() {
  let totalScore = 0;
  for (const ingredient in ingredients) {
    totalScore += calculateIngredientScore(ingredients[ingredient]);
  }
  return totalScore;
}







calculatorForm.addEventListener("click", function() {

  
  for (const ingredient in ingredients) {


    const input = document.getElementById(ingredient);
    if (input) {
      ingredients[ingredient].dosage = input.value;
    } else {
      ingredients[ingredient].dosage = 0;
    }

  const totalScore = calculateTotalScore();
  const scoreElement = document.getElementById("totalScore");
  scoreElement.textContent = `Your pre workout supplement score is: ${totalScore}`;
}});



