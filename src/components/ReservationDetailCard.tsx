import Image from "next/image";

type TProps = {
  icon: "house" | "rooms" | "building" | "moon" | "clock";
  title: string;
  desc: string;
};
export default function ReservationDetailCard({ icon, title, desc }: TProps) {
  return (
    <div className='flex items-center justify-start gap-[11px] lg:gap-[15px]'>
      <div className='w-[41px] h-[41px] lg:w-[60px] lg:h-[57px] fcc bg-[#ededff] rounded-lg'>
        <Image
          src={`/${icon}.png`}
          alt=''
          className='w-5 h-5 lg:w-[25px] lg:h-[25px]'
          width={25}
          height={25}
        />
      </div>
      <div className='flex flex-col self-stretch justify-between pt-[2px] lg:pt-0'>
        <span className='font-bold text-[#343434] text-[12px] lg:text-[19px]'>
          {title}
        </span>
        <span className='text=[#575757] font-medium text-xs lg:text-[16px]'>
          {desc}
        </span>
      </div>
    </div>
  );
}
