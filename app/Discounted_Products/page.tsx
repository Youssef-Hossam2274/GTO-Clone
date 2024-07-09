import React from 'react'
import ProductCart from '@/component/ProductCart'
import "./page.css"
import hotelImage from "@/images/luxary/hotel.jpg"
import roomImage from "@/images/luxary/APARTMENTS-AND-SERVICED-APART-FINAL.jpg";
import flightImage from "@/images/luxary/flight-tickets.jpg"
import Landmarks from "@/images/luxary/Landmarks.jpg";
import attractionImage from "@/images/luxary/attractions.jpg"
import activityImage from "@/images/luxary/activities.jpg"
import themeParkImage from "@/images/luxary/Theme-Parks.jpg"
import cinemaImage from "@/images/luxary/CINEMA-FINAL.jpg"
import musicalsImage from "@/images/home-slider-1.jpg";
import concertImage from "@/images/luxary/concerts.jpg"
import sportImage from "@/images/luxary/Sports-Final.jpg"
import cruisesImage from "@/images/luxary/Cruises-final.jpg"
import transfareImage from "@/images/luxary/Transfers.jpg"
import rentalImage from "@/images/luxary/Care-rental.jpg"
import trainImage from "@/images/luxary/shutterstock_533677588.jpg"
import coachesImage from "@/images/luxary/Coaches.jpg"
import ferriesZoomedImage from "@/images/luxary/Ferries-Zoomed.jpg"
import airprotImage from "@/images/luxary/shutterstock_758602234-1.jpg"
import resturantImage from "@/images/luxary/RESTAURANTS-FINAL.jpg"
import shoppingImage from "@/images/luxary/SHOPPING-FINAL.jpg"


