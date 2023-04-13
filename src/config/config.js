import dotenv from "dotenv";
dotenv.config();

class Config {
  constructor() {
    (this.app_config = {
      port: process.env.PORT,
      client_url: process.env.CLIENT_URL,
    }),
      (this.db_config = {
        db_uri: process.env.DB_URI,
      }),
      (this.token_config = {
        secret_access_token: "",
        expires_time: "1h",
      }),
      (this.cookies_config = {
        max_age: 30 * 24 * 60 * 60 * 1000,
      });
  }
}

export default Object.freeze(new Config());
