export interface JsDocParam {
  name: string;
  description?: string;
}

export interface JsDocReturns {
  description?: string;
}

export interface JsDocTags {
  params?: JsDocParam[];
  returns?: JsDocReturns;
}

export interface PropSummaryValue {
  summary: string;
  detail?: string;
  required?: boolean;
}

export type PropType = PropSummaryValue;
export type PropDefaultValue = PropSummaryValue;

export interface TableAnnotation {
  type: PropType;
  jsDocTags?: JsDocTags;
  defaultValue?: PropDefaultValue;
  category?: string;
}

export interface ArgType {
  name?: string;
  description?: string;
  defaultValue?: any;
  addIf?: string;
  removeIf?: string;
  [key: string]: any;
}

export interface ArgTypes {
  [key: string]: ArgType;
}

export interface Args {
  [key: string]: any;
}
