import Image from "next/image";
import style from "./page.module.css"
import ImageSlider from "@/component/ImageSlider";
import Coverage from "@/component/Coverage";
import MemberShip from "@/component/MemberShip";
import Assistant from "@/component/Assistant";

export default function Home() {
  return (
    <div>
      <div className={style.content}>
        <ImageSlider/>
        <MemberShip/>
        <Coverage/>
        <Assistant/>
      </div>
    </div>
  );
}
