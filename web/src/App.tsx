import { useMemo, useState } from 'react';
import './App.css';

type Level = 'junior' | 'middle' | 'senior';
type Technology = 'react' | 'next' | 'node' | 'nest' | 'aws' | 'security';

type QuestionModule = {
  question: string;
  level: Level;
  technology: Technology;
  answer: () => string;
  shortExample: () => string;
};

type InterviewCategory = 'Most Asked' | 'Less Frequently Asked' | 'Tricky Questions' | 'Senior Deep Dive';

type QuestionItem = {
  id: string;
  question: string;
  level: Level;
  technology: Technology;
  answer: string;
  shortExample: string;
  categories: InterviewCategory[];
};

const namedModules = import.meta.glob<QuestionModule>('./questions/*/*/*.ts', { eager: true });

const allQuestions: QuestionItem[] = Object.entries(namedModules)
  .map(([filePath, mod]) => {
    const value = mod as unknown as QuestionModule;
    return {
      id: filePath,
      question: value.question,
      level: value.level,
      technology: value.technology,
      answer: value.answer(),
      shortExample: value.shortExample(),
      categories: getCategories(value.question, value.level)
    };
  })
  .sort((a, b) => a.question.localeCompare(b.question));

const techOptions: Array<Technology | 'all'> = ['all', 'react', 'next', 'node', 'nest', 'aws', 'security'];
const levelOptions: Array<Level | 'all'> = ['all', 'junior', 'middle', 'senior'];
const categoryOptions: Array<InterviewCategory | 'all'> = ['all', 'Most Asked', 'Less Frequently Asked', 'Tricky Questions', 'Senior Deep Dive'];

function getCategories(question: string, level: Level): InterviewCategory[] {
  const q = question.toLowerCase();
  const categories: InterviewCategory[] = [];
  const lessFrequentSignals = [
    'intercepting routes',
    'parallel routes',
    'route groups',
    'cache poisoning',
    'multi-region',
    'rollout strategy',
    'data ownership',
    'benchmark and control hydration cost',
    'server actions',
    'revalidatetag',
    'metadata in layout and page',
    'prefetching'
  ];
  if (level === 'junior' || q.includes('difference') || q.includes('what is') || q.includes('how do you')) {
    categories.push('Most Asked');
  }
  if (lessFrequentSignals.some((signal) => q.includes(signal))) {
    categories.push('Less Frequently Asked');
  }
  if (
    q.includes('trade-off') ||
    q.includes('avoid') ||
    q.includes('fail') ||
    q.includes('debug') ||
    q.includes('optimize') ||
    q.includes('consistency')
  ) {
    categories.push('Tricky Questions');
  }
  if (level === 'senior') {
    categories.push('Senior Deep Dive');
  }
  return categories.length > 0 ? categories : ['Most Asked'];
}

function App() {
  const [tech, setTech] = useState<Technology | 'all'>('all');
  const [level, setLevel] = useState<Level | 'all'>('all');
  const [category, setCategory] = useState<InterviewCategory | 'all'>('all');
  const [search, setSearch] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const searchText = search.trim().toLowerCase();
    return allQuestions.filter((item) => {
      if (tech !== 'all' && item.technology !== tech) return false;
      if (level !== 'all' && item.level !== level) return false;
      if (category !== 'all' && !item.categories.includes(category)) return false;
      if (searchText && !item.question.toLowerCase().includes(searchText)) return false;
      return true;
    });
  }, [tech, level, category, search]);

  const selected = filtered.find((q) => q.id === selectedId) ?? filtered[0] ?? null;

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Frontend + Backend Interview Coach</p>
          <h1>Interview Question Explorer</h1>
          <p className="subtitle">English-only question bank with quick filtering by stack, level, and tricky areas.</p>
        </div>
        <div className="stat-card">
          <span>Total Questions</span>
          <strong>{allQuestions.length}</strong>
        </div>
      </header>

      <section className="controls">
        <label>
          Technology
          <select value={tech} onChange={(e) => setTech(e.target.value as Technology | 'all')}>
            {techOptions.map((option) => (
              <option key={option} value={option}>
                {option.toUpperCase()}
              </option>
            ))}
          </select>
        </label>

        <label>
          Level
          <select value={level} onChange={(e) => setLevel(e.target.value as Level | 'all')}>
            {levelOptions.map((option) => (
              <option key={option} value={option}>
                {option.toUpperCase()}
              </option>
            ))}
          </select>
        </label>

        <label>
          Category
          <select value={category} onChange={(e) => setCategory(e.target.value as InterviewCategory | 'all')}>
            {categoryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="search-input">
          Search
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Try: caching, event loop, hydration..."
          />
        </label>
      </section>

      <main className="content-grid">
        <section className="question-list">
          <div className="list-header">
            <h2>Questions</h2>
            <span>{filtered.length} matches</span>
          </div>
          {filtered.length === 0 ? (
            <p className="empty-state">No questions found. Try removing one of the filters.</p>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                className={`question-card ${selected?.id === item.id ? 'active' : ''}`}
                onClick={() => setSelectedId(item.id)}
              >
                <div className="chip-row">
                  <span className="chip tech">{item.technology}</span>
                  <span className="chip level">{item.level}</span>
                  {item.categories.map((cat) => (
                    <span key={cat} className="chip category">
                      {cat}
                    </span>
                  ))}
                </div>
                <p>{item.question}</p>
              </button>
            ))
          )}
        </section>

        <section className="details-panel">
          {selected ? (
            <>
              <h2>{selected.question}</h2>
              <div className="chip-row">
                <span className="chip tech">{selected.technology}</span>
                <span className="chip level">{selected.level}</span>
                {selected.categories.map((cat) => (
                  <span key={cat} className="chip category">
                    {cat}
                  </span>
                ))}
              </div>
              <h3>Short answer draft</h3>
              <p>{selected.answer}</p>
              <h3>Short code example</h3>
              <pre>
                <code>{selected.shortExample}</code>
              </pre>
            </>
          ) : (
            <p className="empty-state">Pick a question from the list to see details.</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
