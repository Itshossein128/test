"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const topRef = useRef<HTMLElement | null>(null); // رفرنس برای بالای صفحه

  // اسکرول به بالای صفحه با انیمیشن
  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({
        behavior: "smooth", // انیمیشن اسکرول نرم
        block: "start", // از بالای المنت شروع کن
      });
    }
  };

  useEffect(() => {
    topRef.current = document.querySelector("body") as HTMLElement;
  }, []);

  // مدیریت حالت باز/بسته بودن هر بخش
  const [isOpen, setIsOpen] = useState({
    guides: false,
    products: false,
    accommodations: false,
    contact: false,
  });

  const toggleSection = (section: keyof typeof isOpen) => {
    setIsOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className='lg:container flex justify-center flex-col overflow-hidden'>
      <div
        className='bg-[url(/footer-shape.png)] bg-no-repeat bg-bottom px-4 py-2 fcc z-10 mb-[-19px] -translate-x-1/4 lg:translate-x-0'
        style={{ backgroundSize: "80px" }}
      >
        <button
          onClick={scrollToTop}
          className='border border-primary bg-[#dcdbf7] rounded-full p-2 transition-transform hover:scale-105'
        >
          <Image src={"/arrow-circle-up.png"} alt='' width={26} height={26} />
        </button>
      </div>
      <div
        className='bg-white rounded-3xl p-[72px_38px_30px] lg:p-[72px_30px_30px]'
        style={{ boxShadow: "rgb(0, 0, 0, 0.04) 0px 0px 20px 0px" }}
      >
        <div className='flex items-center justify-between mb-10'>
          <div className='lg:pl-20'>
            <h5 className='font-bold mb-5 right-line text-sm lg:text-[16px]'>
              داستان حاجیجا چیست؟
            </h5>
            <div className='right-line-3 text-[12px] lg:text-[16px]'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد.
            </div>
          </div>
          <div className='bg-primary w-[184px] h-[148px] fcc rounded-[14px] shrink-0 !hidden lg:!flex'>
            <Image src={`/logo-white.png`} alt='' width={128} height={58} />
          </div>
        </div>
        <div className='grid gap-3 lg:gap-[65px] lg:grid-cols-[auto_auto_auto_400px_470px] [&_h5]:mb-[17px] [&_h5]:font-bold [&_h5]:text-[14px] lg:[&_h5]:text-[19px] [&_a]:flex [&_a]:items-center [&_a]:gap-4 [&_a]:font-bold'>
          <div className='md:block'>
            <button
              onClick={() => toggleSection("guides")}
              className='w-full text-left font-bold text-[19px] flex items-center justify-between md:hidden bg-[#f1f1f1] text-sm p-4 rounded-xl'
            >
              <span>راهنمای مشتریان</span>
              <span className={isOpen.guides ? "rotate-90" : ""}>
                <Image
                  src={"/arrow-square-left.png"}
                  alt=''
                  width={16}
                  height={16}
                />
              </span>
            </button>
            <div
              className={`${
                isOpen.guides
                  ? "max-h-[200px] opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden lg:overflow-visible transition-all duration-300 ease-in-out md:max-h-none md:opacity-100`}
            >
              <h5 className='hidden md:block right-line'>راهنمای مشتریان</h5>
              <ul>
                <li>
                  <Link href='#' className=''>
                    درباره ما
                  </Link>
                </li>
                <li>
                  <Link href='#' className=''>
                    تماس با ما
                  </Link>
                </li>
                <li>
                  <Link href='#' className=''>
                    سوالات متداول
                  </Link>
                </li>
                <li>
                  <Link href='#' className=''>
                    حقوق کاربران
                  </Link>
                </li>
                <li>
                  <Link href='#' className=''>
                    قوانین و مقررات
                  </Link>
                </li>
                <li>
                  <Link href='#' className=''>
                    وبلاگ حاجیجا
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* بخش محصولات ما */}
          <div className='md:block'>
            <button
              onClick={() => toggleSection("products")}
              className='w-full text-left font-bold text-[19px] flex items-center justify-between md:hidden bg-[#f1f1f1] text-sm p-4 rounded-xl'
            >
              <span>محصولات ما</span>
              <span className={isOpen.products ? "rotate-90" : ""}>
                <Image
                  src={"/arrow-square-left.png"}
                  alt=''
                  width={16}
                  height={16}
                />
              </span>
            </button>
            <div
              className={`${
                isOpen.products
                  ? "max-h-[200px] opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden lg:overflow-visible transition-all duration-300 ease-in-out md:max-h-none md:opacity-100`}
            >
              <h5 className='hidden md:block right-line'>محصولات ما</h5>
              <ul>
                <li>
                  <Link href='#' className=''>
                    درباره ما
                  </Link>
                </li>
                <li>
                  <Link href='#' className=''>
                    تماس با ما
                  </Link>
                </li>
                <li>
                  <Link href='#' className=''>
                    سوالات متداول
                  </Link>
                </li>
                <li>
                  <Link href='#' className=''>
                    حقوق کاربران
                  </Link>
                </li>
                <li>
                  <Link href='#' className=''>
                    قوانین و مقررات
                  </Link>
                </li>
                <li>
                  <Link href='#' className=''>
                    وبلاگ حاجیجا
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* بخش اقامتگاه */}
          <div className='md:block'>
            <button
              onClick={() => toggleSection("accommodations")}
              className='w-full text-left font-bold text-[19px] flex items-center justify-between md:hidden bg-[#f1f1f1] text-sm p-4 rounded-xl'
            >
              <span>اقامتگاه</span>
              <span className={isOpen.accommodations ? "rotate-90" : ""}>
                <Image
                  src={"/arrow-square-left.png"}
                  alt=''
                  width={16}
                  height={16}
                />
              </span>
            </button>
            <div
              className={`${
                isOpen.accommodations
                  ? "max-h-[200px] opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden lg:overflow-visible transition-all duration-300 ease-in-out md:max-h-none md:opacity-100`}
            >
              <h5 className='hidden md:block right-line'>اقامتگاه</h5>
              <ul>
                <li>
                  <Link href='#' className=''>
                    شهر تهران
                  </Link>
                </li>
                <li>
                  <Link href='#' className=''>
                    شهر مهشد
                  </Link>
                </li>
                <li>
                  <Link href='#' className=''>
                    شهر کردستان
                  </Link>
                </li>
                <li>
                  <Link href='#' className=''>
                    شهر شیراز
                  </Link>
                </li>
                <li>
                  <Link href='#' className=''>
                    شهر خوزستان
                  </Link>
                </li>
                <li>
                  <Link href='#' className=''>
                    شهر تبریز
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* بخش ارتباط با ما */}
          <div className='md:block [&>a]:p-[10px] [&>a]:gap-[15px] [&>a]:font-bold [&>a]:flex [&>a]:items-center [&>a]:bg-[#f1f1f1] [&>a]:mt-[9px] [&>a]:rounded-[14px]'>
            <div
              className={` overflow-hidden lg:overflow-visible transition-all duration-300 ease-in-out md:max-h-none md:opacity-100 [&_a]:text-xs lg:[&_a]:text-[16px] [&_a]:bg-[#f1f1f1] [&_a]:flex [&_a]:p-[9px] [&_a]:rounded-[14px] [&_a]:mt-3`}
            >
              <h5 className='right-line mt-5 lg:mt-0'>ارتباط با ما</h5>
              <a href='#'>
                <div className='bg-white rounded-lg p-2 lg:p-[13px]'>
                  <Image
                    src={"/call-calling.png"}
                    alt=''
                    width={23}
                    height={23}
                  />
                </div>
                021 - 88844243
              </a>
              <a href='#'>
                <div className='bg-white rounded-lg p-2 lg:p-[13px]'>
                  <Image src={"/sms.png"} alt='' width={23} height={23} />
                </div>
                info@hajija.com
              </a>
              <a href='#'>
                <div className='bg-white rounded-lg p-2 lg:p-[13px]'>
                  <Image src={"/location.png"} alt='' width={23} height={23} />
                </div>
                تهران، جردن خیابان مطهری، رو به رو بانک پارسیان
              </a>
            </div>
          </div>

          {/* بخش ثبت شماره و لوگوها */}
          <div className=''>
            <h5 className='!bg-transparent col-span-3 right-line'>
              شمارتو ثبت کن از تخفیف ها خبر دار شو
            </h5>
            <div className='[&>*]:bg-[#f1f1f1] [&>*]:rounded-[14px] [&>div]:flex [&>div]:items-center [&>div]:justify-center grid gap-[9px] grid-cols-3'>
              <form className='col-span-3 p-[10px] flex items-center justify-between'>
                <input
                  type='text'
                  placeholder='*********09'
                  className='bg-transparent'
                />
                <button className='bg-primary text-white rounded-lg p-[13px]'>
                  ثبت شماره
                </button>
              </form>
              <div className='p-[24px] max-h-[147px]'>
                <Image src={"/Enamad.png"} alt='' width={100} height={100} />
              </div>
              <div className='p-[24px] max-h-[147px]'>
                <Image
                  src={"/neshane-melli.png"}
                  alt=''
                  width={100}
                  height={100}
                />
              </div>
              <div className='p-[24px] max-h-[147px]'>
                <Image src={"/Enamad.png"} alt='' width={100} height={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
