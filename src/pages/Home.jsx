
import React from "react";
import Button from "../components/Button";
import Vector1 from "../assets/Vector/1.png";
import Vector2 from "../assets/Vector/2.png";
import Vector3 from "../assets/Vector/3.png";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section id="home">
      <img src={Vector1} alt="Vector1" className="Vector1" />
      <div className="container-fluid px-0">
        <div className="container">
          <div className="row mt-lg-4">
            <div className="col-lg-8 col-md-12">
              <h1 className="primary-text" style={{ marginTop: "3rem" }}>
                    Profiles Explored, Locations Unveiled: Your Window to Connected Worlds
              </h1>
              <h3
                className="para-1 d-flex justify-content-center align-items-center"
                style={{ marginTop: "1rem", lineHeight: "1.3rem" }}
              >
                Exhausted from endless scrolling through profiles? Explore is here to transform your experience. Our intuitive platform offers seamless navigation through profiles, providing insightful details at your fingertips. Say goodbye to endless searches and hello to effortless exploration. With Explore, you can journey through profiles with ease, knowing that every detail is just a click away. Experience the convenience and satisfaction that comes with Explore!
              </h3>
              <Link to="/explore">
                <Button label="Start" c="main-btn" type="start" />
              </Link>
            </div>
            <div className="col-lg-4 col-md-12 d-flex justify-content-center align-items-center Graphics-1">
              <img
                src="https://images.unsplash.com/photo-1531592937781-344ad608fabf?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Graphical-1"
                height="480px"
                style={{borderRadius: '1rem'}}
              />
            </div>
          </div>

          <img src={Vector3} alt="Vector3" className="Vector3" />
          <img src={Vector2} alt="Vector2" className="Vector2" />

        </div>
      </div>
    </section>
  );
}
