'use client'
import Image from "next/image";
import style from "./page.module.css"
import Coverage from "@/component/Coverage";
import Assistant from "@/component/Assistant";
import OrganisationMembership from "@/component/OrganisationMembership"
import DownloadMobile from "@/component/DownloadMobile";
import HomeCart from "@/component/HomeCart";
import GtoNumbers from "@/component/GtoNumbers";
import MemberShipBenefits from "@/component/MemberShipBenefits";
import SliderSwiper from "@/component/SliderSwiper";
import { useSelector, UseSelector } from "react-redux";

export default function Home() {
  const s = useSelector(state => state);
  console.log(s)
  return (
    <div>
      <div className={style.homePage}>
        <SliderSwiper/>
        <OrganisationMembership/>
        <GtoNumbers/>
        <MemberShipBenefits/>
        <Coverage/>
        <HomeCart/>
        <Assistant/>
        <DownloadMobile/>
      </div>
    </div>
  );
}
