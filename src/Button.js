import PropTypes from "prop-types";
import "./App.css"


function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {

  

  return <button className="button" >{children}</button>;
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error("Invalid Props");
    }
  },
};

export default Button;
