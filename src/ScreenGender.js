import { React, useState } from "react";
import "./App.css";
import { Input, Button, Col } from "reactstrap";

import {
  ArrowLeftOutlined,
  WomanOutlined,
  ManOutlined
} from "@ant-design/icons";

import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function ScreenGender(props) {
  const [age, setAge] = useState("");
  const [emptyAge, setEmptyAge] = useState("");
  const [user, setUser] = useState(false);

  function genderResult() {
    if (!props.myName[2]) {
      return (
        <p>
          Gender :
          <span
            style={{
              fontStyle: "italic",

              color: "red",
              marginLeft: 5
            }}
          >
            Not Found
          </span>
        </p>
      );
    } else {
      return (
        <p>
          Gender :
          <span style={{ fontStyle: "italic" }}> {props.myName[2]} </span>
        </p>
      );
    }
  }

  var handleSubmitNext = () => {
    if (!age) {
      setEmptyAge("Age is missing");
    } else {
      setUser(true);
      props.addAge(age);
    }
  };
  if (user) {
    return <Redirect to="/result" />;
  }

  return (
    <Col xs="12">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#f8c291",
          fontSize: 28,
          fontFamily: "Cambria"
        }}
      >
        <Link to="/" className="link">
          <ArrowLeftOutlined className="back" />
        </Link>

        <div className="title"> Gender Finder </div>
        <div className="title">
          <WomanOutlined /> <ManOutlined />
        </div>
      </div>

      <div className="form">
        <div>
          Hey{" "}
          {props.myName[0].charAt(0).toUpperCase() + props.myName[0].slice(1)} !
        </div>
        <div className="formName">
          <div>
            {genderResult()}
            <p>
              Probability :{" "}
              <span style={{ fontStyle: "italic" }}>{props.myName[3]}</span>
            </p>
          </div>
          <div>
            <Input
              type="number"
              min="0"
              max="99"
              placeholder="Age"
              onChange={(e) => setAge(e.target.value)}
              value={age}
              style={{
                border: "2px solid black",
                backgroundColor: "#f8c291",
                width: "200px"
              }}
              size="lg"
            />
            <p
              style={{
                color: "#E74C3C",

                marginTop: 5,
                fontSize: 16
              }}
            >
              {emptyAge}
            </p>
          </div>
        </div>
        <div className="button">
          <Button
            style={{ width: "100px", height: "50px" }}
            color="dark"
            outline
            onClick={() => handleSubmitNext()}
          >
            Next
          </Button>
        </div>
      </div>
    </Col>
  );
}

function mapStateToProps(state) {
  return { myName: state.name };
}

function mapDispatchToProps(dispatch) {
  return {
    addAge: function (age) {
      dispatch({
        type: "addAge",
        age: age
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenGender);
