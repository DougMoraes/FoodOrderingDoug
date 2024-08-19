export const getAsRegExp = (text: number | string) => {
  return new RegExp(text.toString(), 'i');
};

