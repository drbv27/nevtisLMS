import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="flex bg-orange-100 w-full h-full justify-between items-center">
      <div>
        Hola
      </div>
      <div>
        <SignIn />
      </div>
    </div>
    );
}