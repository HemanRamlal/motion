import {motion} from 'motion/react';
import {useState} from 'react';
export default function PanExpander(){
  const [panned, setPanned] = useState(0);

  console.log(panned);
  return <motion.div
    style={{
      width:"100px",
      height:"100px",
      backgroundColor:"green",
      fontSize:"2rem",
      userSelect:"none"
    }}

    animate={{
      rotate : `${panned}deg`
    }}

    onPan={(e, panInfo)=>{
      console.log(panInfo);
      setPanned(panInfo.offset.x);
    }}

    onPanEnd={()=>setPanned(0)}

    duration={{
      transition:1
    }}
  >{panned}</motion.div>

  
}