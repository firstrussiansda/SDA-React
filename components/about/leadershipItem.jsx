import React from 'react';
import PropTypes from 'prop-types';

const LeadershipItem = ({ img, name, role, bio }) => (
    <div className="col-xxs-12 col-sm-6 col-xxl-3 m-b-xxl">
        <img className="img-circle img-fluid m-x-auto m-b" src={ img } />
        <h3 className="name text-md text-center">{ name }</h3>
        <h4 className="text-center text-uppercase">{ role }</h4>
        <p className="text-center m-b-sm m-x-auto short-bio">{ bio }</p>
    </div>
);

LeadershipItem.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
};


export default LeadershipItem;