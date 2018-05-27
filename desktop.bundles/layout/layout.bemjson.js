module.exports = {
	block: 'page',
	title: 'Обвязка',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'layout.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' }
	],
	scripts: [{ elem: 'js', url: 'layout.min.js' }],
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

				/* /Content */
				{
					elem: 'content',
					elemMods: { size: 'l' },
					content: [
						{
							block: 'text',
							mods: { size: 'xxxxl', weight: 'bold', font: 'sans' },
							mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
							content: 'Обвязка'
						},
						{
							block: 'text',
							mods: { size: 'l' },
							mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
							content: [
								{
									elem: 'row',
									content: 'Cодержит в себе необходимые элементы в различных модификациях для реализации'
								},
								{
									elem: 'row',
									content: 'общих обвязок каркаса/проектов.'
								}
							]
						},
						{
							block: 'layout-list',
							mix: { block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'two-thirds', 'row-gap': 'full' } },
							content: [
							{
								block: 'layout-item',
								content: [
								{
									elem: 'view',
									content: [
										{
											block: 'image',
											url: '/assets/i/layouts/50-50.svg'
										}
									]
								},
								{
									elem: 'name',
									content: [
									{
										block: 'text',
										// tag: 'a',
										// attrs: {
										// 	href: 'https://codepen.io/yegorov/full/JWNLLO',
										// 	target: '_blank'
										// },
										mods: { size: 'm', view: 'primary', weight: 'bold' },
										content: "mods: { structure: '50-50' }"
									}]
								}]
							},
							{
								block: 'layout-item',
								content: [
								{
									elem: 'view',
									content: [
										{
											block: 'image',
											url: '/assets/i/layouts/70-30.svg'
										}
									]
								},
								{
									elem: 'name',
									content: [
									{
										block: 'text',
										// tag: 'a',
										// attrs: {
										// 	href: 'https://codepen.io/yegorov/full/zZwjrR',
										// 	target: '_blank'
										// },
										mods: { size: 'm', view: 'primary', weight: 'bold' },
										content: "mods: { structure: '70-30' }"
									}]
								}]
							},
							{
								block: 'layout-item',
								content: [
								{
									elem: 'view',
									content: [
										{
											block: 'image',
											url: '/assets/i/layouts/90-10.svg'
										}
									]
								},
								{
									elem: 'name',
									content: [
									{
										block: 'text',
										// tag: 'a',
										// attrs: {
										// 	href: 'https://codepen.io/yegorov/full/MpmGJE',
										// 	target: '_blank'
										// },
										mods: { size: 'm', view: 'primary', weight: 'bold' },
										content: "mods: { structure: '90-10' }"
									}]
								}]
							},
							{
								block: 'layout-item',
								content: [
								{
									elem: 'view',
									content: [
										{
											block: 'image',
											url: '/assets/i/layouts/100.svg'
										}
									]
								},
								{
									elem: 'name',
									content: [
									{
										block: 'text',
										// tag: 'a',
										// attrs: {
										// 	href: 'https://codepen.io/yegorov/full/oZWdGV',
										// 	target: '_blank'
										// },
										mods: { size: 'm', view: 'primary', weight: 'bold' },
										content: "100 (без модификатора)"
									}]
								}]
							},
							{
								block: 'layout-item',
								content: [
								{
									elem: 'view',
									content: [
										{
											block: 'image',
											url: '/assets/i/layouts/fold-25-50-25.svg'
										}
									]
								},
								{
									elem: 'name',
									content: [
									{
										block: 'text',
										// tag: 'a',
										// attrs: {
										// 	href: 'https://codepen.io/yegorov/full/oZWdGV',
										// 	target: '_blank'
										// },
										mods: { size: 'm', view: 'primary', weight: 'bold' },
										content: "mods: { structure: 'fold-25-50-25' }"
									}]
								}]
							},
							{
								block: 'layout-item',
								content: [
								{
									elem: 'view',
									content: [
										{
											block: 'image',
											url: '/assets/i/layouts/unfold-25-50-25.svg'
										}
									]
								},
								{
									elem: 'name',
									content: [
									{
										block: 'text',
										// tag: 'a',
										// attrs: {
										// 	href: 'https://codepen.io/Rochet/full/zPwYao/',
										// 	target: '_blank'
										// },
										mods: { size: 'm', view: 'primary', weight: 'bold' },
										content: "mods: { structure: 'unfold-25-50-25' }"
									}]
								}]
							},
							{
								block: 'layout-item',
								content: [
								{
									elem: 'view',
									content: [
										{
											block: 'image',
											url: '/assets/i/layouts/fold-100.svg'
										}
									]
								},
								{
									elem: 'name',
									content: [
									{
										block: 'text',
										// tag: 'a',
										// attrs: {
										// 	href: 'https://codepen.io/yegorov/full/mWmLYP',
										// 	target: '_blank'
										// },
										mods: { size: 'm', view: 'primary', weight: 'bold' },
										content: "mods: { structure: 'fold-100' }"
									}]
								}]
							},
							{
								block: 'layout-item',
								content: [
								{
									elem: 'view',
									content: [
										{
											block: 'image',
											url: '/assets/i/layouts/unfold-100.svg'
										}
									]
								},
								{
									elem: 'name',
									content: [
									{
										block: 'text',
										// tag: 'a',
										// attrs: {
										// 	href: 'https://codepen.io/yegorov/full/qrmKdW',
										// 	target: '_blank'
										// },
										mods: { size: 'm', view: 'primary', weight: 'bold' },
										content: "mods: { structure: 'unfold-100' }"
									}]
								}]
							}]
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
