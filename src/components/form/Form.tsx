"use client";
import { useForm, useFieldArray, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormRaw from "./FormRaw";
import TextInput from "./TextInput";
import { FormData, formSchema } from "./formSchema";
import { Fragment } from "react";
import { forwardRef, useState } from "react";
import Image from "next/image";

// دیتای mock شده
const mockData = {
  rooms: [
    { travelers: [{}, {}] }, // اتاق 1 با 2 مسافر
    { travelers: [{}] }, // اتاق 2 با 1 مسافر
  ],
};

export default forwardRef<HTMLFormElement, { onSubmit: (data: any) => void }>(function Form(
  { onSubmit },
  ref
) {
  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      booker: {},
      rooms: mockData.rooms,
      extraPerson: {},
    },
  });

  const { control, handleSubmit } = methods;

  // مدیریت داینامیک اتاق‌ها
  const { fields: roomFields } = useFieldArray({
    control,
    name: "rooms",
  });

  // مدیریت حالت کانتر با useState
  const [counter, setCounter] = useState(1); // مقدار اولیه 1 نفر

  // تابع افزایش کانتر
  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  // تابع کاهش کانتر (با چک کردن حداقل 1)
  const handleDecrement = () => {
    setCounter((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
        {/* اطلاعات رزروکننده */}
        <FormRaw icon='crown' title='اطلاعات رزرو کننده'>
          <TextInput name='booker.firstName' placeholder='نام *' />
          <TextInput name='booker.lastName' placeholder='نام خانوادگی *' />
          <TextInput name='booker.mobile' placeholder='موبایل *' />
          <TextInput
            name='booker.nationalCode'
            placeholder='کد ملی (اختیاری)'
          />
        </FormRaw>

        {/* اتاق‌ها (داینامیک) */}
        {roomFields.map((room, roomIndex) => {
          const travelersArray = useFieldArray({
            control,
            name: `rooms.${roomIndex}.travelers`,
          });
          console.log(travelersArray.fields.slice(1).length);

          return (
            <FormRaw
              key={room.id}
              icon='document'
              title={`مسافران اتاق ${roomIndex + 1} - تعداد ${
                travelersArray.fields.length
              } نفر`}
              extraHeading={
                roomIndex === 0 ? (
                  <div className='[&>label]:flex [&>label]:items-center [&>label]:gap-[10px] flex gap-[23px] lg:gap-10 text-[10px] lg:text-[16px] mb-[17px] lg:mb-0'>
                    <label>
                      <input type='radio' name='region' value='native' />
                      مسافر ایرانی
                    </label>
                    <label>
                      <input type='radio' name='region' value='foreign' />
                      مسافر خارجی
                    </label>
                  </div>
                ) : (
                  <></>
                )
              }
            >
              {/* مسافر اصلی */}
              {travelersArray.fields.slice(1).length >= 1 && (
                <span className='text-[10px] lg:hidden'>اطلاعات نفر اول</span>
              )}
              <TextInput
                name={`rooms.${roomIndex}.travelers.0.firstName`}
                placeholder='نام مسافر اصلی *'
              />
              <TextInput
                name={`rooms.${roomIndex}.travelers.0.lastName`}
                placeholder='نام خانوادگی مسافر اصلی *'
              />
              <TextInput
                name={`rooms.${roomIndex}.travelers.0.mobile`}
                placeholder='موبایل مسافر اصلی *'
              />
              <TextInput
                name={`rooms.${roomIndex}.travelers.0.nationalCode`}
                placeholder='کد ملی مسافر اصلی *'
              />

              {/* سایر مسافران */}
              <span className='text-[10px] lg:hidden'>اطلاعات نفر دوم</span>
              {travelersArray.fields.slice(1).map((traveler, travelerIndex) => (
                <Fragment key={traveler.id}>
                  <TextInput
                    name={`rooms.${roomIndex}.travelers.${
                      travelerIndex + 1
                    }.firstName`}
                    placeholder='نام *'
                  />
                  <TextInput
                    name={`rooms.${roomIndex}.travelers.${
                      travelerIndex + 1
                    }.lastName`}
                    placeholder='نام خانوادگی *'
                  />
                  <TextInput
                    name={`rooms.${roomIndex}.travelers.${
                      travelerIndex + 1
                    }.mobile`}
                    placeholder='موبایل'
                  />
                  <TextInput
                    name={`rooms.${roomIndex}.travelers.${
                      travelerIndex + 1
                    }.nationalCode`}
                    placeholder='کد ملی'
                  />
                </Fragment>
              ))}
            </FormRaw>
          );
        })}

        {/* نفر اضافی */}
        <FormRaw icon='extra' title='نفر اضافه مسافر'>
          <TextInput name='extraPerson.firstName' placeholder='نام *' />
          <TextInput name='extraPerson.lastName' placeholder='نام خانوادگی *' />
          <TextInput
            name='extraPerson.nationalCode'
            placeholder='کد ملی (اختیاری)'
            className='lg:col-span-2'
          />
        </FormRaw>
        <div className='p-[15px] lg:p-[30px]'>
          <div className='flex items-center justify-between cursor-pointer grow p-[17px_15px] lg:p-[23px_20px] font-bold bg-[#f8f8f8] rounded-xl'>
            <span className='flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-[15px] text-[10px] lg:text-[16px]'>
              <span>مبلغ نفر اضافه :</span>
              <span className='text-[11px] lg:text-[16px] font-bold'>
                (2,000,000 تومان)
              </span>
            </span>
            <div className='flex items-center gap-4 lg:gap-[23px] text-[10px] lg:text-[16px]'>
              <button
                onClick={handleIncrement}
                className='p-1 lg:p-[11px] bg-[#d5d5f9] rounded-lg transition-transform hover:scale-105'
              >
                <Image
                  src={"/add-square.png"}
                  alt='افزایش نفر'
                  width={23}
                  height={23}
                  className='w-5 h-5 lg:w-[23px] lg:h-[23px]'
                />
              </button>
              <span>{`0${counter} نفر`}</span>
              <button
                onClick={handleDecrement}
                className='p-1 lg:p-[11px] bg-[#d5d5f9] rounded-lg transition-transform hover:scale-105'
              >
                <Image
                  src={"/minus-square.png"}
                  alt='کاهش نفر'
                  width={23}
                  height={23}
                  className='w-5 h-5 lg:w-[23px] lg:h-[23px]'
                />
              </button>
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-[10px] lg:gap-10 p-[15px] lg:p-[30px]'>
          <label className='flex items-center justify-between cursor-pointer grow p-[13px] lg:p-[23px_20px] font-bold bg-[#f8f8f8] rounded-xl text-[10px] lg:text-[16px]'>
            <span className='flex items-center gap-[7px] lg:gap-[15px]'>
              <input type='radio' name='paymentMethod' checked />
              نیم شارژ ورود هتل :
            </span>
            <span className=''>2,750,000 تومان</span>
          </label>
          <label className='flex items-center justify-between cursor-pointer grow p-[13px] lg:p-[23px_20px] font-bold bg-[#f8f8f8] rounded-xl text-[10px] lg:text-[16px]'>
            <span className='flex items-center gap-[7px] lg:gap-[15px]'>
              <input type='radio' name='paymentMethod' checked />
              نیم شارژ خروج هتل :
            </span>
            <span className=''>2,750,000 تومان</span>
          </label>
        </div>
      </form>
    </FormProvider>
  );
});
