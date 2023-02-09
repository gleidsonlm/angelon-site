import Image from "next/image";

export default function Header() {
    return (
        <header>
            <Image
                src='logo.svg'
                alt='Logo shows the styled name AngelOn where the l is I for input and O for output.'
                width={100}
                height={100}
            />
        </header>
    )
}