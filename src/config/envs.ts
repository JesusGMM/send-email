import 'dotenv/config';
import { get } from 'env-var';

export const envs = {

  PORT: get('PORT').required().asPortNumber(),
  NAME_APP: get('NAME_APP').required().asString(),
  REJECT_UNAUTHORIZED: get('REJECT_UNAUTHORIZED').required().asBool(),
  KEY: get('SECRET_KEY').required().asString(),

  HOST_EMAIL: get('HOST_EMAIL').required().asString(),
  PORT_EMAIL: get('PORT_EMAIL').required().asPortNumber(),
  USER_EMAIL: get('USER_EMAIL').required().asString(),
  PASSWORD_EMAIL: get('PASSWORD_EMAIL').required().asString()

};
