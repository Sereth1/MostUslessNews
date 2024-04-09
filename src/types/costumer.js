import { randStr } from "@/helpers/utilities";

class Customer {
  constructor(userName, password, name, surname, age, email) {
    this.userName = userName;
    this.password = password;
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.email = email;
    this.id = `${Math.floor(Math.random() * 10000000) + 1}${randStr()}`;
  }
}
export { Customer };
