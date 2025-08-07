import Center from "./components/Center";
import AutoCurtains from "./components/AutoCurtains";
import TapCurtains from "./components/TapCurtains";
import HolyDiv from "./components/HolyDiv";
import PanExpander from "./components/PanExpander";
import Form from "./components/Form.jsx";
import EnhancedForm from "./components/EnhancedForm.jsx";
import homerress from "./assets/homerress.jpg";
export default function App(){
  return <>
  <Center style={{
    width:"100%",
    height:"300px"
  }}>
    <AutoCurtains image={homerress}/>

    <TapCurtains image={homerress} />
  </Center>

  <Center style={{
    width:"100%",
    height:"400px",
    backgroundColor:"#08f"
  }}>
    <HolyDiv />
  </Center>

  <Center style={{
    width:"100%",
    height:"200px",
    backgroundColor:"#333"
  }}>
    <PanExpander />
  </Center>

  <Center>
    <EnhancedForm />
  </Center>
  <Center>
    <Form />
  </Center>

  </>
}