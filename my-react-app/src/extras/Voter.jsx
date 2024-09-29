import PropTypes from 'prop-types'


function Voter(props) {
    return(
        <div className="voter">
            <h2>Name:{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Eligible: {props.age >= 18 ? "Yes" : "No"}</p>
            <p>Party: {props.party ? "Democrat" : "Republican" }</p>
        </div>
    );
}

Voter.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    party: PropTypes.boolean,
}

Voter.defaultPropTypes = {
    name: 'Guest',
    age: 0,
    party: false,

}

export default Voter


/* How the Voter Cards would work when in App.jsx 
<Voter name = "Bradley" age = {17} party = {true} />
<Voter name = "Danny" age = {28} party = {true} />
<Voter name = "Joanne" age = {41} party = {false} />
<Voter name = "Trixie" age = {92} party = {false} />
<Voter name = "Charles" age = {55} party = {true} />
<Voter name = "Brooke" age = {44} party = {false} /> */