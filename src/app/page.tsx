
import BESTAIR from "@/components/BESTAIR";
import Featured from "@/components/FEATURED";
import Hero from "@/components/hero";
import { GearUpShop } from '@/components/GearUpShop';
import Last from "@/components/last";
import Essential from "@/components/essential";
import Miss from "@/components/miss";
import Sidebar from "@/components/allproducts";
import Prodetail from "@/components/prodetail"
import LoginForm from "@/components/loginform";
import Cart from "@/components/cart";
import Order from "@/components/order";
import SignUpForm from "@/components/Signup";
import Button from "@/components/ui/button";


export default function Home() {
  return (
    <div>
      
      <Hero/>
      <BESTAIR/>
      <Button/>
      <Featured/>
      <GearUpShop />
      <Miss/>
      <Essential/>
      <Last/>

      <Sidebar/>

      <Prodetail/>

      <LoginForm/>

      <SignUpForm/>

      <Cart/>

      <Order/>
     
    </div>
  );
};


   