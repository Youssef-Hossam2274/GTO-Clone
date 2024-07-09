import React from 'react';
import Image, {StaticImageData} from "next/image";
import "./ProductCart.css"

interface ProductCartProps {
    id: number;
    cover: StaticImageData;
    banner: string;
    title: string;
    description: string;
}


export default function ProductCart(props : ProductCartProps) {
    const {id, cover, banner, title, description} = props;
    return (
        <div className='ProductCart-component'>

            <div className="ProductCart-slider">
                
                <div className="background-cover">
                    <Image src={cover} alt='Landmarks' />
                    <div className="banner">{banner}</div>
                </div>

                <div className="background-details">
                    <p className="background-title">
                        {title}
                    </p>
                    <p className="background-description">
                        {description}
                    </p>
                </div>

            </div>

        </div>
    )
}