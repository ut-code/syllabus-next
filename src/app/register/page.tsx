"use client";

import { useState } from "react";

import RegisterPresenter from "./RegisterPresenter";

import useFetchRegisteredInfo from "@/app/hooks/useFetchRegisteredInfo";

export default function RegisterContainer() {
  const { registeredInfo, setRegisteredInfo } = useFetchRegisteredInfo();
  const [isAutofillCompulsory, setIsAutofillCompulsory] =
    useState<boolean>(true);
  return (
    <section>
      <RegisterPresenter
        registeredInfo={registeredInfo}
        setRegisteredInfo={setRegisteredInfo}
        isAutofillCompulsory={isAutofillCompulsory}
        setIsAutofillCompulsory={setIsAutofillCompulsory}
      />
    </section>
  );
}
