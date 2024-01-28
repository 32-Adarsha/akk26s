"use client";
import { useEffect, useState } from "react";
import "../Front/font.css";

export default function Game({ setgStart }) {
  var allCard = [
    {
      name: "apple",
      fliped: false,
      img_loc: "./apple.png",
      matched: false,
    },
    {
      name: "pear",
      fliped: false,
      img_loc: "./pear.png",
      matched: false,
    },
    {
      name: "straberry",
      fliped: false,
      img_loc: "./straberry.png",
      matched: false,
    },
    {
      name: "apple",
      fliped: false,
      img_loc: "./apple.png",
      matched: false,
    },
    {
      name: "pear",
      fliped: false,
      img_loc: "./pear.png",
      matched: false,
    },
    {
      name: "straberry",
      fliped: false,
      img_loc: "./straberry.png",
      matched: false,
    },
  ];
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffleArray(allCard);
  const [flippedCards, setFlippedCards] = useState(allCard);
  const [twoCard, setTwoCard] = useState([]);
  const [rtn , setrtn] = useState(true);

  

  useEffect(
    () => {
      console.log(flippedCards)
      if (twoCard.length == 2) {
        if (flippedCards[twoCard[0]].name == flippedCards[twoCard[1]].name) {
          flippedCards[twoCard[0]].matched = true;
          flippedCards[twoCard[1]].matched = true;
          flippedCards[twoCard[0]].fliped = true;
          flippedCards[twoCard[1]].fliped = true;
          setTwoCard([])
        }
        else {
          setTimeout(() => {
            const newFlippedCards = [...flippedCards];
            newFlippedCards[twoCard[0]].fliped = false;
            newFlippedCards[twoCard[1]].fliped = false;
            setFlippedCards(newFlippedCards);
            setTwoCard([]);
          }, 700);
        }
        
      }
    } , [twoCard , flippedCards]
  );
  const handleFlip = (index) => {
    const newFlippedCards = [...flippedCards];
    if (!newFlippedCards[index].matched) {
      newFlippedCards[index].fliped = !newFlippedCards[index].fliped;
    }
    const newCard = [...twoCard]
    newCard.push(index)
    setTwoCard(newCard);
    setFlippedCards(newFlippedCards);
  };

  return (
    <div className={`grid grid-cols-3 w-[900px] h-[700px] gap-5`}>
      {flippedCards.map((value, index) => (
        <div className={`per ${flippedCards[index].matched? "transform transition scale-95 duration-1000":""}`} key={index}>
          <div
            onClick={() => handleFlip(index)}
            className={`relative card w-[250px] h-[320px] rounded-lg outline-offset-2 ${
              flippedCards[index].fliped || flippedCards[index].matched
                ? "cardFlip"
                : ""
            } shadow-2xl shadow-slate-900 `}
          >
            <div className={`absolute w-full h-full rounded-lg front overflow-hidden outline outline-black outline-offset-2}`}>
              <img
                src={"./backImg.png"}
                alt={`Front ${index}`}
                className="object-cover"
              />
            </div>

            <div className="absolute top-0 back w-full h-full rounded-lg overflow-hidden outline outline-black outline-offset-2">
              <img src={`${value.img_loc}`} alt={`Back ${index}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
