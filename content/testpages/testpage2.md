---
title: "Test page two"
layout: content
permalink: /testpage2/
order: 91
nav: false
nav_title: 
nav_order: 91
---

<div class="phase-diagram-wrapper phase-diagram-column">
  <aside class="phase-sidebar">
    <div class="rotated-label">PHASE ONE</div>
    <div class="rotated-label small">Foundations</div>
  </aside>

  <div class="phase-flow">
    <a class="phase-step" href="/foundations/discovery/">
      <div class="phase-header">Discovery</div>
      <div class="phase-content">
        Research internal operations, external trends, and regulatory requirements to set the context for your strategy.
      </div>
    </a>

    <div class="arrow">→</div>
  
    <div class="phase-step">
      <div class="phase-header">Stakeholder engagement</div>
      <div class="phase-content">
        Consult internal and external stakeholders to identify sustainability priorities, risks, and opportunities.
      </div>
    </div>

    <div class="arrow">→</div>

    <div class="phase-step">
      <div class="phase-header">Materiality analysis</div>
      <div class="phase-content">
        Analyse stakeholder input, assess organisation impact, and rank key sustainability issues.
      </div>
    </div>
  </div>
</div>

---

<div class="phase-diagram-wrapper phase-diagram-column">
  <div class="phase-heading">
    <div class="phase-title">PHASE ONE: Foundations</div>
    <div class="phase-description">Draw out and define what matters to your organisation.</div>
  </div>

  <div class="phase-flow">
    <a class="phase-step" href="/foundations/discovery/">
      <div class="phase-header">Discovery</div>
      <div class="phase-content">
        Research internal operations, external trends, and regulatory requirements to set the context for your strategy.
      </div>
    </a>

    <div class="arrow">→</div>
  
    <div class="phase-step">
      <div class="phase-header">Stakeholder engagement</div>
      <div class="phase-content">
        Consult internal and external stakeholders to identify sustainability priorities, risks, and opportunities.
      </div>
    </div>

    <div class="arrow">→</div>

    <div class="phase-step">
      <div class="phase-header">Materiality analysis</div>
      <div class="phase-content">
        Analyse stakeholder input, assess organisation impact, and rank key sustainability issues.
      </div>
    </div>
  </div>
</div>



<style>
/* 1) wrapper */
.phase-diagram-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  border: 1px solid #d4e3dc;
  border-radius: 20px;
  padding: 0.5rem;
  margin: 1rem 0;
}

/* 2’) Sidebar auto-width to fit exactly the two pills */
.phase-sidebar {
  flex: 0 0 auto;        /* drop the 15% basis */
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: flex-start; /* top-align the pills */
  /* remove min-width so it shrinks to content */
}

/* 3’) Pills remain slim + right-aligned text */
.rotated-label {
  writing-mode: sideways-lr;
  text-orientation: upright;
  background: #e6f2ed;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  color: #1f3f2e;
  white-space: nowrap;
  width: 2.5ch;         /* ultra-slim */
  text-align: end;      /* flush text in */
}

.rotated-label.small {
  font-size: 0.75rem;
  font-weight: 500;
  color: #2f7c4c;
  opacity: 0.8;
  width: 2.5ch;
  text-align: end;
}
  
/* 4) main flow grid */
.phase-flow {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  grid-template-rows: auto 1fr;
  column-gap: 0.5rem;
  row-gap: 0.5rem;
}

.phase-step {
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
}

.phase-header {
  grid-row: 1;
  background: #d0ebd8;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  color: #2f4f2f;
}

.phase-content {
  grid-row: 2;
  padding: 0.5rem 0.75rem;
  font-size: 0.9rem;
  line-height: 1.4;
  color: #333;
}

.arrow {
  grid-row: 1 / 3;
  justify-self: center;
  align-self: center;
  font-size: 1.25rem;
  color: #66a189;
  font-weight: bold;
}

/* Phase heading row for non-rotated version */
/* Phase heading row for non-rotated version */
.phase-heading {
  width: 100%;
  padding: 0.5rem 0.75rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.phase-title {
  font-weight: 600;
  font-size: 1.1rem;
  color: #1f3f2e;
  flex: 0 0 auto;
}

.phase-description {
  font-size: 0.95rem;
  color: #444;
  max-width: 500px;
  flex: 1;
  padding-top: 0.15rem;
}

@media (max-width: 768px) {
  .phase-heading {
    flex-direction: column;
  }
}

/* 5) mobile: pills horizontal, width auto, sidebar above */
@media (max-width: 768px) {
  .phase-diagram-wrapper {
    flex-direction: column;
  }

  .phase-sidebar {
    flex-direction: row;
    margin-bottom: 0.5rem;
    justify-content: flex-start;
  }

  .rotated-label {
    writing-mode: horizontal-tb;
    text-orientation: sideways; /* normal horizontal */
    transform: none;
    width: auto;               /* size to content */
  }

  .phase-flow {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .arrow {
    transform: rotate(90deg);
  }
}

.phase-diagram-column {
  display: flex;
  flex-direction: column;
}

.phase-step:hover {
  border: 2px solid #a5cdb2;
  border-radius: 10px;
  transition: border 0.2s ease;
}

.phase-heading:hover {
  border: 2px solid #a5cdb2;
  border-radius: 10px;
  transition: border 0.2s ease;
}

</style>