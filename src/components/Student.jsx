import PropTypes from "prop-types";

function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>isStudent: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool.isRequired,
};

Student.defaultProps = {
    name: "Unknown",
    age: 0,
    isStudent: false,
}

export default Student;
