import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Layout from '../components/layout/Layout'
import {useCart} from './../context/cart'

function PlanDetail() {
    const params = useParams()
    const navigate = useNavigate()
    const [cart,setCart] = useCart()
    const [plan,setPlan]  = useState({})
    const [isLoading,setLoading] = useState(false)

    const getPlanDetail = async() => {
        try {
          setLoading(true)
            const {data} = await axios.get(`https://capstone-proj-82p2.onrender.com/api/v1/plan/get-plan/${params.slug}`)
           
            setPlan(data?.plan)
            setLoading(false)
            
        } catch (error) {
            console.log(error)
            
        }
    }
    useEffect(() => {
      if(params?.slug)getPlanDetail()
      // eslint-disable-next-line
    },[params?.slug])
    
    
  return (<>
  <Layout title={'Plan-Details'}>
  <nav aria-label="breadcrumb" className='m-3'>
            <ol className="breadcrumb">
              <li className="breadcrumb-item text-decoration-none text-black">
                {" "}
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                <Link to="/home-category">Category</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <Link to="/plan">Plans</Link>
              </li>
            </ol>
          </nav>
   
    {isLoading ? 'Loading...' :  
    <div className='container'  style={{ backgroundColor: "#dceddd" }}>
    
    <div className='row container mt-4'>
        <div className='col-md-6 my-5'>
            <img className='img-fluid rounded-3 m-3' src={`https://capstone-proj-82p2.onrender.com/api/v1/plan/plan-sampleimage/${plan._id}`} alt={plan.name}/>

        </div>
        <div className='col-md-6 text-center '>
        <div
              className="container mt-5 text-center"
              style={{ backgroundColor:'transparent' }}
            >
              <p className="font-weight-bolderlh-base  ">
              <span
                className="fs-1 font-weight-bolder text-uppercase"
                style={{ letterSpacing: "0.1em", color: "#47856c" }}
              >
                {plan.name}
              </span>
              
            </p>
             
            <h6
                className="fs-5 px-2 lh-base w-100 text-center"
                style={{ color: "#696969" }}
              >
               {plan.description}
              </h6>
              <h6
                className="fs-6 px-2 lh-base w-100 text-left fs-5" style={{ color: "#3e4444" }}
              >
              <span className='text-uppercase fs-4' style={{ letterSpacing: "0.2em", color: "#a0530a" }}>
              Details :</span> {plan.description}
              </h6>

              <button
                className="btn btn-md text-white text-uppercase my-4 mx-2"
                style={{ backgroundColor: "#999999", letterSpacing: "0.2em" }}
                onClick={() => navigate('/plan') }
              >
                Back to Plan
              </button>
              <button
                className="btn btn-md text-white text-uppercase my-4 mx-2"
                style={{ backgroundColor: "#999999", letterSpacing: "0.2em" }}
                onClick={() => {
                  setCart([...cart,plan])
                  toast.success('Plan added to Your List')
                }}
              >
                Add to List
              </button>
            </div>


          

        </div>
        

    </div>
    </div>

    }
   
   </Layout>
  </>
    
    
  )
}

export default PlanDetail