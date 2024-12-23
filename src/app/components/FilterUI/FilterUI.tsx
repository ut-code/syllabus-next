"use client";
import { useState } from "react";
import { FreewordComponent } from "./FilterComponent";

export const FilterUI: React.FC = () => {
  const [isFreewordForSyllabusDetail, setFreewordTarget] =
    useState<boolean>(true);
  return (
    <div>
      <FreewordComponent
        isFreewordForSyllabusDetail={isFreewordForSyllabusDetail}
        setFreewordTarget={setFreewordTarget}
      />
    </div>
  );
};
