const validatePass = (password,verifyPassword)=>{
  if(password === verifyPassword) return true;
  return false;
}
module.exports = validatePass;