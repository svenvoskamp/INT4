import {observable, action, decorate, configure} from 'mobx';
import {v4} from 'uuid';

configure({
  enforceActions: 'observed'
});

class UserData {

  constructor({id = v4(), firstName, lastName, city, zip, adress, houseNumber, busNumber = "", telephone = "", terms, users = [], userId}) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.zip = zip;
    this.adress = adress;
    this.houseNumber = houseNumber;
    this.busNumber = busNumber;
    this.telephone = telephone;
    this.terms = terms;
    this.users = users;
    this.userId = userId;
  }

  linkUser(user) {
   !this.users.includes(user) && this.users.push(user);
  }
}

decorate(UserData, {
  users: observable,
  linkUser: action
});

const userDataConverter = {
  toFirestore: function(userData) {
    return {
      firstName: userData.firstName,
      lastName: userData.lastName,
      city: userData.zip,
      adress: userData.adress,
      houseNumber: userData.houseNumber,
      busNumber: userData.houseNumber,
      telephone: userData.telephone,
      terms: userData.terms,
      userId: userData.userId
    };
  },
  fromFirestore: function(snapshot, options) {
    const data = snapshot.data(options);
    return new UserData({
      id: snapshot.id,
      firstName: data.firstName,
      lastName: data.lastName,
      city: data.zip,
      adress: data.adress,
      houseNumber: data.houseNumber,
      busNumber: data.houseNumber,
      telephone: data.telephone,
      terms: data.terms,
      userId: data.userId
    });
  }
};

export {userDataConverter};

export default UserData;
