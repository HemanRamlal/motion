import {motion} from 'motion/react';
import "./Curtains.css";

export default function AutoCurtains({image}){
  return <>
  <div className="reveal">
    <img src={image}>
    </img>
    <div className="curtain">
      <motion.div className="curtain-left" 
        style={{
          transformOrigin: "top left"
        }}

        animate={{
          rotate:"45deg",
          skewX:7,
          skewY:7
        }}

        transition={{
          type:"spring",
          duration: 4,
          bounce: 0.7
        }}
      />
      <motion.div className="curtain-right" 
        style={{
          transformOrigin: "top right"
        }}

        animate={{
          rotate:"-45deg",
          skewX:-7,
          skewY:-7
        }}

        transition={{
          type:"spring",
          duration: 4,
          bounce:0.7
        }}
      />
    </div>
  </div>
  </>
}