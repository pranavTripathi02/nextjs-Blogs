import { Abril_Fatface } from "next/font/google";

const abril = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
});

const GithubSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-github"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
const MailSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-mail"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const SiteSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-link"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

function Footer() {
  return (
    <div className="absolute bottom-0 flex w-full flex-col justify-between border-t border-[var(--secondary)] px-5 py-5 sm:flex-row">
      <div className="sm:w-1/2">
        <span className={`font-sans ${abril.variable} text-[1.5rem]`}>
          Blogs
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque nisi,
          quia quaerat aut aliquam esse nostrum eos praesentium consectetur
          molestias!
        </p>
      </div>
      <div className="links mt-10 flex justify-between gap-20 sm:mt-0">
        <div className="flex flex-col">
          <span className="mb-4 font-bold uppercase opacity-50">Links</span>
          <div className="flex flex-col justify-between gap-5 sm:gap-1">
            <a className="capitalize" href="/">
              about
            </a>
            <a className="capitalize" href="/">
              blogs
            </a>
            <a className="capitalize" href="/">
              privacy policy
            </a>
            <a className="capitalize" href="/">
              contact us
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="mb-4 font-bold uppercase opacity-50">Connect</span>
          <div className="flex flex-col justify-between gap-5 sm:gap-1">
            <a className="flex items-center gap-1 capitalize" href="/">
              <GithubSVG />
              Github
            </a>
            <a className="flex items-center gap-1 capitalize" href="/">
              <MailSVG />
              mail
            </a>
            <a className="flex items-center gap-1 capitalize" href="/">
              <SiteSVG />
              site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
