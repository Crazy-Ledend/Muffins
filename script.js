// Optional glowing trail (mouse sparkles)
document.addEventListener('mousemove', function (e) {
    const trail = document.createElement('div');
    trail.classList.add('trail');
    document.body.appendChild(trail);
  
    const mouseX = e.clientX;
    const mouseY = e.clientY;
  
    trail.style.left = `${mouseX}px`;
    trail.style.top = `${mouseY + window.scrollY}px`;
  
    setTimeout(() => {
      trail.remove();  // Remove trail after animation
    }, 300);
  });
  
  
// Hover bounce on cards
document.querySelectorAll('.card').forEach((card) => {
card.addEventListener('mouseover', () => {
    card.style.transform = 'translateY(-8px) rotateZ(0.5deg) scale(1.03)'
})
card.addEventListener('mouseout', () => {
    card.style.transform = ''
})
})
  
// Toggle Theme Functionality

// const storedTheme = localStorage.getItem('theme');

// if (storedTheme) {
//   document.body.classList.add(storedTheme);
// } else {
//   document.body.classList.add('dark-mode');
// }

// const toggleButton = document.getElementById('toggle-theme');
// const body = document.body;

// toggleButton.addEventListener('click', () => {
//   if (body.classList.contains('dark-mode')) {
//     body.classList.remove('dark-mode');
//     body.classList.add('light-mode');
//     toggleButton.textContent = '☀️';
//     localStorage.setItem('theme', 'light-mode');
//   } else {
//     body.classList.remove('light-mode');
//     body.classList.add('dark-mode');
//     toggleButton.textContent = '🌙';
//     localStorage.setItem('theme', 'dark-mode');
//   }
// });

// Add an event listener to trigger animations when scrolling
window.addEventListener("scroll", function () {
    const elements = document.querySelectorAll(".fade-in");
    
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight - 50) {
        element.classList.add("visible");
      }
    });
  });
  

  // Navigation
function loadPage(page) {
  if (page === 'privacy-policy') {
    // Use Fetch API to load the privacy-policy.html file
    fetch(`${page}.html`)
      .then(response => response.text())
      .then(data => {
        // Hide main content
        document.getElementById('main-content').style.display = 'none';
        
        // Inject the fetched content into the container
        document.getElementById('privacy-policy-container').innerHTML = data;
        
        // Show the privacy policy content
        document.getElementById('privacy-policy-container').style.display = 'block';
      })
      .catch(error => {
        console.error('Error loading the page:', error);
      });
  }
}

function goBack() {
  // Hide privacy policy content
  document.getElementById('content').style.display = 'none';

  // Show the main content again
  document.getElementById('main-content').style.display = 'block';
}
