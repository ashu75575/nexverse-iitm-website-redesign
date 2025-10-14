import Link from 'next/link';
import { ArrowRight, Twitter, Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';

type FooterLink = {
  label: string;
  href: string;
};

const aboutLinks: FooterLink[] = [
  { label: 'Our Mission', href: '#' },
  { label: 'The Team', href: '#' },
  { label: 'Contact', href: '#' },
];

const eventLinks: FooterLink[] = [
  { label: 'Workshops', href: '#' },
  { label: 'Hackathons', href: '#' },
  { label: 'Guest Lectures', href: '#' },
  { label: 'Annual Fest', href: '#' },
];

const FooterLinkColumn = ({ title, links }: { title: string; links: FooterLink[] }) => (
  <div>
    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">{title}</h3>
    <ul className="mt-6 space-y-4">
      {links.map((link) => (
        <li key={link.label}>
          <Link href={link.href} className="text-base text-white hover:text-accent transition-colors">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-black text-white rounded-t-[40px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 lg:pt-24 pb-8 lg:pb-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_400px] lg:gap-16">
          {/* Left Section */}
          <div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              <FooterLinkColumn title="About" links={aboutLinks} />
              <FooterLinkColumn title="Events" links={eventLinks} />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex  items-center justify-center lg:justify-start gap-6">
              {/* IITM Logo */}
              <div className="relative w-32 sm:w-40 md:w-48 lg:w-60 h-auto">
                <Image
                  alt="IITM Logo"
                  src="/iitmlogo.png"
                  width={300}
                  height={300}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Nexverse Logo */}
              <div className="relative w-28 sm:w-36 md:w-44 lg:w-52 h-auto">
                <Image
                  alt="Nexverse Logo"
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/logo1-1759402940398.png"
                  width={300}
                  height={300}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <p className="text-sm text-gray-400 text-center lg:text-left">
              Institute of Information Technology &amp; Management D-29, <br />
              Institutional Area, Janakpuri, New Delhi-110058
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-white/10 pt-8 lg:mt-24">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="flex items-center gap-x-6">
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>

            <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:gap-6">
              <p className="text-sm text-gray-400">© 2024 Nexverse IITM. All rights reserved.</p>
              <div className="flex gap-x-6 text-sm">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
