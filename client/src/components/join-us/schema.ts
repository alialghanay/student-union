import { z } from "zod";

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "يجب أن يكون الاسم مكونًا من 3 أحرف على الأقل" }),
  email: z.string().email({ message: "يرجى إدخال عنوان بريد إلكتروني صالح" }),
  stdNumber: z
    .string()
    .min(10, { message: "يجب أن يكون رقم الطالب مكونًا من 9 أحرف على الأقل" }),
  whyWnatToJoinUs: z
    .string()
    .min(10, { message: "يجب أن تكون الشكوى مكونة من 10 أحرف على الأقل" }),
});

export default formSchema;
