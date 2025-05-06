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

<div class="phase-diagram-container">
  <div class="phase-sidebar-vertical">
    <div class="phase-label rotated-text">PHASE ONE</div>
    <div class="phase-step rotated-text">Foundations</div>
  </div>
  <div class="phase-diagram-horizontal">
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

<style>
.phase-diagram-container {
  display: flex;
  align-items: stretch;
  margin: 2rem 0;
  border: 1px solid #d4e3dc;
  border-radius: 20px;
  padding: 1rem;
  gap: 1rem;
}

.phase-sidebar-vertical {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  margin-right: 1rem;
  flex: 0 0 auto;
}

.rotated-text {
  transform: rotate(270deg);
  white-space: nowrap; /* Prevent wrapping after rotation */
}

.phase-label {
  background: #e6f2ed;
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  color: #1f3f2e;
  padding: 0.5rem 0.75rem;
  border-radius: 10px;
  margin-bottom: 1rem; /* Adjust spacing for rotated text */
}

.phase-step {
  font-size: 0.85rem;
  color: #2f7c4c;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: 10px;
}

.phase-diagram-horizontal {
  display: flex;
  align-items: stretch;
  gap: 1rem;
  flex: 1;
  flex-wrap: nowrap;
}

.phase-block {
  background: none;
  padding: 1rem;
  border-radius: 12px;
  border: none;
  flex: 1;
  font-family: sans-serif;
  transition: background 0.3s ease;
}

.phase-block.current .phase-header {
  background: #d0ebd8;
}

.phase-header {
  background: #d0ebd8;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  color: #2f4f2f;
  font-size: 1.05rem;
  margin-bottom: 0.5rem;
}

.phase-block p {
  margin: 0;
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
  .phase-diagram-container {
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem 0.5rem;
  }
  .phase-sidebar-vertical {
    flex-direction: row;
    justify-content: center;
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
  .rotated-text {
    transform: none; /* Remove rotation on smaller screens */
    white-space: normal;
  }
  .phase-label {
    margin-bottom: 0;
    margin-right: 0.5rem;
  }
  .phase-diagram-horizontal {
    flex-direction: column;
  }
  .arrow {
    transform: rotate(90deg);
  }
}
</style>
