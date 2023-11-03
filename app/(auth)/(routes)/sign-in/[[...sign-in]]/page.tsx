import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="flex bg-orange-100 w-full h-screen justify-between items-center">
      <div className="h-full">
      <img src="/lmsimage.png" alt="back" className="h-full"/>
      </div>
      <div className="mx-auto">
        <h1 className="text-2xl text-orange-600 font-bold text-center">Nevtis LMS</h1>
        <SignIn />
      </div>
    </div>
    );
}