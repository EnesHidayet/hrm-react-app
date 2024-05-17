// import axios from "axios";
// import { useEffect, useState } from "react";

// const Equipment = () => {
//   const storedToken = sessionStorage.getItem("token");

//   const [userFullName, setUserFullName] = useState("");

//   const [isClosed, setIsClosed] = useState(true);

//   const [isChecked, setIsChecked] = useState(false);

//   const [equipment, setEquipment] = useState([]);

//   function HandleShowEquipments() {
//     if (equipment.length === 0) {
//       axios
//         .get(
//           "http://localhost:8081/hrm/user/getEquipmentByFullName" +
//             "?" +
//             "userName=" +
//             userFullName
//         )
//         .then((response) => {
//           console.log("eq: ", response.data);
//           setEquipment(...equipment, response.data);
//         });
//     } else {
//       console.log("eq: ", equipment);
//       setIsClosed(isClosed !== true ? true : false);
//     }
//   }

//   function HandleCloseEquipments() {
//     console.log(isClosed);
//     setIsClosed(!isClosed);
//   }

//   function HandleUpdateEquipments(props) {
//     console.log("checkbox: ", props);
//     // const checkbox = document.querySelector("#indeterminate");
//     // checkbox.indeterminate = true;
//     if (props) {
//       setIsChecked(true);
//     } else {
//       setIsChecked(false);
//     }
//   }

//   // function handleAuthId({ authId}) {

//   //   axios
//   //     .get("http://localhost:8081/hrm/user/getAllLeaves")
//   //     .then((response) => {
//   //       setAuthId(response.data);
//   //     });
//   // }

//   useEffect(() => {
//     console.log("StoredToken", storedToken);
//     if (storedToken) {
//       // setToken(storedToken);
//       console.log("t", storedToken);
//       axios
//         .get(
//           "http://localhost:8080/hrm/auth/get-full-name-from-token" +
//             "?" +
//             "token=" +
//             storedToken
//         )
//         .then((response) => {
//           setUserFullName(response.data);
//         });
//     }
//   }, [storedToken]);

//   console.log("UserAdı: ", userFullName);
//   console.log("equipment: ", equipment);
//   console.log("issClosed: ", isClosed);

//   // Token'ı kullanın
//   return (
//     <>
//       <div>
//         <header className="navbar">
//           <nav>
//             <ul>
//               <li className="company-name">
//                 <strong style={{ color: "white" }}>
//                   Welcome {userFullName}
//                 </strong>
//               </li>
//             </ul>

//             <ul>
//               <li>
//                 <a href="#" className="dropdown-link">
//                   <details className="dropdown">
//                     <summary>Dropdown</summary>
//                     <ul>
//                       <li>
//                         <a
//                           href="#"
//                           style={{ backgroundColor: "white", color: "#48536B" }}
//                         >
//                           Logout
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           style={{ backgroundColor: "white", color: "#48536B" }}
//                         >
//                           Account
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           style={{ backgroundColor: "white", color: "#48536B" }}
//                         >
//                           Home
//                         </a>
//                       </li>
//                     </ul>
//                   </details>
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </header>
//         <div
//           style={{
//             textAlign: "center",
//             marginTop: "20px",
//             marginBottom: "20px",
//           }}
//         >
//           <button
//             className="outline"
//             onClick={HandleShowEquipments}
//             style={{ marginRight: "20px" }}
//           >
//             Show equipments
//           </button>
//           <button
//             className="outline"
//             onClick={HandleCloseEquipments}
//             style={{
//               marginRight: "20px",
//               color: "#F06048",
//               borderColor: "#F06048",
//             }}
//           >
//             Close equipments
//           </button>
//           <label style={{ display: "inline-block", marginRight: "20px" }}>
//             <input
//               style={{ color: "#48536B" }}
//               type="checkbox"
//               id="indeterminate"
//               name="indeterminate"
//               onChange={(e) => HandleUpdateEquipments(e.target.checked)}
//             />
//             Not Accept
//           </label>
//         </div>

