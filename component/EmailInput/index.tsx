import React, { useState } from 'react'
import "./styles.css"
import check_circle from "@/gto-assets/Images/check_circle.svg"
import cancel_circle from "@/gto-assets/Images/cancel_circle.svg"
import Image from 'next/image'

export const emailValidation = () => {
    const WrongEmail = document.querySelector(".WrongEmail");
    const CorrectEmail = document.querySelector(".CorrectEmail");
    const emailInput = document.querySelector(".emailInput");
    const emailBlock = document.querySelector(".email-block");
    const wrongCircle = document.querySelector(".wrong-circle");
    const correctCircle = document.querySelector(".correct-circle");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    emailBlock?.classList.remove("correct")
    emailBlock?.classList.remove("wrong")
    WrongEmail.style.display = "none";
    CorrectEmail.style.display = "none";
    correctCircle.style.display = "none";
    wrongCircle.style.display = "none";

    if (emailRegex.test(emailInput.value) && emailInput.value === "client.gto@gmail.com") {
        emailBlock?.classList.add("correct")
        CorrectEmail.style.display = "flex";
        correctCircle.style.display = "flex";
        return true;
    }
    else {
        emailBlock?.classList.add("wrong")
        WrongEmail.style.display = "flex";
        wrongCircle.style.display = "flex";
        return false;
    }

}

export default function EmaiInput({ setState }: { setState: (state: boolean) => void }) {
    const [inputValue, setInputValue] = useState("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [validInput, setValidInput] = useState<boolean>(false);
    // const emailValidation = () => {
    //     setValidInput(emailRegex.test(inputValue) && inputValue !== "");
    // }
    return (
        <div className='emailInput-component'>
            <div className="email-block">
                <input className='emailInput' placeholder='Email' onChange={() => {
                    setState(emailValidation())
                    // setState(validInput)
                }} />
                <Image className='correct-circle' src={check_circle} alt='' />
                <Image className='wrong-circle' src={cancel_circle} alt='' />
            </div>
            <div className="WrongEmail">Invalid Email</div>
            <div className="CorrectEmail">Valid Email</div>
        </div>
    )
}
