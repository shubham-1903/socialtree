import React from "react";

const Header = ({ name }) => {
	return (
		<>
			<header className='flex items-center justify-center p-3'>
				<nav className='flex flex-col justify-center items-center'>
					<img
						className='h-20 w-20 rounded-full'
						src='../../images/sk.jpg'
						alt='sk'
						// style={{ borderRadius: "20% 80% 20% 80% / 80% 20% 80% 20% "  }}
					/>
					<h1
						className={` accent-orange-700  font-fStyle text-center p-2 text-4xl ${name}`}
					>
						Shubham
					</h1>
				</nav>
			</header>
		</>
	);
};

export default Header;
