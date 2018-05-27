block('footer')(
	content()(function() {
		return 	{
			elem: 'container',
			mix: { block: 'tpl-layout', elem: 'container', elemMods: { size: 'm', align: 'center' }},
			content: [
				{
					block: 'text',
					mods: { size: 'l', view: 'secondary' },
					content: '© 2018 whitepaper'
				},
				{
					elem: 'social',
					content: [
						{
							block: 'social-icon',
							mods: { name: 'github', size: 'l', view: 'primary' },
							mix: { block: 'decorator', mods: { 'indent-l': 'xs' }},
							tag: 'a',
							attrs: { href: 'https://github.com/whitepapertools' }
						},
						{
							block: 'social-icon',
							mods: { name: 'telegram', size: 'l', view: 'primary' },
							mix: { block: 'decorator', mods: { 'indent-l': 'xs' }},
							tag: 'a',
							attrs: { href: 'https://t.me/whitepapertools' }
						},
						{
							block: 'social-icon',
							mods: { name: 'twitter', size: 'l', view: 'primary' },
							mix: { block: 'decorator', mods: { 'indent-l': 'xs' }},
							tag: 'a',
							attrs: { href: 'https://twitter.com/whitepapertools' }
						},
						{
							block: 'social-icon',
							mods: { name: 'codepen', size: 'l', view: 'primary' },
							mix: { block: 'decorator', mods: { 'indent-l': 'xs' }},
							tag: 'a',
							attrs: { href: 'https://codepen.io/whitepapertools' }
						},
						{
							block: 'social-icon',
							mods: { name: 'dribbble', size: 'l', view: 'primary' },
							mix: { block: 'decorator', mods: { 'indent-l': 'xs' }},
							tag: 'a',
							attrs: { href: 'https://dribbble.com/whitepapertools' }
						}
					]
				}
			]
		}
	})
);