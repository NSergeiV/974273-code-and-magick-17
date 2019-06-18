'use strict';

document.querySelector('.setup').classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var firstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var colorMantle = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var colorEye = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = [];

var randomCase = function (input) {
  return input[Math.floor(Math.random() * (input.length - 0))];
};

for (var i = 0; i < 4; i++) {
  wizards[i] = {
    name: randomCase(firstName) + ' ' + randomCase(lastName),
    coatColor: randomCase(colorMantle),
    eyesColor: randomCase(colorEye)
  };
}

var similarListElement = document.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

for (var j = 0; j < wizards.length; j++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[j].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[j].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[j].eyesColor;

  fragment.appendChild(wizardElement);
}

similarListElement.appendChild(fragment);
