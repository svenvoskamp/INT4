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

  onAuthStateChanged = user => {
    if (user){
      console.log("De user is ingelogd");
      this.setCurrentUser(
        new User({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          store: this.rootStore.userStore
        })
      );



    }else {
      console.log("De user is nu uitgelogd");
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
    return result;
  }

  signInWithPopUp = async () => {
    const result = await this.authService.signInWithPopup();
    const newRegisteredUser = new User({
      id: result.user.uid,
      name: result.user.displayName,
      store: this.rootStore.userStore,
      email: result.user.email
    })
    if(result){
      this.rootStore.userStore.createUser(newRegisteredUser);
    }
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
