import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Badge, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { type } from "@testing-library/user-event/dist/type";
import { changeNumber, changeTitle, getdata } from "./redux/action";

function App() {
  const [select, setSelect] = useState(null);
  const [Text, setText] = useState("");
  const dispatch = useDispatch();
  // const { number } = useSelector((state) => state);
  const { data, loading, error } = useSelector((state) => state.posts);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("posts"));
    if (!data) {
      dispatch(getdata());
    }
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : error ? (
        <h1 className="mt-5">{error}</h1>
      ) : (
        data.map((item, index) => {
          if (select === item.id) {
            return (
              <div>
                <input value={Text} onChange={(e) => setText(e.target.value)} />
                <Button
                  onClick={() => {
                    dispatch(changeTitle(index, Text));
                    setSelect(null);
                  }}
                >
                  edit
                </Button>
              </div>
            );
          } else {
            return (
              <p
                key={item.id}
                onClick={() => {
                  setText(item.title);
                  setSelect(item.id);
                }}
              >
                {item.title}
              </p>
            );
          }
        })
      )}
    </div>
  );
}

export default App;
