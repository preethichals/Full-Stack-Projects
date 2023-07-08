import axios from "axios";
import { Checkbox } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";

function Mplan() {
  const navigate = useNavigate();
  const [plan, setPlan] = useState([]);
  const [checked, setChecked] = useState([]);
  const [categories, setCategories] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);

  //Get all plans
  const getAllPlans = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`https://capstone-proj-82p2.onrender.com/api/v1/plan/plan-list/${page}`);
      setPlan(data.plan);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //Get total count
  const getTotal = async () => {
    try {
      const { data } = await axios.get("https://capstone-proj-82p2.onrender.com/api/v1/plan/plan-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  //Lifecycle method
  useEffect(() => {
    if (page === 1) return;
    loadmore();
    // eslint-disable-next-line
  }, [page]);

  //Loadmore
  const loadmore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`https://capstone-proj-82p2.onrender.com/api/v1/plan/plan-list/${page}`);
      setLoading(false);
      setPlan([...plan, ...data?.plan]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //Lifecycle methods
  useEffect(() => {
    if (!checked.length) getAllPlans();
    // eslint-disable-next-line
  }, [checked.length]);

  useEffect(() => {
    if (checked.length) filterPlan();
    // eslint-disable-next-line
  }, [checked]);

  //Get Filter meal plans
  const filterPlan = async () => {
    try {
      const { data } = await axios.post("https://capstone-proj-82p2.onrender.com/api/v1/plan/plan-filter", {
        checked,
      });
      setPlan(data?.plan);
    } catch (error) {
      console.log(error);
    }
  };

  //Lifecycle method
  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);

  //Get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("https://capstone-proj-82p2.onrender.com/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Filter by Category
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  return (
    <Layout title={"Meal-Plans"}>
      <main className=" container">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="m-3">
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
        {/* Banner */}
        <div className="row">
          <div className="container border-2 border-top border-bottom mb-3 ">
            <div className="bg-plan row">
              <div
                className=" container mt-5 col-md-6 text-center"
                style={{ backgroundColor: "transparent" }}
              >
                <p className="font-weight-bolder lh-base text-uppercase ">
                  <span
                    className=" fs-1"
                    style={{ letterSpacing: "0.2em", color: "#41025f" }}
                  >
                    Eating smart{" "}
                  </span>
                  <br />
                  <span className="fs-5" style={{ color: "#3e4444" }}>
                    Has never been easier,
                  </span>
                </p>
                <h5 className="fs-5 lh-base" style={{ color: "#696969" }}>
                  Follow any eating style, Our delicious meal plans are designed
                  by registered dietitians
                </h5>
                <h5
                  className=" container fw-light lh-lg text-uppercase"
                  style={{ color: "#41025f" }}
                >
                  These all are the Free Plans, Call Our Dietitians for
                  Specified Plans based on your health and needs <br />{" "}
                </h5>
                <button
                  className="btn btn-md text-white text-uppercase"
                  style={{
                    backgroundColor: "#46866c",
                    letterSpacing: "0.2em",
                  }}
                >
                  {" "}
                  Call Dietitian{" "}
                </button>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
        {/* Filter by category */}
        <div className="row ">
          <div className="col-md-3">
          <h5 className="mx-4 mt-4 mb-2 text-uppercase fw-semibold" style={{color:"#46866c"}}>Filter by Category</h5>
            <div className="d-flex flex-column ">
              {categories?.map((c,index) => (
                <Checkbox
                  className="fs-6 text-capitalize mx-4 my-2"
                  key={index}
                  onChange={(e) => handleFilter(e.target.checked, c._id)}
                >
                  {c.name}
                </Checkbox>
              ))}
            </div>
            <button
              className=" btn btn-danger mt-3"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
          {/* All meal Plan list */}
          <div className="col-md-9" id="plan">
            {isLoading ? (
              <span>Loading...</span>
            ) : (
              <div>
                <h3 className=" text-uppercase text-center" style={{ letterSpacing: "0.2em"}}>All Diet Plans</h3>
                <div className="row">
                  {plan?.map((p) => (
                    <div
                      key={p._id}
                      navigate={`/plan/${p.slug}`}
                      className="col-sm-1 card m-1 p-2 rounded-2 text-center"
                      style={{ width: "30rem", height: "auto" }}
                    >
                      <img
                        src={`https://capstone-proj-82p2.onrender.com/api/v1/plan/plan-sampleimage/${p._id}`}
                        alt={p.name}
                        className=" p-2 rounded-0 img-fluid"
                        style={{ width: "30rem", height: "20rem" }}
                      />

                      <h5
                        className="fs-3 text-uppercase"
                        style={{ letterSpacing: "0.2em", color: "#47856c" }}
                      >
                        {p.name}
                      </h5>
                      <p
                        className="fs-6 text-uppercase"
                        style={{ letterSpacing: "0.1em" }}
                      >
                        {p.description.substring(0, 120)}
                      </p>
                      <div>
                        <button
                          className="btn my-2 mx-3 text-white"
                          onClick={() => navigate(`/plan/${p.slug}`)}
                          style={{
                            backgroundColor: "#373132",
                            letterSpacing: "0.1em",
                          }}
                        >
                          More Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* Load More */}
            <div className="m-2 p-3">
              {plan && plan.length < total && (
                <button
                  className="btn btn-success"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(page + 1);
                  }}
                >
                  {isLoading ? "Loading..." : "Load More"}
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Mplan;
