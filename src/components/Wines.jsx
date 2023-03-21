import React from "react";
import SecondNavbar from "./SecondNavbar.jsx";
import WineCards from "./WineCards";

const Wines = () => {
  const wines = [
    {
      name: "Purcari, Cuvee De Purcari Brut 2018",
      webSite: "https://carlevana.md",
    },
    {
      name: "Cricova, Cuvee Prestige Brut 2016",
      webSite: "https://carlevana.md",
    },
    {
      name: "Purcari, Viorica de Purcari 2020",
      webSite: "https://purcari.wine",
    },
    {
      name: " Château Vartely, Feteasca Regala 2020",
      webSite: "https://cluboenologique.com/product/feteasca-regala/",
    },
    {
      name: "SC Tartcomvin, Novak Alb de Onitcani 2019",
      webSite: "https://cluboenologique.com/product/white-wine-sc-tartcomvin-alb-de-onitcani-moldova-2019-75cl/",
    },
    {
      name: "Vinaria Din Vale, Motive Feteasca Neagra 2018",
      webSite: "https://cluboenologique.com/product/red-wine-vinaria-din-vale-feteasca-neagra-valul-lui-traian-2018-75cl/",
    },
    {
      name: "Fautor Winery, Blanca Cuvée 2020",
      webSite: "https://cluboenologique.com/product/white-wine-fautor-winery-albarino-moldova-2020-75cl/",
    },
    {
      name: " Asconi, Sol Negru Traminer 2020",
      webSite: "https://cluboenologique.com/product/white-wine-asconi-traminer-moldova-2020-750ml/",
    },
    {
      name: "Apriori Wine, Empirico Feteasca Neagra-Ancellotta 2019",
      webSite: "https://cluboenologique.com/product/empirico-feteasca-neagra-ancellotta/",
    },
    {
      name: "Domeniile Davidescu, Rara Neagra-Saperavi 2019",
      webSite: "https://cluboenologique.com/product/red-wine-domeniile-davidescu-rara-neagra-moldova-2019-75cl/",
    },
  ];
  return (
    <>
      <SecondNavbar styleClass={"nav-wines"} />
      <div className="flex-container">
        {wines.map((wine, index) => {
          return <WineCards key={index} {...wine} />;
        })}
      </div>
    </>
  );
};

export default Wines;
