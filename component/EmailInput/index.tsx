import React, { useState } from 'react'
import "./styles.css"
import check_circle from "@/gto-assets/Images/check_circle.svg"
import cancel_circle from "@/gto-assets/Images/cancel_circle.svg"
import Image from 'next/image'


export default function EmaiInput({ inputValue, inputValid, setInputValue, onChange, startedWrite }: {
    inputValue: string, inputValid: boolean, setInputValue: (value: string) => void, onChange: () => void, startedWrite: boolean
}) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
        <div className='emailInput-component'>
            <div className={`email-block ${startedWrite ? inputValid && startedWrite ? "correct" : "wrong" : ""}`}>
                <input className='emailInput' placeholder='Email' onChange={(e) => {
                    onChange()
                    setInputValue(e.target.value)
                }} />
                {startedWrite && (
                    <>
                        <Image className='correct-circle' style={{ display: (inputValid ? "flex" : "none") }} src={check_circle} alt='' />
                        <Image className='wrong-circle' style={{ display: (inputValid ? "none" : "flex") }} src={cancel_circle} alt='' />
                    </>
                )}
            </div>
            {startedWrite && (
                <>
                    <div className="WrongEmail" style={{ display: (inputValid ? "none" : "flex") }}>Invalid Email</div>
                    <div className="CorrectEmail" style={{ display: (inputValid ? "flex" : "none") }}>Valid Email</div>
                </>
            )}
        </div>
    )
}
