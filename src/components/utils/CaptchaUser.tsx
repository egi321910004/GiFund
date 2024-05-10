import React, { Component } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

class CaptchaUser extends Component {
  componentDidMount() {
    loadCaptchaEnginge(8);
  }

  render() {
    return (
      <div>
        <div className="container has-text-centered">
          <div className="form-group">
            <div className="col mt-3 card p-5">
              <LoadCanvasTemplate />
              <input
                style={{ width: "60%" }}
                className="input is-primary mt-2"
                placeholder="Enter Captcha"
                id="user_captcha_input"
                name="user_captcha_input"
                type="text"
              ></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CaptchaUser;
