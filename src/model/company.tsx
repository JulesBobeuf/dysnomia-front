import idValue from "./idValue";
import idValueList from "./idValueList";

export interface Compunknown {
    changeDate: string;
    changeDateCategory: string;
    changedCompunknownId: idValue;
    checksum: string;
    country: number;
    createdAt: string;
    description: string;
    developed: idValueList;
    id: number;
    logo: idValue;
    name: string;
    parent: unknown;
    published: idValueList;
    slug: string;
    startDate: string;
    startDateCategory: string;
    updatedAt: string;
    url: string;
    websites: unknown;
  }