import { toast } from "react-toastify";

const notifyError = (msg) => toast.error(msg);

export const handleValidate = async (schema, value, options = {}) => {
  try {
    return await schema.validate(value, options);
  } catch (error) {
    notifyError(error.message);
  }
};
