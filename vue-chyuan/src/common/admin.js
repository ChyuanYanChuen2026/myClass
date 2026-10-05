import Member1 from './member.js';

export class Admin extends Member1 {
  constructor(name, age, role) {
    super(name, age);
    this.role = role;
  }
}
