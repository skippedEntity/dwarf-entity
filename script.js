const marinaClickButton = document.querySelector('.button'),
  dwarfEntity = document.querySelector('.marina-real-entity'),
  heart = document.querySelector('.heart'),
  container = document.querySelector('.container'),
  marinaCode = document.querySelector('.marina-code'),
  dwarf = document.querySelector('.dwarf');

heart.addEventListener('click', (e) => {
  if (
    e.target.style.animationPlayState === 'paused' ||
    !e.target.style.animationPlayState
  ) {
    e.target.style.animationPlayState = 'running';
    e.target.style.color = 'red';
  } else {
    e.target.style.animationPlayState = 'paused';
    e.target.style.color = 'gray';
  }
});

// Великий код Марины Greenberg! Не трогать, не фиксить!
// if (heart = 'inactive')
// else heart (broken)

marinaClickButton.addEventListener('click', (e) => {
  console.log(marinaClickButton.classList);
  if (!marinaClickButton.classList.contains('marina-rotate')) {
    const randomRotateDegree = Math.floor(Math.random() * 360) + 1;
    console.log(randomRotateDegree);
    marinaClickButton.classList.add('marina-rotate');
    marinaClickButton.style.transform = `rotate(${randomRotateDegree}deg)`;
  } else {
    marinaClickButton.classList.toggle('marina-rotate');
    marinaClickButton.style.transform = 'rotate(0deg)';
  }

  dwarfEntity.classList.add('skew');
  setInterval(() => {
    dwarfEntity.classList.remove('skew');
  }, 2000);
});

marinaCode.addEventListener('click', (e) => {
  const sheshenItemsCount = document.querySelectorAll('.sheshen__item').length;

  const sheshen = document.createTextNode(
    sheshenItemsCount <= 10
      ? 'Ээээ не трогай, щещен'
      : 'Котагым жеме наху каму сказал'
  );

  const sheshenParagraph = document.createElement('p');
  sheshenParagraph.classList.add('sheshen__item');
  sheshenParagraph.appendChild(sheshen);
  container.appendChild(sheshenParagraph);
});

dwarf.addEventListener('click', (e) => {
  const img = document.createElement('img');
  img.src =
    'https://sun9-3.userapi.com/s/v1/ig2/-zKQEUeJABgiBSGP_RuLqrEAtlzwZ_47Wpp60a3Damv-qeqMvxkPxZ824ioI202r_S7R669PsN8rxtpDyWicyq0h.jpg?size=200x240&quality=96&crop=0,0,600,720&ava=1';
  dwarfEntity.replaceChild(img, dwarf);
});
