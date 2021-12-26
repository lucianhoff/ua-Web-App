import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import DOTS from "vanta/dist/vanta.dots.min";
import * as THREE from "three";
import { Formik } from "formik";
import * as yup from "yup";

import GoogleLogin from "react-google-login";

const IniciarSesion = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const SignInSchema = yup.object().shape({
    email: yup.string().email().required("this field is required"),
    password: yup.string().required("this field is required"),
  });


  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        DOTS({
          el: vantaRef.current,
        //   THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        color: 0x7c3aed,
        scaleMobile: 1.00,
        showLines: false,
        spacing: 50.00,
        backgroundColor: 0x18181b,
        })
      );
    }
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <>
      <div
        className="flex pb-3 mt-20 w-full justify-center items-center"
        ref={vantaRef}
      >
        <div className="flex items-center justify-center">
          <div className="flex-col flex ml-auto mr-auto items-center w-full">
            <h1 className="font-bold text-center rubik text-4xl my-16 text-white mb-16">
              {" "}
              Bienvenido de nuevo{" "}
            </h1>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={SignInSchema}
              onSubmit={(values, { resetForm }) => {
                // props.accessAccount(values);
                resetForm({ values: "" });
              }}
            >
              {({ handleSubmit, handleChange, values, errors, touched }) => (
                <>
                  <form className="mt-2 flex flex-col" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap items-stretch w-full mb-4 relative bg-white rounded pr-10">
                      <div className="flex -mr-px justify-center w-15 p-2">
                        <span className="flex items-center leading-normal  border-0 rounded rounded-r-none text-4xl text-gray-600">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="#9333ea"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                      <input
                        className="flex-shrink flex-grow text-violet-600 rubik leading-normal w-px  border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-base outline-none"
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={handleChange("email")}
                        value={values.email}
                      />
                    </div>
                    
                    <div className="flex flex-wrap items-stretch w-full relative h-15 bg-white  rounded mb-4">
                      <div className="flex -mr-px justify-center w-15 p-2">
                        <span className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl whitespace-no-wrap text-gray-600">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="#9333ea"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        className="flex-shrink flex-grow text-violet-600 rubik leading-normal w-px  border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-base outline-none"
                        name="password"
                        onChange={handleChange("password")}
                        placeholder="********"
                        value={values.password}
                      />
                      <div className="flex -mr-px">
                        <span className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600">
                          {!showPassword ? (
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="#9333ea"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              onClick={() => handlePassword()}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                              ></path>
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="#9333ea"
                              onClick={() => handlePassword()}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          )}
                        </span>
                      </div>
                    </div>

                    <button
                      className="w-full px-4 py-2 font-bold  transition text-violet-800 bg-violet-300 rounded-full hover:bg-violet-800  hover:text-white focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Iniciar sesion
                    </button>
                    <GoogleLogin
                      
                      clientId="36260654393-jruugt14707a8pcdlf33skgor98eth8c.apps.googleusercontent.com"
                      render={(renderProps) => (
                        <button
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                          className="w-full px-4 py-2 font-bold transition text-violet-800 bg-violet-300 rounded-full hover:bg-violet-800  hover:text-white focus:outline-none focus:shadow-outline mt-2 mb-5"
                        >
                          Iniciar sesion con Google
                        </button>
                      )}
                    //   onSuccess={props.responseGoogle}
                    //   onFailure={props.responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
                    <Link
                      to="/registrarse"
                      className="text-3xl fw-bold text-white font-roboto text-center leading-normal hover:text-violet-900 mb-7"
                    >
                      No tienes cuenta todavía? crea una
                    </Link>
                  </form>
                </>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default IniciarSesion;