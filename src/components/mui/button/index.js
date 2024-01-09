import { Button } from "@mui/material";

const CustomButton = ({ title, ...rest }) => {
  return (
    <Button variant="outlined" {...rest}>
      {title}
    </Button>
  );
};

export default CustomButton;
