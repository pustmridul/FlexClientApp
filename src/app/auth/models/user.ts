import { Role } from './role';

export class User {
  Id: number;
  UserName: string;
  EmailId: string;
  IsVerified: boolean;
  JWToken: string;
  IssuedOn: string;
  ExpiresOn: Role;
  RefreshToken?: string;
  HasError: boolean;
  Messages: [];
  role: string;
  Name: string;
  PhoneNo: string='';

}
