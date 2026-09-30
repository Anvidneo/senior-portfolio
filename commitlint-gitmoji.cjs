// Regla local de commitlint: obliga a que el header siga
//   <type>(<scope>)!: :gitmoji: <descripción>
// y que el gitmoji pertenezca a la lista aprobada de la marca.
// Se activa desde commitlint.config.cjs vía `plugins`.

// Gitmojis aprobados, agrupados por tipo de commit para que la elección sea obvia.
const GITMOJI = {
  feat: ['sparkles', 'gift', 'heavy_plus_sign'],
  fix: ['bug', 'ambulance', 'laptop'],
  docs: ['memo', 'books', 'label'],
  style: ['art', 'lipstick', 'dress'],
  refactor: ['recycle', 'hammer', 'wastebasket'],
  perf: ['zap', 'rocket'],
  test: ['white_check_mark', 'test_tube', 'microscope'],
  build: ['package', 'wrench', 'construction'],
  ci: ['green_circle', 'construction_worker', 'traffic_light'],
  chore: ['wrench', 'bookmark', 'broom', 'pushpin', 'lock'],
  revert: ['rewind', 'arrow_heading_up'],
  deps: ['jigsaw', 'link'],
};

const ALL = new Set(Object.values(GITMOJI).flat());

// Distancia de Levenshtein, para sugerir el gitmoji correcto ante un typo.
function distance(a, b) {
  const rows = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 0; j <= b.length; j++) rows[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      rows[i][j] = Math.min(
        rows[i - 1][j] + 1,
        rows[i][j - 1] + 1,
        rows[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
  }
  return rows[a.length][b.length];
}

function suggest(code) {
  let best = null;
  let bestScore = Infinity;
  for (const candidate of ALL) {
    const score = distance(code, candidate);
    if (score < bestScore) {
      bestScore = score;
      best = candidate;
    }
  }
  return bestScore <= Math.max(2, Math.floor(code.length / 3)) ? best : null;
}

// El tipo Conventional Commits seguido de un gitmoji corto y una descripción real.
const HEADER = /^([a-z]+)(?:\([a-z0-9._/-]+\))?(!)?:[ \t]+:([a-z0-9_+-]+):[ \t]+(\S.*?)[ \t]*$/;

module.exports = {
  rules: {
    'gitmoji-header': (parsed) => {
      const header = (parsed.header || '').trim();

      if (!header) return [true, ''];

      const match = HEADER.exec(header);
      if (!match) {
        return [
          false,
          'el header debe ser `<type>(<scope>): :gitmoji: descripción` — ' +
            'ej. `feat: :sparkles: agregar carousel de sabores`',
        ];
      }

      const [, type, , code, description] = match;

      if (!ALL.has(code)) {
        const hint = suggest(code);
        const known = hint
          ? `, quizás quisiste decir :${hint}:`
          : `. Gitmojis aprobados: ${[...ALL].map((c) => `:${c}:`).join(' ')}`;
        return [false, `gitmoji :${code}: no está en la lista${known}`];
      }

      if (GITMOJI[type] && !GITMOJI[type].includes(code)) {
        return [
          false,
          `para \`${type}\` lo natural es ${GITMOJI[type].map((c) => `:${c}:`).join(' o ')}`,
        ];
      }

      if (description.length < 3) {
        return [false, 'la descripción después del gitmoji es demasiado corta'];
      }

      return [true, ''];
    },
  },
};
