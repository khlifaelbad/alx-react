import React from 'react';
import PropTypes from 'prop-types';


const CourseShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    credit: PropTy