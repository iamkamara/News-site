 // Add the latest news articles to the page
 articles.forEach(article => {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  link.textContent = article.title;
  link.setAttribute('href', article.url);
  listItem.appendChild(link);
  latestNewsList.appendChild(listItem);
});

// Add a click event listener to the featured article to display more information
const featuredArticle = document.querySelector('#featured-news article');
featuredArticle.addEventListener('click', event => {
  const articleSummary = event.currentTarget.querySelector('p');
  const articleUrl = event.currentTarget.querySelector('a');
  articleSummary.style.display = 'block';
  articleUrl.style.display = 'block';
});



// Add a click event listener to the navigation menu to highlight the selected page
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
link.addEventListener('click', event => {
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  event.currentTarget.classList.add('active');
});
});