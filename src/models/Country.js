import {decorate, configure} from 'mobx';
import {v4} from 'uuid';

configure({
  enforceActions: 'observed'
});

class Country {

  constructor({id = v4(), webm, mp4, country}) {
    this.id = id;
    this.webm = webm;
    this.mp4 = mp4;
    this.country = country;
  }
}

decorate(Country, {
});

const countryConverter = {
  toFirestore: function(country){
    return{
      country: country.country,
    };
  },
  fromFirestore: function(snapshot, options){
    const data = snapshot.data(options);
    return new Country({
      id: snapshot.id,
      country: data.country,
      webm: data.webm,
      mp4: data.mp4
    });
  }
};

export {countryConverter};

export default Country;
