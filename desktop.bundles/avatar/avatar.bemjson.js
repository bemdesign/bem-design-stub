module.exports = {
	block: 'page',
	title: 'Аватар',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'avatar.min.css' },
		{ elem: 'css', url: '/assets/bem-grid/bem-grid-l.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' }
	],
	scripts: [{ elem: 'js', url: 'avatar.min.js' }],
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
							content: 'Аватарки'
						},
						{
							block: 'text',
							mods: { size: 'l' },
							mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
							content: [
								{
									elem: 'row',
									content: 'Для отображения фотографий пользователей используется { block: \'avatar\' }, сами'
								},
								{
									elem: 'row',
									content: 'фотографии размещаются в { elem: \'photo\' }'
								}
							]
						},
						{
							elem: 'row',
							mix: { block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'full' }},
							content: [
								{
									block: 'pt-icon-plus',
									mods: { 'vertical-align': 'center' },
									content: [
										{
											elem: 'icon',
											elemMods: { 'indent-r': 'm' },
											content: [
												{
													block: 'avatar',
													content: [
														{
															elem: 'photo',
															elemMods: { size: 'l' }
														}
													]
												}
											]
										},
										{
											elem: 'block',
											content: [
												{
													block: 'text',
													mods: { size: 'm', view: 'primary' },
													mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
													content: "Крупный аватар"
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "elemMods: { size: 'l' }"
												}
											]
										}
									]
								},
								{
									block: 'pt-icon-plus',
									mods: { 'vertical-align': 'center' },
									content: [
										{
											elem: 'icon',
											elemMods: { 'indent-r': 'm' },
											content: [
												{
													block: 'avatar',
													content: [
														{
															elem: 'photo',
															elemMods: { size: 'm' }
														}
													]
												}
											]
										},
										{
											elem: 'block',
											content: [
												{
													block: 'text',
													mods: { size: 'm', view: 'primary' },
													mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
													content: "Стандартный аватар"
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "elemMods: { size: 'm' }"
												}
											]
										}
									]
								},
								{
									block: 'pt-icon-plus',
									mods: { 'vertical-align': 'center' },
									content: [
										{
											elem: 'icon',
											elemMods: { 'indent-r': 'm' },
											content: [
												{
													block: 'avatar',
													content: [
														{
															elem: 'photo',
															elemMods: { size: 's' }
														}
													]
												}
											]
										},
										{
											elem: 'block',
											content: [
												{
													block: 'text',
													mods: { size: 'm', view: 'primary' },
													mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
													content: "Мелкий аватар"
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "elemMods: { size: 's' }"
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