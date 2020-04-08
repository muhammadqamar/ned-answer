const initialState = {
  openHambergermenu: false,
};

export const toggleMenu = (isopen) => ({
  type: "TOOGLE_MENU",
  isopen,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case "TOOGLE_MENU":
      console.log(action);
      return { ...state, openHambergermenu: action.isopen };

    default:
      return state;
  }
};
