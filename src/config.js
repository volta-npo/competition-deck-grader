export const config = {
  "number": 49,
  "slug": "competition-deck-grader",
  "title": "Competition Deck Grader",
  "category": "Student Agency Operations",
  "tagline": "An open rubric runner for Volta\u2019s Digital Transformation Challenge pitch decks.",
  "persona": "Judges, contestants, and chapter reviewers.",
  "gap": "Competitions need transparent scoring that rewards real-world grounding, specificity, clarity, creativity, and impact.",
  "niche": "High-school digital transformation competitions.",
  "metric": "decks scored consistently across reviewers",
  "modules": [
    "Rubric scorecards",
    "Evidence checklist",
    "Judge calibration notes",
    "Feedback summary builder"
  ],
  "theme": {
    "accent": "#f97316",
    "accent2": "#fdba74",
    "emoji": "\ud83c\udf93",
    "metricLabel": "Operating readiness",
    "workflow": [
      "Set roles and artifacts",
      "Run rubric review",
      "Resolve blockers",
      "Export operating packet"
    ],
    "privacy": "Separate internal student notes from client-facing exports. Never store passwords."
  },
  "statuses": [
    "not-started",
    "blocked",
    "in-progress",
    "ready",
    "approved"
  ],
  "criteria": [
    {
      "id": "rubric-scorecards",
      "label": "Rubric scorecards",
      "weight": 15,
      "defaultStatus": "not-started",
      "prompt": "Implement and verify rubric scorecards with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "evidence-checklist",
      "label": "Evidence checklist",
      "weight": 15,
      "defaultStatus": "not-started",
      "prompt": "Implement and verify evidence checklist with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "judge-calibration-notes",
      "label": "Judge calibration notes",
      "weight": 15,
      "defaultStatus": "not-started",
      "prompt": "Implement and verify judge calibration notes with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "feedback-summary-builder",
      "label": "Feedback summary builder",
      "weight": 15,
      "defaultStatus": "not-started",
      "prompt": "Implement and verify feedback summary builder with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "evidence-quality",
      "label": "Evidence quality",
      "weight": 10,
      "defaultStatus": "not-started",
      "prompt": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
    },
    {
      "id": "owner-handoff",
      "label": "Owner handoff",
      "weight": 10,
      "defaultStatus": "not-started",
      "prompt": "Make the output understandable and maintainable by a nontechnical owner."
    },
    {
      "id": "mission-alignment",
      "label": "Mission alignment",
      "weight": 10,
      "defaultStatus": "not-started",
      "prompt": "Show how this advances digital equity, student growth, or pro bono delivery."
    },
    {
      "id": "qa-safety",
      "label": "QA and safety",
      "weight": 10,
      "defaultStatus": "not-started",
      "prompt": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
    }
  ],
  "templates": {
    "actions": [
      "Run a real Volta scenario for Competition Deck Grader and capture baseline evidence.",
      "Complete the rubric scorecards workflow with owner-safe notes.",
      "Resolve all blocked rubric items and add evidence for every ready item.",
      "Export the handoff packet and review it with a mentor before client use."
    ]
  },
  "sample": {
    "clientName": "Volta Cyprus Chapter",
    "chapter": "Cyprus",
    "studentLead": "Volta Student Lead",
    "notes": "Internal chapter operations project for student-led delivery excellence. Competition Deck Grader sample.",
    "evidencePrefix": "Competition Deck Grader",
    "evidence": [
      "Discovery call notes captured with owner confirmation.",
      "Public digital footprint reviewed and summarized.",
      "Mentor QA comments attached before handoff."
    ]
  }
};
