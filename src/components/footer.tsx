import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <section id="end" className="text-right text-sm">
        <span>
          <Link
            href="https://github.com/gleidsonlm/angelon-site"
            className="text-blue-400 hover:text-purple-400"
          >
            Powered
          </Link>
          &nbsp;by&nbsp;
          <Link
            href="https://www.gnu.org/licenses/agpl-3.0.en.html"
            className="text-blue-400 hover:text-purple-400"
          >
            Open Source
          </Link>
        </span>
      </section>
    </footer>
  );
}
