import { Pattern } from './pattern.model';

export interface DevelopmentObject {
  type: string;
  name: string;
  description: string;
}

export interface Development {
  id: string;
  title: string;
  module: string;
  date: string;
  description: string;
  tags: string[];
  objects: DevelopmentObject[];
  patterns: Pattern[];
}
