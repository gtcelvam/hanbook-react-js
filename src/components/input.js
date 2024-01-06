import { memo } from "react";

const InputComponent = (props) => {
  //props
  const { name, handleChange, ...others } = props;

  const onChange = ({ target: { value: inputValue } }) => {
    if (name === "age") inputValue = Number(inputValue);
    handleChange({ [name]: inputValue });
  };

  return (
    <>
      <label>{name}</label>
      <br />
      <input name={name} {...others} onChange={onChange} />
    </>
  );
};

export default memo(InputComponent);
