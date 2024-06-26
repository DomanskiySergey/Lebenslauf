const column = document.querySelector('.container .columns');
column.addEventListener('click', event => {
    const target = event.target;
    if (target.tagName === 'H1') {
        const section = document.getElementById(target.dataset.id);
        section.classList.toggle('visible');
        event.target.classList.toggle('visible');
    }
});


function map(val, minA, maxA, minB, maxB) {
  return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
}

function Card3D(card, ev) {
  let img = card.querySelector('img');
  let imgRect = card.getBoundingClientRect();
  let width = imgRect.width;
  let height = imgRect.height;
  let mouseX = ev.offsetX;
  let mouseY = ev.offsetY;
  let rotateY = map(mouseX, 0, 180, -25, 25);
  let rotateX = map(mouseY, 0, 250, 25, -25);
  let brightness = map(mouseY, 0, 250, 1.5, 0.5);
  
  img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  img.style.filter = `brightness(${brightness})`;
}

const avatar = document.querySelector('.avatar-div');
avatar.addEventListener('mousemove', (ev) => {
    Card3D(avatar, ev);
});
avatar.addEventListener('mouseleave', (ev) => {
    let img = avatar.querySelector('img');
    
    img.style.transform = 'rotateX(0deg) rotateY(0deg)';
    img.style.filter = 'brightness(1)';
});