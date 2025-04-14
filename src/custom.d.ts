
declare module "*.svg" {
    const content: any;
    export default content;
  }

  
declare module '*.png' {

  const content: any;

  export default content;

}
declare module "*.svg?react" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
declare module 'react-element-popper/animations/transition' {
  const transition: (options: { duration?: number, from?: number }) => any;
  export default transition;
}