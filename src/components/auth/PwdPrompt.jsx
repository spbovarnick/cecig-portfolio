"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PwdPrompt({ slug }) {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/pwd", {
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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="password">Password</label>
        <input 
          type="password"
          id="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </form>
    </div>
  )
}