import AuthBtn from "./AuthBtn";
function Header(){
   return (
<nav className="flex items-center justify-between
 bg-[#F8F8F8] w-[1438px] h-[90px] pt-[27px]
  pr-[98px] pb-[27px] pl-[98px] gap-[10px]">
   
<Logo />
<Link/>
<AuthBtn/>
    

</nav>
   )             
}

function Logo(){
  return (
    <div className="flex items-center space-x-2 ml-8">
     <img src="/Assets/logo.jpg" alt="logo" className=" w-[44px] h-[40px] block " />
     <div className="leading-tight">
      <h2 className="font-extrabold text-sm text-blue-700">Skill2Earn</h2>
      <p className="text-gray-500 font-bold text-xs">Where skills meet opportunity</p>
     </div>
    </div>
              
  )              
}

function Link(){
  return(
<ul className="flex  flex-1 justify-center list-none gap-[18px]">
  <li className="w-fit h-[18.3px]">Home</li>
  <li className="w-fit h-[18.3px]">About Us</li>
  <li className="w-[47.19px] h-[18.3px]">FAQs</li>
  <li className="w-[92.45px] h-[24px]">Contact Us</li>
</ul>

  )
}


export default Header;