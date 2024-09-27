import PropTypes from 'prop-types'

function Student(props) {

        return(
            <div className="student">
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Student: {props.isStudent ? "Yes" : "No"}</p>
            </div>
        );
}

Student.propTypes = {
    name: PropTypes.string, 
    age: PropTypes.number, 
    isStudent: PropTypes.boolean,
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}
export default Student


/* Properties of the student and how to display it (Must be inside App.jsx return statement)
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patrick" age={19} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" age={21} isStudent={true}/> */