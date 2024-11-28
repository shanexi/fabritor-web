declare module '*.png' {
  const value: string;
  export default value;
}

declare global {
  import { fabric as Fabric } from 'fabric';
  const fabric: typeof Fabric;
}
