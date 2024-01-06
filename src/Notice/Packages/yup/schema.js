import { object, string, number, date, InferType } from "yup";

export const stringSchema = (message) => string().min(3, message).required();

export const userSchema = object({
  firstName: stringSchema("First Name should be minimum 3 characters"),
  lastName: stringSchema("Last Name should be minimum 3 characters"),
  age: number().required(),
})
  .json()
  .camelCase();
