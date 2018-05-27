block('demo').elem('plug')(
	content()(function(n, ctx) {
		return [
		{
			elem: 'plug-card',
			mix: { block: 'pt-card'},
			content: [
			{
				elem: 'plug-content',
				mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xl' }},
				content: [
				{
					elem: 'plug-illustration',
					mix: [
						{ block: 'pt-card', elem: 'image' },
						{ block: 'decorator', mods: {'indent-b': 'xxl'}}
					],
					content: {
						block: 'image',
						url: '/assets/i/bear.svg'
					}
				},
				{
					elem: 'plug-description',
					mix: { block: 'text', mods: { size: 'xxl', weight: 'bold', align: 'center' }},
					content: 'Декларативная дизайн-система'
				}]
			},
			{
				elem: 'plug-action',
				mix: { block: 'pt-card', elem: 'footer', elemMods: {'space-a': 'xl', 'align': 'between' }},
				content: [
				{
					block: 'button',
					mods: { theme: 'islands', size: 'xl', view: 'action' },
					url: 'https://github.com/bemdesign',
					mix: { block: 'demo', elem: 'plug-button' },
					text: [
						{ block: 'text', mods: { style: 'italic', display: 'inline'}, content: 'Visit '},
						'Github'
					]
				},
				{
					elem: 'plug-soclink',
					elemMods: { icon: 'telegram'},
					tag: 'a',
					attrs: { 'href': 'https://t.me/whitepapertools'}
				},
				{
					elem: 'plug-soclink',
					elemMods: { icon: 'twitter'},
					tag: 'a',
					attrs: { 'href': 'https://twitter.com/whitepapertools'}
				}]
			}]
		}]
	})
);