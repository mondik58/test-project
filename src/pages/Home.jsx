import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button, ListGroup } from 'react-bootstrap';

import { ENDPOINTS } from '../constants';
import LoadingWrapper from '../ui/LoadingWrapper';
import ceoImage from '../assets/ceoImage.png';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  const [search, setSearch] = useState(searchParams.get('q') || '');
  const [sortOrder, setSortOrder] = useState(searchParams.get('sort') || 'asc');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setUsers(json);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const newSearchParams = new URLSearchParams();
    if (!search) {
      newSearchParams.delete('q');
    } else {
      newSearchParams.set('q', search);
    }
    newSearchParams.set('sort', sortOrder);
    navigate(`?${newSearchParams.toString()}`);
    fetchData(`${ENDPOINTS.USERS}?q=${search}&_sort=username&_order=${sortOrder}`);
  }, [sortOrder, search]);

  const onSearch = (e) => {
    const trimValue = e.target.value.trim();
    setSearch(trimValue);
  };

  const handleSortChange = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
  };

  return (
    <>
      <Helmet>
        <title>Home page</title>
        <meta name="description" content="It's a home page" />
        <meta property="og:title" content="Home page" />
        <meta property="og:description" content="It's a home page" />
        <meta property="og:image" itemProp="image" content={ceoImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={location.href} />
        <meta property="twitter:title" content="Home page" />
        <meta property="twitter:description" content="It's a home page" />
        <meta property="twitter:image" itemProp="image" content={ceoImage} />
      </Helmet>
      <div className="d-flex flex-column position-relative" style={{ minHeight: '100%' }}>
        <div className="d-flex flex-column gap-3 flex-md-row justify-content-between">
          <input
            className="rounded-2 p-2"
            type="text"
            placeholder="Search by username"
            value={search}
            onChange={onSearch}
            disabled={loading}
          />

          <Button
            className="w-100 md:w-15rem"
            onClick={handleSortChange}
            variant="dark"
            size="lg"
            disabled={loading}
          >
            Sort ({sortOrder})
          </Button>
        </div>
        <div className="position-relative mt-5" style={{ minHeight: '20rem' }}>
          <LoadingWrapper isLoading={loading}>
            <ListGroup className="w-100">
              {users.map((user) => (
                <ListGroup.Item variant="secondary" action key={user.id}>
                  <Link to={`/user/${user.id}`}>{user.username}</Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </LoadingWrapper>
        </div>
      </div>
    </>
  );
};

export default Home;
