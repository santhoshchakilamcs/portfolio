
    const iconPlus = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6V5Z"/></svg>';
    const iconCheck = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m9.2 16.2-4.4-4.4-1.4 1.4L9.2 19 21 7.2l-1.4-1.4-10.4 10.4Z"/></svg>';
    const iconGitHub = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .7a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.9 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.8 5.5-5.5 5.8.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6A11.5 11.5 0 0 0 12 .7Z"/></svg>';

    const projects = [
      { id:'AI-Dashboard-Agent', title:'AI Dashboard Agent', hook:'Natural-language analytics over your spreadsheets.', description:'A GPT-4 analytics workspace for CSV, Excel, and SQLite files. It answers questions in context, recommends visualizations, and renders line, bar, pie, scatter, and heatmap charts with ECharts in a React + Vite frontend backed by Node and Express.', tags:['GPT-4','ECharts','React','Vite','Express'], date:'Jan 2026', mark:'AI' },
      { id:'SQL-Agent', title:'SQL Agent', hook:'Schema-aware SQL help and community Q&A.', description:'A SQL learning platform where Claude turns plain-English questions plus a pasted schema into explained SQL. Its React + Vite interface combines schema, AI chat, and community Q&A; Node/Express powers the backend and SQLite persists community questions.', tags:['Claude','React','Node/Express','SQLite'], mark:'SQL' },
      { id:'Agentic-Trust-Friction-Orchestrator', title:'Agentic Trust Friction Orchestrator', hook:'Real-time transfer risk with proportional friction.', description:'A LangGraph system where Claude-powered investigator, context, risk, communication, and judge agents assess cross-border transfers. A pre-LLM compliance firewall handles sanctions/AML, PII is SHA-256 hashed, and risk maps to approve, challenge, escalate, or block actions.', tags:['Claude','LangGraph','FastAPI','ChromaDB'], mark:'AG' },
      { id:'RAG-Based-Local-Document-Chatbot-with-Llama-3.2-Ollama', title:'RAG-Based Local Document Chatbot', hook:'Fully local RAG with Llama 3.2 + Ollama.', description:'A local document-conversation system that retrieves relevant source material before Llama 3.2 answers through Ollama, keeping inference local and grounding responses in the user’s documents.', tags:['Python','RAG','Llama 3.2','Ollama'], mark:'RAG' },
      { id:'AI-Powered-Knowledge-Base-Search-with-Enrichment', title:'AI-Powered Knowledge-Base Search', hook:'Vector retrieval with answer enrichment.', description:'A retrieval-augmented knowledge-base application with a FastAPI backend, vector search, and a frontend that surfaces relevant source content before enriching the answer.', tags:['FastAPI','Vector Search','RAG'], mark:'KB' },
      { id:'Data-Cleaning-Agent', title:'Data Cleaning Agent', hook:'Safe, business-aware autonomous cleaning.', description:'Auto-Janitor uses GPT-4 or Claude with LangGraph to inspect messy datasets, plan multi-step cleaning, and execute in a sandbox with rollback. It handles missing values, mixed formats, currency and email cleanup while preserving business rules such as negative quantities representing returns.', tags:['LangGraph','GPT-4','Claude','Python'], mark:'DC' },
      { id:'Task-Management-Copilot', title:'Task Management Copilot', hook:'AI assistance inside task workflows.', description:'An AI copilot project focused on supporting task-management workflows rather than operating as a generic chat interface.', tags:['AI','Copilot'], mark:'TM' },
      { id:'Fine_tuning_llms', title:'Fine-tuning LLMs', hook:'Summarization, fine-tuning, and detoxification labs.', description:'A three-notebook LLM lab covering dialogue summarization, fine-tuning a generative AI model, and fine-tuning a model to detoxify generated summaries.', tags:['LLMs','Fine-tuning','Notebooks'], mark:'FT' },
      { id:'Lending-Club', title:'Lending Club Analytics', hook:'Classification and regression for lending.', description:'A notebook-based lending analysis that classifies whether a borrower is likely to fully pay or charge off and separately predicts a potential loan amount with regression.', tags:['Classification','Regression','Analytics'], mark:'LC' },
      { id:'Drowsy-Alert-System', title:'Drowsy Alert System', hook:'Real-time drowsiness detection with an alarm.', description:'A Python computer-vision system that monitors for drowsiness in real time and turns a detection into an immediate alarm.', tags:['Python','Computer Vision','Real-time'], mark:'CV' }
    ].map(p => ({...p, type:'project', url:'https://github.com/santhoshchakilamcs/' + p.id}));

    const experiences = [
      { id:'interspectai', title:'InterspectAI', role:'Data Scientist', dates:'Apr 2025–Jun 2026', location:'Austin, TX', description:'Production AI apps with LangGraph and voice AI; evaluation frameworks reached 92% human agreement.', tags:['LangGraph','Voice AI','Evaluation'], mark:'IA', type:'experience' },
      { id:'asu', title:'Arizona State University', role:'Data Scientist', dates:'Aug 2024–Mar 2025', location:'', description:'RAG research, hybrid retrieval, and cloud deployment.', tags:['RAG','Hybrid Retrieval','Cloud'], mark:'ASU', type:'experience' },
      { id:'home-depot', title:'The Home Depot', role:'Data Science Intern', dates:'May–Jul 2023', location:'', description:'A/B testing cut cart abandonment 10%; causal inference studies and BigQuery/PySpark pipelines.', tags:['BigQuery','PySpark','A/B Testing'], mark:'HD', type:'experience' },
      { id:'tcs', title:'Tata Consultancy Services', role:'Data Scientist', dates:'May 2021–Jul 2022', location:'Hyderabad', description:'XGBoost fraud models on 1M+ records per batch; approximately $2M in annual savings.', tags:['XGBoost','Fraud Models','ML'], mark:'TCS', type:'experience' },
      { id:'gagan', title:'Gagan Innovations', role:'Data Analyst', dates:'Nov 2019–Apr 2021', location:'Hyderabad', description:'Segmentation, ETL, and executive dashboards.', tags:['Segmentation','ETL','Dashboards'], mark:'GI', type:'experience' }
    ];

    const skills = [
      { id:'machine-learning', title:'Machine Learning', description:'Modeling and applied ML with scikit-learn, XGBoost, and PyTorch.', tags:['scikit-learn','XGBoost','PyTorch'], mark:'ML', type:'skill' },
      { id:'genai-agents', title:'GenAI & Agents', description:'Agent systems and retrieval workflows with LangChain, LangGraph, RAG, and prompt engineering.', tags:['LangChain','LangGraph','RAG','Prompt Engineering'], mark:'AI', type:'skill' },
      { id:'data-engineering', title:'Data Engineering', description:'Production data work with Python, SQL, Spark, BigQuery, and Databricks.', tags:['Python','SQL','Spark','BigQuery','Databricks'], mark:'DE', type:'skill' },
      { id:'mlops-cloud', title:'MLOps & Cloud', description:'Deployment and operations across AWS, Docker, CI/CD, and monitoring.', tags:['AWS','Docker','CI/CD','Monitoring'], mark:'OPS', type:'skill' },
      { id:'voice-ai', title:'Voice AI', description:'Real-time audio systems and conversational AI experiences.', tags:['Real-time Audio','Conversational AI'], mark:'VOX', type:'skill' }
    ];

    const allItems = [...projects, ...experiences, ...skills];
    const saved = new Set();
    let lastFocused = null;

    const esc = value => String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));

    function projectCard(item, index, inList) {
      const active = saved.has(item.id);
      const meta = item.type === 'experience'
        ? '<span class="role">' + esc(item.role) + '</span><p class="experience-meta">' + esc(item.dates) + (item.location ? ' · ' + esc(item.location) : '') + '</p>'
        : '';
      return '<article class="media-card searchable ' + (item.type === 'experience' ? 'experience-card ' : '') + (item.type === 'skill' ? 'skill-card ' : '') + '" tabindex="0" role="button" data-id="' + esc(item.id) + '" data-type="' + esc(item.type) + '" data-search="' + esc([item.title,item.role,item.description,...item.tags].filter(Boolean).join(' ').toLowerCase()) + '">' +
        '<div class="card-art" data-mark="' + esc(item.mark) + '"></div>' +
        (item.type !== 'experience' ? '<button class="list-toggle ' + (active ? 'active' : '') + '" type="button" data-save="' + esc(item.id) + '" aria-label="' + (active ? 'Remove from My List' : 'Add to My List') + '">' + (active ? iconCheck : iconPlus) + '</button>' : '') +
        '<div class="card-content"><span class="card-index">' + String(index + 1).padStart(2,'0') + '</span><h3 class="card-title">' + esc(item.title) + '</h3>' + meta + '<p class="card-hook">' + esc(item.hook || item.description) + '</p><div class="card-tags">' + item.tags.slice(0,3).map(t => '<span class="card-tag">' + esc(t) + '</span>').join('') + '</div></div></article>';
    }

    function renderAll() {
      document.getElementById('projectsRail').innerHTML = projects.map((item, i) => projectCard(item, i, false)).join('');
      document.getElementById('experienceRail').innerHTML = experiences.map((item, i) => projectCard(item, i, false)).join('');
      document.getElementById('skillsRail').innerHTML = skills.map((item, i) => projectCard(item, i, false)).join('');
      renderMyList();
      bindCards();
    }

    function renderMyList() {
      const items = allItems.filter(item => saved.has(item.id));
      const section = document.getElementById('myListSection');
      section.hidden = items.length === 0;
      document.getElementById('myListRail').innerHTML = items.map((item, i) => projectCard(item, i, true)).join('');
    }

    function bindCards() {
      document.querySelectorAll('.media-card').forEach(card => {
        card.addEventListener('click', e => {
          if (e.target.closest('[data-save]')) return;
          openModal(card.dataset.id, card.dataset.type);
        });
        card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(card.dataset.id, card.dataset.type); } });
      });
      document.querySelectorAll('[data-save]').forEach(button => button.addEventListener('click', e => {
        e.stopPropagation();
        toggleSaved(button.dataset.save);
      }));
    }

    function toggleSaved(id) {
      const item = allItems.find(entry => entry.id === id);
      if (!item) return;
      if (saved.has(id)) { saved.delete(id); showToast('Removed ' + item.title + ' from My List'); }
      else { saved.add(id); showToast('Added ' + item.title + ' to My List'); }
      renderAll();
      applySearch(document.getElementById('searchInput').value);
      const openId = document.getElementById('modalBackdrop').dataset.itemId;
      if (openId === id) updateModalActions(item);
    }

    function openModal(id, type) {
      const item = allItems.find(entry => entry.id === id && entry.type === type) || allItems.find(entry => entry.id === id);
      if (!item) return;
      lastFocused = document.activeElement;
      const backdrop = document.getElementById('modalBackdrop');
      backdrop.hidden = false;
      backdrop.dataset.itemId = item.id;
      backdrop.dataset.itemType = item.type;
      document.getElementById('modalTitle').textContent = item.title;
      const visual = document.getElementById('modalVisual');
      visual.dataset.mark = item.mark;
      document.getElementById('modalCopy').textContent = item.description;
      const meta = [...item.tags];
      if (item.role) meta.unshift(item.role);
      if (item.dates) meta.unshift(item.dates);
      if (item.date) meta.unshift(item.date);
      if (item.location) meta.push(item.location);
      document.getElementById('modalMeta').innerHTML = meta.map(m => '<span class="modal-chip">' + esc(m) + '</span>').join('');
      updateModalActions(item);
      backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
      document.getElementById('modalClose').focus();
    }

    function updateModalActions(item) {
      const actions = document.getElementById('modalActions');
      let html = '';
      if (item.url) html += '<a class="btn btn-primary" href="' + esc(item.url) + '" target="_blank" rel="noopener">' + iconGitHub + ' View on GitHub</a>';
      if (item.type !== 'experience') html += '<button class="btn btn-secondary" id="modalSave" type="button">' + (saved.has(item.id) ? iconCheck + ' In My List' : iconPlus + ' My List') + '</button>';
      actions.innerHTML = html;
      const saveButton = document.getElementById('modalSave');
      if (saveButton) saveButton.addEventListener('click', () => toggleSaved(item.id));
    }

    function closeModal() {
      const backdrop = document.getElementById('modalBackdrop');
      backdrop.classList.remove('open');
      backdrop.hidden = true;
      document.body.style.overflow = '';
      if (lastFocused) lastFocused.focus();
    }

    let toastTimer;
    function showToast(message) {
      const toast = document.getElementById('toast');
      toast.textContent = message;
      toast.classList.add('visible');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove('visible'), 2200);
    }

    const chartSets = {
      revenue: { title:'Revenue by segment', metric:'$1.42M', labels:['ENT','MID','SMB','PUB'], values:[92,71,54,38], insight:'Enterprise leads at 41% of sample revenue; Mid-Market has the fastest month-over-month gain.' },
      growth: { title:'Quarterly growth', metric:'+28.4%', labels:['Q1','Q2','Q3','Q4'], values:[36,49,68,88], insight:'The sample series accelerates after Q2, with Q4 contributing the largest sequential lift.' },
      retention: { title:'90-day retention', metric:'78.2%', labels:['JAN','FEB','MAR','APR'], values:[62,74,86,78], insight:'The March cohort retains best in the sample, outperforming January by 24 percentage points.' }
    };
    const sqlSets = {
      region: { rows:[['West','$428K',92],['South','$367K',79],['Northeast','$311K',67],['Midwest','$284K',61]], query:'SELECT c.region, SUM(o.total) AS revenue\nFROM orders o JOIN customers c ON c.id = o.customer_id\nGROUP BY c.region ORDER BY revenue DESC LIMIT 4;' },
      segment: { rows:[['Enterprise','$2,940',91],['Mid-Market','$1,780',70],['SMB','$640',44]], query:'SELECT c.segment, AVG(o.total) AS avg_order\nFROM orders o JOIN customers c ON c.id = o.customer_id\nGROUP BY c.segment ORDER BY avg_order DESC;' },
      funnel: { rows:[['Product view','18.4K',100],['Add to cart','9.7K',73],['Checkout','6.2K',52],['Purchase','4.9K',41]], query:"SELECT action, COUNT(DISTINCT user_id) AS users\nFROM events WHERE action IN ('view','cart','checkout','purchase')\nGROUP BY action ORDER BY users DESC;" }
    };
    const ragChunks = [
      {score:.89,title:'Usage limits',copy:'Workspace plans include role-based quotas and an admin usage dashboard.'},
      {score:.81,title:'Data retention',copy:'Uploaded documents can be removed by workspace administrators from settings.'},
      {score:.74,title:'Team permissions',copy:'Editors can add sources; viewers can search and open cited passages.'},
      {score:.66,title:'Export formats',copy:'Reports export to CSV and PDF from the analysis workspace.'},
      {score:.57,title:'Notification rules',copy:'Digest frequency can be configured per workspace.'}
    ];

    function renderChart(key) {
      const data = chartSets[key];
      document.getElementById('chartTitle').textContent = data.title;
      document.getElementById('chartMetric').textContent = data.metric;
      document.getElementById('chartInsight').textContent = data.insight;
      document.getElementById('demoChart').innerHTML = data.values.map((value,i) => '<div class="demo-bar-wrap"><div class="demo-bar" style="height:'+value+'%"></div><span>'+data.labels[i]+'</span></div>').join('');
    }
    function renderSql(key) {
      const data = sqlSets[key];
      document.getElementById('sqlRows').textContent = data.rows.length + ' rows';
      document.getElementById('sqlOutput').innerHTML = data.rows.map(row => '<div class="sql-line"><span>'+esc(row[0])+'</span><i style="--w:'+row[2]+'%"></i><b>'+esc(row[1])+'</b></div>').join('');
      document.getElementById('sqlCode').textContent = data.query;
    }
    function renderRag() {
      const threshold = Number(document.getElementById('ragThreshold').value) / 100;
      const matches = ragChunks.filter(chunk => chunk.score >= threshold);
      document.getElementById('ragValue').textContent = threshold.toFixed(2);
      document.getElementById('ragCount').textContent = matches.length + (matches.length === 1 ? ' chunk' : ' chunks');
      document.getElementById('ragResults').innerHTML = matches.length ? matches.map(chunk => '<div class="rag-result"><b><span>'+esc(chunk.title)+'</span><span>'+chunk.score.toFixed(2)+'</span></b><span>'+esc(chunk.copy)+'</span></div>').join('') : '<div class="rag-result"><b><span>No chunks pass this threshold</span></b><span>Lower the threshold to widen recall.</span></div>';
    }
    function initLab() {
      renderChart('revenue'); renderSql('region'); renderRag();
      document.querySelectorAll('.lab-tab').forEach(tab => tab.addEventListener('click', () => {
        document.querySelectorAll('.lab-tab').forEach(item => { item.classList.toggle('active', item === tab); item.setAttribute('aria-selected', String(item === tab)); });
        document.querySelectorAll('.lab-pane').forEach(pane => pane.classList.toggle('active', pane.dataset.pane === tab.dataset.lab));
      }));
      document.querySelectorAll('[data-chart]').forEach(button => button.addEventListener('click', () => {
        document.querySelectorAll('[data-chart]').forEach(item => item.classList.toggle('active', item === button)); renderChart(button.dataset.chart);
      }));
      document.querySelectorAll('[data-sql]').forEach(button => button.addEventListener('click', () => {
        document.querySelectorAll('[data-sql]').forEach(item => item.classList.toggle('active', item === button)); renderSql(button.dataset.sql);
      }));
      document.getElementById('ragThreshold').addEventListener('input', renderRag);
      document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', async () => {
        const text = document.getElementById(button.dataset.copy).innerText;
        try { await navigator.clipboard.writeText(text); showToast('Code copied'); }
        catch (_) { showToast('Select the snippet to copy'); }
      }));
    }


    const aiAnswers = [
      {
        priority:100, topic:'sql-agent',
        patterns:[/sql[- ]?agent/,/text[- ]?to[- ]?sql/,/plain[- ]?english.*sql/],
        answer:"SQL Agent is an AI-powered SQL learning platform I built with Claude. A user pastes a database schema, asks a question in plain English, and gets schema-aware SQL with an explanation; the same app also includes community Q&A.",
        extended:"The interface uses a three-column Schema, AI Chat, and Community layout. React and Vite power the frontend, Node and Express handle the service layer, Claude generates real-time answers from the supplied table structure and relationships, and SQLite persists community questions. The README also describes AI auto-categorization for posts, so the project combines a focused text-to-SQL assistant with a collaborative learning workflow."
      },
      {
        priority:100, topic:'ai-dashboard-agent',
        patterns:[/ai dashboard agent/,/dashboard[- ]?agent/,/csv.*excel.*sqlite/,/spreadsheet.*visual/],
        answer:"AI Dashboard Agent lets someone upload CSV, Excel, or SQLite data, ask questions in plain English, and turn the answers into interactive charts. GPT-4 handles the data conversation while the product wraps it in a usable analytics workflow.",
        extended:"The React 18 and Vite frontend parses CSV with PapaParse, Excel with XLSX, and SQLite in-browser with SQL.js. GPT-4 provides context-aware interpretation and visualization recommendations; ECharts renders line, bar, pie, scatter, heatmap, and other views. A Node and Express backend handles the OpenAI integration and uploads through Multer, and the interface includes four selectable dashboard themes."
      },
      {
        priority:100, topic:'trust-friction-orchestrator',
        patterns:[/agentic[- ]?trust[- ]?friction/,/trust[- ]?friction[- ]?orchestrator/],
        answer:"Agentic Trust Friction Orchestrator is a real-time cross-border money-transfer risk system built with Claude agents and LangGraph. Investigator, context, risk-scoring, communication, and judge agents work together so low-risk transfers stay smooth while suspicious ones get proportionate friction.",
        extended:"The Investigator reviews amount, IP, device, and transfer corridor; the Context agent adds user history and life events from ChromaDB vector memory; and the Risk Scorer returns a 0–1 score plus an action. Scores under 0.3 are approved, 0.3–0.6 trigger friendly soft 2FA, and scores above 0.6 go to human review. Sanctions and AML hits bypass the agents entirely through a hard compliance firewall that runs before any LLM call. PII is SHA-256 hashed before reaching Claude, the service has API-key auth and rate limiting, and a separate LLM-as-a-Judge grades reasoning quality. It ships as a FastAPI server with a web UI, 82 tests, and GitHub Actions CI/CD."
      },
      {
        priority:100, topic:'data-cleaning-agent',
        patterns:[/data cleaning agent/,/cleaning[- ]?agent/,/auto[- ]?janitor/],
        answer:"Data Cleaning Agent, or Auto-Janitor, uses GPT-4 or Claude with LangGraph to understand a messy dataset, create a step-by-step cleaning plan, and execute it safely. It is designed to preserve business meaning instead of blindly treating every unusual value as an error.",
        extended:"The agent handles missing values, mixed date, phone, and email formats, currency symbols, whitespace, case normalization, and email validation. Its sandboxed execution layer supports rollback, and the README calls out a useful business rule: negative quantities can represent returns and should be preserved. The Python package separates the core agent, LangGraph workflow, sandbox, provider abstraction, and configuration, with examples and a pytest suite for complex and edge-case datasets."
      },
      {
        priority:100, topic:'local-rag-chatbot',
        patterns:[/local document chatbot/,/llama 3\.2/,/ollama/,/local rag/],
        answer:"The RAG-Based Local Document Chatbot lets users talk with their own documents through a local retrieval pipeline using Llama 3.2 and Ollama. The goal is grounded document answers without sending inference to a hosted model.",
        extended:"The system retrieves relevant material from the user’s documents before Llama 3.2 generates a response through Ollama. That retrieval step keeps the answer tied to source content, while local inference keeps the core workflow on the user’s machine. It is a compact demonstration of the full RAG loop: ingest documents, retrieve useful context, and answer from that context rather than relying on general model knowledge."
      },
      {
        priority:100, topic:'knowledge-base-search',
        patterns:[/knowledge[- ]?base[- ]?search/,/search[- ]?with[- ]?enrichment/,/knowledge[- ]?base.*enrichment/],
        answer:"AI-Powered Knowledge-Base Search with Enrichment is a RAG application that combines a FastAPI backend, vector search, and a frontend experience. It finds relevant knowledge-base content first, then uses that context to support a better answer.",
        extended:"The project covers the retrieval stack end to end: a FastAPI service receives the query, vector search ranks relevant knowledge-base material, and the retrieved context is carried into the enrichment step before the result reaches the frontend. It is focused on making internal information easier to find and use, while keeping the answer connected to retrieved source material."
      },
      {
        priority:100, topic:'task-management-copilot',
        patterns:[/task management copilot/,/task[- ]?management/,/task copilot/],
        answer:"Task Management Copilot is an AI assistant built around task-management workflows. Instead of being a generic chatbot, it explores how a copilot can sit inside the work of organizing and handling tasks.",
        extended:"The project is intentionally workflow-focused: the assistant supports task management as the primary use case rather than presenting an open-ended chat surface. It demonstrates the product pattern I care about—placing AI inside a clear job to be done, where its help is connected to the user’s next action."
      },
      {
        priority:100, topic:'fine-tuning-llms',
        patterns:[/fine[-_ ]?tuning.*llm/,/fine_tuning_llms/,/fine tune.*model/],
        answer:"Fine_tuning_llms is a three-notebook lab covering dialogue summarization, generative-model fine-tuning, and fine-tuning a model to detoxify generated summaries. It shows hands-on work beyond prompt-only LLM use.",
        extended:"The repository is organized as a progression: the first notebook works through dialogue summarization, the second fine-tunes a generative AI model, and the third adapts a model to reduce toxicity in summaries. Together they cover both task adaptation and behavior-focused tuning in a reproducible notebook format."
      },
      {
        priority:100, topic:'lending-club',
        patterns:[/lending[- ]?club/,/loan default/,/loan amount regression/],
        answer:"My Lending Club project treats lending as two machine-learning problems: classify whether an approved borrower is likely to fully pay or charge off, and predict a potential loan amount with regression.",
        extended:"The repository separates classification, regression, and preprocessing notebooks. The classification side focuses on the repayment outcome—fully paid versus charged off—while the regression side estimates the loan amount that could be offered. That made it a useful end-to-end exercise in preparing lending data and applying two different supervised-learning approaches to related business decisions."
      },
      {
        priority:100, topic:'drowsy-alert-system',
        patterns:[/drowsy[- ]?alert/,/drowsiness/,/driver[- ]?alert/],
        answer:"Drowsy Alert System is a Python computer-vision project that detects drowsiness in real time and triggers an alarm. It connects visual detection directly to an immediate safety response.",
        extended:"The project’s core loop is deliberately practical: monitor the camera input, detect signs of drowsiness, and activate an audible alert when the condition is met. It is an early example of my interest in complete ML systems, where the model output drives a real-time action instead of ending as an offline prediction."
      },
      {
        priority:120, topic:'interspect-how',
        patterns:[/how.*(?:interspect(?:ai)?|llm.*(?:grade|eval)|human agreement|92%|quality monitoring|30% more defects)/,/(?:interspect(?:ai)?|llm.*(?:grade|eval)|human agreement|quality monitoring).*(?:how did you|how does|how can)/],
        answer:"The eval problem was that nobody trusted the LLM's grades. I built a framework that scored model outputs against human-labeled examples and kept iterating on the rubric until machine-human agreement hit 92%. Once people trusted the scores, the monitoring caught 30% more defects because teams actually acted on the flags.",
        extended:"The eval problem was that nobody trusted the LLM's grades. I built a framework that scored model outputs against human-labeled examples and kept iterating on the rubric until machine-human agreement hit 92%. Once people trusted the scores, the monitoring caught 30% more defects because teams actually acted on the flags."
      },
      {
        priority:120, topic:'asu-how',
        patterns:[/how.*(?:arizona state|\basu\b|hybrid retrieval|dense embeddings?|keyword search|pure vector search)/,/(?:arizona state|\basu\b|hybrid retrieval|dense embeddings?|keyword search).*(?:how did you|how does|how can)/],
        answer:"I built a hybrid retrieval setup — dense embeddings plus classic keyword search — because pure vector search kept missing exact terms. Then I added an evaluation layer that graded responses against reference answers, and deployed the whole thing on the cloud so the lab could actually use it.",
        extended:"I built a hybrid retrieval setup — dense embeddings plus classic keyword search — because pure vector search kept missing exact terms. Then I added an evaluation layer that graded responses against reference answers, and deployed the whole thing on the cloud so the lab could actually use it."
      },
      {
        priority:120, topic:'tcs-how',
        patterns:[/how.*(?:tata consultancy|\btcs\b|fraud|1m\+?|99\.5%|2m)/,/(?:tata consultancy|\btcs\b|fraud|1m\+?|99\.5%|2m).*(?:how did you|how does|how can)/],
        answer:"Fraud was a needle-in-haystack problem at 1M+ records per batch. I engineered behavioral features out of the transaction streams and tuned the models for recall without drowning the review team in false positives. The batch pipeline held a 99.5% SLA, and the estimated savings came to about $2M a year.",
        extended:"Fraud was a needle-in-haystack problem at 1M+ records per batch. I engineered behavioral features out of the transaction streams and tuned the models for recall without drowning the review team in false positives. The batch pipeline held a 99.5% SLA, and the estimated savings came to about $2M a year."
      },
      {
        priority:120, topic:'gagan-how',
        patterns:[/how.*(?:gagan|customer segmentation|clustering|etl|executive dashboards?)/,/(?:gagan|customer segmentation|clustering|etl|executive dashboards?).*(?:how did you|how does|how can)/],
        answer:"Mostly foundational work — I segmented customers with clustering so marketing could stop treating everyone the same, and built ETL pipelines feeding dashboards the execs actually opened. Less glamorous, but it's where I learned that a pipeline nobody trusts is worse than no pipeline.",
        extended:"Mostly foundational work — I segmented customers with clustering so marketing could stop treating everyone the same, and built ETL pipelines feeding dashboards the execs actually opened. Less glamorous, but it's where I learned that a pipeline nobody trusts is worse than no pipeline."
      },
      {
        priority:90,
        patterns:[/interspect(?:ai)?/,/5k\+? calls/,/quality monitoring/,/human agreement/],
        answer:"Most recently, I was a Data Scientist at InterspectAI in Austin from April 2025 through June 2026. I built an LLM evaluation framework that reached 92% agreement with human reviewers, developed real-time quality monitoring that caught 30% more defects, and worked on a voice AI agent that handled more than 5,000 calls with 98% uptime. That role was a strong mix of building production AI and creating the measurement needed to trust it."
      },
      {
        priority:90,
        patterns:[/current role/,/current job/,/where do you work/,/where are you working/,/most recent role/,/latest role/],
        answer:"My most recent role was Data Scientist at InterspectAI in Austin, from April 2025 through June 2026. I’m currently interviewing and can start immediately under Day 1 CPT; I’ll need H-1B sponsorship in the future."
      },
      {
        priority:120, topic:'home-depot-experiment',
        patterns:[/how.*(?:a.?b test|cart abandonment|home depot)/,/(?:what did you test|walk me through|explain).*(?:cart abandonment|home depot|a.?b test)/,/(?:cart abandonment|home depot).*(?:how|what did you test|walk me through)/],
        answer:"We were seeing a lot of drop-off at the checkout step, so I designed A/B tests on the cart and checkout flow — things like surfacing estimated delivery dates earlier and simplifying the guest-checkout path. The winning variant cut abandonment by 10%. The unglamorous part was the measurement: making sure the randomization was clean and the lift was real before anyone called it a win.",
        extended:"We were seeing a lot of drop-off at the checkout step, so I designed A/B tests on the cart and checkout flow — things like surfacing estimated delivery dates earlier and simplifying the guest-checkout path. The winning variant cut abandonment by 10%. The unglamorous part was the measurement: making sure the randomization was clean and the lift was real before anyone called it a win."
      },
      {
        priority:90,
        patterns:[/home depot/,/cart abandonment/,/causal inference/,/a.?b test/],
        answer:"I was a Data Science Intern at The Home Depot from May through July 2023. I worked on A/B testing that cut cart abandonment by 10%, causal-inference studies, and BigQuery/PySpark pipelines. What I liked about the role was connecting data engineering and rigorous measurement to a specific product outcome."
      },
      {
        priority:90,
        patterns:[/tata consultancy/,/\btcs\b/,/fraud model/,/1m\+? records/,/99\.5%/],
        answer:"I was a Data Scientist at Tata Consultancy Services in Hyderabad from May 2021 through July 2022. I built fraud models that processed more than one million records per batch, contributed about $2 million in annual savings, and supported a 99.5% SLA. It was a valuable lesson in making machine learning work reliably at production scale."
      },
      {
        priority:90,
        patterns:[/arizona state.*(?:work|job|role|experience)/,/(?:work|job|role|experience).*arizona state/,/\basu\b.*(?:work|job|role|experience)/,/(?:work|job|role|experience).*\basu\b/,/(?:tell me about|did you do).*(?:arizona state|\basu\b)/],
        answer:"I worked as a Data Scientist at Arizona State University from August 2024 through March 2025. My work there focused on RAG research, hybrid retrieval, and cloud deployment. It was the bridge between my graduate AI work and the production AI systems I built next."
      },
      {
        priority:90,
        patterns:[/gagan innovations/,/gagan.*(?:work|job|role)/,/(?:work|job|role|did you do).*gagan/,/did you do.*gagan/],
        answer:"I started as a Data Analyst at Gagan Innovations in Hyderabad, from November 2019 through April 2021. I worked on segmentation, ETL, and executive dashboards—building the analytics foundation that I later carried into data science and AI roles."
      },
      {
        priority:90,
        patterns:[/(?:degree|study|education|master|ms).*arizona state/,/(?:degree|study|education|master|ms).*\basu\b/,/mba.*concordia/,/concordia.*mba/,/btech/,/jntu/],
        answer:"My education includes an MS in Artificial Intelligence from Arizona State University, completed from 2022 to 2024, and a BTech in Computer Science from JNTU, completed from 2015 to 2019. I’m currently pursuing an MBA in Data Science and Leadership at Concordia University from August 2026 to August 2027."
      },
      {
        priority:90,
        patterns:[/phone/,/telephone/,/call you/],
        answer:"You can reach me by phone at (310) 590-8763 or by email at santhoshchakilamsch@gmail.com. My LinkedIn and GitHub are also linked in the Connect section below.",
        email:true
      },
      {
        patterns:[/tell me about yourself/,/introduce yourself/,/quick pitch/,/who is santhosh/],
        answer:"I’m a Data Scientist and AI Engineer with 4+ years of experience, based in Austin. My background runs from large-scale analytics and experimentation to production GenAI, RAG, agent orchestration, and voice AI. I’m at my best when I can take an ambiguous problem, build the system, and connect it to a result people can measure."
      },
      {
        patterns:[/why.*hire/,/what makes you different/,/why you/,/stand out/],
        answer:"I combine applied data science with the work needed to make AI useful in production. My record includes A/B testing that cut cart abandonment by 10%, fraud modeling that contributed about $2 million in annual savings, an LLM evaluation framework with 92% human agreement, and a voice AI agent that handled more than 5,000 calls with 98% uptime. I care about both the model and the evidence that it works."
      },
      {
        patterns:[/greatest strength/,/biggest strength/,/best strength/,/superpower/],
        answer:"My biggest strength is connecting applied data science to production AI. I’ve worked across experimentation, causal inference, fraud modeling, RAG, agent orchestration, LLM evaluation, and voice AI, with hands-on work in Python, BigQuery, PySpark, FastAPI, and full-stack AI applications. That range lets me follow a problem from the data through to a working product and measurable result."
      },
      {
        patterns:[/biggest challenge/,/greatest challenge/,/hardest problem/,/difficult challenge/],
        answer:"One of the harder problems has been making AI quality measurable instead of subjective. At InterspectAI, I worked on evaluation frameworks for production AI and voice systems that reached 92% agreement with human reviewers. The key was treating evaluation as part of the product—not something added after the model was already shipped."
      },
      {
        priority:110, topic:'trust-friction-orchestrator',
        patterns:[/(?:what(?:'s| is)|which is).*best project/,/tell me.*best project/,/(?:your|the) best project/,/best project.*(?:done|built|have)/,/favorite project/,/favourite project/,/project.*most proud/,/proudest project/],
        answer:"If I had to pick one, it’s the Agentic Trust Friction Orchestrator. It’s a multi-agent system I built with LangGraph and Claude that scores cross-border payment risk in real time. Specialized agents investigate the transaction, pull user context from vector memory, and apply the right level of friction: auto-approve, a 2FA challenge, or escalation to a human. What I’m proudest of is the engineering around it: a compliance firewall that blocks sanctioned transfers before any LLM call, PII hashing, an LLM judge grading the agents’ reasoning, 82 tests, and CI/CD. It’s the project that feels most like production system design, not just a demo."
      },
      {
        patterns:[/lead(?:ing|ership| a team)?/,/mentor/,/managed people/],
        answer:"I’ve worked across data science, engineering, and product-style problems, but I’d rather not overstate formal leadership or mentoring details that aren’t covered here. Ask me directly at santhoshchakilamsch@gmail.com and I’ll give you the right context.",
        email:true
      },
      {
        patterns:[/salary/,/compensation/,/pay range/,/expected pay/],
        answer:"It depends on the role, scope, and location, so I’d rather look at the full opportunity than anchor too early. I’m happy to discuss a fair range once I understand the position."
      },
      {
        patterns:[/notice period/,/when can you start/,/start date/,/how soon/,/immediately/],
        answer:"I can start immediately. I’m currently authorized to work in the US on Day 1 CPT, and I’ll need H-1B sponsorship in the future for long-term employment."
      },
      {
        patterns:[/remote/,/on.?site/,/onsite/,/hybrid/,/work preference/],
        answer:"I’m flexible—I’m open to remote, onsite, or hybrid work. I’m based in Austin today and willing to relocate anywhere in the US for the right role."
      },
      {
        patterns:[/years? of experience/,/how long.*work/,/how much experience/,/seniority/],
        answer:"I have 4+ years of experience across data science, AI engineering, analytics, and applied machine learning. That includes production AI at InterspectAI, RAG work at ASU, experimentation at The Home Depot, and large-scale fraud modeling at TCS."
      },
      {
        patterns:[/why data science/,/why ai/,/why.*machine learning/,/chose.*data/],
        answer:"That motivation is something I’d rather answer personally than have the portfolio invent for me. The work here shows the pattern: I’ve moved from analytics and production ML into experimentation, RAG, evaluation, agents, and voice AI. Reach me at santhoshchakilamsch@gmail.com and I’ll give you the real answer in my own words.",
        email:true
      },
      {
        patterns:[/hobb(?:y|ies)/,/outside work/,/free time/,/interests? outside/],
        answer:"Good question—I keep this portfolio focused on my work, so I’d rather answer the personal side directly. Reach me at santhoshchakilamsch@gmail.com and ask away.",
        email:true
      },
      {
        patterns:[/genai/,/generative ai/,/\bllm/,/rag\b/,/retrieval/,/agent(?:s|ic)?\b/,/prompt/],
        answer:"My GenAI work spans RAG, agent orchestration, evaluation, and voice AI. I built a local document chatbot with Llama 3.2 and Ollama, a FastAPI knowledge-base search system with vector retrieval, and a Python multi-agent orchestration project. At InterspectAI, I also built an LLM evaluation framework with 92% human agreement and worked on a voice AI agent that handled more than 5,000 calls with 98% uptime."
      },
      {
        patterns:[/production/,/shipped?/,/real.world/,/interspect/,/voice ai/,/live audio/,/evaluation/],
        answer:"A good production example is my work at InterspectAI. I built an LLM evaluation framework that reached 92% agreement with human reviewers, real-time quality monitoring that caught 30% more defects, and a voice AI agent that handled more than 5,000 calls with 98% uptime. I like that example because it combines the system itself with the evidence that it worked reliably."
      },
      {
        patterns:[/relocat/,/move anywhere/,/location flexibility/,/where.*(?:want|open|willing|prefer).*work/],
        answer:"Absolutely. I’m based in Austin, Texas, and I’m open to relocating anywhere in the US. I’m flexible on the work setup too—remote, onsite, or hybrid all work for me."
      },
      {
        patterns:[/work auth/,/authoriz/,/visa/,/sponsor/,/h.?1b/,/cpt/],
        answer:"I’m currently authorized to work in the US on Day 1 CPT, so I can start immediately. I’ll need H-1B sponsorship in the future for long-term employment, and I’m happy to discuss the details directly."
      },
      {
        patterns:[/strongest/,/skills?/,/tech stack/,/technolog/,/python/,/sql\b/],
        answer:"My strongest lane is where applied data science meets production AI. The verified stack across my work includes Python, SQL, BigQuery, PySpark, XGBoost, FastAPI, vector search, GPT-4 and Claude integrations, plus React, Vite, Express, Node, SQLite, and ECharts. I’ve used that mix for experimentation, causal inference, fraud modeling, RAG, AI agents, and voice AI."
      },
      {
        patterns:[/projects?/,/github/,/dashboard agent/,/sql agent/,/portfolio/,/built/],
        answer:"I have ten projects highlighted here, including AI Dashboard Agent, SQL Agent, Agentic Trust Friction Orchestrator, Data Cleaning Agent, two RAG systems, Task Management Copilot, LLM fine-tuning work, Lending Club modeling, and a Drowsy Alert System. Ask me about any one by name and I’ll give you its purpose, stack, date, and what it demonstrates; the project cards below also link to the GitHub repositories."
      },
      {
        patterns:[/experiment/,/a.?b test/,/causal/,/home depot/,/product data/,/analytics/],
        answer:"At The Home Depot, I worked on A/B testing that cut cart abandonment by 10%, causal-inference studies, and BigQuery/PySpark pipelines. I like that work because it connects rigorous measurement and data engineering to a product result people can see."
      },
      {
        patterns:[/fraud/,/xgboost/,/tata/,/tcs/,/savings/],
        answer:"At Tata Consultancy Services, I built fraud models that processed more than one million records per batch, contributed about $2 million in annual savings, and supported a 99.5% SLA. It’s the example I use when the conversation is about both measurable business impact and reliable production performance."
      },
      {
        patterns:[/experience/,/career/,/background/,/worked/,/resume/],
        answer:"I have 4+ years across five roles. Most recently I was a Data Scientist at InterspectAI from April 2025 to June 2026, before that a Data Scientist at Arizona State University from August 2024 to March 2025, a Data Science Intern at The Home Depot from May to July 2023, a Data Scientist at Tata Consultancy Services from May 2021 to July 2022, and a Data Analyst at Gagan Innovations from November 2019 to April 2021. The progression has taken me from analytics and production ML into experimentation, RAG, evaluation, and voice AI."
      },
      {
        patterns:[/education/,/degree/,/university/,/college/,/master/,/mba/,/asu/,/jntu/],
        answer:"I’m pursuing an MBA in Data Science and Leadership at Concordia University from August 2026 to August 2027. I completed an MS in Artificial Intelligence at Arizona State University from 2022 to 2024 and a BTech in Computer Science at JNTU from 2015 to 2019."
      },
      {
        patterns:[/where.*based/,/based/,/austin/,/texas/,/live/],
        answer:"I’m based in Austin, Texas. I’m open to opportunities here, remote roles, and relocation anywhere in the US."
      },
      {
        patterns:[/contact/,/email/,/reach/,/connect/,/linkedin/],
        answer:"You can reach me by email at santhoshchakilamsch@gmail.com or by phone at (310) 590-8763. My LinkedIn is linkedin.com/in/santhosh-chakilam, and my GitHub is github.com/santhoshchakilamcs.",
        email:true
      },
      {
        patterns:[/opportunit/,/looking for/,/next role/,/hire/,/available/],
        answer:"I’m open to Data Scientist and AI Engineer opportunities where I can own meaningful problems and ship systems people actually use. I’m especially interested in teams working on GenAI, experimentation, intelligent products, or production ML."
      },
      {
        patterns:[/^hi\b/,/^hello\b/,/^hey\b/,/who are you/,/tell me about yourself/],
        answer:"Hi! I’m Santhosh—a Data Scientist and AI Engineer based in Austin. I build production AI, agent, retrieval, and analytics systems, and I’m always happy to talk through the details behind the work. What would you like to know?"
      }
    ];

    function getAIAnswer(question, lastTopic) {
      const normalized = question.toLowerCase().replace(/[’']/g, "'").trim();
      const asksForMore = /^(?:can you )?(?:please )?(?:tell me )?(?:more|more details|go deeper|expand|elaborate|what else)(?:\s+(?:please|on that|about that|on this|about this))?[?!. ]*$/.test(normalized) || /\b(?:more details|tell me more|go deeper|expand on|elaborate on)\b/.test(normalized);
      let best = null;
      let bestScore = 0;
      aiAnswers.forEach(entry => {
        const matches = entry.patterns.reduce((total, pattern) => total + (pattern.test(normalized) ? 1 : 0), 0);
        const score = matches ? matches + (entry.priority || 0) : 0;
        if (score > bestScore) { best = entry; bestScore = score; }
      });
      if (!best && asksForMore && lastTopic) best = aiAnswers.find(entry => entry.topic === lastTopic) || null;
      if (best) return {
        answer: asksForMore && best.extended ? best.extended : best.answer,
        email: best.email,
        topic: best.topic || null
      };
      return {
        answer:"I don’t have a verified answer for that in this portfolio, and I’d rather not guess. You can reach me directly at santhoshchakilamsch@gmail.com.",
        email:true,
        topic:null
      };
    }

    function addChatMessage(text, role, emailLink) {
      const messages = document.getElementById('chatMessages');
      const message = document.createElement('div');
      message.className = 'chat-message ' + (role === 'user' ? 'user-message' : 'bot-message');
      const speaker = document.createElement('span');
      speaker.className = 'message-speaker';
      speaker.textContent = role === 'user' ? 'You' : 'AI Santhosh';
      const copy = document.createElement('p');
      copy.textContent = text;
      if (emailLink) {
        const spacer = document.createTextNode(' ');
        const link = document.createElement('a');
        link.href = 'mailto:santhoshchakilamsch@gmail.com';
        link.target = '_blank';
        link.rel = 'noopener';
        link.textContent = 'Email Santhosh';
        copy.append(spacer, link);
      }
      message.append(speaker, copy);
      messages.appendChild(message);
      messages.scrollTop = messages.scrollHeight;
    }

    function initAISanthosh() {
      const form = document.getElementById('chatForm');
      const input = document.getElementById('chatInput');
      const send = document.getElementById('chatSend');
      const typing = document.getElementById('typingIndicator');
      const suggestions = [...document.querySelectorAll('[data-question]')];
      let responding = false;
      let lastTopic = null;

      function ask(question) {
        const clean = String(question || '').trim();
        if (!clean || responding) return;
        responding = true;
        addChatMessage(clean, 'user', false);
        input.value = '';
        input.disabled = true;
        send.disabled = true;
        suggestions.forEach(button => { button.disabled = true; });
        typing.hidden = false;
        typing.scrollIntoView({ block:'nearest', behavior: motionOK ? 'smooth' : 'auto' });
        const result = getAIAnswer(clean, lastTopic);
        if (result.topic) lastTopic = result.topic;
        const delay = 620 + Math.min(clean.length * 10, 420);
        window.setTimeout(() => {
          typing.hidden = true;
          addChatMessage(result.answer, 'bot', result.email);
          input.disabled = false;
          send.disabled = false;
          suggestions.forEach(button => { button.disabled = false; });
          responding = false;
          input.focus();
        }, delay);
      }

      form.addEventListener('submit', event => { event.preventDefault(); ask(input.value); });
      suggestions.forEach(button => button.addEventListener('click', () => ask(button.dataset.question)));
    }

    function applySearch(rawQuery) {
      const query = rawQuery.trim().toLowerCase();
      let visibleCount = 0;
      document.querySelectorAll('.searchable').forEach(item => {
        const match = !query || (item.dataset.search || '').includes(query);
        item.hidden = !match;
        if (match) visibleCount++;
      });
      document.querySelectorAll('.rail-section').forEach(section => {
        if (section.id === 'myListSection' && saved.size === 0) return;
        const searchable = [...section.querySelectorAll('.searchable')];
        section.hidden = searchable.length > 0 && searchable.every(item => item.hidden);
      });
      document.getElementById('emptyState').classList.toggle('visible', Boolean(query) && visibleCount === 0);
    }

    renderAll();
    initAISanthosh();

    function enterPortfolio(shiftFocus) {
      const gate = document.getElementById('profileGate');
      if (gate.classList.contains('dismissed')) return;
      gate.classList.add('dismissed');
      if (shiftFocus) document.getElementById('heroInfo').focus();
    }
    document.getElementById('enterPortfolio').addEventListener('click', () => enterPortfolio(true));
    document.getElementById('heroInfo').addEventListener('click', () => openModal('AI-Dashboard-Agent','project'));
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalBackdrop').addEventListener('click', e => { if (e.target.id === 'modalBackdrop') closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
    document.getElementById('searchInput').addEventListener('input', e => applySearch(e.target.value));

    document.querySelectorAll('[data-rail]').forEach(button => button.addEventListener('click', () => {
      const rail = document.getElementById(button.dataset.rail);
      rail.scrollBy({ left: rail.clientWidth * .78 * Number(button.dataset.dir), behavior: 'smooth' });
    }));

    const header = document.getElementById('siteHeader');
    const progress = document.getElementById('scrollProgress');
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 25);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = 'scaleX(' + (max > 0 ? window.scrollY / max : 0) + ')';
    }, { passive:true });
    const motionOK = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hero = document.getElementById('home');
    const heroArt = hero.querySelector('.hero-art');
    if (motionOK) hero.addEventListener('pointermove', e => {
      const x = (e.clientX / window.innerWidth - .5) * 12;
      const y = (e.clientY / window.innerHeight - .5) * 9;
      heroArt.style.translate = x + 'px ' + y + 'px';
    });
    const menuButton = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');
    menuButton.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { navLinks.classList.remove('open'); menuButton.setAttribute('aria-expanded','false'); }));

    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: .08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  