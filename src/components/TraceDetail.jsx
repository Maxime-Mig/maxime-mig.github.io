import { useEffect, useState } from 'react';
import { getSkillCssVariables } from '../skillColors.js';

function getSentences(text) {
  return text
    .match(/[^.!?]+[.!?]+|[^.!?]+$/g)
    ?.map((sentence) => sentence.trim())
    .filter(Boolean) || [];
}

function splitDescription(description, partCount) {
  const sentences = getSentences(description);

  if (partCount <= 1 || sentences.length === 0) {
    return [description];
  }

  const parts = Array.from({ length: partCount }, () => []);

  sentences.forEach((sentence, index) => {
    const partIndex = Math.min(
      Math.floor((index * partCount) / sentences.length),
      partCount - 1,
    );

    parts[partIndex].push(sentence);
  });

  return parts.map((sentencesPart) => sentencesPart.join(' '));
}

const EVIDENCE_LEADS = [
  'Concrètement, ',
  'Dans cette partie, ',
  'Pour obtenir ce résultat, ',
  'Par ailleurs, ',
  'Ainsi, ',
  'Lors de cette étape, ',
];

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function IntegratedTraceParagraph({
  description,
  evidence,
  paragraphIndex,
  skillColorIndexes,
}) {
  const sentences = getSentences(description);
  const slots = Array.from({ length: sentences.length + 1 }, () => []);

  evidence.forEach((item, evidenceIndex) => {
    const progress = (evidenceIndex + 1) / (evidence.length + 1);
    let slot = Math.round(progress * sentences.length);

    if (paragraphIndex % 3 === 1 && evidenceIndex === 0) {
      slot = 0;
    } else if (
      paragraphIndex % 3 === 2
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
        {atBeginning ? null : ` ${EVIDENCE_LEADS[leadIndex % EVIDENCE_LEADS.length]}`}
        <mark
          className="skill-passage"
          style={getSkillCssVariables(
            item.skill,
            skillColorIndexes.get(item.skill) ?? item.skillIndex,
          )}
          title={item.skill}
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

export function TraceDetail({ trace, skillColorIndexes }) {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const evidenceItems = trace.elementarySkills.flatMap((skill, skillIndex) => {
    const passages = Array.isArray(trace.skillPassages?.[skillIndex])
      ? trace.skillPassages[skillIndex]
      : [trace.skillPassages?.[skillIndex] || skill];

    return passages.map((passage) => ({
      skill,
      skillIndex,
      passage,
    }));
  });
  const evidenceGroups = [];

  evidenceItems.forEach((evidence, index) => {
    if (index % 2 === 0) {
      evidenceGroups.push([]);
    }

    evidenceGroups[evidenceGroups.length - 1].push(evidence);
  });
  const descriptionParts = splitDescription(
    trace.description,
    evidenceGroups.length,
  );

  useEffect(() => {
    if (!isImageOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsImageOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('has-image-lightbox');

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('has-image-lightbox');
    };
  }, [isImageOpen]);

  return (
    <article className="trace-detail">
      <header className="trace-detail__header">
        <h2>Trace {trace.number} - {trace.title}</h2>
      </header>

      <section className="elementary-panel" aria-labelledby={`trace-${trace.number}-skills`}>
        <strong id={`trace-${trace.number}-skills`}>
          Savoir-faire élémentaires :
        </strong>

        <div className="elementary-list">
          {trace.elementarySkills.map((item, index) => (
            <span
              key={item}
              className="elementary-chip"
              style={getSkillCssVariables(item, skillColorIndexes.get(item) ?? index)}
            >
              {item}
            </span>
          ))}
        </div>

      </section>

      <div className="trace-detail__main">
        <figure className="trace-figure">
          <button
            className="trace-figure__image"
            type="button"
            onClick={() => setIsImageOpen(true)}
            aria-label={`Agrandir le schéma de la trace ${trace.number}`}
          >
            <img src={trace.image} alt="" loading="lazy" />
          </button>
          <figcaption>
            <strong>{trace.caption}</strong>
            <span className="trace-figure__hint">
              Cliquez sur l'image pour l'agrandir.
            </span>
          </figcaption>

        </figure>

        <div className="trace-detail__text">
          {evidenceGroups.map((group, groupIndex) => (
            <p className="trace-skill-paragraph" key={`${trace.number}-${groupIndex}`}>
              <IntegratedTraceParagraph
                description={descriptionParts[groupIndex] || ''}
                evidence={group}
                paragraphIndex={groupIndex}
                skillColorIndexes={skillColorIndexes}
              />
            </p>
          ))}
        </div>
      </div>

      {isImageOpen ? (
        <div
          className="trace-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Schéma agrandi de la trace ${trace.number}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsImageOpen(false);
            }
          }}
        >
          <div className="trace-lightbox__content">
            <button
              className="trace-lightbox__close"
              type="button"
              onClick={() => setIsImageOpen(false)}
              aria-label="Fermer le schéma agrandi"
            >
              ×
            </button>
            <img src={trace.image} alt={trace.caption} />
            <p>{trace.caption}</p>
          </div>
        </div>
      ) : null}
    </article>
  );
}

