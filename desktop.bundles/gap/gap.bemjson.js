module.exports = {
	block: 'page',
	title: 'Расстояния',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'gap.min.css' },
		{ elem: 'css', url: '/assets/bem-grid/bem-grid-l.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'gap.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'whitepaper-default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' }
	},
	content: [
		{
			block: 'demo',
			content: [

				/* Menu */
				{
					block: 'new-menu',
					mix: { block: 'demo', elem: 'nav' }
				},
				/* /Menu */

				/* Content */
				{
					elem: 'content',
					elemMods: { size: 'm' },
					content: [
						{
							block: 'text',
							mods: { size: 'xxxxl', weight: 'bold', font: 'sans' },
							mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
							content: 'Расстояния'
						},
						{
							block: 'text',
							mods: { size: 'l' },
							mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
							content: [
								{
									elem: 'row',
									content: 'Переменные используются для формирования отступов внутри обвязок и сеток.'
								}
							]
						},
						{
							elem: 'subject',
							mix: { block: 'tpl-grid', mods: { ratio: '1-1', 'col-gap': 'two-thirds', 'row-gap': 'two-thirds' }},
							content: [
								{
									block: 'gap',
									content: [
										{
											elem: 'view',
											content: [
												{
													block: 'image',
													attrs: { style: 'display: block' },
													width: 468,
													url: '../../assets/i/col-gap-full.svg'
												}
											]
										},
										{
											elem: 'text',
											content: [
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "--col-gap-full"
												}
											]
										}
									]
								},
								{
									block: 'gap',
									content: [
										{
											elem: 'view',
											content: [
												{
													block: 'image',
													attrs: { style: 'display: block' },
													width: 468,
													url: '../../assets/i/col-gap-two-thirds.svg'
												}
											]
										},
										{
											elem: 'text',
											content: [
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "--col-gap-two-thirds"
												}
											]
										}
									]
								},
								{
									block: 'gap',
									content: [
										{
											elem: 'view',
											content: [
												{
													block: 'image',
													attrs: { style: 'display: block' },
													width: 468,
													url: '../../assets/i/col-gap-half.svg'
												}
											]
										},
										{
											elem: 'text',
											content: [
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "--col-gap-half"
												}
											]
										}
									]
								},
								{
									block: 'gap',
									content: [
										{
											elem: 'view',
											content: [
												{
													block: 'image',
													attrs: { style: 'display: block' },
													width: 468,
													url: '../../assets/i/col-gap-third.svg'
												}
											]
										},
										{
											elem: 'text',
											content: [
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "--col-gap-third"
												}
											]
										}
									]
								}
							]
						}
					]
				},
				/* /Content */

				/* Footer */
				{
					block: 'footer',
					mix: { block: 'demo', elem: 'footer' }
				}
				/* /Footer */

			]
		}
	]
};
