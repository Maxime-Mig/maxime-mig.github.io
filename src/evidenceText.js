const INFINITIVE_BY_PARTICIPLE = {
  adapté: 'adapter',
  ajouté: 'ajouter',
  affiché: 'afficher',
  appliqué: 'appliquer',
  associé: 'associer',
  construit: 'construire',
  conservé: 'conserver',
  contrôlé: 'contrôler',
  corrigé: 'corriger',
  créé: 'créer',
  décodé: 'décoder',
  défini: 'définir',
  développé: 'développer',
  distingué: 'distinguer',
  effectué: 'effectuer',
  employé: 'employer',
  envoyé: 'envoyer',
  expliqué: 'expliquer',
  identifié: 'identifier',
  intégré: 'intégrer',
  interprété: 'interpréter',
  modifié: 'modifier',
  noté: 'noter',
  organisé: 'organiser',
  préparé: 'préparer',
  présenté: 'présenter',
  prévu: 'prévoir',
  protégé: 'protéger',
  récupéré: 'récupérer',
  regroupé: 'regrouper',
  relié: 'relier',
  rendu: 'rendre',
  repris: 'reprendre',
  séparé: 'séparer',
  sollicité: 'solliciter',
  stocké: 'stocker',
  testé: 'tester',
  transformé: 'transformer',
  utilisé: 'utiliser',
  vérifié: 'vérifier',
};

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function extractAction(passage) {
  const action = passage.trim().replace(/^j['’]ai\s+/i, '');
  const [firstWord, ...remainingWords] = action.split(/\s+/);
  const infinitive = INFINITIVE_BY_PARTICIPLE[firstWord.toLowerCase()];

  return {
    action,
    infinitiveAction: infinitive
      ? [infinitive, ...remainingWords].join(' ')
      : '',
  };
}

export function formatEvidenceText(passage, index, capitalizeResult = true) {
  const { action, infinitiveAction } = extractAction(passage);
  let result;

  switch (index % 6) {
    case 1:
      result = infinitiveAction
        ? `la démarche a consisté à ${infinitiveAction}`
        : passage;
      break;
    case 2:
      result = `cette étape s’est appuyée sur le fait d’avoir ${action}`;
      break;
    case 3:
      result = infinitiveAction
        ? `le travail réalisé m’a permis de ${infinitiveAction}`
        : passage;
      break;
    case 4:
      result = `pour y parvenir, j’ai ${action}`;
      break;
    case 5:
      result = infinitiveAction
        ? `une autre action importante a été de ${infinitiveAction}`
        : passage;
      break;
    default:
      result = passage;
  }

  return capitalizeResult ? capitalize(result) : result;
}
