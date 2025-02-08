"use client";

import { useRouter } from 'next/navigation'; 

export default function RegistrationButton() {
  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push('/registration'); 
  };

  return (
    <button className="login" onClick={handleLoginRedirect}>
      Register
    </button>
  );
}
