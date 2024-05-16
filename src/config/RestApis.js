const root = "http://localhost:";
const companyPort = 8082;
const userPort = 8081;
const appExtension = "/hrm";
const companyRoot = root + companyPort + appExtension;
const userRoot = root + userPort + appExtension;

const restApi = {
  companyUrl: companyRoot + "/company",
  userUrl: userRoot + "/user",
};
export default restApi;
