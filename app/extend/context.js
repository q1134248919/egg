const getToken = (value) => {
  return this.app.jwt.sign(value, this.app.config.jwt.secret);
};

// 验证token
const checkToken = (token) => {
  return this.app.jwt.verify(token, this.app.config.jwt.secret);
};
