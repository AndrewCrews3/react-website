

function Button() {


    //uses javascript to output into console on the click f a button
  /*  let count = 0;

    const note = (name) => {
            if (count < 5) {
                count++;
                console.log(`${name} brother keep going till you get sticky keys`);
                
            }
            else{
                console.log('ngl you getting sticky keys')
            } 

    } */

            const handeClick = (e) => e.target.textContent = "OUCHIE";  //e stands for event --- clickevent
            const handeClick2 = (e) => e.target.textContent = "bro twice?";

    


    return(
        //onClick must = a function to properly wotk
        // exmaple ----- onClick = { () => function()}
        <button className='button' onDoubleClick={ (e) => handeClick2(e)} onClick ={ (e) => handeClick(e) }>Click me!</button>
    );

}

export default Button