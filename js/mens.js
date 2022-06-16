let database =[
    {
        brandname: "Pertemba US",
        name: "AWDis Hoods Mens Cross Neck Hoodie",
        color: "gray",
        price: 38.70,
        image: "https://img.shop.com/Image/280000/289900/289943/products/1907414225.jpg?plain&size=500x500",
        productBrand: "Hoods",
        qty:1,
    },
    {
        brandname: "BOBBI + BRICKA",
        name: "PENFIELD Mens Navy Active Regular Fit Athletic Shorts",
        color: "black",
        price: 24.98,
        image: "https://img.shop.com/Image/270000/278100/278132/products/1921847697.jpg?plain&size=1600x1600",
        productBrand: "Shorts",
        qty:1,
    },
    {
        brandname: "Tags Weekly",
        name: "American Eagle Mens Active Flex Casual Trouser Pants",
        color: "Beiges",
        price: 34.09,      
        image: "https://img.shop.com/Image/250000/253200/253251/products/1915739508.jpg?plain&size=2000x2000",
        productBrand: "Trouser Pants",
        qty:1,
    },
    {
        brandname: "Ranch & Home",
        name: "Kimes Ranch Western Sweatshirt Men Ombre Pockets Layton-Hood",
        color: "Beach Glass",
        price: 84.00,       
        image: "https://img.shop.com/Image/290000/292000/292019/products/1934242372.jpg?plain&size=1024x1024",
        productBrand: "Hoods",
        qty:1,
    },
    {
        brandname: "Macy's",
        name: "Boss x Nba Men's Tracksuit Bottoms",
        color: "Bone",
        price: 158.00,
        image: "https://img.shop.com/Image/240000/243400/243406/products/1926552073.jpg?plain&size=1466x1466",
        productBrand: "Tracksuit",
        qty:1,
    },
    {
        brandname: "BHFO",
        name: "K-Swiss Mens Sweatshirt Fitness Hoodie",
        color: "white",
        price: 12.99,
        image: "https://img.shop.com/Image/270000/273200/273200/products/1900647367.jpg?plain&size=1600x1600",
        productBrand: "Hoods",
        qty:1,
    },

    {
        brandname: "Macy's",
        name: "Boss Men's Nba Cotton Tracksuit Bottoms",
        color: "black",
        price: 158.00,
        image: "https://img.shop.com/Image/240000/243400/243406/products/1911504848.jpg?plain&size=1466x1466",
        productBrand: "Tracksuit",
        qty:1,
    },
    {
        brandname: "Macy's",
        name: "Boss x Nba Men's Cotton-Blend Tracksuit Bottoms",
        color: "black",
        price: 158.00,
        image: "https://img.shop.com/Image/240000/243400/243406/products/1927496193.jpg?plain&size=1466x1466",
        productBrand: "Tracksuit",
        qty:1,
    },
    {
        brandname: "BHFO",
        name: "Fila Mens Tennis Workout Shorts",
        color: "sdol",
        price: 10.12,      
        image: "https://img.shop.com/Image/270000/273200/273200/products/1915600809.jpg?plain&size=1600x1600",
        productBrand: "Shorts",
        qty:1,
    },
    {
        brandname: "BOBBI + BRICKA",
        name: "Navy Flat Front Easy Care Stretch Straight Leg Slim Fit Performance Stretch Pants",
        color: "Beach Glass",
        price: 38.98,       
        image: "https://img.shop.com/Image/270000/278100/278132/products/1935922794.jpg?plain&size=2000x2000",
        productBrand: "Trouser Pants",
        qty:1,
    },
    {
        brandname: "Macy's",
        name: "Under Armour Men's Rival Signature Shorts",
        color: "white",
        price: 13.93,
        image: "https://img.shop.com/Image/240000/243400/243406/products/1919774928.jpg?plain&size=1467x1467",
        productBrand: "Shorts",
        qty:1,
    },
    {
        brandname: "BHFO",
        name: "K-Swiss Mens Sweatshirt Fitness Hoodie",
        color: "white",
        price: 12.99,
        image: "https://img.shop.com/Image/270000/273200/273200/products/1900647367.jpg?plain&size=1600x1600",
        productBrand: "Hoods",
        qty:1,
    },
];
localStorage.setItem("product", JSON.stringify(database));
let display = JSON.parse(localStorage.getItem("product"));

display.map(function(elem){
    let  div = document.createElement("div");
    let img = document.createElement("img");
    img.src = elem.image;
    
    let name = document.createElement("span");
    name.innerHTML = elem.name;

    let brandname = document.createElement("p");
    brandname.innerText= `Solod by ${elem.brandname}`;

    let pricediv = document.createElement("div");
    pricediv.setAttribute("id", "pricediv");

    let  price = document.createElement("span");
    price.innerText=`$${elem.price}`;

    let shipping = document.createElement("p");
    shipping.innerText="Feer shipping";
    shipping.style.color="teal";

    let button = document.createElement("button");
    button.innerText="Choose Options";

    div.append(img,name,brandname,price,shipping,button)

    document.querySelector("#prodect").append(div)
})

