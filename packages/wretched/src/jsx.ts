import { camelToSnakeCase } from "./camel-to-snake";
import type * as JSX from "./types";

const KEY = "_w-jsx";

export const isJSX = (value: Array<unknown>): value is JSX.Element => {
  return value[0] === KEY;
};

export const jsx = (type?: JSX.Type, props?: JSX.Props<unknown>): JSX.Element => {
  return [KEY, type || "", props || {}];
};

export const Fragment = (props?: JSX.InherentProps): JSX.Children => {
  return props?.children;
};

export const h = (type: JSX.Type, props: JSX.Props<unknown>, ...children: Array<JSX.Children>) => {
  if (children.length > 0) props.children = children as JSX.Children;
  return jsx(type, props);
};
