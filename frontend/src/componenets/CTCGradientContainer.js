import PropTypes from "prop-types";

function CTCGradientContainer({ children }) {
  const gradientStyle = {
    height: "100vh",
    margin: '-10px',
    padding: '30px',
    overflow: 'auto',
    color: '#36454F',
    fontFamily: 'Poppins, sans-serif',
  };

  return <div style={gradientStyle}>{children}</div>;
}

CTCGradientContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CTCGradientContainer;
