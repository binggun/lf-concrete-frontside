import { DateTime } from "luxon";

export interface Concrete {
  id: string;
  name: string;
  mainContractor: string;
  project: string;
  concreteBookings: Booking[];
  concretePours: Pour[];
}
export interface BaseBooking {
  bookingDate: DateTime;
  requireDate: DateTime;
  time: DateTime;
  concreteType: string;
  site: string;
  location: string;
  supplier: string;
  orderedQuantity: number;
  curing: string;
  slump: string;
  additives: string;
  interval: string;
  test: string;
  placer: string;
  pumpSupplier: string;
  hoseLength: string;
  orderNumber: string;
  note: string;
  qs: string;
}

export interface Booking extends BaseBooking {
  id: string;
}
export interface BasePour {
  pourDate: DateTime;
  site: string;
  location: string;
  supplier: string;
  orderNumber: string;
  onSiteQuantity: number;
  layerArea: number; //for layer claim
  layerHour: number;
  pumpQuantity: number; //for pumpy claim
  pumphour: number;
  curingBy: string;
  deliverDocket: string;
  testReport: string[]; //pics
  curingProvider: string;
  prePourQAForm: string; //attachment
  prePourQAPic: string[]; //pics
  postPourQAForm: string; //attachment
  postPourQAPic: string[]; //pics
  asbuilt: string[]; //attachment
  note: string;
  supervisor: string;
}
export interface Pour extends BasePour {
  id: String;
}
export interface BaseRemedialWork {
  method: string;
  remdialPic: string[]; //pics
  note: string;
}
export interface RemedialWork extends BaseRemedialWork {
  id: string;
}
