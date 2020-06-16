import {decorate, configure} from 'mobx';
import {v4} from 'uuid';

configure({
  enforceActions: 'observed'
});

class Type {

  constructor({id = v4(), type, webm, mp4}) {
    this.id = id;
    this.type = type;
    this.webm = webm;
    this.mp4 = mp4;
  }
}

decorate(Type, {
});

const typeConverter = {
  toFirestore: function(type){
    return{
      type: type.type
    };
  },
  fromFirestore: function(snapshot, options){
    const data = snapshot.data(options);
    return new Type({
      id: snapshot.id,
      type: data.type,
      webm: data.webm,
      mp4: data.mp4
    });
  }
};

export {typeConverter};


export default Type;
