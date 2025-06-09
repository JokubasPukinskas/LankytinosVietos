let closeBtn = document.getElementById("closeBtn")
let learnMoreTab = document.getElementById("learnMoreTab")
let LearnMoreBtn = document.querySelectorAll('#LearnMoreBtn');
let LearnMoreCard = document.getElementById("LearnMoreCard")
let carousel1 = document.getElementById("carousel1")

let stars = document.getElementById("stars")
let address = document.getElementById("address")
let placeName = document.getElementById("placeName")
let description = document.getElementById("description")
let googleMapsBtn = document.getElementById("GoogleMapsBtn")
let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")


let places = {
    MK_Museum: {
        Address: "V.Putvinskio g. 55, Kaunas",
        Name: "National M.K Čiurlionio art museum",
        Description: "The oldest art museum in Lithuania, founded in 1921 during the interwar period. It includes almost the entire collection of M. K. Čiurlionis' paintings.",
        DescriptionLong: "Longer description...",
        Rating: 5,
        GoogleMapsLink: "https://g.co/kgs/c27VcXW",
        Image1: "Images/Images/M. K Čiurlionio museum/20250603_135033.jpg",
        Image2: "Images/Images/M. K Čiurlionio museum/20250603_135012.jpg"
    },
    Devils_Museum: {
        Address: "V. Putvinskio g. 64, Kaunas",
        Name: "Devils museum",
        Description: "Unique museum with more than 3,000 devil's sculptures, writings from all around the world.",
        DescriptionLong: "Longer description...",
        Rating: 4,
        GoogleMapsLink: "https://g.co/kgs/PwQxcCY",
        Image1: "Images/Images/Devils museum/20250603_135522.jpg",
        Image2: "Images/Images/Devils museum/20250603_135530.jpg"
    },
    Bistrome: {
        Address: "Laisvės al. 37, Kaunas",
        Name: "Bistromė",
        Description: "Cozy spot on Laisvės alėja serving all-day brunch, grilled dishes, and creative plates in a relaxed, family-friendly atmosphere.",
        DescriptionLong: "Longer description...",
        Rating: 4,
        GoogleMapsLink: "https://g.co/kgs/LNh1div",
        Image1: "Images/Images/Bistronomė Restaurant/20250604_143646.jpg",
        Image2: "Images/Images/Bistronomė Restaurant/20250604_143650.jpg"
    },
    CofeeVire: {
        Address: "Laisvės al. 40, Kaunas",
        Name: "KAVA Virė",
        Description: "It serves great coffee, fresh desserts, and snacks in a chill, central Kaunas spot.",
        DescriptionLong: "Longer description...",
        Rating: 5,
        GoogleMapsLink: "https://g.co/kgs/nyx55Ny",
        Image1: "Images/Images/Coffee virė/20250603_142538.jpg",
        Image2: "Images/Images/Coffee virė/20250603_142547.jpg"
    },
    DIA: {
        Address: "Maironio g. 9, Kaunas",
        Name: "DIA Restaurant ",
        Description: "Upscale dining spot blending global flavors—French, Italian, Thai, Indian—into refined dishes. Expect elegant plating, attentive service, and a polished atmosphere.",
        DescriptionLong: "Longer description...",
        Rating: 5,
        GoogleMapsLink: "https://g.co/kgs/R9WpZjS",
        Image1: "Images/Images/Restaurant DIA/20250603_140347.jpg",
        Image2: "Images/Images/Restaurant DIA/20250603_140352.jpg"
    },
    Numan: {
        Address: "Nemuno g. 43, Kaunas",
        Name: "Nüman Restaurant",
        Description: "Modern, minimalist dining with a focus on seasonal, Nordic-inspired dishes. Creative tasting menus, exceptional bread, and thoughtful wine pairings in a sleek, understated space.",
        DescriptionLong: "Longer description...",
        Rating: 5,
        GoogleMapsLink: "https://g.co/kgs/z8ZfkEz",
        Image1: "Images/Images/Nüman Restaurant/20250604_150137.jpg",
        Image2: "Images/Images/Nüman Restaurant/20250604_150142.jpg"
    },
    Momo: {
        Address: "Karaliaus Mindaugo pr. 18a, Kaunas",
        Name: "Momo Grill",
        Description: "Sleek, contemporary grillhouse delivering expertly cooked steaks, fresh seafood, and bold seasonal plates. Stylish interior, attentive service, and a menu that balances simplicity with finesse.",
        DescriptionLong: "Longer description...",
        Rating: 5,
        GoogleMapsLink: "https://g.co/kgs/Gq31NU3",
        Image1: "Images/Images/Momo grill Restaurant/20250604_150532.jpg",
        Image2: "Images/Images/Momo grill Restaurant/20250604_150536.jpg"
    },
    HolyDonut: {
        Address: "M. Valančiaus g. 19, Kaunas",
        Name: "Holy Donut",
        Description: "Casual café known for its American-style donuts, bagels, and solid coffee. Offers a cozy atmosphere with friendly service and a variety of sweet and savory options.",
        DescriptionLong: "Longer description...",
        Rating: 4,
        GoogleMapsLink: "https://g.co/kgs/eNHFesq",
        Image1: "Images/Images/Holy donut/20250603_143457.jpg",
        Image2: "Images/Images/Holy donut/20250603_143503.jpg"
    },
    AzPark: {
        Address: "Radvilėnų pl. 15A, Kaunas",
        Name: "Ąžuolyno park",
        Description: "Expansive urban park with ancient oak groves, winding paths, and open lawns. Ideal for walking, jogging, or quiet reflection.",
        DescriptionLong: "Longer description...",
        Rating: 5,
        GoogleMapsLink: "https://g.co/kgs/TxND6JR",
        Image1: "Images/Images/Ąžuolyno park/20250604_134734.jpg",
        Image2: "Images/Images/Ąžuolyno park/20250604_134739.jpg"
    },
    DainuSlenis: {
        Address: "Dainų slėnis, Kaunas",
        Name: "Dainų slėnis",
        Description: "Amphitheater nestled in a forested park, featuring 10,000 seats and modern facilities. Hosts large-scale concerts, cultural events, and community gatherings in a natural setting.",
        DescriptionLong: "Longer description...",
        Rating: 4,
        GoogleMapsLink: "https://g.co/kgs/WWmkKWh",
        Image1: "Images/Images/Dainų slėnis/20250604_134317.jpg",
        Image2: "Images/Images/Dainų slėnis/20250604_134323.jpg"
    },
    DraugystesPark: {
        Address: "Taikos pr. 87B, Kaunas",
        Name: "Draugystės park",
        Description: "Expansive urban park featuring winding paths, tranquil ponds, and open lawns. Includes skate and parkour zones, children's playgrounds, and a sculpture garden. Ideal for active recreation and relaxation.",
        DescriptionLong: "Longer description...",
        Rating: 5,
        GoogleMapsLink: "https://g.co/kgs/v9Zy3gK",
        Image1: "Images/Images/Draugystes park/20250604_131616.jpg",
        Image2: "Images/Images/Draugystes park/20250604_131622.jpg"
    },
    March11Park: {
        Address: "Kovo 11-osios g. 25, Kaunas",
        Name: "March 11th Park",
        Description: "Small neighborhood park offering paved paths, basic lighting, and a modest playground. Serves as a local spot for casual walks, kids' play, and low-key community events.",
        DescriptionLong: "Longer description...",
        Rating: 4,
        GoogleMapsLink: "https://g.co/kgs/zrhybAe",
        Image1: "Images/Images/Girstutis Park/20250604_170409.jpg",
        Image2: "Images/Images/Girstutis Park/20250604_170416.jpg"
    },
    NemunoIsland: {
        Address: "Nemuno sala, Kaunas",
        Name: "Nemuno island",
        Description: "Modern urban park featuring sakura-lined paths, sports courts, skate and velotrack zones, a dog training area, and a 200-seat amphitheater. Includes an Olympic-standard aquatic center with spa facilities.",
        DescriptionLong: "Longer description...",
        Rating: 5,
        GoogleMapsLink: "https://g.co/kgs/HxKUJzt",
        Image1: "Images/Images/Nemuno island/20250603_145951.jpg",
        Image2: "Images/Images/Nemuno island/20250603_145958.jpg"
    },
    Neris: {
        Address: "Neris, Kaunas",
        Name: "Neris River",
        Description: "The Neris River flows through Kaunas, offering scenic riverside parks, walking and cycling paths, and peaceful spots near its confluence with the Nemunas. Popular for outdoor relaxation.",
        DescriptionLong: "Longer description...",
        Rating: 5,
        GoogleMapsLink: "https://g.co/kgs/AsAsY4P",
        Image1: "Images/Images/Neris river/20250603_144136.jpg",
        Image2: "Images/Images/Neris river/20250603_144142.jpg"
    },
    MuzicalPark: {
        Address: "Muzikinio teatro parkas, Kaunas",
        Name: "Park of the Musical Theater",
        Description: "Historic city park blending tranquil green space with cultural landmarks. Features a central fountain, memorials, and a playground. Hosts open-air events and concerts, making it a vibrant community gathering spot.",
        DescriptionLong: "Longer description...",
        Rating: 5,
        GoogleMapsLink: "https://g.co/kgs/4vc43fy",
        Image1: "Images/Images/Park of the Musical Theater/20250604_145202.jpg",
        Image2: "Images/Images/Park of the Musical Theater/20250604_145242.jpg"
    }
}

