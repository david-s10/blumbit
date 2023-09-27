const locations = 
{
    // USA: '103644278', 
    // UK: '101165590', 
    // Singapore: '102454443',
    // Nordic: {
    //     "Norway": "103819153",
    //     "Sweden": "105117694",
    //     "Finland": "100456013",
    //     "Denmark": "104514075",
    //     "Iceland": "105238872",
    // },
    EMEA: {
        "Albania": "102845717",
        "Algeria": "106395874",
        "Andorra": "106296266",
        "Angola": "105371935",
        "Austria": "103883259",
        "Bahrain": "100425729",
        "Belarus": "101705918",
        "Belgium": "100565514",
        "Benin": "101519029",
        "Bosnia and Herzegovina": "102869081",
        "Botswana": "105698121",
        "Bulgaria": "105333783",
        "Burkina Faso": "100587095",
        "Burundi": "100800406",
        "Cameroon": "105745966",
        "Cape Verde": "101679268",
        "Central African Republic": "100134827",
        "Chad": "104655384",
        "Comoros": "103069791",
        "Croatia": "104688944",
        "Cyprus": "106774002",
        "Czechia": "104508036",
        "Democratic Republic of the Congo": "101271829",
        "Denmark": "104514075",
        "Djibouti": "100371290",
        "Egypt": "106155005",
        "Equatorial Guinea": "105141335",
        "Eritrea": "104219996",
        "Estonia": "102974008",
        "Ethiopia": "100212432",
        "Faroe Islands": "104630756",
        "Finland": "100456013",
        "France": "105015875",
        "Gabon": "104471338",
        "Gambia": "106100033",
        "Georgia": "106315325",
        "Germany": "101282230",
        "Ghana": "105769538",
        "Gibraltar": "100674501",
        "Greece": "104677530",
        "Guernsey": "104019891",
        "Guinea": "100099594",
        "Guinea-Bissau": "100115557",
        "Hungary":"100288700",
        "Iceland": "105238872",
        "Iran": "101934083",
        "Iraq": "106725625",
        "Ireland": "104738515",
        "Isle of Man":  '106316481',
        "Israel": "101620260",
        "Italy": "103350119",
        "Ivory Coast": "103295271",
        "Jersey": "102705533",
        "Jordan": "103710677",
        "Kenya": "100710459",
        "Kuwait": "103239229",
        "Latvia": "104341318",
        "Lebanon": "101834488",
        "Lesotho": "103712797",
        "Liberia": "106579411",
        "Libya": "104036859",
        "Liechtenstein": "100878084",
        "Lithuania": "101464403",
        "Luxembourg": "104042105",
        "Macedonia": "103420483",
        "Madagascar": "105587166",
        "Malawi": "105992277",
        "Mali": "100770782",
        "Malta": "100961908",
        "Mauritania": "106950838",
        "Mauritius": "106931611",
        "Moldova": "106178099",
        "Monaco": "101352147",
        "Montenegro": "100733275",
        "Morocco": "102787409",
        "Mozambique": "100474128",
        "Namibia": "106682822",
        "Netherlands": "102890719",
        "Niger": "103550069",
        "Nigeria": "105365761",
        "Norway": "103819153",
        "Oman": "103619019",
        "Palestine": "93000000",
        "Poland": "105072130",
        "Portugal": "100364837",
        "Qatar": "104170880",
        "Romania": "106670623",
        "Rwanda": "103547315",
        "San Marino": "105730022",
        "Sao Tome & Principe": "106867470",
        "Saudi Arabia": "100459316",
        "Senegal": "103587512",
        "Serbia": "101855366",
        "Slovakia": "103119917",
        "Slovenia": "106137034",
        "Somalia": "104725424",
        "South Africa": "104035573",
        "Spain": "105646813",
        "Sudan": "106740205",
        "Swaziland": "106768907",
        "Sweden": "105117694",
        "Switzerland": "106693272",
        "Syria": "106714035",
        "Tanzania": "104604145",
        "Togo": "103603395",
        "Tunisia": "102134353",
        "Turkey": "102105699",
        "Uganda": "106943612",
        "Ukraine": "102264497",
        "United Arab Emirates": "104305776",
        "United Kingdom": "101165590",
        "UK": "101165590",
        "Western Sahara": "115461347",
        "Yemen": "105962095",
        "Zambia": "102120260",
        "Zimbabwe": "101367137",   
    },
    APAC: {
        "Afghanistan": "101240012",
        "Antarctica": "100428639",
        "Armenia": "103030111",
        "Australia": "101452733",
        "Azerbaijan": "103226548",
        "Bahrain": "100425729",
        "Bangladesh": "106215326",
        "Bhutan": "103613266",
        "Brunei": "103809722",
        "Cambodia": "102500897",
        "China": "102890883",
        "Christmas Island": "102893931",
        "Cocos": "103188119",
        "Cook Islands": "103118752",
        "Cyprus": "106774002",
        "Federated States of Micronesia": "102762290",
        "Fiji": "105733447",
        "Georgia": "106315325",
        "Heard Island and McDonald Islands": "100737582",
        "Hong Kong": "103291313",
        "Hong Kong SAR": "103291313",
        "India": "102713980",
        "Indonesia": "102478259",
        "Iraq": "106725625",
        "Iran": "101934083",
        "Israel": "101620260",
        "Japan": "101355337",
        "Jordan": "103710677",
        "Kazakhstan": "106049128",
        "Kiribati": "104742735",
        "Kuwait": "103239229",
        "Kyrgyzstan": "103490790",
        "Laos": "100664862",
        "Lebanon": "101834488",
        "Macao": "101316508",
        "Malaysia": "106808692",
        "Maldives": "102161637",
        "Marshall Islands": "106516799",
        "Myanmar": "104136533",
        "Mongolia": "102396337",
        "Nauru": "100348836",
        "Nepal": "104630404",
        "New Zealand": "105490917",
        "Niue": "102139488",
        "Norfolk Island": "116224156",
        "Oman": "103619019",
        "Pakistan": "101022442",
        "Palau": "106779877",
        "Palestina": "93000000",
        "Papua New Guinea": "100152180",
        "Philippines": "103121230",
        "Qatar": "104170880",
        "South Korea": "105149562",
        "Saudi Arabia": "100459316",
        "Singapore": "102454443",
        "Solomon Islands": "104980134",
        "Sri Lanka": "100446352",
        "Syrian Arab Republic": "100446352",
        "Tajikistan": "105925962",
        "Taiwan": "104187078",
        "Thailand": "105146118",
        "Timor-Leste": "101101678",
        "Tokelau": "100212364",
        "Tonga": "105646927",
        "Turkey": "102105699",
        "Turkmenistan": "105449295",
        "Tuvalu": "103609605",
        "United Arab Emirates": "104305776",
        "Uzbekistan": "107734735",
        "Vanuatu": "102185308",
        "Viet Nam": "104195383",
        "Samoa": "104031721",
        "Yemen": "105962095",
    },
    LATAM: {
        "Belize": "105912732",
        "Costa Rica": "101739942",
        "El Salvador": "106522560",
        "Guatemala": "100877388",
        "Honduras": "101937718",
        "Honduras": "101937718",
        "Mexico": "103323778",
        "Nicaragua": "105517145",
        "Panama": "100808673",
        "Argentina": "100446943",
        "Bolivia": "104379274",
        "Brazil": "106057199",
        "Chile": "104621616",
        "Colombia": "100876405",
        "Ecuador": "106373116",
        "French Guiana": "105001561",
        "Guyana": "105836293",
        "Paraguay": "104065273",
        "Peru": "102927786",
        "Suriname": "105530931",
        "Uruguay": "100867946",
        "Venezuela": "101490751",
        "Cuba": "106429766",
        "Dominican Republic": "",
        "Haiti": "100993490",
        "Guadeloupe": "104232339",
        "Martinique": "103091690",
        "Puerto Rico": "105245958", 
        "Saint-Barthélemy": "100936035",
        "Saint-Martin": "103917985",
    },
    unsorted: {
        "USA": "103644278",
        "Canada": "101174742",   
    }
}

