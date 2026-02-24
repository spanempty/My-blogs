import Link from "next/link";
import { NavButton } from "./NavButton";
import DecryptedText from "./DecryptedText";

export default function Navbar() {
  return (
    <nav className="w-full drop-shadow-md flex flex-col items-center justify-center border-b border-black">
      <div className="container pt-10 pb-10 flex flex-col items-center justify-center gap-10">
        <h2 className="text-4xl">
          <DecryptedText
            text="The Inner Dialogue. Unfiltered."
            animateOn="view"
            revealDirection="start"
            sequential
            useOriginalCharsOnly={false}
          />
        </h2>
        <h1 className="text-9xl">White Space</h1>
      </div>
      <ul className="w-full flex flex-row items-center justify-center gap-4 border-t border-black">
        <li>
          <NavButton href="/">
            <span>Home</span>
          </NavButton>
        </li>
        <li>
          <NavButton href="/blog">
            <span>Blog</span>
          </NavButton>
        </li>
        <li>
          <NavButton href="/about">
            <span>About</span>
          </NavButton>
        </li>
        <li>
          <NavButton href="/contact">
            <span>Contact</span>
          </NavButton>
        </li>
      </ul>
    </nav>
  );
}
