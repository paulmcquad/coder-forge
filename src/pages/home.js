import React from 'react';
import { Link } from "react-router-dom"; // reactrouter v6

const Home = () => {
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'Right',
		alignItems: 'Right',
		height: '100vh'
	}}
	>
    <h2>Welcome to the homepage!</h2>
    <p>You can do this, I believe in you.</p>

    <Link to="/">Home</Link> |
    <Link to="/about">About</Link> |

	</div>
);
};

export default Home;
