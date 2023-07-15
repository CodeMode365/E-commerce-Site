export interface iItems {
    id: number,
    title: string,
    desc: string, src: string,
    price: number,
    rating: number,
    highlight: string[]
}
export interface iCategory {
    category: string,
    id: number,
    Items: iItems[]

}

const Data: iCategory[] = [
    {
        id: 200,
        category: "Jackets",
        Items: [
            {
                id: 200.1,
                title: "Green Hoody",
                desc: "",
                src: "./Items/Jackets/GreenHoody.jpg",
                price: 20,
                rating: 3,
                highlight: ["new", "male", "female"]

            }, {
                id: 200.2,
                title: "Winter Jacket",
                desc: "",
                src: "./Items/Jackets/WinterJacket.jpg",
                price: 20,
                rating: 3,
                highlight: ["new", "male", "female"]

            },
            {
                id: 200.3,
                title: "Wolf Jacket",
                desc: "",
                src: "./Items/Jackets/WolfJacket.jpg",
                price: 20,
                rating: 2,
                highlight: ["new", "male", "female"]

            }, {
                id: 200.4,
                title: "Yellow Hoody",
                desc: "",
                src: "./Items/Jackets/YellowHoody.jpg",
                price: 30,
                rating: 1,
                highlight: ["new", "male", "female"]
            }
        ]
    },
    {
        id: 300,
        category: "Pants",
        Items: [
            {
                id: 300.1,
                title: "Free Jeans",
                desc: "",
                src: "./Items/Pants/FreeJeans.jpg",
                price: 70,
                rating: 4,
                highlight: ["popular", "male", "female"]

            }, {
                id: 300.2,
                title: "High Jeans",
                desc: "",
                src: "./Items/Pants/HighJeans.jpg",
                price: 20,
                rating: 3,
                highlight: ["new", "female"]

            },
            {
                id: 300.3,
                title: "High Pants",
                desc: "",
                src: "./Items/Pants/HighPants.jpg",
                price: 20,
                rating: 2,
                highlight: ["female"]

            }, {
                id: 300.4,
                title: "Suit Pants",
                desc: "",
                src: "./Items/Pants/SuitPants.jpg",
                price: 30,
                rating: 1,
                highlight: ["new", "male", "female"]
            }
            , {
                id: 300.5,
                title: "Trouser Pants",
                desc: "",
                src: "./Items/Pants/TrouserPants.jpg",
                price: 30,
                rating: 1,
                highlight: ["new", "male", "female", "popular"]
            }
        ]
    },
    {
        id: 400,
        category: "Shirts",
        Items: [
            {
                id: 400.1,
                title: "Blue Tidy",
                desc: "",
                src: "./Items/Shirts/BlueTidy.jpg",
                price: 70,
                rating: 4,
                highlight: ["popular", "male", "female"]

            }, {
                id: 400.2,
                title: "Cottom White",
                desc: "",
                src: "./Items/Shirts/CottonWhite.jpg",
                price: 30,
                rating: 2,
                highlight: ["new", "female", "male"]

            },
            {
                id: 400.5,
                title: "Custom Logo",
                desc: "",
                src: "./Items/Shirts/CustomLogo.jpg",
                price: 15,
                rating: 2,
                highlight: ["female", "male", "popular"]

            }, {
                id: 400.6,
                title: "Jeans Shirt",
                desc: "",
                src: "./Items/Shirts/JeansShirt.jpg",
                price: 30,
                rating: 1,
                highlight: ["new", "male", "female"]
            }
            , {
                id: 400.7,
                title: "Printed Tshirt",
                desc: "",
                src: "./Items/Shirts/PrintedTshirt.jpg",
                price: 30,
                rating: 1,
                highlight: ["new", "male", "female", "popular"]
            }
            , {
                id: 400.8,
                title: "Work Tshirt",
                desc: "",
                src: "./Items/Shirts/WorkingTshirt.jpg",
                price: 30,
                rating: 1,
                highlight: ["new", "male", "female", "popular"]
            }
        ]
    },
    {
        id: 500,
        category: "Shoes",
        Items: [
            {
                id: 500.1,
                title: "Colourful",
                desc: "",
                src: "./Items/Shoes/Colourful.jpg",
                price: 70,
                rating: 4,
                highlight: ["popular", "male", "female"]

            }, {
                id: 500.2,
                title: "Converse",
                desc: "",
                src: "./Items/Shoes/Converse.jpg",
                price: 30,
                rating: 2,
                highlight: ["new", "female", "male"]

            },
            {
                id: 500.3,
                title: "Dr Martin",
                desc: "",
                src: "./Items/Shoes/DrMartin.jpg",
                price: 15,
                rating: 2,
                highlight: ["female", "male", "popular"]

            }, {
                id: 500.4,
                title: "Gray Clotty",
                desc: "",
                src: "./Items/Shoes/GrayClotty.jpg",
                price: 30,
                rating: 1,
                highlight: ["new", "male", "female"]
            }
            , {
                id: 500.5,
                title: "Red Hills",
                desc: "",
                src: "./Items/Shoes/RedHills.jpg",
                price: 30,
                rating: 1,
                highlight: ["new", "male", "female", "popular"]
            }
            , {
                id: 500.6,
                title: "Tigera Slipper",
                desc: "",
                src: "./Items/Shoes/Slipper.jpg",
                price: 30,
                rating: 1,
                highlight: ["new", "male", "female", "popular"]
            }
            , {
                id: 500.7,
                title: "White Hills",
                desc: "",
                src: "./Items/Shoes/WhiteHills.jpg",
                price: 30,
                rating: 1,
                highlight: ["new", "male", "female", "popular"]
            }
        ]
    },

]

export default Data