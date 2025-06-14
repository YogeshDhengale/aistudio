import Image from "next/image";
import React from "react";
import { Badge } from "../ui/badge";

const LlmCard = ({img, isNew, title, subtitle}: {img: string, isNew?: boolean, title: string, subtitle: string}) => {
  return (
    <div className="@[max-width:550px]/cq:w-[90cqi] w-[90cqi] md:w-auto p-3 bg-indigo-50 dark:bg-[#393939] border hover:border-border hover:bg-indigo-100 dark:hover:bg-[#333537] rounded-xl">
      <div className="flex gap-3">
        <div className="overflow-hidden size-16">
          <Image
            src={img}
            alt="text-wave"
            width={62}
            height={62}
            className="rounded-sm w-full object-cover"
          />
        </div>
        <div>
          <div className="flex justify-between gap-2 mb-1">
            <p className="text-sm font-medium">{title}</p>
            {isNew && <Badge variant="new">New</Badge>}
          </div>
          <p className="text-sm text-muted-foreground">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LlmCard;
