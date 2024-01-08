"use client";
import { useState } from "react";

export default function ({ slug }) {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    const onSubmit = async (e) => {
      e.prevetDefault();
      setLoading(true);
      const request = await fetch("/api/pwd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, slug }),
      });
    }

    if (request.status !== 200) {
      return setPasswordError(true), setLoading(false);
    } else {
      window.location.reload();
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