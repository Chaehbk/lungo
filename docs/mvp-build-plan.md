# MVP Build Plan

## Product Direction

Build a reusable screening product inspired by the current Google Form, not a hard-coded version of one Irvine listing.

The first implementation may use the Irvine room as seed/demo data, but all room details and screening criteria should be configurable.

Build a form-first MVP before building a conversational AI agent.

Reason:

* Most screening questions are multiple choice.
* Structured form data is easier to compare across candidates.
* The landlord needs fast candidate triage before showings.
* Real usage will reveal where natural conversation is actually useful.

## Build Principle

The current Google Form is the first operating example, not the full product.

The product should separate:

1. Room profile
2. Screening criteria
3. Candidate intake response
4. Candidate summary
5. Manual landlord decision

Do not hard-code:

* Irvine / Great Park
* June move-in
* current housemate identities
* 1st-floor / 3rd-floor layout
* Zillow as the only application provider
* single occupancy as the universal rule
* any one homeowner’s personal preferences

Use the first room as seed/demo data only.

## Phase 1 — Static Product Skeleton

Build:

* Landing page
* Public intake form
* Thank-you confirmation page
* Landlord dashboard shell
* Candidate detail page shell

No AI yet.

Use local mock data first.

The goal of Phase 1 is to validate the product structure and user experience before adding database persistence or AI summaries.

## Phase 2 — Room Profile and Criteria Model

Create configurable room profile fields:

* `id`
* `title`
* `location_label`
* `available_move_in_date`
* `rent`
* `utilities_fee`
* `parking`
* `other_fees`
* `has_private_room`
* `has_private_bathroom`
* `is_furnished`
* `pets_allowed`
* `smoking_allowed`
* `is_owner_occupied`
* `home_environment_description`
* `created_at`
* `updated_at`

`other_fees` should support multiple custom fee items.

Suggested structure:

```json
[
  {
    "label": "Cleaning fee",
    "amount": 50,
    "frequency": "monthly",
    "description": "Common area cleaning"
  },
  {
    "label": "Furniture fee",
    "amount": 100,
    "frequency": "monthly",
    "description": "Optional furnished setup"
  }
]
```

Create configurable screening criteria fields:

* `id`
* `room_id`
* `required_occupancy`
* `preferred_move_in_timeline`
* `preferred_lease_length`
* `financial_qualification_range`
* `self_reported_credit_range`
* `smoking_policy`
* `pet_policy`
* `application_provider`
* `application_required`
* `lifestyle_fit_priorities`
* `shared_space_expectations`
* `quiet_home_expectations`
* `created_at`
* `updated_at`

## Phase 3 — Candidate Intake Form

Build a public form based on `docs/intake-form-v0.md`.

The intake form should be generated from:

1. The room profile
2. The screening criteria
3. A reusable candidate question set

On submit:

* Save candidate response
* Show confirmation message
* Set candidate status to `New`

Candidate fields:

* `id`
* `room_id`
* `full_name`
* `email`
* `phone`
* `preferred_move_in_date`
* `desired_lease_length`
* `occupancy_confirmation`
* `occupation_or_field_of_study`
* `work_study_arrangement`
* `typical_home_routine`
* `cleanliness_habits`
* `income_or_financial_support_range`
* `self_reported_credit_range`
* `smoke_or_vape`
* `pets_or_animals`
* `self_intro`
* `open_to_application`
* `nearby_room_options_opt_in`
* `status`
* `created_at`
* `updated_at`

## Phase 4 — Landlord Dashboard

Build a landlord-facing dashboard for reviewing candidate responses.

Show candidate cards with:

* Full name
* Preferred move-in date
* Desired lease length
* Occupation or field of study
* Work/study arrangement
* Typical home routine
* Income or financial support range
* Self-reported credit range
* Smoking/vaping
* Pets/animals
* Status
* AI fit category, if available

Manual statuses:

* New
* Strong potential fit
* Possible fit — follow-up needed
* Low priority
* Invited to showing
* Not moving forward

The landlord should be able to update candidate status manually.

## Phase 5 — Candidate Detail Page

Build a candidate detail page.

Show:

* Candidate profile
* Full intake response
* AI summary, if generated
* Strengths
* Concerns
* Missing information
* Suggested follow-up questions
* Landlord notes
* Manual status selector

Include this UI note:

> AI summaries are for organization only. Final decisions are made manually by the landlord based on consistent screening criteria.

## Phase 6 — AI Summary

Add AI-generated candidate summaries after the form and dashboard UX are working.

