const projects = [
	{
		title: 'MovieBuddy',
		img: 'https://i.imgur.com/lNnk9JU.png',
		description:
			'Full stack application that allows users to add reviews to their favorite movies',
		tech:
			'Django | Python | SimpleJWT | ReactJS | Bootstrap | Heroku | JavaScript (ES6) | HTML | CSS',
		git: 'https://github.com/Connorrichter4/movie-buddy',
		deploy: 'https://moviebuddy-frontend.herokuapp.com/',
	},
	{
		title: 'Code Share App',
		img: 'https://i.imgur.com/ZbnAQiz.png',
		description:
			'Group project to design app that allows users to share code snippets',
		tech:
			'MongoDB | Express | ReactJS | MaterialUI | AWS | Mongoose | JavaScript (ES6) | HTML | CSS',
		git: 'https://github.com/99Raul/front-end-group',
		deploy: 'https://99raul.github.io/front-end-group/',
	},
	{
		title: 'Photography Search App',
		img: 'https://i.imgur.com/vkUCiIl.png',
		description: 'Friendly application to search for images',
		tech: 'ReactJS | React Router | Heroku | JavaScript (ES6) | HTML | CSS',
		git: 'https://github.com/Connorrichter4/react-photography-app',
		deploy: 'https://connor-react-photography-app.herokuapp.com/',
	},
];

const projectDiv = document.querySelector('.project');

for (let i = 0; i < projects.length; i++) {
	const cardCol = document.createElement('div');
	cardCol.classList.add('col', 'mb-4');

	const card = document.createElement('div');
	card.classList.add('card', 'text-white', 'bg-dark', 'h-100');

	const image = document.createElement('img');
	image.src = projects[i].img;
	image.classList.add('project-image', 'card-img-top');

	const cardBody = document.createElement('div');
	cardBody.classList.add('card-body');

	const title = document.createElement('p');
	title.classList.add('card-title');
	title.innerText = `${projects[i].title} - ${projects[i].description}`;

	const tech = document.createElement('p');
	tech.innerText = projects[i].tech;
	tech.classList.add('card-text');

	const cardLinks = document.createElement('div');
	cardLinks.classList.add('card-body', 'text-center');

	const git = document.createElement('a');
	git.href = projects[i].git;
	git.classList.add('card-link');
	git.innerText = 'GitHub Repo';
	git.target = '_blank';

	const deploy = document.createElement('a');
	deploy.href = projects[i].deploy;
	deploy.classList.add('card-link');
	deploy.innerText = 'Deployed Here';
	deploy.target = '_blank';

	cardLinks.appendChild(git);
	cardLinks.appendChild(deploy);

	cardBody.appendChild(title);
	cardBody.appendChild(tech);
	cardBody.appendChild(cardLinks);

	card.appendChild(image);
	card.appendChild(cardBody);
	cardCol.appendChild(card);
    projectDiv.appendChild(cardCol);
}