const jobFunctions = {
    IT: ['Developer', 'programmer', 'Software', 'Cloud', 'IT', 'Information Technology', 'Solutions Architect', 'cyber security', 'information', 'security', 'infrastructure', 'system'],
    Marketing: ['Marketing', 'Digital', 'advertising', 'Content', 'Brand', 'SEO', 'Social Media', 'Public RelationsBgl Group', 'Communications', 'Media Relations', 'Market Research', 'EVENT', 'Demand Generation', 'buyer', 'Relationship', 'account'],
    Finance: ['Accountant', 'Accounting', 'Finance', 'Audit', 'Budget', 'Payroll', 'Investments', 'Revenue', 'Cash', 'Tax', 'Credit', 'Controller'],
    Sales: ['Sales', 'Insede Sales', 'Outside Sales', 'Business Development', 'Account', 'Distribution'],
    Customer: ['Customer Service', 'Call Center', 'Contact Center', 'Help Desk', 'Client', 'Customer Success', 'Customer Experience', 'Account', 'Client Relationship', 'Case', 'care', 'Customer Support', 'Relationship',],
    HR: ['Benefits', 'Compensation', 'Human Resources', 'HR', 'Total Rewards', 'Talent Management', 'Recruiter', 'Talent Acquisition', 'Sourcing', 'Chief People Officer', ]
}

