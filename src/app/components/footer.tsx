import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <nav>
                <ul>
                    <li>
                        <Link href="#top">Top</Link>
                        <Link href="#about">About</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}