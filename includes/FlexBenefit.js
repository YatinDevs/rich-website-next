import Benefits from "./Benefits";



export default async function FlexBenefits({subpage}){

  
    return(
        <>
      
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full min-h-96 flex items-center py-20">
                <Benefits subpage={subpage}/>
            </div>
     

        </>
    )
}