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
  margin: 1rem 0;
  align-items: flex-start;
  gap: 0.5rem;
}

.phase-sidebar {
  flex: 0 0 15%;
  position: relative;   /* containing block */
  min-width: 3rem;
}

/* both labels rotate around top-left, then shift back by half their width */
.rotated-label {
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: 0 0;
  transform: rotate(-90deg) translate(0, -50%);
  background: #e6f2ed;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  color: #1f3f2e;
  white-space: nowrap;
}

/* push the second label down slightly by adjusting its translateY offset */
.rotated-label.small {
  transform: rotate(-90deg) translate(0, -75%);
  font-size: 0.75rem;
  font-weight: 500;
  color: #2f7c4c;
  opacity: 0.8;
}

/* main flow: grid for 3 blocks + 2 arrows */
.phase-flow {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  grid-template-rows: auto 1fr;
  column-gap: 0.5rem;
  row-gap: 0.5rem;
}

.phase-step {
  display: flex;
  flex-direction: column;
  grid-row: 1 / 3;
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

/* mobile: stack and hide sidebar */
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
    gap: 0.5rem;
  }
  .arrow {
    transform: rotate(90deg);
  }
}
</style>
