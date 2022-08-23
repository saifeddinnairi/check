import StartRating from "./starRating";
import './navBar.css';
function Navbar ()
  {



    return (
    <div className="nav">
    < StartRating/>
    <input type={"search"} />
    <button>Search</button>
    
    </div>
    )
  }
  export default Navbar;