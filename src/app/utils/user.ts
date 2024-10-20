"use client";

import { SampleClasses, SampleUser } from "@/app/utils/mock_data";
import { ClassDataType, RegisterType } from "@/app/type";

const MODE = process.env.NEXT_PUBLIC_MODE;

export const fetchClasses = (): ClassDataType[] | undefined => {
  if (MODE === "mock") {
    return SampleClasses;
  }
};

export const fetchUser = (): RegisterType | undefined => {
  if (MODE == "mock") {
    return SampleUser;
  }
};
