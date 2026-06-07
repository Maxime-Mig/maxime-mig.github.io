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

const SYNTHESIS_LEADS = [
  'Concrètement, ',
  'Les traces montrent notamment que ',
  'Dans ce cadre, ',
  'Par ailleurs, ',
  'Cette progression repose aussi sur le fait que ',
  'Enfin, ',
];

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function IntegratedAnalysisParagraph({
  text,
  evidence,
  paragraphIndex,
  skillColorIndexes,
}) {
  const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g)
    ?.map((sentence) => sentence.trim())
    .filter(Boolean) || [];
  const slots = Array.from({ length: sentences.length + 1 }, () => []);

  evidence.forEach((item, evidenceIndex) => {
    const progress = (evidenceIndex + 1) / (evidence.length + 1);
    let slot = Math.round(progress * sentences.length);

    if (paragraphIndex === 1 && evidenceIndex === 0) {
      slot = 0;
    } else if (
      paragraphIndex === 3
      && evidenceIndex === evidence.length - 1
    ) {
      slot = sentences.length;
    }

    slots[slot].push({ ...item, evidenceIndex });
  });

  const renderEvidence = (item, slotIndex) => {
    const atBeginning = slotIndex === 0;
    const passage = atBeginning ? capitalize(item.passage) : item.passage;
    const leadIndex = (paragraphIndex * 2) + item.evidenceIndex;

    return (
      <span key={`${item.skill}-${slotIndex}-${item.evidenceIndex}`}>
        {atBeginning ? null : ` ${SYNTHESIS_LEADS[leadIndex % SYNTHESIS_LEADS.length]}`}
        <mark
          className="skill-passage"
          style={getSkillCssVariables(
            item.skill,
            skillColorIndexes.get(item.skill) ?? item.evidenceIndex,
          )}
          title={`${item.skill} - trace ${item.traceNumber}`}
        >
          {passage}
        </mark>
        {'. '}
      </span>
    );
  };

  return (
    <>
      {slots[0].map((item) => renderEvidence(item, 0))}
      {sentences.map((sentence, sentenceIndex) => (
        <span key={`${paragraphIndex}-sentence-${sentenceIndex}`}>
          {sentence}{' '}
          {slots[sentenceIndex + 1].map((item) => (
            renderEvidence(item, sentenceIndex + 1)
          ))}
        </span>
      ))}
    </>
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
  const synthesisParagraphs = [
    `${getFirstSentences(analysis.context)} Cette expérience doit être replacée dans la création globale du site de communication, puisque chaque réalisation dépendait de la structure WordPress, des contenus administrables et des attentes de Good Geek.`,
    "Les traces présentent plusieurs actions concrètes qui permettent de relier ce savoir-faire général au travail réellement effectué pendant le stage. Elles montrent aussi que les décisions prises répondaient à des besoins observables dans le projet.",
    `${getFirstSentences(analysis.learning, 3)} Ces réalisations montrent que le savoir-faire général ne repose pas sur une seule tâche, mais sur plusieurs choix complémentaires. La progression s'est construite au fil des essais, des vérifications et des corrections apportées au projet. Les situations rencontrées m'ont obligé à relier les connaissances techniques aux besoins concrets de Good Geek.`,
    "Plus globalement, ce travail a demandé de l'autonomie pour rechercher des solutions et poursuivre le développement entre deux validations. Il a également fallu organiser les priorités, contrôler le résultat dans le navigateur et tenir compte des retours formulés par l'équipe. Le résultat final associe ainsi développement, gestion des contenus, réflexion visuelle, tests et communication professionnelle.",
  ];

  return (
    <article className="analysis-block">
      <div className="analysis-block__header">
        <h2>{analysis.title}</h2>
      </div>

      <div className="analysis-block__layout">
        <div className="analysis-sections">
          <section className="analysis-section">
            <h3>Synthèse</h3>
            {synthesisParagraphs.map((paragraph, paragraphIndex) => (
              <p key={`${analysis.skillId}-synthesis-${paragraphIndex}`}>
                <IntegratedAnalysisParagraph
                  text={paragraph}
                  evidence={evidenceGroups[paragraphIndex]}
                  paragraphIndex={paragraphIndex}
                  skillColorIndexes={skillColorIndexes}
                />
              </p>
            ))}
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
