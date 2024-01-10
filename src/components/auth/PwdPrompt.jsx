"use client";
import { bricolageGrotesque } from "@/app/fonts";
import { useRouter } from "next/navigation";
import { useState } from "react";
import './pwd-prompt.css';

export default function PwdPrompt({ slug }) {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://cecig-portfolio.vercel.app/api/pwd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "password": password, "slug": slug }),
      });
      if (response.status !== 200) {
        setPasswordError(true), setLoading(false);
      } else {
        window.location.reload();
      }
    } catch (err) {
      console.log(err, "Error submitting auth password");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center mt-20 lg:mt-45">
      <form 
        onSubmit={handleSubmit}
        className="w-[362px] flex flex-col gap-6 items-center"
      >
        <div className={`${bricolageGrotesque.className} font-bold font-2xl`}>This case study is locked.</div>
        <input 
          type="password"
          id="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="w-full p-4 h-[54px]"
          placeholder="Enter password"
        />
        <button 
          type="submit" 
          className="w-full text-white bg-black p-2 h-[54px] hover:text-black hover:bg-white transition-all duration-300 ease-in-out border border-black"
          
        >
          Submit
        </button>
      </form>
    </div>
  )
}