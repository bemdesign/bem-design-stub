module.exports = {
	block: 'page',
	title: 'Шрифт',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'font.min.css' },
		{ elem: 'css', url: '/assets/bem-grid/bem-grid-l.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'font.min.js' }],
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
							content: 'Шрифт'
						},
						{
							block: 'text',
							mods: { size: 'l' },
							mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
							content: [
								{
									elem: 'row',
									content: 'Переменные используются для обозначения шрифта у текстовых блоков.'
								}
							]
						},
						{
							block: 'fonts',
							mix: { block: 'tpl-grid', mods: { ratio: '1-1', 'col-gap': 'two-thirds' } },
							content: [
								{
									elem: 'item-wrapper',
									content: [
										{
											elem: 'item',
											elemMods: { view: 'museo' },
											content: [
												{
													block: 'pt-icon-plus',
													mix: { block: 'theme', mods: { color: 'whitepaper-inverse' } },
													mods: { 'vertical-align': 'center' },
													content: [
														{
															elem: 'icon',
															elemMods: { 'indent-r': 'l'},
															content: {
																block: 'image',
																url: ''
															}
														},
														{
															elem: 'block',
															content: {
																block: 'text',
																mods: { view: 'primary', size: 'xxxxl', weight: 'bold' },
																content: 'Museo'
															}
														}
													]
												}
											]
										},
										{
											block: 'text',
											mix: { block: 'decorator', mods: { 'indent-t': 's' } },
											mods: { size: 'm', view: 'primary', weight: 'bold' },
											content: "font: 'Museo'"
										}
									]
								},
								{
									elem: 'item-wrapper',
									content: [
										{
											elem: 'item',
											elemMods: { view: 'plex' },
											content: [
												{
													block: 'pt-icon-plus',
													mix: { block: 'theme', mods: { color: 'whitepaper-inverse' } },
													mods: { 'vertical-align': 'center' },
													content: [
														{
															elem: 'icon',
															elemMods: { 'indent-r': 'l'},
															content: {
																block: 'image',
																url: '../../../../assets/i/ibm-logo.svg'
															}
														},
														{
															elem: 'block',
															content: {
																block: 'text',
																mods: { size: 'xxxxl', view: 'primary', weight: 'bold', },
																content: 'Plex'
															}
														}
													]
												}
											]
										},
										{
											block: 'text',
											mix: { block: 'decorator', mods: { 'indent-t': 's' } },
											mods: { size: 'm', view: 'primary', weight: 'bold' },
											content: "font: 'ibm'"
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
