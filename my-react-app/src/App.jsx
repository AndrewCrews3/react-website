//import Header from './Header.jsx'
//import Footer from './Footer.jsx'
//import Food from './Food.jsx'
//import Button from './Button.jsx'
//import Student from './Student.jsx'
import Voter from './Voter.jsx'


function App() {

  return(
      <>
        <Voter name = "Bradley" age = {17} party = {true} />
        <Voter name = "Danny" age = {28} party = {true} />
        <Voter name = "Joanne" age = {41} party = {false} />
        <Voter name = "Trixie" age = {92} party = {false} />
        <Voter name = "Charles" age = {55} party = {true} />
        <Voter name = "Brooke" age = {44} party = {false} />

      </>
  );
}

export default App
