import {decorate, observable, action, configure} from 'mobx';
import Couple from '../models/Couple';

configure({
  enforceActions: 'observed'
});

class CoupleStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.couples = [];
  }

  addCouple(couple) {
      this.couples.push(couple);
    }

  getCoupleById = id => this.couples.find(couple => couple.id === id);


  empty() {
    this.couples = [];
  }

  createCouple = async couple => {

  }
}

decorate (CoupleStore, {
  couples: observable,
  addCouple: action,
  empty: action
});

export default CoupleStore;
