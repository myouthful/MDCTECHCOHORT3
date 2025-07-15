export default function BusyLoader(){
 return(
<div className="bg-transparent flex justify-center items-center h-screen">
 <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin ">
<span className="sr-only">Processing please wait.......</span>
 </div>
</div>
 )
}