import { defaultConfig } from "./defaults";
import { GlimmerMouseConfigProp, GlimmerMouseConfig } from "./types";

export const createConfig = (config?: GlimmerMouseConfigProp): GlimmerMouseConfig => {
  const mergedConfig = {
    ...defaultConfig,
    ...config,
  } as GlimmerMouseConfig;

  console.log("🚀 ~ createConfig ~ mergedConfig:", mergedConfig);
  return mergedConfig;
};
