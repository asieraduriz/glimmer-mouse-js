import "./glimmer.css";
import { glimmerMouseDistance } from "./glimmer/distance";
import { glimmerMouseTime } from "./glimmer/time";
import { GlimmerMouseConfig } from "./types/config";

export default function (config: GlimmerMouseConfig) {
  switch (config.type) {
    case "time":
      return glimmerMouseTime(config);
    case "distance":
      return glimmerMouseDistance(config);
  }
}
