import { decorate, observable, action } from "mobx";

class UiStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.currentCouple = undefined;
    this.currentBooking = undefined;
    this.currentDay = undefined;
  }

  setCurrentCouple(couple) {
    this.currentCouple = couple;
  }

  setCurrentBooking(booking) {
    this.currentBooking = booking;
  }

  setCurrentDay(day) {
    this.currentDay = day;
  }
}

decorate(UiStore, {
  currentCouple: observable,
  currentBooking: observable,
  currentDay: observable,
  setCurrentCouple: action,
  setCurrentBooking: action,
  setCurrentDay: action
});

export default UiStore;
