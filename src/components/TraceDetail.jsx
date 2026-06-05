import { useEffect, useState } from 'react';
import { formatEvidenceText } from '../evidenceText.js';
import { getSkillCssVariables } from '../skillColors.js';

function splitDescription(description, partCount) {
  const sentences = description
    .match(/[^.!?]+[.!?]+|[^.!?]+$/g)
    ?.map((sentence) => sentence.trim())
    .filter(Boolean) || [];

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
              {descriptionParts[groupIndex] ? (
                <span>{descriptionParts[groupIndex]} </span>
              ) : null}
              {group.map((evidence, evidenceIndex) => (
                <span key={`${evidence.skill}-${evidenceIndex}`}>
                  {' '}
                  <mark
                    className="skill-passage"
                    style={getSkillCssVariables(
                      evidence.skill,
                      skillColorIndexes.get(evidence.skill) ?? evidence.skillIndex,
                    )}
                    title={evidence.skill}
                  >
                    {formatEvidenceText(
                      evidence.passage,
                      (groupIndex * 2) + evidenceIndex,
                    )}
                  </mark>
                  .
                </span>
              ))}
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

