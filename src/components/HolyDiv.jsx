import { motion } from "framer-motion";

export default function HolyDiv(mode){
  return <motion.div
    style={{
      height:"100px",
      width:"100px",
      backgroundColor:"#fff",
      //boxShadow:"0px -100px 50px 30px #fff"
      boxShadow:"0px 0px 0px 0px #fff"
    }}

    animate={{
      backgroundColor:"#08f",
      boxShadow:"0px 0px 50px 0px #fff"
    }}

    transition={{
      duration:2
    }}
  />
}