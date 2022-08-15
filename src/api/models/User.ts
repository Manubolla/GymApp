interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  dni: string;
  contact: string;
  emergencyContact: string;
}

type UserKeys = keyof User;

const emptyUser: User = {
  id: "",
  email: "",
  firstName: "",
  lastName: "",
  dni: "",
  contact: "",
  emergencyContact: "",
};

export { User, emptyUser, UserKeys };
