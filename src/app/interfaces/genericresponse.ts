export interface GenericResponse<T> {
  success: boolean;
  message?: string | null;
  data?: T | null;
}
