import React from "react";

export default function Contact() {
  return (
    <div className="contact-page container my-5 py-5 ">
      <form
        className="row g-3 justify-content-center needs-validation my-5"
        novalidate
      >
        <div className="col-md-4">
          <label for="validationCustom01" className="form-label">
            Nom
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            required
          />
        </div>
        <div className="col-md-4">
          <label for="validationCustom02" className="form-label">
            Prénom
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            required
          />
        </div>
        <div class="col-md-8 mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            Nous ne partagerons jamais votre adresse e-mail.
          </div>
        </div>
        <div class="col-md-8 mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Écris ici.
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="col-12 text-center ">
          <button className="contact-button btn" type="submit">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}
