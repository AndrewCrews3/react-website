import PropTypes from 'prop-types'

function StudentList(props) {



    const listOfStudents = props.students; //The array of the class of students in App.js
    const teacher = props.teacher; //Which teacher owns the class
    const subject = props.subject

    const listStudents = listOfStudents.map(student => <li key =  {student.id}>
                                                            Name: {student.name},&nbsp;&nbsp;&nbsp;&nbsp;
                                                            Age:{student.age},&nbsp;&nbsp;&nbsp;&nbsp;
                                                            Grade:{student.numGrade}&nbsp;&nbsp;&nbsp;&nbsp;
                                                            {student.letterGrade}
                                                            </li>);

    

    return(
        <>
            <div className='classroom'>
                <h2 className='teacher'>{teacher} &nbsp;&nbsp; Subject: {subject}</h2>
                <ul className='each-student'>{listStudents}</ul>
            </div>
        </>
    );
}

export default StudentList
