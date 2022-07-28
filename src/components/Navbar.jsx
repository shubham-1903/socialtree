import React, { useState } from "react";
import { motion } from "framer-motion";
import "../App.css";
const Navbar = () => {
	const [isOn, setIsOn] = useState(false);
	const toggleSwitch = () => setIsOn(!isOn);
	console.log("👻👻: ", isOn);
	return (
		<>
			{/*  */}
			<div className='grid grid-cols-2 gap-4  p-3 bg-pgrey justify-evenly'>
				<div className='  w-20'>
					<a
						href='https://www.instagram.com/shubham.gupta.1903/'
						target='_blank'
					>
						<img
							className='h-10 w-10 rounded-3xl'
							src='../../images/logo.svg'
							alt='logo'
						/>
					</a>
				</div>
				<div className='flex justify-end'>
					<div
						className='switch '
						data-isOn={isOn}
						onClick={toggleSwitch}
					>
						<motion.div className='handle' layout transition={spring} />
					</div>
				</div>
			</div>
		</>
	);
};
const spring = {
	type: "spring",
	stiffness: 700,
	damping: 30,
};
export default Navbar;
