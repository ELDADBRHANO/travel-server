const emailValidation = (email) => {
  const at = email.indexOf("@");
  const com = email.slice(email.length - 4);
  if (at > 0 && com == ".com") return true;
  return false;
};

module.exports = emailValidation;
