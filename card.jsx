import React from "react";
import "./App.css"
class Card extends React.Component
{
    render()
    {
        let {pic,Title,content,button,bgcolor,boxcolor} = this.props;
        return(
            <div className ="Container">
                <div className ={`${bgcolor}`}> 
                    <img src={pic} width={85} height={85}/>
                </div>
                <div className="content">
                    <h1> {Title} </h1>
                    <p> {content}</p>
                    <button className={`${boxcolor}`}> {button}</button>
                </div>
            </div>
        )
    }
}
export default Card