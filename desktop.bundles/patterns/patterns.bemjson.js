module.exports = {
	block: 'page',
	title: 'Паттерны',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'patterns.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' }
	],
	scripts: [{ elem: 'js', url: 'patterns.min.js' }],
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
							content: 'Паттерны'
						},

						/* pt-card */
						{
							elem: 'section',
							mix: { block: 'decorator', mods: { 'space-t': 'xxxxl' }},
							attrs: { 'id': 'pt-card' },
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
															content: 'Карточка',
														},
														{
															block: 'text',
															mods: { view: 'primary', size: 'l' },
															mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
															content: 'Используется для представления ёмких, самодостаточных сущностей. Отлично подходит для отображения рекламных предложений, цифровых товаров и информационных блоков.'
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
											block: 'image',
											url: '../../../../assets/i/pt-card.svg',
											height: 480,
										}
									]
								}
							]
						},
						/* pt-card */

						/* pt-list */
						{
							elem: 'section',
							attrs: { 'id': 'pt-list' },
							content: [
								{
									elem: 'row',
									mix: { block: 'tpl-grid', mods: { ratio: '1-1', 'col-gap': 'full' }},
									content: [
										{
											block: 'image',
											url: '../../../../assets/i/pt-list.svg',
											height: 480,
										},
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
															content: 'Список',
														},
														{
															block: 'text',
															mods: { view: 'primary', size: 'l' },
															mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
															content: 'Используется для вертикального представления повторяющихся сущностей. Отлично подходит для отображения истории, контактов, вертикальных меню.'
														},
														{
															block: 'text',
															mods: { view: 'link', size: 'l' },
															content: 'Подробнее'
														}
													] 
												}
											]
										}
									]
								}
							]
						},
						/* pt-list */

						/* pt-table */
						{
							elem: 'section',
							attrs: { 'id': 'pt-table' },
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
															content: 'Таблица',
														},
														{
															block: 'text',
															mods: { view: 'primary', size: 'l' },
															mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
															content: 'Используется для представления однотипной, повторяющейся информации. Набор модификаторов покрывает максимальное количество как стилистических так и структурных потребностей. Также есть возможность маркеровать строки по статусу.'
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
											block: 'image',
											url: '../../../../assets/i/pt-table.svg',
											height: 480,
										}
									]
								}
							]
						},
						/* pt-table */

						/* pt-informer */
						{
							elem: 'section',
							attrs: { 'id': 'pt-informer' },
							content: [
								{
									elem: 'row',
									mix: { block: 'tpl-grid', mods: { ratio: '1-1', 'col-gap': 'full' }},
									content: [
										{
											block: 'image',
											url: '../../../../assets/i/pt-informer.svg',
											height: 480,
										},
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
															content: 'Информер',
														},
														{
															block: 'text',
															mods: { view: 'primary', size: 'l' },
															mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
															content: 'Используется для представления станусной информации: ошибка, успех, предупреджение.'
														},
														{
															block: 'text',
															mods: { view: 'link', size: 'l' },
															content: 'Подробнее'
														}
													] 
												}
											]
										}
									]
								}
							]
						},
						/* pt-informer */

						/* pt-icon-plus */
						{
							elem: 'section',
							attrs: { 'id': 'pt-icon-plus' },
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
															content: 'Айконплюс',
														},
														{
															block: 'text',
															mods: { view: 'primary', size: 'l' },
															mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
															content: 'Используется для комбинации иконок (графики) и текста (чего угодно).'
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
											block: 'image',
											url: '../../../../assets/i/pt-icon-plus.svg',
											height: 480,
										}
									]
								}
							]
						},
						/* pt-icon-plus */

						/* pt-surface */
						{
							elem: 'section',
							attrs: { 'id': 'pt-surface' },
							content: [
								{
									elem: 'row',
									mix: { block: 'tpl-grid', mods: { ratio: '1-1', 'col-gap': 'full' }},
									content: [
										{
											block: 'image',
											url: '../../../../assets/i/pt-surface.svg',
											height: 480,
										},
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
															content: 'Сюрфейс',
														},
														{
															block: 'text',
															mods: { view: 'primary', size: 'l' },
															mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
															content: 'Используется для представления перекрывающего слоя / модального блока.'
														},
														{
															block: 'text',
															mods: { view: 'link', size: 'l' },
															content: 'Подробнее'
														}
													] 
												}
											]
										}
									]
								}
							]
						},
						/* pt-surface */

						/* pt-form */
						{
							elem: 'section',
							attrs: { 'id': 'pt-informer' },
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
															content: 'Форма',
														},
														{
															block: 'text',
															mods: { view: 'primary', size: 'l' },
															mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
															content: 'Используется для представления информаци, которая помогает получать данные от пользователя (инпуты, селекты, чекбоксы, ...). Наиболее частая структара: набор пунктовс лейблом и контроллом + акцентная кнопка.'
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
											block: 'image',
											url: '../../../../assets/i/pt-form.svg',
											height: 480,
										}
									]
								}
							]
						},
						/* pt-form */
					]
				},
				/* Content */

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