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
    <div class="phase-label">Foundations</div>
    <div class="phase-step">Phase One</div>
  </div>
  <div class="phase-diagram">
    <div class="phase-box current">
      <h3>Discovery</h3>
      <p>Research internal operations, external trends, and regulatory requirements to set the context for your strategy.</p>
    </div>
    <div class="arrow">&#8594;</div>
    <div class="phase-box">
      <h3>Stakeholder Engagement</h3>
      <p>Consult internal and external stakeholders to identify sustainability priorities, risks, and opportunities.</p>
    </div>
    <div class="arrow">&#8594;</div>
    <div class="phase-box">
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
}

.phase-sidebar {
  flex: 0 0 auto;
  background: #e0ece4;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100px;
}

.phase-label {
  font-weight: bold;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  font-size: 0.9rem;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
}

.phase-step {
  font-size: 1rem;
}

.phase-diagram {
  display: flex;
  align-items: stretch;
  gap: 1rem;
  flex: 1;
  flex-wrap: nowrap;
}

.phase-box {
  background: #e7f4eb;
  padding: 1rem;
  border-radius: 8px;
  flex: 1;
  border: 2px solid transparent;
  transition: border 0.3s ease;
  min-width: 200px;
}

.phase-box.current {
  border: 2px solid #2f7c4c;
  background: #d0ebd8;
}

.phase-box h3 {
  margin-top: 0;
  font-size: 1.1rem;
}

.arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  flex: 0 0 auto;
  color: #999;
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
    writing-mode: horizontal-tb;
    transform: none;
  }
  .phase-label {
    writing-mode: horizontal-tb;
    transform: none;
    margin-bottom: 0;
    margin-right: 0.5rem;
  }
}
</style>

