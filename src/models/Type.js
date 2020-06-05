import {observable, action, decorate, configure, computed} from 'mobx';
import {v4} from 'uuid';

configure({
  enforceActions: 'observed'
});

class Type {

  constructor({id = v4(), type, img}) {
    this.id = id;
    this.type = type;
    this.img = img;
  }
}

decorate(Type, {
});

export default Type;
