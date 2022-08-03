import PropTypes from "prop-types";
import Button from "./Button";
const Header = (props) => {
  const onClick = () => {
    console.log("click");
  };
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button color="green" text="Hello" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Or will this be displayed?",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
