import React from "react";
import HistoryContent from "./HistoryContent";
import Navbar from "./Navbar";
import "../styles/history.css";

const History = () => {
  const contentText = [
    {
      h2: "THE GENESIS",
      p1: "By the end of the twelfth century, Moldova’s wine industry had become a major sector of Southeastern Europe’s economy. While the whole region has favorable conditions for viniculture, specific areas are especially fertile for growing the most full- bodied grapes. The village of Purcari and the Agon Zograf Monastery vineyards lay at the heart of this special terroir.",
      p2: "Recognizing similarities in the soil and climate with the Bordeaux region, French settlers entered into partnerships with the monastery and began cultivating Purcari’s special vintages in the eighteenth century.",
      p3: "Several decades later, after the enterprise had become a profitable success, it was confirmed that Purcari vineyards are located at the same latitude as France’s famous wine region, and like Bordeaux, the soil rich was rich in rubidium (which is what gives both regions’ wines their intense purple color). As the region’s red wines developed their bouquets were able to attain comparable levels of intensity and complexity.",
      image: "./purcari1.png",
    },
    {
      h2: "THE FOUNDATION",
      p1: "In 1827, Emperor of Russia Nicholas I issued a special decree granting Purcari the status of the first specialized winery in Bessarabia. It was named in honor of one of the founders originating from Germany – Harmizone. Since then, the owners of Purcari have become Moldovan boyars (barons) Dancila and Clot, but also other Germans, Russians and French.",
      p2: "Two decades later, at the Agricultural Bessarabian Fair, Purcari received its first gold medal. By 1878, the winery was being celebrated in a closed wine tasting at the Paris World Expo. French experts were impressed with a dry wine of an intense ruby color, being sure that it was a new Bordeaux wine. What a surprise when they found it had originated in a small village on the banks of the Dniester River. In such a way, the Negru de Purcari wine won its first gold medal at an international exhibition.",
      p3: "  For a long time, Purcari wines were as popular as Bordeaux or Burgundy wines. The wine was served to Emperor Nicholas II as well as King George V and Queen Victoria of Great Britain. Sold in Denmark, Netherlands, Sweden, Germany and France, Purcari wines were highly appreciated and continued to win international acclaim.",
      image: "./purcari2.png",
    },
    {
      h2: "THE CONSOLIDATION",
      p1: "   Emerging from war, a new era in Purcari’s history started in 1950, when the Moldovan wine makers restored the classic production techniques of the famous wines. One of the greatest professionals of that time – Pimen Cupcea, reconstructed the legendary Negru de Purcari, while Ion Ungureanu created a new masterpiece – Purpuriu de Purcari.",
      p2: "Purcari wines once again achieved wide popularity, and became synonymous with the the Republic of Moldova.",
      p3: "",
      image: "./purcari3.png",
    },
    {
      h2: "TODAY",
      p1: "At the turn of the century, Château Purcari replanted 250 hectares of vineyards, and installed state-of-the-art technology at the winery. As Moldova’s most prestigious export, Purcari lead the nation’s international development by entering into over 25 markets including the US, Canada, UK, Norway, Czech Republic, China, Poland, and the Baltic countries.",
      p2: "In 2010, the company launched Alb de Purcari – a new vintage that has been garnering a number of international awards and recognitions. By 2012, the Purcari collection boasted Icewine, derived from frozen Muscat Ottonel and Traminer grapes. For outstanding achievements in winemaking and promoting Moldovas image abroad, Purcari Winery became the owner of Grand Prix in wine making, awarded by the Republic of Moldova Government.",
      p3: " The last decade of Purcari’s almost two centuries has seen the winery reach its most advanced and complex stage of its development. With the vineyards planted in 2003 reaching maturity, the quality of the grapes has improved significantly. The Château is poised to once again compete for discerning palates around the world.",
      image: "./purcari4.png",
    },
  ];
  return (
    <>
      <Navbar styleClass={"different"} />

      <div className="history">
        <h1>History</h1>
        <hr />
        {contentText.map(({ h2, p1, p2, p3, image }, index) => {
          return <HistoryContent key={ index} h2Prop={h2} p1Prop={p1} p2Prop={p2} p3Prop={p3} imageProp={image} />;
        })}
        <hr />
        <iframe
          width="1000px"
          height="700px"
          src="https://www.youtube.com/embed/54liVNwwpS0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default History;
