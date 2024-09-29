//import Header from './Header.jsx'
//import Footer from './Footer.jsx'
//import Food from './Food.jsx'
//import Button from './Button.jsx'
//import Student from './Student.jsx'
//import Voter from './Voter.jsx'
//import UserGreeting from "./UserGreeting.jsx";
import List from "./List";
import StudentList from "./studentList";

function App() {

  const fruits = [{id: 1, name: "apple", calories: 95}, 
                  {id: 2, name: "strawberry", calories: 45},
                  {id: 3, name: "blueberry", calories: 80},
                  {id: 4, name: "pineapple", calories: 37}, 
                  {id: 5, name: "pomegranate", calories: 72}]

  const meats = [ {id: 6, name: "chicken", calories: 305}, 
                  {id: 7, name: "steak", calories: 425},
                  {id: 8, name: "bacon", calories: 380},
                  {id: 9, name: "pork", calories:437}, 
                  {id: 10, name: "goat", calories: 372}]


    const class1 = [{id: 11, name: 'Jeremy', age: '19', numGrade: 81, letterGrade: '' },
                    {id: 12, name: 'Braxton', age: '21', numGrade: 93, letterGrade: ''},
                    {id: 13, name: 'Julia', age: '18', numGrade: 74, letterGrade: ''},
                    {id: 14, name: 'Andrew', age: '24', numGrade: 100, letterGrade: ''},
                    {id: 15, name: 'Mike', age: '27', numGrade: 66, letterGrade: ''},
                    {id: 16, name: 'Bella', age: '25', numGrade: 84, letterGrade: ''},
                    {id: 17, name: 'Riley', age: '22', numGrade: 68, letterGrade: ''},
                    {id: 18, name: 'Kevin', age: '19', numGrade: 95, letterGrade: ''},
                    {id: 18, name: 'Brooke', age: '16', numGrade: 100, letterGrade: ''}]

  return(
    <>
        <StudentList students={class1} teacher='Ms. Jenny' subject = 'Art' />
        <StudentList students={class1} teacher='Mr. Brock' subject = 'History' />
        
    </>
        
  );
}

export default App


//{fruits.length > 0 ? <List items={fruits} category='Fruits'/> : null}
//{meats.length > 0 ?<List items={meats} category='Meats'/> : null}
//<List items={fruits} category='Fruits'/>
