export function SkillBadge({ skill, compact = false }) {
  return (
    <span
      className={compact ? 'skill-badge skill-badge--compact' : 'skill-badge'}
      style={{ '--skill-color': skill.color }}
    >
      {skill.name}
    </span>
  );
}
