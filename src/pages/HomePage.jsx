import { navigateTo } from '../navigation.js';

export function HomePage({ page, pages, loading }) {
  const getSkillTarget = (skill) => {
    const targetPage = pages.find((item) => item.slug === skill.pageSlug);
    return targetPage ? `${targetPage.path}?vue=bilan` : '/';
  };

  return (
    <div className="page page--home">
      <section className="portfolio-card presentation-card" aria-labelledby="home-title">
        <h1 id="home-title">Présentation</h1>
        <p>{page.intro}</p>
        <p>
          Pour accéder aux trois parties principales, un panneau de menu est
          affichable en cliquant sur le bouton en haut à gauche.
        </p>
      </section>

      {loading ? <p className="loading-state">Chargement des données...</p> : null}

      <section className="portfolio-card context-card" aria-labelledby="context-title">
        <h2 id="context-title">Contexte</h2>
        <p>
          Les traces, les descriptifs et les analyses sont issus d'une
          expérience menée dans un cadre professionnel.
        </p>

        <div className="context-card__body">
          <figure className="context-figure">
            <img src="/images/traces/trace-work-environment.svg" alt="" loading="lazy" />
            <figcaption>Illustration du contexte de travail</figcaption>
          </figure>

          <div className="context-card__text">
            <ContextPanel title={page.company.title} points={page.company.points} />
            <ContextPanel title={page.internship.title} points={page.internship.points} />
          </div>
        </div>
      </section>

      <section className="portfolio-card synthesis-card" aria-labelledby="skills-title">
        <div className="synthesis-card__text">
          <h2 id="skills-title">Synthèse</h2>
          <p>
            Les savoir-faire généraux nécessaires à la réalisation du sujet sont
            variés. Ils concernent le développement, la structuration des
            données, le suivi du projet et l'intégration dans l'entreprise.
          </p>
          <p>
            Les éléments ci-dessous renvoient vers les bilans associés, où
            chaque savoir-faire est analysé à partir des traces du stage.
          </p>

          <div className="skills-overview__list">
            {page.highlightedSkills.map((skill) => (
              <a
                key={skill.id}
                href={getSkillTarget(skill)}
                className="skill-link"
                style={{ '--skill-color': skill.color }}
                onClick={(event) => navigateTo(event, getSkillTarget(skill))}
              >
                <strong>{skill.name}</strong>
                <span>Voir le bilan associé</span>
              </a>
            ))}
          </div>
        </div>

        <div className="synthesis-card__visuals" aria-hidden="true">
          {page.highlightedSkills.map((skill) => (
            <span
              key={skill.id}
              className="synthesis-token"
              style={{ '--skill-color': skill.color }}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </section>

      {page.projectDocumentation?.length > 0 ? (
        <section className="portfolio-card documentation-card" aria-labelledby="documentation-title">
          <h2 id="documentation-title">Documentation du projet WordPress</h2>
          <p>
            Cette partie résume les zones importantes du projet GoodGeek afin de
            comprendre ce qui a été analysé, modifié et vérifié pendant le stage.
          </p>

          <div className="documentation-grid">
            {page.projectDocumentation.map((section) => (
              <article className="documentation-block" key={section.title}>
                <h3>{section.title}</h3>
                <ul>
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

function ContextPanel({ title, points }) {
  return (
    <article className="context-panel">
      <h3>{title}</h3>
      <ul>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}
