import PropTypes from "prop-types";

function Button({text, style, onClick}) {
  return (
    <button className={`btn btn-${style}`} type='button'>{text}</button>
  )
}

Button.defaultProps = {
  text: "default",
  style: "green",
};


Button.propTypes = {
  text: PropTypes.string,
  style: PropTypes.string,
  onClick: PropTypes.func,
};


export default Button