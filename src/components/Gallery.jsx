import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

import { ENDPOINTS } from '../constants';
import { useDataFetching } from '../hooks';
import LoadingWrapper from '../ui/LoadingWrapper';

const Gallery = ({ id }) => {
  const [data, loading] = useDataFetching(`${ENDPOINTS.GALLERY}/${id}/photos?_limit=10`);

  return (
    <div className="position-relative mt-5" style={{ minHeight: '10rem' }}>
      <LoadingWrapper isLoading={loading}>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <div className="d-flex justify-content-center align-items-center">
              <Carousel fade>
                {!!data?.length &&
                  data?.map((item) => (
                    <Carousel.Item key={item.id}>
                      <img className="d-block w-100" src={item.url} alt={`Slide ${item.id}`} />
                    </Carousel.Item>
                  ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </LoadingWrapper>
    </div>
  );
};

export default Gallery;
