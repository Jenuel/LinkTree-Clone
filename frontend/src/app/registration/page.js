"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegistrationPage() {
  const [formData, setFormData] = useState({ 
    email: "", 
    password: "", 
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Registration Successful:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter">Register</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-3">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="space-y-3">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" value={formData.password} onChange={handleChange} required />
          </div>
          <div className="space-y-3">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          </div>
          <Button type="submit" className="w-full">Register</Button>
        </form>
      </div>
    </div>
  );
}
