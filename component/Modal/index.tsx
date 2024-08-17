import React from 'react'
import "./styles.css"
import Image from 'next/image'
import closeIcon from "@/gto-assets/Images/close-btn-icon.svg"
import { useDispatch } from 'react-redux'
import { modalToggled } from '@/redux/Slices/ModalSlice'

export default function Modal({children}) {
    
    const dispatch = useDispatch();
    const closeModal = ()=>{
        const LoginForm = document.querySelector(".modal");
        LoginForm?.classList.add("close");
        setTimeout(() => {
            dispatch(modalToggled())
        }, 500);
    }
    return (
        <div className='modal-component'>
            <div className="modal">
                <div className="upper-modal">
                    <div className="close-modal" onClick={closeModal}>
                        <Image src = {closeIcon} alt=''/></div>
                </div>
                {children}
            </div>
        </div>
    )
}
