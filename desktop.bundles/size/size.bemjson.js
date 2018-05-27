module.exports = {
	block: 'page',
	title: 'Размеры',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'size.min.css' },
		{ elem: 'css', url: '/assets/bem-grid/bem-grid-l.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'size.min.js' }],
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
							content: 'Размеры'
						},
						{
							block: 'text',
							mods: { size: 'l' },
							mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
							content: [
								{
									elem: 'row',
									content: 'Переменные размеров используются в текстовых блоках и подчеркивают'
								},
								{
									elem: 'row',
									content: 'информационную иерархию.'
								}
							]
						},
						{
							elem: 'row',
							mix: { block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'two-thirds', 'row-gap': 'two-thirds' }},
							content: [
								{
									block: 'typography',
									content: [
									{
										elem: 'view',
										content: [
										{
											block: 'text',
											mods: { size: 'xxxl' },
											content: 'Typography'
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: "--size-typo-xxxl"
									}]
								},
								{
									block: 'typography',
									content: [
									{
										elem: 'view',
										content: [
										{
											block: 'text',
											mods: { size: 'xxl'},
											content: 'Typography'
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: "--size-typo-xxl"
									}]
								},
								{
									block: 'typography',
									content: [
									{
										elem: 'view',
										content: [
										{
											block: 'text',
											mods: { size: 'xl'},
											content: 'Typography'
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: "--size-typo-xl"
									}]
								},
								{
									block: 'typography',
									content: [
									{
										elem: 'view',
										content: [
										{
											block: 'text',
											mods: { size: 'l'},
											content: 'Typography'
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: "--size-typo-l"
									}]
								},
								{
									block: 'typography',
									content: [
									{
										elem: 'view',
										content: [
										{
											block: 'text',
											mods: { size: 'm'},
											content: 'Typography'
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: "--size-typo-m"
									}]
								},
								{
									block: 'typography',
									content: [
									{
										elem: 'view',
										content: [
										{
											block: 'text',
											mods: { size: 's'},
											content: 'Typography'
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: "--size-typo-s"
									}]
								},
								{
									block: 'typography',
									content: [
									{
										elem: 'view',
										content: [
										{
											block: 'text',
											mods: { size: 'xs'},
											content: 'Typography'
										}]
									},
									{
										block: 'text',
										mods: { size: 'm', weight: 'bold' },
										content: "--size-typo-xs"
									}]
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
