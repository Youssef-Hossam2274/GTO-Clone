'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image';
import "./styles.css";
import img1 from "@/images/home-slider-1.jpg";
import img2 from "@/images/home-slider-2.jpg";
import img3 from "@/images/home-slider-3.jpg";
import img4 from "@/images/home-slider-4.jpg";
import img5 from "@/images/home-slider-5.jpg";
import img6 from "@/images/home-slider-6.jpg";
import img8 from "@/images/home-slider-8.jpg";
import img9 from "@/images/home-slider-9.jpg";
import arrow from "@/images/prevArrow.svg";
import smallArrow from "@/images/smallArrow.svg";

let IMAGES = [
    {
        id: 1,
        img: img1,
        title:"40% Discount on Musicals",
        description:"As a GTO member you can enjoy up to 40% discount on the lowest online price you can find on major websites for Musicals & West End"
    },
    {
        id: 2,
        img: img2,
        title:"40% Discount On Any Hotel WorldWide",
        description:"As a GTO member you can enjoy up to 40% discount on the lowest online price you can find on major websites for Hotels & Serviced Apartments WorldWide"
    },
    {
        id: 3,
        img: img3,
        title:"40% Discount On Attractions",
        description:"As a GTO member you can enjoy up to 40% discount on the lowest online price you can find on major websites for Tourist Attractions, Activities and Landmarks WorldWide"
    },
    {
        id: 4,
        img: img4,
        title:"40% Discount On Theme Parks",
        description:"As a GTO member you can enjoy up to 40% discount on the lowest online price you can find on major websites for most popular Theme Parks WorldWide"
    },
    {
        id: 5,
        img: img5,
        title:"40% Discount On Experiences",
        description:"As a GTO member you can enjoy up to 40% discount on the lowest online price you can find on major websites for Experiences & Adventure WorldWide"
    },
    {
        id: 6,
        img: img6,
        title:"40% Discount On Travel On WorldWide",
        description:"As a GTO member you can enjoy up to 40% discount on the lowest online price you can find on major TravelBooking Websites WorldWide"

    },
    {
        id: 7,
        img: img8,
        title:"40% Discount On Resorts WorldWide",
        description:"As a GTO member you can enjoy up to 40% discount on the lowest online price you can find on major websites for Resorts WorldWide"
    },
    {
        id: 8,
        img: img9,
        title:"40% Discount On Activities",
        description:"As a GTO member you can enjoy up to 40% discount on the lowest online price you can find on major websites for Activities WorldWide"
    },
]



export default function ImageSlider() {
    let [imageIdx, setImageIdx] = useState(0);

    useEffect(()=>{
    
        const imageInterval =  setInterval(()=>{
            let idx = imageIdx+1;
            if(idx == IMAGES.length)
                idx = 0;
            setImageIdx(idx);
        }, 4000);

        return function cleanup() {
            clearInterval(imageInterval);
        };

    }, [imageIdx]);

    const nextIdx = () =>{
        const idx = ((imageIdx+1) % IMAGES.length);
        setImageIdx(idx);
    }
    const prevIdx = () =>{
        const idx = ((imageIdx-1 + IMAGES.length) % IMAGES.length);
        setImageIdx(idx);
    }

    return (
        <div className='image-slider-component'>
            {
                IMAGES.map(img =>{
                    return(
                        ( img.id-1 === imageIdx) && (
                            <>
                                <div className="rectangle-slider"></div>
                                <Image className="imgSlider" src={img.img} alt='img' key={img.id}/>
                                <div className="description-box">
                                    <p className='description'>
                                        {img.description}
                                    </p>
                                    <div className="join-now">
                                        <p>Join Now</p>
                                        <Image src={smallArrow} alt='smallArrow' style={{width : "20px"}}/>
                                    </div>
                                </div>
                                <div className="slider-text">
                                    <p className="slider-titles">
                                        {img.title}
                                    </p>
                                    <p className="slider-description">
                                        Become a member & receive generous discounts on the lowest  online prices
                                    </p>
                                </div>
                            </>
                        )
                    )
                })
            }

            <div className="next-prev">
                <span className='prev-arrow' onClick={prevIdx}><Image src={arrow} alt='arrow'/></span>
                <span className='next-arrow' onClick={nextIdx}><Image src={arrow} alt='arrow'/></span>
            </div>
            <div className="dots">
                {
                    IMAGES.map((img) =>{
                        return(
                            <div className="dot-number" key={img.id}>
                                <div className= {img.id-1 == imageIdx ? "dot active" : "dot"} key={img.id} onClick={()=>setImageIdx(img.id-1)}>
                                </div>
                                {
                                    img.id-1 == imageIdx ? `0${img.id}`:""
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}