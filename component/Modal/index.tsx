import React from 'react'
import "./styles.css"
import Image from 'next/image'
import closeIcon from "@/gto-assets/Images/close-btn-icon.svg"
import { useDispatch } from 'react-redux'

export default function Modal({ isOpen, setIsOpen, children }: { isOpen?: boolean, setIsOpen?: (state: boolean) => void, children: React.ReactNode }) {

    return (
        <div className='modal-component'>
            {isOpen && (
                <div className="modal">
                    <div className="upper-modal">
                        <div className="close-modal" onClick={() => {
                            if (setIsOpen)
                                setIsOpen(false)
                        }}>
                            <Image src={closeIcon} alt='' />
                        </div>
                    </div>
                    {children}
                </div>
            )}

        </div>
    )
}
