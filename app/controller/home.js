"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    console.log(ctx.model, "11111");
    ctx.body = "111";

    // console.log(ctx);
  }
  async login() {
    const { ctx, app } = this;
    // console.log(app.middleware.error,'midddddddd')
    const { username, password } = ctx.request.body;
       
    const token = app.jwt.sign(
      {
        username,
        password,
      },
      app.config.jwt.secret
    );
    ctx.body = token;
  }
}

module.exports = HomeController;
