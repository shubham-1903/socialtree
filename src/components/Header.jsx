import React from "react";

const Header = () => {
	return (
		<>
			<header className='flex items-center justify-center p-3'>
				<nav className='flex flex-col justify-center items-center'>
					<img
						className='h-20 w-20 rounded-3xl'
						src='../../images/sk.jpg'
						alt='sk'
					/>
					<h1 className=' accent-orange-700 italic font-mono text-center p-2 text-4xl'>
						Shubham
					</h1>
				</nav>
			</header>
		</>
	);
};

export default Header;
