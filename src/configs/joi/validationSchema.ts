import * as Joi from "joi";

const validationSchema = Joi.object({
  DISABLE_SWAGGER: Joi.boolean(),
  DISABLE_APP_ADDRESS_LISTENING: Joi.boolean(),
  PORT: Joi.number(),
});

export default validationSchema;
