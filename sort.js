const locations = 
{
    // USA: '103644278', 
    // UK: '101165590', 
    // Singapore: '102454443',
    Nordic: {
        Norway: '103819153',
        Sweden: '105117694',
        Finland: '100456013',
        Denmark: '104514075',
        Iceland: '105238872',
    },
    EMEA: {
        Albania: '102845717',
        Algeria: '106395874',
    }
}


// Создаю интерфейс управления и стили к нему

const stylesForSortBar = 
{
    SORTBAR_WRAPPER: `position: fixed; width: 300px; height: 300px; top: 10%; left: -10%; background: gray; z-index: 99999; border-radius: 12px`,
    SORTBAR_WRAPPER_ACTIVE: `position: fixed; width: 300px; height: 300px; top: 10%; left: 0; background: gray; z-index: 99999; border-radius: 12px`,
    SORTBAR_CONTENT: `display: flex; flex-direction: column; height: 100%; color: #ffffff;`,
    SORTBAR_LABEL: `margin-top: auto; color: #ffffff;`,
    SORTBAR_INPUT: `color: #fff; border-color: #fff;`,
    SORTBAR_BUTTON: `margin: auto auto 0; color: #fff; border: 2px; border-radius: 8px; padding: 5px 10px; border-color: #fff;`,
}

const sortBar = document.createElement('div')
const sortBarContent = document.createElement('div')
const inputBar = document.createElement('input')
const labelBar = document.createElement('label')
const button = document.createElement('button')

inputBar.style.cssText = stylesForSortBar.SORTBAR_INPUT
sortBarContent.style.cssText = stylesForSortBar.SORTBAR_CONTENT
sortBar.style.cssText = stylesForSortBar.SORTBAR_WRAPPER
labelBar.style.cssText = stylesForSortBar.SORTBAR_LABEL
button.style.cssText = stylesForSortBar.SORTBAR_BUTTON

labelBar.textContent = 'Вставити гео з проекту'
inputBar.placeholder = "QEWQWEQWE"

button.textContent = 'confrim'



sortBarContent.append(labelBar, button)
labelBar.append(inputBar)
sortBar.append(sortBarContent)
document.querySelector('body').append(sortBar)

sortBar.addEventListener('mousemove', () => {
    sortBar.style.cssText = stylesForSortBar.SORTBAR_WRAPPER_ACTIVE
})
sortBar.addEventListener('mouseleave', () => {
    sortBar.style.cssText = stylesForSortBar.SORTBAR_WRAPPER
})

// Конец создания интерфейса

// Собития для интерфейса  

const filterByGeo = (g) => {
    let endGeo = []
    const inputGeo = g
    for (let keys in locations){
        for (let key in locations[keys]){
                if(inputGeo.includes(key)){
                    console.log(key)
                }
                
            }
    }
    // for (let key in locations){
    //     if(inputGeo.includes(key)){
    //         endGeo = [...endGeo, locations[key]]
    //     }
    // }

    const ggg = endGeo.join('"%2C"')
    const geo = `&geoUrn=%5B"${ggg}"%5D`
    const location = window.location.href
    const searchString = '&origin'
    const areaForPath = location.indexOf(searchString)
    const newLocation = location.slice(0, areaForPath) + geo + location.slice(areaForPath)
    console.log(newLocation)
    // window.location = newLocation
    // console.log(newLocation)
}


button.addEventListener('click', () => filterByGeo(inputBar.value))