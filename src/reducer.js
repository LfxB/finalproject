const reducer = (state, action) => {
  switch (action.type) {
    case "logged-in":
      return {
        ...state,
        loggedIn: action.toggle,
        currentUser: action.username
      };
    case "SIGN-OUT":
      return { ...state, loggedIn: action.toggle, currentUser: "" };
    case "JOIN-LOBBY":
      return { ...state, currentLobbyId: action.lobbyId, inLobby: true };
    case "JOIN-GAME":
      return { ...state, inGame: true };
    case "LEAVE-GAME":
      return {
        ...state,
        currentLobbyId: "",
        lobbyId: undefined,
        inLobby: false,
        inGame: false
      };
    case "LEAVE-LOBBY":
      return { ...state, currentLobbyId: "", inLobby: false };
    case "show-message":
      return { ...state, message: action.message };
    case "set-action-menu":
      return {
        ...state,
        actionMenu: {
          visible: action.visible,
          xPos: action.xPos,
          yPos: action.yPos,
          options: action.options
        }
      };
    case "set-game-data":
      return {
        ...state,
        gameData: {
          ...action.data
        }
      };
    case "set-game-state":
      return {
        ...state,
        gameState: action.gameState
      };
    default:
      return state;
  }
};

export default reducer;
