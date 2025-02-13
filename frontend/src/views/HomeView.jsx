import { Link } from "react-router";
import styles from "./HomeView.module.css";

export default function HomeView() {

  return ( <> 
  
    <div className="flex flex-row justify-center items-center h-screen">

      <div className="w-4/5">
        <div className="flex flex-col w-1/2">
          <div className="mb-4">
            <h1 className="font-bold text-3xl mb-2 slide-in">Wisanggeni Atthoriq Kuswirasatya</h1>
            <p className="slide-in" style={{animationDelay: "0.2s"}}>I am a student with interest in web development and currently seeking for experience in this field.</p>
          </div>

          <div className="flex flex-row">
            <Link className={["button", "slide-in", styles["button"]].join(" ")} style={{animationDelay: "0.4s"}}>Portofolio</Link>
          </div>
        </div>
      </div>

    </div>
  
  </> );

}