const { Op } = require('sequelize');
const recipe = require('../models/recipe');
let instruction;
let moduleError;

try {
  const db = require('../models');
  ({ instruction } = db);
  if (instruction === undefined) {
    moduleError = 'It looks like you need to generate the Instruction model.';
  }
} catch (e) {
  console.error(e);
  if (e.message.includes('Cannot find module')) {
    moduleError = 'It looks like you need initialize your project.';
  } else {
    moduleError = `An error was raised "${e.message}". Check the console for details.`;
  }
}
/* Don't change code above this line ******************************************/



async function createNewInstruction(specification, recipeId) {
  // Use the findAll method of the Instruction object to find all the
  // instructions for the specified recipe.
  //
  // Use the create method of the Instruction object to create a new object and
  // return it using the maximum listOrder from the query just before this.
  //
  // Docs: https://sequelize.org/v5/manual/instances.html#creating-persistent-instances
  const currentInstructions = await instruction.findAll({
    where: {
      recipeId: recipeId
    }
  })
  let max = 1;
  console.log(currentInstructions);
  currentInstructions.forEach(el => {
    if (el.dataValues.listOrder > max){
      max = el.dataValues.listOrder;
    }
  })
  max++;
  console.log(max);
  const newInstruction = await instruction.create({
    specification, max, recipeId
  })
  return newInstruction;
  console.log(currentInstructions);
}



/* Don't change code below this line ******************************************/
module.exports = {
  createNewInstruction,
  loadingDbError: moduleError,
};
