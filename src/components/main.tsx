import Link from "next/link";

export default function Main() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center">
      <div className="max-w-5xl">
        {/* Headline */}
        <div className="mt-3.5">
          <h1>In&iacute;cio</h1>
          <strong>
            Engage os membros, receba os visitantes, alcance o mundo!
          </strong>
        </div>
        {/* Quais são os desafios? */}
        <div className="mt-3.5">
          <strong className="w-1/3">
            Porquê as pessoas estão se isolando?
          </strong>
          <section className="w-2/3" id="nossos-desafios">
            <h2>Desafios</h2>
            <p>
              Nossas igrejas tem membros doentes de alma que deixaram a{" "}
              <strong>comunhão</strong>, enfraquecendo a igreja em sua missão de
              alcançar o mundo com a mensagem do Evangelho. <br />
              Mas existem ótimas{" "}
              <Link
                href="#oportunidades"
                className="text-blue-400 hover:text-purple-400"
              >
                oportunidades
              </Link>{" "}
              para superarmos esse cenário adverso!
            </p>
          </section>
        </div>
        {/* Qual solução propomos? */}
        <div className="mt-3.5">
          <strong className="w-1/3">Como superar esses desafios?</strong>
          <section id="oportunidades" className="w-2/3">
            <h2>Oportunidades</h2>
            <p>
              Assim como a língua comum e as estradas romanas ajudaram os
              cristãos a proclamar as <strong>Boas Novas</strong> no primeiro
              século, queremos construir{" "}
              <Link
                href="#nossa-solucao"
                className="text-blue-400 hover:text-purple-400"
              >
                inovações tecnológicas
              </Link>{" "}
              para dizer ao mundo de hoje que <strong>Jesus Cristo</strong> é o
              Senhor.
            </p>
          </section>
          {/* O que fazemos para construir a solução? */}
          <div className="mt-3.5">
            <strong className="w-1/3">
              O que é a nossa solução e para que serve?
            </strong>
            <section id="nossa-solucao" className="w-2/3">
              <h2>Solução</h2>
              <p>
                Estamos projetando uma única solução que reúne as melhores
                práticas e inovações em engajamento em{" "}
                <strong>redes sociais</strong>, ferramentas de{" "}
                <strong>comunicação</strong>, <strong>presença online</strong>,{" "}
                <strong>marketing digital</strong>.
                <br />O amor é o poder que vence o mundo, por isso{" "}
                <Link
                  href="#quem-somos"
                  className="text-blue-400 hover:text-purple-400"
                >
                  nós estamos construindo
                </Link>{" "}
                uma <strong>plataforma digital</strong> que nos auxilie a{" "}
                <strong>conectar pessoas</strong>, amando e a servindo a Deus e
                o nosso próximo.
              </p>
            </section>
          </div>
          {/* Quem Somos */}
          <div className="mt-3.5">
            <strong className="w-1/3">
              Quem somos e porque fazemos o que fazemos?
            </strong>
            <section id="quem-somos" className="w-2/3">
              <h2>Quem somos</h2>
              <p>
                Somos <strong>cristãos</strong>, trabalhando para{" "}
                <strong>glorificar a Deus</strong>, construindo soluções
                baseadas em <strong>software livre</strong>, ajudando{" "}
                <strong>igrejas</strong> e <strong>pastores</strong> a cumprirem
                sua <strong>missão</strong>.
                <br />
                <Link
                  href="#contato"
                  className="text-blue-400 hover:text-purple-400"
                >
                  Vamos conversar
                </Link>
                ?
              </p>
            </section>
          </div>
          <div className="mt-3.5">
            <strong className="w-1/3">
              Entre em contato da sua maneira preferida:
            </strong>
            <section id="contato" className="w-2/3">
              <nav>
                <ul>
                  <li>
                    <Link
                      className="text-blue-400 hover:text-purple-400"
                      href="#whatsapp"
                    >
                      WhatsApp
                    </Link>
                    <Link
                      className="text-blue-400 hover:text-purple-400"
                      href="callto:+5583991446999"
                    >
                      Celular
                    </Link>
                    <Link
                      className="text-blue-400 hover:text-purple-400"
                      href="mailto:contato@angelon.app"
                    >
                      Email
                    </Link>
                  </li>
                </ul>
              </nav>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
