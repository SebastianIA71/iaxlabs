import labsData from "../public/experiments/labs.json";

export type Lab = {
  name: string;
  subtitle?: string;
  slug?: string;
  url?: string;
  icons?: string[];
  type: "article" | "lab" | "qa";
  topic?: string;
  order?: number;
  topicTitle?: string;
  topicDescription?: string;
  image?: string;
  featured?: boolean;
};

export const labs: Lab[] = labsData as Lab[];