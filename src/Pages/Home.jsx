import React, { useContext } from "react";
import { RiImageAiLine } from "react-icons/ri";
import { LuImageUp } from "react-icons/lu";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaArrowUpLong } from "react-icons/fa6";
import { DataContext } from "../Context/Usercontext";
import Chat from "./Chat";

const Home = () => {
   const {start,setStart} =useContext(DataContext)

   async function handlesubmit(e){
    e.preventDefault()
    
    setStart(true)
   }
  return (
    <div className="home">
      <nav>
        <div className="logo">Nex AI Bot</div>
      </nav>

{!start? <div className="hero">
        <span>What can i help with..?</span>
        <div className="category_section">
          <div className="upimg_section">
            <LuImageUp />
            <span>Upload image</span>
          </div>
          <div className="genImg_section">
            <RiImageAiLine />
            <span>Generate image</span>
          </div>
          <div className="chat_section">
            <IoChatboxEllipsesOutline />
            <span>Let's Chat</span>
          </div>
        </div>
      </div> :<Chat/>
}
     
      <form className="input-section" onSubmit={(e)=>handlesubmit(e)}>
        <button id="add">
          <FaPlus />
        </button>
        <input className="" type="" placeholder="Ask something..." />

        <button id="submit">
          <FaArrowUpLong />
        </button>
      </form>
    </div>
  );
};

export default Home;
