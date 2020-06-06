
import "firebase/firestore";
import {bookingConverter} from "../models/Booking";



class BookingService {
  constructor(firebase) {
    this.db = firebase.firestore();
  }

  createBooking = async booking => {
    const bookingRef = await this.db.collection("bookings").doc();
    await bookingRef.withConverter(bookingConverter).set(booking);
    return bookingRef;
  };
}
export default BookingService;
