"use client";

import { Profile } from "@/factory";

export class LocalStorageProfile implements Profile {
  save() {
    localStorage.setItem("sample", "profile data");
  }

  load() {
    localStorage.getItem("sample");
  }
}
