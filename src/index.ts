import { glimmerMouseDistance } from "./glimmer/distance";
import { glimmerMouseFollow } from "./glimmer/follow";
import { glimmerMouseTime } from "./glimmer/time";
import { GlimmerMouseConfig } from "./types/config";

export default function (config: GlimmerMouseConfig) {
  switch (config.type) {
    case "time":
      return glimmerMouseTime(config);
    case "distance":
      return glimmerMouseDistance(config);
    case "follow":
      return glimmerMouseFollow(config);
  }
}
