import { definePageConfig } from "../../.ice";
import { ImageCanvas } from "../fabritor";
import '../index.css';

export const pageConfig = definePageConfig(() => ({
  title: 'fabritor, A creative editor based on fabricjs.'
}));

export default function () {
  return <ImageCanvas/>;
}
