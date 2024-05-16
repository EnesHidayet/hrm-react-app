export interface User {
  id: string;
  authId: Number;
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  image: string;
  identityNumber: string;
  birthDate: string;
  militaryService: string;
  drivingLicense: string;
  department: string;
  title: string;
  userDetailId: string;

  status: EStatus;
  equipmentList: Array<Equipment>;
  shiftList: Array<Shift>;
  leaveList: Array<Leave>;
  breakList: Array<Break>;
}

export interface Break {
  id: string;
  description: string;
  start: Date;
  end: Date;
}
export interface Equipment {
  id: string;
  name: string;
  description: string;
  serialNumber: string;
  about: string;
  givenDate: Date;
  returnDate: Date;
}
export interface Shift {
  id: string;
  type: EShift;
  start: Date;
  end: Date;
}
export interface Leave {
  id: string;
  description: string;
  startDate: string;
  endDate: string;
  firstName: string;
  lastName: string;
  isLeaveApproved: boolean;
}
export enum EShift {
  MORNING = "MORNING",
  AFTERNOON = "AFTERNOON",
  NIGHT = "NIGHT",
}
export enum EStatus {
  ACTIVE,
  DELETED,
  PENDING,
  BANNED,
  INACTIVE,
}
export interface ShiftSaveRequestDto {
  userId: string;
  type: EShift;
  start: Date;
  end: Date;
}
export interface BreakSaveRequestDto {
  userId: string;
  description: string;
  start: Date;
  end: Date;
}

export interface UserState {
  userList: User[];
  isLoadingFetchGetAllUsers: boolean;
  isLoadingFetchCompanyList: boolean;
}
