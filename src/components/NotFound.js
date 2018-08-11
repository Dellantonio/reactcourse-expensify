import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div>
        Page not Found. Error 404! <Link to="/">Go home</Link>
    </div>
);

export default NotFound;