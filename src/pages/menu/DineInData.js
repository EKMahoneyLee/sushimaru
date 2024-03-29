const DineInData = [
    {
      id: "1",
      category: "Appetizers",
      title: "Vegetable Tempura",
      price: "7.50",
      img: require("../../assets/images/Appetizers/veg-tempura.jpg"),
      desc: "",
    },
    {
        id: "2",
        category: "Appetizers",
        title: "Shrimp Tempura",
        price: "9.50",
        img: require("../../assets/images/Appetizers/shrimp-tempura.jpg"),
        desc: " ",
      },
      {
        id: "3",
        category: "Appetizers",
        title: "Gyoza Pork or Vegetable (5pcs)",
        price: "7.50",
        img: "",
        desc: " ",
      },
      {
        id: "4",
        category: "Appetizers",
        title: "Spring Roll (3pcs)",
        price: "7.95",
        img: require("../../assets/images/Appetizers/springRoll.jpg"),
        desc: " ",
      },
      {
        id: "5",
        category: "Appetizers",
        title: "Edamame",
        price: "5.95",
        img: "",
        desc: " ",
      },
      {
        id: "6",
        category: "Appetizers",
        title: "Agedashi Tofu",
        price: "7.50",
        img: "",
        desc: "Fried bean crud with tempura sauce",
      },
      {
        id: "7",
        category: "Appetizers",
        title: "Baby Octopus ",
        price: "10.95",
        img:  require("../../assets/images/Appetizers/octopus.jpg"),
        desc: "Lightly deep fried baby octopus mixed with garlic, onion, jalapeno, and cilantro",
      },
      {
        id: "8",
        category: "Appetizers",
        title: "Chicken Karaage",
        price: "10.95",
        img: require("../../assets/images/Appetizers/karaage.png"),
        desc: " ",
      },
      {
        id: "9",
        category: "Appetizers",
        title: "Spicy Tiger Shrimp (4pcs)",
        price: "10.95",
        img: "",
        desc: "Battered and deep fried tiger shrimp topped with spicy sauce (jalapeno, cilantro) ",
      },
      {
        id: "10",
        category: "Appetizers",
        title: "Softshell Crab",
        price: "14.95",
        img: "",
        desc: "Lightly battered and deep-fried softshell crab  with plum sauce ",
      },
      {
        id: "11",
        category: "Soup & Salad",
        title: "Miso Soup/Spicy Miso Soup",
        price: "2.50/3.50",
        img: "",
        desc: " ",
      },
      {
        id: "12",
        category: "Soup & Salad",
        title: "Avocado House Salad",
        price: "9.95",
        img: require("../../assets/images/Salad/avocado-house.png"),
        desc: " ",
      },
      {
        id: "13",
        category: "Soup & Salad",
        title: "Seaweed Salad",
        price: "5.95",
        img: "",
        desc: " ",
      },
      {
        id: "14",
        category: "Soup & Salad",
        title: "House Salad",
        price: "5.95",
        img: "",
        desc: " ",
      },
      {
        id: "15",
        category: "Vegetarian Roll (야채롤)",
        title: "Sweet Potato Roll (6pcs)",
        price: "6.95",
        img: "",
        desc: " ",
    },
    {
        id: "16",
        category: "Vegetarian Roll (야채롤)",
        title: "Avocado Roll (6pcs) ",
        price: "6.95",
        img: "",
        desc: " ",
    },
    {
        id: "17",
        category: "Vegetarian Roll (야채롤)",
        title: "Sweet Creamy (8pcs)",
        price: "8.95",
        img: "",
        desc: "Sweet potato tempura, avocado, and cream cheese ",
    },
    {
        id: "18",
        category: "Vegetarian Roll (야채롤)",
        title: "Veggie Dragon Roll (8pcs)",
        price: "10.95",
        img: "",
        desc: "Sweet potato tempura, cucumber, avocado, assorted grilled veggies, and tofu pouch ",
    },
    {
        id: "19",
        category: "Vegetarian Roll (야채롤)",
        title: "Spicy Crispy (6pcs)",
        price: "7.95",
        img: "",
        desc: "Spicy mayo, tempura bits and bread crumbs<br>Choose 1: Avocado, Cucumber ",
    },
    {
        id: "20",
        category: "Vegetarian Roll (야채롤)",
        title: "Kimchi-Gimbab Roll (8pcs)",
        price: "10.95",
        img: "",
        desc: "kimchi with sesame oil, yellow radish, cream cheese and assorted vegetables ",
    },
    {
        id: "21",
        category: "Traditional Roll (고전롤)",
        title: "California Roll / Deep Fried California Roll",
        price: "6.95/7.95",
        img: "",
        desc: "Avocado, crab meat, cucumber, fish roe",
    },
    {
        id: "22",
        category: "Traditional Roll (고전롤)",
        title: "Spicy Salmon Roll (6pcs)",
        price: "7.50",
        img: "",
        desc: "Salmon, tempura bits with spicy mayo, Green onion ",
    },
    {
        id: "23",
        category: "Traditional Roll (고전롤)",
        title: "Spicy Tuna Roll (6pcs)",
        price: "8.50",
        img: "",
        desc: "Smoked Salmon, cucumber, cream cheese, green onion ",
    },
    {
        id: "24",
        category: "Traditional Roll (고전롤)",
        title: "Unagi Roll (6pcs)",
        price: "8.50",
        img: "",
        desc: "Bbq eel, avocado",
    },
    {
        id: "25",
        category: "Traditional Roll (고전롤)",
        title: "Alaska Roll (6pcs)",
        price: "7.50",
        img: "",
        desc: "Salmon, avocado, cucumber ",
    },
    {
        id: "26",
        category: "Traditional Roll (고전롤)",
        title: "Dynamite Roll (8pcs)",
        price: "10.50",
        img: "",
        desc: "2 Pieces of shrimp tempura, cucumber, avocado",
    },
    {
        id: "27",
        category: "Modern Special Roll (모던롤)",
        title: "Maru Special Roll (8pcs)",
        price: "13.95",
        img: "",
        desc: "Avocado, cucumber, salmon topped with tuna, shrimp, fish roe, jalapeno, onion, seaweed salad with sweet wasabi sauce",
    },
    {
        id: "28",
        category: "Modern Special Roll (모던롤)",
        title: "Sweet Cheese Roll",
        price: "13.95",
        img: "",
        desc: "Avocado, cucumber, crab meat, tempura bits, fish roe, green onion with Mozzarella cheese and creamy sweet cheese sauce", 
        desc1: "fish topping: Snapper, Butter Fish, Scallop, Salmon ",
    },
    {
        id: "29",
        category: "Modern Special Roll (모던롤)",
        title: "Hawaiian Roll (8pcs)",
        price: "14.95",
        img: "",
        desc: "Deep fried coconut, mango, shrimp tempura, spicy chopped scallop with green onion, crab meat, cucumber",
    },
    {
        id: "30",
        category: "Modern Special Roll (모던롤)",
        title: "Gentle Lob-Star (8pcs)",
        price: "16.95",
        img: "",
        desc: "Deep fried rock lobster with avocado, cucumber and tobikko, garnished with ginger, crispy garlic, green onion",
    },
    {
        id: "31",
        category: "Modern Special Roll (모던롤)",
        title: "Mini Kamikaze (8pcs)",
        price: "11.95",
        img: "",
        desc: "Breaded deep fried sushi roll with salmon, tuna, snapper, avocado, cream cheese, jalapeno, topped with spicy sauce",
    },
    {
        id: "32",
        category: "Modern Special Roll (모던롤)",
        title: "Brave Shrimp Roll (8pcs)",
        price: "14.95",
        img: "",
        desc: "Shrimp, crab meat, cheese, cucumber, avocado, tempura bits, jalapeno, and spicy sauce",
    },
    {
        id: "33",
        category: "Modern Special Roll (모던롤)",
        title: "Rainbow Roll (8pcs)",
        price: "14.95",
        img: "",
        desc: "California roll wrapped in salmon, tuna, shrimp, snapper, and avocado with fish roe",
    },
    {
        id: "34",
        category: "Modern Special Roll (모던롤)",
        title: "Secret Garden (8pcs)",
        price: "15.95",
        img: "",
        desc: "Softshell crab, eel, cucumber, avocado, salmon, fish roe, green onion, and tempura bits",
    },
    {
        id: "35",
        category: "Modern Special Roll (모던롤)",
        title: "Sushi Blossom (8pcs)",
        price: "14.95",
        img: "",
        desc: "Smoked salmon, asparagus, breaded cream cheese, and avocado with crispy garlic and Japanese spicy salsa",
    },
    {
        id: "36",
        category: "Modern Special Roll (모던롤)",
        title: "Tuna/salmon Tataki (8pcs)",
        price: "14.95/13.95",
        img: "",
        desc: "Lightly breaded and slightly deep fried tuna or salmon with Japanese spicy salsa",
    },
    {
        id: "37",
        category: "Modern Special Roll (모던롤)",
        title: "Dragon Roll ( 8pcs )",
        price: "12.95/13.95",
        img: "",
        desc: "Shrimp tempura, avocado, cucumber, crab meat with your choice of",
        desc1: "1: Gold(Salmon) / White(Snapper) / Green(Avocado) or 2: Black(Eel) / Red(Tuna)"
    },
    {
        id: "38",
        category: "Sushi Maru TODAY (오늘은 마루 스시)",
        title: "Maru ROLL DAY",
        price: "16.50",
        img: "",
        desc: "14 Sushi Roll: 8 Dynamite, 3 California Roll, 3 Spicy Salmon Roll",
        desc1: "Served with Seaweed salad and Miso soup",
    },
    {
        id: "39",
        category: "Sushi Maru TODAY (오늘은 마루 스시)",
        title: "Maru VEGGIE DAY",
        price: "17.50",
        img: "",
        desc: "12 Sushi Roll: 6 Sweet potato Roll, 3 Spicy Avo Crispy, 3 Spicy Cuke Crispy",
        desc1: "3 Veggie Nigiri:  1 Inari Pouch, 1 Avocado, 1 Cucumber",
        desc2: "Served with Seaweed salad and Miso soup",
    },
    {
        id: "40",
        category: "Sushi Maru TODAY (오늘은 마루 스시)",
        title: "Maru SUSHI DAY",
        price: "19.50",
        img: "",
        desc: "6 Nigiri Sushi: 1 Salmon, 1 Tuna, 1 Shrimp, 1 Unagi, 1 Butter Fish, 1 Snapper",
        desc1: "6 Sushi Roll: 3 Spicy Tuna, 3 Spicy Salmon",
        desc2: "2 Sashimi: 2 Salmon",
        desc3: "Served with Seaweed salad and Miso soup",
    },
    {
        id: "41",
        category: "Sushi Maru TODAY (오늘은 마루 스시)",
        title: "Maru SASHIMI DAY",
        price: "24.50",
        img: "",
        desc: "13 Sashimi: 3 Tuna, 3 Salmon, 3 Butter Fish, 2 Snapper, 2 Surf Clam ",
        desc1: "Served with Seaweed salad and Miso soup",
    },
    {
        id: "42",
        category: "Sushi Maru TODAY (오늘은 마루 스시)",
        title: "Maru Happy DAY",
        price: "60.50",
        img: "",
        desc: "14 Sushi Roll : 6 California , 4 Black Dragon , 4 Gold Dragon",
        desc1: "10 Nigiri Sushi : 2 Salmon, 2 Tuna, 2 Snapper, 2 Red Shrimp, 2 Butter Fish",
        desc2: "10 Sashimi : 2 Salmon, 2 Tuna, 2 Snapper, 2 Surf Clam, 2 Butter Fish<",
        desc3: "Served with Seaweed salad and Miso soup",
    },
    {
        id: "43",
        category: "Sashimi (사시미)/Nigiri Sushi(초밥) ",
        title: "Tuna-Maguro",
        price: "10.95 / 7.95",
        img: "",
        desc: "Sashimi(3pcs) / Nigiri(2pcs)",
    },
    {
        id: "44",
        category: "Sashimi (사시미)/Nigiri Sushi(초밥) ",
        title: "Salmon-Sake",
        price: "9.95 / 7.50",
        img: "",
        desc: "Sashimi(3pcs) / Nigiri(2pcs)",
    },
    {
        id: "45",
        category: "Sashimi (사시미)/Nigiri Sushi(초밥) ",
        title: "Boiled Shrimp-Ebi",
        price: "7.95 / 6.50",
        img: "",
        desc: "Sashimi(3pcs) / Nigiri(2pcs)",
    },
    {
        id: "46",
        category: "Sashimi (사시미)/Nigiri Sushi(초밥) ",
        title: "White Tuna-Albacore",
        price: "9.95 / 7.50",
        img: "",
        desc: "Sashimi(3pcs) / Nigiri(2pcs)",
    },
    {
        id: "47",
        category: "Sashimi (사시미)/Nigiri Sushi(초밥) ",
        title: "Bbq Eel-Unagi",
        price: "9.50 / 8.50",
        img: "",
        desc: "Sashimi(3pcs) / Nigiri(2pcs)",
    },
    {
        id: "48",
        category: "Sashimi (사시미)/Nigiri Sushi(초밥) ",
        title: "Surf Clam-Hokkigai",
        price: "8.50 / 6.50",
        img: "",
        desc: "Sashimi(3pcs) / Nigiri(2pcs)",
    },
    {
        id: "49",
        category: "Sashimi (사시미)/Nigiri Sushi(초밥) ",
        title: "Butter Fish-Esscolar",
        price: "9.50 / 7.50 ",
        img: "",
        desc: "Sashimi(3pcs) / Nigiri(2pcs)",
    },
    {
        id: "50",
        category: "Sashimi (사시미)/Nigiri Sushi(초밥) ",
        title: "Tofu Pouch-Inari",
        price: "/ 4.50",
        img: "",
        desc: "",
    },
    {
        id: "51",
        category: "Ramen (라멘)",
        title: "Tonkotsu Ramen",
        price: "15.95",
        img: "",
        desc: "Chashu (pork belly), with homemade pork broth, boiled egg, bamboo shoot, black mushroom, corn, green onion",
    },
    {
        id: "52",
        category: "Ramen (라멘)",
        title: "Kimchi-Shoyu Ramen",
        price: "16.95",
        img: "",
        desc: "Slow cooked beef short ribs, with homemade beef broth, bean sprouts, corn, boiled egg, green onion, Kimchi",
    },
    {
        id: "53",
        category: "Yaki-Udon or Soba (볶음면) ",
        title: "Vegetable Yaki-Udon",
        price: "12.95",
        img: "",
        desc: "",
    },
    {
        id: "54",
        category: "Yaki-Udon or Soba (볶음면) ",
        title: "Vegetable Soba",
        price: "12.95",
        img: "",
        desc: "",
    },
    {
        id: "55",
        category: "Yaki-Udon or Soba (볶음면) ",
        title: "Beef / Chicken Yaki-Udon",
        price: "13.95 ",
        img: "",
        desc: "",
    },
    {
        id: "56",
        category: "Yaki-Udon or Soba (볶음면) ",
        title: "Beef / Chicken Soba",
        price: "13.95 ",
        img: "",
        desc: "",
    },
    {
        id: "57",
        category: "Yaki-Udon or Soba (볶음면) ",
        title: "Shrimp Yaki-Udon",
        price: "15.95",
        img: "",
        desc: "",
    },
    {
        id: "58",
        category: "Yaki-Udon or Soba (볶음면) ",
        title: "Shrimp Soba",
        price: "15.95",
        img: "",
        desc: "",
    },
    {
        id: "59",
        category: "Maru Don Special (마루 덮밥 정식)",
        title: "Teriyaki-Don",
        price: "20.50",
        img: "",
        desc: "Choose 1 : Chicken, Beef, Salmon, shrimp",
        desc1: "Served with a spring roll, house salad and miso soup",
    },
    {
        id: "60",
        category: "Maru Don Special (마루 덮밥 정식)",
        title: "Spicy Chicken Karaage-Don",
        price: "20.50",
        img: "",
        desc: "Stir-fried chicken in Japanese seasoning with homemade spicy sauce.",
        desc1: "Served with a spring roll, house salad and miso soup",
    },
    {
        id: "61",
        category: "Maru Don Special (마루 덮밥 정식)",
        title: "Kimchi Katsu-Don",
        price: "20.50",
        img: "",
        desc: "Spicy stir-fried Kimchi and deep-fried breaded pork cutlet on top of the rice with cooked onion and homemade Tsuyu",
        desc1: "Served with a spring roll, house salad and miso soup",
    },
    {
        id: "62",
        category: "Maru Don Special (마루 덮밥 정식)",
        title: "Sashimi Bibimbap",
        price: "20.50",
        img: "",
        desc: "Variety of sliced sashimi and colorful vegetables on rice, seasoned chogochujang (spicy, sweet and sour Korean red chili paste) on the side.",
        desc1: "Served with a spring roll and miso soup",
    },
    {
        id: "63",
        category: "Maru Don Special (마루 덮밥 정식)",
        title: "Unagi-Don",
        price: "20.50",
        img: "",
        desc: "Sweet and salty seasoned bbq eel on rice, garnished with ginger and green onions",
        desc1: "Served with a spring roll, house salad and miso soup",
    },
    {
        id: "64",
        category: "Maru Don Special (마루 덮밥 정식)",
        title: "Tonkatsu (Pork Cutlet)",
        price: "20.50",
        img: "",
        desc: "Breaded, deep-fried pork cutlet, homemade fruit based sauce, rice and shredded cabbage salad with homemade mayo cheese sauce",
        desc1: "Served with a spring roll, house salad and miso soup",
    },
]

export default DineInData;
