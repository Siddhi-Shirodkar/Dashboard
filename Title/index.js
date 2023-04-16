import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';


function Title(props) {
  return (
    <div>
    <Typography component="h1"  variant="h5" fontWeight="bold" color="#212121" gutterBottom>
      {props.children}
    </Typography>
    </div>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;