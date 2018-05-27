module.exports = {
	block: 'page',
	title: 'Маркерные иконки',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'article-vectors.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'article-vectors.min.js' }],
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
					elemMods: { size: 's' },
					content: [
					{
						block: 'text',
						mods: { size: 'xxxxl', weight: 'bold', font: 'sans' },
						mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxl' }},
						content: 'Как рисовать векторы'
					},
					{
						block : 'text',
						mods : { view : 'primary', size : 'xxl', type : 'h1' },
						content: 'Вступление в векторографику'
					},
					{
						block : 'text',
						mods : { view : 'primary', size : 'm', type : 'p' },
						content: 'Важный момент для понимания как и&nbsp;где использовать иконографику, это ее&nbsp;вторичность и&nbsp;в&nbsp;первую очередь комментирование основного контента. В&nbsp;цепочки контента на&nbsp;странице иконки как графический символ занимают последнее место уступая любой другой графике.'
					},
					{
						block : 'text',
						mods : { view : 'primary', size : 'm', type : 'p' },
						content: 'Хочется использовать иконографику как последний способ сфокусировать пользователя на&nbsp;чем-то и&nbsp;не&nbsp;пытаться заменить&nbsp;ей: карточки, иллюстрации или фото. Нужно уметь работать с&nbsp;текстовым и&nbsp;функциональным контентом обходясь без дополнительной маркировки этого контента иконками.'
					},
					{
						block : 'text',
						mods : { view : 'primary', size : 'm', type : 'p' },
						content: 'Развивая старый стиль иконок в&nbsp;новом мы&nbsp;сохраняем преемственность образов старой иконографики, упрощаем формы и&nbsp;ставим прицел на&nbsp;масштабированность (размер, цвет, возможность переиспользования базовых форм в&nbsp;других проектах или иконках).'
					},
					{
						block : 'text',
						mods : { view : 'primary', size : 'm', type : 'p' },
						content: 'Важно! Обращайте внимание на&nbsp;то&nbsp;в&nbsp;какой среде находится иконка, частью какого она блока является и&nbsp;среди каких иконок она стоит. Рисуйте графику исходя от&nbsp;общего вида страницы, а&nbsp;не&nbsp;отдельно как &laquo;задача нарисовать корзину&raquo;.'
					},
					{
						block: 'image',
						width: 740,
						url: '../../../../assets/i/vector-1.png',
					},
					{
						block : 'text',
						mods : { view : 'primary', size : 'xl', type : 'h2', weight : 'bold' },
						content: 'Метафора'
					},
					{
						block : 'text',
						mods : { view : 'primary', size : 'm', type : 'p' },
						content: 'Говоря о&nbsp;иконках всегда стоит начинать с&nbsp;метафоры и&nbsp;образов которых они несут, старый стиль описывал прямую метфору первого уровня и&nbsp;изображал процессы ближе к&nbsp;жизни и&nbsp;как можно понятней с&nbsp;яркими деталями и&nbsp;излишним визуальным шумом.'
					},
					{
						block : 'text',
						mods : { view : 'primary', size : 'm', type : 'p' },
						content: 'Новый стиль (кроме перерисовки старых иконок) говорит на&nbsp;языке простых форм и&nbsp;очень примитивен, сложные формы не&nbsp;позволительная роскошь для масштабирования, и&nbsp;от&nbsp;них стоит отказываться.'
					},
					{
						block : 'text',
						mods : { view : 'primary', size : 'm', type : 'p' },
						content: 'Сами&nbsp;же образы теряют первый уровень понимания, и&nbsp;абстрактный. Как пример возьмем символ перевода денег, в&nbsp;старом стиле это довольно детализированная иконка со&nbsp;стопкой купюр стрелкой и&nbsp;рукой получающего&nbsp;&mdash; это понятный образ.'
					},
					{
						block : 'text',
						mods : { view : 'primary', size : 'm', type : 'p' },
						content: 'Но&nbsp;тут есть фундаментальный минус:'
					},
					{
						block : 'text',
						mods : { view : 'primary', size : 'm', type : 'p' },
						content: 'Интерфейсно такая иконка слишком много берет на&nbsp;себя, он&nbsp;рассказывает историю вместо того чтобы эту роль выполнял текстовый контент или простой карточный блок. В&nbsp;нашем случае можно просто показать круг(монеты) и&nbsp;стрелку, этого будет достаточно.'
					},
					{
						block : 'text',
						mods : { view : 'primary', size : 'xl', type : 'h2', weight : 'bold' },
						content: 'Применение'
					},
					{
						block : 'text',
						mods : { view : 'primary', size : 'm', type : 'p' },
						content: 'Как говорилось выше иконки это маркер к&nbsp;основному событию и&nbsp;он&nbsp;помогает лишь сфокусироваться на&nbsp;особенностях происходящего на&nbsp;странице и&nbsp;не&nbsp;вкоем случае не&nbsp;является иллюстративным элементом. Не&nbsp;пытайтесь использовать иконки в&nbsp;тизерах или рекламе.'
					},
					{
						block : 'text',
						mods : { view : 'primary', size : 'm', type : 'p' },
						content: 'И&nbsp;не&nbsp;перекладывайте графические приемы иконок и&nbsp;рекламную иллюстрацию. Это разные вещи.'
					},
					{
						block : 'text',
						mods : { view : 'primary', size : 'xl', type : 'h2', weight : 'bold' },
						content: 'Базовые принципы и&nbsp;анатомия'
					},
					{
						block: 'image',
						width: 455,
						url: '../../../../assets/i/vector-2.png',
						attrs: {
							'style': 'border: 1px solid rgba(0, 0, 0, 0.05);'
						}
					},
					/* Пример старой страницы с новыми графикой в контексте блоков и форм */

					{
						block: 'text-list',
						mix: { block: 'decorator', mods: { 'space-b': 'l' } },
						content: [
							{
								elem: 'item',
								content: [
									{
										block : 'text',
										mods : { view : 'primary', size : 'm', type : 'p' },
										content: '1. желтый строук, дополнительный;'
									},
								]
							},
							{
								elem: 'item',
								content: [
									{
										block : 'text',
										mods : { view : 'primary', size : 'm', type : 'p' },
										content: '2. черный строук, базовая форма;'
									}
								]
							},
							{
								elem: 'item',
								content: [
									{
										block : 'text',
										mods : { view : 'primary', size : 'm', type : 'p' },
										content: '3. пустой слой.'
									}
								]
							}
						]
					},

					{
						block : 'text',
						mods : { view : 'primary', size : 'm', type : 'p' },
						content: '+ В&nbsp;случаях переиспользования иконок в&nbsp;других проектах, возможны эксперимент с&nbsp;цветом и&nbsp;заливкой больших форм, но&nbsp;с&nbsp;сохранением &laquo;пустого слоя&raquo; (промежутка между одним объектом иконки и&nbsp;другим)'
					},

					{
						block : 'text',
						mods : { view : 'primary', size : 'xl', type : 'h2', weight : 'bold' },
						content: 'Цвет как ключ'
					},
					{
						block : 'text',
						mods : { view : 'primary', size : 'm', type : 'p' },
						content: 'В&nbsp;базовом наборе, мы&nbsp;используем черный&nbsp;/ желтый цвет. Желтый цвет используется для дополнительной фокусировки внутри иконки (Например в&nbsp;иконки &laquo;добавить документ&raquo; желтый плюс, подсказывает действие над документом).'
					},
					{
						block : 'text',
						mods : { view : 'primary', size : 'm', type : 'p' },
						content: 'У&nbsp;нас нет &laquo;основного цвета&raquo; в&nbsp;иконки. Но&nbsp;нужно стараться придерживаться процентного сочетания 70/30&nbsp;в цветах, ошибочно будет делать иконку чисто черную&nbsp;/ желтую или 50/50 по&nbsp;цветам.'
					},
					{
						block : 'text',
						mods : { view : 'primary', size : 'm', type : 'p' },
						content: 'Часто в&nbsp;малых размерах или списках важно отказаться от&nbsp;ярких цветов, в&nbsp;этих случаях можно использвать простые и&nbsp;нейтральные по&nbsp;цвету серые иконки.'
					},
					{
						block : 'text',
						mods : { view : 'primary', size : 'm', type : 'p' },
						content: 'Часто в&nbsp;малых размерах или списках важно отказаться от&nbsp;ярких цветов, в&nbsp;этих случаях можно использвать простые и&nbsp;нейтральные по&nbsp;цвету серые иконки.'
					},


					// Пример по работе с цветом
					{
						block: 'image',
						width: 455,
						url: '../../../../assets/i/vector-3.png',
						attrs: {
							'style': 'border: 1px solid rgba(0, 0, 0, 0.05);'
						}
					},


					{
						block : 'text',
						mods : { view : 'primary', size : 'xl', type : 'h2', weight : 'bold' },
						content: 'Рекомендации по&nbsp;сетка и&nbsp;размерам'
					},
					{
						block : 'text',
						mods : { view : 'primary', size : 'm', type : 'p' },
						content: 'На&nbsp;данный момент в&nbsp;иконках 80&times;80 толщина 3px.'
					},
					{
						block : 'text',
						mods : { view : 'link', size : 'm', type : 'p' },
						tag: 'a',
						attrs: {
							href: '../../../../bundles/desktop/docs/icons/icons.ru.html'
						},
						content: 'Ссылка на&nbsp;документ Кирилла'
					},
					{
						block : 'text',
						mods : { view : 'primary', size : 'xl', type : 'h2', weight : 'bold' },
						content: 'Эпилог'
					},
					{
						block : 'text',
						mods : { view : 'primary', size : 'm', type : 'p' },
						content: 'База иконок должна помочь не&nbsp;придумывать каждый раз новые образы, а&nbsp;давать возможность быстро собирать из&nbsp;простых форм все новые объекты и&nbsp;не&nbsp;тратить на&nbsp;это время, чтобы иконки оставались консистентными у&nbsp;разных дизайнеров соблюдайте базовые правила про которые я&nbsp;рассказал выше:'
					},
					{
						block: 'text-list',
						mix: { block: 'decorator', mods: { 'space-b': 'l' } },
						mods: { type: 'bullet' },
						content: [
							{
								elem: 'item',
								content: [
									{
										block : 'text',
										mods : { view : 'primary', size : 'm', type : 'p' },
										content: 'простые формы с&nbsp;возможностью их&nbsp;комбинировать и&nbsp;масштабировать;'
									}
								]
							},
							{
								elem: 'item',
								content: [
									{
										block : 'text',
										mods : { view : 'primary', size : 'm', type : 'p' },
										content: 'цвета 70/30% + серый в&nbsp;малых формах или списках;'
									}
								]
							},
							{
								elem: 'item',
								content: [
									{
										block : 'text',
										mods : { view : 'primary', size : 'm', type : 'p' },
										content: 'примитивная метафора, с&nbsp;низкой детализацией;'
									}
								]
							},
							{
								elem: 'item',
								content: [
									{
										block : 'text',
										mods : { view : 'primary', size : 'm', type : 'p' },
										content: 'пустой слой между элементами.'
									}
								]
							}
						]
					},
					{
						block : 'text',
						mods : { view : 'primary', size : 'xl', type : 'h2', weight : 'bold' },
						content: 'Что осталось'
					},
					{
						block : 'text',
						mods : { view : 'primary', size : 'm', type : 'p' },
						content: 'Сейчас нет четкого гайда по&nbsp;формам и&nbsp;закруглениям (хочется эксперементов от&nbsp;команды)'
					},
					{
						block : 'text',
						mods : { view : 'primary', size : 'm', type : 'p' },
						content: 'Не&nbsp;собраны иконки под все виды размеров'
					}]
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
