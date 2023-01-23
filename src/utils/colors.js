export const colorsBg = {
  white: 'bg-white text-brand-black',
  black: 'bg-brand-black text-white',
  primary: 'bg-brand-primary text-white',
  // blackOpacity: 'bg-brand-black text-white bg-opacity-40',
  // info: 'bg-brand-sky text-white',
  // primaryOpacity: 'bg-brand-primary text-brand-primary bg-opacity-10',
  // danger: 'bg-red-600 text-white',
  // secondary: 'bg-brand-button text-white',
  // chat: 'bg-[#6D2E5D] text-white',
  // transparent: 'bg-transparent border-0',
  // success: 'bg-brand-green text-white',
};

export const colorsBgHover = {
  white: 'hover:bg-white',
  black: 'hover:bg-brand-black',
  primary: 'hover:bg-brand-primary',
  // info: 'hover:bg-brand-sky',
  // success: 'hover:bg-brand-green',
  // danger: 'hover:bg-red-700',
  // secondary: 'hover:bg-brand-button',
};

export const colorsBorders = {
  white: 'border-white',
  black: 'border-brand-black',
  primary: 'border-brand-primary',
  primaryOpacity: 'border-brand-primary border-opacity-20',
  // info: 'border-brand-sky',
  // success: 'border-brand-green',
  // danger: 'border-red-700',
  // secondary: 'border-brand-button',
};

export const colorsText = {
  white: 'text-white',
  black: 'text-brand-black',
  primary: 'text-brand-primary',
  // info: 'text-white',
  // success: 'text-emerald-600',
  // danger: 'text-red-600',
  // secondary: 'text-brand-button',
};

export const colorsOutline = {
  white: [colorsText.white, colorsBorders.white],
  black: [colorsText.black, colorsBorders.black],
  primary: [colorsText.primary, colorsBorders.primary],
  primaryOpactity: [colorsBorders.primaryOpactity],
  // info: [colorsText.info, colorsBorders.info],
  // success: [colorsText.success, colorsBorders.success],
  // danger: [colorsText.danger, colorsBorders.danger],
  // secondary: [colorsText.secondary, colorsBorders.secondary],
};

export const colorsOutlineHover = {
  white: 'hover:bg-white hover:text-brand-black',
  black: 'hover:bg-black hover:text-white',
  primary: 'hover:bg-brand-primary hover:text-white',
  // success: 'hover:bg-brand-green hover:text-white',
  // danger: 'hover:bg-red-700 hover:text-white',
  // secondary: 'hover:bg-brand-green hover:text-white hover:border-brand-green',
  // info: 'hover:bg-brand-primary hover:text-white',
};

export const getButtonColor = (color, isOutlined, hasHover) => {
  const base = [isOutlined ? colorsText[color] : colorsBg[color], colorsBorders[color]];

  if (hasHover) {
    base.push(isOutlined ? colorsOutlineHover[color] : colorsBgHover[color]);
  }

  return base;
};
