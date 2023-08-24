import { useDataFetching } from '../hooks';
import { ENDPOINTS } from '../constants';
import { Carousel, Col, Row, Card } from 'react-bootstrap';
import LoadingWrapper from '../ui/LoadingWrapper';

const Posts = ({ id }) => {
  const [data, loading] = useDataFetching(`${ENDPOINTS.POSTS}?userId=${id}`);

  return (
    <div className="position-relative mt-5" style={{ minHeight: '10rem' }}>
      <LoadingWrapper isLoading={loading}>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Carousel pause="hover">
              {!!data?.length &&
                data?.map((item) => (
                  <Carousel.Item key={item.id}>
                    <Card text="light" className="bg-dark" style={{ height: '15rem' }}>
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.body}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Carousel.Item>
                ))}
            </Carousel>
          </Col>
        </Row>
      </LoadingWrapper>
    </div>
  );
};

export default Posts;
