---
title: "Test page"
layout: content
permalink: /testpage/
order: 9
nav: false
nav_title: 
nav_order: 9
---

---testing----

<div class="phase-diagram-wrapper">
  <div class="phase-sidebar rotated-label-container">
    <div class="rotated-label">PHASE ONE</div>
  </div>
  <div class="phase-sidebar rotated-step-container">
    <div class="rotated-step">Foundations</div>
  </div>
  <div class="phase-diagram">
    <div class="phase-block current">
      <div class="phase-header">Discovery</div>
      <p>Research internal operations, external trends, and regulatory requirements to set the context for your strategy.</p>
    </div>
    <div class="arrow">&#8594;</div>
    <div class="phase-block">
      <div class="phase-header">Stakeholder Engagement</div>
      <p>Consult internal and external stakeholders to identify sustainability priorities, risks, and opportunities.</p>
    </div>
    <div class="arrow">&#8594;</div>
    <div class="phase-block">
      <div class="phase-header">Materiality Analysis</div>
      <p>Analyse stakeholder input, assess organisation impact, and rank key sustainability issues.</p>
    </div>
  </div>
</div>


/* CSS BELOW */
<style>
/* Overview diagram blocks */
.phase-diagram-wrapper {
  display: flex;
  align-items: flex-start; /* Align top edges */
  gap: 0.5rem;             /* Reduced gap */
  flex-wrap: nowrap;
  margin: 1rem 0;          /* Reduced vertical margin */
  border: 1px solid #d4e3dc;
  border-radius: 20px;
  padding: 0.5rem;         /* Reduced padding */
}

.phase-sidebar {
  display: flex;
  flex-direction: column;   /* stack “Phase One” and “Foundations” */
  align-items: flex-end;    /* right-align the rotated labels */
  justify-content: flex-start; /* top-align inside the wrapper */
  gap: 0.25rem;             /* small, consistent gap */
  align-self: flex-start;   /* hug the top of the wrapper */
  margin-right: 0;          /* remove extra offset */
  font-family: sans-serif;
  flex: 0 0 auto;
}

.rotated-label-container,
.rotated-step-container {
  margin: 0;                /* drop manual top margins */
}

.rotated-label {
  background: #e6f2ed;
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  color: #1f3f2e;
  padding: 0.2rem 0.1rem;
  border-radius: 10px;
  transform: rotate(270deg) translate(-100%, 0);
  transform-origin: top left;
  white-space: nowrap;
  margin-bottom: 0.25rem;   /* reduced bottom margin */
}

.rotated-step {
  font-size: 0.85rem;
  color: #2f7c4c;
  font-weight: 500;
  padding: 0.2rem 0.1rem;
  transform: rotate(270deg) translate(-100%, 0);
  transform-origin: top left;
  white-space: nowrap;
}

.phase-diagram {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  flex-wrap: nowrap;
}

.phase-block {
  background: none;
  padding: 0.5rem;
  border-radius: 12px;
  border: none;
  flex: 1;
  font-family: sans-serif;
  transition: background 0.3s ease;
}

.phase-block.current .phase-header {
  background: #d0ebd8;     /* ‘current’ header highlight */
}

.phase-header {
  background: #d0ebd8;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  font-weight: 600;
  color: #2f4f2f;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.phase-block p {
  margin: 0;
  font-size: 0.8rem;
  color: #333;
}

.arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex: 0 0 auto;
  color: #66a189;
  font-weight: bold;
}

@media (max-width: 768px) {
  .phase-diagram-wrapper {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
    padding: 0.5rem;
    margin: 1rem 0;
  }
  .phase-sidebar {
    transform: none;
    flex-direction: row;
    margin-right: 0.25rem;
    gap: 0.25rem;
  }
  .rotated-label,
  .rotated-step {
    transform: none;
    white-space: normal;
    padding: 0.25rem 0.5rem;
    margin-right: 0.25rem;
    font-size: 0.8rem;
  }
  .phase-diagram {
    flex-direction: column;
    gap: 0.25rem;
  }
  .arrow {
    transform: rotate(90deg);
    font-size: 1rem;
  }
}
  </style>
