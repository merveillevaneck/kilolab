import React, { useMemo, useCallback } from 'react'
import { View, ViewProps } from '@kilo-lab/web-design.compositions';
import { useTheme } from 'styled-components';
import { motion } from 'framer-motion';

export interface CategoryProps extends Partial<ViewProps> {
  value: string;
  selected: true;
  onChange: (value: string, selected: boolean) => void;
}

export const CategoryButton: React.FC<CategoryProps> = props => {

  const {
    value,
    selected,
    onChange,
    ...rest
  } = props;

  const theme = useTheme();

  const [color, backgroundColor] = useMemo(() => ([
    selected ? theme.colors.textLight : theme.colors.primary,
    selected ? theme.colors.primary : theme.colors.textLight,
  ]), [selected]);

  const $onChange = useCallback(() => {
    if (onChange) onChange(value, !selected);
  }, [onChange, value, selected])

  return (
    <View
      as={motion.div}
      initial={{color: backgroundColor, backgroundColor: color}}
      animate={{color, background: backgroundColor}}
      transition={{duration: 3, ease: 'easeOut'}}
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      fontWeight="bold"
      fontSize="18px"
      padding="10px"
      borderRadius="10px"
      margin="5px"
      onClick={$onChange}
      {...rest}
    >
      {value}
    </View>
  )
}
