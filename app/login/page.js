'use client'
import Breadcrumb from "@/includes/Breadscrumb";
import * as React from "react"
import { useForm } from 'react-hook-form';
import { useRouter } from "next/navigation";
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Login(){
  const router = useRouter();
  const { register, handleSubmit,reset, formState: { isSubmitting,errors } } = useForm();
  const onSubmit = async (data) => {
;

if(data.service==="bulk_sms_service"){
router.push("https://smsjust.com/blank/login.php");
}

if(data.service==="gsm_sms_service"){
  router.push("https://fastsms.bulkwhatsapp.net/");
  }

  if(data.service==="bulk_whatsApp_service"){
    router.push("https://login.digitalsms.biz/signin.php");
    }

    if(data.service==="bulk_whatsApp"){
      router.push("http://182.75.84.114/");
      }

      if(data.service==="bulk_voice_call_service"){
        router.push("http://103.255.103.28/");
        }

        if(data.service==="business_verified_whatsApp"){
          router.push("http://app.infobynitin.com/login");
          }

          if(data.service==="bulk_email_service"){
            router.push("http://cp.richsol.com/");
            }

 
  };


    return(
        <>
        <Breadcrumb page="Login"/>
      
<div className="flex justify-center py-10">
<form onSubmit={handleSubmit(onSubmit)}>
<Card className="w-[450px] p-2">
      <CardHeader>
        <CardTitle className="capitalize text-2xl text-center">Choose Your Sign-In Method </CardTitle>
        <CardDescription className="text-center">Access with Your Preferred Account</CardDescription>
      </CardHeader>
      <CardContent>
   
          <div className="grid w-full items-center gap-4">
            {/* <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div> */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework" className="text-md">Select Service</Label>

              <select className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2" {...register("service", { required: true })}>
              <option value="">Select Service</option>
              <option value="bulk_sms_service">Bulk SMS Service</option>
                  <option value="gsm_sms_service">GSM SMS Service</option>
                  <option value="bulk_whatsApp_service">Bulk WhatsApp Service</option>
                  <option value="bulk_whatsApp">Bulk WhatsApp</option>
                  <option value="bulk_voice_call_service">Bulk Voice Call Service</option>
                  <option value="business_verified_whatsApp">Business Verified WhatsApp</option>
                  <option value="bulk_email_service">Bulk Email Service</option>
      </select>
              {errors.service && <span className='mt-1 text-red-500'>Provide service</span>}
            </div>
          </div>
    
      </CardContent>
      <CardFooter className="flex justify-between w-full ">
        {/* <Button variant="outline">Cancel</Button> */}
        <Button className=" w-full bg-blue-500 hover:bg-blue-700">Submit</Button>
      </CardFooter>
    </Card>
    </form>
</div>



        </>
    );
}