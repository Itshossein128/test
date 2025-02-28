"use client";

import { ReactElement, useState } from "react";

type TProps = {
  button: ReactElement;
  content: ReactElement;
};
export default function DropDown({ button, content }: TProps) {
  const [show, setShow] = useState(false);
  return (
    <div className='relative h-fit'>
      <div onClick={() => setShow((prev) => !prev)}>{button}</div>
      <div
        className={`bg-white absolute left-0 top-full mt-[3px] border border-slate-200 rounded-xl shadow-sm z-10 w-full p-3 transition ${
          show ? "" : "scale-0 pointer-events-none"
        }`}
      >
        {content}
      </div>
    </div>
  );
}
