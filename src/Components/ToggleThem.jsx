import { Moon } from "lucide-react";
import { useState, useEffect } from "react";

export default function ToggleTheme(){
const[theme, setThem] = useState(()=>{
localStorage.getItem('theme')|| 'light';
});
useEffect(()=>{
const root = window.document.documentElement;
if(theme=== 'dark'){
 root.classList.add('dark');
}else{
root.classList.remove('dark');
}
localStorage.setItem('theme', theme)
}, [theme]);

return(

<button
onClick={()=> setThem(theme ==='dark'? 'light':'dark')}
className=""
>
 <Moon className="w-6 h-6 text-black dark:text-white"/>               
</button>

)
}