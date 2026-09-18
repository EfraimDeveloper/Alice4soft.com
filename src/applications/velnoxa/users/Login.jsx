import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./userService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faLock,
    faEye,
    faEyeSlash,
    faRightToBracket
} from "@fortawesome/free-solid-svg-icons";

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const result = await loginUser(formData);

            localStorage.setItem("token", result.token);

            navigate("/dashboard");

        } catch (error) {
            setMessage(error.message);
        }
    }

    return (
        <div className="container min-vh-100 d-flex align-items-center justify-content-center">

            <div className="row w-100 justify-content-center">

                <div className="col-12 col-sm-10 col-md-7 col-lg-5 col-xl-4">

                    <div className="card border-0 shadow-sm rounded-4">

                        <div className="card-body p-4 p-md-5">

                            <div className="text-center mb-4">

                                <div className="mb-3">
                                    <FontAwesomeIcon
                                        icon={faRightToBracket}
                                        size="2x"
                                    />
                                </div>

                                <h3 className="fw-bold mb-2">
                                    Sign In
                                </h3>

                                <p className="text-muted mb-0">
                                    Sign in to your Velnoxa account.
                                </p>

                            </div>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">

                                    <label
                                        htmlFor="email"
                                        className="form-label"
                                    >
                                        Email
                                    </label>

                                    <div className="input-group">

                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </span>

                                        <input
                                            id="email"
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="email@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                </div>

                                <div className="mb-4">

                                    <label
                                        htmlFor="password"
                                        className="form-label"
                                    >
                                        Password
                                    </label>

                                    <div className="input-group">

                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faLock} />
                                        </span>

                                        <input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            className="form-control"
                                            name="password"
                                            placeholder="Enter your password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />

                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                        >
                                            <FontAwesomeIcon
                                                icon={
                                                    showPassword
                                                        ? faEyeSlash
                                                        : faEye
                                                }
                                            />
                                        </button>

                                    </div>

                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                >
                                    <FontAwesomeIcon
                                        icon={faRightToBracket}
                                        className="me-2"
                                    />
                                    Sign In
                                </button>

                            </form>

                            {message && (
                                <div className="alert alert-danger mt-4 mb-0">
                                    {message}
                                </div>
                            )}

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Login;