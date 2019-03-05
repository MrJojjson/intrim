export const emptyObject = obj => Object.entries(obj).length === 0 && obj.constructor === Object;

export const generateGUID = () => Math.random().toString(36).substr(2, 16);
