const padGreen = document.getElementById('padGreen');
const padRed = document.getElementById('padRed');
const padBlue = document.getElementById('padBlue');
const padYellow = document.getElementById('padYellow');
const center = document.getElementById('center');
const pad = document.getElementsByClassName('pad');

const padGreenAudio = new Audio('./audio/padGreen.mp3');
const padRedAudio = new Audio('./audio/padRed.mp3');
const padBlueAudio = new Audio('./audio/padBlue.mp3');
const padYellowAudio = new Audio('./audio/padYellow.mp3');
const errorAudio = new Audio('./audio/error.mp3');

const colors = ['green', 'red', 'blue', 'yellow'];
const padColors = [padGreen, padRed, padBlue, padYellow];
const padAudios = [padGreenAudio, padRedAudio, padBlueAudio, padYellowAudio];

const padArray = [...pad];

let counter = 0;
let colorsRandom = [];
let numberHumanChoices = 0;

center.addEventListener('click', () => {
  center.style.cursor = 'initial';
  
  padArray.map(pad => pad.style.cursor = 'pointer');
  
  init();
}, { once: true });

const init = () => {
  setTimeout(() => {
    simonTurn();
  }, 500);
};

const activePad = color => {
  padColors[color].style.opacity = 1;
  padAudios[color].play();

  setTimeout(() => padColors[color].style.opacity = 0.5, 500);
};

const activePad1 = color => {
  padColors[color].style.opacity = 1;
  padAudios[color].play();

  setTimeout(() => padColors[color].style.opacity = 0.5, 500);
};

const activePadPromise = color => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => resolve(activePad(color)), 1000);
    } catch (error) {
      reject(console.log(error));
    }
  });
};

const simonTurn = () => {
  center.innerText = ++counter;

  const colorRandom = () => Math.floor(Math.random() * 4);
  colorsRandom.push(colorRandom());

  /* colorsRandom.map(color => {
    // await activePadPromise(color);
    // activePad(color);

    setTimeout(() => activePad(color), 500);
  }); */

  /* colorsRandom.map(color => {
    padColors[color].style.opacity = 1;
    padAudios[color].play();

    setTimeout(() => padColors[color].style.opacity = 0.5, 500);
  }); */

  for (let i = 0; i < colorsRandom.length; i++) {
    setTimeout(() => {
      padColors[colorsRandom[i]].style.opacity = 1;
      padAudios[colorsRandom[i]].play();
  
      setTimeout(() => padColors[colorsRandom[i]].style.opacity = 0.5, 500);
    }, 1000);
  }

  /* for (let i = 0; i < colorsRandom.length; i++) {
    padColors[colorsRandom[i]].style.opacity = 1;
    padAudios[colorsRandom[i]].play();

    setTimeout(() => padColors[colorsRandom[i]].style.opacity = 0.5, 500);
  } */

  humanTurn();
};

const humanTurn = () => {
  for (let i = 0; i < colorsRandom.length; i++) {
    padGreen.addEventListener('click', () => {
      console.log(padGreen.dataset.color);
      console.log(colors[colorsRandom[i]]);
  
      if (padGreen.dataset.color !== colors[colorsRandom[i]]) {
        errorAudio.play();
  
        return false;
      }

      padGreen.style.cursor = 'initial';
      padGreen.style.opacity = 1;
      padGreen.style.boxShadow = 'inset 1px 1px 10px 1px #000';
      padGreenAudio.play();

      setTimeout(() => {
        padGreen.style.opacity = 0.5;
        padGreen.style.boxShadow = 'none';
        padGreen.style.cursor = 'pointer';

        ++numberHumanChoices;

        console.log(numberHumanChoices);
        console.log(counter);

        if (numberHumanChoices === counter) {
          simonTurn();
        }
      }, 500);
    }, { once: true });

    padRed.addEventListener('click', () => {
      console.log(padRed.dataset.color);
      console.log(colors[colorsRandom[i]]);
  
      if (padRed.dataset.color !== colors[colorsRandom[i]]) {
        errorAudio.play();
  
        return false;
      }

      padRed.style.cursor = 'initial';
      padRed.style.opacity = 1;
      padRed.style.boxShadow = 'inset 1px 1px 10px 1px #000';
      padRedAudio.play();

      setTimeout(() => {
        padRed.style.opacity = 0.5;
        padRed.style.boxShadow = 'none';
        padRed.style.cursor = 'pointer';

        ++numberHumanChoices;

        console.log(numberHumanChoices);
        console.log(counter);

        if (numberHumanChoices === counter) {
          simonTurn();
        }
      }, 500);
    }, { once: true });

    padBlue.addEventListener('click', () => {
      console.log(padBlue.dataset.color);
      console.log(colors[colorsRandom[i]]);

      if (padBlue.dataset.color !== colors[colorsRandom[i]]) {
        errorAudio.play();
  
        return false;
      }

      padBlue.style.cursor = 'initial';
      padBlue.style.opacity = 1;
      padBlue.style.boxShadow = 'inset 1px 1px 10px 1px #000';
      padBlueAudio.play();

      setTimeout(() => {
        padBlue.style.opacity = 0.5;
        padBlue.style.boxShadow = 'none';
        padBlue.style.cursor = 'pointer';

        ++numberHumanChoices;

        console.log(numberHumanChoices);
        console.log(counter);

        if (numberHumanChoices === counter) {
          simonTurn();
        }
      }, 500);
    }, { once: true });

    padYellow.addEventListener('click', () => {
      if (padYellow.dataset.color !== colors[colorsRandom[i]]) {
        console.log(padYellow.dataset.color);
        console.log(colors[colorsRandom[i]]);

        errorAudio.play();
  
        return false;
      }

      padYellow.style.cursor = 'initial';
      padYellow.style.opacity = 1;
      padYellow.style.boxShadow = 'inset 1px 1px 10px 1px #000';
      padYellowAudio.play();

      setTimeout(() => {
        padYellow.style.opacity = 0.5;
        padYellow.style.boxShadow = 'none';
        padYellow.style.cursor = 'pointer';

        ++numberHumanChoices;

        console.log(numberHumanChoices);
        console.log(counter);

        if (numberHumanChoices === counter) {
          simonTurn();
        }
      }, 500);
    }, { once: true });
  }
};

