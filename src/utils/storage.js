const USER_KEY = 'voicemood_user';

export const setUserInStorage = (user) => {
  if (!user) {
    localStorage.removeItem(USER_KEY);
    return;
  }

  const userData = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    emailVerified: user.emailVerified,
  };

  localStorage.setItem(USER_KEY, JSON.stringify(userData));
};

export const getUserFromStorage = () => {
  const userStr = localStorage.getItem(USER_KEY);
  return userStr ? JSON.parse(userStr) : null;
};

export const removeUserFromStorage = () => {
  localStorage.removeItem(USER_KEY);
};
