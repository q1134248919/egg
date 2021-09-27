"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller, jwt } = app;
  router.post("/login", controller.home.login);
  router.get("/page", jwt, controller.home.index);
};
