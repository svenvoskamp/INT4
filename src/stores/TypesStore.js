import {decorate, observable, action, configure} from 'mobx';


configure({
  enforceActions: 'observed'
});

class TypeStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.types = [];
  }
}

decorate (TypeStore, {
  types: observable,
});

export default TypeStore;
