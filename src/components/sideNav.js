import reactDom from "react-dom"; 
import "../App.css";
import {SidebarData} from "./SidebarData";

function SideNav(){

    return(
        <div className="Sidebar">
            <div className="SidebarList">
                {SidebarData&&SidebarData.map((value,key)=>{
                    // console.log(value, key);
                    return(
                        <div key={key} 
                         className="row"
                         id ={window.location.pathname == value.link ? "active":""}
                         onClick={()=>{window.location.pathname = value.link}}>
                            {" "}
                            <div id="icon">{value.icon}</div>{" "}
                            <div id="title">
                                {value.title}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default SideNav 
