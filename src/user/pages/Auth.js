import React, { useState, useContext, useEffect } from "react";

import { gsap } from "gsap";

import bgimg from "./IMG_6927.jpg";
import frontimg from "./IMG_6928.jpg";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ImageUpload from "../../shared/components/FormElements/ImageUpload";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import "./Auth.css";

import transition from "../../transition";

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    gsap.from(".hero-image-wrapper, .content-wrapper, .front-img", 2, {
      delay: 1,
      clipPath: "inset(0 100% 0 0)",
      ease: "power4.inOut",
      stagger: {
        amount: 0.5,
      },
    });

    gsap.from("img", 3, {
      delay: 1.5,
      scale: 2,
      ease: "power4.inOut",
      stagger: {
        amount: 0.25,
      },
    });

    gsap.to(
      "header h1, header h2",
      1,
      {
        delay: 1,
        top: 0,
        ease: "power3.out",
        stagger: {
          amount: 0.2,
        },
      },
      "-=1"
    );
  }, []);

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
          image: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
          image: {
            value: null,
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const authSubmitHandler = async (event) => {
    event.preventDefault();

    if (isLoginMode) {
      try {
        const responseData = await sendRequest(
          "https://placediscapi.onrender.com/api/users/login",
          "POST",
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        auth.login(responseData.userId, responseData.token);
      } catch (err) {}
    } else {
      try {
        const formData = new FormData();
        formData.append("email", formState.inputs.email.value);
        formData.append("name", formState.inputs.name.value);
        formData.append("password", formState.inputs.password.value);
        formData.append("image", formState.inputs.image.value);
        const responseData = await sendRequest(
          "https://placediscapi.onrender.com/api/users/signup",
          "POST",
          formData
        );

        auth.login(responseData.userId, responseData.token);
      } catch (err) {}
    }
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <div class="container">
        {isLoading && <LoadingSpinner asOverlay />}
        <div class="hero-image-wrapper wrapper">
          <div class="bg-img">
            <img src={bgimg} alt="" />
          </div>
          <div class="front-img">
            <img src={frontimg} alt="" />
          </div>
        </div>
        <div class="content-wrapper-auth wrapper">
          <div>
            <div class="form-wrapper">
              <form onSubmit={authSubmitHandler}>
                {!isLoginMode && (
                  <Input
                    element="input"
                    id="name"
                    ty
                    pe="text"
                    label="Your Name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a name."
                    onInput={inputHandler}
                  />
                )}
                <Input
                  element="input"
                  id="email"
                  type="email"
                  label="E-Mail"
                  validators={[VALIDATOR_EMAIL()]}
                  errorText="Please enter a valid email address."
                  onInput={inputHandler}
                />
                {!isLoginMode && (
                  <ImageUpload
                    center
                    id="image"
                    onInput={inputHandler}
                    errorText="Please provide an image."
                  />
                )}

                <Input
                  element="input"
                  id="password"
                  type="password"
                  label="Password"
                  validators={[VALIDATOR_MINLENGTH(6)]}
                  errorText="Please enter a valid password, at least 6 characters."
                  onInput={inputHandler}
                />
                <Button type="submit" disabled={!formState.isValid}>
                  {isLoginMode ? "Login" : "Sign Up"}
                </Button>
              </form>
              <Button inverse onClick={switchModeHandler}>
                {isLoginMode ? "Create a new account" : "Login to your account"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default transition(Auth);
