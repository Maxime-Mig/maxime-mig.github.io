import { getSkillCssVariables } from '../skillColors.js';

function getFirstSentences(text, count = 2) {
  const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g)
    ?.map((sentence) => sentence.trim())
    .filter(Boolean) || [];

  return sentences.slice(0, count).join(' ') || text;
}

function getRepresentativeEvidence(evidence, limit = 8) {
  if (evidence.length <= limit) {
    return evidence;
  }

  return Array.from({ length: limit }, (_, index) => {
    const evidenceIndex = Math.round(
      (index * (evidence.length - 1)) / (limit - 1),
    );

    return evidence[evidenceIndex];
  });
}

function getEvidenceLead(index) {
  const leads = [
    'Une première preuve montre que ',
    'Le travail réalisé montre aussi que ',
    'Un autre passage indique que ',
    'Les traces font également apparaître que ',
    'Enfin, elles démontrent que ',
  ];

  return leads[index % leads.length];
}

function getShortEvidenceLead(index) {
  const leads = [
    'Cette démarche montre que ',
    'Elle indique aussi que ',
    'Une autre preuve montre que ',
    'Ce travail fait également apparaître que ',
    'La dernière preuve indique que ',
  ];

  return leads[index % leads.length];
}

function getPassageParts(passage) {
  const sentence = getFirstSentences(passage, 1);
  const boundaries = [
    ',',
    ';',
    ' afin de ',
    ' afin que ',
    ' pour que ',
    ' pour ',
    ' lorsque ',
    ' tout en ',
    ' sans ',
  ];
  const possibleEnds = boundaries
    .map((boundary) => sentence.indexOf(boundary))
    .filter((position) => position >= 35);
  const excerptEnd = possibleEnds.length > 0
    ? Math.min(...possibleEnds)
    : sentence.length;

  return {
    highlighted: sentence.slice(0, excerptEnd).trim(),
    remainder: sentence.slice(excerptEnd).trimStart(),
  };
}

function EvidenceReference({ evidence, index, skillColorIndexes, detailed = false }) {
  if (!evidence) {
    return null;
  }

  const passageParts = getPassageParts(evidence.passage);

  return (
    <span>
      {' '}
      {detailed ? getEvidenceLead(index) : getShortEvidenceLead(index)}
      <mark
        className="skill-passage"
        style={getSkillCssVariables(
          evidence.skill,
          skillColorIndexes.get(evidence.skill) ?? index,
        )}
        title={`${evidence.skill} - trace ${evidence.traceNumber}`}
      >
        {passageParts.highlighted}
      </mark>
      {passageParts.remainder ? ` ${passageParts.remainder}` : ''}
      .
    </span>
  );
}

export function AnalysisBlock({
  analysis,
  elementaryEvidence = [],
  traceSkillGroups = [],
  skillColorIndexes,
}) {
  const representativeEvidence = getRepresentativeEvidence(elementaryEvidence);
  const visibleSkills = new Set(
    representativeEvidence.map((evidence) => evidence.skill),
  );
  const visibleTraceSkillGroups = traceSkillGroups
    .map((group) => ({
      ...group,
      skills: group.skills.filter((skill) => visibleSkills.has(skill)),
    }))
    .filter((group) => group.skills.length > 0);
  const evidenceGroups = Array.from({ length: 4 }, () => []);

  representativeEvidence.forEach((evidence, index) => {
    evidenceGroups[index % evidenceGroups.length].push(evidence);
  });

  return (
    <article className="analysis-block">
      <div className="analysis-block__header">
        <h2>{analysis.title}</h2>
      </div>

      <div className="analysis-block__layout">
        <div className="analysis-sections">
          <section className="analysis-section">
            <h3>Synthèse</h3>
            <p>
              {getFirstSentences(analysis.context)} Cette expérience doit être
              replacée dans la création globale du site de communication, puisque
              chaque réalisation dépendait de la structure WordPress, des contenus
              administrables et des attentes de Good Geek.
              {evidenceGroups[0].map((evidence, index) => (
                <EvidenceReference
                  key={`${evidence.skill}-context-${index}`}
                  evidence={evidence}
                  index={index}
                  skillColorIndexes={skillColorIndexes}
                />
              ))}
            </p>
            <p>
              Les traces montrent notamment plusieurs actions concrètes.{' '}
              {evidenceGroups[1].map((evidence, index) => (
                <EvidenceReference
                  key={`${evidence.skill}-actions-${index}`}
                  evidence={evidence}
                  index={index + 2}
                  skillColorIndexes={skillColorIndexes}
                  detailed
                />
              ))}
            </p>
            <p>
              {getFirstSentences(analysis.learning, 3)} Ces réalisations montrent
              que le savoir-faire général ne repose pas sur une seule tâche, mais
              sur plusieurs choix complémentaires observables dans les traces. La
              progression s'est construite au fil des essais, des vérifications et
              des corrections apportées au projet. Les situations rencontrées m'ont
              obligé à relier les connaissances techniques aux besoins concrets de
              Good Geek. Elles m'ont aussi appris à comparer plusieurs solutions
              avant de retenir celle qui convenait le mieux au contexte.
              {evidenceGroups[2].map((evidence, index) => (
                <EvidenceReference
                  key={`${evidence.skill}-learning-${index}`}
                  evidence={evidence}
                  index={index + 4}
                  skillColorIndexes={skillColorIndexes}
                />
              ))}
            </p>
            <p>
              Plus globalement, ce travail a demandé de l'autonomie pour rechercher
              des solutions et poursuivre le développement entre deux validations.
              Il a également fallu organiser les priorités, contrôler le résultat
              dans le navigateur et tenir compte des retours formulés par l'équipe.
              Le résultat final associe ainsi développement, gestion des contenus,
              réflexion visuelle, tests et communication professionnelle.
              L'ensemble forme une expérience cohérente, réutilisable dans de futurs
              projets.
              {evidenceGroups[3].map((evidence, index) => (
                <EvidenceReference
                  key={`${evidence.skill}-overview-${index}`}
                  evidence={evidence}
                  index={index + 6}
                  skillColorIndexes={skillColorIndexes}
                />
              ))}
            </p>
          </section>

          <section className="analysis-section">
            <h3>Évaluation</h3>
            <p>
              Avant le stage, mon niveau était <strong>{analysis.before}</strong>.
              Après cette expérience, je l'évalue à <strong>{analysis.after}</strong>.
            </p>
            <p>
              {analysis.difficulties} {analysis.justification}
            </p>
            <p className="analysis-block__refs">
              Traces mobilisées : {analysis.traceRefs.map((number) => `trace ${number}`).join(', ')}.
            </p>
          </section>
        </div>

        <aside className="analysis-skills-panel" aria-label="Savoir-faire élémentaires associés">
          {visibleTraceSkillGroups.map((group) => (
            <section className="bilan-skills-block" key={group.traceNumber}>
              <h3>Trace {group.traceNumber}</h3>
              <p>Savoir-faire élémentaires</p>
              <div className="elementary-list">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="elementary-chip"
                    style={getSkillCssVariables(skill, skillColorIndexes.get(skill))}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </aside>
      </div>
    </article>
  );
}
