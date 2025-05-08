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
        Research internal operations, …  
      </div>
    </div>

    <div class="arrow">→</div>

    <div class="phase-step">
      <div class="phase-header">Stakeholder engagement</div>
      <div class="phase-content">
        Consult internal and external stakeholders …
      </div>
    </div>

    <div class="arrow">→</div>

    <div class="phase-step">
      <div class="phase-header">Materiality analysis</div>
      <div class="phase-content">
        Analyse stakeholder input, assess …
      </div>
    </div>
  </div>
</div>


<style>

.phase-diagram-wrapper {
  display: flex;
  width: 100%;
  border: 1px solid #d4e3dc;
  border-radius: 20px;
  padding: .5rem;
  align-items: flex-start;
  gap: .5rem;
}

/* fixed 15% sidebar, 85% main flow */
.phase-sidebar {
  flex: 0 0 15%;
  display: flex;
  flex-direction: column;
  gap: .25rem;
  align-items: flex-end;
}

/* reuse your rotated-label styling */
.rotated-label {
  /* … */
}

/* the main three-step flow */
.phase-flow {
  flex: 1; 
  display: grid;
  grid-template-columns: 
    1fr /* step1 */ auto /* arrow */ 
    1fr /* step2 */ auto /* arrow */ 
    1fr /* step3 */;
  grid-template-rows: auto 1fr;
  align-items: start;
  column-gap: .5rem;
  row-gap: .5rem;
}

/* each step spans both rows */
.phase-step {
  display: flex;
  flex-direction: column;
  grid-row: 1 / 3;
}

/* header sits in row-1, content in row-2 */
.phase-header  { grid-row: 1; /* your background, padding, border-radius */ }
.phase-content { grid-row: 2; /* padding, font-size, line-height */ }

/* arrows centred between header+content */
.arrow {
  grid-row: 1 / 3;
  justify-self: center;
  align-self: center;
  font-weight: bold;
  color: #66a189;
}

  .phase-sidebar .rotated-label {
  /* rotate bottom-to-top */
  transform: rotate(270deg);
  transform-origin: top left;
  white-space: nowrap;
  margin: 0.25rem 0;        /* tweak spacing between the two labels */
  font-weight: 600;
  font-size: 0.85rem;
  colour: #1f3f2e;
}

/* if you want “Foundations” a bit smaller */
.phase-sidebar .rotated-label.small {
  font-size: 0.75rem;
  opacity: 0.8;
}

</style>
