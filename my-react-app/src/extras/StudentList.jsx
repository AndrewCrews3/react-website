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


        // used inside App.js
      //  <StudentList students={class1} teacher='Ms. Jenny' subject = 'Art' />
      //  <StudentList students={class1} teacher='Mr. Brock' subject = 'History' />



   /* const class1 = [{id: 11, name: 'Jeremy', age: '19', numGrade: 81, letterGrade: '' },
        {id: 12, name: 'Braxton', age: '21', numGrade: 93, letterGrade: ''},
        {id: 13, name: 'Julia', age: '18', numGrade: 74, letterGrade: ''},
        {id: 14, name: 'Andrew', age: '24', numGrade: 100, letterGrade: ''},
        {id: 15, name: 'Mike', age: '27', numGrade: 66, letterGrade: ''},
        {id: 16, name: 'Bella', age: '25', numGrade: 84, letterGrade: ''},
        {id: 17, name: 'Riley', age: '22', numGrade: 68, letterGrade: ''},
        {id: 18, name: 'Kevin', age: '19', numGrade: 95, letterGrade: ''},
        {id: 18, name: 'Brooke', age: '16', numGrade: 100, letterGrade: ''}] */