"use client";
import Footer from "@/components/Footer";
import Form from "@/components/form/Form";
import ProgressContainer from "@/components/progress/ProgressContainer";
import ReservationDetailCard from "@/components/ReservationDetailCard";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {
  const [code, setCode] = useState<string>("NMJ2516NJH");
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <>
      <ProgressContainer level={1} />
      <main className='container mt-[25px] lg:mt-[45px] grid grid-rows-[auto_auto] gap-[25px] lg:grid-cols-[516px_auto] [&>*:not(aside)>*]:bg-white [&>aside>*]:bg-white [&>*>*]:rounded-2xl'>
        <aside className='flex flex-col gap-[25px] lg:col-start-1'>
          <div className='p-[9px] lg:p-[18px] hidden lg:block'>
            <div className='max-h-[200px] overflow-hidden lg:max-h-[unset] rounded-[10px]'>
              <Image src={`/image1.png`} width={485} height={404} alt='' />
            </div>
          </div>
          <div>
            <h5 className='font-semibold text-sm lg:text-[23px] p-[23px_23px_17px_23px] lg:p-[31px_23px_26px_23px]'>
              اعمال کد تخفیف
            </h5>
            <div className='border-custom-dash'></div>
            <div className='p-[15px_23px] lg:p-[33px_23px]'>
              <span className='text-xs lg:text-[17px] font-medium'>
                مشترک گرامی کد تخفیف خود را وارد نمایید.
              </span>
              <form className='flex gap-4 [&>*]:text-center [&>*]:rounded-[10px] mt-4 lg:mt-[33px] mb-[17px] lg:mb-[40px] text-[11px] lg:text-[16px]'>
                <button className='bg-[#343434] grow text-white font-semibold p-[10px_23px] text-nowrap lg:p-[20px_28px] flex items-center justify-center'>
                  اعمال کد تخفیف
                </button>
                <input
                  type='text'
                  className='bg-[#def3e6] font-semibold text-[#22AD5A] outline-none border-none grow p-[14px] lg:p-[20px] flex items-center justify-center'
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                />
              </form>
              <div className='flex justify-between items-center bg-[#f2f2f2] rounded-[10px] p-[14px_23px] lg:p-[20px] text-[#303030] font-medium'>
                <span className='text-[10px] lg:text-[16px]'>
                  مبلغ کد تخفیف:
                </span>
                <span className='text-[12px] font-bold lg:text-[16px]'>
                  2,000,000 تومان
                </span>
              </div>
            </div>
          </div>
          <div>
            <h5 className='font-semibold text-sm lg:text-[23px] p-[23px_23px_17px_23px] lg:p-[31px_23px_26px_23px]'>
              صورت حساب پرداختی
            </h5>
            <div className='border-custom-dash'></div>
            <div className='[&>div]:flex [&>div]:mt-[20px] lg:[&>div]:mt-[36px] px-[20px] [&>div]:justify-between text-xs lg:text-[17px] font-medium'>
              <div>
                <span>قیمت کل 3 شب</span>
                <span>15,000,000 تومان</span>
              </div>
              <div>
                <span>مبلغ کسر شده کد تخفیف</span>
                <span>2,000,000 تومان</span>
              </div>
              <div>
                <span>مالیات و حق سرویس</span>
                <span>500,000 تومان</span>
              </div>
              <div className='!mt-[19px] lg:!mt-[50px] mb-[19px] bg-green text-white p-[14px_26px] lg:p-5 rounded-[10px]'>
                <span>مجموع مبلغ پرداختی</span>
                <span className='text-xs lg:text-[18px]'>18,500,000 تومان</span>
              </div>
            </div>
          </div>
          <label className='flex items-center justify-between cursor-pointer p-[12px_17px] lg:p-[23px_20px] font-bold'>
            <span className='flex items-center gap-[10px] lg:gap-[15px] text-[10px] lg:text-[16px]'>
              <input type='radio' name='paymentMethod' checked />
              پرداخت از کیف پول
            </span>
            <span className='block p-[7px_17px] lg:p-[9px_25px] rounded-md text-[11px] lg:text-[12px] bg-[#e3e6f9]'>
              انتخاب شد
            </span>
          </label>
          <label className='flex items-center justify-between cursor-pointer p-[12px_17px] lg:p-[23px_20px] font-bold'>
            <span className='flex items-center gap-[15px] text-[10px] lg:text-[16px]'>
              <input type='radio' name='paymentMethod' disabled />
              پرداخت از درگاه پرداخت امن (زرین پال)
            </span>
            <span className='block p-[9px_17px] rounded-md text-[11px] lg:text-[12px] bg-[#e9e9e9] text-[#505050]'>
              قفل میباشد
            </span>
          </label>
          <button
            onClick={() => formRef.current?.dispatchEvent(new Event("submit"))}
            className='!bg-primary text-white p-[14px] lg:p-5 !rounded-[10px] text-[11px] lg:text=[16px] -mt-2'
          >
            تایید نهایی پرداخت
          </button>
        </aside>
        <div className='flex flex-col gap-[19px] lg:col-start-2 lg:gap-[25px] row-start-1'>
          <div className='p-[9px] lg:p-[18px] block lg:hidden'>
            <div className='max-h-[200px] overflow-hidden lg:max-h-[unset] rounded-[10px]'>
              <Image src={`/image1.png`} width={485} height={404} alt='' />
            </div>
          </div>
          <section>
            <div className='p-[14px_15px] lg:p-[24px_25px]'>
              <h4 className='font-bold text-[14px] lg:text-[19px] mb-[17px] lg:mb-[33px]'>
                مشخصات رزرو هتل
              </h4>
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-[19px] lg:gap-[35px]'>
                <ReservationDetailCard
                  icon='clock'
                  title='تاریخ و ساعت ورود :'
                  desc='ساعت ورود (14:00) - 1403/01/10'
                />
                <ReservationDetailCard
                  icon='house'
                  title='هتل :'
                  desc='اسپیناس پالاس - (تهران)'
                />
                <ReservationDetailCard
                  icon='building'
                  title='نام اتاق :'
                  desc='دوبلکس رویال'
                />
                <ReservationDetailCard
                  icon='clock'
                  title='تاریخ و ساعت خروج :'
                  desc='ساعت خروج (13:00) - 1403/01/12'
                />
                <ReservationDetailCard
                  icon='moon'
                  title='تعداد شب اقامت :'
                  desc='3 شب'
                />
                <ReservationDetailCard
                  icon='rooms'
                  title='تعداد اتاق :'
                  desc='1 اتاق'
                />
              </div>
            </div>
          </section>
          <div className='grid lg:grid-cols-[auto_240px]'>
            <div className='p-[15px] lg:p-[24px]'>
              <h4 className='font-bold text-sm lg:text-xl mb-2 lg:mb-3'>
                کد تخفیف هتل
              </h4>
              <p className='text-primary font-medium text-xs lg:text-lg mb-2'>
                ساشا آذرخش آلوچه عزیز!
              </p>
              <span className='text-[#575757] text-[10px] lg:text-[16px] block'>
                * کد تخفیف معادل (30%) برای اتاق دوبلکس رویال - هتل اسپیناس
                پالاس قابل استفاده میباشد.
              </span>
            </div>
            <div className='flex flex-row-reverse justify-between lg:flex-col gap-3 lg:gap-2 pb-[15px] px-[15px] lg:p-[15px_0_15px_25px] text-[12px] lg:text-[17px]'>
              <span className='border-custom-dash-2 fcc p-[16px_24px] lg:p-[16px_54px] bg-[#ffebeb] rounded-lg grow'>
                NMJ2516NJH
              </span>
              <button className='fcc p-[14px_19px] lg:p-[16px_54px] bg-[#f2f2f2] rounded-lg bold text-[12px] lg:text-[16px]'>
                کپی کد تخفیف
              </button>
            </div>
          </div>
          <section className='col-start-2'>
            <Form onSubmit={handleFormSubmit} ref={formRef} />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
