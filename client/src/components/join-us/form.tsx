"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import formSchema from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "../ui/textarea";
import Image from "next/image";

const CForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  return (
    <div>
      <h1>نموذج الانضمام</h1>
      <p>
        االاتحاد الطلابي ملتزم بتوفير بيئة آمنة وشاملة ومرحبة. إذا كان لديك
        مخاوف جامعية فيرجى إعلامنا.
      </p>
      <div>
        <Form {...form}>
          <form>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>الاسم</FormLabel>
                  <FormControl>
                    <Input placeholder="الاسم" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>البريد الإلكتروني</FormLabel>
                  <FormControl>
                    <Input placeholder="البريد الإلكتروني" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stdNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>رقم الطالب</FormLabel>
                  <FormControl>
                    <Input placeholder="09x xxxx xxx" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="whyWnatToJoinUs"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>شارك معنا سبب رغبتك في الانضمام</FormLabel>
                  <FormControl>
                    <Textarea placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">إرسال</Button>
          </form>
        </Form>
        <Image src="/join-us.svg" alt="join-us" width={500} height={500} />
      </div>
    </div>
  );
};

export default CForm;
