import React from "react";
import { useForm } from "../Hooks/useForm";
import Loader from "../Loader/Loader";

//STYLES
import "./ContactPage.scss";
import '../../_custom.scss'

const initialForm = {
  name: "",
  surname: "",
  email: "",
  subject: "",
  comments: "",
};

//FUNCTION: validate inputs:
const validationsForm = (form) => {
  let errors = {};

  let regexName = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;
  let regexSurname = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;
  let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  let regexComments = /^[a-zA-ZÀ-ÿ\s0-9_,;:.¿?¡!+()*#$-]{20,200}$/;

  //NAME
  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' solo acepta letras y debe contener mínimo 3 caracteres";
  }

  //SURNAME
  if (!form.surname.trim()) {
    errors.surname = "El campo 'Apellido' es requerido";
  } else if (!regexSurname.test(form.surname.trim())) {
    errors.surname = "El campo 'Apellido' solo acepta letras y debe contener mínimo 3 caracteres";
  }

  //EMAIL
  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El email ingresado es inválido";
  }

  //TIPO DE CONSULTA
  if (!form.subject.trim()) {
    errors.subject = "El 'Tipo de Consulta' es requerido";
  }

  //CONSULTA
  if (!form.comments.trim()) {
    errors.comments = "Por favor, ingrese su consulta";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments =
      "La consulta debe contener un mínimo de 20 carateres y un máximo de 220 caracteres";
  }

  return errors;
};

const ContactPage = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleBlur,
    handleInput,
    handleChange,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div className="contact-page-container">
      <div className="white-container-full">
      <h5 className="title">Contacto</h5>
      <form className="form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className={
            ((errors.name ? "form-input form-input-errors" : "form-input"))
          }
          name="name"
          value={form.name}
          type="text"
          placeholder="Nombre"
          onBlur={handleBlur}
          onInput={handleInput}
          required
        />
        {errors.name && <p className="form-message form-message-error">{errors.name}</p>}

        <input
          onChange={handleChange}
          className={ ((errors.name ? "form-input form-input-errors" : "form-input"))}
          name="surname"
          value={form.surname}
          type="text"
          placeholder="Apellido"
          onBlur={handleBlur}
          onInput={handleInput}
          required
        />
        {errors.surname && <p className="form-message form-message-error">{errors.surname}</p>}

        <input
          onChange={handleChange}
          className={ ((errors.name ? "form-input form-input-errors" : "form-input"))}
          name="email"
          value={form.email}
          type="text"
          placeholder="Email"
          onBlur={handleBlur}
          onInput={handleInput}
          required
        />
        {errors.email && <p className="form-message form-message-error">{errors.email}</p>}

        <input
          onChange={handleChange}
          className={ ((errors.name ? "form-input form-input-errors" : "form-input"))}
          name="subject"
          value={form.subject}
          type="text"
          placeholder="Tipo de consulta"
          onBlur={handleBlur}
          onInput={handleInput}
          required
        />
        {errors.subject && <p className="form-message form-message-error">{errors.subject}</p>}

        <textarea
          onChange={handleChange}
            className={((errors.name ? "form-input form-input-errors" : "form-input form-input-comments" ))}
          name="comments"
          value={form.comments}
          cols="50"
          rows="5"
          placeholder="Escribe tu consulta"
                  onBlur={handleBlur}
                  onInput={handleInput}
          required
        />
        {errors.comments && <p className="form-message form-message-error">{errors.comments}</p>}
         {errors && <p className="form-message form-message-error">POR FAVOR COMPLETE EL FORMULARIO</p> }
          <input
          className="form-input btn-form-submit"
          type="submit"
          value="Enviar"
          />
         
          </form>
          {loading && <Loader textLoader={ "Enviando..." }/>}
          {response && (<> <p className="form-message form-message-success">FORMULARIO ENVIADO EXITOSAMENTE</p><p className="form-message form-message-success"> ¡Te responderemos a la brevedad!</p></>)    }
        </div>
    </div>
  );
};

export default ContactPage;
