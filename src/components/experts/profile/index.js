import React from "react";
import Bio from "./bio.js";
import Expertmedia from "../assets/images/expertImg.png";
import Post from "../../Questions/questionPost/post.js";
import diet from "../../Questions/assets/images/diet.png";
import user from "../../Questions/assets/images/user.png";
import post1 from "../../Questions/assets/images/post1.png";
import post2 from "../../Questions/assets/images/post2.png";
import "./assets/css/style.scss";
export default function ProflePage() {
  var Profile = {
    name: "Carrie Riestenber, MD",
    location: "Los Angeles, CA ",
    thanksCount: "12",
    answerCount: "35",
    data1: "OBGYN",
    data2: "REI Fellow",
    media: Expertmedia,
    questionCount: 23,
    likesCount: 54,
    info: "",
    education: "David Geffen School of Medicine at UCLA"
  };

  return (
    <div className="Profile experts qustionsPage">
      <Bio content={Profile} />
      <div className="content">
        <h2 className="nametitile">Santiago’s Answers</h2>
        <Post
          title="What are the odds of getting boy/girl twins when implanting two embryos of unknown sex?"
          img={user}
          name="Santiago Munne, PhD"
          designation="Geneticist, Researcher"
          answer="PGD stands for Preimplantation Genetic Diagnosis and is indicated for couples that both partners are carriers of the same genetic disease, such as Cystic Fibrosis… (read more)"
          thumbnail={post2}
          tag={diet}
          answers="10"
        />

        <Post
          title="What are the odds of getting boy/girl twins when implanting two embryos of unknown sex?"
          img={user}
          name="Santiago Munne, PhD"
          designation="Geneticist, Researcher"
          answer="PGD stands for Preimplantation Genetic Diagnosis and is indicated for couples that both partners are carriers of the same genetic disease, such as Cystic Fibrosis… (read more)"
          thumbnail={post1}
          tag={diet}
          answers="10"
        />

        <Post
          title="What are the odds of getting boy/girl twins when implanting two embryos of unknown sex?"
          img={user}
          name="Santiago Munne, PhD"
          designation="Geneticist, Researcher"
          answer="PGD stands for Preimplantation Genetic Diagnosis and is indicated for couples that both partners are carriers of the same genetic disease, such as Cystic Fibrosis… (read more)"
          tag={diet}
          answers="10"
        />

        <Post
          title="What are the odds of getting boy/girl twins when implanting two embryos of unknown sex?"
          img={user}
          name="Santiago Munne, PhD"
          designation="Geneticist, Researcher"
          answer="PGD stands for Preimplantation Genetic Diagnosis and is indicated for couples that both partners are carriers of the same genetic disease, such as Cystic Fibrosis… (read more)"
          thumbnail={post2}
          tag={diet}
          answers="10"
        />
      </div>
    </div>
  );
}
