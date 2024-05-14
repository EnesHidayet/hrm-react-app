import React, { useEffect, useState } from "react";
import {
  fetchApproveCompany,
  fetchCompanyList,
  fetchDenyCompany,
} from "../../store/features/companySlice";
import { RootState, AppDispatch } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserList } from "../../store/features/userSlice";

function ShiftManagement() {
  const dispatch: AppDispatch = useDispatch();
  // Yerel durumu güncelle

  const userList = useSelector((state: RootState) => state.user.userList);
  useEffect(() => {
    dispatch(fetchUserList());
  }, [dispatch]);

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="text-center">
              {/* INDEX */}
              <label>
                <i className="fa fa-hashtag"></i>
              </label>
            </th>
            <th className="text-center">
              {/* ÇALIŞAN ADI */}
              <label>
                <i className="fa fa-fa-user"></i>
              </label>
            </th>
            <th className="text-center">
              {/* SIRKET MAILI */}
              <i className="fa fa-envelope"></i>
            </th>
            <th className="text-center">
              {/* TELEFONU */}
              <i className="fa fa-fa-mobile"></i>
            </th>
            <th className="text-center">
              {/* START DATE */}
              <i className="fa fa-calendar-days"></i>
            </th>
            <th className="text-center">
              {/* END DATA*/}
              <i className="fa fa-fa-calendar"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user: User, index) => (
            <tr key={company.id}>
              {/* INDEX */}
              <td className="text-center align-content-center">
                <p>{index}</p>
              </td>
              {/* ŞİRKET ADI */}
              <td className="text-center align-content-center">
                <p>{company.companyName}</p>
              </td>
              {/* YONETICI ADI */}
              <td className="text-center align-content-center">
                <p>{company.nameOfUser}</p>
              </td>
              {/* SIRKET MAILI - YONETICI ONAYI */}
              <td className="text-center align-content-center">
                <div className="text-center">
                  <p>{company.emailOfUser}</p>&nbsp;&nbsp;
                  {company.isManagerMailApproved ? (
                    <i className={"fa fa-check-circle"}></i>
                  ) : (
                    <i className={"fa fa-clock"} style={{ color: "blue" }}></i>
                  )}
                </div>
              </td>
              {/* YILLIK-AYLIK PLAN */}
              <td className="text-center align-content-center">
                <i className="">
                  <p>{company.type}</p>
                </i>
              </td>
              {/* ONAY DURUMU */}
              <td className="text-center align-content-center">
                <div className="fa-2x">
                  {company.isApproved ? (
                    <i
                      className="fa-solid fa-check-circle"
                      style={{ color: "green", fontSize: "1.5rem" }}
                    ></i>
                  ) : (
                    <i
                      className="fa-solid fa-xmark"
                      style={{ color: "red", fontSize: "1.5rem" }}
                    ></i>
                  )}

                  <div>
                    <button
                      className="btn btn-primary m-2"
                      onClick={() => handleApprove(company.id)}
                    >
                      onayla
                    </button>
                    <button
                      className="btn btn-danger m-2"
                      onClick={() => handleReject(company.id)}
                    >
                      reddet
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ShiftManagement;
