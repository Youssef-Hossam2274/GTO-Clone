import React from 'react'
import "./page.css"
import MemberShipTabel from '@/component/MemberShipTabel'
import MemberShipCredit from '@/component/MemberShipCredit'

export default function page() {
  return (
    <div className= "member-ship-type-page">
      <div className="main-container">
        <MemberShipCredit/>
        <MemberShipTabel/>
      </div>
    </div>
  )
}
