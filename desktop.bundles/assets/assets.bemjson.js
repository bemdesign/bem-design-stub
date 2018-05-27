module.exports = {
	block: 'page',
	title: 'Материалы',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'assets.min.css' },
		{ elem: 'css', url: '/assets/bem-grid/bem-grid-l.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' }
	],
	scripts: [{ elem: 'js', url: 'assets.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'whitepaper-default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' }
	},
	content: [
		{
			block: 'tpl-layout',
			attrs: { style: 'position: relative; top: 60px' },
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
					elemMods: { size: 'm' },
					content: [
						{
							block: 'text',
							mods: { size: 'xxxxl', weight: 'bold', font: 'sans' },
							content: 'Материалы'
						},

						/* KIT BILL */
						{
							elem: 'section',
							mix: { block: 'decorator', mods: { 'space-t': 'xxxxl' }},
							content: [
								{
									elem: 'row',
									mix: { block: 'tpl-grid', mods: { ratio: '1-1', 'col-gap': 'full' }},
									content: [
										{
											block: 'wrap',
											content: [
												{
													elem: 'content',
													content: [
														{
															block: 'text',
															mods: { size: 'xxxl', weight: 'bold'  },
															mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
															content: 'Kit BILL',
														},
														{
															block: 'text',
															mods: { view: 'primary', size: 'l' },
															mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
															content: 'Scalable cards based on BEM. Good for hight fidelity prototyping. Components help to create extendable and reusable user interface'
														},
														{
															block: 'text',
															mods: { view: 'link', size: 'l' },
															content: 'Подробнее'
														}
													] 
												}
											]
										},
										{
											elem: 'cover',
											attrs: { 
												'style': 'height: 351px; overflow: hidden; background: var(--color-bg-ghost);'
											},
											content: [
												// {
												// 	block: 'image',
												// 	url: '../../../../assets/i/kit-bill.png',
												// 	height: 456,
												// }
											]
										}
									]
								}
							]
						},
						/* KIT BILL */

						/* BEM STARTER KIT */
						{
							elem: 'section',
							content: [
								{
									elem: 'row',
									mix: { block: 'tpl-grid', mods: { ratio: '1-1', 'col-gap': 'full' }},
									content: [
										{
											block: 'wrap',
											content: [
												{
													elem: 'content',
													content: [
														{
															block: 'text',
															mods: { size: 'xxxl', weight: 'bold'  },
															mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
															content: 'BEM Starter Kit'
														},
														{
															block: 'text',
															mods: { view: 'primary', size: 'l' },
															mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
															content: 'Сборка блоков на различные тематики для начала прототипирования. В блоках используется кастомные БЭМ компоненты'
														},
														{
															block: 'text',
															mods: { view: 'link', size: 'l' },
															content: 'Подробнее'
														}
													] 
												}
											]
										},
										{
											elem: 'cover',
											attrs: { 
												'style': 'height: 351px; overflow: hidden; background: var(--color-bg-ghost);'
											},
											content: [
												// {
												// 	block: 'image',
												// 	url: '../../../../assets/i/bem-starter-kit.png',
												// 	height: 456,
												// }
											]
										}
									]
								}
							]
						}
						/* BEM STARTER KIT */
					]
				},
				/* Content */

				/* Footer */
				{
					block: 'footer',
				}
				/* /Footer */

			]
		}
	]
};