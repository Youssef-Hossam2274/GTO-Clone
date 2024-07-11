import React from 'react'
import "./styles.css"
import Image, {StaticImageData} from 'next/image'



interface memberCartProps {
    id: number;
    image: StaticImageData;
    description: string;
}

export default function MemberCart({
    id,image, description
}:memberCartProps) {

    return (
        <div className='memberCart-component'>
            <div className="cart-number">
                <p>{id}</p>
            </div>
            <div className="memberCart">
                <Image src={image} alt='memberCart Image'/>
                <p className="memberCart-description">
                    {description}
                </p>
            </div>
        </div>
    )
}
