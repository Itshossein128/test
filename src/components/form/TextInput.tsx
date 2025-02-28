import { useFormContext } from "react-hook-form";
type TProps = {
  name: string;
  placeholder: string;
  className?: string;
};

export default function TextInput({ name, placeholder, className }: TProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // پیدا کردن خطا برای این فیلد خاص
  const error = name.split(".").reduce((acc, part) => acc && acc[part], errors as any || {});

  return (
    <div className={className}>
      <input
        {...register(name)}
        placeholder={placeholder}
        className='rounded-lg bottom-0 outline-none bg-[#f8f8f8] placeholder:text=[#A4A4A4] p-[13px_23px] lg:p-[19px_17px] w-full text-[12px] lg:text-[16px]'
      />
      {error && (
        <span
          style={{
            color: "#ff4d4f",
            fontSize: "12px",
            fontFamily: "Vazir, sans-serif",
            marginTop: "4px",
            display: "block",
          }}
        >
          {error.message || "این فیلد مشکل دارد"}
        </span>
      )}
    </div>
  );
}
