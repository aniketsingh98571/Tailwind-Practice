import React,{useState} from "react"
import logo from '../../assets/logo.png'
import box from '../../assets/box.png'
export default function Header(){
    const [activeLink,setActive]=useState("Evolution")
    return (
        <div> 
            <div class="w-page-width mx-auto m-0 flex justify-between items-center pt-5 pb-5">
                <div>
                    <img src={logo} alt="logo"/>
                </div>
                <div class="flex items-center gap-10">
                    <p class={`text-${activeLink==="Evolution"?"active":"white"} text-xl cursor-pointer font-mono-regular`} onClick={()=>setActive("Evolution")}>Evolution</p>
                    <p className={`text-${activeLink==="Mint"?"active":"white"} text-xl cursor-pointer font-mono-regular`} onClick={()=>setActive("Mint")}>Mint</p>
                </div>
                <div>
                    <button type="button" className="w-24 relative">
                        <img className="w-full" src={box} alt="box"/>
                         <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono-regular"> Profile</p>
                    </button>
                    <button type="button" className="hidden">
                        <div className="bg-white h-3 w-3"></div>
                        <div className="bg-white h-3 w-3"></div>
                    </button>
                </div>
            </div>
        </div>
    )
}

/* Vector 1 */


