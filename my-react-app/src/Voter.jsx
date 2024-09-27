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

}

export default Voter