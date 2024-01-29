export const button = {
  c: 'bg',
  bg: 'primary',
  pv: 4,
  ph: 5
};

export const buttonHover = {
  bg: 'primary400'
};

export const textInput = {
  bg: 'bg',
  c: 'fg',
  b: 'textInput',
  pv: 4,
  ph: 6
};

export const textInputFocus = {
  bg: 'bg',
  c: 'fg',
  b: 'textInputFocus'
};

const elements = {
  button,
  'a.button': button,
  'a.button:hover': buttonHover,
  'input[type="text"]': textInput,
  'input[type="text"]:focus': textInputFocus
};

export default elements;
