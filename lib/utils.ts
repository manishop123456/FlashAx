import {
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

export function getSocialIcon(name: "instagram" | "linkedin" | "twitter" | "youtube") {
  switch (name) {
    case "instagram":
      return Instagram;
    case "linkedin":
      return Linkedin;
    case "twitter":
      return Twitter;
    case "youtube":
      return Youtube;
    default:
      return Instagram;
  }
}