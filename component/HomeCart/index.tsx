import React from "react";
import Image, { StaticImageData } from "next/image";
import "./styles.css";
import cartImg1 from "@/images/home-cart-1.jpg";

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
    image: cartImg1,
    title: "Luxurious Products & Services",
    },
    {
    id: 3,
    image: cartImg1,
    title: "How To Receive Your Discounts",
    },
    {
    id: 4,
    image: cartImg1,
    title: "Personal Travel Assistant Team",
    },
    {
    id: 5,
    image: cartImg1,
    title: "How To Become a Member",
    },
    {
    id: 6,
    image: cartImg1,
    title: "Discounts & Benefits",
    },
    {
    id: 7,
    image: cartImg1,
    title: "Travel & Lifestyle Products & Services",
    },
    {
    id: 8,
    image: cartImg1,
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
