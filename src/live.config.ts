import { defineLiveCollection } from "astro:content";
import { dinewayLoader } from "dineway/runtime";

export const collections = {
  _dineway: defineLiveCollection({ loader: dinewayLoader() }),
};
