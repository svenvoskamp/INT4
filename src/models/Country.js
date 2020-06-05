import {observable, action, decorate, configure, computed} from 'mobx';
import {v4} from 'uuid';

configure({
  enforceActions: 'observed'
});

class Country {

  constructor({id = v4(), img, country}) {
    this.id = id;
    this.img = img;
    this.country = country;
  }
}

decorate(Country, {
});

export default Country;
