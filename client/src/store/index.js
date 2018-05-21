import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  chapterTwo: [
  {
    "q": "Name the three classes of the IFAC code of ethics. (eg. (A - xxx, B - xxx) etc.)",
    "a": "A - General application, B - Chartered Accountants in Public Practice, C - Chartered Accountants in Business Practice"
  },
  {
    "q": "What are the 5 fundamental principles which RA's must apply?",
    "a": "1. Integrity, 2. Objectivity, 4. Professional competence and due care, 4. Cofidentiality"
  },
  {
    "q": "Explain Integrity.",
    "a": "Straight forward, honest, fair, truthful."
  },
  {
    "q": "Objectivity means free of:",
    "a": "Bias, conflict of interest, undue influence."
  },
  {
    "q": "Explain competence:",
    "a": "Professional knowledge and skill"
  },
  {
    "q": "Under which circumstances may a RA disclose information?",
    "a": "Specific authority, legal obligation, professional duty, permitted by law"
  },
  {
    "q": "Explain what threats are defined as (what they threaten).",
    "a": "Threaten compliance with the fundamental principles."
  },
  {
    "q": "List the types of threats eg. (1. threat name, 2. threat name)",
    "a": "1. Self-interest threats, 2. Self-review threats, 3. Advocacy threats, 4. Familiarity threats, 5. Intimidation threats"
  },
  {
    "q": "What are safeguards' purpose?",
    "a": "Reduce the threat to an accetpable level"
  },
  {
    "q": "Name the 2 categories of safeguards",
    "a": "1. Created by profession, legislation, regulation or law, 2. Created in the work environment"
  },
  {
    "q": "What is a safeguard for threats that arise from client acceptance.",
    "a": "screening of clients before acceptance and quality control."
  },
  {
    "q": "How should you handle a change in professional appointment.",
    "a": "1. Discuss the client affairs with existing accountant"
  },
  {
    "q": "what are the threats posed by conflict of interest?",
    "a": "Competing in the same industry or market"
  },
  {
    "q": "Name some safeguards to apply in case of conflict of interest.",
    "a": "Notification of conflict of interst, consent to offer services, use of separate engagement terms, confidentiality agreements."
  },
  {
    "q": "what section does the threat of low fees fall in to? Name and Number.",
    "a": "Section 240 - fees and other type of remuneration"
  },
  {
    "q": "How to safeguard against low fees?",
    "a": "Providing a basis on which fees are charged."
  },
  {
    "q": "What are the threats of marketing professional services?",
    "a": "dishonest, exaggerated, bad taste."
  },
  {
    "q": "List five examples of improper conduct:",
    "a": "Any: dishonesty, divulging confidential information, accepting rewards, solicting, canvasing, advertising for work."
  },
  {
    "q": "what are the reprecussions of an auditor being found guitly of imporoper conduct?",
    "a": "caution, reprimand, 100 000 fine,suspension from practice."
  }
]
}

export default new Vuex.Store({
  state
})
