import icons from '../data/icons.json';

type Icons = typeof icons;
export type IconName = keyof Icons['material'] | keyof Icons['devicon'] | keyof Icons['fontawesome'];

// Police et caractère d'une icône.
export function icon(name: IconName) {
  for (const [set, list] of Object.entries(icons)) {
    const code = (list as Record<string, string>)[name];
    if (code) return { set, char: String.fromCodePoint(parseInt(code, 16)) };
  }
  throw new Error(`Icône inconnue : ${name}`);
}

// Logo d'une technologie, quand il existe dans Devicon.
const logos: [RegExp, IconName][] = [
  [/^Godot(?!Steam)|^GDScript/, 'godot'],
  [/Steam/, 'steam'],
  [/^Blender/, 'blender'],
  [/^GitLab/, 'gitlab'],
  [/^Git\b/, 'git'],
  [/^WordPress/, 'wordpress'],
  [/^PHP/, 'php'],
  [/^HTML/, 'html'],
  [/^CSS/, 'css'],
  [/^JavaScript/, 'javascript'],
  [/^TypeScript/, 'typescript'],
  [/^Vue/, 'vue'],
  [/^Vite/, 'vite'],
  [/^Tailwind/, 'tailwind'],
  [/^Node/, 'nodejs'],
  [/^Express/, 'express'],
  [/^Socket/, 'socketio'],
  [/^Prisma/, 'prisma'],
  [/^MySQL/, 'mysql'],
  [/^SQLite/, 'sqlite'],
  [/^MongoDB/, 'mongodb'],
  [/^Redis/, 'redis'],
  [/^Swagger/, 'swagger'],
  [/^Docker/, 'docker'],
  [/^Postman/, 'postman'],
  [/^Python/, 'python'],
  [/^Flask/, 'flask'],
  [/^Java( \d+)?$/, 'java'],
  [/^Maven/, 'maven'],
  [/^JUnit/, 'junit'],
  [/^Cucumber/, 'cucumber'],
];

export const techIcon = (name: string) => logos.find(([pattern]) => pattern.test(name))?.[1];
