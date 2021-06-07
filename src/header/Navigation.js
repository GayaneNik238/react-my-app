//import React from "react";
// import './navigation.css'
const Navigation = ({bool}) => {
    return(
        <div style={{color : bool === true ? "yellow" : "pink"}}>  
        This is the Navigation
        </div>
        
    );
};

export default Navigation;
