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
    <div class="phase-pair">
      <div class="phase-vertical">
        <div class="phase-label">PHASE ONE</div>
        <div class="phase-step">Foundations</div>
      </div>
    </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  margin-right: 1rem;
  flex: 0 0 auto;
}

.phase-pair {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.phase-vertical {
  transform: rotate(270deg);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}

.phase-label {
  background: #e6f2ed;
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  color: #1f3f2e;
  padding: 0.5rem 0.75rem;
  border-radius: 10px;
}

.phase-step {
  font-size: 0.85rem;
  color: #2f7c4c;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
}

.phase-diagram {
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
  .phase-diagram-wrapper {
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem 0.5rem;
  }
  .phase-diagram {
    flex-direction: column;
  }
  .arrow {
    transform: rotate(90deg);
  }
   .phase-vertical {
    transform: rotate(270deg);
    display: flex; /* Add this line */
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }
  .phase-label,
  .phase-step {
    padding: 0.5rem 1rem;
    text-align: center;
  }
  .phase-label {
    background: #e6f2ed;
    border-radius: 10px 10px 0 0;
  }
  .phase-step {
    border-radius: 0 0 10px 10px;
  }
}
</style>
