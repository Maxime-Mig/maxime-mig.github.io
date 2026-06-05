import { AnalysisBlock } from '../components/AnalysisBlock.jsx';
import { SubNav } from '../components/SubNav.jsx';
import { TraceDetail } from '../components/TraceDetail.jsx';

function getSubPages(page) {
  return [
    ...page.traces.map((trace) => ({
      id: `trace-${trace.number}`,
      label: `Trace ${trace.number}`,
      traceNumber: trace.number,
    })),
    {
      id: 'bilan',
      label: 'Bilan / Analyse',
    },
  ];
}

function getActiveTab(page, subPages) {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get('vue') || subPages[0].id;
  return subPages.some((tab) => tab.id === requested) ? requested : subPages[0].id;
}

function getPageSkillColorIndexes(page) {
  const indexes = new Map();

  page.traces.forEach((trace) => {
    trace.elementarySkills.forEach((item) => {
      if (!indexes.has(item)) {
        indexes.set(item, indexes.size);
      }
    });
  });

  return indexes;
}

function getElementaryEvidenceForAnalysis(page, analysis) {
  const evidence = [];
  const seenSkills = new Set();

  page.traces.forEach((trace) => {
    if (!trace.skills.includes(analysis.skillId)) {
      return;
    }

    trace.elementarySkills.forEach((skill, index) => {
      if (seenSkills.has(skill)) {
        return;
      }

      const configuredPassages = trace.skillPassages[index];
      const passages = Array.isArray(configuredPassages)
        ? configuredPassages
        : [configuredPassages];
      const passage = passages.find(Boolean);

      if (!passage) {
        return;
      }

      seenSkills.add(skill);
      evidence.push({
        skill,
        passage,
        traceNumber: trace.number,
      });
    });
  });

  return evidence;
}

function getTraceSkillGroupsForAnalysis(page, analysis) {
  return page.traces
    .filter((trace) => trace.skills.includes(analysis.skillId))
    .map((trace) => ({
      traceNumber: trace.number,
      skills: trace.elementarySkills,
    }));
}

function getSectionHeading(page) {
  if (page.slug === 'technique') {
    return 'Présentation et évaluation de savoir-faire techniques';
  }

  if (page.slug === 'suivi-projet') {
    return 'Présentation et évaluation du suivi de projet';
  }

  if (page.slug === 'integration-entreprise') {
    return "Présentation et évaluation de l'intégration en entreprise";
  }

  return page.title;
}

export function SectionPage({ page, loading }) {
  const subPages = getSubPages(page);
  const activeTab = getActiveTab(page, subPages);
  const activeTrace = page.traces.find((trace) => `trace-${trace.number}` === activeTab);
  const isBilan = activeTab === 'bilan';
  const skillColorIndexes = getPageSkillColorIndexes(page);

  return (
    <div className="page page--section">
      <section className="section-top" aria-labelledby={`${page.slug}-title`}>
        <div>
          <h1 id={`${page.slug}-title`}>{getSectionHeading(page)}</h1>
          <p>{page.summary}</p>
        </div>
      </section>

      <SubNav page={page} items={subPages} activeTab={activeTab} />

      {loading ? <p className="loading-state">Chargement des données...</p> : null}

      <section className="section-content" aria-labelledby={`${page.slug}-${activeTab}`}>
        {isBilan ? (
          <div className="analysis-list">
            <div className="analysis-summary">
              <h2 id={`${page.slug}-${activeTab}`}>Bilan / Analyse</h2>
              <p>
                Ces blocs évaluent les savoir-faire généraux à partir des traces
                décrites précédemment, avec une comparaison avant et après l'expérience.
              </p>
              <p>
                Échelle utilisée : niveau 1, débutant ; niveau 2, fragile ;
                niveau 3, moyen ; niveau 4, bon ; niveau 5, expert.
              </p>
            </div>
            {page.analyses.map((analysis) => (
              <AnalysisBlock
                key={analysis.skillId}
                analysis={analysis}
                elementaryEvidence={getElementaryEvidenceForAnalysis(page, analysis)}
                traceSkillGroups={getTraceSkillGroupsForAnalysis(page, analysis)}
                skillColorIndexes={skillColorIndexes}
              />
            ))}
          </div>
        ) : activeTrace ? (
          <TraceDetail
            trace={activeTrace}
            skillColorIndexes={skillColorIndexes}
          />
        ) : (
          <p>Aucune sous-page disponible.</p>
        )}
      </section>
    </div>
  );
}
