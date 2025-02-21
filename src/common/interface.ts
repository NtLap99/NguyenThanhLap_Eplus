export interface IUser {
  id: number;
  name: string;
  avatar: string;
}

export interface ICourse {
  id: number;
  user: IUser;
  name: string;
  type?: string;
  lecturer: IUser;
  fromDate: string;
  toDate: string;
  status: string;
  method: string;
  studentCount: number;
  fine: number;
  createdDate: string;
}

export enum EType {
  EXPERTISE = 'Chuyên môn',
  TRAINING = 'Đào tạo hội nhập',
}

export enum EStatus {
  PENDING = 'Đang thực hiện',
  COMPLETE = 'Hoàn thành',
}