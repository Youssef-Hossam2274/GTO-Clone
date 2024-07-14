import React from 'react'
import "./styles.css"
import TABLE from "@/data/memberShipTabel";
import TABEL from '@/data/memberShipTabel';

interface infoRowProps {
    rowTitle: string;
    col1: string;
    col2: string;
    col3: string;
    col4: string;
}

const SUBSCRIPTION = {
    quarter:"$100.00",
    mid:"$500.00",
    thirdQuarter:"$1,000.00",
    annual:"$2,500.00"
}

export default function MemberShipTabel() {
    return (
        <div className='memberShip-tabel-component'>
            {
                TABEL.map(tabelDetail =>{
                    return(
                        <>
                            <div className="title-row">
                                {tabelDetail.title}
                            </div>
                            {
                                tabelDetail.rows.map(infoRowDetail =>{
                                    return(
                                        <InfoRow
                                            key={tabelDetail.id}
                                            rowTitle={infoRowDetail.rowTitle}
                                            col1={infoRowDetail.col1}
                                            col2={infoRowDetail.col2}
                                            col3={infoRowDetail.col3}
                                            col4={infoRowDetail.col4}
                                        />
                                    )
                                })
                            }
                        </>
                    )
                })
            }
            <div className="info-row">
                <div className="info-row-title">
                    Annual Fees
                </div>
                <span className="first col">{SUBSCRIPTION.quarter}</span>
                <span className="second col">{SUBSCRIPTION.mid}</span>
                <span className="third col">{SUBSCRIPTION.thirdQuarter}</span>
                <span className="forth col">{SUBSCRIPTION.annual}</span>
            </div>
            <div className="memberShip-text">
                <p className="memberShip-description">
                    Discount and Credit are based on Major Online Platforms only, not on unknown websites, mobile apps, ..etc. Flight Discount is based on official airlines website only (Please ask your Travel Assistant Team for references), and members must pay the city tax
                    (has different name in some countries) to the hotel directly whenever required.
                </p>
                <p className="memberShip-description">
                    Any Credit will be deposited in your wallet, you can access your wallet once you login using your email and password (please contact your Travel Assistant Team if you have any questions). 
                    All type of credit can only be used to book refundable hotel stays.
                </p>
            </div>
        </div>
    )
}

const InfoRow = ({
    rowTitle, col1, col2, col3, col4
}:infoRowProps)=>{
    return(
        <div className="info-row">
            <div className="info-row-title">
                {rowTitle}
            </div>
            <span className="col">{col1}</span>
            <span className="col">{col2}</span>
            <span className="col">{col3}</span>
            <span className="col">{col4}</span>
        </div>
    )
}