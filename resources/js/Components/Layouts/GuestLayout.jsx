import {Outlet} from "react-router-dom";

export default function GuestLayout(){
return(
   <div>
       <div>For guests users...</div>
       <Outlet/>
   </div>
)
}
