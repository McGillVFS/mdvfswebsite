import Sponsorships from "./Sponsorships"
import { Metadata } from 'next';

export const metadata = {
  title: 'Sponsorships',
};

export default function SponsorshipsPage() {
  return <Sponsorships />;
}