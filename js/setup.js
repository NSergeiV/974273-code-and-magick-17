'use strict';

// document.querySelector('.setup').classList.remove('hidden');

// document.querySelector('.setup-similar').classList.remove('hidden');

var firstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var colorMantle = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var colorEye = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = [];

var randomCase = function (input) {
  return input[Math.floor(Math.random() * (input.length - 0))];
};

var fillWizards = function () {
  for (var i = 0; i < 4; i++) {
    wizards[i] = {
      name: randomCase(firstName) + ' ' + randomCase(lastName),
      coatColor: randomCase(colorMantle),
      eyesColor: randomCase(colorEye)
    };
  }
};

fillWizards();

var creatingCopies = function () {
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
};

creatingCopies();

// Далее, закрытие, открытие popap.

var setap = document.querySelector('.setup');
var setapOpen = document.querySelector('.setup-open');
var setapOpenIcon = setapOpen.querySelector('.setup-open-icon');
var setapClose = setap.querySelector('.setup-close');
var setupUserName = document.querySelector('.setup-user-name');
var setupWizardForm = document.querySelector('.setup-wizard-form');
var setupSubmit = setupWizardForm.querySelector('.setup-submit');
var wizardSetup = document.querySelector('.setup-wizard');
var wizardCoat = wizardSetup.querySelector('.wizard-coat');
var wizardEyes = wizardSetup.querySelector('.wizard-eyes');
var fireballWrapColor = document.querySelector('.setup-fireball-wrap');
var fireballInputValue = fireballWrapColor.querySelector('input');
var setupWizardAppearance = document.querySelector('.setup-wizard-appearance');
var setupWizardAppearanceInputs = setupWizardAppearance.querySelectorAll('input');
var ENTER_BUTTON = 13;
var ESC_BUTTON = 27;

var colorFireball = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var onWizardCoatColor = function () {
  var colorRandom = randomCase(colorMantle);
  wizardCoat.style.fill = colorRandom;
  setupWizardAppearanceInputs[0].value = colorRandom;
};
var onwizardEyesColor = function () {
  var colorRandom = randomCase(colorEye);
  wizardEyes.style.fill = colorRandom;
  setupWizardAppearanceInputs[1].value = colorRandom;
};
var onFireballColor = function () {
  var colorRandom = randomCase(colorFireball);
  fireballWrapColor.style.background = colorRandom;
  fireballInputValue.value = colorRandom;
};

wizardCoat.addEventListener('click', onWizardCoatColor);
wizardEyes.addEventListener('click', onwizardEyesColor);
fireballWrapColor.addEventListener('click', onFireballColor);

var onFormSubmit = function () {
  setupWizardForm.addEventListener('submit', function () {
    closePopap();
    setupWizardForm.action = 'https://js.dump.academy/code-and-magick';
  });
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_BUTTON) {
    if (setupUserName !== document.activeElement) {
      closePopap();
    }
  }
};

var onSubmitEnterPress = function (evt) {
  if (setupSubmit === document.activeElement) {
    if (evt.keyCode === ENTER_BUTTON) {
      onFormSubmit();
    }
  }
};

var closePopap = function () {
  setap.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  document.removeEventListener('keydown', onSubmitEnterPress);
};

var openPopap = function () {
  setap.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  document.addEventListener('keydown', onSubmitEnterPress);
};

setapOpen.addEventListener('click', function () {
  openPopap();
});

setapOpen.addEventListener('keydown', function (evt) {
  if (setapOpenIcon === document.activeElement) {
    if (evt.keyCode === ENTER_BUTTON) {
      openPopap();
    }
  }
});

setapClose.addEventListener('click', function () {
  closePopap();
});

setapClose.addEventListener('keydown', function (evt) {
  if (setapClose === document.activeElement) {
    if (evt.keyCode === ENTER_BUTTON) {
      closePopap();
    }
  }
});

setupSubmit.addEventListener('click', onFormSubmit);
setupSubmit.addEventListener('keydown', onSubmitEnterPress);
