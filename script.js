// Button Click Event
document.getElementById('colorBtn').addEventListener('click', () => {
  document.body.style.backgroundColor = '#d1f0ff';
  document.getElementById('colorBtn').textContent = 'Nice Click!';
});

// Hover Effect Event
document.getElementById('hoverText').addEventListener('mouseover', () => {
  document.getElementById('hoverText').style.color = 'tomato';
});

document.getElementById('hoverText').addEventListener('mouseout', () => {
  document.getElementById('hoverText').style.color = 'black';
});

// Keypress Detection Event
document.getElementById('keypressInput').addEventListener('keyup', (e) => {
  console.log(`You pressed: ${e.key}`);
});

// Double Click (Bonus)
document.getElementById('colorBtn').addEventListener('dblclick', () => {
  alert("Secret double-click discovered!");
});

// Image Gallery Interaction
let imgIndex = 1015;
document.getElementById('nextImg').addEventListener('click', () => {
  imgIndex++;
  document.getElementById('galleryImg').src = `https://picsum.photos/id/${imgIndex}/300/200`;
});

// Accordion Toggle
document.querySelector('.accordion-header').addEventListener('click', () => {
  document.querySelector('.accordion-content').classList.toggle('show');
});

// Form Validation
document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const feedback = document.getElementById('formFeedback');

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !emailPattern.test(email) || password.length < 8) {
    feedback.textContent = "Please check your input!";
    feedback.style.color = 'red';
  } else {
    feedback.textContent = "All good!";
    feedback.style.color = 'green';
  }
});
