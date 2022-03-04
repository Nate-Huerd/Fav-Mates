const Menu = [
    {
      "name": "VEG SOUP",
      "items": [
        "Sweet Corn Soup",
        "Manchow Soup",
        "Clear Soup",
        "Hot & Sour Soup",
        "Cream of Tomato Soup",
        "Veg Noodles Soup",
        "Veg Lemon Coriander Soup"
      ],
      "price": [90, 100, 80, 100, 80, 100, 130]
      // reference restaurantID. This is so that we don't have a middle table
      "restaurant_id": 1
    },
    {
      "name": "NON VEG SOUP",
      "items": [
        "Chicken Manchow Soup",
        "Chicken Sweet Corn Soup",
        "Chicken Hot & Sour Soup",
        "Chicken Clear Soup",
        "Chicken Lung Fung Soup",
        "Chicken Meatball Soup",
        "Chicken Noodles Soup",
        "Chicken Royal Soup",
        "Prawns Manchow Soup",
        "Chicken Lemon Coriander Soup",
        "Mutton Soup(Only Monday)"
      ],
      "price": [120, 110, 120, 100, 120, 130, 110, 120, 130, 140, 130]
    },
    {
      "name": "VEG STARTERS",
      "items": [
        "Veg Crispy",
        "Veg Spring Roll*",
        "Veg Lollipop",
        "Veg Paneer Chilli",
        "Veg Manchurian",
        "Veg Hot Garlic",
        "Paneer Satay*",
        "Paneer Schezwan",
        "Veg Hot Pan",
        "Veg Hara Bhara Kabab"
      ],
      "price": [150, 180, 130, 180, 140, 150, 190, 190, 220, 200]
    },
    {
      "name": "NON VEG STARTERS",
      "items": [
        "Chicken Chilli",
        "Chicken Satay*",
        "Chicken Lollipop",
        "Drum of Chicken",
        "Chicken Manchurian",
        "Chicken Salt & Pepper",
        "Chicken Red Pepper",
        "Chicken Spring Roll*",
        "Chicken Cripsy",
        "Chicken Hunan",
        "Chicken 65",
        "Chicken Ginger",
        "Chicken Shanghai",
        "Chicken Hot Garlic",
        "Prawns Chilli"
      ],
      "price": [
        180,
        190,
        170,
        190,
        180,
        180,
        180,
        200,
        210,
        200,
        180,
        180,
        180,
        180,
        240
      ]
    },
    {
      "name": "TANDOOR FARMAISH",
      "items": [
        "Chicken Tandoori(H)",
        "Chicken Tandoori(F)",
        "Chicken Hyderabadi Tandoori(H)*",
        "Chicken Hyderabadi Tandoori(F)*",
        "Afghani Tandoori(H)",
        "Afghani Tandoori(F)",
        "Chicken Seekh Kebab",
        "Chicken Garlic Kebab",
        "Chicken Banjara Kebab",
        "Chicken Tikka",
        "Chicken Tangdi Kebab",
        "Chicken Pahadi Kebab",
        "Chicken Reshmi Kebab",
        "Chicken Malai Kebab",
        "Chicken Malwani Kebab",
        "Chicken Ginger Kebab",
        "Mutton Seekh Kebab",
        "Prawns Tandoori",
        "Paneer Tikka",
        "Monsoon Special Platter",
        "Chicken Stuffed kebab"
      ],
      "price": [
        230,
        400,
        260,
        430,
        260,
        430,
        220,
        240,
        250,
        220,
        250,
        250,
        240,
        230,
        230,
        230,
        270,
        280,
        220,
        590,
        250
      ]
    },
    {
      "name": "THE VEGGIE BASH",
      "items": [
        "Veg Kadai",
        "Veg Handi",
        "Veg Kolhapuri",
        "Veg Tiranga",
        "Mix Vegetable",
        "Veg Mushroom Masala",
        "Baby Corn Masala",
        "Paneer Masala",
        "Paneer Kadai",
        "Paneer Handi",
        "Paneer Pasanda",
        "Palak Paneer Masala",
        "Paneer Mushroom Masala",
        "Paneer Tikka Masala",
        "Daal Fry",
        "Daal Tadka",
        "Daal Kolhapuri"
      ],
      "price": [
        140,
        150,
        140,
        180,
        140,
        160,
        150,
        170,
        180,
        180,
        190,
        150,
        180,
        190,
        100,
        110,
        120
      ]
    },
    {
      "name": "THE CHICKEN BASH",
      "items": [
        "Chicken Masala",
        "Chicken Handi(H)",
        "Chicken Handi(F)",
        "Chicken Kadai",
        "Chicken Kolhapuri",
        "Chicken Hyderabadi",
        "Chicken Tikka Masala",
        "Chicken Roast Masala(H)",
        "Chicken Roast Masala(F)",
        "Chicken Afghani",
        "Chicken Rara*",
        "Chicken Seekh Kebab Masala",
        "Murgh Musallam(H)",
        "Murg Musallam(F)",
        "Chicken Mughlai",
        "Chicken Patiala",
        "Butter Chicken(H)",
        "Butter Chicken(F)",
        "Chicken Aftabi",
        "Chicken Bhuna",
        "Chicken Methi Masala",
        "Egg Masala"
      ],
      "price": [
        220,
        280,
        540,
        230,
        250,
        260,
        270,
        300,
        560,
        230,
        250,
        250,
        300,
        560,
        230,
        280,
        320,
        580,
        260,
        260,
        230,
        150
      ]
    },
    {
      "name": "THE MUTTON BASH",
      "items": [
        "Mutton Masala",
        "Mutton Handi(H)",
        "Mutton Handi(F)",
        "Mutton Kadai",
        "Mutton Kolhapuri",
        "Mutton Hyderabadi",
        "Mutton Kheema",
        "Mutton Afghani",
        "Mutton Rara",
        "Mutton Seekh Kebab Masala",
        "Mutton Mughlai",
        "Mutton Patiala",
        "Rogan Gosht"
      ],
      "price": [260, 320, 610, 270, 260, 270, 280, 280, 300, 300, 280, 320, 260]
    },
    {
      "name": "THE MALVANI TADKA",
      "items": [
        "Prawns Koliwada",
        "Surmai Handi(H)",
        "Surmai Handi(F)",
        "Pomfret Handi(H)",
        "Pomfret Handi(F)",
        "Surmai Tawa Fry",
        "Pomfret Tawa Fry",
        "Chicken Masala",
        "Chicken Handi(H)",
        "Chicken Handi(F)",
        "Mutton Goan Curry",
        "Surmai Goan Curry",
        "Pomfret Goan Curry",
        "Prawns Goan Curry"
      ],
      "price": [
        250,
        350,
        650,
        350,
        650,
        550,
        550,
        200,
        280,
        540,
        260,
        260,
        260,
        290
      ]
    },
    {
      "name": "UNIQUE DESSERT",
      "items": [
        "Sizzling Brownie",
        "Deep Fried Ice Cream(2pcs)",
        "Deep Fried Ice Cream(3pcs)",
        "Chocolate Cigar(3pcs)",
        "Chocolate Explosion Waffle(H)",
        "Chocolate Explosion Waffle(F)",
        "Ice Cream(1scp)",
        "Ice Cream(2scp)"
      ],
      "price": [145, 90, 120, 130, 180, 300, 50, 80]
    },
    {
      "name": "BASMATI KHAZANA",
      "items": [
        "Veg Pulav",
        "Veg Biryani*",
        "Chicken Dum Biryani",
        "Chicken Tikka Biryani",
        "Chicken Tangdi Biryani",
        "Mutton Dum Biryani*",
        " Egg Biryani",
        "Prawns Biryani",
        "Paneer Biryani",
        "Jeera Rice",
        "Steam Rice"
      ],
      "price": [100, 120, 180, 200, 200, 220, 140, 220, 170, 90, 80]
    },
    {
      "name": "CHINESE VEG RICE",
      "items": [
        "Veg Fried Rice",
        "Veg Schezwan Rice",
        "Veg Munchurian Rice",
        "Veg Tripple Rice",
        "Veg Chilli Rice",
        "Butter Garlic Fried Rice",
        "Veg 8 to 9 Fried Rice",
        "Veg Bamboo Fried Rice",
        "Veg Hot Garlic Fried Rice"
      ],
      "price": [140, 160, 180, 190, 180, 170, 160, 190, 160]
    },
    {
      "name": "CHINESE NON VEG RICE",
      "items": [
        "Chicken Fried Rice",
        "Chicken Schezwan Rice",
        "Chicken Tripple Rice",
        "Chicken Chilli Rice",
        "Chicken Manchurian Rice",
        "Chicken Hot Garlic Rice",
        "Chicken Butter Garlic Rice",
        "Chicken 8 to 9 Rice",
        "Chicken Bamboo Rice",
        "Prwans Fried Rice",
        "Prwans Schezwan Rice",
        "Prawns Tripple Fried Rice",
        "Egg Fried Rice",
        "Egg Fried Schezwan Rice"
      ],
      "price": [
        170,
        180,
        200,
        190,
        190,
        180,
        190,
        170,
        200,
        200,
        220,
        230,
        160,
        180
      ]
    },
    {
      "name": "CHINESE VEG NOODLES",
      "items": [
        "Veg Hakka Noodles",
        "Veg Schezwan Noodles",
        "Veg Chilli Noodles",
        "Veg Manchurian Noodles",
        "Veg Tripple Noodles",
        "Veg 8 to 9 Noodles"
      ],
      "price": [150, 160, 180, 180, 190, 160]
    },
    {
      "name": "CHINESE NON VEG NOODLES",
      "items": [
        "Chicken Hakka Noodles",
        "Chicken Schezwan Noodles",
        "Chicken Chilli Noodles",
        "Chicken Manchurian Noodles",
        "Chicken Tripple Noodles",
        "Chicken 8 to 9 Noodles",
        "Prawns Noodles"
      ],
      "price": [170, 180, 200, 200, 210, 230, 180]
    },
    {
      "name": "TANDOORI ROTI",
      "items": [
        "Roti",
        "Naan",
        "Butter Naan",
        "Garlic Naan",
        "Butter Garlic Naan",
        "Aloo Paratha*",
        "Methi Paratha",
        "Pudina Paratha"
      ],
      "price": [15, 25, 35, 35, 45, 60, 60, 60]
    },
    {
      "name": "GARLIC BREAD",
      "items": ["Garlic Bread", "Cheese Garlic Bread"],
      "price": [50, 70]
    },
    {
      "name": "ITALIAN PASTA(VEG)",
      "items": [
        "Pasta Classica",
        "Pasta Hot n Spicy",
        "Pasta Arabiata",
        "Pesto Pasta",
        "Pasta Alfredo",
        "Pasta De Pina",
        "Pasta Baked mac",
        "Monsoon Pink Pasta"
      ],
      "price": [125, 160, 160, 170, 180, 180, 190, 200]
    },
    {
      "name": "ITALIAN PASTA(NON VEG)",
      "items": [
        "Pasta Classica",
        "Pasta Hot n Spicy",
        "Pasta Arabiata",
        "Pesto Pasta",
        "Pasta Alfredo",
        "Pasta De Pina",
        "Pasta Baked mac",
        "Monsoon Pink Pasta"
      ],
      "price": [145, 180, 180, 190, 200, 200, 210, 220]
    },
    {
      "name": "ITALIAN PIZZS(VEG)",
      "items": [
        "Pizza Margarita",
        "Pizza BBQ",
        "Pasta Mexicana",
        "Pasta Volcano",
        "Pasta Farm Fresh",
        "Pasta Lavena",
        "Pasta Noodles"
      ],
      "price": [120, 150, 150, 170, 180, 190, 210]
    },
    {
      "name": "ITALIAN PIZZS(NON VEG)",
      "items": [
        "Pizza Margarita",
        "Pizza BBQ",
        "Pasta Mexicana",
        "Pasta Volcano",
        "Pasta Farm Fresh",
        "Pasta Lavena",
        "Pasta Noodles"
      ],
      "price": [140, 170, 170, 190, 200, 210, 230]
    },
    {
      "name": "MOJITO",
      "items": [
        "Virgin Mint",
        "Blood Orange",
        "Blue Valley",
        "Grandine",
        "Orange",
        "Green Apple",
        "Water Melon"
      ],
      "price": [95, 95, 95, 95, 95, 95, 95]
    }
  ];

  module.exports = Menu;

  /*
  const Menu = require('../seeds/menu-seeds');
   
   console.log(menu[0].name);   // it will return "VEG SOUP"
   console.log(menu[0].items);  // it will return [ 'Sweet Corn Soup','Manchow Soup','Clear Soup','Hot & Sour Soup','Cream of Tomato Soup','Veg Noodles Soup','Veg Lemon Coriander Soup' ]
   console.log(menu[0].price);  // it will return [ 90, 100, 80, 100, 80, 100, 130 ]
   
   similarly you can get remaining objects.
   */