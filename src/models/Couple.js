import {observable, action, decorate, configure, computed} from 'mobx';
import {v4} from 'uuid';

configure({
  enforceActions: 'observed'
});

class Couple {

  constructor({id = v4(), booking,  sex_1, sex_2, name_1, name_2, bookingId}) {
    this.id = id;
    this.booking = booking;
    this.sex_1 = sex_1;
    this.sex_2 = sex_2;
    this.name_1 = name_1;
    this.name_2 = name_2;
    this.bookingId = bookingId;
  }

  linkBooking(booking) {
    !this.booking.includes(booking) && this.booking.push(booking);
  }
}

decorate(Couple, {
  booking: observable,
  linkBooking: action
});

export default Couple;
