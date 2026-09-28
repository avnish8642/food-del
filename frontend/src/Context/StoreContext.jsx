import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [food_list, setFoodList] = useState([]);
  const [token, setToken] = useState("");
  const url = "http://localhost:4000";
  const [cartItem, setCartItem] = useState({});
  // const addToCart = async (itemId) => {
  //   if (!cartItem[itemId]) {
  //     setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
  //   } else {
  //     setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  //   }
  //   if(token){
  //     await axios.post(url+"/api/cart/add", {itemId}, {headers:{token}})
  //   }
  // };

  // const removeFromCart = async (itemId) => {
  //   setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  //   if(token){
  //     await axios.post(url+"/api/cart/remove", {itemId}, {headers:{token}})
  //   }
  // };

  const addToCart = async (itemId) => {
    setCartItem((prev = {}) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));

    if (token) {
      try {
        await axios.post(
          url + "/api/cart/add",
          { itemId },
          {
            headers: { token },
          },
        );
      } catch (error) {
        console.log("Add cart error:", error.response?.data || error.message);
      }
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItem((prev = {}) => {
      const newCart = { ...prev };

      if (newCart[itemId] > 1) {
        newCart[itemId] -= 1;
      } else {
        delete newCart[itemId];
      }

      return newCart;
    });

    if (token) {
      try {
        await axios.post(
          url + "/api/cart/remove",
          { itemId },
          {
            headers: { token },
          },
        );
      } catch (error) {
        console.log(
          "Remove cart error:",
          error.response?.data || error.message,
        );
      }
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItem[item];
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list");
    setFoodList(response.data.data);
  };

  // const loadCartData = async (token) => {
  //   const response = await axios.post(
  //     url + "/api/cart/get",
  //     {},
  //     { headers: { token } },
  //   );
  //   setCartItem(response.data.cartData);
  // };

  const loadCartData = async (token) => {
    try {
      const response = await axios.post(
        url + "/api/cart/get",
        {},
        { headers: { token } },
      );

      console.log("Cart response:", response.data);

      setCartItem(response.data.cartData || {});
    } catch (error) {
      console.log("Cart loading error:", error.response?.data || error.message);

      setCartItem({});
    }
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
