import About from "./About"
import { Metadata } from 'next';

/*export const metadata = {
  title: 'Acme Dashboard',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
}*/

export const metadata = {
  title: 'About',
};

export default function AboutPage() {
  return <About />;
}