// Часть которая отвечает за показ линков у лидов "НАЧАЛО"

const stylesForLinks =  `position: absolute; top: 10px; right: 30px; Font-family: Roboto;`

const linkForSearch = (title, geo) => {
    googleLink = document.createElement('a')
    googleLink.href = `https://www.google.com/search?q=${title.trim()} ${geo.trim()} linkedin`
    googleLink.textContent = 'google'
    googleLink.style.cssText = stylesForLinks
    return googleLink
}



function handleNewElements(mutationsList) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        const newElements = document.querySelectorAll('[data-view-name="search-entity-result-universal-template"]:not(.processed)');
        if (newElements.length > 0) {
          newElements.forEach(leadArrea => {
            const infoArea = leadArrea.querySelector('.linked-area');
            leadArrea.style.position = 'relative'
            const title = infoArea.querySelector('.entity-result__primary-subtitle').textContent;
            const geo = infoArea.querySelector('.entity-result__secondary-subtitle').textContent;
            const links = linkForSearch(title, geo);
            leadArrea.append(links);
            leadArrea.classList.add('processed');
          });
        }
      }
    }
  }

  
  const observer = new MutationObserver(handleNewElements);
  
  observer.observe(document.body, { childList: true, subtree: true });

 // Часть которая отвечает за показ линков у лидов "КОНЕЦ"


  
