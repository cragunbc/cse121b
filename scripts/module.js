import displayPlayers from "./project.js";

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

//getPlayers();

document.querySelector("#sortBy").addEventListener("change", () => {sortBy(playerList) });
