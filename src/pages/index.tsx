import { definePageConfig } from "../../.ice";
import Fabritor from "../fabritor";
import '../fabritor/fabritor.css'

export const pageConfig = definePageConfig(() => ({
  title: 'fabritor, A creative editor based on fabricjs.'
}));

export default function () {
  return <Fabritor />;
}
