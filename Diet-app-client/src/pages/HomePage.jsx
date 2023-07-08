import React from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../components/layout/Layout";
import SchemesPage from "../components/SchemesPage";

function HomePage() {
  const navigate = useNavigate();

  return (
    <Layout title={"Diet Suggestion App"}>
      <div className="container">
        {/* banner */}
        <div className="bg row">
          <div
            className=" container mt-5 col-md-6 text-center"
            style={{ backgroundColor: "transparent" }}
          >
            <p className="font-weight-bolder lh-base text-uppercase ">
              <span
                className=" fs-1"
                style={{ letterSpacing: "0.2em", color: "#47856c" }}
              >
                Eating smart{" "}
              </span>
              <br />
              <span className="fs-5" style={{ color: "#3e4444" }}>
                Has never been easier,
              </span>
            </p>
            <h5 className="fs-5" style={{ color: "#696969" }}>
              Follow any eating style, Our delicious meal plans
            </h5>
            <h5 className=" container fw-light lh-base">
              Are designed by registered dietitians,<br/><span className="text-uppercase fw-bold" style={{letterSpacing:'0.1em'}}> Sign-In to View all Plans</span><br />{" "}
            </h5>
            <button
              className="btn btn-md text-white text-uppercase"
              style={{ backgroundColor: "#46866c", letterSpacing: "0.2em" }}
              onClick={() => navigate("/home-category")}
            >
              View Category
            </button>
          </div>
          <div className="col-md-6"></div>
        </div>
        <div
          className="col-md-12 px-5 py-2 opacity-60"
          style={{ backgroundColor: "transparent" }}
        >
          <h3
            className="text-center text-decoration-underline text-uppercase mt-4"
            style={{ letterSpacing: "0.2em", color: "#1b2716" }}
          >
            Nutritional Guide
          </h3>

          <h5 className="text-center lh-lg">
            An easy-to-use nutritional interview will help you gather <br />
            the necessary information about your 24-hour diet and enter your
            eating habits.
          </h5>
          <p className=" lh-lg text-center">
            Patient's medical report Information about patients is presented in
            a clear and modern way, with the possibility of recording diagnosed
            conditions and coexisting ailments, food intolerance and allergies,
            family-related genetic burdens, laboratory results, medications
            used, dietary supplements and culinary tastes. The report is
            supplemented with calculators that will spare you work, allowing you
            to devote more attention to your current patients or gain time to
            acquire new ones.
          </p>
        </div>
      </div>
      {/* Nutritional regimens */}
      <div className=" container flex " style={{ backgroundColor: "#f0f0e2" }}>
        <div className="col-md-12 py-4 border-top border-3">
          <div className="row">
            <h3
              className="text-center text-decoration-underline text-uppercase"
              style={{ letterSpacing: "0.2em", color: "#47856c" }}
            >
              Nutritional regimens
            </h3>

            <h5 className="text-center lh-lg">
              In order to make work with the program easier and faster,
              <br />
              we have prepared five exclusion-based nutrition schemes. An
              easy-to-use nutritional interview will help you gather <br />
              the necessary information about your 24-hour diet and enter your
              eating habits.
            </h5>
          </div>
        </div>

        <SchemesPage />
        {/* Too Busy to plan? */}
        <div className=" row">
          <div className="col-md-12 mt-3">
            <h3
              className="text-center text-decoration-underline text-uppercase"
              style={{ letterSpacing: "0.2em", color: "#9e2509" }}
            >
              Too busy to plan?
            </h3>

            <h5 className="text-center lh-lg">
              Subscribe to our dietitian-prepared Specialty Meal Plans
              <br /> which offer balanced nutrition each and every week and can
              be easily customized to your personal tastes.
            </h5>
            <p className=" lh-lg text-center">
              Patient's medical report Information about patients is presented
              in a clear and modern way, with the possibility of recording
              diagnosed conditions and coexisting ailments, food intolerance and
              allergies, family-related genetic burdens, laboratory results,
              medications used, dietary supplements and culinary tastes. The
              report is supplemented with calculators that will spare you work,
              allowing you to devote more attention to your current patients or
              gain time to acquire new ones.
            </p>
          </div>
        </div>
        
      </div>
    </Layout>
  );
}

export default HomePage;
