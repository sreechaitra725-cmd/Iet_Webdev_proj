import { useState } from "react";
const Rating = () => {
     const [rated,setRating] = useState(0);
     const [temp,tempRating] = useState(0);
    const [editing,editRating] = useState(false);
    return ( 
        <div className="rating-container">
        
        {temp?<p className="rating-value">{temp}/5.0</p>:null}
      
        <button onClick={()=>{editRating(true)}} className="rating-btn">
            { (!rated) ? "Leave rating" : "Edit Rating"}
        </button>
        {editing && (
            <>
              <input type="range"
        min="0"
        max="5"
        step="0.1"
        value={temp}
        onChange={(e) => tempRating(e.target.value)}
        className="rating-slider"/>
        <button onClick={()=>{setRating(temp);
            editRating(false)}} className="submit-btn">
            Submit
        </button>
        <button onClick={()=>{tempRating(rated)
            editRating(false)}} className="cancel-btn">
            Cancel
        </button>
        </>

        )}
       </div>
     );
}
 
export default Rating;