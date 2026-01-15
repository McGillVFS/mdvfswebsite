import About from "./About"
import { Metadata } from 'next';

export const metadata = {
  title: 'About',
};

export default function AboutPage() {
  return <About />;
}