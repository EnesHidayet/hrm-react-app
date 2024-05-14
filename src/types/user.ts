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
enum EShift {
  ROLE_EMPLOYEE,
  ROLE_MANAGER,
  ROLE_ADMIN,
}
enum EStatus {
  ACTIVE,
  DELETED,
  PENDING,
  BANNED,
  INACTIVE,
}

export interface UserState {
  userList: User[];
  isLoadingFetchGetAllUsers: boolean;
  isLoadingFetchCompanyList: boolean;
}
