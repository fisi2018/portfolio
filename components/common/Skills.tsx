import Image from "next/image";
import nextjs from "../../assets/images/nextjs.png";
import mongodb from "../../assets/images/mongodb.png";
import expresjs from "../../assets/images/expressjs.png";
import nodejs from "../../assets/images/nodejs.png";
import tailwind from "../../assets/images/tailwind.png";
import typescript from "../../assets/images/typescript.png";
import redux from "../../assets/images/redux.png";
import reactjs from "../../assets/images/reactjs.png";
import mysql from "../../assets/images/mysql.png";
export default function Skills(){
    return(
        <aside className="grid grid-cols-3 grid-flow-row  gap-4 w-full p-4" >
            <div className="flex  relative" >
                <Image layout="intrinsic"   src={nextjs}/>
            </div>
            <div className="flex relative" >
                <Image layout="intrinsic"    src={mongodb}/>
            </div>
            <div className="flex   relative" >
                <Image layout="intrinsic"  src={expresjs}/>
            </div>
            <div className="flex relative" >
                <Image layout="intrinsic"  src={nodejs}/>
            </div>
            <div className="flex relative" >
                <Image layout="intrinsic"  src={tailwind}/>
            </div>
            <div className="flex relative" >
                <Image layout="intrinsic"  src={typescript}/>
            </div>
             <div className="flex relative" >
                <Image layout="intrinsic"  src={mysql}/>
            </div>
             <div className="flex relative" >
                <Image layout="intrinsic"  src={reactjs}/>
            </div>
             <div className="flex relative" >
                <Image layout="intrinsic"  src={redux}/>
            </div>
        </aside>
    )
}