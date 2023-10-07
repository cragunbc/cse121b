/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Brantley Cragun",
    photo: "images/profilepicture.png",
    favoriteFoods: [
        'Pizza',
        'Hamburgers',
        'BBQ',
        'Hawaiian Food',
        'Cookies',
        'Chicken'],
    hobbies: [
        'Basketball',
        'Music',
        'Motorcycle Riding',
        'Sports',
        'RC Cars'],
    placesLived: [],
};



/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Chandler, AZ',
        length: '9 Months'
    }
);

myProfile.placesLived.push(
    {
        place: 'Syracuse, UT',
        length: '22 Years'
    }
);

myProfile.placesLived.push(
    {
        place: 'Woodbridge, VA',
        length: '7.5 Months'
    }
);

myProfile.placesLived.push(
    {
        place: 'Crystal City, VA',
        length: '6 Months'
    }
);

myProfile.placesLived.push(
    {
        place: 'Manassas, VA',
        length: '6 Months'
    }
);
/* DOM Manipulation - Output */

/* Name */

document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */

document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement('li');
    li.textContent = hobbie;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(placeLived => {
    let dt = document.createElement('dt');
    dt.textContent = placeLived.place;
    let dd = document.createElement('dd');
    dd.textContent = placeLived.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});



