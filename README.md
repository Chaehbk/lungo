# Lungo

Lungo is a form-first MVP for shared-housing prescreening.

The first reference use case is an owner-occupied shared home in Great Park, Irvine. The product helps homeowners turn room inquiries into structured, fair, explainable candidate summaries before scheduling showings.

## Product stance

Lungo is not a tenant approval engine and should not make automated rental decisions.

The MVP should:

- collect consistent pre-showing intake information
- summarize candidate fit against explicit room criteria
- surface missing information and follow-up questions
- keep the landlord/homeowner as the final decision-maker
- avoid scoring or filtering based on protected characteristics or proxies

## Product abstraction rule

The current Irvine shared-housing form is the first reference use case, not the product itself.

Lungo should be built as a reusable screening workflow for owner-occupied or small-scale shared housing. Room details, household preferences, screening criteria, application provider, availability, rent, and house rules must be configurable.

Do not hard-code:

- Great Park or Irvine
- June move-in
- current housemate gender or identity
- 1st-floor / 3rd-floor layout
- Zillow as the only possible application provider
- any single landlord’s personal screening preferences

The app should support this first use case while remaining reusable for other rooms and homeowners.

## MVP direction

Start with a form-first workflow before a conversational AI agent.

Why form-first:

- most early screening questions are structured multiple choice
- forms are faster to build and easier to compare across candidates
- structured answers make fit summaries more explainable
- real user operation will reveal where natural conversation adds value later

## Initial product flow

1. Homeowner creates a room profile and screening criteria.
2. Prospect completes a short intake form generated from that room profile.
3. Candidate response is saved as structured data.
4. AI generates an explainable fit summary and suggested follow-up questions.
5. Homeowner manually decides who to invite to a showing.

## Configurable room profile fields

The app should support configurable room fields such as:

- Room title
- Location label
- Available move-in date
- Rent
- Utilities
- Cleaning fee
- Private room? yes/no
- Private bathroom? yes/no
- Furnished? yes/no
- Pets allowed? yes/no
- Smoking allowed? yes/no
- Owner-occupied home? yes/no
- Home environment description

Suggested internal field names:

- `title`
- `location_label`
- `available_move_in_date`
- `rent`
- `utilities_fee`
- `cleaning_fee`
- `has_private_room`
- `has_private_bathroom`
- `is_furnished`
- `pets_allowed`
- `smoking_allowed`
- `is_owner_occupied`
- `home_environment_description`

## Configurable screening criteria

The app should support configurable screening criteria such as:

- Required occupancy
- Preferred move-in timeline
- Preferred lease length
- Financial qualification range
- Self-reported credit range
- Smoking policy
- Pet policy
- Application provider
- Application readiness
- Lifestyle fit priorities
- Shared-space expectations
- Quiet-home expectations

## First build target

- Next.js + TypeScript app
- Tailwind UI
- Supabase database and auth placeholder
- Public candidate intake form
- Landlord candidate dashboard
- AI summary endpoint placeholder
- Manual candidate status workflow

See:

- `docs/intake-form-v0.md`
- `docs/mvp-build-plan.md`
- `docs/ai-fit-summary-rules.md`
