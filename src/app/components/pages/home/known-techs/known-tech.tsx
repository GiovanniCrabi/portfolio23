"use client";

import { CMSIcon } from "@/app/components/cms-icon";
import { KnownTech as IKnownTech } from "@/app/types/projects";
import { getRelativeTimeString } from "@/app/utils/get-relative-time";

type KnownTechProps = {
  tech: IKnownTech;
};

export const KnownTech = ({ tech }: KnownTechProps) => {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    "en"
  ).replace("ago", "experience");
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-emerald-500 hover:border-2 hover:border-emerald-500 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        <CMSIcon icon={tech.iconSvg} />
      </div>

      <span>{relativeTime} </span>
    </div>
  );
};
