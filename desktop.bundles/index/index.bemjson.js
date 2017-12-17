module.exports = {
	block: 'page',
	title: 'BEM Design',
	favicon: '/favicon.ico',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'index.min.css' },
		{ elem: 'css', url: '../../assets/ibm-type/css/ibm-type.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	mix: {
		block: 'theme',
		mods: { color: 'default', space: 'default', size: 'default' }
	},
	scripts: [{ elem: 'js', url: 'index.min.js' }],
	mods: { type: 'full-screen', theme: 'islands' },
	content: [
	{
		block: 'demo',
		mix: {
		block: 'theme',
		mods: { color: 'default', space: 'default', size: 'default' }
		},
		content: [
		// {
		// 	elem: 'layout',
		// 	elemMods: { view: 'default' },
		// 	content: [
		// 	{
		// 		elem: 'content',
		// 		content: [
		// 		{
		// 			block: 'text',
		// 			mods: { size: 'xxl', view: 'ghost', weight: 'bold' },
		// 			content: [
		// 			'Yamoney Design',
		// 			{
		// 				tag: 'a',
		// 				block: 'text',
		// 				mods: { view: 'link' },
		// 				mix: { block: 'decorator', mods: { 'indent-l': 's' } },
		// 				attrs: { href: 'https://bitbucket-public.yamoney.ru/users/meeq/repos/prototype/browse' },
		// 				content: 'на Bitbucket'
		// 			},
		// 			{
		// 				tag: 'a',
		// 				block: 'text',
		// 				mods: { view: 'link' },
		// 				mix: { block: 'decorator', mods: { 'indent-l': 's' } },
		// 				attrs: { href: 'https://t.me/bemdesign' },
		// 				content: 'в Telegram'
		// 			}]
		// 		},
		// 		{
		// 			elem: 'slogan',
		// 			content: 'Масштабируемая'
		// 		},
		// 		{
		// 			elem: 'slogan',
		// 			content: 'дизайн-система'
		// 		},
		// 		{
		// 			elem: 'slogan',
		// 			content: 'на основе БЭМ'
		// 		}]
		// 	}]
		// },
		{
			elem: 'plug',
			content: [
				{
					elem: 'plug-header',
					content: [
						{
							elem: 'plug-bem-logo',
							content: {
								html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 50"><g fill-rule="evenodd"><rect width="49" height="23"/><rect width="49" height="14" x="54"/><rect width="14" height="50" x="108"/><rect width="14" height="50" x="126"/><rect width="14" height="50" x="144"/><rect width="49" height="14" x="54" y="18"/><rect width="49" height="14" x="54" y="36"/><rect width="49" height="23" y="27"/></g></svg>'
							}
						},
						{
							elem: 'plug-slogan',
							tag: 'h1',
							content: 'Масштабируемая дизайн-система на основе БЭМ'
						},
					]
				},
				{
					elem: 'plug-content',
					content: [

						{
							elem: 'plug-description',
							tag: 'p',
							content: 'Для использования системы зайдите на сайт с компьютера. Почитать документацию можно на Github. Задать вопросы можно в соцсетях'
						},
						{
							elem: 'plug-action',
							content: [
								{
									elem: 'plug-button',
									tag: 'a',
									attrs: { 'href': 'https://github.com/bemdesign'},
									content: 'Репозиторий на Github'
								},
								{
									elem: 'plug-soclink',
									elemMods: { icon: 'telegram'},
									tag: 'a',
									attrs: { 'href': 'https://t.me/dotmus'},
									content: 'Телеграм'
								},
								{
									elem: 'plug-soclink',
									elemMods: { icon: 'twitter'},
									tag: 'a',
									attrs: { 'href': 'https://twitter.com/bem_design'},
									content: 'Твиттер'
								},
							]
						}
					]
				},

			]
		},
		{
			block: 'promo-cards',
			mix: { block: 'promo-cards', elem: 'offer-section' },
			mods: { view: 'ghost', slide: 'first' },
			content: [
			{
				elem: 'theme-name',
				content: 'Product'
			},
			{
				elem: 'content',
				content: [
				{
					elem: 'card',
					mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
					content: [
						{
							block: 'offer',
							mix: [
								{ block: 'pt-card', mods: { view: 'default' } },
								{ block: 'promo-cards', elem: 'hover' },
							],
							mods: { view: 'nike' },
							content: [
								{
									elem: 'show',
									mix: { block: 'pt-card', elem: 'header' },
									content: [
										{
											elem: 'background',
											mix: { block: 'promo-cards', elem: 'offer-background'}
										},
										{
											elem: 'goods-price',
											mix: { block: 'promo-cards', elem: 'offer-goods-price'},
											content: '$299'
										},
										{
											elem: 'item',
											mix: { block: 'promo-cards', elem: 'offer-item'}
										}
									]
								},
								{
									elem: 'goods-info',
									mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-h': 'xxl' } },
									content: [
										{
											block: 'text',
											mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
											mix: { block: 'promo-cards', elem: 'offer-title'},
											mods: { view: 'primary', size: 'xl', align: 'center', transform: 'uppercase', spacing: 's' },
											content: 'Nike Gyakusou Gaiter Boot'
										},
										{
											block: 'text',
											mods: { view: 'primary', size: 's', align: 'center' },
											mix: { block: 'promo-cards', elem: 'offer-desc'},
											content: 'You have the goal. We have a gift'
										}
									]
								},
								{
									elem: 'action',
									mix: [
										{ block: 'pt-card', elem: 'footer', elemMods: { 'space-v': 'xl' } },
										{ block: 'promo-cards', elem: 'offer-action'},
									],
									content: [
										{
											block: 'text',
											mods: { view: 'secondary', size: 'm', align: 'center', weight: 'semibold' },
											content: 'Shop Now'
										}
									]
								}
							]
						},


						{
							block: 'offer',
							mods: { view: 'brabus'},
							mix: [
								{ block: 'pt-card', mods: { view: 'default' } },
								{ block: 'promo-cards', elem: 'hover' },
							],
							content: [
								{
									elem: 'title',
									mix: { block: 'pt-card', elem: 'header', elemMods: { 'space-v': 'xxl' } },
									content: [
										{
											block: 'text',
											mods: { view: 'inverse', size: 'l', transform: 'uppercase', align: 'center' },
											content: 'Brabus'
										}
									]
								},
								{
									elem: 'service-info',
									mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l' } },
									content: [
										{
											block: 'text',
											mix: { block: 'decorator', mods: { 'indent-b': 'xl'} },
											mods: { view: 'inverse', size: 'm', weight: 'semibold' },
											content: 'Luxury and comfort never comprised. The BRABUS GLE 700 Coupe will lead to an unforgettable journey'
										},
										{
											elem: 'price',
											content: [
												{
													block: 'text',
													mods: { view: 'inverse', size: 's', style: 'italic' },
													content: 'from'
												},
												{
													block: 'text',
													mods: { view: 'inverse', size: 'xxxl', weight: 'semibold' },
													content: '$299'
												}
											]
										}
									]
								}
							]
						}
					]
				},



				{
					elem: 'description',
					mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
					content: [
					{
						elem: 'header',
						mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
						content: 'Media Content'
					},
					{
						block: 'text',
						attrs: { style: 'font-family: \'IBM Plex Mono\' !important;' },
						mods: { size: 'xl' },
						content: 'Exclusive member-only offers in the run up to Black Friday, plus the best of Nike direct to your inbox. Don\'t miss out'
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
							attrs: { style: 'font-family: \'IBM Plex Mono\' !important;' },
							mix: { block: 'promo-cards', elem: 'offer-tab-1' },
							mods: { size: 'xl', transform: 'uppercase', view: 'letter', align: 'center' },
							content: 'Video'
						}
					},
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							attrs: { style: 'font-family: \'IBM Plex Mono\' !important;' },
							mix: { block: 'promo-cards', elem: 'offer-tab-2' },
							mods: { size: 'xl', transform: 'uppercase', view: 'primary', align: 'center' },
							content: 'Text'
						}
					},
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							attrs: { style: 'font-family: \'IBM Plex Mono\' !important;' },
							mix: { block: 'promo-cards', elem: 'offer-tab-3' },
							mods: { size: 'xl', transform: 'uppercase', view: 'primary', align: 'center' },
							content: 'Music'
						}
					}]
				}]
			},
			{
				elem: 'controls',
				content: [
				{
					block: 'icon',
					mods: { 'arrow-up-2': 'xl-primary' },
					mix: { block: 'decorator', mods: { 'indent-r': 'xxl' } }
				},
				{
					block: 'icon',
					mods: { 'arrow-down-2': 'xl-primary' }
				}]
			},
			]
		},
		{
			block: 'promo-cards',
			mods: { view: 'inverse', slide: 'first' },
			mix: { block: 'promo-cards', elem: 'media-section' },
			content: [
			{
				elem: 'theme-name',
				content: 'Video'
			},
			{
				elem: 'content',
				content: [
				{
					elem: 'card',
					mix: [{ elem: 'media', elemMods: { type: 'video' } }, { block: 'decorator', mods: { 'indent-b': 'xxxxl' } }],
					content: [
					{
						block: 'media',
						mix: [{ block: 'pt-card', mods: { view: 'inverse' } }, { block: 'promo-cards', elem: 'media-video-back' }, { block: 'promo-cards', elem: 'hover' }],
						content: [
						{
							elem: 'video',
							mix: { block: 'promo-cards', elem: 'media-video' },
							content: [
							{
								elem: 'play'
							}]
						},
						{
							elem: 'video-title',
							mix: [{ block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } }, { block: 'promo-cards', elem: 'media-video-title' }],
							content: [
							{
								block: 'text',
								mods: { view: 'inverse', size: 'xxl' },
								content: 'Mad Lib Theater with John Cena'
							}]
						},
						{
							elem: 'footer',
							mix: [{ block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } }, { block: 'promo-cards', elem: 'media-video-footer' }],
							content: [
							{
								block: 'pt-icon-plus',
								mods: { 'vertical-align': 'center' },
								content: [
								{
									elem: 'icon',
									elemMods: { 'indent-right': 'xs' },
									content: [
									{
										block: 'media',
										elem: 'channel-logo'
									}]
								},
								{
									elem: 'block',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 's' },
										content: 'The Tonight Show…'
									}]
								}]
							},
							{
								block: 'text',
								mods: { view: 'inverse', size: 's' },
								content: '512K views'
							}]
						}]
					},
					{
						block: 'media',
						mix: [{ block: 'pt-card', mods: { view: 'default' } }, { block: 'promo-cards', elem: 'media-text-back' }, { block: 'promo-cards', elem: 'hover' }],
						content: [
						{
							elem: 'article-cover',
							mix: { block: 'promo-cards', elem: 'media-cover' },
							content: [
							{
								elem: 'article-author',
								content: [
								{
									block: 'pt-icon-plus',
									mods: { 'vertical-align': 'center' },
									mix: { block: 'promo-cards', elem: 'media-author-top' },
									content: [
									{
										elem: 'icon',
										elemMods: { 'indent-right': 'xs' },
										content: [
										{
											block: 'media',
											elem: 'avatar'
										}]
									},
									{
										elem: 'block',
										content: [
										{
											block: 'text',
											mods: { view: 'inverse', size: 's' },
											content: 'James Bridle'
										}]
									}]
								}]
							}]
						},
						{
							elem: 'article-title',
							mix: [{ block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } }, { block: 'promo-cards', elem: 'media-article' }],
							content: [
							{
								block: 'text',
								mods: { view: 'primary', size: 'xxl' },
								mix: { block: 'decorator', mods: { 'indent-b': 's' } },
								content: 'Something is wrong on the internet'
							},
							{
								block: 'text',
								mods: { view: 'primary', size: 'm' },
								content: 'I’m James Bridle. I’m a writer and artist concerned with technology and culture. I usually write on my own blog…'
							}]
						},
						{
							elem: 'footer',
							mix: [{ block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l' } }, { block: 'promo-cards', elem: 'media-text-footer' }],
							content: [
							{
								block: 'text',
								mods: { view: 'secondary', size: 's' },
								content: 'Nov 6 / 21 min read'
							},
							{
								block: 'text',
								mods: { view: 'primary', size: 's' },
								content: '512K views'
							}]
						}]
					},
					{
						block: 'media',
						mix: [{ block: 'pt-card', mods: { view: 'inverse' } }, { block: 'promo-cards', elem: 'media-music-back' }, { block: 'promo-cards', elem: 'hover' }],
						content: [
						{
							elem: 'music-cover',
							mix: [{ block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } }, { block: 'promo-cards', elem: 'media-music-cover' }],
							content: [
							{
								elem: 'music-info',
								content: [
								{
									block: 'text',
									mods: { view: 'inverse', size: 'xxl', align: 'center' },
									mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
									content: 'Pitchfork Best New Music',
								},
								{
									block: 'text',
									mods: { view: 'inverse', size: 'm', align: 'center' },
									content: 'Pitchfork',
								}]
							}]
						},
						{
							block: 'playlist',
							mix: [{ block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'm' } }, { block: 'promo-cards', elem: 'media-playlist' }],
							content: [
							{
								elem: 'item',
								mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'xs' } },
								content: [
								{
									elem: 'track',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 's' },
										mix: { block: 'decorator', mods: { 'indent-b': 's' } },
										content: 'Pitchfork Best New Music',
									},
									{
										elem: 'description',
										content: [
										{
											block: 'text',
											mods: { view: 'inverse', size: 'xs', weight: 'light' },
											content: 'Benjamin Clementine • At Least for Now',
										}]
									}]
								},
								{
									block: 'text',
									mods: { view: 'inverse', size: 's' },
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
										mods: { view: 'inverse', size: 's' },
										mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
										content: 'Pitchfork Best New Music',
									},
									{
										elem: 'description',
										content: [
										{
											block: 'text',
											mods: { view: 'inverse', size: 'xs', weight: 'light' },
											content: 'Benjamin Clementine • At Least for Now',
										}]
									}]
								},
								{
									block: 'text',
									mods: { view: 'inverse', size: 's' },
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
										mods: { view: 'inverse', size: 's' },
										mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
										content: 'Pitchfork Best New Music',
									},
									{
										elem: 'description',
										content: [
										{
											block: 'text',
											mods: { view: 'inverse', size: 'xs', weight: 'light'  },
											content: 'Benjamin Clementine • At Least for Now',
										}]
									}]
								},
								{
									block: 'text',
									mods: { view: 'inverse', size: 's' },
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
										mods: { view: 'inverse', size: 's' },
										mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
										content: 'Pitchfork Best New Music',
									},
									{
										elem: 'description',
										content: [
										{
											block: 'text',
											mods: { view: 'inverse', size: 'xs', weight: 'light' },
											content: 'Benjamin Clementine • At Least for Now',
										}]
									}]
								},
								{
									block: 'text',
									mods: { view: 'inverse', size: 's' },
									content: '7:25'
								}]
							}]
						}]
					}]
				},
				{
					elem: 'description',
					mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
					content: [
					{
						elem: 'header',
						mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
						content: 'Media Content'
					},
					{
						block: 'text',
						attrs: { style: 'font-family: \'IBM Plex Mono\' !important;' },
						mods: { size: 'xl' },
						content: 'Exclusive member-only offers in the run up to Black Friday, plus the best of Nike direct to your inbox. Don\'t miss out'
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
							attrs: { style: 'font-family: \'IBM Plex Mono\' !important;' },
							mods: { size: 'xl', transform: 'uppercase', view: 'letter', align: 'center' },
							mix: { block: 'promo-cards', elem: 'media-tab-1' },
							content: 'Video'
						}
					},
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							attrs: { style: 'font-family: \'IBM Plex Mono\' !important;' },
							mods: { size: 'xl', transform: 'uppercase', align: 'center' },
							mix: { block: 'promo-cards', elem: 'media-tab-2' },
							content: 'Text'
						}
					},
					{
						elem: 'item',
						mix: [{ block: 'decorator', mods: { 'indent-h': 'm' } }],
						content: {
							block: 'text',
							attrs: { style: 'font-family: \'IBM Plex Mono\' !important;' },
							mods: { size: 'xl', transform: 'uppercase', align: 'center' },
							mix: { block: 'promo-cards', elem: 'media-tab-3' },
							content: 'Music'
						}
					}]
				}]
			},
			{
				elem: 'controls',
				content: [
				{
					block: 'icon',
					mods: { 'arrow-up-2': 'xl-primary' },
					mix: { block: 'decorator', mods: { 'indent-r': 'xxl' } }
				},
				{
					block: 'icon',
					mods: { 'arrow-down-2': 'xl-primary' }
				}]
			},
			]
		}]
	}]
};
