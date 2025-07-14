---
title: "Test page three"
layout: content
permalink: /testpage3/
order: 94
nav: false
nav_title: 
nav_order: 94
---


<div class="phase-section">
  <div class="phase-wrapper">
    <div class="phase-label">
      <div>
        <span>Phase One</span>
        <span>Foundations</span>
      </div>
    </div>
    <div class="phase-card">
      <div class="phase-step">
        <h3>Discovery</h3>
        <p>Research internal operations, external trends, and regulatory requirements to set the context for your strategy.</p>
      </div>
      <div class="phase-step">
        <h3>Stakeholder Engagement</h3>
        <p>Consult internal and external stakeholders to identify sustainability priorities, risks, and opportunities.</p>
      </div>
      <div class="phase-step">
        <h3>Materiality analysis</h3>
        <p>Analyse stakeholder input, assess organisation impact, and rank key sustainability issues.</p>
      </div>
    </div>
  </div>
</div>

<div class="phase-section">
  <div class="phase-wrapper">
    <div class="phase-label">
      <div>
        <span>Phase Two</span>
        <span>Strategy &amp; Planning</span>
      </div>
    </div>
    <div class="phase-card">
      <div class="phase-step">
        <h3>Vision and objectives</h3>
        <p>Define a clear sustainability vision and establish overarching goals that align with organisation priorities.</p>
      </div>
      <div class="phase-step">
        <h3>Targets, Policies and Actions</h3>
        <p>Set SMART targets (KPIs), develop policies, and outline actions to drive sustainability forward.</p>
      </div>
    </div>
  </div>
</div>

<div class="phase-section">
  <div class="phase-wrapper">
    <div class="phase-label">
      <div>
        <span>Phase Three</span>
        <span>Implementation</span>
      </div>
    </div>
    <div class="phase-card">
      <div class="phase-step">
        <h3>Implement, monitor, and assure</h3>
        <p>Integrate sustainability into daily operations, review performance regularly, and ensure accountability.</p>
      </div>
      <div class="phase-step">
        <h3>Continuous improvement</h3>
        <p>Periodically reassess, reengage stakeholders, and adjust strategy to stay relevant and ambitious.</p>
      </div>
    </div>
  </div>
</div>

<style>
.phase-section {
  margin-bottom: 2rem;
  border: 2px solid #204312;
  border-radius: 24px;
  padding: 0rem;
  background-color: rgb(217, 209, 209);
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 1rem;
  width: 100%;
  box-sizing: border-box;
}

.phase-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

.phase-label {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-weight: bold;
  font-family: sans-serif;
  padding: 0 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  height: auto;
  flex: 0 0 auto;
  min-height: 60px;
  font-size: 0.9rem;
}

.phase-label > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.2rem;
}

.phase-label > div span:nth-child(2) {
  font-size: 0.85rem;
  font-weight: normal;
}

.phase-card {
  flex: 1 1 100%;
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
  gap: 1rem;
  flex-wrap: wrap;
  height: 100%;
  background: white;
  border-radius: 24px;
  padding: 1rem;
}

.phase-step {
  flex: 1;
  background: white;
  padding: 0.75rem;
  border-radius: 16px;
  box-shadow: 0 0 0.4rem rgba(0,0,0,0.05);
  min-width: 240px;
  margin: 0.5rem;
  box-sizing: border-box;
}

.phase-step h3 {
  font-size: 1rem;
  margin-top: 0;
}

.phase-step p {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .phase-section {
    flex-direction: column !important;
  }
  .phase-label {
    writing-mode: horizontal-tb !important;
    transform: none !important;
    text-align: center;
    width: 100%;
    justify-content: center !important;
    align-items: center !important;
    flex-direction: column;
  }
  .phase-step {
    padding: 0.5rem;
  }
}

@media (min-width: 769px) {
  .phase-wrapper {
    flex-direction: row !important;
    align-items: stretch;
  }

  .phase-label {
    writing-mode: vertical-rl !important;
    transform: rotate(180deg) !important;
    width: auto !important;
    min-width: 60px;
    flex-direction: row;
  }
  .phase-step {
    max-width: 300px;
  }
}
</style>
