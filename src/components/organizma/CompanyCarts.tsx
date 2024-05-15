import React, { useEffect } from "react";
import {
  fetchApproveCompany,
  fetchCompanyList,
  fetchDenyCompany,
} from "../../store/features/companySlice";
import { RootState, AppDispatch } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { Company } from "../../types";

function CompanyCarts() {
  const dispatch: AppDispatch = useDispatch();

  // Yerel durumu güncelle

  const handleApprove = (id: number) => {
    dispatch(fetchApproveCompany(id));
  };
  const handleReject = (id: number) => {
    dispatch(fetchDenyCompany(id));
  };
  const companyList = useSelector(
    (state: RootState) => state.company.companyList
  );
  useEffect(() => {
    dispatch(fetchCompanyList());
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
              {/* ŞİRKET ADI */}
              <label>
                <i className="fa fa-building"></i>
              </label>
            </th>
            <th className="text-center">
              {/* YONETICI ADI */}
              <i className="fa fa-user"></i>
            </th>
            <th className="text-center">
              {/* SIRKET MAILI */}
              <i className="fa fa-envelope"></i>
            </th>
            <th className="text-center">
              {/* AYLIK-YILLIK PLAN SECIMI */}
              <i className="fa fa-calendar-days"></i>
            </th>
            <th className="text-center">
              {/* ONAY DURUMU */}
              <i className="fa fa-check"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {companyList.map((company: Company, index) => (
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

export default CompanyCarts;
