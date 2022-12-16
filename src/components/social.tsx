import Link from "next/link";
import { At, GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

export default function Social() {
  return (
    <div className="flex text-white gap-3 p-2 mt-2">
      <Link
        href="https://github.com/pedroforadori"
        target="_blank"
        className="hover:text-green-700"
      >
        <GithubLogo size={32} />
      </Link>

      <Link
        href="https://www.linkedin.com/in/pedro-foradori-3050a78a/"
        target="_blank"
        className="hover:text-green-700"
      >
        <LinkedinLogo size={32} />
      </Link>

      <Link
        href="https://www.instagram.com/pedroforadori/"
        target="_blank"
        className="hover:text-green-700"
      >
        <InstagramLogo size={32} />
      </Link>

      <Link
        href="/contact"
        className="hover:text-green-700"
      >
        <At size={32} />
      </Link>
    </div>
  );
}
