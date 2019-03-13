export const emptyObject = obj => Object.entries(obj).length === 0 && obj.constructor === Object;

export const generateGUID = () => Math.random().toString(36).substr(2, 16);

export const checkPasswordStrength = (password) => {
  const strongRegex = (
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
  );
  const mediumRegex = (
    /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
  );

  if (strongRegex.test(password)) {
    return 'strong';
  }
  if (mediumRegex.test(password)) {
    return 'medium';
  }
  return 'weak';
};
