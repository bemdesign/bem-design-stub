module.exports = {
	block: 'page',
	title: 'Тэг',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'tag.min.css' },
		{ elem: 'css', url: '/assets/bem-grid/bem-grid-l.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' }
	],
	scripts: [{ elem: 'js', url: 'tag.min.js' }],
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
							content: 'Теги'
						},
						{
							block: 'text',
							mods: { size: 'l' },
							mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
							content: [
								{
									elem: 'row',
									content: 'Для классификации различных сущностей используется { block: \'tag\' }'
								}
							]
						},
						{
							elem: 'row',
							mix: { block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'two-thirds', 'row-gap': 'two-thirds' }},
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
													block: 'tag',
													mods: { view: 'default', size: 'm' },
													content: 'default'
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
													content: "Дефолтный"
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "mods: { view: 'default' }"
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
													block: 'tag',
													mods: { view: 'disable', size: 'm' },
													content: 'disable'
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
													content: "Дизейбл"
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "mods: { view: 'disable' }"
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
													block: 'tag',
													mods: { view: 'link', size: 'm' },
													content: 'link'
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
													content: "Ссылочный"
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "mods: { view: 'link' }"
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
													block: 'tag',
													mods: { view: 'default', size: 's' },
													content: 'default'
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
													content: "Дефолтный"
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "mods: { view: 'default' }"
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
													block: 'tag',
													mods: { view: 'disable', size: 's' },
													content: 'disable'
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
													content: "Дизейбл"
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "mods: { view: 'disable' }"
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
													block: 'tag',
													mods: { view: 'link', size: 's' },
													content: 'link'
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
													content: "Ссылочный"
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: "mods: { view: 'link' }"
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