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
        liked: false
    },
    {
        id: "2",
        name: "Hamburger",
        summary: "Veggie burger",
        price: 12.5,
        rating: 4.8,
        image: "/images/burgers/veggie.png",
        liked: false
    },
    {
        id: "3",
        name: "Hamburger",
        summary: "Chicken burger",
        price: 12.5,
        rating: 4.6,
        image: "/images/burgers/chickenBurger2.png",
        liked: false
    },
    {
        id: "4",
        name: "Hamburger",
        summary: "Fried Chicken burger",
        price: 12.5,
        rating: 4.5,
        image: "/images/burgers/chickenBurger.png",
        liked: false
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