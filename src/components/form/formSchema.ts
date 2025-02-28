import { z } from "zod";

// اسکیما برای رزروکننده
const bookerSchema = z.object({
    firstName: z.string().min(1, "نام اجباری است"),
    lastName: z.string().min(1, "نام خانوادگی اجباری است"),
    mobile: z.string().min(1, "موبایل اجباری است"),
    nationalCode: z.string().optional(),
});

// اسکیما برای مسافر (مسافر اصلی اجباری، بقیه با فیلدهای کمتر)
const travelerSchema = z.object({
    firstName: z.string().min(1, "نام اجباری است"),
    lastName: z.string().min(1, "نام خانوادگی اجباری است"),
    mobile: z.string().optional(),
    nationalCode: z.string().optional(),
});

// اسکیما برای اتاق (حداقل یک مسافر اصلی)
const roomSchema = z.object({
    travelers: z.array(travelerSchema).min(1, "حداقل یک مسافر لازم است"),
});

// اسکیما برای نفر اضافی
const extraPersonSchema = z.object({
    firstName: z.string().min(1, "نام اجباری است"),
    lastName: z.string().min(1, "نام خانوادگی اجباری است"),
    nationalCode: z.string().optional(),
});

// اسکیما کلی فرم
export const formSchema = z.object({
    booker: bookerSchema,
    rooms: z.array(roomSchema).min(1, "حداقل یک اتاق لازم است"),
    extraPerson: extraPersonSchema.optional(),
});

export type FormData = z.infer<typeof formSchema>;