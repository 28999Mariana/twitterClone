document.addEventListener('DOMContentLoaded', function () {
    // Función para crear elementos y agregar contenido
    function createElement(tag, className, content) {
      const element = document.createElement(tag);
      if (className) {
        element.className = className;
      }
      if (content) {
        element.innerHTML = content;
      }
      return element;
    }
  
    // Crear elementos
    const mainContainer = createElement('div', 'main-flex-container', '');
  
    // Left Container
    const leftContainer = createElement('div', 'left-flex-container flex-item', '');
  
    // Navigation Links
    const navLinks = createElement('div', 'nav-links', '');
    const navList = createElement('ul', '');
  
    const navItems = [
      { class: 'nav-items logo', text: '<a href="#"><i class="fab fa-twitter"></i></a>' },
      { class: 'nav-items current-page', text: '<a href="#"><i class="fas fa-home"></i> Home</a>' },
      // ... Otros elementos de navegación
    ];
  
    navItems.forEach(item => {
      const listItem = createElement('li', item.class, item.text);
      navList.appendChild(listItem);
    });
  
    navLinks.appendChild(navList);
    leftContainer.appendChild(navLinks);
  
    // Tweet and Profile Box
    const tweetBox = createElement('div', 'tweet', '<a href="#">Tweet</a>');
    const profileBox = createElement('div', 'profile-box', '');
  
    const profileContent = `
      <img src="./img/profile.jpg" alt="profile">
      <div class="profile-link">
        <p class="full-name">David Herbert</p>
        <p class="user-name">@king.david</p>
      </div>
      <div class="options-icon"><i class="fas fa-caret-down"></i></div>
    `;
  
    profileBox.innerHTML = profileContent;
  
    // Agregar elementos al contenedor izquierdo
    leftContainer.appendChild(navLinks);
    leftContainer.appendChild(tweetBox);
    leftContainer.appendChild(profileBox);
  
    // Center Container
    const centerContainer = createElement('div', 'center-flex-container flex-item', '');
  
    // Home and Post Tweet
    const homeContent = `
      <h1>Home</h1>
      <i class="fas fa-magic"></i>
    `;
  
    const postTweetContent = `
      <form action="">
        <div class="form-group-1">
          <img src="./img/profile.jpg" alt="profile-pics">
          <input type="text" placeholder="What's happening?">
        </div>
        <div class="form-group-2">
          <div class="post-icons">
            <i class="far fa-image"></i>
            <i class="far fa-file-image"></i>
            <i class="fas fa-stream"></i>
            <i class="far fa-smile"></i>
            <i class="far fa-calendar-check"></i>
          </div>
          <button class="btn" type="submit">Tweet</button>
        </div>
      </form>
    `;
  
    centerContainer.innerHTML = homeContent + postTweetContent;
  
    // Agregar al documento
    document.body.appendChild(mainContainer);
    mainContainer.appendChild(leftContainer);
    mainContainer.appendChild(centerContainer);
  
    // Right Container
    const rightContainer = createElement('div', 'right-flex-container flex-item', '');
  
    // Search Box
    const searchBox = createElement('div', 'search-box', '');
    searchBox.innerHTML = '<i class="fas fa-search"></i><input type="text" placeholder="Search Twitter">';
    rightContainer.appendChild(searchBox);
  
    // Trends
    const trends = createElement('div', 'trends', '');
    const trendsList = createElement('ul', '');
  
    const trendItems = [
      // ... Lista de tendencias
    ];
  
    trendItems.forEach(item => {
      const listItem = createElement('li', 'nav-list', item);
      trendsList.appendChild(listItem);
    });
  
    trends.appendChild(trendsList);
    rightContainer.appendChild(trends);
  
    // Right Footer
    const rightFooter = createElement('div', 'right-footer', '');
  
    // Footer Links
    const footerLinks = createElement('div', 'footer-links', '');
    footerLinks.innerHTML = '<a href="#" class="sub-text">Terms</a><a href="#" class="sub-text">Privacy policy</a><a href="#" class="sub-text">Ads info</a><a href="#" class="sub-text">more</a><i class="fas fa-chevron-down sub-text"></i>';
  
    // Footer Copyright
    const footerCopyright = createElement('div', 'footer-copyright', '');
    footerCopyright.innerHTML = '<p class="sub-text">&copy; 2023 Twitter, Inc.</p>';
  
    rightFooter.appendChild(footerLinks);
    rightFooter.appendChild(footerCopyright);
    rightContainer.appendChild(rightFooter);
  
    // Agregar al documento
    mainContainer.appendChild(rightContainer);
  
  });