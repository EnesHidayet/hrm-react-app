export interface Company {
  sirketAdi: string;
  yoneticiAdi: string;
  yoneticiMail: string;
  yoneticiMailOnay: boolean;
  plan: "AYLIK" | "YILLIK";
  siteYoneticisiOnayi: boolean;
}
export interface CompanyState {
  companyList: Company[];
  isLoadingFetchApproveCompany: boolean;
  isLoadingFetchCompanyList: boolean;
}

