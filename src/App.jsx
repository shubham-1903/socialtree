import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const App = () => {
	return (
		<div className='h-screen flex flex-col items-center justify-center bg-red-50'>
			<Header />
			<Main socail='Instagram' avatar={BsInstagram} />
			<Main socail='Facebook' avatar={BsFacebook} />
			<Main socail='Twitter' avatar={BsTwitter} />
			<Main socail='LinkedIn' avatar={BsGithub} />
			<Main socail='Github' avatar={BsLinkedin} />
			<Footer />
		</div>
	);
};

export default App;
