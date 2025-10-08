import Fuse from "fuse.js";
import { useState } from "react";

const mockData = [
    {
        id: "1",
        name: "CheeseBurger",
        summary: "Wendy's burger",
        price: 8.24,
        rating: 4.9,
        image: "/images/burgers/cheeseburger.png",
        liked: false,
        time: 26,
        description: "The Cheeseburger Wendy's Burger is a classic fast food burger that packs a punch of flavor in every bite. Made with a juicy beef patty cooked to perfection, it's topped with melted American cheese, crispy lettuce, ripe tomato, and crunchy pickles.",
        heat: 6
    },
    {
        id: "2",
        name: "Hamburger",
        summary: "Veggie burger",
        price: 12.5,
        rating: 4.8,
        image: "/images/burgers/veggie.png",
        liked: false,
        time: 26,
        description: "The Veggie Burger is a delicious and satisfying plant-based alternative to traditional meat burgers. Made with a blend of wholesome ingredients, this burger is packed with flavor and nutrition. The patty is made from a combination of vegetables, grains, and legumes, providing a hearty and satisfying texture.",
        heat: 3
    },
    {
        id: "3",
        name: "Hamburger",
        summary: "Chicken burger",
        price: 12.5,
        rating: 4.6,
        image: "/images/burgers/chickenBurger2.png",
        liked: false,
        time: 26,
        description: "The Chicken Burger is a mouthwatering sandwich that features a tender and juicy chicken patty as its star ingredient. Made from high-quality chicken breast, this burger is seasoned to perfection with a blend of herbs and spices, creating a flavorful and satisfying meal.",
        heat: 8
    },
    {
        id: "4",
        name: "Hamburger",
        summary: "Fried Chicken burger",
        price: 12.5,
        rating: 4.5,
        image: "/images/burgers/chickenBurger.png",
        liked: false,
        time: 26,
        description: "The Fried Chicken Burger is a crispy and flavorful sandwich that features a golden-brown fried chicken patty as its main attraction. Made from tender chicken breast, this burger is coated in a seasoned breading that adds a satisfying crunch with every bite.",
        heat: 7
    },
];

export type Burger = typeof mockData[0];

const mockUsers = [
    {
        id: "1",
        name: "Melosh",
        email: "melosh@example.com",
        avatar: "/images/users/alice.png",
    },
]

export type User = typeof mockUsers[0];

export function useCurrentUser() {
    const [user] = useState(mockUsers[0]);
    return user;
}


export function getProducts() {
    return mockData;
}

export function getProduct(id: string) {
    return mockData.find((product) => product.id === id);
}

const ProductSearch = new Fuse(mockData, {
    keys: ["name", "summary"],
    includeScore: true,
    threshold: 0.4,
});

export function searchProducts(query: string) {
    if(query === "") {
        console.log("Empty query, returning all products.");
        return mockData;
    }
    const results = ProductSearch.search(query);
    return results.map(result => result.item);
}