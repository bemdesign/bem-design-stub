module.exports = {
	block: 'page',
	title: 'Меню',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'menu.min.css' },
		{ elem: 'css', url: '/assets/bem-grid/bem-grid-l.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'menu.min.js' }],
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
							content: 'Меню'
						},
						{
							block: 'text',
							mods: { size: 'l' },
							mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
							content: [
								{
									elem: 'row',
									content: 'Переменные используются для формирования ширины элемента обвязки,'
								},
								{
									elem: 'row',
									content: 'предназначенного для размещения меню.'
								}
							]
						},
						{
							elem: 'subject',
							mix: { block: 'tpl-grid', mods: { ratio: '1-1', 'col-gap': 'two-thirds', 'row-gap': 'two-thirds' }},
							content: [
								{
									block: 'menu',
									content: [
										{
											elem: 'view',
											content: [
												{
													elem: 'menu-image',
													elemMods: { size: 'unfold' },
													content: [
														{
															block: 'image',
															attrs: { style: 'display: block' },
															width: 300,
															url: '../../assets/i/menu-unfold.svg'
														}
													]
												}
											]
										},
										{
											elem: 'text',
											content: [
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "--menu-unfold"
												}
											]
										}
									]
								},
								{
									block: 'menu',
									content: [
										{
											elem: 'view',
											content: [
												{
													elem: 'menu-image',
													elemMods: { size: 'fold' },
													content: [
														{
															block: 'image',
															attrs: { style: 'display: block' },
															width: 56,
															url: '../../assets/i/menu-fold.svg'
														}
													]
												}
											]
										},
										{
											elem: 'text',
											content: [
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "--menu-fold"
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
