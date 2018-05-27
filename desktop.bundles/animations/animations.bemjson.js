module.exports = {
	block: 'page',
	title: 'BEM Animations',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'animations.min.css' },
		{ elem: 'css', url: '/assets/ibm-type/css/ibm-type.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'animations.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'whitepaper-default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' }
	},
	content: [

		/* Menu */
		{
			block: 'new-menu',
		},
		/* /Menu */
		
		/* Content */
		{
			block: 'demo',
			elem: 'content',
			elemMods: { size: 'm' },
			content: [
			{
				block: 'text',
				mods: { size: 'xxxxl', weight: 'bold', view: 'primary', font: 'sans' },
				mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxl' }},
				content: 'Animations'
			},
			{
				block: 'animation-list',
				content: [
				{
					block: 'animation-item',
					content: [
					{
						elem: 'view',
						mix: [{ block: 'js-paranja' }],
						content: [
						{
							block: 'text',
							mods: { view: 'primary', size: 'm' },
							content: 'click here'
						},
						{
							elem: 'paranja',
							mix: { block: 'animation', mods: { 'fade': 'out' } },
						}]
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'primary', weight: 'bold', font: 'sans' },
						content: "Fade In / Fade Out"
					},
					{
						block: 'text',
						mods: { size: 's', view: 'primary', font: 'sans' },
						content: "mods: { 'fade': 'in' }   /   mods: { 'fade': 'out' }"
					}]
				},
				{
					block: 'animation-item',
					content: [
					{
						elem: 'view',
						mix: [{ block: 'js-modal-top' }],
						content: [
						{
							block: 'text',
							mods: { view: 'primary', size: 'm' },
							content: 'click here'
						},
						{
							elem: 'modal',
							attrs: { style: 'display: none;' },
							mix: { block: 'animation', mods: { to: 'bottom' } },
						}]
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'primary', weight: 'bold', font: 'sans' },
						content: "From top to bottom"
					},
					{
						block: 'text',
						mods: { size: 's', view: 'primary', font: 'sans' },
						content: "mods: { 'from': 'top' }   /   mods: { 'to': 'bottom' }"
					}]
				},
				{
					block: 'animation-item',
					content: [
					{
						elem: 'view',
						mix: [{ block: 'js-modal-bottom' }],
						content: [
						{
							block: 'text',
							mods: { view: 'primary', size: 'm' },
							content: 'click here'
						},
						{
							elem: 'modal',
							attrs: { style: 'display: none;' },
							mix: { block: 'animation', mods: { to: 'top' } },
						}]
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'primary', weight: 'bold', font: 'sans' },
						content: "From bottom to top"
					},
					{
						block: 'text',
						mods: { size: 's', view: 'primary', font: 'sans' },
						content: "mods: { 'from': 'bottom' }   /   mods: { 'to': 'top' }"
					}]
				},
				{
					block: 'animation-item',
					content: [
					{
						elem: 'view',
						mix: [{ block: 'js-modal-right' }],
						content: [
						{
							block: 'text',
							mods: { view: 'primary', size: 'm' },
							content: 'click here'
						},
						{
							elem: 'modal',
							attrs: { style: 'display: none;' },
							mix: { block: 'animation', mods: { to: 'left' } },
						}]
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'primary', weight: 'bold', font: 'sans' },
						content: "From right to left"
					},
					{
						block: 'text',
						mods: { size: 's', view: 'primary', font: 'sans' },
						content: "mods: { 'from': 'right' }   /   mods: { 'to': 'left' }"
					}]
				},
				{
					block: 'animation-item',
					content: [
					{
						elem: 'view',
						mix: [{ block: 'js-modal-left' }],
						content: [
						{
							block: 'text',
							mods: { view: 'primary', size: 'm' },
							content: 'click here'
						},
						{
							elem: 'modal',
							attrs: { style: 'display: none;' },
							mix: { block: 'animation', mods: { to: 'right' } },
						}]
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'primary', weight: 'bold', font: 'sans' },
						content: "From left to right"
					},
					{
						block: 'text',
						mods: { size: 's', view: 'primary', font: 'sans' },
						content: "mods: { 'from': 'left' }   /   mods: { 'to': 'right' }"
					}]
				},
				// {
				// 	block: 'animation-item',
				// 	content: [
				// 	{
				// 		elem: 'view',
				// 		content: [
				// 		{
				// 			block: 'e-accordion',
				// 			content: [
				// 			{
				// 				elem: 'item',
				// 				content: [
				// 				{
				// 					elem: 'short',
				// 					mix: { block: 'decorator', mods: { 'space-a': 'm' } },
				// 					content: {
				// 						block: 'text',
				// 						mods: { size: 'm', view: 'link', font: 'sans' },
				// 						content: 'click me!'
				// 					}
				// 				},
				// 				{
				// 					elem: 'more',
				// 					mix: { block: 'decorator', mods: { 'space-a': 'm' } },
				// 					content: {
				// 						block: 'text',
				// 						mods: { size: 'm', view: 'primary', font: 'sans' },
				// 						content: 'here I am!'
				// 					}
				// 				}]
				// 			}]
				// 		}]
				// 	},
				// 	{
				// 		elem: 'name',
				// 		content: [
				// 		{
				// 			block: 'text',
				// 			mods: { size: 'm', view: 'primary', weight: 'bold', font: 'sans' },
				// 			content: "Accordion toggle"
				// 		},
				// 		{
				// 			block: 'text',
				// 			mods: { size: 's', view: 'primary', font: 'sans' },
				// 			content: "block: 'e-accordion'   /   elem: 'short'   /   elem: 'more'"
				// 		}]
				// 	}]
				// },
				{
					block: 'animation-item',
					content: [
					{
						elem: 'view',
						content: [
						{
							block: 'decorator',
							mods: { 'indent-a': 's' },
							content: {
								block: 'button',
								mix: [{ block: 'animation' }, { block: 'js-shake-horizontal' }],
								content: 'Shake me horizontal!'
							}
						},
						{
							block: 'decorator',
							mods: { 'indent-a': 's' },
							content: {
								block: 'button',
								mix: [{ block: 'animation' }, { block: 'js-shake-radial' }],
								content: 'Shake me radial!'
							}
						}]
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'primary', weight: 'bold', font: 'sans' },
						content: "Shake"
					},
					{
						block: 'text',
						mods: { size: 's', view: 'primary', font: 'sans' },
						content: "mods: { shake: 'horizontal' }   /   mods: { shake: 'radial' }"
					}]
				}]
			}]
		},
		/* /Content */

		/* Footer */
		{
			block: 'footer',
		}
		/* /Footer */

	]
	
};