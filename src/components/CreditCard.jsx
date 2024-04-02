import { useEffect, useState } from "react";
import CardModal from "./CardModal";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCardThunkAction,
  setCheckedCard,
} from "../store/actions/ShoppingCartAction";
import axios from "axios";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function CreditCard() {
  const instance = axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com",
  });
  const dispatch = useDispatch();
  const [cardModal, setCardModal] = useState(false);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});
  const checkedCard = useSelector((state) => state.shoppingCart.checkedCard);
  const token = localStorage.getItem("token");

  function editCard(card) {
    setSelectedCard(card);
    setCardModal(true);
  }

  useEffect(() => {
    instance
      .get("/user/card", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => setCards(res.data));
  }, []);

  function formatCardNumber(cardNumber) {
    const visiblePart =
      cardNumber.slice(0, 6) + "*".repeat(7) + cardNumber.slice(13);
    return visiblePart.match(/.{1,4}/g).join(" ");
  }

  function handleCheckboxChange(card) {
    dispatch(setCheckedCard(card));
  }
  const handleRemoveCard = async (cardId) => {
    try {
      await dispatch(removeCardThunkAction(cardId));
      setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
    } catch (error) {
      console.error("Error removing card:", error);
    }
  };

  return (
    <div className="font-mont border-2 py-3 mt-2 px-3">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col w-full md:w-1/2 px-2">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">Card Information</h1>
            <p
              onClick={() => setCardModal(!cardModal)}
              className="underline cursor-pointer"
            >
              Pay with Another Card
            </p>
            <CardModal
              cardModal={cardModal}
              setCardModal={setCardModal}
              card={selectedCard}
            />
          </div>
          <div className="py-6 flex flex-wrap">
            {cards.map((card, index) => {
              return (
                <div key={index} className="flex flex-col p-1 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={checkedCard.id === card.id}
                      onChange={() => handleCheckboxChange(card)}
                    />
                    <label className="text-black font-bold" htmlFor="">
                      Card
                    </label>
                  </div>
                  <div className="w-80 h-40 border-1 border-primary-border-color rounded-lg">
                    <div className="flex flex-col px-3 gap-4">
                      <div className="flex items-center justify-between ">
                        <img
                          onClick={() => editCard(card)}
                          className="w-36 p-2"
                          src="https://upload.wikimedia.org/wikipedia/commons/0/0c/DenizBank_logo.svg"
                          alt=""
                        />
                        <img
                          className="w-16 p-2"
                          src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                          alt=""
                        />
                      </div>
                      <div className="flex items-end justify-between ">
                        <div>
                          <p>{formatCardNumber(card.card_no)}</p>
                          <p>
                            {card.expire_month} / {card.expire_year}
                          </p>
                          <p>{card.name_on_card}</p>
                        </div>
                        <div className="">
                          <FontAwesomeIcon
                            onClick={() => handleRemoveCard(card.id)}
                            className="h-4 w-4 text-primary-color cursor-pointer"
                            icon={faTrashAlt}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="border-l-0 md:border-l-2 w-full md:w-1/2 px-2">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold">Payment Options</h1>
          </div>
          <div className="border-1 border-primary-border-color flex flex-col gap-3 py-3 px-4 rounded-lg mt-10">
            <div className="flex justify-between border-b-2 border-primary-border-color py-2">
              <p>Number of Installments</p>
              <p>Monthly Payment</p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-1">
                <input type="checkbox" defaultChecked={true} />
                <label htmlFor="">Single Payment</label>
              </div>
              <p>$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
