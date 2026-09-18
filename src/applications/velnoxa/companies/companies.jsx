import { useState } from "react";
import { createCompany } from "./companyservice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBuilding,faIdCard,faEnvelope,faPhone,faLocationDot,faRightToBracket} from "@fortawesome/free-solid-svg-icons";
import RegisterUser from "../users/users";
import { Link } from "react-router-dom";
function Companies() {
    
    const [name, setName] = useState("");
    const [nif, setNif] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [step, setStep] = useState(1);
    const [companyId,setCompanyId]=useState(null);

    async function handleSubmit(e) {
        e.preventDefault();

        const company = {
            name,
            nif,
            email,
            phone,
            address
        };

        try {

            const result = await createCompany(company);

            //console.log(result);
            setCompanyId(result.id);

            alert("Company criada com sucesso!");
            setStep(2);
            setName("");
            setNif("");
            setEmail("");
            setPhone("");
            setAddress("");

        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-lg-7 col-xl-6">

                    <div className="card border-0 shadow-sm rounded-4">

                        <div className="card-body p-4 p-md-5">

                            {step === 1 && (
                                <>
                                    <div className="mb-4">

                                        <h2 className="fw-bold mb-2">
                                            Add Company
                                        </h2>

                                        <p className="text-muted mb-0">
                                            Add your company information to Velnoxa.
                                        </p>

                                    </div>

                                    <form onSubmit={handleSubmit}>

                                        {/* Company */}
                                        <div className="mb-4">

                                            <label
                                                htmlFor="companyName"
                                                className="form-label fw-semibold"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faBuilding}
                                                    className="me-2"
                                                />

                                                Company
                                            </label>

                                            <input
                                                id="companyName"
                                                type="text"
                                                className="form-control form-control-lg rounded-3"
                                                placeholder="Enter company name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />

                                        </div>

                                        {/* NIF */}
                                        <div className="mb-4">

                                            <label
                                                htmlFor="nif"
                                                className="form-label fw-semibold"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faIdCard}
                                                    className="me-2"
                                                />

                                                NIF
                                            </label>

                                            <input
                                                id="nif"
                                                type="text"
                                                className="form-control form-control-lg rounded-3"
                                                placeholder="Enter NIF"
                                                value={nif}
                                                onChange={(e) => setNif(e.target.value)}
                                                required
                                            />

                                        </div>

                                        {/* Email */}
                                        <div className="mb-4">

                                            <label
                                                htmlFor="email"
                                                className="form-label fw-semibold"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faEnvelope}
                                                    className="me-2"
                                                />

                                                Email
                                            </label>

                                            <input
                                                id="email"
                                                type="email"
                                                className="form-control form-control-lg rounded-3"
                                                placeholder="company@example.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />

                                        </div>

                                        {/* Phone */}
                                        <div className="mb-4">

                                            <label
                                                htmlFor="phone"
                                                className="form-label fw-semibold"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faPhone}
                                                    className="me-2"
                                                />

                                                Phone
                                            </label>

                                            <input
                                                id="phone"
                                                type="tel"
                                                className="form-control form-control-lg rounded-3"
                                                placeholder="+351 900 000 000"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                required
                                            />

                                        </div>

                                        {/* Address */}
                                        <div className="mb-4">

                                            <label
                                                htmlFor="address"
                                                className="form-label fw-semibold"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faLocationDot}
                                                    className="me-2"
                                                />

                                                Address
                                            </label>

                                            <input
                                                id="address"
                                                type="text"
                                                className="form-control form-control-lg rounded-3"
                                                placeholder="Enter company address"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                required
                                            />

                                        </div>

                                        {/* Button */}
                                        <div className="d-grid">

                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-lg rounded-3 fw-semibold"
                                            >
                                                Add Company
                                            </button>


                                                  
                                
                                <Link to="/login" className="nav-link">
                                    <FontAwesomeIcon icon={faRightToBracket}  className="me-2"  />Sign In</Link>
                                </div>

                                    </form>
                                </>
                            )}

                            {step === 2 && (
                                <>
                                    <RegisterUser companyId={companyId}/>

                                </>
                            )}

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Companies;