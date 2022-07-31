import styled from 'styled-components';
import { styles, StylesProps } from 'styled-system';
import { view } from '@kilo-lab/web-design.compositions';

export interface PageProps extends StylesProps {}
export const Page = styled.main<StylesProps>(view);
