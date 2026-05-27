import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const funcionalidades = [
  {
    icon: '🍰',

    titulo: 'Gestão de Produtos',

    descricao:
      'Organização dos doces disponíveis, incluindo preços, categorias e stock.',
  },

  {
    icon: '🧾',

    titulo: 'Gestão de Encomendas',

    descricao:
      'Registo e acompanhamento de encomendas realizadas pelos clientes.',
  },

  {
    icon: '🎀',

    titulo: 'Promoções e Avaliações',

    descricao:
      'Sistema de promoções e avaliações para melhorar a experiência dos clientes.',
  },

  {
    icon: '📦',

    titulo: 'Controlo de Stock',

    descricao:
      'Gestão das quantidades disponíveis e organização da lista de compras.',
  },
];

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          SweetFlow
        </Heading>

        <p className="hero__subtitle">
          Sistema de gestão para uma doceria moderna
        </p>

        <p className={styles.heroDescription}>
          Um site criado para apresentar a aplicação desenvolvida para apoiar a
          gestão de produtos, encomendas, stock e administração de uma doceria.
        </p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Ver Documentação 🍰
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({icon, titulo, descricao}) {
  return (
    <article className={styles.featureCard}>
      <div className={styles.featureIcon}>
        {icon}
      </div>

      <Heading as="h3">
        {titulo}
      </Heading>

      <p>{descricao}</p>
    </article>
  );
}

export default function Home() {
  return (
    <Layout
      title="SweetFlow | Gestão de Doceria"
      description="Site de apresentação e documentação da aplicação de gestão de uma doceria.">

      <HomepageHeader />

      <main>
        <section className={styles.section}>
          <div className="container">
            <Heading as="h2" className={styles.sectionTitle}>
              Sobre o projeto
            </Heading>

            <p className={styles.sectionText}>
              O SweetFlow é uma aplicação desenvolvida para simular a gestão de
              uma doceria, permitindo organizar produtos, acompanhar encomendas e
              apoiar tarefas administrativas de forma simples e estruturada.
            </p>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className="container">
            <Heading as="h2" className={styles.sectionTitle}>
              Funcionalidades principais
            </Heading>

            <div className={styles.featuresGrid}>
              {funcionalidades.map((funcionalidade) => (
                <FeatureCard
                  key={funcionalidade.titulo}
                  icon={funcionalidade.icon}
                  titulo={funcionalidade.titulo}
                  descricao={funcionalidade.descricao}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}