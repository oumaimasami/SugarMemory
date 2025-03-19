import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_m0vbwph",
        "template_t9ndvcp",
        e.target,
        "ptfaZCxaVJxa4kHTZ"
      )
      .then(() => {
        toast.success("📧 Email sent successfully!");
        setFormData({ nom: "", prenom: "", email: "", message: "" }); // ✅ Clear form
      })
      .catch((error) => {
        toast.error("❌ Error sending email. Please try again.");
        console.error(error);
      });
  };

  return (
    <div className="contact-page container my-5 py-5">
      <h3 className="pt-4 mt-5 text-center contact-title">
        Aidez-nous à Progresser En Nous Faisant Part De Vos Suggestions
      </h3>
      <form
        className="row g-3 justify-content-center needs-validation my-5"
        noValidate
        onSubmit={sendEmail}
      >
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">
            Nom
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">
            Prénom
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-8 mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div id="emailHelp" className="form-text">
            Nous ne partagerons jamais votre adresse e-mail.
          </div>
        </div>
        <div className="col-md-8 mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Écris ici.
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="col-12 text-center">
          <button className="contact-button btn" type="submit">
            Envoyer
          </button>
        </div>
      </form>
      {/* Notification Component */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
