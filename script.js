const addDevSkill = function (skill) {
  let listItem = document.createElement('li');
  listItem.innerHTML = skill;
  document.getElementById('coding-section').appendChild(listItem);
};

const jump = function (item) {
  return "I'd like a " + item + ', please!';
};
const glass = 'cocktail';
let numberOfClicks = 0;

const clickHandler = function (text) {
  debugger;
  numberOfClicks = numberOfClicks + 1;
  if (numberOfClicks <= 3) {
    alert('click' + ' ' + numberOfClicks);
  } else {
    alert('Drink in moderation -- no more cocktails for you!!');
  }
};

// Declare brainSkills array below this line

document.addEventListener('DOMContentLoaded', function (event) {
  document.getElementById('cocktail-section').innerHTML = jump(glass);
});
