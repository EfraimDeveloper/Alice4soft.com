import { useState } from "react";
import { createCompany } from "./companyservice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBuilding,
    faIdCard,
    faEnvelope,
    faPhone,
    faLocationDot,
    faUser
} from "@fortawesome/free-solid-svg-icons";

function Companies() {
    const [name, setName] = useState("");
    const [nif, setNif] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

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
            await createCompany(company);

            alert("Company criada com sucesso!");

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
                                    <label htmlFor="companyName" className="form-label fw-semibold">
                                        <FontAwesomeIcon icon={faBuilding} className="me-2"/>
                                        Company
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control form-control-lg rounded-3"
                                        placeholder="Enter company name"
                                        id="companyName"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                {/* NIF */}
                                <div className="mb-4">
                                    <label className="form-label fw-semibold">
                                         <FontAwesomeIcon icon={faIdCard} className="me-2" />
                                        NIF
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control form-control-lg rounded-3"
                                        placeholder="Enter NIF"
                                        value={nif}
                                        onChange={(e) => setNif(e.target.value)}
                                    />
                                </div>

                                {/* Email */}
                                <div className="mb-4">
                                    <label className="form-label fw-semibold">
                                         <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control form-control-lg rounded-3"
                                        placeholder="company@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                {/* Phone */}
                                <div className="mb-4">
                                    <label className="form-label fw-semibold">
                                          <FontAwesomeIcon icon={faPhone} className="me-2" />
                                        Phone
                                    </label>

                                    <input
                                        type="tel"
                                        className="form-control form-control-lg rounded-3"
                                        placeholder="+351 900 000 000"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>

                                {/* Address */}
                                <div className="mb-4">
                                    <label className="form-label fw-semibold">
                                        <FontAwesomeIcon icon={faLocationDot} className="me-2" />
                                        Address
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control form-control-lg rounded-3"
                                        placeholder="Enter company address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
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
                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Companies;