//         {isClosed && (
//           <main
//             className="container"
//             style={{
//               border: "1px dotted #48536B",
//               padding: "10px",
//               borderRadius: "10px",
//             }}
//           >
//             <table>
//               <thead style={{ borderBottom: "1px dotted #48536B" }}>
//                 <tr className="pico-muted-border-color">
//                   <th
//                     scope="col"
//                     style={{
//                       backgroundColor: "#121210",
//                       color: "#48536B",
//                       borderColor: "#121210",
//                     }}
//                   >
//                     Name
//                   </th>
//                   <th
//                     scope="col"
//                     style={{
//                       backgroundColor: "#121210",
//                       color: "#48536B",
//                       borderColor: "#121210",
//                     }}
//                   >
//                     Description
//                   </th>
//                   <th
//                     scope="col"
//                     style={{
//                       backgroundColor: "#121210",
//                       color: "#48536B",
//                       borderColor: "#121210",
//                     }}
//                   >
//                     Serial Number
//                   </th>
//                   <th
//                     scope="col"
//                     style={{
//                       backgroundColor: "#121210",
//                       color: "#48536B",
//                       borderColor: "#121210",
//                     }}
//                   >
//                     About
//                   </th>
//                   <th
//                     scope="col"
//                     style={{
//                       backgroundColor: "#121210",
//                       color: "#48536B",
//                       borderColor: "#121210",
//                     }}
//                   >
//                     Given Date
//                   </th>
//                   <th
//                     scope="col"
//                     style={{
//                       backgroundColor: "#121210",
//                       color: "#48536B",
//                       borderColor: "#121210",
//                     }}
//                   >
//                     Return Date
//                   </th>
//                   <th
//                     scope="col"
//                     style={{
//                       backgroundColor: "#121210",
//                       color: "#48536B",
//                       borderColor: "#121210",
//                     }}
//                   >
//                     User Name
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {equipment.map((equipment) => (
//                   <tr key={equipment.id}>
//                     <>
//                       <td
//                         style={{
//                           backgroundColor: "#121210",
//                           color: "#48536B",
//                           borderColor: "#121210",
//                         }}
//                       >
//                         {equipment.name}
//                       </td>
//                       <td
//                         style={{
//                           backgroundColor: "#121210",
//                           color: "#48536B",
//                           borderColor: "#121210",
//                         }}
//                       >
//                         {equipment.description}
//                       </td>
//                       <td
//                         style={{
//                           backgroundColor: "#121210",
//                           color: "#48536B",
//                           borderColor: "#121210",
//                         }}
//                       >
//                         {equipment.serialNumber}
//                       </td>
//                       <td
//                         style={{
//                           backgroundColor: "#121210",
//                           color: "#48536B",
//                           borderColor: "#121210",
//                         }}
//                       >
//                         {equipment.about}
//                       </td>
//                       <td
//                         style={{
//                           backgroundColor: "#121210",
//                           color: "#48536B",
//                           borderColor: "#121210",
//                         }}
//                       >
//                         {equipment.givenDate}
//                       </td>
//                       <td
//                         style={{
//                           backgroundColor: "#121210",
//                           color: "#48536B",
//                           borderColor: "#121210",
//                         }}
//                       >
//                         {equipment.returnDate}
//                       </td>
//                       <td
//                         style={{
//                           backgroundColor: "#121210",
//                           color: "#48536B",
//                           borderColor: "#121210",
//                         }}
//                       >
//                         {equipment.userName}
//                       </td>
//                     </>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </main>
//         )}
//         {console.log("HEYY", equipment)}
//         {console.log("ISCHECKED", isChecked)}
//         {isChecked && <InputComponent equipments={equipment} />}
//       </div>
//     </>
//   );
// };

// function InputComponent(equipments) {
//   const [note, setNote] = useState();
//   const [serialNumber, setSerialNumber] = useState("");

//   console.log("Equipment Id : ", equipments);
//   console.log("X : ");
//   // const [authId, setAuthId] = useState(0);

//   function handleSubmit({ e }) {
//     // axios.get("http://localhost:8080/hrm/auth/get-auth-id-from-token" + "?token=" + token).then((response) => {
//     //   // onHandleAuthId(response.data);
//     //   setAuthId(response.data);
//     // })
//     console.log("EQ : ", equipments);
//     console.log("E : ", e);
//     equipments.equipments.map((equipment) => {
//       if (equipment.serialNumber === serialNumber) {
//         console.log("Y : ", equipment.id);
//         axios
//           .post("http://localhost:8081/hrm/user/addNote", {
//             note,
//             equipmentId: equipment.id,
//           })
//           .then((response) => {
//             console.log(response);
//           });
//       }
//     });

//     // axios.post("http://localhost:8081/hrm/user/addNote", {note, equipment}).then((response) => {
//     //   console.log(response);
//     // })
//   }

//   return (
//     <>
//       <body>
//         <main className="container">
//           <label> Please enter equipment serial number : </label>
//           <input
//             type="text"
//             style={{ background: "none" }}
//             onChange={(e) => setSerialNumber(e.target.value)}
//           />
//           <label> Please enter your note : </label>
//           <input
//             type="text"
//             style={{ background: "none" }}
//             onChange={(e) => setNote(e.target.value)}
//           />
//           <button onClick={() => handleSubmit(equipments)}>Submit</button>
//         </main>
//       </body>
//       <aside style={{ borderBottom: "1px solid gray" }}>
//         <nav>
//           <ul>
//             <li>
//               <p></p>
//             </li>
//             <li>
//               <p></p>
//             </li>
//             <li>
//               <p style={{ textAlign: "center" }}>HRM Human Resorce App</p>
//             </li>
//           </ul>
//         </nav>
//       </aside>
//     </>
//   );

// }

// export default Equipment;

import axios from "axios";
import { useEffect, useState } from "react";
const Equipment = () => {
  const storedToken = sessionStorage.getItem("token");

  const [userFullName, setUserFullName] = useState("");

  const [isClosed, setIsClosed] = useState(true);

  const [isChecked, setIsChecked] = useState(false);

  const [equipment, setEquipment] = useState([]);

  const [isDemanded, setIsDemanded] = useState(false);

  function HandleShowEquipments() {
    if (equipment.length === 0) {
      axios
        .get(
          "http://localhost:8081/hrm/user/getEquipmentByFullName" +
            "?" +
            "userName=" +
            userFullName
        )
        .then((response) => {
          console.log("eq: ", response.data);
          setEquipment(...equipment, response.data);
        });
    } else {
      console.log("eq: ", equipment);
      setIsClosed(isClosed !== true ? true : false);
    }
  }

  function HandleCloseEquipments() {
    console.log(isClosed);
    setIsClosed(!isClosed);
  }

  function HandleUpdateEquipments(props) {
    console.log("checkbox: ", props);
    // const checkbox = document.querySelector("#indeterminate");
    // checkbox.indeterminate = true;
    if (props) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }

  function handleDemandEquipments() {

    setIsDemanded(true);
  }

  // function handleAuthId({ authId}) {

  //   axios
  //     .get("http://localhost:8081/hrm/user/getAllLeaves")
  //     .then((response) => {
  //       setAuthId(response.data);
  //     });
  // }

  useEffect(() => {
    // Sayfanın URL'sini al
    var currentPageURL = window.location.href;

    // Belirli bir URL ile eşleştiğinde CSS dosyasını eklemek için koşul belirleyin
    if (currentPageURL === "http://localhost:5173/user-Demo/equipment") {
      // CSS dosyasını oluştur
      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.pumpkin.min.css";

      // CSS dosyasını head elementine ekle
      document.head.appendChild(link);
    }

    console.log("StoredToken", storedToken);
    if (storedToken) {
      // setToken(storedToken);
      console.log("t", storedToken);
      axios
        .get(
          "http://localhost:8080/hrm/auth/get-full-name-from-token" +
            "?" +
            "token=" +
            storedToken
        )
        .then((response) => {
          setUserFullName(response.data);
        });
    }
  }, [storedToken]);

  console.log("UserAdı: ", userFullName);
  console.log("equipment: ", equipment);
  console.log("issClosed: ", isClosed);

  // Token'ı kullanın
  return (
    // <>
    //   <div>
    //     {/* <header className="navbar">
    //       <nav>
    //         <ul>
    //           <li className="company-name">
    //             <strong style={{ color: "white" }}>
    //               Welcome {userFullName}
    //             </strong>
    //           </li>
    //         </ul>

    //         <ul>
    //           <li>
    //             <a href="#" className="dropdown-link">
    //               <details className="dropdown">
    //                 <summary>Dropdown</summary>
    //                 <ul>
    //                   <li>
    //                     <a
    //                       href="#"
    //                       style={{ backgroundColor: "white", color: "#48536B" }}
    //                     >
    //                       Logout
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a
    //                       href="#"
    //                       style={{ backgroundColor: "white", color: "#48536B" }}
    //                     >
    //                       Account
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a
    //                       href="#"
    //                       style={{ backgroundColor: "white", color: "#48536B" }}
    //                     >
    //                       Home
    //                     </a>
    //                   </li>
    //                 </ul>
    //               </details>
    //             </a>
    //           </li>
    //         </ul>
    //       </nav>
    //     </header> */}
    //     <div
    //       style={{
    //         textAlign: "center",
    //         marginTop: "20px",
    //         marginBottom: "20px",
    //       }}
    //     >
    //       <button
    //         className="outline"
    //         onClick={HandleShowEquipments}
    //         style={{ marginRight: "20px" }}
    //       >
    //         Show equipments
    //       </button>
    //       <button
    //         className="outline"
    //         onClick={HandleCloseEquipments}
    //         style={{
    //           marginRight: "20px",
    //           color: "#F06048",
    //           borderColor: "#F06048",
    //         }}
    //       >
    //         Close equipments
    //       </button>
    //       <label style={{ display: "inline-block", marginRight: "20px" }}>
    //         <input
    //           style={{ color: "#48536B" }}
    //           type="checkbox"
    //           id="indeterminate"
    //           name="indeterminate"
    //           onChange={(e) => HandleUpdateEquipments(e.target.checked)}
    //         />
    //         Not Accept
    //       </label>
    //     </div>

    //     {isClosed && (
    //       <main
    //         className="container"
    //         style={{
    //           border: "1px dotted #48536B",
    //           padding: "10px",
    //           borderRadius: "10px",
    //         }}
    //       >
    //         <table>
    //           <thead style={{ borderBottom: "1px dotted #48536B" }}>
    //             <tr className="pico-muted-border-color">
    //               <th
    //                 scope="col"
    //                 style={{
    //                   backgroundColor: "#121210",
    //                   color: "#48536B",
    //                   borderColor: "#121210",
    //                 }}
    //               >
    //                 Name
    //               </th>
    //               <th
    //                 scope="col"
    //                 style={{
    //                   backgroundColor: "#121210",
    //                   color: "#48536B",
    //                   borderColor: "#121210",
    //                 }}
    //               >
    //                 Description
    //               </th>
    //               <th
    //                 scope="col"
    //                 style={{
    //                   backgroundColor: "#121210",
    //                   color: "#48536B",
    //                   borderColor: "#121210",
    //                 }}
    //               >
    //                 Serial Number
    //               </th>
    //               <th
    //                 scope="col"
    //                 style={{
    //                   backgroundColor: "#121210",
    //                   color: "#48536B",
    //                   borderColor: "#121210",
    //                 }}
    //               >
    //                 About
    //               </th>
    //               <th
    //                 scope="col"
    //                 style={{
    //                   backgroundColor: "#121210",
    //                   color: "#48536B",
    //                   borderColor: "#121210",
    //                 }}
    //               >
    //                 Given Date
    //               </th>
    //               <th
    //                 scope="col"
    //                 style={{
    //                   backgroundColor: "#121210",
    //                   color: "#48536B",
    //                   borderColor: "#121210",
    //                 }}
    //               >
    //                 Return Date
    //               </th>
    //               <th
    //                 scope="col"
    //                 style={{
    //                   backgroundColor: "#121210",
    //                   color: "#48536B",
    //                   borderColor: "#121210",
    //                 }}
    //               >
    //                 User Name
    //               </th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {equipment.map((equipment) => (
    //               <tr key={equipment.id}>
    //                 <>
    //                   <td
    //                     style={{
    //                       backgroundColor: "#121210",
    //                       color: "#48536B",
    //                       borderColor: "#121210",
    //                     }}
    //                   >
    //                     {equipment.name}
    //                   </td>
    //                   <td
    //                     style={{
    //                       backgroundColor: "#121210",
    //                       color: "#48536B",
    //                       borderColor: "#121210",
    //                     }}
    //                   >
    //                     {equipment.description}
    //                   </td>
    //                   <td
    //                     style={{
    //                       backgroundColor: "#121210",
    //                       color: "#48536B",
    //                       borderColor: "#121210",
    //                     }}
    //                   >
    //                     {equipment.serialNumber}
    //                   </td>
    //                   <td
    //                     style={{
    //                       backgroundColor: "#121210",
    //                       color: "#48536B",
    //                       borderColor: "#121210",
    //                     }}
    //                   >
    //                     {equipment.about}
    //                   </td>
    //                   <td
    //                     style={{
    //                       backgroundColor: "#121210",
    //                       color: "#48536B",
    //                       borderColor: "#121210",
    //                     }}
    //                   >
    //                     {equipment.givenDate}
    //                   </td>
    //                   <td
    //                     style={{
    //                       backgroundColor: "#121210",
    //                       color: "#48536B",
    //                       borderColor: "#121210",
    //                     }}
    //                   >
    //                     {equipment.returnDate}
    //                   </td>
    //                   <td
    //                     style={{
    //                       backgroundColor: "#121210",
    //                       color: "#48536B",
    //                       borderColor: "#121210",
    //                     }}
    //                   >
    //                     {equipment.userName}
    //                   </td>
    //                 </>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>
    //       </main>
    //     )}
    //     {console.log("HEYY", equipment)}
    //     {console.log("ISCHECKED", isChecked)}
    //     {isChecked && <InputComponent equipments={equipment} />}
    //   </div>
    // </>
    <>
      <header style={{ borderBottom: "1px solid gray", padding: "10px" }}>
        <nav>
          <ul>
            <li>
              <h2>Welcome {userFullName} 👐</h2>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" className="secondary">
                Services
              </a>
            </li>
            <li>
              <details className="dropdown">
                <summary>Account</summary>
                <ul dir="rtl">
                  <li>
                    <a href="#">Profile</a>
                  </li>
                  <li>
                    <a href="#">Settings</a>
                  </li>
                  <li>
                    <a href="#">Security</a>
                  </li>
                  <li>
                    <a href="#">Logout</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <button
            className="outline"
            onClick={HandleShowEquipments}
            style={{ marginRight: "20px" }}
          >
            Show equipments
          </button>

          <button
            className="outline"
            onClick={HandleCloseEquipments}
            style={{
              marginRight: "20px",
              color: "#F06048",
              borderColor: "#F06048",
            }}
          >
            Close equipments
          </button>
          <button
            className="outline"
            onClick={handleDemandEquipments}
            style={{
              marginRight: "20px",
              color: "#00CC88",
              borderColor: "#00CC88",
            }}
          >
            Demand equipment
          </button>
          <label style={{ display: "inline-block", marginRight: "20px" }}>
            <input
              style={{ color: "#48536B" }}
              type="checkbox"
              id="indeterminate"
              name="indeterminate"
              onChange={(e) => HandleUpdateEquipments(e.target.checked)}
            />
            Not Accept
          </label>
        </div>
        {isClosed && (
          <main
            className="container"
            style={{
              border: "1px dotted #48536B",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <table>
              <thead style={{ borderBottom: "1px dotted #48536B" }}>
                <tr className="pico-muted-border-color">
                  <th
                    scope="col"
                    style={{
                      color: "#48536B",
                    }}
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    style={{
                      color: "#48536B",
                    }}
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    style={{
                      color: "#48536B",
                    }}
                  >
                    Serial Number
                  </th>
                  <th
                    scope="col"
                    style={{
                      color: "#48536B",
                    }}
                  >
                    About
                  </th>
                  <th
                    scope="col"
                    style={{
                      color: "#48536B",
                    }}
                  >
                    Given Date
                  </th>
                  <th
                    scope="col"
                    style={{
                      color: "#48536B",
                    }}
                  >
                    Return Date
                  </th>
                  <th
                    scope="col"
                    style={{
                      color: "#48536B",
                    }}
                  >
                    User Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {equipment.map((equipment) => (
                  <tr key={equipment.id}>
                    <>
                      <td
                        style={{
                          color: "#48536B",
                        }}
                      >
                        {equipment.name}
                      </td>
                      <td
                        style={{
                          color: "#48536B",
                        }}
                      >
                        {equipment.description}
                      </td>
                      <td
                        style={{
                          color: "#48536B",
                        }}
                      >
                        {equipment.serialNumber}
                      </td>
                      <td
                        style={{
                          color: "#48536B",
                        }}
                      >
                        {equipment.about}
                      </td>
                      <td
                        style={{
                          color: "#48536B",
                        }}
                      >
                        {equipment.givenDate}
                      </td>
                      <td
                        style={{
                          color: "#48536B",
                        }}
                      >
                        {equipment.returnDate}
                      </td>
                      <td
                        style={{
                          color: "#48536B",
                        }}
                      >
                        {equipment.userName}
                      </td>
                    </>
                  </tr>
                ))}
              </tbody>
            </table>
          </main>
        )}
        {isChecked && <InputComponent equipments={equipment} />}
        {isDemanded && <DemandComponent />}
      </main>

      <footer></footer>
    </>
  );
};

const noteList = [];

function InputComponent(equipments) {
  // const [note, setNote] = useState("");
  // const [notes, setNotes] = useState([]);
  const [notes, setNotes] = useState("");
  // const [serialNumber, setSerialNumber] = useState("");
  const [chosenSerialNumbers, setChosenSerialNumbers] = useState([]);

  console.log("Equipment Id : ", equipments);
  console.log("X : ");
  // const [authId, setAuthId] = useState(0);

  // function handleSubmit({ e }) {
  //   // axios.get("http://localhost:8080/hrm/auth/get-auth-id-from-token" + "?token=" + token).then((response) => {
  //   //   // onHandleAuthId(response.data);
  //   //   setAuthId(response.data);
  //   // })
  //   console.log("EQ : ", equipments);
  //   console.log("E : ", e);
  //   equipments.equipments.map((equipment) => {
  //     if (equipment.serialNumber === serialNumber) {
  //       console.log("Y : ", equipment.id);
  //       axios
  //         .post("http://localhost:8081/hrm/user/addNote", {
  //           note,
  //           equipmentId: equipment.id,
  //         })
  //         .then((response) => {
  //           console.log(response);
  //         });
  //     }
  //   });

  //   // axios.post("http://localhost:8081/hrm/user/addNote", {note, equipment}).then((response) => {
  //   //   console.log(response);
  //   // })
  // }

  function handleSubmit() {
    console.log("Chosen Serial Numbers : ", chosenSerialNumbers);
    console.log("Notes : ", noteList);
    axios
      .post("http://localhost:8081/hrm/user/addNote", {
        notes: noteList,
        equipmentSerialNumbers: chosenSerialNumbers,
      })
      .then((response) => {
        console.log(response);
      });
  }

  function handleCheckBox(e) {
    if (e.target.checked) {
      setChosenSerialNumbers([...chosenSerialNumbers, e.target.value]);
    } else {
      setChosenSerialNumbers(
        chosenSerialNumbers.filter((x) => x !== e.target.value)
      );
    }
  }

  function handleNotes(e) {
    setNotes(e.target.value);
  }

  function handleEquipmentNotes() {
    noteList.push(notes);
    setNotes("");
  }

  return (
    <>
      <body>
        <main className="container">
          <label> Please select equipment serial number : </label>
          {/* <input
            type="text"
            style={{ background: "none" }}
            onChange={(e) => setSerialNumber(e.target.value)}
          /> */}
          <details className="dropdown">
            <summary></summary>
            <ul>
              {equipments.equipments.map((equipment) => (
                // <li>
                //   <label>
                //     <input
                //       type="radio"
                //       name="phase"
                //       value={equipment.serialNumber}
                //       onChange={(e) => setSerialNumber(e.target.value)}
                //     />
                //     {equipment.serialNumber}
                //   </label>
                // </li>

                <li key={equipment.id}>
                  <label>
                    <input
                      type="checkbox"
                      name="solid"
                      value={equipment.serialNumber}
                      onChange={handleCheckBox}
                    />
                    {/* setChosenSerialNumbers([...chosenSerialNumbers, equipment.serialNumber]) */}
                    {equipment.serialNumber}
                  </label>
                </li>
              ))}
              {/* <li>
                <label>
                  <input type="checkbox" name="liquid" />
                  Liquid
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="gas" />
                  Gas
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="plasma" />
                  Plasma
                </label>
              </li> */}
            </ul>
          </details>

          {chosenSerialNumbers.length > 0 && (
            <>
              <label> Please enter your note : </label>
              <input
                type="text"
                style={{ background: "none" }}
                value={notes}
                onChange={handleNotes}
              />

              <button
                style={{ marginRight: "15px" }}
                onClick={handleEquipmentNotes}
              >
                Add
              </button>
            </>
          )}
          {/* <label> Please enter your note : </label>
          <input
            type="text"
            style={{ background: "none" }}
            onChange={(e) => setNote(e.target.value)}
          /> */}

          <button onClick={() => handleSubmit(equipments)}>Submit</button>
        </main>
      </body>
      <aside style={{ borderBottom: "1px solid gray" }}>
        <nav>
          <ul>
            <li>
              <p></p>
            </li>
            <li>
              <p></p>
            </li>
            <li>
              <p style={{ textAlign: "center" }}></p>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

function DemandComponent() {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [about, setAbout] = useState("");
  const [username, setUsername] = useState("");


  function handleDemandSubmit() {
    

    axios
      .post("http://localhost:8081/hrm/user/demand-equipment", {
        name: name,
        description: description,
        about: about,
        userName: username
      })
      .then((response) => {
        
        console.log(response);
      }).catch((error) => {
        
        console.log(error);
      });

  }

  return (
    <>
      <div className="container">
        <label>Equipment Name:</label>
        <input type="text" name="text" placeholder="Equipment Name" onChange={(e) => setName(e.target.value)}/>
        <label>Equipment Description:</label>
        <input type="text" name="text" placeholder="Equipment Description" onChange={(e) => setDescription(e.target.value)}/>
        <label>About:</label>
        <input type="text" name="text" placeholder="About" onChange={(e) => setAbout(e.target.value)}/>
        <label>Username:</label>
        <input type="text" name="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
      
      <button onClick={handleDemandSubmit}>Submit</button>
      </div>
    </>
  );
}

export default Equipment;
