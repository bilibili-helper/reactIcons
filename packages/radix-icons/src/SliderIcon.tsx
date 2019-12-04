import * as React from 'react';
import { BaseIconProps } from './types';

interface SliderIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const SliderIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: SliderIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.5 9.95a2.45 2.45 0 100-4.9 2.45 2.45 0 000 4.9zM10.863 8a3.4 3.4 0 01-6.726 0H.5a.5.5 0 010-1h3.637a3.4 3.4 0 016.726 0H14.5a.5.5 0 010 1h-3.637z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M10.863 8a3.4 3.4 0 01-6.726 0H.5a.5.5 0 010-1h3.637a3.4 3.4 0 016.726 0H14.5a.5.5 0 010 1h-3.637z"
          fill={color}
          opacity=".15"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M7.5 9.95a2.45 2.45 0 100-4.9 2.45 2.45 0 000 4.9zM10.863 8a3.4 3.4 0 01-6.726 0H.5a.5.5 0 010-1h3.637a3.4 3.4 0 016.726 0H14.5a.5.5 0 010 1h-3.637z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`SliderIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default SliderIcon;