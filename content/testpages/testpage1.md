---
title: "Test page one"
layout: content
permalink: /testpage1/
order: 94
nav: false
nav_title: 
nav_order: 94
---


<div class="phase-section" style="background-color: var(--phase1-colour); border-color: var(--phase1-colour);">
  <div class="phase-wrapper">
   <div class="phase-label phase-label-title">PHASE ONE</div>
    <div class="phase-label phase-label-subtitle" style="background-color: var(--color-background);">Foundations</div>
    <div class="phase-card">
      <div class="phase-step">
      <div class="phase-step-title-bg" style="background-color: var(--phase1-colour);"><h3>Discovery</h3></div>
        <p>Research internal operations, external trends, and regulatory requirements to set the context for your strategy.</p>
      </div>
      <div class="phase-step">
        <div class="phase-step-title-bg" style="background-color: var(--phase1-colour);"><h3>Stakeholder Engagement</h3></div>
        <p>Consult internal and external stakeholders to identify sustainability priorities, risks, and opportunities.</p>
      </div>
      <div class="phase-step">
        <div class="phase-step-title-bg" style="background-color: var(--phase1-colour);"><h3>Materiality analysis</h3></div>
        <p>Analyse stakeholder input, assess organisation impact, and rank key sustainability issues.</p>
      </div>
    </div>
  </div>
</div>

<div class="phase-section" style="background-color: var(--phase2-colour); border-color: var(--phase2-colour);">
  <div class="phase-wrapper">
    <div class="phase-label phase-label-title">
      <div>
        <span>Phase Two</span>
        <span>Strategy &amp; Planning</span>
      </div>
    </div>
    <div class="phase-card">
      <div class="phase-step">
        <div class="phase-step-title-bg" style="background-color: var(--phase2-colour);"><h3>Vision and objectives</h3></div>
        <p>Define a clear sustainability vision and establish overarching goals that align with organisation priorities.</p>
      </div>
      <div class="phase-step">
        <div class="phase-step-title-bg" style="background-color: var(--phase2-colour);"><h3>Targets, Policies and Actions</h3></div>
        <p>Set SMART targets (KPIs), develop policies, and outline actions to drive sustainability forward.</p>
      </div>
    </div>
  </div>
</div>

<div class="phase-section" style="background-color: var(--phase3-colour); border-color: var(--phase3-colour);">
  <div class="phase-wrapper">
    <div class="phase-label phase-label-title">
      <div>
        <span>Phase Three</span>
        <span>Implementation</span>
      </div>
    </div>
    <div class="phase-card">
      <div class="phase-step">
        <div class="phase-step-title-bg" style="background-color: var(--phase3-colour);"><h3>Implement, monitor, and assure</h3></div>
        <p>Integrate sustainability into daily operations, review performance regularly, and ensure accountability.</p>
      </div>
      <div class="phase-step">
        <div class="phase-step-title-bg" style="background-color: var(--phase3-colour);"><h3>Continuous improvement</h3></div>
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
  gap: 0rem;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

.phase-label {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  padding: 0.75rem 0.75rem; /*[top/bottom] [left/right */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  height: auto;
  flex: 0 0 auto;
  min-height: 60px;
  font-family: sans-serif;
  color: var(--color-primary);
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

.phase-label-title {
  font-weight: bold;
  font-size: 0.8rem;

}

.phase-label-subtitle {
  background-color: #c8dbef;
  padding: 0.5rem 0.5rem;
  text-align: center;
  border-radius: 0px 24px 24px 0px; /* Top-left, top-right, b-right, b-left */
  box-sizing: border-box;
  font-size: 0.9rem;
}

.phase-card {
  flex: 1 1 100%;
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
  gap: 0.25rem;
  flex-wrap: wrap;
  height: 100%;
  background: var(--color-background);
  border-radius: 0px 24px 24px 0px;
  padding: 0.25rem; /* Top, Right, Bottom, Left */
}

.phase-step {
  flex: 1;
  background: var(--color-background);
  padding: 0.75rem;
  border-radius: 16px;
  box-shadow: 0 0 0.4rem rgba(0,0,0,0.05);
  min-width: 240px;
  margin: 0.5rem;
  box-sizing: border-box;
  max-width: 350px;
}

.phase-step-title-bg {
  background-color: #edf5ed;
  border-radius: 12px;
  padding: 0.3rem 0.75rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.phase-step h3 {
  font-size: 0.85rem;
  margin-top: 0.45rem;
  margin-bottom: 0.45rem;
  text-align: left;
}

.phase-step p {
  margin-bottom: 0;
  font-size: 0.75rem;
  text-align: center;
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
  .phase-label-subtitle {
    writing-mode: horizontal-tb !important;
    transform: none !important;
    text-align: center;
    width: 100%;
    justify-content: center !important;
    align-items: center !important;
    border-radius: 24px 24px 0px 0px; /* Top-left, top-right, b-right, b-left */
  }

  .phase-card{
    border-radius: 0px 0px 24px 24px; /* Top-left, top-right, b-right, b-left */
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
    /* min-width: 40px; */
    flex-direction: row;
  }

  .phase-step {
    /* max-width: 300px; */
  }
}
</style>
