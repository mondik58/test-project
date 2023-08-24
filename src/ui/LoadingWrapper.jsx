import { Spinner } from 'react-bootstrap';

export const SpinnerWrapper = ({
  className = '',
  wrapperClassName = '',
  shadowBackground,
  padding = 0,
}) => (
  <div
    className={`position-absolute h-100 z-1 ${wrapperClassName}`}
    style={{ width: `calc(100% - ${padding}rem)` }}
  >
    <div
      className={`${
        shadowBackground && 'purple-50'
      } position-absolute w-100 h-100 d-flex justify-content-center align-items-center ${className}`}
    >
      <Spinner animation="border" variant="secondary" style={{ width: 150, height: 150 }} />
    </div>
  </div>
);

const LoadingWrapper = ({
  isLoading,
  children,
  className = '',
  wrapperClassName = '',
  showChildren = false,
  shadowBackground = true,
  padding = 0,
}) => {
  if (!showChildren) {
    return isLoading ? (
      <SpinnerWrapper
        className={className}
        wrapperClassName={wrapperClassName}
        shadowBackground={shadowBackground}
        padding={padding}
      />
    ) : (
      children
    );
  } else {
    return (
      <>
        {isLoading && (
          <SpinnerWrapper
            className={className}
            wrapperClassName={wrapperClassName}
            shadowBackground={shadowBackground}
          />
        )}
        {children}
      </>
    );
  }
};

export default LoadingWrapper;
