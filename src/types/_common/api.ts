export interface User {
  flag: string;
  name: string;
  phoneLast: string;
}

export interface GetTotalStampResponseType {
  stamps: number;
}

export interface CustomErrorType {
  message: string;
  detail: string;
  status: number;
}