// Создание интерфейса управления и стили к нему

if(window.location.href.indexOf('people') !== -1){
    const createInterface = () => {
        const wrapperForInterface = document.querySelector('[aria-labelledby="search-srp-prompt"]:not(.processed)')
        wrapperForInterface.classList.add('processed')
        const cssStyles = 
        
        `
        .next-blumbit_wrapper {padding: 5px; background: #fff; border: 1px solid #d6d6d3; border-radius: 6px;}
        .next-blumbit_wrapper.active {}
        .next-blumnit_content {display: flex; flex-direction: column; height: 100%; gap: 5px;}
        .next-blumbit_ul {display: flex; gap: 10px; }
        .next-blumbit_dropdown { display: none; flex-direction: column; position: absolute; top: 20px; left: -15px; background: #fff; gap: 2px; z-index: 2; border: 1px solid #d6d6d3; padding: 10px;}
        .next-blumbit_li {position: relative; list-style: none; cursor: pointer; font-size: 14px;}
        .next-blumbit_li:hover {color: #03f0f9;}
        .next-blumbit_joblist { position: relative; list-style: none; cursor: pointer; font-size: 14px; }
        .next-blumbit_joblist:hover .next-blumbit_dropdown { display: flex }
        .next-blumbit_form {margin-top: auto; display: flex; gap: 30px}
        .next-blumbit_input {border: 1px solid #d6d6d3; text-align: center; padding: 5px}
        .next-blumbit_input::placeholder {}
        .next-blumbit_button {margin: auto auto 0; ; border: 1px solid #d6d6d3; border-radius: 6px; padding: 5px 10px; }
        `
        const style = document.createElement('style')
        style.textContent = cssStyles
        document.head.appendChild(style)

        const keywordsLocal = localStorage.getItem('next-blumbit-keywords')
        const keywords = JSON.parse(keywordsLocal)

        const fabric = (tagName, className, textName) => {
            const element = document.createElement(tagName)
            element.classList.add(className)
            element.textContent = textName
            return element
        }

        const sortBar = fabric('div', 'next-blumbit_wrapper')
        const sortBarContent = fabric('div', 'next-blumnit_content')
        const formlBar = fabric('form', 'next-blumbit_form')
        const inputBar = fabric('input', 'next-blumbit_input')
        const inputTitle = fabric('input', 'next-blumbit_input')
        const keywordsList = fabric('ul', 'next-blumbit_dropdown')
        const keywordsNav = fabric('div', 'next-blumbit_joblist')
        const select = fabric('ul', 'next-blumbit_ul')
        const jobList = fabric('ul', 'next-blumbit_ul')
        inputBar.placeholder = 'Гео з проекту'
        inputTitle.placeholder = "Запам'ятати тайтл"
        keywordsNav.textContent = 'keywords'
        const button = fabric('button', 'next-blumbit_button', 'confrim')
        button.addEventListener('click', () => filterByGeo(inputBar.value, inputTitle.value))

        

        for (const key in keywords){
            const keyword = fabric('li', 'next-blumbit_li')
            keyword.textContent = keywords[key]
            keywordsList.append(keyword)
            keyword.addEventListener('click', () => filterByTitle(keyword.textContent))
        }

        for (const key in jobFunctions){
            const jf = fabric('li', 'next-blumbit_joblist')
            const jobTitleList = fabric('ul', 'next-blumbit_dropdown')
            jf.textContent = `${key}`
            jobList.append(jf)
            jf.append(jobTitleList)
            for (const title of jobFunctions[key]){
                const jobtitle = fabric('li', 'next-blumbit_li')
                jobtitle.textContent = title
                jobtitle.addEventListener('click', () => filterByTitle(jobtitle.textContent))
                jobTitleList.append(jobtitle)
                
            }
        }

        for (const key in locations){
            const option = fabric('li', 'next-blumbit_li')
            option.setAttribute('data-country', key)
            option.textContent=`${key}`
            option.addEventListener('click', () => selectGeoFromOption(option.getAttribute('data-country')))
            select.append(option)
        }



        sortBarContent.append(select, formlBar, keywordsNav, jobList, button)
        keywordsNav.append(keywordsList)
        formlBar.append(inputBar, inputTitle)
        sortBar.append(sortBarContent)
        wrapperForInterface.prepend(sortBar)
    }



    let previousUrl = '';
        const observer = new MutationObserver(function(mutations) {
            if (location.href !== previousUrl) {
                previousUrl = location.href;
                createInterface()
            }
        });
    const config = {subtree: true, childList: true};
    observer.observe(document, config);
}


