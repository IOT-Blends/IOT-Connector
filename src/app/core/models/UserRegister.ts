export class UserRegister {
  constructor(
    generalGroup: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      mobileNumber: number;
      dob: Date;
      gender: string;
    },

    addressGroup: {
      addressLine1: string;
      addressLine2: string;
      postalCode: string;
      state: string;
      city: string;
      country: string;
    },
    accessGroup: {
      accessLevel: string;
      role: string;
      creator: string;
    }
    // userProfilePic: File | string
  ) {}
}
