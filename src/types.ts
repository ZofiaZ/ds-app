export interface IProfileData {
  userId?: string;
  avatar?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  dob?: string;
  phoneNumber?: string;
  about?: string;
  [key: string]: string | undefined;
}
