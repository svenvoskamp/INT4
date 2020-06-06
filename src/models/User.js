import {observable, action, decorate, configure, computed} from 'mobx';
import {v4} from 'uuid';

configure({
  enforceActions: 'observed'
});

class User {

  constructor({id = v4(), booking, name, email, bookingId}) {
    this.id = id;
    this.booking = booking;
    this.name = name;
    this.email = email;
    this.bookingId = bookingId;
  }

  linkBooking(booking) {
    !this.booking.includes(booking) && this.booking.push(booking);
  }
}

decorate(User, {
  booking: observable,
  linkBooking: action
});

const userConverter = {
  toFirestore: function(user) {
    return {
      userId: user.id,
      name: user.name,
      email: user.email
    };
  },
  fromFirestore: function(snapshot, options) {
    const data = snapshot.data(options);
    return new User({
      name: data.name,
      email: data.email,
      id: data.userId
    });
  }
};

export {userConverter};

export default User;
