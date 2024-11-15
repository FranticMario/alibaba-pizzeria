const menu = {
    "Kebab Gerichte (Drehspieß)": [
        { id: 1, name: "Kebaptasche / Pita", ingredients: "gem. Salat, Krautsalat & Tzatziki", price: 6.50 },
        { id: 2, name: "Kebaptasche / Pita und Weißkäse", ingredients: "gem. Salat, Krautsalat, Zwiebeln & Weißkäse", price: 7.50 },
        { id: 3, name: "Vegetarische Tasche", ingredients: "Weißkäse, gemischter Salat, Tzatziki & Zwiebeln", price: 6.50 },
        { id: 4, name: "Kebab Teller", ingredients: "Weißkäse, gem. Salat, Pommes & Tzatziki", price: 11.50 },
        { id: 5, name: "Kebab Dürüm", ingredients: "Brot mit Kebapfleisch, Salat & Tzatziki (gerollt)", price: 7.50 },
        { id: 6, name: "Vegetarischer Dürüm", ingredients: "Fladenbrot mit gemischtem Salat, Tzatziki, Weißkäse & Krautsalat (gerollt)", price: 7.50 },
        { id: 7, name: "Pom Kebab Dürüm", ingredients: "Brot mit Kebapfleisch, Pommes, Salat & Tzatziki (gerollt)", price: 8.50 },
        { id: 8, name: "Kleiner Kebab Teller", ingredients: "Pommes, Salat & Tzatziki", price: 8.50 },
        { id: 9, name: "Kebab Box", ingredients: "Pommes oder Salat & Sauce", price: 7.50 },
        { id: 10, name: "Sucuk Tasche", ingredients: "Salat, Krautsalat & Tzatziki", price: 8.50 }
    ],
    "Hähnchen Döner Gerichte": [
        { id: 12, name: "Hähnchentasche / Pita", ingredients: "gem. Salat, Krautsalat & Tzatziki", price: 6.50 },
        { id: 13, name: "Hähnchentasche / Pita & Weißkäse", ingredients: "gem. Salat, Krautsalat, Zwiebeln & Weißkäse", price: 7.50 },
        { id: 14, name: "Hähnchen Teller", ingredients: "Salat, Tzatziki & Pommes", price: 11.50 },
        { id: 15, name: "Hähnchen Dürüm", ingredients: "Brot mit Hähnchenfleisch, Salat & Tzatziki (gerollt)", price: 7.50 },
        { id: 16, name: "Kleiner Hähnchen Döner Teller", ingredients: "Pommes, Tzatziki & Salat", price: 8.50 },
        { id: 17, name: "Hähnchen Box", ingredients: "Pommes oder Salat & Sauce", price: 7.50 },
        { id: 18, name: "Pom Hähnchen Dürüm", ingredients: "Brot mit Hähnchenfleisch, Pommes & Tzatziki (gerollt)", price: 8.50 },
        { id: 19, name: "Großer Hähnchen Teller", ingredients: "Pommes, Tzatziki & Salat", price: 11.50 },
        { id: 20, name: "Hähnchen Tasche/Pita", ingredients: "mit Gemüse, Sauce und Hähnchenfleisch", price: 8.50 }
    ],
    "Burger": [
        { id: 160, name: "Hamburger", ingredients: "180g der Klassiker", price: 6.50 },
        { id: 161, name: "Hamburger XXL", ingredients: "180g der Klassiker", price: 8.50 },
        { id: 162, name: "Cheeseburger", ingredients: "180g mit Schmelzkäse überbacken", price: 7.50 },
        { id: 163, name: "Cheeseburger XXL", ingredients: "180g mit Schmelzkäse überbacken", price: 9.50 },
        { id: 164, name: "Baconburger", ingredients: "180g mit Schmelzkäse und knusprigem Bacon", price: 8.00 },
        { id: 165, name: "Jalapeno Burger", ingredients: "180g mit Rindfleisch, Käse und pikanten Jalapenos", price: 10.00 },
        { id: 166, name: "Chickenburger", ingredients: "mit zarter Hähnchenbrust, mit Schmelzkäse überbacken", price: 10.00 }
    ],

    "Überbacken (mit Sahne, Tomatensauce & Käse)": [
        { id: 20, name: "Kebab (Drehspieß) Überbacken", ingredients: "", price: 9.00 },
        { id: 21, name: "Kebab (Drehspieß) Überbacken", ingredients: "mit Pilzen & Zwiebeln", price: 10.00 },
        { id: 22, name: "Kebab (Drehspieß) Überbacken", ingredients: "mit Paprika", price: 10.00 },
        { id: 23, name: "Kebab (Drehspieß) Überbacken", ingredients: "mit Zwiebeln", price: 10.00 },
        { id: 24, name: "Kebab (Drehspieß) Überbacken", ingredients: "mit Peperoni, Mozzarella & fri. Tomaten", price: 10.00 },
        { id: 25, name: "Kebab (Drehspieß) Überbacken", ingredients: "mit Paprika, Zwiebeln & Pilzen", price: 10.00 },
        { id: 26, name: "Kebab (Drehspieß) Überbacken", ingredients: "mit Spinat", price: 10.00 },
        { id: 27, name: "Kebab (Drehspieß) Überbacken", ingredients: "mit Weißkäse, Zwiebeln & Tomaten", price: 10.00 }
    ],
    "Salate": [
        { id: 40, name: "Gemischter Salat", ingredients: "Eisbergsalat, fr. Tomaten, Gurken, Mais, Peperoni & Zwiebeln", price: 7.50 },
        { id: 41, name: "Thunfisch Salat", ingredients: "Gem. Salat mit Thunfisch & Zwiebeln", price: 10.00 },
        { id: 42, name: "Hawaii Salat", ingredients: "Gem. Salat mit Schinken & Ananas", price: 9.50 },
        { id: 43, name: "Royal Salat", ingredients: "Gem. Salat mit Schinken & Käse", price: 9.50 },
        { id: 44, name: "Salat City", ingredients: "Gem. Salat mit gebratenem Hähnchenbrustfilet", price: 10.00 },
        { id: 45, name: "Mozzarella Salat", ingredients: "Eisbergsalat mit frischen Tomaten & Mozzarella", price: 9.50 },
        { id: 46, name: "Kebab Salat", ingredients: "Eisbergsalat, Zwiebeln, Peperoni & Kebapfleisch (Drehspieß)", price: 9.50 },
        { id: 47, name: "Capricciosa Salat", ingredients: "Gem. Salat mit Schinken, Käse, Thunfisch & Ei", price: 11.00 }
    ],
    "Pizza": [
        { id: 50, name: "Pizza Margherita", ingredients: "Käse & Oregano", prices: { "24cm": 5.00, "30cm": 7.00, "40cm": 14.00 } },
        { id: 51, name: "Pizza Salami", ingredients: "Salami, Käse & Oregano", prices: { "24cm": 6.50, "30cm": 8.50, "40cm": 18.00 } },
    ]
    
};
