import restApi from "./RestApis";
const companyUrl = {
  list: restApi.companyUrl + "/get-all-company", // TODO URL DUZENLENECEK
  approve: restApi.companyUrl + "/approve-company", // TODO URL DUZENLENECEK
  deny: restApi.companyUrl + "/deny-company",
};
export default companyUrl;
