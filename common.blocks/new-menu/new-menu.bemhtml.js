block('new-menu')(
	content()(function() {
		return {
			elem: 'container',
			mix: { block: 'tpl-layout', elem: 'container', elemMods: { size: 'm', align: 'center' }, },
			content: [
				{
					elem: 'logo',
					tag: 'a',
					attrs: { href: '/index.html' }
				},
				{
					elem: 'nav',
					content: [
						{
							elem: 'item',
							elemMods: { view: 'dropdown' },
							content: [
								{
									block: 'text',
									mods: { size: 'm', view: 'primary' },
									content: 'Тема'
								},
								{
									elem: 'dropdown',
									content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											tag: 'a', attrs: { href: '/color.html' },
											mix: { block: 'new-menu', elem: 'dropdown-link' },
											content: 'Цветовая палитра'
										},
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											tag: 'a', attrs: { href: '/color.html' },
											mix: { block: 'new-menu', elem: 'dropdown-link' },
											content: 'Отступы'
										},
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											tag: 'a', attrs: { href: '/space.html' },
											mix: { block: 'new-menu', elem: 'dropdown-link' },
											content: 'Размеры'
										},
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											tag: 'a', attrs: { href: '/breakpoints.html' },
											mix: { block: 'new-menu', elem: 'dropdown-link' },
											content: 'Точки перестроения'
										},
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											tag: 'a', attrs: { href: '/gap.html' },
											mix: { block: 'new-menu', elem: 'dropdown-link' },
											content: 'Расстояния'
										},
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											tag: 'a', attrs: { href: '/menu.html' },
											mix: { block: 'new-menu', elem: 'dropdown-link' },
											content: 'Меню'
										},
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											tag: 'a', attrs: { href: '/font.html' },
											mix: { block: 'new-menu', elem: 'dropdown-link' },
											content: 'Шрифт'
										}
									]
								}
							]
						},
						{
							elem: 'item',
							elemMods: { view: 'dropdown' },
							content: [
								{
									block: 'text',
									mods: { size: 'm', view: 'primary' },
									content: 'Контент'
								},
								{
									elem: 'dropdown',
									content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											tag: 'a', attrs: { href: '/text.html' },
											mix: { block: 'new-menu', elem: 'dropdown-link' },
											content: 'Типографика'
										},
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											tag: 'a', attrs: { href: '/icon.html' },
											mix: { block: 'new-menu', elem: 'dropdown-link' },
											content: 'Иконки'
										},
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											tag: 'a', attrs: { href: '/brand-logo.html' },
											mix: { block: 'new-menu', elem: 'dropdown-link' },
											content: 'Логотипы'
										},
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											tag: 'a', attrs: { href: '/avatar.html' },
											mix: { block: 'new-menu', elem: 'dropdown-link' },
											content: 'Аватарки'
										},
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											tag: 'a', attrs: { href: '/badge.html' },
											mix: { block: 'new-menu', elem: 'dropdown-link' },
											content: 'Бейджи'
										}
									]
								}
							]
						},
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							tag: 'a',
							attrs: { href: '/patterns.html' },
							mix: { block: 'new-menu', elem: 'item', elemMods: { view: 'link' }, },
							content: 'Паттерны'
						},
						{
							elem: 'item',
							elemMods: { view: 'dropdown' },
							content: [
								{
									block: 'text',
									mods: { size: 'm', view: 'primary' },
									content: 'Каркас'
								},
								{
									elem: 'dropdown',
									content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											tag: 'a', attrs: { href: '/layout.html' },
											mix: { block: 'new-menu', elem: 'dropdown-link' },
											content: 'Обвязка'
										},
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											tag: 'a', attrs: { href: '/grid.html' },
											mix: { block: 'new-menu', elem: 'dropdown-link' },
											content: 'Сетка'
										},
									]
								}
							]
						},
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							tag: 'a',
							attrs: { href: '/doc.html' },
							mix: { block: 'new-menu', elem: 'item', elemMods: { view: 'link' }, },
							content: 'Обучение'
						},
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							tag: 'a',
							attrs: { href: '/themes.html' },
							mix: { block: 'new-menu', elem: 'item', elemMods: { view: 'link' }, },
							content: 'Материалы'
						}


						// {
						// 	elem: 'item',
						// 	elemMods: { view: 'dropdown' },
						// 	content: [
						// 		{
						// 			block: 'pt-icon-plus',
						// 			mods: { 'vertical-align': 'center' },
						// 			content: [
						// 				{
						// 					elem: 'block',
						// 					content: {
						// 						block: 'text',
						// 						mods: { size: 'm', view: 'primary' },
						// 						content: 'Материалы'
						// 					}
						// 				},
						// 				{
						// 					elem: 'icon',
						// 					elemMods: { 'indent-l': 'xs'},
						// 					content: { block: 'icon', mods: { 'name': 'arrow-down', view: 'ghost', size: 's' }}
						// 				}
						// 			]
						// 		},
						// 		{
						// 			elem: 'dropdown',
						// 			content: [
						// 				{
						// 					block: 'text',
						// 					mods: { size: 'm', view: 'primary' },
						// 					tag: 'a', attrs: { href: '/templates.html' },
						// 					mix: { block: 'new-menu', elem: 'dropdown-link' },
						// 					content: 'Kit BILL'
						// 				},
						// 				{
						// 					block: 'text',
						// 					mods: { size: 'm', view: 'primary' },
						// 					tag: 'a', attrs: { href: '/templates.html' },
						// 					mix: { block: 'new-menu', elem: 'dropdown-link' },
						// 					content: 'BEM Starter Kit'
						// 				},
						// 			]
						// 		}
						// 	]
						// }
					]
				}
			]
		}
	})
);