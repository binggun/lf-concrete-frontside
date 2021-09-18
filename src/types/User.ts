export interface User extends UserProperties {
  rowid: number;
}
export interface UserProperties {
  user_lfid: string;
  user_password: string;
  given_name: string;
  family_name: string;
  phone: string;
  email: string;
  role: string;
}
