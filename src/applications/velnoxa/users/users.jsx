import { useState } from "react";
import { registerUser } from "./userService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser,faUserTag,faEnvelope,faLock,faEye,faEyeSlash,faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
function Register({companyId}) {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate=useNavigate();

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
            await registerUser({...formData,companyId});

            setMessage("User created successfully!");
            navigate("/login");

            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            });

        } catch (error) {
            setMessage(error.message);
        }
    }

    return (
        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-md-12 ">

                    <div className="card border-0 shadow-sm rounded-4">

                        <div className="card-body p-4 p-md-5">

                            <div className="text-center mb-4">

                                <div className="mb-3">
                                    <FontAwesomeIcon
                                        icon={faUserPlus}
                                        size="2x"
                                    />
                                </div>

                                <h3 className="fw-bold mb-2">
                                    Create Account
                                </h3>

                                <p className="text-muted mb-0">
                                    Create the first user for your company.
                                </p>

                            </div>

                            <form onSubmit={handleSubmit}>

                                {/* First Name */}
                                <div className="mb-3">

                                    <label
                                        htmlFor="firstName"
                                        className="form-label"
                                    >
                                        First Name
                                    </label>

                                    <div className="input-group">

                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faUser} />
                                        </span>

                                        <input
                                            id="firstName"
                                            type="text"
                                            className="form-control"
                                            name="firstName"
                                            placeholder="First name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                </div>

                                {/* Last Name */}
                                <div className="mb-3">

                                    <label
                                        htmlFor="lastName"
                                        className="form-label"
                                    >
                                        Last Name
                                    </label>

                                    <div className="input-group">

                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faUserTag} />
                                        </span>

                                        <input
                                            id="lastName"
                                            type="text"
                                            className="form-control"
                                            name="lastName"
                                            placeholder="Last name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                </div>

                                {/* Email */}
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

                                {/* Password */}
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

                                {/* Button */}
                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                >
                                    <FontAwesomeIcon
                                        icon={faUserPlus}
                                        className="me-2"
                                    />

                                    Create Account
                                </button>

                            </form>

                            {/* Message */}
                            {message && (
                                <div className="alert alert-info mt-4 mb-0">
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

export default Register;