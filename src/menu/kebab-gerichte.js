 const menu = {
    "Kebab": [
        { id: 1, name: "Kebaptasche / Pita", ingredients: "gem. Salat, Krautsalat & Tzatziki", price: 6.50 },
        { id: 2, name: "Kebaptasche / Pita und Weißkäse", ingredients: "gem. Salat, Krautsalat, Tzatziki, Zwiebeln & Weißkäse", price: 7.50 },
        { id: 3, name: "Vegetarische Tasche", ingredients: "Weißkäse, gemischter Salat, Tzatziki & Zwiebeln", price: 5.50 },
        { id: 4, name: "Kebab Teller", ingredients: "gem. Salat, Pommes & Tzatziki", price: 11.50 },
        { id: 5, name: "Kebab Dürüm", ingredients: "Brot mit Kebabfleisch, Salat & Tzatziki (gerollt)", price: 7.50 },
        { id: 6, name: "Vegetarischer Dürüm", ingredients: "Fladenbrot mit gemischtem Salat, Tzatziki, Weißkäse & Krautsalat (gerollt)", price: 6.00 },
        { id: 7, name: "Pom Kebab Dürüm", ingredients: "Brot mit Kebabfleisch, Pommes, Salat & Tzatziki (gerollt)", price: 8.50 },
        { id: 8, name: "Kleiner Kebab Teller", ingredients: "Pommes, Salat & Tzatziki", price: 9.00 },
        { id: 9, name: "Kebab Box", ingredients: "Pommes oder Salat & Sauce", price: 6.50 },
        { id: 10, name: "Sucuk Tasche", ingredients: "gem. Salat, Krautsalat & Tzatziki", price: 7.50 },
        { id: 11, name: "Kebab Tasche / Pita", ingredients: "Extra Fleisch", price: 8.00 },
      ],  
      "Hähnchen Döner": [
        { id: 12, name: "Hähnchentasche / Pita", ingredients: "gem. Salat, Krautsalat & Tzatziki", price: 6.50 },
        { id: 13, name: "Hähnchentasche / Pita und Weißkäse", ingredients: "gem. Salat, Krautsalat, Tzatziki, Zwiebeln & Weißkäse", price: 7.50 },
        { id: 14, name: "Hähnchen Teller", ingredients: "Salat, Tzatziki & Pommes", price: 11.50 },
        { id: 15, name: "Hähnchen Dürüm", ingredients: "Brot mit Hähnchenfleisch, Salat & Tzatziki (gerollt)", price: 7.50 },
        { id: 16, name: "Kleiner Hähnchen Döner Teller", ingredients: "Pommes, Tzatziki & Salat", price: 9.00 },
        { id: 17, name: "Hähnchen Box", ingredients: "Pommes oder Salat & Sauce", price: 6.50 },
        { id: 18, name: "Pom Hähnchen Dürüm", ingredients: "Brot mit Hähnchenfleisch, Salat, Pommes & Tzatziki (gerollt)", price: 8.50 },
        { id: 19, name: "Hähnchen Tasche / Pita", ingredients: "Extra Fleisch", price: 8.00 },
      ],

      "Überbacken": [
        { id: 20, name: "Kebab(Drehspieß) Überbacken", ingredients: "", price: 9.50 },
        { id: 21, name: "Kebab(Drehspieß) Überbacken", ingredients: "mit Pilzen", price: 10.50 },
        { id: 22, name: "Kebab(Drehspieß) Überbacken", ingredients: "mit Pilzen & Zwiebeln", price: 10.50 },
        { id: 23, name: "Kebab(Drehspieß) Überbacken", ingredients: "mit Paprika", price: 10.50 },
        { id: 24, name: "Kebab(Drehspieß) Überbacken", ingredients: "mit Zwiebeln, Mozzarela & fri.Tomaten", price: 11.00 },
        { id: 25, name: "Kebab(Drehspieß) Überbacken", ingredients: "mit Paprika, Zwiebeln & Pilzen", price: 11.50 },
        { id: 26, name: "Kebab(Drehspieß) Überbacken", ingredients: "mit Spinat", price: 10.50 },
        { id: 27, name: "Kebab(Drehspieß) Überbacken", ingredients: "mit Weißkäse, Zwiebeln & Tomaten", price: 11.50 },
      ],

      "Salate": [
        { id: 40, name: "Gemischter Salat", ingredients: "Eisbergsalat, fr. Tomaten, Gurken, Mais, Peperoni & Zwiebeln", price: 8.00 },
        { id: 41, name: "Thunfisch Salat", ingredients: "Gem. Salat mit Thunfisch & Zwiebeln", price: 10.50 },
        { id: 42, name: "Hawaii Salat", ingredients: "Gem. Salat mit Schinken & Ananas", price: 10.00 },
        { id: 43, name: "Royal Salat", ingredients: "Gem. Salat mit Schinken & Käse", price: 10.00 },
        { id: 44, name: "Salat City", ingredients: "Gem. Salat mit gebratenem Hähnchenbrustfilet", price: 10.50 },
        { id: 45, name: "Mozzarella Salat", ingredients: "Eisbergsalat mit frischen Tomaten & Mozzarella", price: 10.00 },
        { id: 46, name: "Kebab Salat", ingredients: "Eisbergsalat, Zwiebeln, Peperoni & Kebabfleisch(Drehspieß)", price: 10.00 },
        { id: 47, name: "Capriciosa Salat", ingredients: "Gem. Salat mit Schinken, Käse, Thunfisch & Ei", price: 11.50 },
      ],
        "Pizza": [
          { name: 50, name: "Pizza Margherita", ingredients: "Käse & Oregano", prices: { "24cm": 5.50, "30cm": 7.50, "40cm": 14.00 } },
          { name: 51, name: "Pizza Salami", ingredients: "Salami, Käse & Oregano", prices: { "24cm": 7.00, "30cm": 9.00, "40cm": 17.00 } },
          { name: 52, name: "Pizza Prosciutto", ingredients: "Schinken, Käse & Oregano", prices: { "24cm": 7.00, "30cm": 9.00, "40cm": 17.00 } },
          { name: 53, name: "Pizza Funghi", ingredients: "Champignons, Käse & Oregano", prices: { "24cm": 6.50, "30cm": 8.00, "40cm": 16.00 } },
          { name: 54, name: "Pizza Orient", ingredients: "Käse, Weißkäse, Oliven & Peperoni", prices: { "24cm": 7.00, "30cm": 9.50, "40cm": 17.00 } },
          { name: 55, name: "Pizza Tonno", ingredients: "Thunfisch, Zwiebeln, Käse & Oregano", prices: { "24cm": 8.50, "30cm": 12.00, "40cm": 20.00 } },
          { name: 56, name: "Pizza Mista", ingredients: "Salami, Schinken, Champignons, Käse & Oregano", prices: { "24cm": 8.50, "30cm": 10.50, "40cm": 19.00 } },
          { name: 57, name: "Pizza Kebab", ingredients: "Mit Kebabfleisch(Drehspieß)", prices: { "24cm": 7.50, "30cm": 10.00, "40cm": 17.00 } },
          { name: "57a", name: "Pizza Kebab Hollandaise", ingredients: "Mit Kebabfleisch(Drehspieß) & Sauce Hollandaise", prices: { "24cm": 8.50, "30cm": 10.50, "40cm": 19.00 } },
          { name: 58, name: "Pizza Carbonara", ingredients: "Schinken, Salami, Ei & Pilzen", prices: { "24cm": 7.50, "30cm": 10.50, "40cm": 17.00 } },
          { name: 59, name: "Pizza Kebab mit Pepperoni-Weißkäse", ingredients: "Kebapfleisch, Peperoni & Weißkäse (scharf)", prices: { "24cm": 8.00, "30cm": 11.00, "40cm": 18.00 } },
          { name: 60, name: "Pizza Indiana", ingredients: "Schinken, Salami, Zwiebel, Käse & Oregano", prices: { "24cm": 7.50, "30cm": 10.00, "40cm": 17.00 } },
          { name: 61, name: "Pizza Funghi-Salami", ingredients: "Champignons & Salami", prices: { "24cm": 7.50, "30cm": 10.00, "40cm": 17.00 } },
          { name: 62, name: "Pizza Hawaii", ingredients: "Schinken & Ananas", prices: { "24cm": 7.50, "30cm": 10.00, "40cm": 17.00 } },
          { name: 63, name: "Pizza Mozzarella", ingredients: "Frische Tomaten, Mozzarella & Basilikum", prices: { "24cm": 7.50, "30cm": 10.00, "40cm": 17.00 } },
          { name: 64, name: "Pizza Spinaci", ingredients: "Spinat, Knoblauch & Zwiebeln", prices: { "24cm": 7.50, "30cm": 10.00, "40cm": 17.00 } },
          { name: 65, name: "Pizza Frutti di Mare", ingredients: "Meeresfrüchte & Knoblauch", prices: { "24cm": 8.50, "30cm": 11.50, "40cm": 21.00 } },
          { name: 66, name: "Pizza Fresh Attack", ingredients: "Hähnchenfleisch, Ananas, Zwiebeln, Mais & Weißkäse", prices: { "24cm": 8.50, "30cm": 11.50, "40cm": 20.00 } },
          { name: 67, name: "Pizza Sucuk", ingredients: "Knoblauchwurst (Sucuk), Peperoni & Zwiebeln", prices: { "24cm": 8.50, "30cm": 10.50, "40cm": 19.00 } },
          { name: 68, name: "Pizza Toscana", ingredients: "Schinken & Champignons", prices: { "24cm": 8.50, "30cm": 10.50, "40cm": 17.00 } },
          { name: 69, name: "Pizza Bali Fitness", ingredients: "Salami, Peperoni, Weißkäse & Käse Oregano", prices: { "24cm": 8.50, "30cm": 10.50, "40cm": 18.00 } },
          { name: 70, name: "Pizza Kung-Fu", ingredients: "Schinken, Salami, Paprika, Zwiebeln & Käse (sehr scharf)", prices: { "24cm": 8.50, "30cm": 10.50, "40cm": 19.00 } },
          { name: 71, name: "Pizza Berlino", ingredients: "Schinken, Salami & Käse", prices: { "24cm": 7.50, "30cm": 9.50, "40cm": 17.00 } },
          { name: 72, name: "Pizza Nachbar", ingredients: "Kebabfleisch(Drehspieß) & Zwiebeln", prices: { "24cm": 7.50, "30cm": 10.00, "40cm": 17.00 } },
          { name: 73, name: "Pizza IV", ingredients: "Kebapfleisch(Drehspieß), Mozzarella & Zwiebeln", prices: { "24cm": 7.50, "30cm": 10.50, "40cm": 18.00 } },
          { name: 74, name: "Pizza Jalapeño", ingredients: "Kebabfleisch(Drehspieß) & Jalapeños", prices: { "24cm": 7.50, "30cm": 10.00, "40cm": 18.00 } },
          { name: 75, name: "Pizza Chicken Hollandaise", ingredients: "Hähnchenfleisch & Sauce Hollandaise", prices: { "24cm": 7.50, "30cm": 10.50, "40cm": 19.00 } },
          { name: 76, name: "Pizza City", ingredients: "Salami, Schinken, Pilze, Zwiebeln, Paprika, Käse & Oregano (scharf)", prices: { "24cm": 8.50, "30cm": 11.50, "40cm": 18.00 } },
          { name: 77, name: "Pizza Vegetano", ingredients: "Champignons, Broccoli, Spinat & Zwiebeln", prices: { "24cm": 7.50, "30cm": 10.50, "40cm": 17.00 } },
          { name: 78, name: "Pizza Gyros", ingredients: "Zwiebeln", prices: { "24cm": 8.50, "30cm": 10.50, "40cm": 18.00 } },
          { name: "78a", name: "Pizza Gyros", ingredients: "Zwiebeln & Peperoni", prices: { "24cm": 8.50, "30cm": 11.50, "40cm": 19.00 } },
          { name: 79, name: "Pizza Cherry-Huhn", ingredients: "Hähnchenfleisch, Ananas & Curry Sauce", prices: { "24cm": 8.50, "30cm": 11.50, "40cm": 19.00 } },
          { name: 80, name: "Pizza Mexicana", ingredients: "Salami, Peperoni, Paprika & Mais (scharf)", prices: { "24cm": 8.50, "30cm": 11.50, "40cm": 19.00 } },
          { name: 81, name: "Pizza Deniz", ingredients: "Hähnchen-und Hackfleisch vom Drehspieß. Peperoni, Zwiebeln & scharfe Sauce", prices: { "24cm": 8.50, "30cm": 11.50, "40cm": 19.00 } },
          { name: 82, name: "Pizza Mix Spezial", ingredients: "Hackfleisch vom Drehspieß, Hähnchenfleisch, Sucuk, Weißkäse & Zwiebeln", prices: { "24cm": 8.50, "30cm": 11.50, "40cm": 20.00 }},
          { name: 83, name: "Pizza Prosciutto Tonno", ingredients: "Vorderschinken & Thunfisch", prices: { "24cm": 9.00, "30cm": 11.50, "40cm": 20.00 }},
          { name: 84, name: "Pizza Tonno Salami E Funghi", ingredients: "Thunfisch, Salami & Champignons", prices: { "24cm": 9.00, "30cm": 11.50, "40cm": 20.00 }},
          { name: 85, name: "Pizza Mexikana", ingredients: "Vorderschinken, Mais & Paprika", prices: { "24cm": 9.00, "30cm": 11.50, "40cm": 20.00 }},
          { name: 86, name: "Pizza HIIR", ingredients: "Hirtenkäse, Gouda & Mozzarella", prices: { "24cm": 8.00, "30cm": 10.50, "40cm": 17.00 }},
          { name: 88, name: "Pizza Party Margeritha", ingredients: "Jede Extrazutat zzgl. 5,00 €", prices: { "50cm": 20.00}},
        ],

        "Calzone": [
            { id: 140, name: "Calzone I", ingredients: "Salami, Schinken, Pilze, Paprika & Ei", price: 11.50 },
            { id: 141, name: "Calzone II", ingredients: "Salami, Schinken & Pilze", price: 10.50 },
            { id: 142, name: "Calzone III", ingredients: "Schinken, Thunfisch, Zwiebeln & Paprika", price: 11.50 },
            { id: 143, name: "Kebap Calzone", ingredients: "Kebabfleisch, Paprika, Zwiebeln & Tzatziki", price: 11.50 },
            { id: 144, name: "Calzone IV", ingredients: "Kebabfleisch, Schinken, Salami & Mozzarella", price: 11.50 },
            { id: 145, name: "Calzone V", ingredients: "Kebabfleisch, Tzatziki, Weißkäse & Krautsalat", price: 11.50 },

          ],
          "Rollos": [
            { id: 110, name: "Rollo Salami", ingredients: "Salami, Champignons, Zwiebeln & Käse", price: 9.50 },
            { id: 111, name: "Rollo Schinken", ingredients: "Schinken, Champignons, Paprika & Käse", price: 10.50 },
            { id: 112, name: "Rollo Tonno", ingredients: "Thunfisch, Zwiebeln, Oliven & Käse", price: 11.50 },
            { id: 113, name: "Rollo Kebap", ingredients: "Kebapfleisch, Zwiebeln, Tzatziki & Käse", price: 9.50 },
            { id: 114, name: "Rollo Spezial", ingredients: "Schinken, Salami, Kebabfleisch, Zwiebeln, Paprika & Käse", price: 11.50 },
            { id: 115, name: "Rollo Hawall", ingredients: "Schinken, Ananas & Käse", price: 9.50 },
            { id: 116, name: "Rollo Chicken", ingredients: "Hähnchenfleisch,Tzaziki & Zwiebeln", price: 9.50 },
            { id: 117, name: "Rollo Sucuk", ingredients: "Peperoni, Tzaziki & Zwiebeln", price: 10.00 },
            { id: 118, name: "Rollo Vegetarisch", ingredients: "Champignons, Paprika, Brokolli & Zwiebeln", price: 9.50 },
          ],
      "Lahmacun": [
        { id: 210, name: "Lahmacun", ingredients: "gefüllt aus unserer Salattheke, Tzatziki & Weißkäse", price: 6.50 },
        { id: 211, name: "Lahmacun", ingredients: "Kebab- oder Hähnchenfleisch, Salat & Tzatziki", price: 8.50 },
        { id: 212, name: "Lahmacun XXL", ingredients: "Kebab- oder Hähnchenfleisch, Salat & Tzatziki", price: 11.50 },
        { id: 213, name: "Peynirli Pide", ingredients: "frisch aufgerollter Teig mit Weißkäse überbacken", price: 9.00 },
        { id: 214, name: "Sucuklu Pide", ingredients: "frisch aufgerollter Teig mit türk. Knoblauchwurst & Gouda überbacken", price: 10.00 },
        { id: 215, name: "Kiymali Pide", ingredients: "frisch aufgerollter Teig mit Hackfleisch", price: 10.00 },
      ],
      "Burger": [
        { id: 160, name: "Hamburger", ingredients: "120g der Klassiker", price: 6.50 },
        { id: 161, name: "Hamburger XL", ingredients: "180g der Klassiker", price: 8.50 },
        { id: 162, name: "Cheeseburger", ingredients: "120g mit Schmelzkäse überbacken", price: 7.50 },
        { id: 163, name: "Cheeseburger XL", ingredients: "180g mit Schmelzkäse überbacken", price: 9.50 },
        { id: 164, name: "Baconburger", ingredients: "180g mit Schmelzkäse überbacken und knusprigem Bacon", price: 10.50 },
        { id: 165, name: "Jalapeno Burger", ingredients: "180g mit Rindhackfleisch und pikanten Jalapenos", price: 10.00 },
        { id: 166, name: "Chickenburger", ingredients: "mit zarter Hähnchenbrust, mit Schmelzkäse überbacken", price: 10.00 }
    ],

    "Nudelgerichte": [
        { id: 170, name: "Spaghetti Tomato", ingredients: "mit Tomatensauce", price: 8.50 },
        { id: 171, name: "Spaghetti Bolognese", ingredients: "mit Bolognesesauce", price: 9.50 },
        { id: 172, name: "Spaghetti Carbonara", ingredients: "mit Schinken, Ei & Sahnesauce", price: 11.00 },
        { id: 173, name: "Spaghetti Überbacken", ingredients: "mit Hackfleischsauce, Sahne & Käse überbacken", price: 11.00 },
        { id: 174, name: "Spaghetti Tonno", ingredients: "mit Thunfisch, Tomatensauce & Knoblauchsauce", price: 11.00 },

        { id: 175, name: "Tortellino al Forno", ingredients: "mit Schinken & Sahnesauce", price: 10.00 },
        { id: 176, name: "Tortellini Spezial", ingredients: "mit Schinken, Knoblauchsaucem fr. Paprika, Sahne- & Tomatensauce", price: 11.50 },

        { id: 177, name: "Rigatoni Can Broccoli", ingredients: "mit Broccoli, Knoblauch- und Tomatensauce & Käse überbacken", price: 11.50 },
        { id: 178, name: "Penne Al Forno Maccheroni", ingredients: "mit Fleischsauce, Schinken, Käse & Sahne überbacken", price: 11.50 }
    ],

    "Falafel": [
        { id: 180, name: "Falafel Brot", ingredients: "Falafel, Salat & Tzaziki", price: 6.50 },
        { id: 181, name: "Falafel Fetakäse", ingredients: "Falafel, Salat & Weißkäse", price: 7.50 },
        { id: 182, name: "Falafel Dürüm", ingredients: "Falafel, Salat & Tzatziki", price: 8.00 },
        { id: 183, name: "Falafel Teller", ingredients: "Falafel, Salat & Tzatziki", price: 9.50 },
    ],

    "Baguette": [
        { id: 200, name: "Baguette Salami", ingredients: "", price: 7.00 },
        { id: 201, name: "Baguette Schinken", ingredients: "", price: 7.00 },
        { id: 202, name: "Baguette Thunfisch", ingredients: "", price: 8.50 },
        { id: 203, name: "Baguette Hawaii", ingredients: "Ananas & Schinken", price: 8.00 },
        { id: 204, name: "Baguette mit Kebabfleisch", ingredients: "", price: 7.50 },
        { id: 205, name: "Baguette mit Weißkäse", ingredients: "", price: 6.50 },
        { id: 206, name: "Baguette mit Kebabfleisch und Weißkäse", ingredients: "", price: 7.50 },
        { id: 207, name: "Baguette mit Kebabfleisch und Zwiebeln", ingredients: "", price: 7.50 },
        { id: 208, name: "Baguette mit Kebabfleisch, Mozzarella und Zwiebeln", ingredients: "", price: 8.00 },
        { id: 209, name: "Baguette Sucuk", ingredients: "Türkischer Knoblauwurst", price: 7.50 },

    ],

    "Imbissgerichte": [
        { id: 120, name: "Pommes", ingredients: "klein", price: 3.50 },
        { id: 121, name: "Pommes", ingredients: "groß", price: 4.50 },
        { id: 122, name: "Kroketten", ingredients: "8 Stück", price: 3.50 },
        { id: 123, name: "Chicken Nuggets", ingredients: "6 Stück", price: 4.50 },
        { id: 125, name: "Hot Dog Spezial", ingredients: "Lassen Sie sich Überraschen!", price: 6.50 },
        { id: 126, name: "Currywurst", ingredients: "mit Pommes", price: 7.00 },
    ],

    "Schnitzel": [
        { id: 130, name: "Schnitzel Wiener Art", ingredients: "mit Pommes & Salat", price: 3.50 },
        { id: 131, name: "Zwiebelschnitzel", ingredients: "mit Pommes & Salat", price: 4.50 },
        { id: 132, name: "PaprikaSchnitzel", ingredients: "mit Pommes & Salat", price: 3.50 },
        { id: 133, name: "Jägerschnitzel", ingredients: "mit Pommes & Salat", price: 4.50 },
        { id: 134, name: "Hawaii Schnitzel", ingredients: "mit Pommes & Salat", price: 6.50 },
        { id: 135, name: "Hänhchen Schnitzel", ingredients: "mit Pommes & Salat", price: 7.00 },
    ],

    
    "Pizzabrot": [
        { id: 189, name: "Gefüllte Pizzabrötchen", ingredients: "1 nach Wahl", price: 7.50 },
        { id: 190, name: "Pizzabrot", ingredients: "mit Knoblauch", price: 5.00 },
        { id: 191, name: "Pizzabrot", ingredients: "mit Käse", price: 5.00 },
        { id: 192, name: "Pizzabrötchen", ingredients: "", price: 5.00 },
    ],

    "Extra Beilage": [
        { id: 193, name: "Salatmayonnise/Ketchup", ingredients: "1 nach Wahl", price: 0.50 },
        { id: 194, name: "Fladenbrot", ingredients: "", price: 1.50 },
        { id: 195, name: "Tzatziki, Kräutersauce, Cocktailsauce, Scharfe Sauce", ingredients: "", price: {"125g": 2.50 , "250g": 3.50 }},
        { id: 196, name: "Sauce Hollandaise", ingredients: "", price: {"125g": 3.00 , "250g": 4.50 }},
        { id: 197, name: "Peperoni", ingredients: "", price: {"125g": 3.50 , "250g": 5.50 } },
    ],


    "Getränke": [
        { id: "", name: "Coca Cola, Fanta, Sprite", ingredients: "", price: {"0.33 L": 2.50} },
        { id: "", name: "COca Cola Light, Coca Zero", ingredients: "", price: {"0.33 L": 2.50} },
        { id: "", name: "Fanta Exotic", ingredients: "", price: {"0.33 L": 2.50}},
        { id: "", name: "Mezzo Mix", ingredients: "", price: {"0.33 L": 2.50}},
        { id: "", name: "Uludag", ingredients: "", price: {"0.33 L": 3.00} },
        { id: "", name: "Wasser", ingredients: "", price: {"0.33 L": 2.50} },
        { id: "", name: "Ayran", ingredients: "", price: {"0.33 L": 2.00} },
        { id: "", name: "Mineralwasser", ingredients: "", price: {"0.33 L": 2.00}},
        { id: "", name: "Coca Cola, Fanta, Sprite", ingredients: "", price: {"1,00 L": 3.50}},
        { id: "", name: "Red Bull", ingredients: "", price: {"0.25 L": 3.00} },
        { id: "", name: "Booster", ingredients: "", price: {"0.50 L": 3.00} },
        { id: "", name: "Kaffee", ingredients: "", price: {"": 2.50} },
        { id: "", name: "Flaschen bier", ingredients: "", price: {"0.33 L": 3.00} },
        { id: "", name: "Becks", ingredients: "", price: {"0.33 L": 3.00} },
        { id: "", name: "Krombacher / Krombacher Radler / Aloholfrei", ingredients: "", price: {"0.33 L": 3.00} },
    ],



}

export default menu

console.log("hello")
