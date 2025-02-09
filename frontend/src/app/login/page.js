"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "", rememberMe: false });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleCheckboxChange = (checked) => {
    setFormData((prev) => ({
      ...prev,
      rememberMe: checked, 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter">Login Form</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-3">
            <Label htmlFor="username">Username</Label>
            <Input type="username" id="username" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="space-y-3">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" value={formData.password} onChange={handleChange} required />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="rememberMe" checked={formData.rememberMe} onCheckedChange={handleCheckboxChange} />
              <Label htmlFor="rememberMe">Remember me</Label>
            </div>
            <a href="#" className="text-blue-600 text-sm hover:underline">
              Forgot password?
            </a>
          </div>
          <Button type="submit" className="w-full">Login</Button>
        </form>
      </div>
    </div>
  );
}
