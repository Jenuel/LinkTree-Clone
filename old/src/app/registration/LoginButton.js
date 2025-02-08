"use client";

import { useRouter } from 'next/navigation'; 

export default function LoginButton() {
  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push('/login'); 
  };

  return (
    <button className="login" onClick={handleLoginRedirect}>
      Login
    </button>
  );
}
