import styled from '@emotion/styled';
import { widths, unit } from '../styles';
import Header from './header';
import Footer from './footer';

interface LayoutProps {
  fullWidth?: boolean;
  grid?: boolean;
  logo: string;
}

/**
 * Layout renders the full page content:
 * with header, Page container and footer
 */
const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  fullWidth,
  children,
  grid,
  logo,
}) => {
  return (
    <>
      <Header logo={logo} />
      <PageContainer fullWidth={fullWidth} grid={grid}>
        {children}
      </PageContainer>
      <Footer />
    </>
  );
};

export default Layout;

/** Layout styled components */
const PageContainer = styled.div<Omit<LayoutProps, 'logo'>>`
  display: flex;
  justify-content: ${({ grid }) => (grid ? 'center' : 'top')};
  flex-direction: ${({ grid }) => (grid ? 'row' : 'column')};
  flex-wrap: wrap;
  align-self: center;
  flex-grow: 1;
  max-width: ${({ fullWidth }) =>
    fullWidth ? undefined : `${widths.regularPageWidth}px`};
  width: 100%;
  padding: ${({ fullWidth }) => (fullWidth ? 0 : unit * 2)};
  padding-bottom: unit * 5;
`;
