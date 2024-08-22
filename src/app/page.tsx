import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } 
  from "@/components/ui/avatar"


export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>ShadCN practice
   
    <Avatar >
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar> 
</h1>


    
</main>

  );
}
