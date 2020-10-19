import styled from 'styled-components';

import { COLORS, FONT_SIZES, BREAKPOINTS } from '../constants';
import Layout from '../components/Layout';
import Calculator from '../components/Calculator';
import PageHead from '../components/PageHead';

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;

  @media (max-width: ${BREAKPOINTS.phone}) {
    justify-content: flex-start;
  }
`;

const Text = styled.div`
  padding-bottom: 30px;
  text-align: center;
  color: ${COLORS.grey2};
  text-shadow: 0 0 15px #000;
  font-size: ${FONT_SIZES.big};
  font-weight: 800;

  @media (max-width: ${BREAKPOINTS.phone}) {
    font-size: ${FONT_SIZES.normal};
    padding: 30px 0;
  }
`;

const Home = () => {
  return (
    <Layout>
      <PageHead />
      <Container>
        <Text>Simple Calculator in React</Text>
        <Calculator />
      </Container>
    </Layout>
  );
};

export default Home;
