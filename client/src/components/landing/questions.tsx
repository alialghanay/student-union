"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { gethQuestions } from "@/lib/features/question/actions";
import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Questions = () => {
  const dispatch = useAppDispatch();

  const { faqs, error, loading } = useAppSelector((state) => state.question);

  useEffect(() => {
    dispatch(gethQuestions());
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {faqs &&
        faqs.data.map((faq) => (
          <Accordion key={faq.id} className="mb-4" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-2xl font-bold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
    </div>
  );
};

export default Questions;
