import React from 'react'

export default function ButtonSubmit({
    class_name, actionOnClick, title
}) {
    return (
        <div className='ButtonSubmit-component'>
            <button className={class_name} onClick={actionOnClick}> {title} </button>
        </div>
    )
}
