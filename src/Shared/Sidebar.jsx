import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../components/ui/accordion";
  import { FcBullish } from "react-icons/fc";
const Sidebar = () => {
  return (
    <div className="bg-neutral-900 w-60 p-3 text-white flex flex-col h-screen  overflow-hidden">
      <Accordion type="single" collapsible >
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            <div><FcBullish />list</div>
          </AccordionContent>
        </AccordionItem>
       
      </Accordion>
    </div>
  );
};

export default Sidebar;
