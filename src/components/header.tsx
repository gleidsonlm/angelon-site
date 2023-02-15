import Image from 'next/image';
import Nav from './nav';

export default function Header() {
  return (
    <header
      className="flex flex-row items-center justify-around pt-1.5 pb-1.5 bg-black text-white"
    >
      <Image
        src="logo.svg"
        alt="Logo shows the styled name angelOn"
        width={0}
        height={0}
        className="w-1/12"
      />
      <div className="w-4/12">
        <Nav />
      </div>
    </header>
  );
}
