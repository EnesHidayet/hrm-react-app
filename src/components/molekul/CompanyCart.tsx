import React from "react";

function CompanyCart({ props }) {
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
          {props.map((item, index) => (
            <tr key={index}>
              {/* INDEX */}
              <td className="text-center align-content-center">{index}</td>
              {/* ŞİRKET ADI */}
              <td className="text-center align-content-center">
                {item.sirketAdi}
              </td>
              {/* YONETICI ADI */}
              <td className="text-center align-content-center">
                {item.yoneticiAdi}
              </td>
              {/* SIRKET MAILI - YONETICI ONAYI */}
              <td className="text-center align-content-center">
                <div className="text-center">
                  {item.yoneticiMail}&nbsp;&nbsp;
                  {item.yoneticiMailOnay ? (
                    <i className={"fa fa-check-circle"}></i>
                  ) : (
                    <i className={"fa fa-clock"} style={{ color: "blue" }}></i>
                  )}
                </div>
              </td>
              {/* YILLIK-AYLIK PLAN */}
              <td className="text-center align-content-center">
                <i className="">{item.plan}</i>
              </td>
              {/* ONAY DURUMU */}
              <td className="text-center align-content-center">
                <div className="fa-2x">
                  {item.siteYoneticisiOnayi ? (
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
