// Часть которая отвечает за показ линков у лидов "НАЧАЛО"

const stylesForLinks =  `position: absolute; top: 5px; right: 30%; Font-family: Roboto; display: flex; gap: 5px;`

const createLink = (linkName) => {
  const link = document.createElement('a')
  link.textContent = linkName
  link.target = '_blank'
  return link 
}

const linkForSearch = (title, geo) => {
    const links = document.createElement('div')
    links.style.cssText = stylesForLinks
    const googleLink = createLink('google')
    const yahooLink = createLink('yahoo!')
    googleLink.href = `https://www.google.com/search?q=${title.trim()} ${geo.trim()} linkedin`
    yahooLink.href = `https://search.yahoo.com/search?p=${title.trim()} ${geo.trim()} linkedin`
    links.append(yahooLink, googleLink)

    return links
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


  
