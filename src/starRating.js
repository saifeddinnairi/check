import React ,{ useState } from 'react';
import { FaStar } from 'react-icons/fa'; 
import "./S.css"
const StartRating= ()=>{
    const [Rating, setRating] = useState(null);
    const [Hover, setHover] = useState(null);

    return(<div >
        
        {[...Array(5)].map((star , i)=>{
            const ratingValue= i + 1;
        return(<label>
        <input 
        type="radio" 
        name="rating" 
        value={ratingValue} 
        onClick={()=>setRating(ratingValue)} 
        
        />
        <FaStar 
        className='Star'  
        color={ratingValue<=(Hover||Rating)?"#ffc010":"#e4e5e9"} 
        size={20}
        onMouseEnter={()=>setHover(ratingValue)}
        onMouseLeave={()=>setHover(null)}
        />
        </label>)
        })}




    </div>

    )
}
export default StartRating ;