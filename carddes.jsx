import React,{component} from "react";
import Card from "./card";
import picOne from "./assets/01.png";
import picTwo from "./assets/02.png";
import picThree from "./assets/03.png";
import picFour from "./assets/04.png";
import picFive from "./assets/05.png";

class Carddes extends React.Component{
    render(){
        return (
            <>
                <div className="Card">
                    <Card
                    pic = {picOne}
                    Title = {"Title"}
                    bgcolor={"box1"}
                    content = {"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
                    button = {"React Js"}
                    boxcolor={"bg1"}/>

                    {/* <Card
                    pic = {picTwo}
                    Title = {"Title"}
                    bgcolor={"box2"}
                    content = {"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
                    button = {"code"}/> */}

                    <Card
                    boxcolor={"bg2"}
                    pic = {picThree}
                    Title = {"Title"}
                    bgcolor={"box3"}
                    content = {"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
                    button = {"HTML"}/>

                    <Card
                    boxcolor={"bg3"}
                    pic = {picFour}
                    Title = {"Title"}
                    bgcolor={"box4"}
                    content = {"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
                    button = {"CSS"}/>

                    <Card
                    boxcolor={"bg4"}
                    pic = {picFive}
                    Title = {"Title"}
                    bgcolor={"box5"}
                    content = {"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
                    button = {"Boostrap"}/>
                
                </div>
            </>
        )
    }
}
export default Carddes
