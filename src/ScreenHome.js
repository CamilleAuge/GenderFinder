import React, { useState } from "react";
import "./App.css";
import { Input, Button, Col } from "reactstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { WomanOutlined, ManOutlined } from "@ant-design/icons";

function ScreenHome(props) {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [loadData, setLoadData] = useState([]);
  const [messErrorMissingName, setMessErrorMissingName] = useState("");
  const [user, setUser] = useState(false);

  var handleSubmitNext = async () => {
    const data = await fetch(`https://api.genderize.io?name=${userFirstName}`);
    var response = await data.json();
    setLoadData(response);

    if (!userFirstName || !userLastName) {
      setMessErrorMissingName("please fill in your firstname and lastname");
    } else {
      setUser(true);
    }
  };

  props.saveName(loadData, userLastName);

  if (user) {
    return <Redirect to="/gender" />;
  }

  return (
    <Col xs="12">
      <div className="form">
        <div className="title">Gender Finder</div>
        <div className="title">
          <WomanOutlined /> <ManOutlined />
        </div>
        <div className="subtitle"> Please fill in this form : </div>

        <div className="formName">
          <div>
            <Input
              placeholder="Firstname"
              onChange={(e) => setUserFirstName(e.target.value)}
              value={userFirstName}
              style={{
                border: "2px solid black",
                backgroundColor: "#f8c291"
              }}
              size="lg"
            />
          </div>
          <div>
            <Input
              placeholder="Lastname"
              onChange={(e) => setUserLastName(e.target.value)}
              value={userLastName}
              style={{
                border: "2px solid black",
                backgroundColor: "#f8c291"
              }}
              size="lg"
            />
          </div>
        </div>

        <p
          style={{
            color: "#E74C3C",
            marginTop: 5,
            alignItems: "center",
            fontSize: 16
          }}
        >
          {messErrorMissingName}
        </p>

        <div className="button">
          <Button
            onClick={() => handleSubmitNext()}
            style={{ width: "100px", height: "50px" }}
            color="dark"
            outline
          >
            Next
          </Button>
        </div>
      </div>
    </Col>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    saveName: function (loadData, userLastName) {
      dispatch({
        type: "addName",
        name: loadData.name,
        lastName: userLastName,
        gender: loadData.gender,
        probability: loadData.probability
      });
    }
  };
}

export default connect(null, mapDispatchToProps)(ScreenHome);
