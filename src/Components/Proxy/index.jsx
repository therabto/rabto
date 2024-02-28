import React, { Fragment, useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import Loading from '../Loading/Loading';
import { useParams ,  useNavigate } from "react-router-dom";
import {handleFoodForUser , handleGiftForUser , handleHallForUser} from "../../APIS/APIs";

const Index = () => {
    const [isPopup,setIsPopup] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [message,setMessage] = useState('');

    let { userID } = useParams();

    let navigate = useNavigate();

    const HandlePopup = ()=>{
           setIsPopup(!isPopup);
    }
    // console.log("userID",userID);

    const FoodHandler = (data)=>{
        // console.log("data",data);
        setIsLoading(true);
        handleFoodForUser(userID,data)
        .then(response=>{
            // console.log("response",response);
                setMessage(response.message);
                setIsLoading(false);
                HandlePopup();               
             
        })
       
    }

    const HallHandler = (data)=>{
        // console.log("data",data);
        setIsLoading(true);
        handleHallForUser(userID,data)
        .then(response=>{
            // console.log("response",response);
            setMessage(response.message);
           
                setIsLoading(false);
                HandlePopup();               
             
        })
       
    }

    const GiftHandler = (data)=>{
        // console.log("data",data);
        setIsLoading(true);
        handleGiftForUser(userID,data)
        .then(response=>{
            // console.log("response",response);
               setMessage(response.message);                 
               setIsLoading(false);
               HandlePopup();               
            
        })
    }



  return (
   <Fragment>
         {
            isPopup ?          
          <div>
         <div className='fixed top-0 left-0 h-[100vh] z-10 bg-[black] opacity-50  right-0 bottom-0' ></div>
      
          <div className='fixed top-0 z-[20] left-0 h-[100vh]   right-0 bottom-0'>
            <div className='flex items-center justify-center h-[100vh]'>
            <div className='w-[280px] border m-auto h-auto bg-white rounded-[20px]'>
       
              <div className='flex items-center justify-end mx-5 my-5'> <IoCloseSharp className='text-[25px]' onClick={()=>HandlePopup()} /> </div>
              <div className='my-3 flex mx-3 items-center justify-center'>
                  { message }
              </div>
              <div className='flex items-center justify-center my-10'>
                <button className='bg-[green] active:text-[18px] text-[20px] text-white p-2 rounded-[5px]' onClick={()=>HandlePopup()}>Okay</button>
              </div>
            </div>   
            </div>          
          </div>
          </div>
          :
          null
          }
          {
            isLoading ?
            <Loading/>
            :
            null
          }

           <div className='w-[100%] h-[90vh]'>
            <div className='flex items-center justify-start'>
                <div className='bg-[green] text-white p-2 mt-2 ml-2 rounded-[7px] text-[10px]' onClick={()=>{navigate('/')}}>Back</div>
            </div>
           <div className='px-5 mt-3 front-bold text-[25px]'>FOOD</div>
              <div className='flex flex-col gap-3 mt-1 px-5'>
                   <div className='border active:bg-[green] flex item-center justify-center p-4 rounded-[10px] font-bold' onClick={()=>FoodHandler("Breakfast")}>BreakFast</div>
                   <div className='border active:bg-[green] flex item-center justify-center p-4 rounded-[10px] font-bold' onClick={()=>FoodHandler("Lunch")}>Lunch</div>
                   <div className='border active:bg-[green] flex item-center justify-center p-4 rounded-[10px] font-bold' onClick={()=>FoodHandler("Dinner")}>Dinner</div>
              </div>
              <div className='px-5 mt-5 front-bold text-[25px]'>
                <div>Hall</div>
                <div className='grid grid-cols-2 gap-5 '>
                     <div className='border active:bg-[green] flex item-center justify-center p-4 rounded-[10px] font-bold' onClick={()=>HallHandler("A")}>A</div>
                     <div className='border active:bg-[green] flex item-center justify-center p-4 rounded-[10px] font-bold' onClick={()=>HallHandler("B")}>B</div>
                     <div className='border active:bg-[green] flex item-center justify-center p-4 rounded-[10px] font-bold' onClick={()=>HallHandler("C")}>C</div>
                     <div className='border active:bg-[green] flex item-center justify-center p-4 rounded-[10px] font-bold' onClick={()=>HallHandler("D")}>D</div>
                </div>
              </div>
              <div className='px-5 mt-5'>
                <div className='front-bold text-[25px]'>Gift</div>
                <div className='border active:bg-[green] flex item-center justify-center p-4 rounded-[10px] font-bold' onClick={()=>GiftHandler(true)}>GIFT</div>
              </div>

           </div>
   </Fragment>
  )
}

export default Index