import React from "react";
import { Camera, Image as ImageIcon } from "lucide-react";
import type { ProjectImage } from "@/lib/portfolioData";

interface WorkImagePlaceholderProps {
  image: ProjectImage;
  projectTitle: string;
  isThumbnail?: boolean;
}

export function WorkImagePlaceholder({
  image,
  projectTitle,
  isThumbnail = false,
}: WorkImagePlaceholderProps) {
  if (isThumbnail) {
    return (
      <div className="work-thumb-placeholder" title={projectTitle}>
        <div className="work-thumb-placeholder__icon">
          <ImageIcon size={16} aria-hidden="true" />
        </div>
      </div>
    );
  }

  return (
    <div className="work-media-placeholder" role="img" aria-label={`${projectTitle} photography`}>
      <div className="work-media-placeholder__glow" aria-hidden="true" />
      <div className="work-media-placeholder__inner">
        <div className="work-media-placeholder__icon-wrap">
          <Camera size={28} className="work-media-placeholder__icon" aria-hidden="true" strokeWidth={1.5} />
        </div>
        <p className="work-media-placeholder__title">{projectTitle}</p>
        <span className="work-media-placeholder__subtitle">Gallery Archive</span>
      </div>
    </div>
  );
}
