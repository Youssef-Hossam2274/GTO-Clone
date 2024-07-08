import Image from "next/image";
import style from "./page.module.css"
import ImageSlider from "@/component/ImageSlider";
import Coverage from "@/component/Coverage";
import Assistant from "@/component/Assistant";
import OrganisationMembership from "@/component/OrganisationMembership"
import DownloadMobile from "@/component/DownloadMobile";
import HomeCart from "@/component/HomeCart";

export default function Home() {
  return (
    <div>
      <div className={style.content}>
        <ImageSlider/>
        <OrganisationMembership/>
        <Coverage/>
        <Assistant/>
        <HomeCart/>
        <DownloadMobile/>
      </div>
    </div>
  );
}
