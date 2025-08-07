import "./Center.css";
export default function Center({children, style}){
  return <div className="center" style={{
    ...style
  }}>
    {children}
  </div>
}