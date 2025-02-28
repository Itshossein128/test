import Image from "next/image";
import Link from "next/link";
import DropDown from "./DropDown";
type TNavLink = {
  label: string;
  href: string;
};
const navLinks: TNavLink[] = [
  { label: "صفحه اصلی", href: "#" },
  { label: "اقامتگاه", href: "#" },
  { label: "مقالات", href: "#" },
  { label: "راه‌های ارتباطی", href: "#" },
];
export default function Header() {
  return (
    <header className='lg:p-[28px_0_27px] p-[58px_0_19px]'>
      <div className='container grid lg:grid-cols-[1fr_auto_1fr] w-full'>
        <div className='flex items-center justify-center lg:justify-start'>
          <picture>
            {/* mobile logo */}
            <source media='(max-width: 768px)' srcSet='/HAJIJA-mobile.png' />
            {/* desktop logo */}
            <Image
              src='/HAJIJA.png'
              alt='HAJIJA'
              width={208}
              height={61}
              className='w-[176px]'
            />
          </picture>
        </div>
        <nav className='hidden lg:flex items-center justify-center p-[9px_0_9px_9px] bg-gray rounded-[14px] font-bold text-[19px]'>
          <ul className='fcc nav-list'>
            {navLinks.map(({ label, href }, index) => {
              return (
                <li key={index} className='p-[3px_43px]'>
                  <Link href={href}>{label}</Link>
                </li>
              );
            })}
          </ul>
          <Image src={"/nav-icon.svg"} alt='' height={68} width={68} />
        </nav>
        <div className='hidden lg:flex justify-end items-center'>
          <DropDown
            button={
              <button className='rounded-12 rounded-xl fcc gap-5 border border-black p-[16px_17px] bg-primary text-white text-shadow text-[20px] h-fit'>
                ساشا آذرخش آلوچه
                <span>
                  <Image
                    src={"/arrow-square-left.svg"}
                    alt=''
                    width={20}
                    height={20}
                  />
                </span>
              </button>
            }
            content={<span>لورم ایپسوم</span>}
          />
        </div>
      </div>
    </header>
  );
}
