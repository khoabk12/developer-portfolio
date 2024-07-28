// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { split } from "postcss/lib/list";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Skilled in:
          </p>
          <span className="font-medium mb-5 text-[#16f2b3] text-xl">
            <p>{split(personalData.descriptionMobile, ":")[0]}</p>
          </span>
          <p style={{ marginBottom: 25, paddingLeft: 40 }}>
            {split(personalData.descriptionMobile, ":")[1]}
          </p>

          <span className="font-medium mb-5 text-[#16f2b3] text-xl">
            <p>{split(personalData.descriptionPowerPlatform, ":")[0]}</p>
          </span>
          <p style={{ marginBottom: 25, paddingLeft: 40 }}>
            {split(personalData.descriptionPowerPlatform, ":")[1]}
          </p>

          <span className="font-medium mb-5 text-[#16f2b3] text-xl">
            <p>{split(personalData.descriptionRPA, ":")[0]}</p>
          </span>
          <p style={{paddingLeft: 40 }}>{split(personalData.descriptionRPA, ":")[1]}</p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={383}
            height={383}
            alt="Nguyễn Đăng Khoa"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
