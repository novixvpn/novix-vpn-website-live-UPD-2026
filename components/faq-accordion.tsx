"use client";

import type React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
  icon?: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
        >
          <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 text-left">
            <div className="flex items-start">
              {item.icon && <span className="mr-3 text-xl">{item.icon}</span>}
              <span className="text-lg font-medium text-gray-800">
                {item.question}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 py-4 bg-white text-gray-600 leading-relaxed max-h-none">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
