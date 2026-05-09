# Lungo

Lungo is a form-first MVP for shared-housing prescreening.

The first use case is an owner-occupied shared home in Great Park, Irvine. The product helps homeowners turn room inquiries into structured, fair, explainable candidate summaries before scheduling showings.

## Product stance

Lungo is not a tenant approval engine and should not make automated rental decisions.

The MVP should:

- collect consistent pre-showing intake information
- summarize candidate fit against explicit room criteria
- surface missing information and follow-up questions
- keep the landlord/homeowner as the final decision-maker
- avoid scoring or filtering based on protected characteristics or proxies

## MVP direction

Start with a form-first workflow before a conversational AI agent.

Why form-first:

- most early screening questions are structured multiple choice
- forms are faster to build and easier to compare across candidates
- structured answers make fit summaries more explainable
- real user operation will reveal where natural conversation adds value later

## Initial product flow

1. Homeowner creates a room profile and screening criteria.
2. Prospect completes a short intake form.
3. Candidate response is saved as structured data.
4. AI generates an explainable fit summary and suggested follow-up questions.
5. Homeowner manually decides who to invite to a showing.

## First build target

- Next.js + TypeScript app
- Tailwind UI
- Supabase database and auth placeholder
- public candidate intake form
- landlord candidate dashboard
- AI summary endpoint placeholder
- manual candidate status workflow

See:

- `docs/intake-form-v0.md`
- `docs/mvp-build-plan.md`
- `docs/ai-fit-summary-rules.md`
