export const postsData = [
	{
		id: 1,
		author: {
			avatarUrl: 'https://source.unsplash.com/500x500/?user-face-account-photo&a',
			name: 'Avery Evergreen',
			role: 'Web Developer',
		},
		content: [
			{ type: 'paragraph', content: 'Fala galera! 👋' },
			{
				type: 'paragraph',
				content:
					'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
			},
			{ type: 'link', content: 'avery.evergreen.developer/rocketseat-one' },
		],
		publishedAt: new Date(),
	},
	{
		id: 2,
		author: {
			avatarUrl: 'https://source.unsplash.com/500x500/?user-face-account-photo&b',
			name: 'Rowan Frostwood',
			role: 'UX Design',
		},
		content: [
			{ type: 'paragraph', content: 'Hey pessoal! 👋' },
			{
				type: 'paragraph',
				content: 'Acabei de finalizar mais um trabalho de UX Design ✨🚀. Vejam no link abaixo!',
			},
			{ type: 'link', content: 'rowan.frostwood.design/rocketseat-one' },
		],
		publishedAt: new Date('2022-05-10 20:00:00'),
	},
];
