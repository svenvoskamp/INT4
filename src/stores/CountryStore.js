import {decorate, observable, action, configure} from 'mobx';


configure({
  enforceActions: 'observed'
});

class CountryStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.countries = [];
  }
}

decorate (TypeStore, {
  countries: observable,
});

export default CountryStore;