The AI should generate:

* Fit category
* Short summary
* Strengths
* Concerns
* Missing information
* Suggested follow-up questions
* Criteria match

The AI must not approve or reject applicants.

Allowed fit categories:

* Strong potential fit
* Possible fit — follow-up needed
* Low priority
* Not enough information

AI summary fields:

* `id`
* `candidate_id`
* `fit_category`
* `summary`
* `strengths`
* `concerns`
* `missing_information`
* `suggested_followups`
* `criteria_match`
* `created_at`
* `updated_at`

The AI should only evaluate alignment with landlord-defined, configurable criteria.

The AI should not evaluate based on protected characteristics, personal identity, or assumptions from names, background, school, profession prestige, culture, or nationality.

## Phase 7 — Supabase

After the form and dashboard UX are validated with mock data, add Supabase.

Use tables:

* `rooms`
* `screening_criteria`
* `candidates`
* `candidate_ai_summaries`
* `landlord_notes`
* `candidate_status_history`

### Suggested table: `rooms`

Fields:

* `id`
* `landlord_id`
* `title`
* `location_label`
* `available_move_in_date`
* `rent`
* `utilities_fee`
* `parking`
* `other_fees`
* `has_private_room`
* `has_private_bathroom`
* `is_furnished`
* `pets_allowed`
* `smoking_allowed`
* `is_owner_occupied`
* `home_environment_description`
* `created_at`
* `updated_at`

### Suggested table: `screening_criteria`

Fields:

* `id`
* `room_id`
* `required_occupancy`
* `preferred_move_in_timeline`
* `preferred_lease_length`
* `financial_qualification_range`
* `self_reported_credit_range`
* `smoking_policy`
* `pet_policy`
* `application_provider`
* `application_required`
* `lifestyle_fit_priorities`
* `shared_space_expectations`
* `quiet_home_expectations`
* `created_at`
* `updated_at`

### Suggested table: `candidates`

Fields:

* `id`
* `room_id`
* `full_name`
* `email`
* `phone`
* `preferred_move_in_date`
* `desired_lease_length`
* `occupancy_confirmation`
* `occupation_or_field_of_study`
* `work_study_arrangement`
* `typical_home_routine`
* `cleanliness_habits`
* `income_or_financial_support_range`
* `self_reported_credit_range`
* `smoke_or_vape`
* `pets_or_animals`
* `self_intro`
* `open_to_application`
* `nearby_room_options_opt_in`
* `status`
* `created_at`
* `updated_at`

### Suggested table: `candidate_ai_summaries`

Fields:

* `id`
* `candidate_id`
* `fit_category`
* `summary`
* `strengths`
* `concerns`
* `missing_information`
* `suggested_followups`
* `criteria_match`
* `created_at`
* `updated_at`

### Suggested table: `landlord_notes`

Fields:

* `id`
* `candidate_id`
* `landlord_id`
* `note`
* `created_at`
* `updated_at`

### Suggested table: `candidate_status_history`

Fields:

* `id`
* `candidate_id`
* `previous_status`
* `new_status`
* `changed_by`
* `created_at`

## Phase 8 — Conversation Layer Later

After the form-first MVP is used with real prospects, identify which parts would benefit from natural conversation.

Possible future chat use cases:

* clarify incomplete answers
* ask personalized follow-up questions
* explain room rules
* help candidates understand whether timing fits
* reduce back-and-forth before showing
* convert messy inbound messages into structured candidate profiles

Do not build chat intake until the form-based workflow has been tested with real candidates.

## Phase 9 — Multi-Landlord Expansion Later

After validating the workflow with one landlord/homeowner, expand to support multiple landlords.

Future capabilities:

* Multiple rooms per landlord
* Multiple landlords
* Reusable intake templates
* Configurable screening criteria
* Candidate sharing only with explicit consent
* Room option referral workflow
* Export candidate summaries
* Showing scheduling integration

Do not build marketplace functionality in the first MVP.

## MVP Success Criteria

The first MVP is successful if a landlord can:

* Create or edit a room profile
* Share an intake form with prospects
* Receive structured candidate responses
* Review candidates quickly in a dashboard
* Identify strong potential fits without rereading every message
* See missing information and suggested follow-up questions
* Manually decide who to invite to showing
* Avoid relying on ad hoc text messages for early screening

Target operational benchmark:

* Process 20 inquiries in under 30 minutes
* Identify top 5 candidates confidently
* Reduce unnecessary showings
* Keep the screening process consistent and explainable
