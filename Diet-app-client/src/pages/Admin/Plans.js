import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Layout from "../../components/layout/Layout";
import AdminMenu from "../../components/layout/AdminMenu";

const Plans = () => {
  const [plan, setPlan] = useState([]);

  //getallplans
  const getAllPlans = async () => {
    try {
      const { data } = await axios.get("https://capstone-proj-82p2.onrender.com/api/v1/plan/get-plan");
      setPlan(data.plan);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllPlans();
  }, []);
  return (
    <Layout>
      <div className="row m-3">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9 ">
          <h1 className="text-center">All Diet Plans</h1>
          <div className="d-flex flex-wrap ">
            {plan?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/plan/${p.slug}`}
                className="text-decoration-none text-black"
              >
                <div className="card m-2 rounded-2" style={{ width: "30rem",height:'auto'  }}>
                  <img
                    src={`https://capstone-proj-82p2.onrender.com/api/v1/plan/plan-sampleimage/${p._id}`}
                    alt={p.name}
                    className="border-1 p-2 rounded-0 img-fluid"
                    style={{ width: "14rem",height:'10rem'  }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Plans;
