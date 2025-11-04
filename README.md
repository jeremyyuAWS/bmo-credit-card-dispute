
💡 *Goal:* Visually prove that agentic AI understands **contextual relationships**, not just text.

---

## 🧩 Tab 3: Human-in-the-Loop (HITL) Feedback Hub

### 🧩 Objective
Show how humans supervise and correct the agentic system in sensitive or denied-claim cases.

### Features
- **Case Review Feed:** List of edge cases escalated from AI.  
- **Annotation Tools:** Buttons for “Approve AI Decision,” “Request Second Review,” “Flag for Bias Check.”  
- **Script Advisor Pane:** Pre-suggested empathetic phrases for human specialists:
  - “I understand this must be frustrating. Let’s walk through what the network found.”
  - “This looks like merchant error — I’ll request an additional review.”
- **Feedback Submission:** Updates the Learning Agent dataset with human overrides.
- **Timeline Animation:** Human feedback loop sends signals back to “Agent Training Memory.”

💡 *Goal:* Demonstrate that HITL is **continuous supervision, not interruption**.

---

## 📊 Tab 4: Analytics Dashboard

### 🧩 Objective
Provide executives with tangible performance metrics of the agentic workflow.

### Metrics Displayed
| Metric | Description | Example |
|---------|--------------|----------|
| **Avg Resolution Time** | Total dispute duration | 24 minutes |
| **Manual Intervention Rate** | % cases requiring HITL | 4.3% |
| **Compliance Violations** | Flagged exceptions | 0 live violations |
| **Customer Sentiment** | Aggregated from transcripts | +82 |
| **Refund Accuracy** | AI vs. human audit match | 98.9% |
| **Fraud Prediction Improvement** | Accuracy lift from learning loop | +15% month-over-month |

### Visualization
- **Line Charts:** Time-series improvement of metrics.  
- **Donut Charts:** Agent workload distribution.  
- **Bar Charts:** Comparison of AS-IS vs. TO-BE process efficiency.

💡 *Goal:* Quantify BMO’s cost takeout potential and service improvement.

---

## 🧭 Tab 5: Responsible AI Governance

### 🧩 Objective
Illustrate how compliance and fairness are enforced natively within the agentic network.

### Features
- **Rule Validation Viewer:** Show in-line audit trail (e.g., “Rule 4863 applied at step 3”).  
- **Explainability Panel:**  
  - “Why did AI issue a refund?” → “Transaction matched Rule 4863, threshold $200, low-risk customer profile.”  
- **Bias Monitor:** Alerts if model decisions skew by geography, merchant category, or demographic pattern.  
- **Data Privacy Indicators:** Flags showing that PII was masked before LLM processing.  
- **Policy Graph Overlay:** Visual diagram mapping agents to relevant regulatory frameworks (OCC, FCRA, FINRA).

💡 *Goal:* Build trust — show transparency, fairness, and accountability at every layer.

---

## 🧱 (Optional) Tab 6: Architecture Overview

### 🧩 Objective
Show technical leadership that the demo sits on real engineering principles.

### Content
- Mermaid or D3 diagram of:
  - Manager Agent orchestrating sub-agents (Eligibility, Resolution, Compliance, Learning)
  - S3 or Aurora data layers
  - Compliance & Audit nodes connected to HITL and Learning feedback loop

💡 *Goal:* Reinforce that this demo can scale into production-grade architecture.

---

## 🧩 Tech Stack Summary

| Layer | Technology |
|--------|-------------|
| **Frontend Framework** | React + TypeScript |
| **Styling** | TailwindCSS + shadcn/ui |
| **Visualization** | D3.js + Recharts + framer-motion |
| **Data** | Local JSON for conversation + static datasets for analytics |
| **Build Mode** | Static (no backend calls) |
| **Typing Simulation** | 800–1200ms delay via JS interval |
| **Tab Navigation** | `shadcn/ui Tabs` |

---

## 🧩 Data Files

| File | Description |
|-------|--------------|
| `/data/conversations.json` | 5+ pre-scripted dispute scenarios |
| `/data/graphs.json` | D3.js graph nodes and relationships |
| `/data/analytics.json` | Aggregated metrics for Analytics tab |
| `/data/policies.json` | Rules and compliance mappings |

---

## 🧭 User Journey Summary

