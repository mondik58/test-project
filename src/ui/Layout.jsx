import { Container } from 'react-bootstrap';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="min-vh-100 bg-light">
      <Header />
      <Container className=" h-100 mt-4" fluid>
        {children}
      </Container>
    </div>
  );
};

export default Layout;
