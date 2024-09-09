// JavaScript code to dynamically generate project cards
const projectData = [
  {
    title: 'Project 1',
    description: 'This is the description for Project 1.',
    imageUrl: 'https://via.placeholder.com/300x200'
  },
  {
    title: 'Project 2',
    description: 'This is the description for Project 2.',
    imageUrl: 'https://via.placeholder.com/300x200'
  },
  {
    title: 'Project 3',
    description: 'This is the description for Project 3.',
    imageUrl: 'https://via.placeholder.com/300x200'
  },
  {
    title: 'Project 4',
    description: 'This is the description for Project 4.',
    imageUrl: 'https://via.placeholder.com/300x200'
  }
];

const projectGrid = document.getElementById('project-grid');

projectData.forEach(project => {
  const projectCard = document.createElement('div');
  projectCard.classList.add('project-card');

  const img = document.createElement('img');
  img.src = project.imageUrl;
  img.alt = project.title;

  const details = document.createElement('div');
  details.classList.add('project-details');

  const title = document.createElement('h3');
  title.textContent = project.title;

  const description = document.createElement('p');
  description.textContent = project.description;

  const btn = document.createElement('a');
  btn.classList.add('btn');
  btn.href = '#';
  btn.textContent = 'View Project';

  details.appendChild(title);
  details.appendChild(description);
  details.appendChild(btn);

  projectCard.appendChild(img);
  projectCard.appendChild(details);

  projectGrid.appendChild(projectCard);
});