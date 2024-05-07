import React, { useEffect, useState } from "react";
import {
  fetchApproveCompany,
  fetchCompanyList,
} from "../../store/features/companySlice";
import { RootState, AppDispatch } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { Company, baseResponseEntity, CompanyState } from "../../types";

function CompanyCart() {
  const dispatch: AppDispatch = useDispatch();

  const handleSendRequest = (company: Company) => {
    company.yoneticiMailOnay = true;
    fetchApproveCompany(company);
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
            <tr key={index}>
              {/* INDEX */}
              <td className="text-center align-content-center">{index}</td>
              {/* ŞİRKET ADI */}
              <td className="text-center align-content-center">
                {company.sirketAdi}
              </td>
              {/* YONETICI ADI */}
              <td className="text-center align-content-center">
                {company.yoneticiAdi}
              </td>
              {/* SIRKET MAILI - YONETICI ONAYI */}
              <td className="text-center align-content-center">
                <div className="text-center">
                  {company.yoneticiMail}&nbsp;&nbsp;
                  {company.yoneticiMailOnay ? (
                    <i className={"fa fa-check-circle"}></i>
                  ) : (
                    <i className={"fa fa-clock"} style={{ color: "blue" }}></i>
                  )}
                </div>
              </td>
              {/* YILLIK-AYLIK PLAN */}
              <td className="text-center align-content-center">
                <i className="">{company.plan}</i>
              </td>
              {/* ONAY DURUMU */}
              <td className="text-center align-content-center">
                <div className="fa-2x">
                  {company.siteYoneticisiOnayi ? (
                    <i
                      className="fa-solid fa-check-circle"
                      style={{ color: "green", fontSize: "1.5rem" }}
                    ></i>
                  ) : (
                    <div className="flex-nowrap">
                      <i
                        className="fa-solid fa-xmark"
                        style={{ color: "red", fontSize: "1.5rem" }}
                      ></i>
                      <div>
                        <button
                          className="btn btn-primary"
                          onClick={() => handleSendRequest(company)}
                        >
                          onayla
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CompanyCart;
