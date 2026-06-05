import { getSkillCssVariables } from '../skillColors.js';
import { SkillBadge } from './SkillBadge.jsx';

export function TraceCard({ trace, skills }) {
  const traceSkills = trace.skills
    .map((skillId) => skills.find((skill) => skill.id === skillId))
    .filter(Boolean);

  return (
    <article className="trace-card">
      <div className="trace-card__media">
        <img src={trace.image} alt="" loading="lazy" />
      </div>

      <div className="trace-card__body">
        <div className="trace-card__heading">
          <p>Trace {trace.number}</p>
          <h3>{trace.title}</h3>
        </div>

        <div className="skill-row" aria-label="Savoir-faire généraux">
          {traceSkills.map((skill) => (
            <SkillBadge key={skill.id} skill={skill} compact />
          ))}
        </div>

        <p className="trace-card__caption">{trace.caption}</p>
        <p>{trace.description}</p>

        <div className="trace-card__split">
          <section>
            <h4>Savoir-faire élémentaires</h4>
            <ul className="analysis-skills">
              {trace.elementarySkills.map((item, index) => (
                <li key={item}>
                  <span
                    className="analysis-skill-chip"
                    style={getSkillCssVariables(item, index)}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h4>Points remarquables</h4>
            <ul>
              {trace.remarkablePoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
