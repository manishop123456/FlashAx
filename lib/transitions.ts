export type TransitionMode = "major" | "service" | "reduced" | "none";
export type TransitionStatus = "idle" | "wiping_in" | "covered" | "wiping_out";

/**
 * Classifies whether a navigation between two paths requires:
 * - "major": full cinematic spark-wipe with gold particle burst and rich purple-to-magenta curtain
 * - "service": lighter directional wipe and subtle content reveal
 * - "reduced": simple fade without curtain wipe or sparks
 * - "none": same page or anchor jump
 */
export function classifyTransition(
  fromPath: string,
  toPath: string,
  reducedMotion: boolean
): TransitionMode {
  if (reducedMotion) return "reduced";

  // Normalize paths
  const normFrom = fromPath.split("?")[0].split("#")[0].replace(/\/$/, "") || "/";
  const normTo = toPath.split("?")[0].split("#")[0].replace(/\/$/, "") || "/";

  if (normFrom === normTo) return "none";

  const isFromServiceDetail = normFrom.startsWith("/services/") && normFrom !== "/services";
  const isToServiceDetail = normTo.startsWith("/services/") && normTo !== "/services";
  const isFromServicesIndex = normFrom === "/services";
  const isToServicesIndex = normTo === "/services";

  // Light directional wipe for service detail transitions
  if (
    (isFromServicesIndex && isToServiceDetail) ||
    (isFromServiceDetail && isToServicesIndex) ||
    (isFromServiceDetail && isToServiceDetail)
  ) {
    return "service";
  }

  // Major page transition between Home, About, Services overview, Work, Contact, etc.
  return "major";
}
