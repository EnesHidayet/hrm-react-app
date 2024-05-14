export interface Company {
  id: number;
  companyName: string;
  nameOfUser: string;
  emailOfUser: string;
  isManagerMailApproved: boolean;
  type: "AYLIK" | "YILLIK";
  isApproved: boolean;
}
export interface CompanyState {
  companyList: Company[];
  isLoadingFetchApproveCompany: boolean;
  isLoadingFetchCompanyList: boolean;
}
