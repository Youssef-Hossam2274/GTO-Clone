'use client'
import React from 'react'
import "./styles.css"
import silverCard from "@/images/silverCard.png"
import Image from 'next/image'
import CharToImage from '@/component/charToImage'
import {mapCharImageSilver} from "@/data/charsToImage"
import { useDispatch, useSelector } from 'react-redux'
import { Container } from 'postcss'

export default function ProfileCard() {
    const {firstName, lastName} = useSelector(state => state.loginSubmit);
    const dataArray = [
        {
            containerName : "infoNumbers",
            class_name: "infoNumbers-block",
            data: ["1111", "2988", "2656", "8823"]
        },
        {
            containerName : "infoExpires",
            class_name: "infoExpires-block",
            data: ["expires", "end", "07/25"]
        },
        {
            containerName : "infoName",
            class_name: "infoName-block",
            data: [firstName, lastName]
        },
    ]
    return (
        <div className='ProfileCard-component'>
            <div className="gto-card">
                <Image src={silverCard} alt='silverCard'/>
                <div className="expireDate">

                </div>
                <div className="infoCard">
                    {
                        dataArray.map(element => {
                            return(
                                <div key="" className= {element.containerName}>
                                    {
                                        element.data.map(elementDetail =>{
                                            return(
                                                <CharToImage
                                                key= ""
                                                class_name={element.class_name}
                                                text={elementDetail.toLowerCase().split("")}
                                                mapCharImage={mapCharImageSilver}
                                            />
                                            )
                                        })

                                    }
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}
