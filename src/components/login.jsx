import { useState } from "react";

const Login = () => {

    const [isLogin,setLogin] = useState(false);
    const [mode,setMode] = useState("");
    const [name,setName] = useState("");
    const [tempName, setTempName] = useState("");
    return ( 
        
        <>
        <button className="btn btn-sm btn-ghost" onClick={() =>setLogin(true)} >
           { name ? name : "Login"}
        </button>
        {
        
            isLogin &&
            <div className="login">
            <div className="pop-up">
            
            {mode=="" && (
                <>
                <div className="relative bg-white text-black p-6 rounded-xl min-w-[300px]">
                <button type="button" onClick={()=>{setLogin(false); setMode("")}} className="absolute top-2 right-4 text-2xl font-bold text-black">
                    x
                </button>

                <h2 className="text-xl font-semibold text-center mb-4"> Choose an option </h2>
                <hr className="border-gray-300 my-3" />
                <div className="flex flex-col gap-3">
                <button onClick={()=>setMode("Login")}  className="bg-blue-600 text-white py-2 rounded-lg">
                    Login
                </button>
               
                 <button onClick={()=>setMode("Register")}   className="bg-green-600 text-white py-2 rounded-lg">
                    Register
                </button>
                </div>
                </div>

                </>

            )
        }
        
        
        
           { mode=="Login" && (

           
                <form>
                
                
                <h3>Enter Email</h3>
                <input type="email" className="input-box"/>
                   
               
                <h3> Enter Password  </h3>
                <input type="password" className="input-box"/>

                <div className="button-row">

                 <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                    Submit
                </button>

                 <button type="button" onClick={()=>{setLogin(false); setMode("")}} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg">
                    Cancel
                </button>
                </div>

                </form>
             
               
            )
        }
        
               
           { mode=="Register" && (
     
                <form  onSubmit={(e) => {e.preventDefault();setName(tempName);setLogin(false);setMode("");}}>


                <h3>Enter Email</h3>
                <input type="email" className="input-box"/>
                   
               
                <h3> Enter Password  </h3>
                <input type="password" className="input-box"/>
                    
              
                <h3>  Enter Name </h3>
                <input type="text" className="input-box" value={tempName} onChange={(e) => setTempName(e.target.value)}/>
                    
             
                <h3> Enter Phone Number </h3>
                <input type="tel" className="input-box"/>
                    
               
                <div className="button-row">
                <button type="submit"  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                    Submit
                </button>

                 <button type="button" onClick={()=>{setLogin(false); setMode("")}} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg">
                    Cancel
                </button>
                </div>

                </form>
                
               
            )
        }
        </div>
        </div>
    }
        </>
     );
}
 
export default Login;