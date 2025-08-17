import { FormInterceptor } from "@lib/forms/FormInterceptor";

export default class CommonHelpers {
  static sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
}