import {decorate, observable, action, configure} from 'mobx';
import Booking from '../models/Booking';
import BookingService from "../services/BookingService";

configure({
  enforceActions: 'observed'
});

class BookingStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.bookingService = new BookingService(this.rootStore.firebase);
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
    await this.bookingService.createBooking(booking);
    return booking;
  }
}

decorate (BookingStore, {
  bookings: observable,
  addBooking: action,
  empty: action
});

export default BookingStore;
