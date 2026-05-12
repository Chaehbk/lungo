# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start development server (Next.js)
npm run build      # Production build
npm run lint       # ESLint via next lint
npm run typecheck  # TypeScript check without emitting
```

There is no test suite yet. Type-check and lint are the primary code validators.

## Architecture

Lungo is a Next.js 14 (App Router) + TypeScript + Tailwind CSS application for shared-housing prescreening. It is currently in Phase 1 (static product skeleton with mock data) per `docs/mvp-build-plan.md`.

### Page structure

| Route | File | Purpose |
|---|---|---|
| `/` | `app/page.tsx` | Landing page |
| `/intake` | `app/intake/page.tsx` | Public candidate intake form |
| `/dashboard` | `app/dashboard/page.tsx` | Landlord candidate dashboard |

### Key directories

- `lib/types.ts` — All shared TypeScript types: `RoomProfile`, `ScreeningCriteria`, `Candidate`, `CandidateStatus`, and the `IntakeQuestion*` discriminated union used to describe form questions declaratively.
- `lib/intake-form.ts` — The static array of `IntakeQuestionSection` objects that defines every field in the candidate intake form.
- `lib/mock-data.ts` — Seed data used until Supabase is wired up (Phase 7).
- `components/intake-form.tsx` — Renders the intake form from `intakeQuestionSections`.
- `components/ui.tsx` — Shared primitives: `PageShell`, `Card`, `Badge`, `Field`, `PrimaryLink`, `inputClass`.

### Design tokens (Tailwind)

Custom colors defined in `tailwind.config.ts`:
- `ink` (#17211d) — primary text/dark
- `moss` (#566b5f) — secondary text/muted
- `linen` (#f8f4ee) — background
- `clay` (#c87955) — accent/highlight

### Form question schema

Intake questions are typed as a discriminated union on `type`:
- `text | email | tel | date` → `IntakeTextQuestion`
- `textarea` → `IntakeTextareaQuestion`
- `select` → `IntakeSelectQuestion` (includes `options: string[]`)
- `checkbox` → `IntakeCheckboxQuestion`

Sections can be one or two columns via `columns?: 1 | 2`.

## Product rules

**Abstraction rule:** Lungo is a reusable screening product — do not hard-code Irvine/Great Park, June move-in, specific housemate details, Zillow, or single-occupancy as universal assumptions. The first room is seed/demo data only.

**AI summary rules (Phase 6+):** The AI must only use fit categories: `Strong potential fit`, `Possible fit — follow-up needed`, `Low priority`, `Not enough information`. It must not evaluate based on protected characteristics (race, nationality, religion, sex, gender, disability, familial status, age, source of income, etc.). See `docs/ai-fit-summary-rules.md` for full rules and required JSON output shape.

**Candidate status values** (from `lib/types.ts`): `New`, `Strong potential fit`, `Possible fit — follow-up needed`, `Low priority`, `Invited to showing`, `Not moving forward`.

## Roadmap phases

The build plan in `docs/mvp-build-plan.md` defines 9 phases. Currently in Phase 1. Supabase (Phase 7) has not been integrated yet — all data is mock. Do not add Supabase until Phase 7; use mock data in `lib/mock-data.ts` until then.

## Development guardrails

**Do not modify without explicit instruction:**
package.json, package-lock.json, tailwind.config.ts, tsconfig.json, next.config.mjs, .eslintrc.json, docs/*, lib/intake-form.ts, lib/mock-data.ts

**Do not add:** new dependencies, Supabase, auth, or AI features until the corresponding phase is reached.

**Before committing:** always run `npm run typecheck`, `npm run lint`, and `npm run build` first. Show `git diff --stat` and wait for review before committing.

**Fairness:** Do not evaluate or score candidates based on race, ethnicity, national origin, religion, sex, gender identity, sexual orientation, disability, familial status, age, marital status, or source of income.

**Language:** Use "fit summary", "potential alignment", "follow-up needed", "missing information". Avoid "approved", "rejected", "pass", "fail", "risky", "score", "good tenant", "bad tenant".