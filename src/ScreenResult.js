import { React } from "react";
import "./App.css";
import { Button, Col } from "reactstrap";
import {
  ArrowLeftOutlined,
  WomanOutlined,
  ManOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function ScreenResult(props) {
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
        <Link to="/gender" className="link">
          <ArrowLeftOutlined className="back" />
        </Link>
        <div className="title"> Gender Finder</div>
        <div className="title">
          <WomanOutlined /> <ManOutlined />
        </div>
      </div>
      <div className="form">
        <div>This must be you :</div>
        <div className="formName">
          <div>
            <p>
              Firstname :{" "}
              <span style={{ fontStyle: "italic" }}>{props.myName[0]}</span>
            </p>
            <p>
              Gender :{" "}
              <span style={{ fontStyle: "italic" }}>{props.myName[2]}</span>
            </p>
          </div>
          <div>
            <p>
              Lastname :{" "}
              <span style={{ fontStyle: "italic" }}>{props.myName[1]}</span>
            </p>
            <p>
              Age : <span style={{ fontStyle: "italic" }}>{props.myAge}</span>
            </p>
          </div>
        </div>

        <div className="button">
          <Link to="/">
            <Button
              style={{ width: "110px", height: "40px" }}
              color="dark"
              outline
            >
              New Search
            </Button>
          </Link>
        </div>
      </div>
    </Col>
  );
}

function mapStateToProps(state) {
  return { myName: state.name, myAge: state.age };
}
export default connect(mapStateToProps, null)(ScreenResult);