// Конец создания интерфейса

// События для интерфейса  

const clearUrl = () => {
    const url = window.location.href
    const firstStringForFind = '&geoUrn'
    const secondStringForFind = '&origin'
    const firstFindIndex = url.indexOf(firstStringForFind)
    const SecondFindIndex = url.indexOf(secondStringForFind)
    if(firstFindIndex !== -1){
        const firstSliceUrl =  url.slice(0, firstFindIndex)
        const secondSliceUrl = url.slice(SecondFindIndex)
        return firstSliceUrl + secondSliceUrl 
        
    }else{
        return url
    }
}

const filterByGeo = (value, titleValue) => {

    if(titleValue){
        const keywords = titleValue.split(',')
        localStorage.setItem('next-blumbit-keywords', JSON.stringify(keywords))
    }

    if(value){
        let endGeo = []
        const inputGeo = value
        for (let keys in locations){
            for (let key in locations[keys]){
                    if(inputGeo.includes(key)){
                        console.log(key)
                        endGeo = [...endGeo, locations[keys][key]]
                    } 
            }
        }

        const location = clearUrl()
        
        const searchString = '&origin'
        const areaForPath = location.indexOf(searchString)
        if(areaForPath !== -1){
            const ggg = endGeo.join('"%2C"')
            const geo = `&geoUrn=%5B"${ggg}"%5D`
            const newLocation = location.slice(0, areaForPath) + geo + location.slice(areaForPath)
            console.log(newLocation)
            window.location = newLocation
        }
    }else{
        window.location = location
    }
}

const selectGeoFromOption = (value) => {
    let locs = []
    for (const country in locations){
        if(country === value){
            for(const c in locations[country]){
                locs = [...locs, c]
            }
        }
    }
    filterByGeo(locs.slice(','))
}

const filterByTitle = (title) => {
    const currentLocation = window.location.href
    const titleQuery = '&titleFreeText='
    const index = currentLocation.indexOf(titleQuery) + 1
    if(index !== -1){
        window.location = currentLocation + titleQuery + title
    }else{
        const newUrl = currentLocation.slice(0, index)
        window.location = newUrl + titleQuery + title
    }
}
