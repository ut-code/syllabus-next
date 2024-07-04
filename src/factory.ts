import { LocalStorageProfile } from "@/services/profile/LocalStorage";
import { StorageType } from "@/type";

export interface Profile {
  save(): void;
  load(): void;
}

export class ProfileFactory {
  static createProfile(type: StorageType) {
    switch (type) {
      case "localStorage":
        return new LocalStorageProfile();
      default:
        throw new Error("Invalid storage type");
    }
  }
}
