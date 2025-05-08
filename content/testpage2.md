---
title: "Test page two"
layout: content
permalink: /testpage2/
order: 91
nav: false
nav_title: 
nav_order: 91
---

<div class="phase-diagram-wrapper">
  <aside class="phase-sidebar">
    <div class="rotated-label">PHASE ONE</div>
    <div class="rotated-label small">Foundations</div>
  </aside>

  <div class="phase-flow">
    <div class="phase-step">
      <div class="phase-header">Discovery</div>
      <div class="phase-content">
        Research internal operations, external trends, and regulatory requirements to set the context for your strategy.
      </div>
    </div>

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
/* wrapper: 15% sidebar, 85% flow */
.phase-diagram-wrapper {
  display: flex;
  width: 100%;
  border: 1px solid #d4e3dc;
  border-radius: 20px;
  padding: 0.5rem;
  align-items: flex-start;
  gap: 0.5rem;
  margin: 1rem 0;
}

.phase-sidebar {
  flex: 0 0 15%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
}

/* both labels rotate from top-left */
.rotated-label {
  background: #e6f2ed;
  padding: 0.2rem 0.4rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  color: #1f3f2e;
  white-space: nowrap;
  transform-origin: top left;
  transform: rotate(270deg) translate(-100%, 0);
}

/* smaller, lighter “Foundations” */
.rotated-label.small {
  font-size: 0.75rem;
  font-weight: 500;
  color: #2f7c4c;
  opacity: 0.8;
}

/* main flow uses CSS grid for precise rows/cols */
.phase-flow {
  flex: 1;
  display: grid;
  grid-template-columns:
    1fr auto
    1fr auto
    1fr;
  grid-template-rows: auto 1fr;
  column-gap: 0.5rem;
  row-gap: 0.5rem;
}

/* each step occupies both rows */
.phase-step {
  display: flex;
  flex-direction: column;
  grid-row: 1 / 3;
}

/* header in row-1 */
.phase-header {
  grid-row: 1;
  background: #d0ebd8;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  color: #2f4f2f;
}

/* content in row-2 */
.phase-content {
  grid-row: 2;
  padding: 0.5rem 0.75rem;
  font-size: 0.9rem;
  line-height: 1.4;
  color: #333;
}

/* arrows sit centred between header & content */
.arrow {
  grid-row: 1 / 3;
  justify-self: center;
  align-self: center;
  font-size: 1.25rem;
  color: #66a189;
  font-weight: bold;
}

/* stack on mobile */
@media (max-width: 768px) {
  .phase-diagram-wrapper {
    flex-direction: column;
    align-items: flex-start;
  }
  .phase-sidebar {
    flex-direction: row;
    gap: 0.5rem;
  }
  .rotated-label {
    transform: none;
    white-space: normal;
    padding: 0.3rem 0.5rem;
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
</style>
