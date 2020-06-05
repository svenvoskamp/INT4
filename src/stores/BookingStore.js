import {decorate, observable, action, configure} from 'mobx';
import Booking from '../models/Booking';

configure({
  enforceActions: 'observed'
});

class BookingStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.bookings = [];
  }

  addBooking(booking) {
    this.booking.push(booking);
  }

  getBookingById = id => this.bookings.find(booking => booking.id === id);

  empty() {
    this.bookings = [];
  }

  createBooking = async booking => {
  }
}

decorate (BookingStore, {
  bookings: observable,
  addBooking: action,
  empty: action
});

export default BookingStore;
