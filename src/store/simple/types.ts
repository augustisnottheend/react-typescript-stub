export interface ISimpleState {
  exampleFirst: number | null;
  exampleSecond: string | null;
}

export interface ISimpleData {
  exampleFirst: number | string | null;
  exampleSecond: string | null;
}

export type SimpleAction = { type: 'setSimpleData'; payload: ISimpleData };
