import React from "react";
import Image, { StaticImageData } from "next/image";
import "./styles.css";

import cartImg1 from "@/images/home-cart-1.svg";
import cartImg2 from "@/images/home-cart-2.svg";
import cartImg3 from "@/images/home-cart-3.jpg";
import cartImg4 from "@/images/home-cart-4.svg";
import cartImg5 from "@/images/home-cart-5.jpg";
import cartImg6 from "@/images/home-cart-6.jpg";
import cartImg7 from "@/images/home-cart-7.svg";
import cartImg8 from "@/images/home-cart-8.jpg";

interface CartProps {
    id: number;
    image: StaticImageData;
    title: string;
    cartObj: object;
}

const CARTS = [
    {
    id: 1,
    image: cartImg1,
    title: "Travel & Lifestyle Products & Services",
    },
    {
    id: 2,
    image: cartImg2,
    title: "Luxurious Products & Services",
    },
    {
    id: 3,
    image: cartImg3,
    title: "How To Receive Your Discounts",
    },
    {
    id: 4,
    image: cartImg4,
    title: "Personal Travel Assistant Team",
    },
    {
    id: 5,
    image: cartImg5,
    title: "How To Become a Member",
    },
    {
    id: 6,
    image: cartImg6,
    title: "Discounts & Benefits",
    },
    {
    id: 7,
    image: cartImg7,
    title: "Travel & Lifestyle Products & Services",
    },
    {
    id: 8,
    image: cartImg8,
    title: "Booking Online With Tripiology.com",
    },
];

export default function HomeCart() {
    return (
    <div className="homeCart-component">
        <div className="all-home-carts">
            {
                CARTS.map((cartDetail) => {
                    return (
                        <Cart
                        title={cartDetail.title}
                        image={cartDetail.image}
                        id={cartDetail.id}
                        cartObj={cartDetail}
                        key={cartDetail.id}
                        />
                    );
            })
            }

        </div>
    </div>
    );
}

const Cart = (props: CartProps) => {
    const { id, image, title} = props;

    return (
    <div className="cart-component">
        <Image src={image} alt={title} />
        <p className="cart-title">{title}</p>
    </div>
    );
};
