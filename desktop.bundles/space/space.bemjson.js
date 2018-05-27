module.exports = {
	block: 'page',
	title: 'Отступы',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'space.min.css' },
		{ elem: 'css', url: '/assets/bem-grid/bem-grid-l.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'space.min.js' }],
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
							content: 'Отступы'
						},
						{
							block: 'text',
							mods: { size: 'l' },
							mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
							content: [
								{
									elem: 'row',
									content: 'Переменные отступов используются как для ритма внутри сеток, так и для'
								},
								{
									elem: 'row',
									content: 'обозначения уровней вложенности и разделения смысловых сущностей'
								},
								{
									elem: 'row',
									content: 'внутри паттернов.'
								}
							]
						},
						{
							elem: 'row',
							mix: { block: 'tpl-grid', mods: { ratio: '1-1-1-1', 'col-gap': 'two-thirds', 'row-gap': 'two-thirds' }},
							content: [
								
								{
									block: 'space',
									content: [
									{
										elem: 'image',
										content: [
										{
											block: 'space-image',
											mods: { size: 'xxxxl' },
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', display: 'inline-block' },
										content: [
										{
											block: 'text',
											mods: { weight: 'bold' },
											content: '--space-xxxxl'
										}
										]
									}]
								},
								{
									block: 'space',
									content: [
									{
										elem: 'image',
										content: [
										{
											block: 'space-image',
											mods: { size: 'xxxl' },
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', display: 'inline-block' },
										content: [
										{
											block: 'text',
											mods: { weight: 'bold' },
											content: '--space-xxxl'
										}
										]
									}]
								},
								{
									block: 'space',
									content: [
									{
										elem: 'image',
										content: [
										{
											block: 'space-image',
											mods: { size: 'xxl' },
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', display: 'inline-block' },
										content: [
										{
											block: 'text',
											mods: { weight: 'bold' },
											content: '--space-xxl'
										}
										]
									}]
								},
								{
									block: 'space',
									content: [
									{
										elem: 'image',
										content: [
										{
											block: 'space-image',
											mods: { size: 'xl' },
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', display: 'inline-block' },
										content: [
										{
											block: 'text',
											mods: { weight: 'bold' },
											content: '--space-xl'
										}
										]
									}]
								},

								{
									block: 'space',
									content: [
									{
										elem: 'image',
										content: [
										{
											block: 'space-image',
											mods: { size: 'l' },
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', display: 'inline-block' },
										content: [
										{
											block: 'text',
											mods: { weight: 'bold' },
											content: '--space-l'
										}]
									}]
								},
								{
									block: 'space',
									content: [
									{
										elem: 'image',
										content: [
										{
											block: 'space-image',
											mods: { size: 'm' },
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', display: 'inline-block' },
										content: [
										{
											block: 'text',
											mods: { weight: 'bold' },
											content: '--space-m'
										}]
									}]
								},
								{
									block: 'space',
									content: [
									{
										elem: 'image',
										content: [
										{
											block: 'space-image',
											mods: { size: 's' },
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', display: 'inline-block' },
										content: [
										{
											block: 'text',
											mods: { weight: 'bold' },
											content: '--space-s'
										}]
									}]
								},

								{
									block: 'space',
									content: [
									{
										elem: 'image',
										content: [
										{
											block: 'space-image',
											mods: { size: 'xs' },
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', display: 'inline-block' },
										content: [
										{
											block: 'text',
											mods: { weight: 'bold' },
											content: '--space-xs'
										}]
									}]
								},
								{
									block: 'space',
									content: [
									{
										elem: 'image',
										content: [
										{
											block: 'space-image',
											mods: { size: 'xxs' },
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', display: 'inline-block' },
										content: [
										{
											block: 'text',
											mods: { weight: 'bold' },
											content: '--space-xxs'
										}]
									}]
								},
								{
									block: 'space',
									content: [
									{
										elem: 'image',
										content: [
										{
											block: 'space-image',
											mods: { size: 'xxxs' },
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', display: 'inline-block' },
										content: [
										{
											block: 'text',
											mods: { weight: 'bold' },
											content: '--space-xxxs'
										}]
									}]
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
