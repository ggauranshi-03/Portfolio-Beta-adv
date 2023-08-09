/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Dog Breed Prediction",
    description:
      "This project aims to classify dog breeds using deep learning with TensorFlow and a convolutional neural network (CNN).",
    url: "https://colab.research.google.com/drive/19f_A8o4SS1Axh82aVuUsi9KFaYAJAcSk?usp=sharing",
  },
  {
    title: "Heart- Disease Predictor",
    description:
      "It is a ML model which predicts whether a patient has heart disease or not based on various input parameters. The dataset for this project was taken from kaggle and jupyter notebook was used as a workspace.",
    url: "https://github.com/ggauranshi-03/Heart-disease-project",
  },
  {
    title: "SmartMeds",
    description:
      "SmartMeds: SmartMeds is a blockchain-based hospital management system that ensures a secure platform for managing patient records, prescriptions, medication adherence and appointment scheduling",
    url: "https://devfolio.co/projects/smartmeds-769e",
  },
  {
    title: "Defi-Tipping Dapp",
    description:
      "ser needs to connect their metamask wallet to perform transactions. The smart contract is build in solidity and deployed through hardhat",
    url: "https://defi-tipping-dapp.gauranshigupta.repl.co",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
