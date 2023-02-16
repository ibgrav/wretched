// import { transform } from "lightningcss";
// import { HTMLTags } from "./constants";
import { camelToSnakeCase } from "./camel-to-snake";
import { HTMLTags } from "./constants";
import { isJSX } from "./jsx";
import type * as JSX from "./types";

interface Stylesheet {
  [key: string]: any | Stylesheet;
}

export const renderToStylesheet = (element: JSX.Element) => {
  const stylesheet: Stylesheet = {};

  populateStylesheet(element, stylesheet);

  return { stylesheet };
};

const colonPrefix = new Set(["hover", "root"]);

const populateStylesheet = (item: unknown, stylesheet: Stylesheet, isChild?: boolean) => {
  if (Array.isArray(item)) {
    if (isJSX(item)) {
      console.log(item, stylesheet);

      let [_, type, props] = item;

      if (typeof type === "function") {
        populateStylesheet(type(props), stylesheet);
      } else {
        type = camelToSnakeCase(type);

        const childPrefix = isChild && !props.has ? " " : "";

        let prefix = childPrefix + ".";

        if (props.id) prefix = childPrefix + "#";
        if (HTMLTags.has(type)) prefix = "";
        if (colonPrefix.has(type)) prefix = ":";

        let key = `${isChild ? "&" : ""}${prefix}${type}`;

        stylesheet[key] = stylesheet[type] || {};
        stylesheet[key] = propsToStyles(props);

        if (props.children) {
          populateStylesheet(props.children, stylesheet[key], true);
        }
      }
    } else {
      let length = item.length;

      for (let i = 0; i < length; i++) {
        populateStylesheet(item[i], stylesheet, isChild);
      }
    }
  }
};

const propsToSkip: Set<string> = new Set(["children", "has", "id"]);

const propsToStyles = (props: JSX.Props<unknown>) => {
  let result: Record<string, string> = {};

  let keys = Object.keys(props);
  let length = keys.length;

  for (let i = 0; i < length; i++) {
    let key = keys[i]! as keyof typeof props;

    if (!propsToSkip.has(key)) {
      let value = props[key];

      if (typeof value === "string") {
        if (key.startsWith("var")) key = key.substring(3) as keyof typeof props;
        result[camelToSnakeCase(key)] = value;
      }
    }
  }

  return result;
};

// const render = (value: unknown, stylesheet: Stylesheet): void => {
// //   if (typeof value === "string") return value;
// //   if (typeof value === "number") return value + "";

//   if (Array.isArray(value)) {
//     if (isJSX(value)) {
//       return renderElementToCss(value);
//     }

//     let result = "";
//     let length = value.length;

//     for (let i = 0; i < length; i++) {
//       result += render(value[i], stylesheet);
//     }

//     return result;
//   }

//   return "";
// };

// const renderElementToCss = ([_, type, props]: JSX.Element, stylesheet: Stylesheet): void => {
//   if (!type) return;

//   if (typeof type === "function") {
//     return render(type(props), stylesheet);
//   }

//   let selector = type;
//   if (selector === "star") selector = "*";

//   console.log({ selector });

//   let prefix = HTMLTags.has(type) ? "" : props.id ? "#" : ".";

//   let styles = propsToStyles(props);

//   stylesheet[]

// //   return `${prefix}${selector}{${styles}}`;
// };

// const propsToSkip: Array<string> = ["children", "id"];

// const propsToStyles = (props: JSX.Props<unknown>):Record<string, string> => {
//   let result:Record<string, string> = {};
//   let keys = Object.keys(props);
//   let length = keys.length;

//   for (let i = 0; i < length; i++) {
//     if (!propsToSkip.includes(keys[i]!)) {
//             result[keys[i]!] = props[keys[i]! as keyof typeof props]
//     }
//   }

//   return result;
// };
