// Select the navbar and all menu items
const navbar = document.getElementById('navbar');
const menuItems = document.querySelectorAll('#navbar ul li a');

// Function to change the background color of the navbar on scroll
window.onscroll = function() {
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = '#222'; // Darker background when scrolled
  } else {
    navbar.style.backgroundColor = '#333'; // Default background color
  }
};

// Function to handle the click event on a menu item
menuItems.forEach(item => {
  item.addEventListener('click', function() {
    // Remove the 'active' class from all menu items
    menuItems.forEach(link => link.classList.remove('active'));
    
    // Add the 'active' class to the clicked menu item
    this.classList.add('active');
  });
});
