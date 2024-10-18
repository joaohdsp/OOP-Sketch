export abstract class Person {
    name: string;
    private email?: string;
  
    constructor(name: string) {
      if (name.length < 3) {
        throw new Error("Nome deve possuir mais que 2 caracteres");
      }
      this.name = name;
    }
    setEmail(email: string) {
      if (!email.includes("@")) {
        throw new Error("Email Inválido");
      }
      this.email = email;
    }
  
    getEmail() {
      return this.email;
    }
  }
  