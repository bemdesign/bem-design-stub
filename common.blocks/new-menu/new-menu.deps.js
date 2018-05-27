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
				block: 'pt-icon-plus',
				mods: { 'vertical-align': 'center' }
			},
			{
				block: 'pt-icon-plus',
				elem: 'icon',
				mods: { 'indent-l': 'xs' }
			},
			{
				block: 'icon', 
				mods: { name: 'arrow-down', view: 'ghost', size: 's' }
			},
			
			{
				block: 'social-icon',
				mods: { size: 'm', view: 'primary', name: ['github','telegram', 'twitter', 'codepen', 'dribbble' ]}
			}
		]
	}
])
