// src/app/page.js
import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/login'); // Redirect root route to "/login"
}
