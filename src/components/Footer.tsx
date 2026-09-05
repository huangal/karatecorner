import Link from "next/link";
import { NAV_LINKS } from "@/lib/content";
import Logo from "./ui/Logo";

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    path: "M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.17.4.37 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.05 1.2-.25 1.8-.42 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.17-1 .37-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.05-1.8-.25-2.2-.42-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.17-.4-.37-1-.42-2.2C2.21 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.05-1.2.25-1.8.42-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.17 1-.37 2.2-.42C8.4 2.21 8.8 2.2 12 2.2zm0 3.4a6.4 6.4 0 100 12.8 6.4 6.4 0 000-12.8zm0 10.6a4.2 4.2 0 110-8.4 4.2 4.2 0 010 8.4zm8.1-10.9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    path: "M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 002.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 001.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 001.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15.2V8.8L15.5 12 10 15.2z",
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    path: "M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z",
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 px-5 py-16 text-bone-200/70 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-bone-50/10 pb-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo className="text-bone-50" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              A championship martial arts gym on Ironside Avenue. Karate, Muay
              Thai, Jiu-Jitsu, Kickboxing and Kids classes — seven days a week.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-bone-50">
              Explore
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-3 text-sm font-semibold">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="underline-offset-4 transition-colors hover:text-bone-50 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-bone-50">
              Follow
            </h2>
            <ul className="mt-5 flex gap-3">
              {SOCIALS.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    aria-label={`KarateCorner on ${social.name}`}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex h-11 w-11 items-center justify-center border border-bone-50/20 text-bone-100 transition-colors hover:border-brown-400 hover:bg-brown-600 hover:text-bone-50"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d={social.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs font-semibold sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} KarateCorner. All rights reserved.</p>
          <p className="text-bone-200/40">
            Placeholder content — imagery and details are illustrative.
          </p>
        </div>
      </div>
    </footer>
  );
}
