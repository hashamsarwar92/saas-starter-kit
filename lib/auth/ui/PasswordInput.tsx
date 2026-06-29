"use client"
import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import {Input} from "@/lib/auth/ui";

export default function PasswordInput(props: any) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <Input
        {...props}
        type={show ? "text" : "password"}
      />

      <button
        type="button"
        onClick={() => setShow(s => !s)}
        className="absolute right-3 top-8"
      >
        {show ? <EyeOff /> : <Eye />}
      </button>
    </div>
  );
}