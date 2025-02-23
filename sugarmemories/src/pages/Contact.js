import React from "react";

export default function Contact() {
  return (
    <div className="contact-page container my-5 py-5">
      <form
        className="row g-3 justify-content-center needs-validation my-5"
        noValidate
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
            aria-describedby="emailHelp"
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
            required
          ></textarea>
        </div>
        <div className="col-12 text-center">
          <button className="contact-button btn" type="submit">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}
