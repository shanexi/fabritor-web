declare module '*.png' {
  const value: string;
  export default value;
}
import { fabric as Fabric } from 'fabric';

declare global {
  const fabric: typeof Fabric;
}
