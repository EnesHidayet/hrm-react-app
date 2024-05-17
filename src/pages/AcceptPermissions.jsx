import axios from "axios";
import { useEffect, useState } from "react";

export default function AcceptPermissions() {
  const [user, setUser] = useState([]);
  const [choosen, setChoosen] = useState("");
  const storedToken = sessionStorage.getItem("token");
  const index3 = [];
  // const user = [];
  // let user;
  // const getUsers = () => axios.get("http://localhost:8081/hrm/user/getAllLeaves").then((response) => setUser(response.data));

  useEffect(() => {
    // Sayfanın URL'sini al
    var currentPageURL = window.location.href;

    // Belirli bir URL ile eşleştiğinde CSS dosyasını eklemek için koşul belirleyin
    if (
      currentPageURL === "http://localhost:5173/user-Demo/accept-permissions"
    ) {
      // CSS dosyasını oluştur
      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.pumpkin.min.css";

      // CSS dosyasını head elementine ekle
      document.head.appendChild(link);
    }

    // const getUsers = () => axios.get("http://localhost:8081/hrm/user/getAllLeaves").then((response) => setUser(response.data));
    // const getUsers = () => axios.get("http://localhost:8081/hrm/user/getAllLeaves").then((response) => user.push(response.data)
    // )
    //  axios.get("http://localhost:8081/hrm/user/getAllLeaves").then((response) => {
    //    user = response.data
    //  })
    axios
      .get(
        "http://localhost:8081/hrm/user/get-all-leaves-updated" +
          "?" +
          "token=" +
          storedToken
      )
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        alert("User not authorized");
      });
  }, []);

  function HandleAccept(index) {
    console.log("U", user);
    axios
      .post("http://localhost:8081/hrm/user/acceptLeave/" + user[index].id)
      .then((response) => {
        console.log(response);
      });
  }

  function HandleDeny(index) {
    axios
      .post("http://localhost:8081/hrm/user/denyLeave/" + user[index].id)
      .then((response) => {
        console.log(response);
      });
  }

  function HandleSearch(e) {
    e.preventDefault();
    setChoosen(e.target.value);
  }

  return (
    // <div className="container">
    //   <p className="h2 text-center">Accept Permission Page</p>

    //   {/* {getUsers} */}
    //   <ul className="list-group">
    //     {user.map((user, index) => (
    //       <li className="list-group-item border" key={index}>
    //         FirstName: {user.firstName}, LastName: {user.lastName}, Description:{" "}
    //         {user.description},StartDate: {user.startDate}, EndDate:{" "}
    //         {user.endDate}
    //         <button
    //           type="button"
    //           className="btn btn-primary ms-2 me-2"
    //           onClick={() => HandleAccept(index)}
    //         >
    //           Accept
    //         </button>
    //         <button
    //           type="button"
    //           className="btn btn-danger"
    //           onClick={() => HandleDeny(index)}
    //         >
    //           Deny
    //         </button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <>
      <header style={{ borderBottom: "1px solid gray", padding: "10px" }}>
        <nav>
          <ul>
            <li>
              <h1>HRM</h1>
            </li>
          </ul>
          <ul>
            <li>
              
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
      <main className="container" style={{ marginTop: "20px" }}>
        <input
          type="search"
          name="search"
          placeholder="Enter a employee"
          aria-label="Search"
          value={choosen}
          onChange={(e) => setChoosen(e.target.value)}
          onSubmit={HandleSearch}
        />

        {user
          .filter((user, index) => {
            if (
              user.firstName.toLowerCase() === choosen.toLocaleLowerCase() ||
              user.lastName.toLowerCase() === choosen.toLocaleLowerCase()
            ) {
              index3.push(index);
              return user;
            }
          })
          .map((user, index) => (
            <>
              <table
                key={index}
                style={{ marginLeft: "55px", marginRight: "auto" }}
              >
                <thead data-theme="dark">
                  <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Description</th>
                    <th>StartDate</th>
                    <th>EndDate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={index}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.description}</td>
                    <td>{user.startDate}</td>
                    <td>{user.endDate}</td>
                    <td>
                      <button
                        style={{
                          backgroundColor: "",
                          background: "none",
                          color: "#525F7A",
                          marginRight: "15px",
                        }}
                        onClick={() => HandleAccept(index3)}
                      >
                        Accept
                      </button>

                      <button
                        style={{
                          backgroundColor: "",
                          background: "none",
                          color: "#525F7A",
                          borderColor: "#F06048",
                        }}
                        onClick={() => HandleAccept(index3)}
                      >
                        Deny
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          ))}
      </main>
    </>
  );
}
