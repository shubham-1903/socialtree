import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import twitterGIF from "../images/icons8-twitter.gif";

const App = () => {
	return (
		<div className='h-screen flex flex-col items-center justify-center bg-red-50'>
			<Header />
			<Main
				css='bg-red-500'
				socail='Instagram'
				avatar={<BsInstagram className='w-7 h-7 cursor-pointer' />}
				href='https://www.instagram.com/shubham.gupta.1903/'
				gif={twitterGIF}
			/>
			<Main
				css='bg-blue-500'
				socail='Facebook'
				avatar={<BsFacebook className='w-7 h-7 cursor-pointer' />}
				href='https://www.facebook.com/profile.php?id=100008606535834'
			/>
			<Main
				css='bg-indigo-500'
				socail='Twitter'
				avatar={<BsTwitter className='w-7 h-7 cursor-pointer' />}
				href='https://www.twitter.com'
			/>
			<Main
				socail='LinkedIn'
				avatar={<BsLinkedin className='w-7 h-7 cursor-pointer' />}
				href='https://www.linkedin.com/in/shubham-kumar-13a9051a9/'
			/>
			<Main
				socail='Github'
				avatar={<BsGithub className='w-7 h-7 cursor-pointer' />}
				href='https://www.github.com/shubham-1903/'
			/>
			<Footer />
			{/* <BsFacebook/> */}
		</div>
	);
};

export default App;
