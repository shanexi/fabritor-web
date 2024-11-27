declare module '*.png';

import { fabric as Fabric } from 'fabric';

declare global {
  const fabric: typeof Fabric;
}
