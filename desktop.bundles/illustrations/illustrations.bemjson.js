module.exports = {
	block: 'page',
	title: 'BEM Illustrations',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
			{ elem: 'meta', attrs: { name: 'description', content: '' } },
			{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
			{ elem: 'css', url: 'illustrations.min.css' },
			{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	mix: {
		block: 'theme',
		mods: { color: 'whitepaper-default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' }
	},
	scripts: [{ elem: 'js', url: 'illustrations.min.js' }],
	mods: { theme: 'islands' },
	content: [

		/* Menu */
		{
			block: 'new-menu',
		},
		/* /Menu */

		/* Content */	
		{
			block: 'demo',
			elem: 'content',
			content: [
			{
				block: 'text',
				mods: { size: 'xxxxl', weight: 'bold', font: 'sans' },
				mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxl' }},
				content: 'Illustrations'
			},
			{
				block: 'illustration-list',
				content: [
				{
					block: 'illustration-item',
					content: [
					{
						elem: 'view',
						elemMods: { view: 'inverse' },
						content: [
							{
								block: 'image',
								width: 400,
								url: '/assets/i/bem-team.png'
							}
						]
					},
					{
						elem: 'name',
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center', font: 'sans' },
							content: "BEM Design Team"
						}]
					}]
				},
				{
					block: 'illustration-item',
					content: [
					{
						elem: 'view',
						elemMods: { view: 'inverse' },
						content: [
							{
								block: 'image',
								width: 400,
								url: '/assets/i/bem-show.png'
							}
						]
					},
					{
						elem: 'name',
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center', font: 'sans' },
							content: "BEM Show"
						}]
					}]
				},
				{
					block: 'illustration-item',
					content: [
					{
						elem: 'view',
						elemMods: { view: 'inverse' },
						content: [
							{
								block: 'image',
								width: 400,
								url: '/assets/i/bem-hackathon.png'
							}
						]
					},
					{
						elem: 'name',
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center', font: 'sans' },
							content: "BEM Hackathon"
						}]
					}]
				},
				{
					block: 'illustration-item',
					content: [
					{
						elem: 'view',
						content: [
						{
							block: 'illustration',
						}]
					},
					{
						elem: 'name',
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center', font: 'sans' },
							content: "BEM Night"
						}]
					}]
				},
				{
					block: 'illustration-item',
					content: [
					{
						elem: 'view',
						content: [
						]
					},
					{
						elem: 'name',
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center', font: 'sans' },
							content: "BEM Channel"
						}]
					}]
				},
				{
					block: 'illustration-item',
					content: [
					{
						elem: 'view',
						content: [
						{
							block: 'illustration',
						}]
					},
					{
						elem: 'name',
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center', font: 'sans' },
							content: "BEM Magazine"
						}]
					}]
				}]
			}]
		},
		/* Content */

		/* Footer */
		{
			block: 'footer',
		}
		/* /Footer */

	]
};
