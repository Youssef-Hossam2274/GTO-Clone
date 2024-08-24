'use client'
import React, { useState } from 'react'
import "./styles.css"
import { useDispatch } from 'react-redux'
import { Login } from '@/redux/Slices/LoginSubmitSlice'
import Modal from '../Modal'
import EmaiInput from '../EmailInput'


export default function LoginForm({ modal, setModal }: { modal: boolean, setModal: (state: boolean) => void }) {
    const dispatch = useDispatch();
    const [validInput, setValidInput] = useState(false);
    const [startedWrite, setStartedWrite] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const handleChange = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setValidInput(emailRegex.test(inputValue))
        setStartedWrite(true);
    }

    const handleSubmit = () => {
        const logged = true;
        const title = "Mr"
        const firstName = "Client"
        const lastName = ""
        const email = "client.gto@gmail.com"
        const country = "Egypt"
        const residence = "Egypt"
        const invitationCode = "123456"
        if (validInput && inputValue === "client.gto@gmail.com") {

            dispatch(Login({
                payload: {
                    logged: logged,
                    title: title,
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    country: country,
                    residence: residence,
                    invitationCode: invitationCode,
                }
            }))
            // localStorage.setItem("logged", String(logged))
            // localStorage.setItem("title", title)
            // localStorage.setItem("firstName", firstName)
            // localStorage.setItem("lastName", lastName)
            // localStorage.setItem("email", email)
            // localStorage.setItem("country", country)
            // localStorage.setItem("residence", residence)
            // localStorage.setItem("invitationCode", invitationCode)

            setModal(false);
        }
        else {
            setValidInput(false);
            setStartedWrite(true);
        }

    }

    return (
        <div className='LoginForm-component'>
            <Modal isOpen={modal} setIsOpen={setModal}>
                <p className="LoginFormTitle">Log in</p>
                <EmaiInput
                    inputValid={validInput}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    onChange={handleChange}
                    startedWrite={startedWrite}
                />
                <button className='LoginFormButton' onClick={handleSubmit}>Log in</button>
            </Modal>
        </div>
    )
}