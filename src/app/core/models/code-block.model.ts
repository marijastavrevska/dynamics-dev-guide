export interface CodeBlock {
  label: string;
  code: string;
}

export interface FlowStep {
  title: string;
  body: string;
}

export interface TableData {
  headers: string[];
  rows: string[][];
}
