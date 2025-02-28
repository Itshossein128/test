import Image from "next/image";
import { ReactElement, ReactNode } from "react";

type TProps = {
  icon: "crown" | "document" | "extra";
  title: string;
  children: ReactNode;
  extraHeading?: ReactElement;
};

const crownStyle = "[&>div]:bg-primary color-primary";
const documentStyle = "[&>div]:bg-[#343434] color-[#343434]";
const extraStyle = "[&>div]:bg-[#ff2727] color-[#ff2727]";
let headingStyle;
export default function FormRaw({
  icon,
  title,
  extraHeading,
  children,
}: TProps) {
  switch (icon) {
    case "crown":
      headingStyle = crownStyle;
      break;
    case "document":
      headingStyle = documentStyle;
      break;
    case "extra":
      headingStyle = extraStyle;
      break;
  }

  return (
    <div className='p-[15px_15px_7px] lg:p-[30px]'>
      <div className={`flex flex-col lg:flex-row lg:items-center justify-between`}>
        <div
          className={`flex items-center justify-start gap-4 mb-[19px] lg:mb-[26px] ${headingStyle}`}
        >
          <div className='w-10 h-10 lg:w-11 lg:h-11 rounded-lg fcc'>
            <Image src={`/${icon}.png`} width={23} height={23} alt='' />
          </div>
          <h5 className='font-bold text-[12px] lg:text-[17px]'>{title}</h5>
        </div>
        {extraHeading}
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-[11px] lg:gap-5 [&>span:last-child]:hidden'>{children}</div>
    </div>
  );
}
