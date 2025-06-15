export const getUserName = (number: string = '') => {
  return (number || '').split('_');
};

console.log(getUserName('+998784562132_user-info'));