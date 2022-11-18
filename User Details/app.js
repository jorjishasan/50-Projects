'use strict';

let icon = '../assets/landmark.svg';
const API = "https://random-data-api.com/api/v2/users?response_type=json";

const qr = document.querySelector('.qrcode');
let coordinates = { lat: 24.8601263, lng: 92.0812289 };

function updateCard(user) {
    const avatar = document.querySelector('.avatar');
    const heading = document.querySelector('.heading');
    const job_title = document.querySelector('.job_title');
    const email = document.querySelector('.email');
    const mobile = document.querySelector('.mobile');


    avatar.src = user.avatar;
    heading.innerHTML = `${user.first_name} ${user.last_name}`;
    job_title.innerHTML = user.employment.title;
    email.innerHTML = user.email;
    mobile.innerHTML = user.phone_number;

    //color effect
    const randomHex = `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;

    document.body.style.background = randomHex;
    avatar.style.background = randomHex;
    document.querySelector('svg').style.fill = randomHex;

}

function updateQrCode(obj, qrText = "Jorjis Hasan 🐥") {
    const qrApi = `http://api.qrserver.com/v1/create-qr-code/?data=
    ${qrText}&size=65x65`;
    obj.src = qrApi;
}


async function updateUser(API) {
    let user = await (await fetch(API)).json();
    coordinates = user.address.coordinates;
    updateQrCode(qr, user.uid);
    updateCard(user);
    window.initMap = initMap;
}


function initMap() {


    const options = {
        zoom: 10,
        center: coordinates,

    };

    const map = new
        google.maps.Map(document.getElementById('map'), options);

    new google.maps.Marker({
        position: coordinates,
        map,
        icon: icon,
        title: 'Jorjis',
    });

}

const generateBtn = document.querySelector('.random-user');
const locateBtn = document.querySelector('.locate');
const map = document.getElementById('map');

generateBtn.addEventListener('click', () => {
    updateUser(API);

    if (map.classList.contains('show')) {
        map.classList.remove('show');
        map.classList.add('hidden');
    }
});

window.initMap = initMap;



locateBtn.addEventListener('click', function () {
    if (map.classList.contains('hidden')) {
        map.classList.remove('hidden');
        map.classList.add('show');
        map.classList.add('rotate-in-bottom');
    }
});




//--- to connect ---
// Jorjis Hasan
// speak.jorjis@gmail.com