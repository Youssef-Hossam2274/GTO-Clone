import React from 'react'
import "./styles.css"
import Modal from '../Modal'
import EmaiInput, {emailValidation} from '../EmailInput'

export default function ProfileEditModal({
    typeFormEdit
}) {

    const validEditForm = ()=>{
        let validFormFlag = true;
        if(typeFormEdit == "emailEdit"){
            validFormFlag = emailValidation();
        }
    }

    return (
        <div className='ProfileEditModal-component'>
            <Modal>
                {
                    typeFormEdit == "emailEdit" && <EmaiInput/>
                }

                <button>Submit</button>
            </Modal>
        </div>
    )
}


// 