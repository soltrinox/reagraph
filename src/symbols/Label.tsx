import React, { FC } from 'react';
import ellipsize from 'ellipsize';
import { Billboard, Text } from '@react-three/drei';
import { Color } from 'three';

export interface LabelProps {
  /**
   * Text to render.
   */
  text: string;

  /**
   * Font URL.
   * Reference: https://github.com/reaviz/reagraph/issues/23
   */
  fontUrl?: string;

  /**
   * Size of the font.
   */
  fontSize?: number;

  /**
   * Color of the text.
   */
  color?: string;

  /**
   * Opacity for the label.
   */
  opacity?: number;

  /**
   * The lenth of which to start the ellipsis.
   */
  ellipsis?: number;

  /**
   * RGB color of label outline.
   */
  outlineColor?: Color;
}

export const Label: FC<LabelProps> = ({
  text,
  fontSize,
  fontUrl,
  color,
  opacity,
  ellipsis,
  outlineColor
}) => {
  const shortText = ellipsis ? ellipsize(text, ellipsis) : text;
  return (
    <Billboard position={[0, 0, 1]}>
      <Text
        font={fontUrl}
        fontSize={fontSize}
        color={color}
        fillOpacity={opacity}
        outlineWidth={outlineColor ? 2 : 0}
        outlineColor={outlineColor}
        depthOffset={0}
      >
        {shortText}
      </Text>
    </Billboard>
  );
};

Label.defaultProps = {
  opacity: 1,
  fontSize: 7,
  color: '#2A6475',
  ellipsis: 24
};
