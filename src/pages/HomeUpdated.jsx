import { useEffect, useState } from "react";
import Typedd from "./Typedd";
import axios from "axios";

export default function HomeUpdated() {
  const [comments, setComments] = useState([
    {
      id: "",
      name: "",
      avatarSrc: "",
      time: "",
      content: "",
    },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/hrm/user/find-all-comments")
      .then((response) => {
        console.log("Res data : ", response.data);
        setComments(response.data);
      });
  }, []);

  function handleThemeChange() {
    document.body.classList.toggle("dark-mode");
    
  }
  return (
    <>
      <div>
        <header className="navbar">
          <nav>
            <ul>
              <li className="company-name">
                <strong>HRM</strong>
              </li>
              <li>
                <a href="#" className="secondary">
                  About
                </a>
                <a href="#" className="secondary">
                  Pricing
                </a>
              </li>
            </ul>
            <ul>
              <div>
                {/*  */}
                <a id="toggle-theme"
                  onClick={handleThemeChange}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ marginRight: "100px" }}
                  >
                    dark_mode
                  </span>
                </a>
              </div>
            </ul>

            <ul>
              <li>
                <a href="#" className="dropdown-link">
                  <details className="dropdown">
                    {/* style={{backgroundColor: "#121210"}} */}
                    <summary
                      style={{
                        backgroundColor: " #CCC6B4",
                        borderColor: " #CCC6B4",
                        color: "#5d6b89",
                      }}
                    >
                      Pages
                    </summary>
                    <ul
                      style={{
                        backgroundColor: " #CCC6B4",
                        borderColor: " #CCC6B4",
                      }}
                    >
                      <li
                        style={{
                          backgroundColor: " #CCC6B4",
                          borderColor: " #CCC6B4",
                        }}
                      >
                        <a
                          href="#"
                          style={{
                            backgroundColor: " #CCC6B4",
                            color: "#5d6b89",
                          }}
                        >
                          Logout
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          style={{
                            backgroundColor: " #CCC6B4",
                            color: "#5d6b89",
                          }}
                        >
                          Account
                        </a>
                      </li>
                    </ul>
                  </details>
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <div className="grid">
            <div className="sidebar">
              <Typedd />
            </div>
            <div>
              <div className="grid">
                <div>
                  <ul>
                    <li
                      style={{
                        listStyleType: "none",
                        textAlign: "center",
                        marginTop: "100%",
                        border: "1px solid black",
                        padding: "10px",
                        borderRadius: "10px",
                        backgroundColor: "#00895A",
                      }}
                    >
                      <a
                        href="#"
                        style={{
                          textDecoration: "none",
                          color: "white",
                          backgroundColor: "#00895A",
                        }}
                      >
                        Register
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li
                      style={{
                        listStyleType: "none",
                        textAlign: "center",
                        marginTop: "100%",
                        border: "1px solid black",
                        marginRight: "15px",
                        padding: "10px",
                        borderRadius: "10px",
                        backgroundColor: "#2060DF",
                      }}
                    >
                      <a
                        href="#"
                        style={{
                          textDecoration: "none",
                          color: "white",
                          cursor: "pointer",
                          backgroundColor: "#2060DF",
                        }}
                      >
                        Login
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="grid">
            {/* <div><article>I’m a card!</article></div>
            <div><article>I’m a card!</article></div>
            <div><article>I’m a card!</article></div> */}

            {/* {comments.map((comment) => (
              <Comment comment={comment} key={comment.id}/>
            ))} */}
            <Comment commentss={comments} />
          </div>
        </main>
        {/* <footer>
        <div style={{ height: "20px" }}>
          <p
            style={{
              textAlign: "center",
              borderTop: "1px solid gray",
              padding: "20px",
            }}
          >
            Copyright &copy; 2024
          </p>
        </div>
      </footer> */}
      </div>
      <p
        style={{
          textAlign: "center",
          borderTop: "1px solid gray",
          padding: "20px",
          marginBottom: "0px",
        }}
      >
        CopyRight &copy; 2024
      </p>
    </>
  );
}

function Comment({ commentss }) {
  console.log("Com: ", commentss);
  return (
    <>
      {commentss.map((comment) => (
        <article key={comment.id} style={{ background: "none"}}>
          <img
            src={comment.avatarSrc}
            alt="img"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />
          <span style={{ color: "#5d6b89", fontSize: "35px" }}>
            {comment.name}
          </span>
          <p
            style={{
              textAlign: "center",
              fontStyle: "italic",
              borderRadius: "10px",
              padding: "10px",
              margin: "10px",
              
              color: "#5d6b89",
            }}
          >
            {comment.content}
          </p>
          <p
            style={{
              textAlign: "right",
              borderRadius: "10px",
              padding: "10px",
              margin: "10px",
              fontSize: "12px",
              color: "#5d6b89",
            }}
          >
            {comment.time}
          </p>
        </article>
      ))}
    </>
  );
}
