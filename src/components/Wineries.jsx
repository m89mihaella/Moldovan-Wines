import React from "react";
import Cards from "./Cards";
import "../styles/wineries.css";
import Navbar from "./Navbar";

const Wineries = () => {
  const wineries = [
    {
      name: "Carlevana Winery",
      description: "Pioneer in Moldova for introducing Western Technology in the field of winemaking",
      image: "https://www.winetourism.com/files/2020/09/carlevana-winery-bottles_z0nbnl-1500x500.webp",
      alt: "Carlevana Winery",
      address: "Moldova, Chisinau",
      webSite: "https://carlevana.md",
    },
    {
      name: "Et Cetera",
      description: "Discover a Boutique Wine in the Beautiful Moldova",
      image: "https://www.winetourism.com/files/2020/09/et-cetera-tour-1500x500.webp",
      alt: "Et Cetera",
      address: "Moldova, Chisinau",
      webSite: "https://etcetera.md/",
    },
    {
      name: "Château Purcari",
      description: "Wines from a Pleasant Oasis on the Frontier of Europe since 1827",
      image: "https://www.winetourism.com/files/2022/07/dji_0996-1500x500.webp",
      alt: "Château Purcari",
      address: "Moldova, Purcari",
      webSite: "https://purcari.wine",
    },
    {
      name: "Vinaria Din Vale",
      description: "A family-run winery in UNESCO protected region for more than 20 years",
      image: "https://www.winetourism.com/files/2020/05/vinaria-din-vale-wooden-barrels_omuu3g-1500x500.webp",
      alt: "Vinaria Din Vale",
      address: "Moldova, Tigheci",
      webSite: "https://vinaria.md",
    },
    {
      name: "Basavin Winery",
      description: "Discover the Forty Years of Biodynamic Approach in Winemaking",
      image: "https://www.winetourism.com/files/2021/03/basavin-winery-wine-bottle-1500x500.webp",
      alt: "Basavin Winery",
      address: "Moldova, Vulcanesti",
      webSite: "https://basavin.md",
    },
    {
      name: "Milestii Mici",
      description: "Pioneer in Moldova for introducing Western Technology in the field of winemaking",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/ef/b6/0d/milestii-mici.jpg?w=1200&h=-1&s=1",
      alt: "Milestii Mici",
      address: "Moldova, Ialoveni",
      webSite: "https://www.milestii-mici.md",
    },
    {
      name: "Cricova Winery",
      description: "The biggest cellars in the whole world are here, where, underground lies a real city of wine.",
      image:
        "https://images.unsplash.com/photo-1593535388526-a6b8556c5351?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      alt: "Cricova Winery",
      address: "Moldova, Cricova",
      webSite: "https://cricova.md",
    },
    {
      name: "Château Vartely",
      description: "Château Vartely is a winery that combines the latest innovations with its passion for producing high-quality wines.",
      image: "https://vartely.md/wp-content/uploads/2016/10/slider1.jpg",
      alt: "Château Vartely",
      address: "Moldova, Orhei",
      webSite: "https://vartely.md",
    },
  ];
  return (
    <>
      <Navbar styleClass={"nav-wineries"} />
      <h1 className="h1-wineries">Browse through the best selection of outstanding wineries in Moldova</h1>
      <div className="wrap-container">
        {wineries.map(({ name, description, image, alt, address, webSite }, index) => {
          return (
            <Cards key={index} nameProp={name} descriptionProp={description} imageProp={image} altProp={alt} addressProp={address} webSiteProp={webSite} />
          );
        })}
      </div>
    </>
  );
};

export default Wineries;
