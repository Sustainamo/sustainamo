---
title: "Introduction to Foundations"
layout: content
permalink: /foundations/introduction/
order: 1
nav: true
nav_title: "Foundations"
nav_order: 2
---

To be successful, a sustainability strategy must be grounded in a clear understanding of the context in which it will operate.  This means having a clear understanding of:
-	The purpose of the organisation/ event
-	What sustainability means to the organisation
-	Who is impacted by, and impacts, the sustainability of the organisation / event
-	What are the highest priority considerations

<section class="phase-blocks outlined green">
  <a href="/foundations/discovery/" class="phase-block">
    <h2>Discovery</h2>
    <p>Research internal operations, external trends, and regulatory requirements to set the context for your strategy.</p>
  </a>
  <a href="/foundations/stakeholderEngagement/" class="phase-block">
    <h2>Stakeholder engagement</h2>
    <p>Consult internal and external stakeholders to identify sustainability priorities, risks, and opportunities.</p>
  </a>
  <a href="/foundations/materialityAssessment/" class="phase-block">
    <h2>Materiality assessment</h2>
    <p>Analyse stakeholder input, assess organisation impact, and rank key sustainability issues.</p>
  </a>
</section>

In this section we will look at how to do this in three sections.  Initially a ‘discovery’ phase, where the sustainability team (the people responsible for delivering the strategy) will outline the internal and external environment the strategy will exist within.  This will be followed by a process of ‘stakeholder engagement’, where the considerations of the people who affect, and are affected by the organisation/ event will be collected.  Lastly, these findings will be evaluated to create a prioritised list of issues with materially impact the organisation / event from a sustainability perspective.  This entire process is often referred to as a ‘materiality assessment’.  


---testing----
<!-- Sustainamo Phase Diagram with Sidebar -->
<div class="phase-diagram-wrapper">
  <div class="phase-sidebar">
    <div class="phase-label">PHASE ONE</div>
    <div class="phase-step">Foundations</div>
  </div>
  <div class="phase-diagram">
    <div class="phase-block current">
      <h3>Discovery</h3>
      <p>Research internal operations, external trends, and regulatory requirements to set the context for your strategy.</p>
    </div>
    <div class="arrow">&#8594;</div>
    <div class="phase-block">
      <h3>Stakeholder Engagement</h3>
      <p>Consult internal and external stakeholders to identify sustainability priorities, risks, and opportunities.</p>
    </div>
    <div class="arrow">&#8594;</div>
    <div class="phase-block">
      <h3>Materiality Analysis</h3>
      <p>Analyse stakeholder input, assess organisation impact, and rank key sustainability issues.</p>
    </div>
  </div>
</div>

<style>
.phase-diagram-wrapper {
  display: flex;
  align-items: stretch;
  gap: 1rem;
  flex-wrap: nowrap;
  margin: 2rem 0;
  border: 1px solid #d4e3dc;
  border-radius: 20px;
  padding: 1rem;
}

.phase-sidebar {
  flex: 0 0 auto;
  background: #e6f2ed;
  border-radius: 20px 0 0 20px;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 90px;
  font-family: sans-serif;
}

.phase-label {
  font-weight: 600;
  font-size: 0.85rem;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  margin-bottom: 0.25rem;
  letter-spacing: 0.05em;
  color: #1f3f2e;
}

.phase-step {
  font-size: 0.85rem;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  color: #2f7c4c;
  font-weight: 500;
}

.phase-diagram {
  display: flex;
  align-items: stretch;
  gap: 1rem;
  flex: 1;
  flex-wrap: nowrap;
}

.phase-block {
  background: #f3f9f6;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid #b0e0cc;
  flex: 1;
  font-family: sans-serif;
  transition: border 0.3s ease, background 0.3s ease;
}

.phase-block.current {
  background: #d0ebd8;
  border: 2px solid #2f7c4c;
}

.phase-block h3 {
  margin-top: 0;
  font-size: 1.05rem;
  color: #2f4f2f;
}

.phase-block p {
  margin: 0.5rem 0 0;
  font-size: 0.95rem;
  color: #333;
}

.arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex: 0 0 auto;
  color: #66a189;
  font-weight: bold;
}

@media (max-width: 768px) {
  .phase-diagram-wrapper {
    flex-direction: column;
  }
  .phase-diagram {
    flex-direction: column;
  }
  .arrow {
    transform: rotate(90deg);
  }
  .phase-sidebar {
    flex-direction: row;
    padding: 0.5rem 1rem;
    border-radius: 12px 12px 0 0;
  }
  .phase-label,
  .phase-step {
    writing-mode: horizontal-tb;
    transform: none;
    margin: 0 0.5rem;
  }
}
</style>
