import {useState} from 'react';
import {motion} from 'motion/react';
import "./Curtains.css";

export default function TapCurtains({image}){
  const [isOpen, setIsOpen] = useState(false);
  return <>
  <div className="reveal">
    <img src={image}>
    </img>
    <div className="curtain">
      <motion.div className="curtain-left" 
        style={{
          transformOrigin: "top left"
        }}

        onTap={()=>setIsOpen(!isOpen)}

        animate={isOpen ? {
          rotate:"45deg",
          skewX:7,
          skewY:7
        } : {}}

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

        onTap={()=>setIsOpen(!isOpen)}

        animate={isOpen ? {
          rotate:"-45deg",
          skewX:-7,
          skewY:-7
        } : {}}

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