module.exports = {
	block: 'page',
	title: 'Точки перестроения',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'breakpoint.min.css' },
		{ elem: 'css', url: '/assets/bem-grid/bem-grid-l.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'breakpoint.min.js' }],
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
							content: 'Точки перестроения'
						},
						{
							block: 'text',
							mods: { size: 'l' },
							mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
							content: [
								{
									elem: 'row',
									content: 'Переменные используются внутри адаптивных модификации сеток.'
								}
							]
						},
						{
							elem: 'subject',
							mix: [
								{ block: 'tpl-grid', mods: { ratio: '1-1', 'col-gap': 'two-thirds', 'row-gap': 'two-thirds' }},
								{ block: 'decorator', mods: { 'indent-b': 'xxxxl' }}
							],
							content: [
								// {
								// 	block: 'breakpoint',
								// 	content: [
								// 		{
								// 			elem: 'view',
								// 			content: [

								// 			]
								// 		},
								// 		{
								// 			elem: 'text',
								// 			content: [
								// 				{
								// 					block: 'text',
								// 					mods: { size: 'm', weight: 'bold' },
								// 					content: "--screen-xl"
								// 				}
								// 			]
								// 		}
								// 	]
								// },
								{
									block: 'breakpoint',
									content: [
										{
											elem: 'view',
											content: [
												{
													block: 'image',
													width: 460,
													url: '../../../../assets/i/screen-l.svg'
												}
											]
										},
										{
											elem: 'text',
											content: [
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold', align: 'center' },
													content: "--screen-l"
												}
											]
										}
									]
								},
								{
									block: 'breakpoint',
									content: [
										{
											elem: 'view',
											content: [
												{
													block: 'image',
													width: 460,
													url: '../../../../assets/i/screen-m.svg'
												}
											]
										},
										{
											elem: 'text',
											content: [
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold', align: 'center' },
													content: "--screen-m"
												}
											]
										}
									]
								},
								{
									block: 'breakpoint',
									content: [
										{
											elem: 'view',
											content: [
												{
													block: 'image',
													width: 460,
													url: '../../../../assets/i/screen-s.svg'
												}
											]
										},
										{
											elem: 'text',
											content: [
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold', align: 'center' },
													content: "--screen-s"
												}
											]
										}
									]
								},
								{
									block: 'breakpoint',
									content: [
										{
											elem: 'view',
											content: [
												{
													block: 'image',
													width: 460,
													url: '../../../../assets/i/screen-xs.svg'
												}
											]
										},
										{
											elem: 'text',
											content: [
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold', align: 'center' },
													content: "--screen-xs"
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
