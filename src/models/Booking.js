import {observable, action, decorate, configure, computed} from 'mobx';
import {v4} from 'uuid';

configure({
  enforceActions: 'observed'
});

class Booking {

  constructor({id = v4(), couple, type, country, marriageYear, marriageCount, pants, img, coupleId, typeId, countryId}) {
    this.id = id;
    this.couple = couple;
    this.type = type;
    this.country = country
    this.marriageYear = marriageYear;
    this.marriageCount = marriageCount;
    this.pants = pants;
    this.img = img;
    this.coupleId = coupleId;
    this.typeId = typeId;
    this.countryId = countryId;
  }

  linkCouple(couple) {
    !this.couple.includes(couple) && this.couple.push(couple);
  }
  linkType(type) {
    !this.type.includes(type) && this.type.push(type);
  }
  linkCountry(country) {
    !this.country.includes(country) && this.country.push(country);
  }
}

decorate(Booking, {
  couple: observable,
  type: observable,
  country: observable,
  linkCouple: action,
  linkType: action,
  linkCountry: action
});

export default Booking;
