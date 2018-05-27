module.exports = {
	block: 'page',
	title: 'BILL',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'bill.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'bill.min.js' }],
	mods: { type: 'full-screen', theme: 'islands' },
	mix: [
		{
			block: 'theme',
			mods: { color: 'whitepaper-default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'ibm' }
		},
		{
			block: 'component',
			mods: { whitepaper: 'default' }
		}
	],

	// mix: { block: 'scrollify' },
	// cls: 'scroll-section',

	content: [

		/* MEDIA */
		{
			block: 'promo-cards',
			mods: { view: 'inverse', slide: 'first' },
			mix: [
				{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
				{ block: 'component', mods: { whitepaper: 'inverse' }},
				{ block: 'promo-cards', elem: 'media-section' }
			],
			content: [
			{
				elem: 'theme-name',
				elemMods: { slide: 'first' },
				mix: { block: 'text', mods: { font: 'mono', transform: 'uppercase' } },
				content: 'video'
			},
			{
				elem: 'theme-name',
				elemMods: { slide: 'second' },
				mix: { block: 'text', mods: { font: 'mono', transform: 'uppercase' } },
				content: 'copy'
			},
			{
				elem: 'theme-name',
				elemMods: { slide: 'third' },
				mix: { block: 'text', mods: { font: 'mono', transform: 'uppercase' } },
				content: 'music'
			},
			{
				elem: 'content',
				content: [
				{
					elem: 'card',
					mix: [
						{ elem: 'media', elemMods: { type: 'video' }}, 
						{ block: 'decorator', mods: { 'indent-b': 'xxxxl' }}
					],
					content: [
					{
						block: 'media',
						mix: [
							{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
							{ block: 'component', mods: { whitepaper: 'inverse' }},
							{ block: 'pt-card', mods: { view: 'default' }}, 
							{ block: 'promo-cards', elem: 'media-video-back' }, 
							{ block: 'promo-cards', elem: 'hover' }
						],
						content: [
						{
							elem: 'video',
							mix: [{ block: 'pt-card', elem: 'image', elemMods: { shadow: 'bottom-inverse' } }, { block: 'promo-cards', elem: 'media-video' }],
							content: [
							{
								block: 'image',
								url: '/assets/i/fallon.png',
							},
							{
								elem: 'play',
								mix: { block: 'pt-card', elem: 'play' }
							},
							{
								block: 'text',
								mix: [{ block: 'pt-card', elem: 'footer', elemMods: { 'space-h': 'l' } }, { block: 'promo-cards', elem: 'media-video-title' }],
								mods: { view: 'primary', size: 'xxxl', weight: 'bold' },
								content: [
								{
									elem: 'wrap',
									content: [
									{
										elem: 'row',
										content: 'Mad Lib'
									},
									{
										elem: 'row',
										content: 'Theater with'
									},
									{
										elem: 'row',
										content: 'John Cena'
									}]
								}]
							}]
						},
						{
							elem: 'footer',
							mix: [{ block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l', distribute: 'between' } }, { block: 'promo-cards', elem: 'media-video-footer' }],
							content: [
							{
								block: 'pt-icon-plus',
								mods: { 'vertical-align': 'center' },
								content: [
								{
									elem: 'icon',
									elemMods: { 'indent-r': 'xs' },
									content: [
									{
										block: 'brand-logo',
										mods: { 'name': 'ustwo', size: 's' }
									}]
								},
								{
									elem: 'block',
									content: [
									{
										block: 'text',
										mods: { view: 'primary', size: 's' },
										content: 'The Tonight Show…'
									}]
								}]
							},
							{
								block: 'text',
								mods: { view: 'primary', size: 's', font: 'mono' },
								content: [
								{
									block: 'text',
									mods: { weight: 'bold', display: 'inline' },
									content: '512K '
								},
								'views'
								]
							}]
						}]
					},
					{
						block: 'media',
						mix: [
							{ block: 'theme', mods: { color: 'whitepaper-default' }},
							{ block: 'component', mods: { whitepaper: 'default' }},
							{ block: 'pt-card', mods: { view: 'default' } }, 
							{ block: 'promo-cards', elem: 'media-text-back' }, 
							{ block: 'promo-cards', elem: 'hover' }
						],
						content: [
						{
							elem: 'article-author',
							mix: [
								{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
								{ block: 'component', mods: { whitepaper: 'inverse' }},
								{ block: 'pt-card', elem: 'header', elemMods: { 'space-a': 'l' }}
							],
							content: [
							{
								block: 'pt-icon-plus',
								mods: { 'vertical-align': 'center' },
								mix: { block: 'promo-cards', elem: 'media-author-top' },
								content: [
								{
									elem: 'icon',
									elemMods: { 'indent-r': 'xs' },
									content: [
									{
										block: 'avatar',
										content: [
										{
											elem: 'photo',
											elemMods: { size: 'xs', view: 'example' },
										}]
									}]
								},
								{
									elem: 'block',
									content: [
									{
										block: 'text',
										mods: { view: 'primary', size: 'm' },
										content: 'James Bridle'
									}]
								}]
							}]
						},
						{
							elem: 'screenshot',
							mix: { block: 'pt-card', elem: 'content' },
							content: [
							{
								block: 'image',
								mix: [{ block: 'pt-card', elem: 'image', elemMods: { shadow: 'top-inverse' } } ],
								url: '/assets/i/heroes.png',
							}]
						},
						{
							elem: 'article-title',
							mix: [{ block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } }, { block: 'promo-cards', elem: 'media-article' }],
							content: [
							{
								block: 'text',
								mods: { view: 'primary', size: 'xxxl', weight: 'bold', font: 'serif' },
								mix: { block: 'decorator', mods: { 'indent-b': 's' } },
								content: 'Something is wrong on the internet'
							},
							{
								block: 'text',
								mods: { view: 'primary', size: 'm', font: 'mono'  },
								content: 'I’m James Bridle. I’m a writer and artist concerned with…'
							}]
						},
						{
							elem: 'footer',
							mix: [{ block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l', distribute: 'between' } }, { block: 'promo-cards', elem: 'media-text-footer' }],
							content: [
							{
								block: 'text',
								mods: { view: 'secondary', size: 's', font: 'mono'  },
								content: 'Nov 6 / 21 min read'
							},
							{
								block: 'text',
								mods: { view: 'primary', size: 's', font: 'mono' },
								content: [
								{
									block: 'text',
									mods: { weight: 'bold', display: 'inline' },
									content: '512K '
								},
								'views'
								]
							}]
						}]
					},
					{
						block: 'media',
						mix: [
							{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
							{ block: 'component', mods: { whitepaper: 'inverse' }},
							{ block: 'pt-card', mods: { view: 'default' } }, { block: 'promo-cards', elem: 'media-music-back' }, 
							{ block: 'promo-cards', elem: 'hover' }
						],
						content: [
						{
							elem: 'cover',
							mix: [{ block: 'pt-card', elem: 'image', elemMods: { shadow: 'bottom-inverse' } }, { block: 'promo-cards', elem: 'media-music-cover' }],
							content: [
							{
								block: 'image',
								url: '/assets/i/london.png',
							},
							{
								elem: 'name',
								mix: [{ block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l' } }],
								content: [
									{
										elem: 'wrap',
										content: [
										{
											block: 'text',
											mods: { view: 'primary', size: 'xxxl', align: 'center', weight: 'bold' },
											mix: { block: 'decorator', mods: { 'indent-b': 's' } },
											content: 'Pitchfork\'s Best New Music',
										},
										{
											block: 'text',
											mods: { view: 'primary', size: 'm', align: 'center', font: 'mono', style: 'italic' },
											content: 'Pitchfork',
										}]
									}
								]
							}]
						},
						{
							block: 'playlist',
							mix: [{ block: 'pt-list', elem: 'item', elemMods: { 'space-h': 'l' } }, { block: 'promo-cards', elem: 'media-playlist' }],
							content: [
							{
								elem: 'item',
								mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'm' } },
								content: [
								{
									elem: 'track',
									content: [
									{
										block: 'text',
										mods: { view: 'primary', size: 's', weight: 'bold' },
										mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
										content: 'London',
									},
									{
										elem: 'description',
										content: [
										{
											block: 'text',
											mods: { view: 'primary', size: 'xs', weight: 'light', font: 'mono' },
											content: 'Benjamin Clementine • At Least',
										}]
									}]
								},
								{
									block: 'text',
									mods: { view: 'primary', size: 's', weight: 'bold' },
									content: '7:25'
								}]
							},
							{
								elem: 'item',
								mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'm' } },
								content: [
								{
									elem: 'track',
									content: [
									{
										block: 'text',
										mods: { view: 'primary', size: 's', weight: 'bold' },
										mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
										content: 'London',
									},
									{
										elem: 'description',
										content: [
										{
											block: 'text',
											mods: { view: 'primary', size: 'xs', weight: 'light', font: 'mono' },
											content: 'Benjamin Clementine • At Least',
										}]
									}]
								},
								{
									block: 'text',
									mods: { view: 'primary', size: 's', weight: 'bold' },
									content: '7:25'
								}]
							},
							{
								elem: 'item',
								mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'm' } },
								content: [
								{
									elem: 'track',
									content: [
									{
										block: 'text',
										mods: { view: 'primary', size: 's', weight: 'bold' },
										mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
										content: 'London',
									},
									{
										elem: 'description',
										content: [
										{
											block: 'text',
											mods: { view: 'primary', size: 'xs', weight: 'light', font: 'mono' },
											content: 'Benjamin Clementine • At Least',
										}]
									}]
								},
								{
									block: 'text',
									mods: { view: 'primary', size: 's', weight: 'bold' },
									content: '7:25'
								}]
							},
							{
								elem: 'item',
								mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'm' } },
								content: [
								{
									elem: 'track',
									content: [
									{
										block: 'text',
										mods: { view: 'primary', size: 's', weight: 'bold' },
										mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
										content: 'London',
									},
									{
										elem: 'description',
										content: [
										{
											block: 'text',
											mods: { view: 'primary', size: 'xs', weight: 'light', font: 'mono' },
											content: 'Benjamin Clementine • At Least',
										}]
									}]
								},
								{
									block: 'text',
									mods: { view: 'primary', size: 's', weight: 'bold' },
									content: '7:25'
								}]
							}]
						}]
					}]
				},
				{
					elem: 'description',
					elemMods: { view: 'inverse', slide: 'first' },
					content: [
					{
						elem: 'header',
						mix: [{ block: 'decorator', mods: { 'indent-b': 'xl' } }, { block: 'text', mods: { font: 'sans', view: 'primary', view: 'primary', weight: 'bold' } }],
						content: 'Video'
					},
					{
						block: 'text',
						mods: { size: 'xl', view: 'primary', font: 'mono' },
						content: 'For online services providing videos and movies, for media services, and other YouTube-like sites'
					}]
				},
				{
					elem: 'description',
					elemMods: { view: 'inverse', slide: 'second' },
					content: [
					{
						elem: 'header',
						mix: [{ block: 'decorator', mods: { 'indent-b': 'xl' } }, { block: 'text', mods: { font: 'sans', view: 'primary', weight: 'bold' } }],
						content: 'Copy'
					},
					{
						block: 'text',
						mods: { size: 'xl', view: 'primary', font: 'mono' },
						content: 'For media services, blogs, social networks, or any platforms with text contents'
					}]
				},
				{
					elem: 'description',
					elemMods: { view: 'inverse', slide: 'third' },
					content: [
					{
						elem: 'header',
						mix: [{ block: 'decorator', mods: { 'indent-b': 'xl' } }, { block: 'text', mods: { font: 'sans', view: 'primary', weight: 'bold' } }],
						content: 'Music'
					},
					{
						block: 'text',
						mods: { size: 'xl', font: 'mono', view: 'primary' },
						content: 'For audio libraries, musical services, online radio stations, and social networks.'
					}]
				},
				{
					elem: 'list',
					content: [
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							mods: { size: 'xl', view: 'alert', transform: 'uppercase', align: 'center', font: 'mono' },
							mix: { block: 'promo-cards', elem: 'media-tab-1' },
							content: 'Video'
						}
					},
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							mods: { size: 'xl', transform: 'uppercase', align: 'center', font: 'mono' },
							mix: { block: 'promo-cards', elem: 'media-tab-2' },
							content: 'Copy'
						}
					},
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							mods: { size: 'xl', transform: 'uppercase', align: 'center', font: 'mono' },
							mix: { block: 'promo-cards', elem: 'media-tab-3' },
							content: 'Music'
						}
					}]
				}]
			}]
		},
		/* /MEDIA */

		/* OFFER */
		{
			block: 'promo-cards',
			mods: { view: 'ghost', slide: 'first' },
			mix: [
				{ block: 'theme', mods: { color: 'whitepaper-default' }},
				{ block: 'component', mods: { whitepaper: 'default' }},
				{ block: 'promo-cards', elem: 'offer-section' }
			],
			content: [
			{
				elem: 'theme-name',
				elemMods: { slide: 'first' },
				mix: { block: 'text', mods: { font: 'mono', transform: 'uppercase' } },
				content: 'goods'
			},
			{
				elem: 'theme-name',
				elemMods: { slide: 'second' },
				mix: { block: 'text', mods: { font: 'mono', transform: 'uppercase' } },
				content: 'brand'
			},
			{
				elem: 'theme-name',
				elemMods: { slide: 'third' },
				mix: { block: 'text', mods: { font: 'mono', transform: 'uppercase' } },
				content: 'service'
			},
			{
				elem: 'content',
				content: [
				{
					elem: 'card',
					mix: [
						{ elem: 'offer', elemMods: { type: 'goods' } },
						{ block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
					],
					content: [
					{
						block: 'offer',
						mix: [
							{ block: 'pt-card', mods: { view: 'default' } },
							{ block: 'promo-cards', elem: 'hover' },
							{ block: 'promo-cards', elem: 'offer-goods' },
						],
						content: [
						{
							elem: 'goods-header',
							content: [
							{
								elem: 'goods-background',
								mix: { block: 'promo-cards', elem: 'offer-goods-background'}
							},
							{
								elem: 'goods-price',
								mix: [
									{ block: 'promo-cards', elem: 'offer-goods-price'},
									{ block: 'text', mods: {font: 'serif', style: 'italic', weight: 'bold'} }
								],
								content: '$299'
							}]
						},
						{
							elem: 'goods-item',
							mix: [
								{ block: 'pt-card', elem: 'header' },
								{ block: 'promo-cards', elem: 'offer-goods-item'}
							],
							content: [
							{
								elem: 'goods-image-wrapper',
								mix: { block: 'pt-card', elem: 'content' },
								content: [
								{
									block: 'image',
									mix: { block: 'pt-card', elem: 'image' },
									url: '/assets/i/offer-goods-image.png'
								}]
							}]
						},
						{
							elem: 'goods-info',
							mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-h': 'xxl', 'space-h': 'l', 'space-t': 'xxs' } },
							content: [
							{
								block: 'text',
								mix: [
									{ block: 'decorator', mods: { 'indent-b': 'xs' } },
									{ block: 'promo-cards', elem: 'offer-goods-title'},
								],
								mods: { view: 'primary', font: 'mono', weight: 'bold', size: 'xl', align: 'center', transform: 'uppercase', spacing: 's' },
								content: 'Nike Gyakusou Gaiter Boot'
							},
							{
								block: 'text',
								mods: { view: 'primary', size: 's', align: 'center' },
								mix: { block: 'promo-cards', elem: 'offer-goods-desc'},
								content: 'You have the goal. We have a gift'
							}]
						},
						{
							elem: 'action',
							mix: [
								{ block: 'pt-card', elem: 'footer', elemMods: { 'space-v': 'xl', align: 'center' } },
								{ block: 'promo-cards', elem: 'offer-goods-action'},
							],
							content: [
							{
								elem: 'wrap',
								content: [
								{
									block: 'text',
									mods: { view: 'secondary', size: 'm', weight: 'bold', align: 'center', },
									content: 'Shop Now'
								}]
							}]
						}]
					},
					{
						block: 'offer',
						mix: [
							{ block: 'pt-card', mods: { view: 'default' } },
							{ block: 'promo-cards', elem: 'hover' },
							{ block: 'promo-cards', elem: 'offer-brand' },
						],
						content: [
						{
							elem: 'brand-content',
							mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xl' } },
							content: [
							{
								elem: 'brand-image-wrapper',
								mix: [
									{ block: 'promo-cards', elem: 'offer-brand-image' },
									{ block: 'pt-card', elem: 'content' }
								],
								content: [
								{
									block: 'image',
									mix: { block: 'pt-card', elem: 'image' },
									url: '/assets/i/offer-brand-image.png'
								}]
							},
							{
								block: 'text',
								mods: { view: 'primary', size: 'xxl', align: 'center', transform: 'uppercase', weight: 'bold', spacing: 's' },
								mix: [
									{ block: 'promo-cards', elem: 'offer-brand-title' },
									{ block: 'decorator', mods: { 'indent-t': 's', 'indent-b': 'xs' } }
								],
								content: 'Ape shall never kill ape'
							},
							{
								elem: 'brand-logo-wrapper',
								mix: { block: 'text', mods: { align: 'center' } },
								content: [
								{
									block: 'brand-logo',
									mods: { name: 'bape', size: 's' },
									mix: { block: 'promo-cards', elem: 'offer-brand-logo' },
								}]
							}]
						},
						{
							elem: 'brand-action',
							mix: [
								{ block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 's' } },
								{ block: 'promo-cards', elem: 'offer-brand-action' },
							],
							content: [
							{
								block: 'text',
								attrs: {
									'style': 'margin: auto'
								},
								mods: { view: 'primary', size: 'm', align: 'center', weight: 'bold' },
								content: 'Learn More'
							}]
						}]
					},
					{
						block: 'offer',
						mix: [
							{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
							{ block: 'component', mods: { whitepaper: 'inverse' }},
							{ block: 'pt-card', mods: { view: 'default' } },
							{ block: 'promo-cards', elem: 'hover' },
							{ block: 'promo-cards', elem: 'offer-service' },
						],
						content: [
						{
							elem: 'service-image-wrapper',
							mix: [
								{ block: 'pt-card', elem: 'content' },
								{ block: 'promo-cards', elem: 'offer-service-background'},
							],
							content: [
							{
								block: 'image',
								mix: [
									{ block: 'promo-cards', elem: 'offer-service-photo'},
									{ block: 'pt-card', elem: 'image', elemMods: { size: 'cover' } },
								],
								url: '/assets/i/offer-service-image.png'
							}]
						},
						{
							elem: 'title',
							mix: [
								{ block: 'pt-card', elem: 'header', elemMods: { 'space-v': 'xxl', align: 'center' } },
								{ block: 'promo-cards', elem: 'offer-service-title'},
							],
							content: [
							{
								block: 'text',
								mods: { view: 'primary', size: 'xl', font: 'serif', weight: 'bold', transform: 'uppercase', align: 'center', display: 'block' },
								content: 'Brabus'
							}]
						},
						{
							elem: 'service-info',
							mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l' } },
							content: [
							{
								elem: 'wrap',
								content: [
								{
									block: 'text',
									mix: [
										{ block: 'decorator', mods: { 'indent-b': 'xl'} },
										{ block: 'promo-cards', elem: 'offer-service-desc'},
									],
									mods: { view: 'primary', size: 'm', weight: 'semibold' },
									content: 'Luxury and comfort never comprised. The BRABUS GLE 700 Coupe will lead to an unforgettable journey'
								},
								{
									elem: 'price',
									mix: { block: 'promo-cards', elem: 'offer-service-price'},
									content: [
									{
										block: 'text',
										mods: { view: 'primary', size: 's', weight: 'semibold' },
										content: 'from'
									},
									{
										block: 'text',
										mods: { view: 'primary', size: 'xxxl', weight: 'semibold' },
										content: '$1200'
									}]
								}]
							}]
						}]
					}]
				},
				{
					elem: 'description',
					elemMods: { slide: 'first' },
					content: [
					{
						elem: 'header',
						mix: [{ block: 'decorator', mods: { 'indent-b': 'xl' } }, { block: 'text', mods: { font: 'sans', view: 'primary', weight: 'bold' } }],
						content: 'Goods'
					},
					{
						block: 'text',
						mods: { size: 'xl', view: 'primary', font: 'mono' },
						content: 'For hypermarkets and stores working online. Additionally serves as a banner ad.'
					}]
				},
				{
					elem: 'description',
					elemMods: { slide: 'second' },
					content: [
					{
						elem: 'header',
						mix: [{ block: 'decorator', mods: { 'indent-b': 'xl' } }, { block: 'text', mods: { font: 'sans', view: 'primary', weight: 'bold' } }],
						content: 'Offers'
					},
					{
						block: 'text',
						mods: { size: 'xl', view: 'primary', font: 'mono' },
						content: 'For clothing collections, lines of cosmetics, lookbooks, and other collections of products.'
					}]
				},
				{
					elem: 'description',
					elemMods: { slide: 'third' },
					content: [
					{
						elem: 'header',
						mix: [{ block: 'decorator', mods: { 'indent-b': 'xl' } }, { block: 'text', mods: { font: 'sans', view: 'primary', weight: 'bold' } }],
						content: 'Service'
					},
					{
						block: 'text',
						mods: { size: 'xl', view: 'primary', font: 'mono' },
						content: 'For subscription services, pricing plans, and services ordered online. This will do for all from a hairdressing saloon to a cloud hosting.'
					}]
				},
				{
					elem: 'list',
					content: [
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							mix: { block: 'promo-cards', elem: 'offer-tab-1' },
							mods: { size: 'xl', view: 'alert', transform: 'uppercase', align: 'center' },
							content: 'Goods'
						}
					},
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							mix: { block: 'promo-cards', elem: 'offer-tab-2' },
							mods: { size: 'xl', transform: 'uppercase', align: 'center' },
							content: 'Brand'
						}
					},
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							mix: { block: 'promo-cards', elem: 'offer-tab-3' },
							mods: { size: 'xl', transform: 'uppercase', align: 'center' },
							content: 'Service'
						}
					}]
				}]
			}]
		},
		/* /OFFER */

		/* APPS */
		{
			block: 'promo-cards',
			mods: { view: 'inverse', slide: 'first' },
			mix: [
				{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
				{ block: 'component', mods: { whitepaper: 'inverse' }},
				{ block: 'promo-cards', elem: 'apps-section' }
			],
			content: [
			{
				elem: 'theme-name',
				elemMods: { slide: 'first' },
				mix: { block: 'text', mods: { font: 'mono', transform: 'uppercase' } },
				content: 'collection'
			},
			{
				elem: 'theme-name',
				elemMods: { slide: 'second' },
				mix: { block: 'text', mods: { font: 'mono', transform: 'uppercase' } },
				content: 'application'
			},
			{
				elem: 'theme-name',
				elemMods: { slide: 'third' },
				mix: { block: 'text', mods: { font: 'mono', transform: 'uppercase' } },
				content: 'developer'
			},
			{
				elem: 'content',
				content: [
				{
					elem: 'card',
					mix: [
						{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
						{ block: 'component', mods: { whitepaper: 'inverse' }},
						{ elem: 'apps', elemMods: { type: 'developer' }}, 
						{ block: 'decorator', mods: { 'indent-b': 'xxxxl' } }
					],
					content: [
					{
						block: 'app',
						mods: { view: 'monument-hypnotic' },
						mix: [{ block: 'pt-card', mods: { view: 'default' } }, { block: 'promo-cards', elem: 'apps-developer-back' }, { block: 'promo-cards', elem: 'hover' }],
						content: [
						{
							elem: 'info',
							mix: { block: 'pt-card', elem: 'header', elemMods: { 'space-a': 'l' } },
							content: [
							{
								block: 'text',
								mods: { size: 'm', view: 'primary', transform: 'uppercase', align: 'center', spacing: 'm' },
								mix: { block: 'promo-cards', elem: 'apps-developer-name' },
								content: 'Bundle'
							},
							{
								block: 'image',
								mix: [{ block: 'decorator', mods: { 'indent-v': 'xl' } }, { block: 'promo-cards', elem: 'apps-developer-app-cover' }],
								url: '/assets/i/group.png',
							},
							{
								elem: 'price',
								mix: { block: 'promo-cards', elem: 'apps-developer-btn' },
								content: [
								{
									block: 'text',
									mods: { size: 'l', view: 'primary', font: 'mono', with: 'semibold' },
									content: '$299'
								}]
							}]
						},
						{
							elem: 'developer-list',
							mix: [  { block: 'promo-cards', elem: 'apps-developer-list' }, { block: 'pt-list' }, { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xl' } }],
							content: [
							{
								elem: 'wrap',
								attrs: {
									'style': 'width: 100%'
								},
								content: [
								{
									elem: 'item',
									mix: [{ block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'l', distribute: 'between' }}, { block: 'pt-card', elem: 'item' }],
									content: [
									{
										block: 'pt-icon-plus',
										mods: { 'vertical-align': 'center' },
										content: [
										{
											elem: 'icon',
											elemMods: { 'indent-r': 's' },
											content: [
											{
												block: 'brand-logo',
												mods: { 'name': 'monument-valley', size: 's', form: 'mask' }
											}]
										},
										{
											elem: 'block',
											content: [
											{
												block: 'text',
												mods: { size: 's', view: 'primary' },
												content: 'Monument Vallet'
											},
											{
												block: 'text',
												mods: { size: 's', view: 'ghost' },
												content: 'by ustwo games'
											}]
										}]
									},
									{
										block: 'badge',
										mods: { view: 'default' },
										content: '$99'
									}]
								},
								{
									elem: 'item',
									mix: [{ block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'l', distribute: 'between' }}, { block: 'pt-card', elem: 'item' }],
									content: [
									{
										block: 'pt-icon-plus',
										mods: { 'vertical-align': 'center' },
										content: [
										{
											elem: 'icon',
											elemMods: { 'indent-r': 's' },
											content: [
											{
												block: 'brand-logo',
												mods: { 'name': 'monument-valley-2', size: 's', form: 'mask'}
											}]
										},
										{
											elem: 'block',
											content: [
											{
												block: 'text',
												mods: { size: 's', view: 'primary' },
												content: 'Monument Valley 2'
											},
											{
												block: 'text',
												mods: { size: 's', view: 'ghost' },
												content: 'by ustwo games'
											}]
										}]
									},
									{
										block: 'badge',
										mods: { view: 'default' },
										content: '$99'
									}]
								}]
							}]
						}]
					},
					{
						block: 'app',
						mods: { view: 'monument' },
						mix: [
							{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
							{ block: 'component', mods: { whitepaper: 'inverse' }},
							{ block: 'pt-card', mods: { view: 'inverse' } }, 
							{ block: 'promo-cards', elem: 'apps-recommendation-back' }, 
							{ block: 'promo-cards', elem: 'hover' }
						],
						content: [
						{
							elem: 'cover',
							mix: [{ block: 'pt-card', elem: 'image', elemMods: { shadow: 'bottom-inverse', size: 'cover' } }, { block: 'promo-cards', elem: 'media-video' }],
							content: [
								{
									block: 'image',
									url: '/assets/i/monument.png',
								}
							]
						},
						{
							elem: 'preview',
							mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xl' } },
							content: [
							{
								block: 'image',
								mix: { block: 'promo-cards', elem: 'apps-recommendation-photo' },
								url: '/assets/i/ustwo.svg',
								attrs: {
									'style': 'margin: auto'
								}
							},
							{
								elem: 'about',
								mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xl' }},
								content: [
								{
									block: 'wrap',
									content: [
									{
										block: 'text',
										mods: { size: 'xxxl', view: 'primary', align: 'center', weight: 'bold' },
										mix: [{ block: 'decorator', mods: { 'space-b': 'l' }}, { block: 'promo-cards', elem: 'apps-recommendation-info' }],
										content: 'From our Bafta award winning hit!'
									},
									{
										block: 'text',
										mix: { block: 'promo-cards', elem: 'apps-recommendation-info' },
										mods: { size: 'm', view: 'primary', align: 'center' },
										content: 'Enjoy beautiful levels filled with illusory, meditative puzzles'
									}]
								}]
							}]
						},
						{
							elem: 'item',
							mix: [
								{ block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xl', distribute: 'between' } },  
								{ block: 'promo-cards', elem: 'apps-recommendation-footer' }, { block: 'pt-card', elem: 'item' }
							],
							content: [
							{
								block: 'pt-icon-plus',
								mods: { 'vertical-align': 'center' },
								content: [
								{
									elem: 'icon',
									elemMods: { 'indent-r': 's' },
									content: [
									{
										block: 'brand-logo',
										mods: { 'name': 'monument-valley-2', size: 's', form: 'mask' }
									}]
								},
								{
									elem: 'block',
									content: [
									{
										block: 'text',
										mods: { size: 's', view: 'primary' },
										content: 'Monument Valley'
									},
									{
										block: 'text',
										mods: { size: 's', view: 'ghost' },
										content: 'by ustwo games'
									}]
								}]
							},
							{
								block: 'badge',
								mods: { view: 'default' },
								content: '$99'
							}]
						}]
					},
					{
						block: 'app',
						mix: [
							{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
							{ block: 'component', mods: { whitepaper: 'inverse' }},
							{ block: 'pt-card', mods: { view: 'default' }}, 
							{ block: 'promo-cards', elem: 'apps-good-back' }, 
							{ block: 'promo-cards', elem: 'hover' }
						],
						content: [
						{
							elem: 'good-info',
							mix: [{ block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xl' } }],
							content: [
							{
								block: 'image',
								mix: [{ block: 'promo-cards', elem: 'apps-good-photo' }, { block: 'decorator', mods: { 'indent-b': 'xxl' } }],
								url: '/assets/i/good-cover.png',
							},
							{
								block: 'text',
								mods: { size: 'xxxl', view: 'primary', weight: 'bold' },
								mix: [{ block: 'decorator', mods: { 'space-b': 'l' } }, { block: 'promo-cards', elem: 'apps-good-info' }],
								content: 'From our Bafta award winning hit'
							},
							{
								block: 'text',
								mix: { block: 'promo-cards', elem: 'apps-good-info' },
								mods: { size: 'm', view: 'ghost' },
								content: 'Enjoy beautiful levels filled with illusory, meditative puzzles'
							}]
						},
						{
							elem: 'item',
							mix: [{ block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xl', distribute: 'between' } }, { block: 'promo-cards', elem: 'apps-good-footer' }, { block: 'pt-card', elem: 'item' }],
							content: [
							{
								block: 'pt-icon-plus',
								mods: { 'vertical-align': 'center' },
								content: [
								{
									elem: 'icon',
									elemMods: { 'indent-r': 's' },
									content: [
									{
										block: 'brand-logo',
										mods: { 'name': 'ustwo', size: 's'}
									}]
								},
								{
									elem: 'block',
									content: [
									{
										block: 'text',
										mods: { view: 'primary', size: 'm' },
										content: 'Monument Valley'
									},
									{
										block: 'text',
										mods: { size: 's', view: 'ghost' },
										content: 'by ustwo games'
									}]
								}]
							},
							{
								block: 'badge',
								mods: { view: 'default' },
								content: '$99'
							}]
						}]
					}]
				},
				{
					elem: 'description',
					elemMods: { slide: 'first' },
					mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
					content: [
					{
						elem: 'header',
						mix: [{ block: 'decorator', mods: { 'indent-b': 'xl' } }, { block: 'text', mods: { font: 'sans', view: 'primary', weight: 'bold' } }],
						content: 'Collection'
					},
					{
						block: 'text',
						mods: { size: 'xl', view: 'primary', font: 'mono' },
						content: 'For selections and collections made for blogs, social networks, stores, and media. For instance, \‘Ten computer games about zombies\’ or \‘Best alarm clock applications\’   '
					}]
				},
				{
					elem: 'description',
					elemMods: { slide: 'second' },
					mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
					content: [
					{
						elem: 'header',
						mix: [{ block: 'decorator', mods: { 'indent-b': 'xl' } }, { block: 'text', mods: { font: 'sans', view: 'primary', weight: 'bold' } }],
						content: 'Application'
					},
					{
						block: 'text',
						mods: { size: 'xl',  view: 'primary', font: 'mono' },
						content: 'For sites and blogs about games, services, and applications.'
					}]
				},
				{
					elem: 'description',
					elemMods: { slide: 'third' },
					mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
					content: [
					{
						elem: 'header',
						mix: [{ block: 'decorator', mods: { 'indent-b': 'xl' } }, { block: 'text', mods: { font: 'sans', view: 'primary', weight: 'bold' } }],
						content: 'Developer'
					},
					{
						block: 'text',
						mods: { size: 'xl', view: 'primary', font: 'mono' },
						content: 'For all sorts of stores providing games, applications, and services.'
					}]
				},
				{
					elem: 'list',
					content: [
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							mods: { size: 'xl', view: 'alert', transform: 'uppercase', align: 'center', font: 'mono' },
							mix: { block: 'promo-cards', elem: 'apps-tab-1' },
							content: 'Collection'
						}
					},
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							mods: { size: 'xl', transform: 'uppercase', align: 'center', font: 'mono' },
							mix: { block: 'promo-cards', elem: 'apps-tab-2' },
							content: 'Application'
						}
					},
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							mods: { size: 'xl', transform: 'uppercase', align: 'center', font: 'mono' },
							mix: { block: 'promo-cards', elem: 'apps-tab-3' },
							content: 'Developer'
						}
					}]
				}]
			}]
		},
		/* /APPS */

		/* DONATE */
		{
			block: 'promo-cards',
			mods: { view: 'ghost', slide: 'first' },
			mix: [
				{ block: 'theme', mods: { color: 'whitepaper-default' }},
				{ block: 'component', mods: { whitepaper: 'default' }},
				{ block: 'promo-cards', elem: 'donate-section' }
			],
			content: [
			{
				elem: 'theme-name',
				elemMods: { slide: 'first' },
				mix: { block: 'text', mods: { font: 'mono', transform: 'uppercase' } },
				content: 'person'
			},
			{
				elem: 'theme-name',
				elemMods: { slide: 'second' },
				mix: { block: 'text', mods: { font: 'mono', transform: 'uppercase' } },
				content: 'project'
			},
			{
				elem: 'theme-name',
				elemMods: { slide: 'third' },
				mix: { block: 'text', mods: { font: 'mono', transform: 'uppercase' } },
				content: 'event'
			},
			{
				elem: 'content',
				content: [
				{
					elem: 'card',
					mix: [
						{ elem: 'donate', elemMods: { type: 'person' } },
						{ block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
					],
					content: [
					{
						block: 'donate',
						mix: [
							{ block: 'theme', mods: { color: 'whitepaper-default' }},
							{ block: 'component', mods: { whitepaper: 'default' }},
							{ block: 'pt-card', mods: { view: 'default' } },
							{ block: 'promo-cards', elem: 'hover' },
							{ block: 'promo-cards', elem: 'donate-person' },
						],
						content: [
						{
							elem: 'person-image-wrapper',
							mix: [
								{ block: 'pt-card', elem: 'content' },
								{ block: 'promo-cards', elem: 'donate-person-image-wrapper'}
							],
							content: [
							{
								block: 'image',
								mix: [
									{ block: 'pt-card', elem: 'image' },
									{ block: 'promo-cards', elem: 'donate-person-image'}
								],
								url: '/assets/i/donate-person-image.png'
							}]
						},
						{
							elem: 'person-info',
							mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-h': 'l', 'space-t': 'xxl' } },
							content: [
							{
								elem: 'person-avatar-wrapper',
								mix: [
									{ block: 'pt-card', elem: 'header' },
								],
								content: [
								{
									elem: 'person-avatar',
									mix: [
										{ block: 'avatar', elem: 'photo', elemMods: { size: 'm' } },
										{ block: 'promo-cards', elem: 'donate-person-avatar'},
									]
								}]
							},
							{
								block: 'text',
								mix: [
									{ block: 'decorator', mods: { 'indent-b': 's' } },
									{ block: 'promo-cards', elem: 'donate-person-title'}
								],
								mods: { view: 'primary', size: 'xxl', weight: 'bold' },
								content: [
								'Sam Harris ',
								{
									block: 'text',
									mods: { view: 'primary', size: 'xxl', weight: 'regular', style: 'italic', display: 'inline' },
									content: 'is creating The Waking Up Podcast'
								}]
							},
							{
								block: 'text',
								mods: { view: 'secondary', size: 'm' },
								mix: { block: 'promo-cards', elem: 'donate-person-desc'},
								content: 'I launched Waking Up in 2015, and it regularly ranks among the top 100 podcasts in the US, ' +
								'UK, Canada, and Australia. It has been selected by Apple as one of "iTunes Best" and has won a Webby ' +
								'Award for best podcas…'
							}]
						},
						{
							elem: 'person-action',
							mix: [
								{ block: 'pt-card', elem: 'footer', elemMods: { 'space-h': 'm', 'space-v': 'xl' } },
								{ block: 'promo-cards', elem: 'donate-person-action'}
							],
							content: [
							{
								block: 'button',
								mix: { block: 'text', mods: { view: 'inverse', size: 's', transform: 'uppercase' } },
								mods: { theme: 'islands', size: 'l', type: 'submit', view: 'person-donate', width: 'full' },
								text: 'Send $10'
							}]
						}]
					},
					{
						block: 'donate',
						mix: [
							{ block: 'pt-card', mods: { view: 'default' } },
							{ block: 'promo-cards', elem: 'hover' },
							{ block: 'promo-cards', elem: 'donate-project' },
						],
						content: [
						{
							elem: 'project-image-wrapper',
							mix: [
								{ block: 'pt-card', elem: 'content' },
								{ block: 'promo-cards', elem: 'donate-project-header'}
							],
							content: [
							{
								block: 'image',
								mix: [
									{ block: 'pt-card', elem: 'image' },
									{ block: 'promo-cards', elem: 'donate-project-image'}
								],
								url: '/assets/i/donate-project-image.png'
							},
							{
								elem: 'project-play',
							},
							{
								elem: 'project-progress-bar',
								mix: { block: 'promo-cards', elem: 'donate-project-progressbar'},
							}]
						},
						{
							elem: 'project-info',
							mix: [
								{ block: 'theme', mods: { color: 'whitepaper-default' }},
								{ block: 'component', mods: { whitepaper: 'default' }},
								{ block: 'pt-card', elem: 'content', elemMods: { 'space-h': 'l' }}
							],	
							content: [
							{
								elem: 'project-countdowns',
								mix: { block: 'decorator', mods: { 'indent-v': 'xs' } },
								content: [
								{
									elem: 'amount-wrapper',
									mix: [
										{ block: 'promo-cards', elem: 'donate-project-amount'},
										{ block: 'decorator', mods: { 'indent-r': 'xxxxl' } },
									],
									content: [
									{
										elem: 'amount',
										content: [
											{
												block: 'text',
												mods: { view: 'primary', size: 'l', weight: 'bold' },
												content: '$4,464'
											}
										]
									},
									{
										elem: 'description',
										content: [
											{
												block: 'text',
												mods: { view: 'secondary', size: 'xs' },
												content: 'pledged of 6,217 goal'
											}
										]
									}]
								},
								{
									elem: 'days-wrapper',
									mix: { block: 'promo-cards', elem: 'donate-project-days'},
									content: [
									{
										elem: 'days',
										content: [
										{
											block: 'text',
											mods: { view: 'primary', size: 'l', weight: 'bold' },
											content: '32'
										}]
									},
									{
										elem: 'description',
										content: [
										{
											block: 'text',
											mods: { view: 'secondary', size: 'xs' },
											content: 'days to go'
										}]
									}]
								}]
							},
							{
								block: 'text',
								mods: { view: 'primary', size: 'xxl', weight: 'bold' },
								mix: { block: 'promo-cards', elem: 'donate-project-title'},
								content: [
								{
									block: 'text',
									mods: { view: 'primary', size: 'xl', weight: 'bold' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
									content: 'MIRAGE: A Feature-Packed Delay Pedal by RedShift Effects'
								}]
							},
							{
								block: 'text',
								mods: { view: 'secondary', size: 'm' },
								mix: { block: 'promo-cards', elem: 'donate-project-desc'},
								content: 'A high-quality, hand-built tap tempo delay pedal with ' +
								'modulated filtering, plenty of delay time, and a handful …'
							}]
						},
						{
							elem: 'project-action',
							mix: [
								{ block: 'theme', mods: { color: 'whitepaper-default' }},
								{ block: 'component', mods: { whitepaper: 'default' }},
								{ block: 'pt-card', elem: 'footer', elemMods: { 'space-h': 'm', 'space-v': 'l' } },
								{ block: 'promo-cards', elem: 'donate-project-action'},
							],
							content: [
							{
								block: 'button',
								mix: { block: 'text', mods: { view: 'inverse', size: 'm' } },
								mods: { theme: 'islands', size: 'l', type: 'submit', view: 'project-donate', width: 'full', 'border-radius': 'full' },
								text: 'Back this project'
							}]
						}]
					},
					{
						block: 'donate',
						mix: [
							{ block: 'pt-card', mods: { view: 'default' } },
							{ block: 'promo-cards', elem: 'hover' },
							{ block: 'promo-cards', elem: 'donate-event' },
						],
						content: [
						{
							elem: 'event-image-wrapper',
							mix: [
								{ block: 'pt-card', elem: 'content' },
								{ block: 'promo-cards', elem: 'donate-event-image'},
							],
							content: [
							{
								block: 'image',
								mix: { block: 'pt-card', elem: 'image' },
								url: '/assets/i/donate-event-image.png'
							}]
						},
						{
							elem: 'event-header',
							mix: { block: 'pt-card', elem: 'header', elemMods: { align: 'center' } },
							content: [
							{
								elem: 'wrap',
								content: [
								{
									elem: 'event-avatar-wrapper',
									mix: { block: 'promo-cards', elem: 'donate-event-avatar', },
									content: {
										elem: 'event-avatar',
									}
								},
								{
									block: 'text',
									mods: { view: 'primary', size: 'xxxl', weight: 'bold', style: 'italic', align: 'center', transform: 'uppercase' },
									mix: [
										{ block: 'decorator', mods: { 'indent-b': 'xxs' } },
										{ block: 'promo-cards', elem: 'donate-event-title'},
									],
									content: 'Ann’s B-day'
								},
								{
									block: 'text',
									mods: { view: 'primary', size: 's', align: 'center' },
									mix: { block: 'promo-cards', elem: 'donate-event-subtitle'},
									content: [
									{
										block: 'text',
										mods: { view: 'primary', size: 's', weight: 'bold', display: 'inline' },
										content: '25:12:08:43 '
									},
									{
										block: 'text',
										mods: { view: 'primary', size: 's', display: 'inline' },
										content: 'until the end'
									}]
								}]
							}]
						},
						{
							elem: 'event-info',
							mix: [
								{ block: 'pt-card', elem: 'content', elemMods: { 'space-h': 'xxl' } },
								{ block: 'promo-cards', elem: 'donate-event-info'},
							],
							content: [
							{
								elem: 'control',
								content: '-'
							},
							{
								block: 'text',
								mods: { view: 'primary', size: '4xl', weight: 'semibold', align: 'center' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
								content: '$10'
							},
							{
								elem: 'control',
								content: '+'
							}]
						},
						{
							elem: 'event-action',
							mix: [
								{ block: 'pt-card', elem: 'footer', elemMods: { 'space-h': 'l', 'space-v': 'xl' } },
								{ block: 'promo-cards', elem: 'donate-event-action'}
							],
							content: [
							{
								elem: 'event-avatar-group',
								content: [
								{
									elem: 'event-mini-avatar',
									elemMods: { view: '1' },
									mix: { block: 'avatar', elem: 'photo', elemMods: { size: 'xs' } },
								},
								{
									elem: 'event-mini-avatar',
									elemMods: { view: '2' },
									mix: { block: 'avatar', elem: 'photo', elemMods: { size: 'xs' } },
								},
								{
									elem: 'event-mini-avatar',
									elemMods: { view: '3' },
									mix: { block: 'avatar', elem: 'photo', elemMods: { size: 'xs' } },
								},
								{
									elem: 'event-mini-avatar',
									elemMods: { view: '4' },
									mix: { block: 'avatar', elem: 'photo', elemMods: { size: 'xs' } },
								},
								{
									block: 'text',
									mix: { block: 'decorator', mods: { 'indent-l': 'xxs' } },
									mods: { view: 'primary', size: 'm', weight: 'semibold' },
									content: '+6'
								}]
							},
							{
								block: 'button',
								mix: [
									{ block: 'text', mods: { view: 'inverse', weight: 'bold', transform: 'uppercase', style: 'italic' } },
									{ block: 'decorator', mods: { 'indent-l': 'xl' } }
								],
								mods: { theme: 'islands', size: 'l', type: 'submit', view: 'event-donate', 'border-radius': 'full' },
								text: 'Make a party'
							}]
						}]
					}]
				},
				{
					elem: 'description',
					elemMods: { slide: 'first' },
					content: [
					{
						elem: 'header',
						mix: [{ block: 'decorator', mods: { 'indent-b': 'xl' } }, { block: 'text', view: 'primary', mods: { font: 'sans', weight: 'bold' }, }],
						content: 'Person'
					},
					{
						block: 'text',
						mods: { size: 'xl', view: 'primary', font: 'mono' },
						content: 'For bloggers and streamers, charity sites and crowdfunding projects'
					}]
				},
				{
					elem: 'description',
					elemMods: { slide: 'second' },
					content: [
					{
						elem: 'header',
						mix: [{ block: 'decorator', mods: { 'indent-b': 'xl' } }, { block: 'text', mods: { font: 'sans', view: 'primary', weight: 'bold' } }],
						content: 'Project'
					},
					{
						block: 'text',
						mods: { size: 'xl', view: 'primary', font: 'mono' },
						content: 'For crowdfunding projects and charity sites '
					}]
				},
				{
					elem: 'description',
					elemMods: { slide: 'third' },
					content: [
					{
						elem: 'header',
						mix: [{ block: 'decorator', mods: { 'indent-b': 'xl' } }, { block: 'text', mods: { font: 'sans', view: 'primary', weight: 'bold' } }],
						content: 'Event'
					},
					{
						block: 'text',
						mods: { size: 'xl', view: 'primary', font: 'mono' },
						content: 'For social networks, crowdfunding platforms, online banking systems, payment services, and applications. This will do for raising money for a joint gift or all sorts of things.'
					}]
				},
				{
					elem: 'list',
					content: [
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							mix: { block: 'promo-cards', elem: 'donate-tab-1' },
							mods: { size: 'xl', view: 'alert', transform: 'uppercase', align: 'center' },
							content: 'Person'
						}
					},
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							mix: { block: 'promo-cards', elem: 'donate-tab-2' },
							mods: { size: 'xl', transform: 'uppercase', align: 'center' },
							content: 'Project'
						}
					},
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							mix: { block: 'promo-cards', elem: 'donate-tab-3' },
							mods: { size: 'xl', transform: 'uppercase', align: 'center' },
							content: 'Event'
						}
					}]
				}]
			}]
		},
		/* /DONATE */

		/* TEAM */
		{
			block: 'promo-cards',
			mods: { view: 'default' },
			mix: [
				{ block: 'theme', mods: { color: 'whitepaper-default' }},
				{ block: 'component', mods: { whitepaper: 'default' }},
			],
			content: [
			{
				elem: 'content',
				elemMods: { align: 'center' },
				content: [
				{
					block: 'pt-list',
					content: [
					{
						elem: 'item',
						elemMods: { 'space-v': 'xxs' },
						content: [
						{
							tag: 'a',
							attrs: { href: 'https://github.com/Miocene' },
							block: 'promo-cards',
							elem: 'team-member',
							mix: { block: 'text', mods: { view: 'primary', font: 'mono', weight: 'bold', transform: 'uppercase' } },
							content: 'Julia Muzafarova'
						}]
					},
					{
						elem: 'item',
						elemMods: { 'space-v': 'xxs' },
						content: [
						{
							tag: 'a',
							attrs: { href: 'http://instagram.com/sntx_error' },
							block: 'promo-cards',
							elem: 'team-member',
							mix: { block: 'text', mods: { view: 'primary', font: 'mono', weight: 'bold', transform: 'uppercase' } },
							content: 'Leonid Motorin'
						}]
					},
					{
						elem: 'item',
						elemMods: { 'space-v': 'xxs' },
						content: [
						{
							tag: 'a',
							attrs: { href: 'https://www.facebook.com/kirill.back' },
							block: 'promo-cards',
							elem: 'team-member',
							mix: { block: 'text', mods: { view: 'primary', font: 'mono', weight: 'bold', transform: 'uppercase' } },
							content: 'Kirill Fedotov'
						}]
					},
					{
						elem: 'item',
						elemMods: { 'space-v': 'xxs' },
						content: [
						{
							tag: 'a',
							attrs: { href: 'https://dribbble.com/lerazhelezova' },
							block: 'promo-cards',
							elem: 'team-member',
							mix: { block: 'text', mods: { view: 'primary', font: 'mono', weight: 'bold', transform: 'uppercase' } },
							content: 'Lera Zhelezova'
						}]
					},
					{
						elem: 'item',
						elemMods: { 'space-v': 'xxs' },
						content: [
						{
							tag: 'a',
							attrs: { href: 'https://twitter.com/fooontic_' },
							block: 'promo-cards',
							elem: 'team-member',
							mix: { block: 'text', mods: { view: 'primary', font: 'mono', weight: 'bold', transform: 'uppercase' } },
							content: 'Vadim Matveev'
						}]
					},
					{
						elem: 'item',
						elemMods: { 'space-v': 'xxs' },
						content: [
						{
							tag: 'a',
							attrs: { href: 'http://sava.work' },
							block: 'promo-cards',
							elem: 'team-member',
							mix: { block: 'text', mods: { view: 'primary', font: 'mono', weight: 'bold', transform: 'uppercase' } },
							content: 'Saveliy Bobov'
						}]
					},
					{
						elem: 'item',
						elemMods: { 'space-v': 'xxs' },
						content: [
						{
							tag: 'a',
							attrs: { href: 'https://www.facebook.com/sergibysergi' },
							block: 'promo-cards',
							elem: 'team-member',
							mix: { block: 'text', mods: { view: 'primary', font: 'mono', weight: 'bold', transform: 'uppercase' } },
							content: 'Sergi Matveev'
						}]
					},
					{
						elem: 'item',
						elemMods: { 'space-v': 'xxs' },
						content: [
						{
							tag: 'a',
							attrs: { href: 'https://github.com/joshuan' },
							block: 'promo-cards',
							elem: 'team-member',
							mix: { block: 'text', mods: { view: 'primary', font: 'mono', weight: 'bold', transform: 'uppercase' } },
							content: 'Evgeniy Shershnev'
						}]
					},
					{
						elem: 'item',
						elemMods: { 'space-v': 'xxs' },
						content: [
						{
							tag: 'a',
							attrs: { href: 'https://www.facebook.com/koloskof' },
							block: 'promo-cards',
							elem: 'team-member',
							mix: { block: 'text', mods: { view: 'primary', font: 'mono', weight: 'bold', transform: 'uppercase' } },
							content: 'Mikhail Koloskof'
						}]
					},
					{
						elem: 'item',
						elemMods: { 'space-v': 'xl' },
						content: [
						{
							tag: 'a',
							attrs: { href: 'https://github.com/bemdesign/bem-design' },
							block: 'promo-cards',
							elem: 'new-team-member',
							mix: { block: 'text', mods: { size: 'xl', font: 'mono', weight: 'bold', transform: 'uppercase' } },
							content: 'JOIN Our TEAM'
						}]
					}]
				}]
			}]
		}
		/* /TEAM */

	]
};
