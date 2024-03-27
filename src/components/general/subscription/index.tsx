import { ArrowIcon, LetterIcon } from "@/svg";
import Router from "next/router";
import React, { ReactNode } from "react";

interface Props {
  className?: string;
  text: ReactNode;
  link?: string;
}

const Subscription: React.FC<Props> = ({
  className = "w-full",
  text,
  link,
}) => {
  function handleClick() {
    if (link) {
      window.location.href = link;
    }
  }
  return (
    <div
      onClick={handleClick}
      className={
        className +
        " border-[1px] border-white border-solid flex items-center justify-between p-[20px] cursor-pointer"
      }
    >
      <LetterIcon />
      {text}
      <ArrowIcon />
    </div>
  );
};

export default Subscription;
