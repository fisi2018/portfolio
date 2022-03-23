import { useTitle } from "../../hooks/useTitle"

export default function MoveTitle({title}){
    const {titleMov}=useTitle();
    /*const titleMov=useRef<HTMLDivElement>();
    useEffect(()=>{
        let classTranslate="translate-x-0";
        document.addEventListener("scroll",()=>{
            let porcentage:number=window.scrollY/Math.round(document.body.scrollHeight-window.innerHeight)*100;
            console.log("scroll ",window.scrollY);
            let newClass=`translate-x-[${porcentage.toFixed(2)}%]`;
            titleMov.current.classList.replace(classTranslate,`${newClass}`);
            classTranslate=newClass;
        })
    },[])*/
    return(
        <div ref={titleMov} className={`fixed left-0 top-1/2 w-full transition-all duration-300 translate-x-0 uppercase text-7xl font-bold text-gray-300`} >
            <h1>{title}</h1>
        </div>
   
    )
}