import { CodeBlock, FlowStep, TableData } from './code-block.model';
import { Callout } from './callout.model';

export interface SubSection {
  title: string;
  body?: string;
  codeBlocks?: CodeBlock[];
  callouts?: Callout[];
  flowSteps?: FlowStep[];
  tableData?: TableData;
}

export interface Pattern {
  title: string;
  body?: string;
  subSections?: SubSection[];
}
