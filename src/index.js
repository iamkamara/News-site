// Get the latest news articles
const latestArticles = document.querySelectorAll('main section article');

// Add click event listener to each article
latestArticles.forEach(article => {
  article.addEventListener('click', () => {
    // Get the article title and content
    const title = article.querySelector('h3').textContent;
    const content = article.querySelector('p').textContent;
    
    // Display the article in a modal
    showModal(title, content);
  });
});

// Function to display a modal with the article content
function showModal(title, content) {
  // Create modal elements
  const modal = document.createElement('div');
  const modalContent = document.createElement('div');
  const modalTitle = document.createElement('h3');
  const modalClose = document.createElement('button');
  const modalBody = document.createElement('p');
  
  // Add content to modal elements
  modalTitle.textContent = title;
  modalClose.textContent = 'Close';
  modalBody.textContent = content;
  
  // Add classes to modal elements
  modal.classList.add('modal');
  modalContent.classList.add('modal-content');
  modalTitle.classList.add('modal-title');
  modalClose.classList.add('modal-close');
  modalBody.classList.add('modal-body');
  
  // Append modal elements to the page
  modalContent.appendChild(modalTitle);
  modalContent.appendChild(modalClose);
  modalContent.appendChild(modalBody);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  
  // Add click event listener to close button
  modalClose.addEventListener('click', () => {
    document.body.removeChild(modal);
  });
}

