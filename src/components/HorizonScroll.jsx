import StackIcon from "tech-stack-icons";

export default function HorizonScroll({classes}) {
  return (
    <div className={classes}>
      <div className="wrapper ">
        <div className="itemLeft item1"><StackIcon name="ps" /></div>
        <div className="itemLeft item2"><StackIcon name="ai" /></div>
        <div className="itemLeft item3"><StackIcon name="android" /></div>
        <div className="itemLeft item4"><StackIcon name="bash" /></div>
        <div className="itemLeft item5"><StackIcon name="python" /></div>
        <div className="itemLeft item6"><StackIcon name="c++" /></div>
        <div className="itemLeft item7"><StackIcon name="csharp" /></div>
        <div className="itemLeft item8"><StackIcon name="tailwindcss" /></div>
      </div>
      <div className="wrapper">
        <div className="itemRight item1"><StackIcon name="figma" /></div>
        <div className="itemRight item2"><StackIcon name="threejs" /></div>
        <div className="itemRight item3"><StackIcon name="pytorch" /></div>
        <div className="itemRight item4"><StackIcon name="java" /></div>
        <div className="itemRight item5"><StackIcon name="js" /></div>
        <div className="itemRight item6"><StackIcon name="mongodb" /></div>
        <div className="itemRight item7"><StackIcon name="nodejs" /></div>
        <div className="itemRight item8"><StackIcon name="reactjs" /></div>
      </div>
    </div>
  );
}
