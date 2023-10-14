/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('gridly');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        let article = document.createElement("article");
        let templeName = document.createElement("h3");
        templeName.textContent = temple.templeName;
        let image = document.createElement("img");
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", temple.location);

        article.appendChild(templeName);
        article.appendChild(image);

        templesElement.appendChild(article);

        document.querySelector("#temples").appendChild(article);
    });
};


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch(
        "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
    );
    templeList = await response.json();
    displayTemples(templeList);
};

getTemples();


/* reset Function */
const reset = () => {
    document.querySelector("#temples").innerHTML = "";
};

/* sortBy Function */
const sortBy = (temples) => {
    reset();
    let filter = document.querySelector("#sortBy").value;
    
    switch (filter) {
        case "utah":
            const utahTemples = temples.filter((temple) =>
                temple.location.toLowerCase().includes("utah")
            );
            displayTemples(utahTemples);
            break;
        case "notutah":
            const notUtah = temples.filter((temple) =>
                !temple.location.toLowerCase().includes("utah")
            );
            displayTemples(notUtah);
            break;
        case "older":
            const olderTemples = temples.filter((temple) =>
                new Date(temple.dedicated) < new Date(1950, 0, 1)
            );
            displayTemples(olderTemples);
            break;
        case "all":
            const allTemples = temples.filter((temple) =>
                temple.location.toLowerCase().includes("")
            );
            displayTemples(allTemples);
            break;
    }
}

getTemples();

/* Event Listener */

document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList) });