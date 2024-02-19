// JavaScript code to add functionality to the HTML and CSS

// Functionality for toggling sidebar
const toggleSidebar = () => {
  const sidebar = document.querySelector('.aside');
  sidebar.classList.toggle('active');
}

// Functionality for search box
const searchInput = document.querySelector('.searchBox input');
searchInput.addEventListener('input', (event) => {
  const searchText = event.target.value;
  // Code to filter and display search results
});

// Functionality for chat box
const chatBoxes = document.querySelectorAll('.chatBox');
chatBoxes.forEach(chatBox => {
  chatBox.addEventListener('click', () => {
    // Code to open the clicked chat box and display messages
  });
});

// Functionality for sending messages
const sendMessage = () => {
  const messageInput = document.querySelector('.typeChat input');
  const message = messageInput.value;
  // Code to send the message to the selected recipient
}

// Functionality for handling hover effects
const addHoverEffects = () => {
  const categoryItems = document.querySelectorAll('.categoryItems ul li');
  categoryItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.color = 'blue';
    });
    item.addEventListener('mouseout', () => {
      item.style.color = ''; // Revert to default color
    });
  });

  const searchBoxInput = document.querySelector('.searchBox input');
  searchBoxInput.addEventListener('mouseover', () => {
    searchBoxInput.style.borderColor = 'blue';
  });
  searchBoxInput.addEventListener('mouseout', () => {
    searchBoxInput.style.borderColor = ''; // Revert to default border color
  });

  const icons = document.querySelectorAll('.rightSide i');
  icons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
      icon.style.color = 'blue';
    });
    icon.addEventListener('mouseout', () => {
      icon.style.color = ''; // Revert to default color
    });
  });

  const recentChats = document.querySelectorAll('.recentChat');
  recentChats.forEach(chat => {
    chat.addEventListener('mouseover', () => {
      chat.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    });
    chat.addEventListener('mouseout', () => {
      chat.style.backgroundColor = ''; // Revert to default background color
    });
  });
}

// Call the function to add hover effects
addHoverEffects();
