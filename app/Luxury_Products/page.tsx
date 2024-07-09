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
]



export default function page() {
  return (
    <div className='luxury-product-page'>
      <div className="luxury-product-text">
        <p className="luxury-product-title">
          Luxirous Products & Services
        </p>
        <p className="luxury-product-description">
          The GTO Personal Travel Assistant Team, with years of experience and considerable knowledge,
          will take care of members requirements. 
          The team knows how and where to source a wide rande of luxurious
          products and services on members behalf at a minimal fixed management fee of 5%.
        </p>
      </div>
      <div className="luxury-all-carts">
        {
          CARDS.map(cardDetail =>{
            let animationIdx = (cardDetail.id-1) % 2 + 1;
            let nameOfClass = "";
            if(animationIdx === 1)
              nameOfClass = "luxury-one"
            else if(animationIdx === 2)
              nameOfClass = "luxury-two"

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
