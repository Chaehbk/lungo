export type OtherFee = {
  label: string;
  amount: number;
  frequency: "one-time" | "monthly";
  description?: string;
};

export type RoomProfile = {
  id: string;
  title: string;
  locationLabel: string;
  availableMoveInDate: string;
  rent: number;
  utilitiesFee: number;
  parking: string;
  otherFees: OtherFee[];
  hasPrivateRoom: boolean;
  hasPrivateBathroom: boolean;
  isFurnished: boolean;
  petsAllowed: boolean;
  smokingAllowed: boolean;
  isOwnerOccupied: boolean;
  homeEnvironmentDescription: string;
};

export type ScreeningCriteria = {
  id: string;
  roomId: string;
  requiredOccupancy: string;
  preferredMoveInTimeline: string;
  preferredLeaseLength: string;
  financialQualificationRange: string;
  selfReportedCreditRange: string;
  smokingPolicy: string;
  petPolicy: string;
  applicationProvider: string;
  applicationRequired: boolean;
  lifestyleFitPriorities: string[];
  sharedSpaceExpectations: string;
  quietHomeExpectations: string;
};

export type CandidateStatus =
  | "New"
  | "Strong potential fit"
  | "Possible fit — follow-up needed"
  | "Low priority"
  | "Invited to showing"
  | "Not moving forward";

export type Candidate = {
  id: string;
  roomId: string;
  fullName: string;
  email: string;
  phone: string;
  preferredMoveInDate: string;
  desiredLeaseLength: string;
  occupancyConfirmation: string;
  occupationOrFieldOfStudy: string;
  workStudyArrangement: string;
  typicalHomeRoutine: string;
  cleanlinessHabits: string;
  incomeOrFinancialSupportRange: string;
  selfReportedCreditRange: string;
  smokeOrVape: string;
  petsOrAnimals: string;
  selfIntro: string;
  openToApplication: string;
  nearbyRoomOptionsOptIn: boolean;
  status: CandidateStatus;
  createdAt: string;
};

export type IntakeQuestionBase = {
  name: string;
  label: string;
  required?: boolean;
  hint?: string;
  placeholder?: string;
};

export type IntakeTextQuestion = IntakeQuestionBase & {
  type: "text" | "email" | "tel" | "date";
};

export type IntakeTextareaQuestion = IntakeQuestionBase & {
  type: "textarea";
  rows?: number;
};

export type IntakeSelectQuestion = IntakeQuestionBase & {
  type: "select";
  options: string[];
};

export type IntakeCheckboxQuestion = IntakeQuestionBase & {
  type: "checkbox";
};

export type IntakeQuestion =
  | IntakeTextQuestion
  | IntakeTextareaQuestion
  | IntakeSelectQuestion
  | IntakeCheckboxQuestion;

export type IntakeQuestionSection = {
  id: string;
  title: string;
  description?: string;
  columns?: 1 | 2;
  questions: IntakeQuestion[];
};
