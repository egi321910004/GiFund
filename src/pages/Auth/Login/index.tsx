import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Hero, Container } from "react-bulma-components";
import backgroundImage from "../../../assets/video.mp4";
import logonav from "../../../assets/gifundlogov2.png";
import { useNavigate } from "react-router-dom";

interface LoginFormData {
  email: string;
  password: string;
}

export default function index() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const authData = localStorage.getItem("auth");
    if (authData) {
      navigate("/home");
    }
  }, [navigate]);

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("auth", JSON.stringify(formData));
    navigate("/Home");
  };

  return (
    <Hero>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          width: "100%",
          left: "0",
          top: "0",
          height: "100%",
          objectFit: "cover",
          zIndex: "-1",
        }}
      >
        <source src={backgroundImage} type="video/mp4" />
      </video>
      <Hero.Body>
        <Container>
          <div className="is-fullheight">
            <div className="hero is-fullheight">
              <div className="hero-body is-justify-content-center ">
                <div className="columns is-flex is-flex-direction-column box">
                  <form className="" onSubmit={handleLogin}>
                    <div className="is-flex is-justify-content-center has-text-centered">
                      <img className="image is-128x128" src={logonav} />
                    </div>

                    <div className="column">
                      <label className="mb-4">Email</label>
                      <input
                        className="input is-primary"
                        type="text"
                        name="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="column">
                      <label>Password</label>
                      <input
                        className="input is-primary"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="column">
                      <button
                        className="button is-primary is-fullwidth"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                    <div className="has-text-centered">
                      <p className="is-size-7">
                        Tidak Memiliki Akun?{" "}
                        <a href="/register" className="has-text-primary">
                          Daftar Disini
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Hero.Body>
    </Hero>
  );
}
