import React from 'react'
import Image from 'next/image'
import coverageImage from "@/images/our-coverage.svg"
import "./styles.css"

export default function Coverage() {
    return (
        <div className='coverage-component'>
            <h1 className='coverage-title'>HIGHLIGHTS OF OUR COVERAGE</h1>    
            <Image src= {coverageImage} alt = "out-coverage" />
        </div>
    )
}
