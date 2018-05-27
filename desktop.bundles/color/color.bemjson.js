module.exports = {
	block: 'page',
	title: 'Цвета',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'color.min.css' },
		{ elem: 'css', url: '/assets/bem-grid/bem-grid-l.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'color.min.js' }],
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
							content: 'Цвета'
						},
						{
							block: 'text',
							mods: { size: 'l' },
							mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
							content: [
								{
									elem: 'row',
									content: 'Переменные цветов используются в модификациях блоков и типографики'
								},
								{
									elem: 'row',
									content: 'подчеркивая их смысл или состояние.'
								}
							]
						},
						{
							elem: 'section',
							mix: [
								{ block: 'tpl-grid', mods: { ratio: '1-1-1-1', 'col-gap': 'two-thirds', 'row-gap': 'two-thirds' }},
								{ block: 'decorator', mods: { 'indent-b': 'xxxxl' }}
							],
							attrs: { 
								'style': 'padding-top: 0px;'
							},
							content: [
								{
									block: 'color',
									content: [
									{
										elem: 'image',
										elemMods: { color: 'brand'}
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: '--color-bg-brand'
									}]
								},
								{
									block: 'color',
									content: [
									{
										elem: 'image',
										elemMods: { color: 'action'}
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: '--color-bg-action'
									}]
								},
								{
									block: 'color',
									content: [
									{
										elem: 'image',
										elemMods: { color: 'selection'}
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: '--color-bg-selection'
									}]
								},
								{
									block: 'color',
									content: [
									{
										elem: 'image',
										elemMods: { color: 'hover'}
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: '--color-bg-hover'
									}]
								},
								{
									block: 'color',
									content: [
									{
										elem: 'image',
										elemMods: { color: 'default'}
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: '--color-bg-default'
									}]
								},
								{
									block: 'color',
									content: [
									{
										elem: 'image',
										elemMods: { color: 'border'}
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: '--color-bg-border'
									}]
								},
								{
									block: 'color',
									content: [
									{
										elem: 'image',
										elemMods: { color: 'ghost'}
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: '--color-bg-ghost'
									}]
								},
								{
									block: 'color',
									content: [
									{
										elem: 'image',
										elemMods: { color: 'soft'}
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: '--color-bg-soft'
									}]
								},
								{
									block: 'color',
									content: [
									{
										elem: 'image',
										elemMods: { color: 'tone'}
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: '--color-bg-tone'
									}]
								},
								{
									block: 'color',
									content: [
									{
										elem: 'image',
										elemMods: { color: 'success'}
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: '--color-bg-success'
									}]
								},
								{
									block: 'color',
									content: [
									{
										elem: 'image',
										elemMods: { color: 'alert'}
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: '--color-bg-alert'
									}]
								},
								{
									block: 'color',
									content: [
									{
										elem: 'image',
										elemMods: { color: 'warning'}
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: '--color-bg-warning'
									}]
								},
								{
									block: 'color',
									content: [
									{
										elem: 'image',
										elemMods: { color: 'soft'}
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: '--color-bg-system'
									}]
								},
								{
									block: 'color',
									content: [
									{
										elem: 'image',
										elemMods: { color: 'normal'}
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: '--color-bg-normal'
									}]
								}
							]
						},
						{
							elem: 'section',
							mix: [
								{ block: 'tpl-grid', mods: { ratio: '1-1-1-1', 'col-gap': 'two-thirds', 'row-gap': 'two-thirds' }},
								{ block: 'decorator', mods: { 'indent-b': 'xxxxl' }}
							],
							content: [
								{
									block: 'color',
									content: [
									{
										elem: 'image',
										elemMods: { color: 'typo-primary'}
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: '--color-typo-primary'
									}]
								},
								{
									block: 'color',
									content: [
									{
										elem: 'image',
										elemMods: { color: 'typo-promo'}
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: '--color-typo-promo'
									}]
								},
								{
									block: 'color',
									content: [
									{
										elem: 'image',
										elemMods: { color: 'typo-secondary'}
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: '--color-typo-secondary'
									}]
								},
								{
									block: 'color',
									content: [
									{
										elem: 'image',
										elemMods: { color: 'typo-ghost'}
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: '--color-typo-ghost'
									}]
								},
								{
									block: 'color',
									content: [
									{
										elem: 'image',
										elemMods: { color: 'typo-disable'}
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: '--color-typo-disable'
									}]
								},
								{
									block: 'color',
									content: [
									{
										elem: 'image',
										elemMods: { color: 'typo-success'}
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: '--color-typo-success'
									}]
								},
								{
									block: 'color',
									content: [
									{
										elem: 'image',
										elemMods: { color: 'typo-alert'}
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: '--color-typo-alert'
									}]
								}
							]
						},
						{
							elem: 'section',
							mix: [
								{ block: 'tpl-grid', mods: { ratio: '1-1-1-1', 'col-gap': 'two-thirds', 'row-gap': 'two-thirds' }},
								{ block: 'decorator', mods: { 'indent-b': 'xxxxl' }}
							],
							content: [
								{
									block: 'color',
									content: [
									{
										elem: 'image',
										elemMods: { color: 'link'}
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: '--color-link'
									}]
								},
								{
									block: 'color',
									content: [
									{
										elem: 'image',
										elemMods: { color: 'link-hover' }
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: '--color-link-hover'
									}]
								},
								{
									block: 'color',
									content: [
									{
										elem: 'image',
										elemMods: { color: 'link-minor'}
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: '--color-link-minor'
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
