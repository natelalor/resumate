// this is so login page.tsx is the homepage / landing page

import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/login');  // Automatically redirects to /login
}
