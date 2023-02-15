import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <ul className="flex flex-row justify-around">
        <li><Link href="#inicio">In&iacute;cio</Link></li>
        <li><Link href="#funcionalidades">Como Funciona</Link></li>
        <li><Link href="#sobre">Sobre N&oacute;s</Link></li>
        <li><Link href="#contato">Contato</Link></li>
      </ul>
    </nav>
  );
}