closeBtn.addEventListener("click", function () {
    learnMoreTab.classList.toggle("hidden")
    LearnMoreCard.classList.toggle("slide-in-top")
    stars.innerHTML = ""
})

document.addEventListener('click', function (event) {
    if (event.target.getAttribute('id') == "learnMoreTab") {
        learnMoreTab.classList.toggle("hidden")
        LearnMoreCard.classList.toggle("slide-in-top")
        stars.innerHTML = ""
    }
});

LearnMoreBtn.forEach(el => {
    el.addEventListener('click', () => {

        let name = el.name
        console.log(name)

        //Stars
        for (let i = 0; i < 5; i++) {
            if (i < places[name].Rating) {
                stars.innerHTML = stars.innerHTML + "★"
            } else {
                stars.innerHTML = stars.innerHTML + "☆"
            }
        }
        //Address
        address.innerHTML = places[name].Address
        //Place name
        placeName.innerHTML = places[name].Name
        //Description
        description.innerHTML = places[name].Description
        //Google maps button
        googleMapsBtn.setAttribute("href", places[name].GoogleMapsLink)
        //Images
        img1.src = places[name].Image1
        img2.src = places[name].Image2

        learnMoreTab.classList.toggle("hidden")
        LearnMoreCard.classList.toggle("slide-in-top")
    });
});