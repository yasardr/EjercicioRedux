//Obtener todos los tweets de localStorage
export const getStateLocalStorage = () => {
  const tweetsStorage = localStorage.getItem("tweets");
  if (tweetsStorage === null) return undefined;
  return JSON.parse(tweetsStorage);
};

//Agregar Tweet al localStorage
export const setStateLocalStorage = state => {
  localStorage.setItem("tweets", JSON.stringify(state));
};
