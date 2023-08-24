import { Toast, ToastContainer } from 'react-bootstrap';

const Toaster = ({ message, color = 'danger', onClose, show }) => {
  return (
    <ToastContainer position="middle-end" className="p-3" style={{ zIndex: 9999 }}>
      <Toast onClose={onClose} show={show} delay={3000} autohide bg={color}>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default Toaster;
