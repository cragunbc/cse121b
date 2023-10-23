const playersElement = document.getElementById('grid');
let playerList = [];

let pageTitle = "2023 - 2024 Utah Jazz Roster";
const pageElement = document.getElementById("pagetitle");
pageElement.innerHTML = `<strong>${pageTitle}<strong>`;


const displayPlayers = (players) => {
    players.forEach((player) => {
        let article = document.createElement("article");
        let playerName = document.createElement("h3");
        let playerPosition = document.createElement("h4");
        let playerCountry = document.createElement("h4");
        let playerNumber = document.createElement("h4");
        playerName.textContent = player.playerName;
        playerPosition.textContent = player.position;
        playerCountry.textContent = player.country;
        playerNumber.textContent = player.number;
        let image = document.createElement("img");
        image.setAttribute("src", player.imageUrl);
        image.setAttribute("alt", player.playerName);
        article.appendChild(playerName);
        article.appendChild(image);
        article.appendChild(playerNumber);
        article.appendChild(playerPosition);
        article.appendChild(playerCountry);

        playersElement.appendChild(article);

        document.querySelector("#players").appendChild(article);
    });
};


const getPlayers = async () => {
    const response = await fetch("https://run.mocky.io/v3/7fffef5c-e9ef-4661-a286-302af8d89edd");
    playerList = await response.json();
    displayPlayers(playerList);
};

//getPlayers();



const reset = () => {
     document.querySelector("#players").innerHTML = "";
};

const sortBy = (players) => {
     reset();
     let filter = document.querySelector("#sortBy").value;
    
     switch (filter) {
         case "all":
            const allPlayers = players.filter((player) =>
                player.country.includes("")
            );
            displayPlayers(allPlayers);
            break;
         case "USA":
            const playersUSA = players.filter((player) =>
                player.country.includes("USA")
            );
            displayPlayers(playersUSA);
            break;
         case "International":
            const internationalPlayers = players.filter((player) =>
                !player.country.includes("USA")
            );
            displayPlayers(internationalPlayers);
            break;
        case "tall":
            const tallPlayers = players.filter((player) =>
                player.heightInFeet >= 7
            );
            displayPlayers(tallPlayers);
            break;
        case "short":
            const shortPlayers = players.filter((player) =>
                player.heightInFeet < 7
            );
            displayPlayers(shortPlayers);
            break;
        case "guard":
            const guardPlayers = players.filter((player) =>
                player.position.includes("Guard")
            );
            displayPlayers(guardPlayers);
            break;
        case "forward":
            const forwardPlayers = players.filter((player) =>
                player.position.includes("Forward")
            );
            displayPlayers(forwardPlayers);
            break;
        case "center":
            const centerPlayers = players.filter((player) =>
                player.position.includes("Center")
            );
            displayPlayers(centerPlayers);
            break;
        case "highPoints":
            const highPointPlayer = players.filter((player) =>
                player.pointsPerGame >= 15
            );
            displayPlayers(highPointPlayer);
            break;
        case "highRebounds":
            const highReboundPlayer = players.filter((player) =>
                player.reboundsPerGame >= 4
            );
            displayPlayers(highReboundPlayer);
            break;
        case "highAssist":
            const highAssitPlayer = players.filter((player) =>
                player.assistsPerGame >= 4
            );
            displayPlayers(highAssitPlayer);
            break;
        case "longPro":
            const longProPlayer = players.filter((player) =>
                player.yearsPro >= 5
            );
            displayPlayers(longProPlayer);
            break;
    }
}

getPlayers();

document.querySelector("#sortBy").addEventListener("change", () => {sortBy(playerList) });

//export default displayPlayers;