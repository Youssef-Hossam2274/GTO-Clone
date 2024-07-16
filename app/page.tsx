import Image from "next/image";
import style from "./page.module.css"
import ImageSlider from "@/component/ImageSlider";
import Coverage from "@/component/Coverage";
import Assistant from "@/component/Assistant";
import OrganisationMembership from "@/component/OrganisationMembership"
import DownloadMobile from "@/component/DownloadMobile";
import HomeCart from "@/component/HomeCart";
import GtoNumbers from "@/component/GtoNumbers";
import MemberShipBenefits from "@/component/MemberShipBenefits";
import SliderSwiper from "@/component/SliderSwiper";


export default function Home() {
  return (
    <div>
      <div className={style.homePage}>
        <SliderSwiper/>
        {/* <ImageSlider/> */}
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
