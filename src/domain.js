export const domain = {
  "kind": "deck-grader",
  "title": "Competition Deck Grader",
  "purpose": "A purpose-built deck grader interface for an open rubric runner for volta\u2019s digital transformation challenge pitch decks.",
  "inputTitle": "Product-specific inputs",
  "previewTitle": "Generated working outputs",
  "tableTitle": "Deck scorecards",
  "metricLabels": [
    "Rubric Score",
    "Judge Variance",
    "Finalist Readiness"
  ],
  "fields": [
    {
      "id": "organization-client",
      "label": "Organization / client",
      "type": "text",
      "sample": "Volta Cyprus Chapter",
      "placeholder": "Enter organization / client"
    },
    {
      "id": "primary-goal",
      "label": "Primary goal",
      "type": "text",
      "sample": "decks scored consistently across reviewers",
      "placeholder": "Enter primary goal"
    },
    {
      "id": "owner-reviewer",
      "label": "Owner / reviewer",
      "type": "text",
      "sample": "Volta project lead",
      "placeholder": "Enter owner / reviewer"
    },
    {
      "id": "evidence-source",
      "label": "Evidence source",
      "type": "text",
      "sample": "Owner interview + public audit",
      "placeholder": "Enter evidence source"
    },
    {
      "id": "monthly-volume",
      "label": "Monthly volume",
      "type": "number",
      "sample": 120,
      "placeholder": "Enter monthly volume"
    },
    {
      "id": "minutes-per-item",
      "label": "Minutes per item",
      "type": "number",
      "sample": 15,
      "placeholder": "Enter minutes per item"
    },
    {
      "id": "dollar-value-cost",
      "label": "Dollar value / cost",
      "type": "number",
      "sample": 45,
      "placeholder": "Enter dollar value / cost"
    },
    {
      "id": "confidence-percent",
      "label": "Confidence percent",
      "type": "number",
      "sample": 80,
      "placeholder": "Enter confidence percent"
    }
  ],
  "rows": [
    "Teams entered",
    "Judges assigned",
    "Conflict check complete",
    "Problem grounding scored",
    "Specificity scored",
    "Feasibility scored",
    "Impact scored",
    "Leaderboard exported"
  ],
  "artifacts": [
    "Scorecards",
    "Calibration report",
    "Feedback summaries"
  ],
  "checks": [
    "All rubric fields scored",
    "Judge conflicts flagged",
    "High variance triggers calibration"
  ],
  "sampleClient": "Volta Cyprus Chapter"
};
