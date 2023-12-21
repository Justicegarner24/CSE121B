/* W05: Programming Tasks */
const templesElement = document.querySelector("#temples");
let templeList = [];

const displayTemples = (temples) => {
    temples.forEach(temple => {
        const articleElement = document.createElement('article');
        const h3Element = document.createElement('h3');
        h3Element.textContent = temple.templeName;  
        const imageElement = document.createElement('img');
        imageElement.src = temple.imageUrl;
        imageElement.alt = temple.location;

        articleElement.appendChild(h3Element);
        articleElement.appendChild(imageElement);

        templesElement.appendChild(articleElement);
    });
}
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        templeList = await response.json();
        displayTemples(templeList);
      }
}

const reset = () => {
    templesElement.innerHTML = "";
}
const sortBy = () => {
    reset();
    const filter = document.querySelector("#sortBy").value;

    switch (filter) {
        case "utah":
            const utahTemples = templeList.filter(temple => temple.location.includes('Utah'));
            displayTemples(utahTemples);
            break;
        case "notutah":
            const nonUtahTemples = templeList.filter(temple => !temple.location.includes('Utah'));
            displayTemples(nonUtahTemples);
            break;
        case "older":
            const olderTemples = templeList.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
            displayTemples(olderTemples);
            break;
        case "all":
            displayTemples(templeList);
            break;
    }
}
getTemples();

document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });
