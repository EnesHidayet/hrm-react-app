export interface Company {
  id: string;
  companyName: string;
  nameOfUser: string;
  managerMail: string;
  isManagerMailApproved: boolean;
  type: "AYLIK" | "YILLIK";
  isApproved: boolean;
}
export interface CompanyEmployeeIds {
  id: number[];
}
export interface CompanyState {
  companyList: Company[];
  isLoadingFetchApproveCompany: boolean;
  isLoadingFetchCompanyList: boolean;
}
