import Image from "next/image";
import Link from "next/link";

export default function MobileNav() {
  return (
    <nav className='lg:hidden fixed bottom-0 left-0 w-full flex justify-around items-center bg-white py-4 px-2 border-t border-slate-300 text-sm [&>a]:flex [&>a]:items-center [&>a]:flex-col [&>a]:gap-2'>
      <Link href={"#"}>
        <Image src={"/home-2.png"} alt='' width={20} height={20} />
        <span>خانه</span>
      </Link>
      <Link href={"#"}>
        <Image src={"/buildings.png"} alt='' width={20} height={20} />
        <span>اقامتگاه‌ها</span>
      </Link>
      <Link href={"#"}>
        <Image src={"/heart.png"} alt='' width={20} height={20} />
        <span>علاقه‌‌مندی‌های</span>
      </Link>
      <Link href={"#"}>
        <Image src={"/category.png"} alt='' width={20} height={20} />
        <span>خدمات دیگر</span>
      </Link>
      <Link href={"#"}>
        <Image src={"/profile.png"} alt='' width={20} height={20} />
        <span>ورود | ثبت نام</span>
      </Link>
    </nav>
  );
}
