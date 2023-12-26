export interface Person {
  fullname: string;
  gender: string;
  dateOfBirth: string;
  cpr: string;
  phoneNumber: number;
  address: Address;
}

interface Address {
  postalCode: number;
  city: string;
  street: string;
  houseNumber: string;
}
