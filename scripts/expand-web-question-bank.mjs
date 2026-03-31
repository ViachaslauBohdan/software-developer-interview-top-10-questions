import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const repoRoot = process.cwd();
const targetPerLevel = 100;
const levels = ['junior', 'middle', 'senior'];

const domains = {
  react: ['hooks', 'state management', 'performance', 'testing', 'accessibility', 'architecture', 'forms'],
  next: ['app router', 'server actions', 'caching', 'seo', 'auth', 'deployment', 'web vitals'],
  node: ['event loop', 'api design', 'performance', 'streams', 'security', 'testing', 'scalability'],
  nest: ['modules', 'dependency injection', 'validation', 'guards', 'testing', 'architecture', 'observability'],
  aws: ['lambda', 'api gateway', 'iam', 'networking', 'monitoring', 'cost optimization', 'resilience'],
  security: ['authentication', 'authorization', 'xss', 'csrf', 'secrets', 'supply chain', 'incident response'],
  css: ['layout', 'specificity', 'responsive design', 'performance', 'accessibility', 'animation', 'design tokens']
};

const leadByLevel = {
  junior: ['What is', 'Why is', 'When should you use', 'How do you explain', 'What problem does'],
  middle: ['How do you implement', 'How do you debug', 'How do you optimize', 'How do you design', 'What trade-offs do you make for'],
  senior: ['How do you architect', 'How do you scale', 'How do you govern', 'How do you standardize', 'How do you de-risk']
};

const contexts = [
  'for high-traffic production systems',
  'in distributed teams',
  'with strict reliability requirements',
  'with strong security constraints',
  'while reducing operational cost',
  'for long-term maintainability',
  'for interview-ready practical examples'
];

const trendingTerms = [
  'server actions',
  'edge',
  'supply chain',
  'platform engineering',
  'observability',
  'web vitals',
  'multi-region',
  'ai-assisted',
  'container query',
  'design tokens'
];

function toSlug(input) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 92);
}

function toFileName(index, question) {
  return `${String(index + 1).padStart(3, '0')}-${toSlug(question)}.ts`;
}

function buildQuestion(domain, level, lead, topic, context) {
  const label = domain === 'css' ? 'CSS' : domain.toUpperCase();
  return `${lead} ${topic} in ${label} ${context}?`;
}

function generateQuestions(domain, level) {
  const questions = [];
  for (const lead of leadByLevel[level]) {
    for (const topic of domains[domain]) {
      for (const context of contexts) {
        questions.push(buildQuestion(domain, level, lead, topic, context));
      }
    }
  }

  questions.push(`How do you apply AI-assisted development safely in ${domain.toUpperCase()} interview scenarios?`);
  questions.push(`How do you benchmark and improve ${domain.toUpperCase()} performance budgets in production?`);
  questions.push(`How do you identify and prevent common ${domain.toUpperCase()} production incidents early?`);

  return [...new Set(questions)];
}

function inferTags(question, domain, level) {
  const q = question.toLowerCase();
  const tags = [domain, level];
  for (const topic of domains[domain]) {
    if (q.includes(topic)) tags.push(topic.replace(/\s+/g, '-'));
  }
  if (q.includes('performance')) tags.push('performance');
  if (q.includes('security')) tags.push('security');
  if (q.includes('observability')) tags.push('observability');
  return [...new Set(tags)];
}

function isTrending(question, index) {
  if (index < 12) return true;
  const q = question.toLowerCase();
  return trendingTerms.some((term) => q.includes(term));
}

function moduleTemplate(domain, level, question, tags, trending) {
  return `export const technology = '${domain}' as const;
export const level = '${level}' as const;
export const question = ${JSON.stringify(question)} as const;
export const tags = ${JSON.stringify(tags)} as const;
export const trending = ${trending ? 'true' : 'false'} as const;

export function answer(): string {
  return 'Explain the concept in plain language, compare practical trade-offs, and conclude with one production-ready implementation approach.';
}

export function shortExample(): string {
  return \`// ${domain.toUpperCase()} short example
// Topic: ${question}
// Keep this practical and interview-oriented.
\`;
}
`;
}

async function getCurrentQuestions(dir) {
  const set = new Set();
  try {
    const files = await readdir(dir);
    for (const file of files) {
      if (!file.endsWith('.ts')) continue;
      const content = await readFile(path.join(dir, file), 'utf8');
      const match = content.match(/export const question = "([\s\S]*?)" as const;/);
      if (match) set.add(match[1]);
    }
  } catch {
    return set;
  }
  return set;
}

async function rewriteLevel(domain, level) {
  const dir = path.join(repoRoot, 'web/src/questions', domain, level);
  await rm(dir, { recursive: true, force: true });
  await mkdir(dir, { recursive: true });

  const existing = await getCurrentQuestions(dir);
  const generated = generateQuestions(domain, level);
  const finalList = [...existing];

  for (const q of generated) {
    if (finalList.length >= targetPerLevel) break;
    if (!finalList.includes(q)) finalList.push(q);
  }

  let i = 1;
  while (finalList.length < targetPerLevel) {
    const fallback = `How do you handle ${domains[domain][i % domains[domain].length]} in ${domain.toUpperCase()} ${level} interviews at scale scenario ${i}?`;
    if (!finalList.includes(fallback)) finalList.push(fallback);
    i += 1;
  }

  await Promise.all(
    finalList.slice(0, targetPerLevel).map((question, index) => {
      const tags = inferTags(question, domain, level);
      const trending = isTrending(question, index);
      const fileName = toFileName(index, question);
      return writeFile(path.join(dir, fileName), moduleTemplate(domain, level, question, tags, trending), 'utf8');
    })
  );
}

async function main() {
  for (const domain of Object.keys(domains)) {
    for (const level of levels) {
      await rewriteLevel(domain, level);
    }
  }
  console.log('Expanded web/src/questions to 100 files per level for each technology.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
