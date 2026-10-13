/* Santhosh Chakilam — portfolio app. Fresh design, no streaming theme. */
(function () {
  'use strict';

  /* ---------------- data ---------------- */
  const projects = [
    { id: 'Agentic-Trust-Friction-Orchestrator', title: 'Agentic Trust Friction Orchestrator', kicker: 'Multi-agent risk systems', date: 'Mar 2026', hook: 'Real-time transfer risk with proportional friction.', description: 'A LangGraph system where Claude-powered investigator, context, risk, communication, and judge agents assess cross-border transfers. A pre-LLM compliance firewall handles sanctions and AML checks, PII is SHA-256 hashed, and assessed risk maps to approve, challenge, escalate, or block actions.', tags: ['Claude', 'LangGraph', 'FastAPI', 'ChromaDB'] },
    { id: 'AI-Dashboard-Agent', title: 'AI Dashboard Agent', kicker: 'Natural-language analytics', date: 'Jan 2026', hook: 'Natural-language analytics over your spreadsheets.', description: 'A GPT-4 analytics workspace for CSV, Excel, and SQLite files. It answers questions in context, recommends visualizations, and renders line, bar, pie, scatter, and heatmap charts with ECharts in a React + Vite frontend backed by Node and Express.', tags: ['GPT-4', 'ECharts', 'React', 'Vite', 'Express'] },
    { id: 'SQL-Agent', title: 'SQL Agent', kicker: 'Plain-English to SQL', date: 'Jan 2026', hook: 'Schema-aware SQL help and community Q&A.', description: 'A SQL learning platform where Claude turns plain-English questions plus a pasted schema into explained SQL. Its React + Vite interface combines schema, AI chat, and community Q&A; Node/Express powers the backend and SQLite persists community questions.', tags: ['Claude', 'React', 'Node/Express', 'SQLite'] },
    { id: 'Data-Cleaning-Agent', title: 'Data Cleaning Agent', kicker: 'Autonomous data prep', date: 'Jan 2026', hook: 'Safe, business-aware autonomous cleaning.', description: 'Auto-Janitor uses GPT-4 or Claude with LangGraph to inspect messy datasets, plan multi-step cleaning, and execute in a sandbox with rollback. It handles missing values, mixed formats, and currency/email cleanup while preserving business rules such as negative quantities representing returns.', tags: ['LangGraph', 'GPT-4', 'Claude', 'Python'] },
    { id: 'RAG-Based-Local-Document-Chatbot-with-Llama-3.2-Ollama', title: 'RAG Local Document Chatbot', kicker: 'Private on-device RAG', date: 'Mar 2025', hook: 'Fully local RAG with Llama 3.2 + Ollama.', description: 'A local document-conversation system that retrieves relevant source material before Llama 3.2 answers through Ollama, keeping inference local and grounding responses in the user\u2019s own documents.', tags: ['Python', 'RAG', 'Llama 3.2', 'Ollama'] },
    { id: 'AI-Powered-Knowledge-Base-Search-with-Enrichment', title: 'AI Knowledge-Base Search', kicker: 'Vector retrieval + enrichment', date: '', hook: 'Vector retrieval with answer enrichment.', description: 'A retrieval-augmented knowledge-base application with a FastAPI backend, vector search, and a frontend that surfaces relevant source content before enriching the answer.', tags: ['FastAPI', 'Vector Search', 'RAG'] },
    { id: 'Task-Management-Copilot', title: 'Task Management Copilot', kicker: 'AI inside workflows', date: 'Feb 2025', hook: 'AI assistance inside task workflows.', description: 'An AI copilot project focused on supporting task-management workflows rather than operating as a generic chat interface.', tags: ['AI', 'Copilot'] },
    { id: 'Fine_tuning_llms', title: 'Fine-tuning LLMs', kicker: 'LLM labs', date: 'May 2024', hook: 'Summarization, fine-tuning, and detoxification labs.', description: 'A three-notebook LLM lab covering dialogue summarization, fine-tuning a generative AI model, and fine-tuning a model to detoxify generated summaries.', tags: ['LLMs', 'Fine-tuning', 'Notebooks'] },
    { id: 'Lending-Club', title: 'Lending Club Analytics', kicker: 'Credit risk modeling', date: '2020', hook: 'Classification and regression for lending.', description: 'A notebook-based lending analysis that classifies whether a borrower is likely to fully pay or charge off, and separately predicts a potential loan amount with regression.', tags: ['Classification', 'Regression', 'Analytics'] },
    { id: 'Drowsy-Alert-System', title: 'Drowsy Alert System', kicker: 'Computer vision safety', date: '2020', hook: 'Real-time drowsiness detection with an alarm.', description: 'A Python computer-vision system that monitors for drowsiness in real time and turns a detection into an immediate alarm.', tags: ['Python', 'Computer Vision', 'Real-time'] }
  ].map(p => ({ ...p, url: 'https://github.com/santhoshchakilamcs/' + p.id }));

  const experiences = [
    { company: 'InterspectAI', role: 'Data Scientist', dates: 'Apr 2025 – Jun 2026', location: 'Austin, TX', description: 'Built production AI applications with LangGraph and voice AI. Designed LLM evaluation frameworks that reached 92% human agreement, and shipped real-time quality monitoring that caught 30% more defects.', tags: ['LangGraph', 'Voice AI', 'LLM Evaluation'] },
    { company: 'Arizona State University', role: 'Data Scientist', dates: 'Aug 2024 – Mar 2025', location: '', description: 'RAG research, hybrid retrieval systems, and cloud deployment of AI applications.', tags: ['RAG', 'Hybrid Retrieval', 'Cloud'] },
    { company: 'The Home Depot', role: 'Data Science Intern', dates: 'May – Jul 2023', location: '', description: 'A/B testing that cut cart abandonment by 10%, causal-inference studies, and BigQuery/PySpark data pipelines feeding self-service reporting.', tags: ['A/B Testing', 'BigQuery', 'PySpark'] },
    { company: 'Tata Consultancy Services', role: 'Data Scientist', dates: 'May 2021 – Jul 2022', location: 'Hyderabad', description: 'XGBoost fraud models processing 1M+ records per batch, contributing approximately $2M in annual savings, with MLOps monitoring on a 99.5% SLA.', tags: ['XGBoost', 'Fraud Modeling', 'MLOps'] },
    { company: 'Gagan Innovations', role: 'Data Analyst', dates: 'Nov 2019 – Apr 2021', location: 'Hyderabad', description: 'Customer segmentation, ETL workflows, and executive dashboards that shaped product and marketing decisions.', tags: ['Segmentation', 'ETL', 'Dashboards'] }
  ];

  const skills = [
    { title: 'GenAI & Agents', description: 'Agent systems and retrieval workflows — orchestration, RAG, and prompt engineering.', tags: ['LangChain', 'LangGraph', 'RAG', 'Prompt Engineering'] },
    { title: 'Machine Learning', description: 'Modeling and applied ML, from experimentation to production scoring.', tags: ['scikit-learn', 'XGBoost', 'PyTorch', 'A/B Testing'] },
    { title: 'Data Engineering', description: 'Production data work — pipelines, warehouses, and large-scale processing.', tags: ['Python', 'SQL', 'Spark', 'BigQuery'] },
    { title: 'MLOps & Cloud', description: 'Deployment and operations — shipping and keeping models healthy.', tags: ['AWS', 'Docker', 'CI/CD', 'FastAPI'] },
    { title: 'Voice AI', description: 'Real-time audio systems and conversational AI experiences.', tags: ['Real-time Audio', 'Conversational AI'] },
    { title: 'Analytics & BI', description: 'Turning data into decisions — dashboards and self-service reporting.', tags: ['Tableau', 'ECharts', 'Causal Inference'] }
  ];

  /* ---------------- helpers ---------------- */
  const $ = sel => document.querySelector(sel);
  const esc = v => String(v).replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));

  /* ---------------- projects ---------------- */
  const projectGrid = $('#projectGrid');
  const projectEmpty = $('#projectEmpty');

  function projectCard(p) {
    return '<article class="project-card reveal" tabindex="0" role="button" data-id="' + esc(p.id) + '" aria-label="' + esc(p.title) + ' — view details">' +
      '<p class="card-kicker">' + esc(p.kicker) + '</p>' +
      '<h3>' + esc(p.title) + '</h3>' +
      '<p class="card-hook">' + esc(p.hook) + '</p>' +
      '<div class="chip-row">' + p.tags.slice(0, 4).map(t => '<span class="chip">' + esc(t) + '</span>').join('') + '</div>' +
      '<div class="card-foot"><span class="card-link">Details →</span>' + (p.date ? '<span class="card-date">' + esc(p.date) + '</span>' : '') + '</div>' +
      '</article>';
  }

  function renderProjects(filter) {
    const q = (filter || '').trim().toLowerCase();
    const list = q
      ? projects.filter(p => [p.title, p.kicker, p.description, p.hook, ...p.tags].join(' ').toLowerCase().includes(q))
      : projects;
    projectGrid.innerHTML = list.map(projectCard).join('');
    projectEmpty.hidden = list.length > 0;
    bindCards();
    observeReveals();
  }

  function bindCards() {
    projectGrid.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => openModal(card.dataset.id));
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(card.dataset.id); }
      });
    });
  }

  /* ---------------- experience ---------------- */
  function renderExperience() {
    $('#experienceTimeline').innerHTML = experiences.map(e =>
      '<li class="timeline-item reveal"><div class="timeline-card">' +
      '<h3>' + esc(e.company) + '</h3>' +
      '<p class="timeline-role">' + esc(e.role) + '</p>' +
      '<p class="timeline-meta">' + esc(e.dates) + (e.location ? ' · ' + esc(e.location) : '') + '</p>' +
      '<p>' + esc(e.description) + '</p>' +
      '<div class="chip-row">' + e.tags.map(t => '<span class="chip">' + esc(t) + '</span>').join('') + '</div>' +
      '</div></li>'
    ).join('');
  }

  /* ---------------- skills ---------------- */
  function renderSkills() {
    $('#skillGrid').innerHTML = skills.map(s =>
      '<article class="skill-card reveal"><h3>' + esc(s.title) + '</h3><p>' + esc(s.description) + '</p>' +
      '<div class="chip-row">' + s.tags.map(t => '<span class="chip">' + esc(t) + '</span>').join('') + '</div></article>'
    ).join('');
  }

  /* ---------------- modal ---------------- */
  const backdrop = $('#modalBackdrop');
  let lastFocused = null;

  function openModal(id) {
    const p = projects.find(x => x.id === id);
    if (!p) return;
    lastFocused = document.activeElement;
    $('#modalKicker').textContent = p.kicker;
    $('#modalTitle').textContent = p.title;
    $('#modalSub').textContent = p.date ? p.date + ' · github.com/santhoshchakilamcs/' + p.id : 'github.com/santhoshchakilamcs/' + p.id;
    $('#modalDesc').textContent = p.description;
    $('#modalChips').innerHTML = p.tags.map(t => '<span class="chip">' + esc(t) + '</span>').join('');
    $('#modalActions').innerHTML = '<a class="btn btn-primary" href="' + esc(p.url) + '" target="_blank" rel="noopener">View on GitHub</a>';
    backdrop.hidden = false;
    document.body.style.overflow = 'hidden';
    $('#modalClose').focus();
  }

  function closeModal() {
    backdrop.hidden = true;
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  $('#modalClose').addEventListener('click', closeModal);
  backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !backdrop.hidden) closeModal(); });

  /* ---------------- search ---------------- */
  $('#projectSearch').addEventListener('input', e => renderProjects(e.target.value));

  /* ---------------- theme ---------------- */
  const root = document.documentElement;
  const themeToggle = $('#themeToggle');
  function applyTheme(t) {
    root.dataset.theme = t;
    themeToggle.setAttribute('aria-pressed', t === 'light' ? 'true' : 'false');
    try { localStorage.setItem('sc-theme', t); } catch (_) {}
  }
  (function initTheme() {
    let t = 'dark';
    try { t = localStorage.getItem('sc-theme') || t; } catch (_) {}
    applyTheme(t === 'light' ? 'light' : 'dark');
  })();
  themeToggle.addEventListener('click', () => applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

  /* ---------------- reveal on scroll ---------------- */
  let observer;
  function observeReveals() {
    if (!observer) {
      observer = new IntersectionObserver(entries => {
        entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('visible'); observer.unobserve(en.target); } });
      }, { threshold: 0.12 });
    }
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
  }

  /* ---------------- toast ---------------- */
  let toastTimer;
  function toast(msg) {
    const el = $('#toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
  }

  /* ---------------- AI Santhosh ---------------- */
  const aiAnswers = [
    { patterns: [/genai/, /generative ai/, /\bllm/, /rag\b/, /retrieval/, /agent(?:s|ic)?\b/, /prompt/], answer: "My GenAI work spans RAG, agent orchestration, evaluation, and voice AI. I built a local document chatbot with Llama 3.2 and Ollama, a FastAPI knowledge-base search system with vector retrieval, and a multi-agent orchestration project with LangGraph. At InterspectAI, I also built an LLM evaluation framework with 92% human agreement and worked on a voice AI agent that handled more than 5,000 calls with 98% uptime." },
    { patterns: [/production/, /shipped?/, /interspect/, /voice ai/, /live audio/, /evaluation/], answer: "A good production example is my work at InterspectAI. I built an LLM evaluation framework that reached 92% agreement with human reviewers, real-time quality monitoring that caught 30% more defects, and a voice AI agent that handled more than 5,000 calls with 98% uptime. I like that example because it combines the system itself with the evidence that it worked reliably." },
    { patterns: [/relocat/, /move anywhere/, /where.*(?:want|open|willing|prefer).*work/], answer: "Absolutely. I\u2019m based in Austin, Texas, and I\u2019m open to relocating anywhere in the US. I\u2019m flexible on the work setup too \u2014 remote, onsite, or hybrid all work for me." },
    { patterns: [/work auth/, /authoriz/, /visa/, /sponsor/, /h.?1b/, /cpt/], answer: "I\u2019m currently authorized to work in the US on Day 1 CPT, so I can start immediately. I\u2019ll need H-1B sponsorship in the future for long-term employment, and I\u2019m happy to discuss the details directly." },
    { patterns: [/strongest/, /skills?/, /tech stack/, /technolog/, /python/, /sql\b/], answer: "My strongest lane is where applied data science meets production AI. The verified stack across my work includes Python, SQL, BigQuery, PySpark, XGBoost, FastAPI, vector search, GPT-4 and Claude integrations, plus React, Vite, Express, Node, SQLite, and ECharts. I\u2019ve used that mix for experimentation, causal inference, fraud modeling, RAG, AI agents, and voice AI." },
    { patterns: [/projects?/, /github/, /dashboard agent/, /sql agent/, /portfolio/, /built/], answer: "I have ten projects highlighted here, including AI Dashboard Agent, SQL Agent, Agentic Trust Friction Orchestrator, Data Cleaning Agent, two RAG systems, Task Management Copilot, LLM fine-tuning work, Lending Club modeling, and a Drowsy Alert System. Ask me about any one by name and I\u2019ll give you its purpose, stack, and what it demonstrates; the project cards also link to the GitHub repositories." },
    { patterns: [/experiment/, /a.?b test/, /causal/, /home depot/, /product data/, /analytics/], answer: "At The Home Depot, I worked on A/B testing that cut cart abandonment by 10%, causal-inference studies, and BigQuery/PySpark pipelines. I like that work because it connects rigorous measurement and data engineering to a product result people can see." },
    { patterns: [/fraud/, /xgboost/, /tata/, /tcs/, /savings/], answer: "At Tata Consultancy Services, I built fraud models that processed more than one million records per batch, contributed about $2 million in annual savings, and supported a 99.5% SLA. It\u2019s the example I use when the conversation is about both measurable business impact and reliable production performance." },
    { patterns: [/experience/, /career/, /background/, /worked/, /resume/], answer: "I have 4+ years across five roles. Most recently I was a Data Scientist at InterspectAI from April 2025 to June 2026, before that a Data Scientist at Arizona State University from August 2024 to March 2025, a Data Science Intern at The Home Depot from May to July 2023, a Data Scientist at Tata Consultancy Services from May 2021 to July 2022, and a Data Analyst at Gagan Innovations from November 2019 to April 2021. The progression has taken me from analytics and production ML into experimentation, RAG, evaluation, and voice AI." },
    { patterns: [/education/, /degree/, /university/, /college/, /master/, /mba/, /asu/, /jntu/], answer: "I\u2019m pursuing an MBA in Data Science and Leadership at Concordia University (2026\u20132027). I completed an MS in Artificial Intelligence at Arizona State University (2022\u20132024) and a BTech in Computer Science at JNTU (2015\u20132019)." },
    { patterns: [/where.*based/, /\bbased\b/, /austin/, /texas/, /live/], answer: "I\u2019m based in Austin, Texas. I\u2019m open to opportunities here, remote roles, and relocation anywhere in the US." },
    { patterns: [/contact/, /email/, /reach/, /connect/, /linkedin/], email: true, answer: "You can reach me by email at santhoshchakilamsch@gmail.com or by phone at (310) 590-8763. My LinkedIn is linkedin.com/in/santhosh-chakilam, and my GitHub is github.com/santhoshchakilamcs." },
    { patterns: [/opportunit/, /looking for/, /next role/, /hire/, /available/], answer: "I\u2019m open to Data Scientist and AI Engineer opportunities where I can own meaningful problems and ship systems people actually use. I\u2019m especially interested in teams working on GenAI, experimentation, intelligent products, or production ML." },
    { patterns: [/^hi\b/, /^hello\b/, /^hey\b/, /who are you/, /tell me about yourself/], answer: "Hi! I\u2019m Santhosh \u2014 a Data Scientist and AI Engineer based in Austin. I build production AI, agent, retrieval, and analytics systems, and I\u2019m always happy to talk through the details behind the work. What would you like to know?" }
  ];

  const suggestions = ['What\u2019s your GenAI experience?', 'Tell me about a production system you shipped', 'Are you open to relocation?', 'What are your strongest skills?'];

  const chatFab = $('#chatFab');
  const chatPanel = $('#chatPanel');
  const chatMessages = $('#chatMessages');
  const chatForm = $('#chatForm');
  const chatInput = $('#chatInput');
  let chatOpened = false;
  let lastTopic = null;

  function openChat() {
    chatPanel.hidden = false;
    chatFab.setAttribute('aria-expanded', 'true');
    if (!chatOpened) {
      chatOpened = true;
      addChatMessage("Hi \u2014 I\u2019m Santhosh. Ask about any project or role by name, or about my education, work authorization, availability, and contact details.", 'bot');
      renderSuggestions();
    }
    setTimeout(() => chatInput.focus(), 60);
  }
  function closeChat() {
    chatPanel.hidden = true;
    chatFab.setAttribute('aria-expanded', 'false');
    chatFab.focus();
  }
  chatFab.addEventListener('click', () => (chatPanel.hidden ? openChat() : closeChat()));
  $('#chatClose').addEventListener('click', closeChat);
  $('#heroChatBtn').addEventListener('click', openChat);

  function renderSuggestions() {
    $('#chatSuggestions').innerHTML = suggestions.map(s => '<button class="chat-suggestion" type="button">' + esc(s) + '</button>').join('');
    document.querySelectorAll('.chat-suggestion').forEach(b => b.addEventListener('click', () => {
      chatInput.value = b.textContent;
      chatForm.requestSubmit();
    }));
  }

  function addChatMessage(text, role, emailLink) {
    const msg = document.createElement('div');
    msg.className = 'chat-message ' + (role === 'user' ? 'user-message' : 'bot-message');
    const speaker = document.createElement('span');
    speaker.className = 'message-speaker';
    speaker.textContent = role === 'user' ? 'You' : 'AI Santhosh';
    const copy = document.createElement('p');
    copy.textContent = text;
    msg.appendChild(speaker);
    msg.appendChild(copy);
    if (emailLink) {
      const link = document.createElement('a');
      link.href = 'mailto:santhoshchakilamsch@gmail.com';
      link.textContent = 'Email me';
      copy.appendChild(document.createTextNode(' '));
      copy.appendChild(link);
    }
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function getAIAnswer(question) {
    const normalized = question.toLowerCase().replace(/[’']/g, "'").trim();
    let best = null, bestScore = 0;
    aiAnswers.forEach(entry => {
      const matches = entry.patterns.reduce((t, p) => t + (p.test(normalized) ? 1 : 0), 0);
      if (matches && matches > bestScore) { best = entry; bestScore = matches; }
    });
    if (best) return { answer: best.answer, email: best.email, topic: null };
    return { answer: "I don\u2019t have a verified answer for that in this portfolio, and I\u2019d rather not guess. You can reach me directly at santhoshchakilamsch@gmail.com.", email: true, topic: null };
  }

  chatForm.addEventListener('submit', e => {
    e.preventDefault();
    const q = chatInput.value.trim();
    if (!q) return;
    addChatMessage(q, 'user');
    chatInput.value = '';
    setTimeout(() => {
      const r = getAIAnswer(q);
      addChatMessage(r.answer, 'bot', r.email);
    }, 350);
  });

  /* ---------------- init ---------------- */
  renderProjects('');
  renderExperience();
  renderSkills();
  observeReveals();
})();
