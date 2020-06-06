import {decorate, observable, action, configure} from 'mobx';
import UserService from "../services/UserService";


configure({
  enforceActions: 'observed'
});

class UserStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.userService = new UserService(this.rootStore.firebase);
    this.users = [];
  }

  addUser(user) {
      this.users.push(user);
    }

  getUserById = id => this.users.find(user => user.id === id);


  empty() {
    this.users = [];
  }

  createUser = async user => {
    return await this.userService.create(user);
  }
}

decorate (UserStore, {
  users: observable,
  addUser: action,
  empty: action
});

export default UserStore;
