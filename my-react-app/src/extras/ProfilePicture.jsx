
function ProfilePicture() {

    const imgUrl = './src/assets/icons8-javascript-96.png'

    const handleClick = (e) => e.target.style.display = 'none';

    return(<img onClick={(e) => handleClick(e)} src = {imgUrl}></img>);

    

}
export default ProfilePicture

