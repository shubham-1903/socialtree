import React from "react";
import { motion } from "framer-motion";
const Navbar = () => {
	return (
		<>
			<div className='flex flex-row justify-start p-3 bg-pgrey'>
				<a href='https://www.instagram.com/shubham.gupta.1903/' target='_blank'>
					<img
						className='h-10 w-10 rounded-3xl'
						src='../../images/logo.svg'
						alt='logo'
					/>
				</a>
			</div>
		</>
	);
};

export default Navbar;
