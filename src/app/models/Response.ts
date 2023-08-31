export class Response {
  DataCount: number;
  DataList: [];
  Data: [];
  HasError: boolean;
  Messages: [];

  constructor() {
    this.DataCount = 0;
    this.DataList = [];
    this.HasError = false;
    this.Messages = [];
    this.Data = [];
  }
}
export class TokenRequest {
  Email: string;
  Password: string;
  AppId: string;
  remember?: boolean;
}
