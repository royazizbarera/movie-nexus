export default interface Field {
  name: string;
  label: string;
  type:
    | "text"
    | "number"
    | "date"
    | "select"
    | "multiselect"
    | "boolean"
    | "actions";
  options?: { value: any; label: string }[]; // For select fields
  isRequired?: boolean;
}
