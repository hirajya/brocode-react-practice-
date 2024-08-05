import PropTypes from "prop-types";

function UserGreeting(props) {
  const welcomeMessage = (
    <h1 className="welcome-message">Welcome back, {props.username}!</h1>
  );
  const loginPrompt = (
    <h1 className="login-prompt">Please log in to continue</h1>
  );
  return props.isLoggedIn ? welcomeMessage : loginPrompt;
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
};

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
};

export default UserGreeting;
