import React from "react";
import Usercontext from "../utils/Usercontex";

class CardClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
          userinfo:{
              
            },
            name:"omkar"
        }
    }
    
   async componentDidMount(){
    const data= await fetch("https://api.github.com/users/omkartekmale")
    const json=await data.json();
    console.log(json);
    this.setState({
          userinfo:json,
    })
    }
    render(){

        const{name,location,url,avatar_url}=this.state.userinfo;
        return(
            <div className="about-card">
                <img src={avatar_url}/>
             <h2>Name:{name} </h2>
             <h4> address:{location}</h4>
             <h4> contact:{url} </h4>
             <Usercontext.Consumer>
                {(data)=><h4 className="font-bold text-3xl"> {data.loginuser}</h4>}
             </Usercontext.Consumer>
            </div>
        )
    }
};

export default CardClass;