const CHECK_PORTRAIT = "check_portrait";

export const getPortrait = () => {
    return window.sessionStorage.getItem(CHECK_PORTRAIT);
};

export const savePortrait = value => {
    window.sessionStorage.setItem(CHECK_PORTRAIT, value);
};

export const destroyPortrait = () => {
    window.sessionStorage.removeItem(CHECK_PORTRAIT);
};

export default { getPortrait, savePortrait, destroyPortrait };