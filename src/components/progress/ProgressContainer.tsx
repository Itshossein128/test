import Image from "next/image";
import React from "react";
import MobileProgress from "./MobileProgress";

type TProps = {
  level: number;
};
const levels: string[] = [
  "گام اول: مشخصات فرد",
  "گام دوم: بررسی ظرفیت",
  "گام سوم: پرداخت وجه",
  "گام چهارم: صدور ووچر",
];
export default function ProgressContainer({ level = 1 }: TProps) {
  return (
    <>
      <div className='hidden lg:flex justify-between items-center container pt-[25px] pb-[29px] border-b border-t border-[#DCDCDC]'>
        {levels.map((item, index) => (
          <div
            key={index}
            className={`${
              level - 1 === index ? "current-level" : "[&>*]:bg-[#dcdcdc]"
            } [&>*]:rounded-[10px] [&>*]:min-w-[60px] [&>*]:h-[60px] text-[20px] fcc gap-[10px]`}
          >
            <div className='fcc'>
              {level - 1 === index ? (
                <Image src={`/verify.png`} width={30} height={30} alt='' />
              ) : (
                <Image src={`/information.png`} width={30} height={30} alt='' />
              )}
            </div>
            <div className='fcc w-[274px]'>{item}</div>
          </div>
        ))}
      </div>
      <div className='lg:hidden'>
        <MobileProgress slides={levels} level={level} options={{ direction: "rtl" }} />
      </div>
    </>
  );
}
