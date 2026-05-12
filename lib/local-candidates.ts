import type { Candidate } from "./types";

const STORAGE_KEY = "lungo.localCandidates.v1";

export function getLocalCandidates(): Candidate[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as Candidate[];
  } catch {
    return [];
  }
}

export function saveLocalCandidate(candidate: Candidate): void {
  const existing = getLocalCandidates();
  localStorage.setItem(STORAGE_KEY, JSON.stringify([candidate, ...existing]));
}
