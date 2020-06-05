import UiStore from "./UiStore";
import BookingStore from "./BookingStore";
import CoupleStore from "./CoupleStore";
import UiStore from "./UiStore";

import * as firebase from "firebase/app";

class RootStore {
  constructor() {

    this.bookingStore = new BookingStore(this);
    this.coupleStore = new CoupleStore(this);
    this.uiStore = new UiStore(this);
  }
}

export default RootStore;
