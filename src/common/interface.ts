export interface IUser {
  id: number;
  name: string;
  avatar: string;
}

export interface ICourse {
  id: number;
  user: IUser;
  name: string;
  lecturer: IUser;
  fromDate: string;
  toDate: string;
  status: string;
  method: string;
  studentCount: number;
  fine: number;
  createdDate: string;
}