export type CalloutType = 'why' | 'how' | 'warn' | 'danger' | 'tip';

export interface Callout {
  type: CalloutType;
  title: string;
  body: string;
}