const simonTurn1 = () => {
  center.innerText = ++counter;

  const colorRandom = () => Math.floor(Math.random() * 4);
  const currentColor = colorRandom();

  colorsRandom.push(currentColor);

  console.log(colorsRandom);

  colorsRandom.map(color => {
    setTimeout(() => {
      padColors[color].style.opacity = 1;
      padAudios[color].play();
  
      setTimeout(() => padColors[color].style.opacity = 0.5, 500);
    }, 1000);
  });

  humanTurn();
};

const humanTurn1 = () => {
  colorsRandom.map(color => {
    padGreen.addEventListener('click', () => {
      console.log(padGreen.dataset.color);
      console.log(colors[color]);
  
      if (padGreen.dataset.color !== colors[color]) {
        errorAudio.play();
  
        return false;
      }

      padGreen.style.cursor = 'initial';
      padGreen.style.opacity = 1;
      padGreen.style.boxShadow = 'inset 1px 1px 10px 1px #000';
      padGreenAudio.play();

      setTimeout(() => {
        padGreen.style.opacity = 0.5;
        padGreen.style.boxShadow = 'none';
        padGreen.style.cursor = 'pointer';

        ++numberHumanChoices;

        console.log(numberHumanChoices);
        console.log(counter);

        if (numberHumanChoices === counter) {
          simonTurn();
        }
      }, 500);
    }, { once: true });

    padRed.addEventListener('click', () => {
      console.log(padRed.dataset.color);
      console.log(colors[color]);
  
      if (padRed.dataset.color !== colors[color]) {
        errorAudio.play();
  
        return false;
      }

      padRed.style.cursor = 'initial';
      padRed.style.opacity = 1;
      padRed.style.boxShadow = 'inset 1px 1px 10px 1px #000';
      padRedAudio.play();

      setTimeout(() => {
        padRed.style.opacity = 0.5;
        padRed.style.boxShadow = 'none';
        padRed.style.cursor = 'pointer';

        ++numberHumanChoices;

        console.log(numberHumanChoices);
        console.log(counter);

        if (numberHumanChoices === counter) {
          simonTurn();
        }
      }, 500);
    }, { once: true });

    padBlue.addEventListener('click', () => {
      console.log(padBlue.dataset.color);
      console.log(colors[color]);

      if (padBlue.dataset.color !== colors[color]) {
        errorAudio.play();
  
        return false;
      }

      padBlue.style.cursor = 'initial';
      padBlue.style.opacity = 1;
      padBlue.style.boxShadow = 'inset 1px 1px 10px 1px #000';
      padBlueAudio.play();

      setTimeout(() => {
        padBlue.style.opacity = 0.5;
        padBlue.style.boxShadow = 'none';
        padBlue.style.cursor = 'pointer';

        ++numberHumanChoices;

        console.log(numberHumanChoices);
        console.log(counter);

        if (numberHumanChoices === counter) {
          simonTurn();
        }
      }, 500);
    }, { once: true });

    padYellow.addEventListener('click', () => {
      console.log(padYellow.dataset.color);
      console.log(colors[color]);
  
      if (padYellow.dataset.color !== colors[color]) {
        errorAudio.play();
  
        return false;
      }

      padYellow.style.cursor = 'initial';
      padYellow.style.opacity = 1;
      padYellow.style.boxShadow = 'inset 1px 1px 10px 1px #000';
      padYellowAudio.play();

      setTimeout(() => {
        padYellow.style.opacity = 0.5;
        padYellow.style.boxShadow = 'none';
        padYellow.style.cursor = 'pointer';

        ++numberHumanChoices;

        console.log(numberHumanChoices);
        console.log(counter);

        if (numberHumanChoices === counter) {
          simonTurn();
        }
      }, 500);
    }, { once: true });
  });
};
