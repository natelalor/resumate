// this is so login page.tsx is the homepage / landing page

import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Resumate - Login',
  description: 'Login to Resumate to optimize your job applications.',
};

export default function Home() {
  redirect('/login');  // Automatically redirects to /login
}