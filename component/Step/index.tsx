import React from 'react'
import "./styles.css"
import Image, {StaticImageData} from "next/image"


interface StepProps {
    id: number;
    title: string;
    description: string;
    image: StaticImageData;
}

export default function Step(props : StepProps) {
    const {title, image, description} = props;
    return (
        <div className='step-component'>
            <Image className='step-image' src={image} alt='step'/>
            <div className="step-text">
                <p className="step-title">{title}</p>
                <p className="step-description">{description} </p>
            </div>
        </div>
    )
}
