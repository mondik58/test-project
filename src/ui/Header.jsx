import { Navbar, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import { useState } from 'react';
import Toaster from './Toaster';

const Header = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);

  const getCopyLink = () => {
    const newSearchParams = new URLSearchParams(location.search);

    return newSearchParams.size
      ? `${window.location.origin}${window.location.pathname}?${newSearchParams.toString()}`
      : `${window.location.origin}${window.location.pathname}`;
  };

  const message = 'The link is copied to the clipboard';

  const handleClose = () => setShow(false);

  const handleCopyLink = async () => {
    const copyLink = getCopyLink();
    await navigator.clipboard.writeText(copyLink);

    setShow(true);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md" className="px-3 gap-2">
        <Navbar.Brand as={Link} to="/">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top bg-light rounded-circle mr-2"
            alt="Your Logo"
          />
          {' Users Project'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Button className="w-100 md:w-15rem" variant="primary" onClick={() => handleCopyLink()}>
            Copy Link
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <Toaster onClose={handleClose} message={message} color="success" show={show} />
    </>
  );
};

export default Header;
