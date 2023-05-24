'use strict';

const cardElements = [
	{
		title: 'Realtime Database',
		description: 'Build serveless apps by storing and syncing JSON data between your users in near-realtime, on or offline, with strong user-based security.',
		headerimg: './assets/assets_product1/section-4/realtime-db_2x.png',
		logoimg: './assets/assets_product1/section-4/realtime-database.svg',
		color: '#273239',
	},
	{
		title: 'Remote Config',
		description: 'Set up feature flags during prototyping and development so you can dynamically control and optimize the user experience in production',
		headerimg: 'assets/assets_product1/section-4/remote-config_2x.png',
		logoimg: './assets/assets_product1/section-4/remote-config.svg',
		color: '#283593',
	},
	{
		title: 'Firebase Extensions',
		description: 'Quickly add functionality to your apps with pre-packaged, open-source bundles of code.',
		headerimg: './assets/assets_product1/section-4/ml_2x.png',
		logoimg: './assets/assets_product1/section-4/firebase-extensions.svg',
		color: '#7b20a2',
	},
	{
		title: 'App Check',
		description: 'Help protect your app from abuse by attesting that incoming traffic is coming from your app and blocking traffic without valid credentials.',
		headerimg: './assets/assets_product1/section-4/hosting_2x.png',
		logoimg: './assets/assets_product1/section-4/app-check.svg',
		color: '#2a353c',
	},
	{
		title: 'Cloud Functions',
		description: 'Write and run app logic server-side without needing to set up your own server.',
		headerimg: './assets/assets_product1/section-4/functions_2x.png',
		logoimg: './assets/assets_product1/section-4/cloud-functions.svg',
		color: '#3d4f56',
	},
	{
		title: 'Authentication',
		description: 'Add an end-to-end identity solution to your app for easy user authentication, sign-in, and onboarding in just a few lines of code.',
		headerimg: './assets/assets_product1/section-4/auth_2x.png',
		logoimg: './assets/assets_product1/section-4/authentication.svg',
		color: '#7b20a2',
	},
	{
		title: 'Cloud Messaging',
		description: 'Get infrastructure to realiably send and receive push messages between your server and devices, across platforms at no cost.',
		headerimg: './assets/assets_product1/section-4/cloud-msg_2x.png',
		logoimg: './assets/assets_product1/section-4/cloud-messaging.svg',
		color: '#164ea6',
	},
	{
		title: 'Hosting',
		description: 'Deploy fast-loading, secure websites that are backed by a global CDN without all of the hassle.',
		headerimg: './assets/assets_product1/section-4/hosting_2x.png',
		logoimg: './assets/assets_product1/section-4/hosting-icon.svg',
		color: '#1a237e',
	},
	{
		title: 'Cloud Storage',
		description: 'Help protect your app from abuse by attesting that incoming traffic is coming from your app and blocking traffic without valid credentials.',
		headerimg: './assets/assets_product1/section-4/storage_2x.png',
		logoimg: './assets/assets_product1/section-4/cloud-storage.svg',
		color: '#03838f',
	},
	{
		title: 'Firebase ML <span>BETA</span>',
		description: 'Add powerful machine learning features to your app with ready-to-use APIs and support for custom model deployment.',
		headerimg: './assets/assets_product1/section-4/ml_2x.png',
		logoimg: './assets/assets_product1/section-4/firebase-ml.svg',
		color: '#164ea6',
	},
];

const parent = document.querySelector('#section4');

const results = cardElements.map((cardObj) => {
	parent.innerHTML += `
    <div class="section4__card">
      <div class="card-header" style="background-color: ${cardObj.color}">
        <img src="${cardObj.headerimg}" alt="">
        <img class="card-logo" src="${cardObj.logoimg}" style="background-color: ${cardObj.color}">
      </div>
        
      <h3 class="card-title">${cardObj.title}</h3>
      <p class="card-text">${cardObj.description}</p>
			<a href="#"><p class="learn-more-btn">Learn more</p></a>
    </div>`;
});

console.log(results);
