import React from "react";
import { RiUserFill } from "react-icons/ri";
import { RiLock2Fill } from "react-icons/ri";
import { Form, Field } from "react-final-form";
import { getLogin }  from '../../../Actions/MerosActions'
import { connect } from "react-redux";
import { Input } from "antd";
import brand from "../../../Assets/img/Logo.svg";
import "./Login.css";

const loginValues = { login: "", parol: "" };
const Login = ({ getLogin, loading }) => {
  const onSubmit = (values) => {
    getLogin(values);
    console.log(values);
  };
  return (
    <>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "82vh",
      }}>
        
      <div className="login_area">
        <img src={brand} alt="logo" />
        <p style={{ color: "#311a2f", marginBottom: "2rem", fontSize: "30px" }}>Электрон архив</p>
        <Form
          onSubmit={onSubmit}
          initialValues={loginValues}
          render={({ handleSubmit }) => (
            <>
              <form className="form__section" onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#E5E5E5",
                    maxWidth: "385px",
                    borderRadius: "20px",
                    paddingLeft: "15px",
                  }}>
                  <RiUserFill style={{ fontSize: "20px", color: "var(--main-color)" }}></RiUserFill>
                  <Field name="login">
                    {(props) => <Input {...props.input} style={{ fontSize: "18px" }} autoComplete="off" placeholder="Логин..."></Input>}
                  </Field>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#E5E5E5",
                    maxWidth: "385px",
                    borderRadius: "20px",
                    paddingLeft: "15px",
                    marginTop: "15px",
                  }}>
                  <RiLock2Fill style={{ fontSize: "20px", color: "var(--main-color)" }}></RiLock2Fill>
                  <Field name="parol">
                    {(props) => (
                      <Input.Password 
                      autoComplete="off"
                        {...props.input}
                        style={{ fontSize: "18px",  }}
                        placeholder="Парол..."></Input.Password>
                    )}
                  </Field>
                </div>
                <div style={{ display: "flex", justifyContent: "center", }}>
                  <button style={{ backgroundColor: "#33CCCC"}} loading={loading} type="submit" className="btn btn-submit login_btn">
                  Кириш
                  </button>
                </div>
              </form>
            </>
          )}></Form>
      </div>
      
    </div>
    <p className='login__text'>
      copyright &#169; Электрон ҳокимиятни ривожлантириш маркази
      </p>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.meros.loading,
  };
};

export default connect(mapStateToProps, { getLogin })(Login);
