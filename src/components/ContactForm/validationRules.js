export default function validate(values) {
  let errors = {};
  if (!values.name) {
    errors.name = "Unesite vaše ime!";
  }
  if (!values.email) {
    errors.email = "Potrebna je email adresa!";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email adresa nije validna";
  }
  if (!values.message) {
    errors.message = "Unesite Poruku!";
  }
  return errors;
}
