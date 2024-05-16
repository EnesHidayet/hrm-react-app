import restApi from "./RestApis";

const userUrl = {
  list: restApi.userUrl + "/get-all-users",
  findAllUsersForGivenIds: restApi.userUrl + "/find-all-users-for-given-ids",
  addShift: restApi.userUrl + "/add-shift",
  addBreak: restApi.userUrl + "/add-break",
};
export default userUrl;
