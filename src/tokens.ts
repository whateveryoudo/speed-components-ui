import type { InjectionKey, Ref } from "vue";
import type { GlobalConfig } from "./config";

export const SPEED_COMPONENTS_CONFIG_TOKEN: InjectionKey<
  Ref<GlobalConfig>
> = Symbol("speed-components-config");

