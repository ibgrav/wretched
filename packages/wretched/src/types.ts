import type * as CSS from "csstype";

export type Primitive = string | number | boolean | null | undefined;

export type Children = Primitive | Element | Array<Primitive | Element>;

export type Type = string | Component<unknown>;

export type Attribute = Primitive | Array<Primitive | Attribute> | Record<string, Primitive>;

export type Props<P> = P & InherentProps;

export type Component<P> = (props: Props<P>) => Element;

export type Element = [string, Type, Props<unknown>];

export interface InherentProps {
  children?: Children;
}

type CSSProperties = CSS.Properties & {
  id?: boolean;
};

interface MediaQuery {
  screen?: boolean;
  print?: boolean;
  min?: string;
  max?: string;
}

export interface IntrinsicElements extends GlobalElements {
  [key: string]: CSSProperties | MediaQuery;
}

export interface GlobalElements {
  // @ rules
  media: MediaQuery;

  // CSS Selectors
  root: CSSProperties;

  // HTML5 Elements
  a: CSSProperties;
  abbr: CSSProperties;
  address: CSSProperties;
  area: CSSProperties;
  article: CSSProperties;
  aside: CSSProperties;
  audio: CSSProperties;
  b: CSSProperties;
  base: CSSProperties;
  bdi: CSSProperties;
  bdo: CSSProperties;
  big: CSSProperties;
  blockquote: CSSProperties;
  body: CSSProperties;
  br: CSSProperties;
  button: CSSProperties;
  canvas: CSSProperties;
  caption: CSSProperties;
  cite: CSSProperties;
  code: CSSProperties;
  col: CSSProperties;
  colgroup: CSSProperties;
  data: CSSProperties;
  datalist: CSSProperties;
  dd: CSSProperties;
  del: CSSProperties;
  details: CSSProperties;
  dfn: CSSProperties;
  dialog: CSSProperties;
  div: CSSProperties;
  dl: CSSProperties;
  dt: CSSProperties;
  em: CSSProperties;
  embed: CSSProperties;
  fieldset: CSSProperties;
  figcaption: CSSProperties;
  figure: CSSProperties;
  footer: CSSProperties;
  form: CSSProperties;
  h1: CSSProperties;
  h2: CSSProperties;
  h3: CSSProperties;
  h4: CSSProperties;
  h5: CSSProperties;
  h6: CSSProperties;
  head: CSSProperties;
  header: CSSProperties;
  hgroup: CSSProperties;
  hr: CSSProperties;
  html: CSSProperties;
  i: CSSProperties;
  iframe: CSSProperties;
  img: CSSProperties;
  input: CSSProperties;
  ins: CSSProperties;
  kbd: CSSProperties;
  keygen: CSSProperties;
  label: CSSProperties;
  legend: CSSProperties;
  li: CSSProperties;
  link: CSSProperties;
  main: CSSProperties;
  map: CSSProperties;
  mark: CSSProperties;
  marquee: CSSProperties;
  menu: CSSProperties;
  menuitem: CSSProperties;
  meta: CSSProperties;
  meter: CSSProperties;
  nav: CSSProperties;
  noscript: CSSProperties;
  object: CSSProperties;
  ol: CSSProperties;
  optgroup: CSSProperties;
  option: CSSProperties;
  output: CSSProperties;
  p: CSSProperties;
  param: CSSProperties;
  picture: CSSProperties;
  pre: CSSProperties;
  progress: CSSProperties;
  q: CSSProperties;
  rp: CSSProperties;
  rt: CSSProperties;
  ruby: CSSProperties;
  s: CSSProperties;
  samp: CSSProperties;
  script: CSSProperties;
  section: CSSProperties;
  select: CSSProperties;
  slot: CSSProperties;
  small: CSSProperties;
  source: CSSProperties;
  span: CSSProperties;
  strong: CSSProperties;
  style: CSSProperties;
  sub: CSSProperties;
  summary: CSSProperties;
  sup: CSSProperties;
  table: CSSProperties;
  tbody: CSSProperties;
  td: CSSProperties;
  textarea: CSSProperties;
  tfoot: CSSProperties;
  th: CSSProperties;
  thead: CSSProperties;
  time: CSSProperties;
  title: CSSProperties;
  tr: CSSProperties;
  track: CSSProperties;
  u: CSSProperties;
  ul: CSSProperties;
  var: CSSProperties;
  video: CSSProperties;
  wbr: CSSProperties;

  //SVG
  svg: CSSProperties;
  animate: CSSProperties;
  circle: CSSProperties;
  animateTransform: CSSProperties;
  clipPath: CSSProperties;
  defs: CSSProperties;
  desc: CSSProperties;
  ellipse: CSSProperties;
  feBlend: CSSProperties;
  feColorMatrix: CSSProperties;
  feComponentTransfer: CSSProperties;
  feComposite: CSSProperties;
  feConvolveMatrix: CSSProperties;
  feDiffuseLighting: CSSProperties;
  feDisplacementMap: CSSProperties;
  feDropShadow: CSSProperties;
  feFlood: CSSProperties;
  feFuncA: CSSProperties;
  feFuncB: CSSProperties;
  feFuncG: CSSProperties;
  feFuncR: CSSProperties;
  feGaussianBlur: CSSProperties;
  feImage: CSSProperties;
  feMerge: CSSProperties;
  feMergeNode: CSSProperties;
  feMorphology: CSSProperties;
  feOffset: CSSProperties;
  feSpecularLighting: CSSProperties;
  feTile: CSSProperties;
  feTurbulence: CSSProperties;
  filter: CSSProperties;
  foreignObject: CSSProperties;
  g: CSSProperties;
  image: CSSProperties;
  line: CSSProperties;
  linearGradient: CSSProperties;
  marker: CSSProperties;
  mask: CSSProperties;
  path: CSSProperties;
  pattern: CSSProperties;
  polygon: CSSProperties;
  polyline: CSSProperties;
  radialGradient: CSSProperties;
  rect: CSSProperties;
  stop: CSSProperties;
  symbol: CSSProperties;
  text: CSSProperties;
  textPath: CSSProperties;
  tspan: CSSProperties;
  use: CSSProperties;
}
