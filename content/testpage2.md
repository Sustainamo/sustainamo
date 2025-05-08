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
/* Entire diagram wrapper */
.phase-diagram-wrapper {
  display: flex;
  align-items: flex-start;
  gap: .5rem;
  border: 1px solid #d4e3dc;
  border-radius: 20px;
  padding: .5rem;
  margin: 1rem 0;
}

/* Sidebar: 15% width, flex-column labels */
.phase-sidebar {
  display: flex;
  flex-direction: column;
  gap: .5rem;
  width: 15%;
  min-width: 3rem;
  align-items: flex-start;
}

/* Vertical (bottom-to-top) text via writing-mode */
.rotated-label {
  writing-mode: vertical-rl;
  text-orientation: upright;
  transform: rotate(180deg);
  background: #e6f2ed;
  padding: .25rem .5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: .85rem;
  letter-spacing: .05em;
  color: #1f3f2e;
  white-space: nowrap;
}

/* Smaller, tinted “Foundations” */
.rotated-label.small {
  font-size: .75rem;
  font-weight: 500;
  color: #2f7c4c;
  opacity: .8;
}

/* Main flow: 3 steps + 2 arrows in a grid */
.phase-flow {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  grid-template-rows: auto 1fr;
  column-gap: .5rem;
  row-gap: .5rem;
}

.phase-step {
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
}

.phase-header {
  grid-row: 1;
  background: #d0ebd8;
  padding: .5rem .75rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  color: #2f4f2f;
}

.phase-content {
  grid-row: 2;
  padding: .5rem .75rem;
  font-size: .9rem;
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

/* Mobile: stack everything */
@media (max-width: 768px) {
  .phase-diagram-wrapper {
    flex-direction: column;
  }
  .phase-sidebar {
    display: none;
  }
  .phase-flow {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }
  .arrow {
    transform: rotate(90deg);
  }
}
</style>