const CARDS = [
  {
    id: 1,
    cover:hotelImage,
    banner:"Hotel",
    title:"UP TO 40% DISCOUNT 100% Coverage",
    description:"Enjoy a guaranteed discount of up to 40% on the lowest online prices for Hotels worldwide."
  },
  {
    id: 2,
    cover:roomImage,
    banner:"Serviced Apartments",
    title:"UP TO 10% DISCOUNT 100% Coverage",
    description:"Enjoy a guaranteed discount of up to 10% on the lowest online prices for Serviced Apartments on major websites worldwide."
  },
  {
    id: 3,
    cover:flightImage,
    banner:"Flights",
    title:"UP TO 8% DISCOUNT 100% Coverage",
    description:"Enjoy a guaranteed discount of up to 8% on the lowest online prices for Flights worldwide."
  },
  {
    id: 4,
    cover:Landmarks,
    banner:"Landmarks and Museums",
    title:"UP TO 40% DISCOUNT 95% Coverage",
    description:"Enjoy a guaranteed discount of up to 40% on the lowest online prices for Landmarks and Museums worldwide."
  },
  {
    id: 5,
    cover:attractionImage,
    banner:"Attractions",
    title:"UP TO 40% DISCOUNT 95% Coverage",
    description:"Enjoy a guaranteed discount of up to 40% on the lowest online prices for Attractions worldwide."
  },
  {
    id: 6,
    cover:activityImage,
    banner:"Activities",
    title:"UP TO 40% DISCOUNT 80% Coverage",
    description:"Enjoy a guaranteed discount of up to 40% on the lowest online prices for Activities worldwide."
  },
  {
    id: 7,
    cover:Landmarks,
    banner:"Experiences",
    title:"UP TO 40% DISCOUNT 80% Coverage",
    description:"Enjoy a guaranteed discount of up to 40% on the lowest online prices for Experiences worldwide."
  },
  {
    id: 8,
    cover:cinemaImage,
    banner:"Cinemas",
    title:"UP TO 10% DISCOUNT 80% Coverage",
    description:"GTO covers many Cinemas in selected cities. Enjoy discounts on Cinema tickets when you book through your GTO Personal Travel Assistant Team or your BrandVouchers.com account."
  },
  {
    id: 9,
    cover:themeParkImage,
    banner:"Theme Parks",
    title:"UP TO 40% DISCOUNT 95% Coverage",
    description:"Enjoy a guaranteed discount of up to 40% on the lowest online prices for Theme Parks worldwide."
  },
  {
    id: 10,
    cover:musicalsImage,
    banner:"Musicals",
    title:"UP TO 40% DISCOUNT 98% Coverage",
    description:"Enjoy a guaranteed discount of up to 40% on the lowest online prices for Musicals and Theatre tickets in London and New York."
  },
  {
    id: 11,
    cover:concertImage,
    banner:"Shows and Concerts",
    title:"UP TO 5% DISCOUNT 80% Coverage",
    description:"Enjoy a guaranteed discount of up to 5% on the lowest online prices for shows and Concerts, Festivals, Opera and Ballet."
  },
  {
    id: 12,
    cover:sportImage,
    banner:"Sports Tickets",
    title:"UP TO 5% DISCOUNT 80% Coverage",
    description:"Enjoy a guaranteed discount of up to 5% on the lowest online prices for world Sport Events."
  },
  {
    id: 13,
    cover:cruisesImage,
    banner:"Cruises",
    title:"UP TO 5% DISCOUNT 90% Coverage",
    description:"Enjoy a guaranteed discount of up to 5% on the lowest online prices for the leading international Cruise Lines"
  },
  {
    id: 14,
    cover:transfareImage,
    banner:"Transfers",
    title:"UP TO 20% DISCOUNT 80% Coverage",
    description:"Enjoy a guaranteed discount of up to 20% on the lowest online prices for Transfers from and to the international airports."
  },
  {
    id: 15,
    cover:rentalImage,
    banner:"Car Rental",
    title:"UP TO 20% DISCOUNT 90% Coverage",
    description:"Enjoy a guaranteed discount of up to 20% on the lowest online prices for Car Rental in all major cities worldwide."
  },
  {
    id: 16,
    cover:trainImage,
    banner:"Trains",
    title:"UP TO 20% DISCOUNT 70% Coverage",
    description:"Enjoy a guaranteed discount of up to 20% on the lowest online prices for Train Tickets in selected cities worldwide."
  },
  {
    id: 17,
    cover:ferriesZoomedImage,
    banner:"Ferries",
    title:"UP TO 20% DISCOUNT 70% Coverage",
    description:"Enjoy a guaranteed discount of up to 20% on the lowest online prices for Ferries in selected cities worldwide."
  },
  {
    id: 18,
    cover:coachesImage,
    banner:"Coaches / Buses",
    title:"UP TO 20% DISCOUNT. GTO covers many coaches in selected cities worldwide.",
    description:"Enjoy a guaranteed discount of up to 20% on the lowest online prices for Coaches Tickets when you book through your GTO Personal Travel Assistant Team."
  },
  {
    id: 19,
    cover:airprotImage,
    banner:"Airport Lounges",
    title:"UP TO 5% DISCOUNT. GTO covers around 1300 Airport Lounges worldwide.",
    description:"Enjoy a guaranteed discount of up to 5% on the lowest online prices for Airport Lounges when you book through your GTO Personal Travel Assistant Team."
  },
  {
    id: 20,
    cover:resturantImage,
    banner:"Restaurants",
    title:"GTO covers many restaurants, cafes, delivery, and supermarkets in several countries.",
    description:"Enjoy generous discounts on Eating and Drinking when you use your BrandVouchers.com account."
  },
  {
    id: 21,
    cover:shoppingImage,
    banner:"Shopping",
    title:"GTO covers many Top International and Local Brands in various countries.",
    description:"Enjoy generous discounts on Shopping when you use your BrandVouchers.com account."
  },
]


// 1 2 3
// 4 5 6
// 7 8 9


export default function page() {
  return (
    <div className='discount-product-page'>
      <div className="discount-product-text">
        <p className="discount-product-title">
          Discounted Travel Products and Services
        </p>
        <p className="discount-product-description">
          GTO offers its members generous discounts on the lowest prices they can find online for 
          anything travel related. The GTO Personal 
          Travel Assistant Team books on members behalf after applying a generous discount.
        </p>
      </div>
      <div className="all-carts">
        {
          CARDS.map(cardDetail =>{
            let animationIdx = (cardDetail.id-1) % 3 + 1;
            let nameOfClass = "";
            if(animationIdx === 1)
              nameOfClass = "one"
            else if(animationIdx === 2)
              nameOfClass = "two"
            else if(animationIdx === 3)
              nameOfClass = "three"

            return(
              <div key={cardDetail.id} className = {nameOfClass}>

                <ProductCart
                  
                  id={cardDetail.id}
                  cover={cardDetail.cover} 
                  banner={cardDetail.banner} 
                  title={cardDetail.title} 
                  description={cardDetail.description}
                  key={cardDetail.id}
                />
              </div>

            )
          })
        }
      </div>
    </div>
  )
}
