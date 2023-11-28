import axios from "axios";
import { API_URL, config } from "../../utils/api";
import LinkContainer from "../../components/LinkContainer";
import PlanCardDetailsCard from "../../components/cards/plan-card/PlanCardDetailsCard";
import React, { useState, useEffect } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";

import "./PlansPage.css";
const PlansPage = () => {
  const onTwitterIconClick = () => {
    window.open(
      "https://twitter.com/shdrltd1/status/1641700159632310277?s=48&t=r-GBVBzTpZjRfn_mV3wpkw"
    );
  };
  const [plans, setPlans] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
   const [plansKey, setPlansKey] = useState(0);

  const onLinkClick = (categoryId) => {
    setActiveCategoryId(categoryId);
    const filteredPlans = plans.filter(
      (plan) => plan.category._id === categoryId
    );
    setPlans(filteredPlans);
    console.log(plans);
  };

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get(`${API_URL}/projects`, config);

        if (response.data.success) {
          setPlans(response.data.data.projects);
          console.log(response.dadta.data.projects);
        } else {
          // toast.error("Failed to fetch owners");
        }
      } catch (error) {
        // toast.error("An error occurred while fetching owners");
      }
    };
    fetchPlans();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/project-categories`,
          config
        );

        console.log(response.data.data.categories);

        if (response.data.success) {
          setCategories(response.data.data.categories);
        } else {
          // toast.error("Failed to fetch owners");
        }
      } catch (error) {
        // toast.error("An error occurred while fetching owners");
      }
    };
    fetchCategories();
  }, []);
  useEffect(() => {
    // After setting the plans, increment the key to trigger a re-render
    setPlansKey((prevKey) => prevKey + 1);
  }, [plans]); 
  return (
    <div className="planspage">
      <div className="plans-content">
        <div className="plansnav">
          <Link
            to="/projects"
            className={`all ${activeCategoryId === null ? "active" : ""}`}
            onClick={() => onLinkClick(null)}
          >
            All
          </Link>
          {categories.map((category) => (
            <span
              className={`all  ${
                activeCategoryId === category._id ? "active" : ""
              }`}
              onClick={() => onLinkClick(category._id)}
              key={category._id}
            >
              {category.title}
            </span>
          ))}
        </div>

        <div className="planslist">
          {plans.map((plan) => (
            <PlanCardDetailsCard
              image={plan.images[1]}
              category={plan.category.title}
              price={plan.planPrice}
              location={plan.location}
              livingRooms={plan.livingRooms}
              washRooms={plan.washRooms}
              bedRooms={plan.bedRooms}
              floors={plan.numberOfFloors}
              likes={plan.likes}
              key={`${plan._id}_${plansKey}`}
            />
          ))}
        </div>
      </div>
      <LinkContainer
        dimensions="/facebookicon2.svg"
        dimensions89="/shdrremovebgpreview-11@2x.png"
        onTwitterIconClick={onTwitterIconClick}
      />
    </div>
  );
};

export default PlansPage;
