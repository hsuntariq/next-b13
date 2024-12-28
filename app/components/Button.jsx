"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const Button = ({
  content,
  color,
  disabledColor,
  loadingContent,
  customStyle,
  action,
}) => {
  const { pending } = useFormStatus();

  return (
    <>
      <button
        onClick={action}
        disabled={pending}
        className={`my-5 w-full p-3 text-white font-bold ${
          pending ? disabledColor : color
        } ${customStyle}`}
      >
        {pending ? loadingContent : content}
      </button>
    </>
  );
};

export default Button;
