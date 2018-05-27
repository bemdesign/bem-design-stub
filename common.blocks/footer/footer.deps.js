([
	{
		shouldDeps: [
			{
				block: 'text',
				mods: { size: ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'], view: ['primary', 'secondary', 'ghost', 'inverse'], transform: 'uppercase', spacing: ['s', 'm'], align: ['s', 'right'], weight: [ 'semibold', 'bold' ]}
			},
			{
				block: 'tpl-layout',
				elem: 'container',
				mods: { size: 'm', align: 'center' }
			},
			{
				block: 'social-icon',
				mods: { size: 'l', view: 'primary', name: ['github','telegram', 'twitter', 'codepen', 'dribbble' ]}
			},
			{
				block: 'decorator',
				mods : {
					'indent-l': [ 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxl', 'xxxxxxl' ],
				}
			}
		]
	}
])
