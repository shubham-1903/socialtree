import React, { useState } from "react";
import { motion } from "framer-motion";
import "../App.css";
const Navbar = ({ toggleSwitch, changeData, mode }) => {
	const data = "passing data to parent component";
	const [isOn, setIsOn] = useState(false);
	const toggleSwitchButton = () => setIsOn(!isOn);
	// let isOn = false;
	// console.log("👻👻: ", isOn);
	return (
		<>
			{/* #dcdde1 navbar pensive*/}
			{/* #f5f6fa body lynx*/}
			<div className={`grid grid-cols-2 gap-4  p-3 ${mode} justify-evenly`}>
				<div className='  w-20'>
					<a
						href='https://www.instagram.com/shubham.gupta.1903/'
						target='_blank'
					>
						{isOn ? (
							<img
								className='h-10 w-10 rounded-3xl'
								src='../../images/light_logo.svg'
								alt='logo'
							/>
						) : (
							<img
								className='h-10 w-10 rounded-3xl'
								src='../../images/logo.svg'
								alt='logo'
							/>
						)}
					</a>
					{/* <button
						className='bg-boldgreen p-2 my-2 rounded-xl'
						onClick={() => {
							toggleSwitch(data);
							console.log('toggle switch called');
						}}
					>
						click
					</button> */}
				</div>
				<div className='flex justify-end'>
					<div
						className='switch '
						data-ison={isOn}
						// onClick={toggleSwitch}
						onClick={() => {
							toggleSwitch(!isOn);
							toggleSwitchButton();
							console.log("clicked");
						}}
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
