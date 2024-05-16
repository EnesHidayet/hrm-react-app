import restApi from "./RestApis";
const companyUrl = {
  list: restApi.companyUrl + "/get-all-company",
  approve: restApi.companyUrl + "/approve-company",
  deny: restApi.companyUrl + "/deny-company",
  get_company_employees: restApi.companyUrl + "/get-company-employees",
};
export default companyUrl;
