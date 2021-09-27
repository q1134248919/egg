/* eslint valid-jsdoc: "off" */

"use strict";

/**f
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});
  config.middleware = ["error","auth"];
  config.auth = {
    ignore: ['/login'] // 忽略的接口
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1632379842937_9735";

  // add your middleware config here

  config.error = {
    // 这里使用appInfo.env来判断环境，仅仅在非生产环境下打开堆栈信息，用于调试
    postFormat: (e, { stack, ...rest }) =>
      appInfo.env === "prod" ? rest : { stack, ...rest },
  };
  config.mongoose = {
    client: {
      url: "mongodb://localhost:27017/bolg",
      options: {},
    },
  };
  config.jwt = {
    secret: "123456",
  };
  // 跨域配置
  config.cors = {
    origin: "*",
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH",
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
