import React, { useState, useCallback } from 'react';
import { mapToInitialState } from './util';

export type SelectedState<T = string[]> = {[key: keyof typeof T]};

export const useCategory = (categories: string[]) => {
  const [selected, setSelected] =
    useState<SelectedState<typeof categories>>(mapToInitialState(categories));
  
  
  const onChange = useCallback((value: keyof SelectedState<typeof categories>, selected: boolean) => {
    setSelected(prev => ({...prev, [value]: selected}));
  }, [setSelected]);

  return [selected, onChange];
}
