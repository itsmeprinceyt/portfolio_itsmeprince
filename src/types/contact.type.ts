export type Status = "idle" | "loading" | "success" | "error";

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}
