const linkForSearch = (title, geo) => {
    googleLink = document.createElement('a')
    googleLink.href = `https://www.google.com/search?q=${title} ${geo} linkedin`
    googleLink.textContent = 'google'
    googleLink.classList.add('ok')
    return googleLink
}


function handleNewElements(mutationsList) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        const newElements = document.querySelectorAll('[data-view-name="search-entity-result-universal-template"]:not(.processed)');
        if (newElements.length > 0) {
          newElements.forEach(l => {
            s = l.querySelector('.linked-area');
            const title = s.querySelector('.entity-result__primary-subtitle').textContent;
            const geo = s.querySelector('.entity-result__secondary-subtitle').textContent;
            const links = linkForSearch(title, geo);
            l.append(links);
            l.classList.add('processed');
          });
        }
      }
    }
  }
  
  const observer = new MutationObserver(handleNewElements);
  
  observer.observe(document.body, { childList: true, subtree: true });
  
