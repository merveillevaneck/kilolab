import {useWidth} from './use-width';

export const useIsMobile = () => {
  const width = useWidth();

  return width < 768;
}