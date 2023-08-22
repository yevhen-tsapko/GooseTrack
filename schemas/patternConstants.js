const emailRegexp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
const passwordRegexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
const phoneRegexp = /^\+380\d{9}$/;
const skypeRegexp = /^\S[\S\s]{0,28}\S$/;
const birthdayRegexp = /^\d{4}\/\d{2}\/\d{2}$/;

module.exports = {
  emailRegexp,
  passwordRegexp,
  phoneRegexp,
  skypeRegexp,
  birthdayRegexp,
};
