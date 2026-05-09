# MVP Build Plan

## Product Direction

Build a form-first MVP before building a conversational AI agent.

Reason:
- Most screening questions are multiple choice.
- Structured form data is easier to compare.
- The landlord needs fast candidate triage before showings.
- Real usage will reveal where natural conversation is actually useful.

## Phase 1 — Static Product Skeleton

Build:
- Landing page
- Public intake form
- Thank-you confirmation page
- Landlord dashboard shell
- Candidate detail page shell

No AI yet.

## Phase 2 — Data Model

Create schema for:
- rooms
- candidates
- candidate_ai_summaries
- landlord_notes
- candidate_status_history

## Phase 3 — Intake Form

Build a public form based on `docs/intake-form-v0.md`.

On submit:
- Save candidate response
- Show confirmation message
- Set candidate status to `New`

## Phase 4 — Landlord Dashboard

Show candidate cards with:
- name
- move-in date
- lease length
- occupation/field
- work/study arrangement
- home routine
- income range
- credit range
- smoking/pets
- status

Manual statuses:
- New
- Strong potential fit
- Possible fit — follow-up needed
- Low priority
- Invited to showing
- Not moving forward

## Phase 5 — AI Summary

Add AI-generated candidate summaries.

The AI should generate:
- fit category
- short summary
- strengths
- concerns
- missing information
- suggested follow-up questions

The AI must not approve or reject applicants.

## Phase 6 — Conversation Layer Later

After the form-first MVP is used with real prospects, identify which parts would benefit from natural conversation.
