import { decorate, observable, action } from "mobx";
import AuthService from "../services/AuthService";
import User from "../models/User";

class UiStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.currentUser = undefined;
    this.currentBooking = undefined;
    this.currentDay = undefined;
    this.currentCountry = undefined;
    this.currentType = undefined;
    this.authService = new AuthService(this.rootStore.firebase, this.onAuthStateChanged);
  }

  isRegisteredContact = async user => {
    return this.authService.isRegistered(user.email);
  }

  onAuthStateChanged = async user => {
    if (user){
      const newUser = await new User({
        id: user.uid,
        name: user.displayName,
        store: this.rootStore.userStore,
        email: user.email
      })
      await this.rootStore.userStore.createUser(newUser);
      await this.rootStore.bookingStore.getBookings();
      const currentUser = this.rootStore.userStore.getUserById(newUser.id);
      if(currentUser === undefined){
      this.setCurrentUser(newUser);
      }else {
      this.setCurrentUser(currentUser);
      }

    }else {
      this.setCurrentUser(undefined);
    }
}


  setCurrentUser(user) {
    this.currentUser = user;
  }

  setCurrentBooking(booking) {
    this.currentBooking = booking;
  }

  setCurrentType(type) {
    this.currentType = type;
  }

  setCurrentCountry(country) {
    this.currentCountry = country;
  }

  setCurrentDay(day) {
    this.currentDay = day;
  }

  logoutUser = async () => {
    const result = await this.authService.logout();
    this.rootStore.bookingStore.empty();
    this.rootStore.userStore.empty();
    this.setCurrentBooking(undefined);
    return result;
  }

  signInWithEmailAndPassword = async user => {
    const result = await this.authService.signInWithEmailAndPassword(user.email, user.password);
    return result;
  }

  signInWithPopUp = async () => {
    const result = await this.authService.signInWithPopup();
    return result;
  }

  registerUser = async(user) => {
    const result = await this.authService.register(user.name, user.email, user.password);
    return result;
  }
}

decorate(UiStore, {
  currentUser: observable,
  currentBooking: observable,
  currentDay: observable,
  currentType: observable,
  currentCountry: observable,
  setCurrentUser: action,
  setCurrentBooking: action,
  setCurrentDay: action,
  setCurrentCountry: action,
  setCurrentType: action
});

export default UiStore;
