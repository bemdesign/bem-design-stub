module.exports = {
	block: 'page',
	title: 'BEM Starter Kit',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'bem-starter-kit.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'bem-starter-kit.min.js' }],
	mods: { theme: 'islands' },
	mix: [
		{
			block: 'theme',
			mods: { color: 'whitepaper-default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' }
		},
		{
			block: 'component',
			mods: { whitepaper: 'default' }
		}
	],
	content: [

		{
			block: 'tpl-layout',
			mix: { block: 'decorator',mods: { 'space-v': 'xxxxxxl' } },
			attrs: {
				'style': 'background: rgba(0,0,0,0.04);'
			},
			content: [

				/* История */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 1008px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'history',
													mix: [
														{ block: 'decorator', mods: { 'space-t': 'xxxxl', 'space-h': 'l', 'space-b': 'l' } },
														{ block: 'pt-list', mods: { view: 'default' } },
													],
													content: [
														{
															elem: 'header',
															mix: { block: 'decorator', mods: { 'space-b': 'xxl' } },
															content: [
																{
																	block: 'text',
																	mods: { size: 'xxxl', view: 'primary', weight: 'black' },
																	content: 'History'
																}
															]
														},
														{
															elem: 'content',
															content: [
																{
																	elem: 'section',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'xxl' } },
																	content: [
																		{
																			block: 'text',
																			mix: { block: 'decorator', mods: { 'space-b': 'm' } },
																			mods: { size: 'xl', view: 'primary', weight: 'black' },
																			content: 'Today'
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'l', 'distribute': 'between', 'vertical-align': 'center' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					mods: { 'vertical-align': 'center' },
																					mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
																					content: [
																						{
																							elem: 'icon',
																							elemMods: { 'indent-r': 's' },
																							mix: { block: 'brand-logo', mods: { name: 'tele2', size: 'xs' } }
																						},
																						{
																							elem: 'block',
																							mix: { block: 'text', mods: { view: 'primary', size: 'm', weight: 'semibold' } },
																							content: 'Tele2'
																						}
																					]
																				},
																				{
																					block: 'text',
																					mods: { size: 'm', view: 'primary', weight: 'semibold', align: 'right' },
																					content: '− 500 ₽'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'l', 'distribute': 'between', 'vertical-align': 'center' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					mods: { 'vertical-align': 'center' },
																					mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
																					content: [
																						{
																							elem: 'icon',
																							elemMods: { 'indent-r': 's' },
																							mix: { block: 'brand-logo', mods: { name: 'mts', size: 'xs' } }
																						},
																						{
																							elem: 'block',
																							mix: { block: 'text', mods: { view: 'primary', size: 'm', weight: 'semibold' } },
																							content: 'МТС'
																						}
																					]
																				},
																				{
																					block: 'text',
																					mods: { size: 'm', view: 'primary', weight: 'semibold', align: 'right' },
																					content: '− 420 ₽'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'l', 'distribute': 'between', 'vertical-align': 'center' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					mods: { 'vertical-align': 'center' },
																					mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
																					content: [
																						{
																							elem: 'icon',
																							elemMods: { 'indent-r': 's' },
																							mix: { block: 'brand-logo', mods: { name: 'itunes', size: 'xs' } }
																						},
																						{
																							elem: 'block',
																							mix: { block: 'text', mods: { view: 'primary', weight: 'semibold', size: 'm' } },
																							content: 'iTunes'
																						}
																					]
																				},
																				{
																					block: 'text',
																					mods: { size: 'm', view: 'primary', weight: 'semibold', align: 'right' },
																					content: '− 1 490 ₽'
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'section',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'xxl' } },
																	content: [
																		{
																			block: 'text',
																			mix: { block: 'decorator', mods: { 'space-b': 'm' } },
																			mods: { size: 'xl', view: 'primary', weight: 'black' },
																			content: '19 May'
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'l', 'distribute': 'between', 'vertical-align': 'center' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					mods: { 'vertical-align': 'center' },
																					mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
																					content: [
																						{
																							elem: 'icon',
																							elemMods: { 'indent-r': 's' },
																							mix: { block: 'brand-logo', mods: { name: 'mts', size: 'xs' } }
																						},
																						{
																							elem: 'block',
																							mix: { block: 'text', mods: { view: 'primary', size: 'm', weight: 'semibold' } },
																							content: 'МТС'
																						}
																					]
																				},
																				{
																					block: 'text',
																					mods: { size: 'm', view: 'primary', weight: 'semibold', align: 'right' },
																					content: '− 1 000 ₽'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'l', 'distribute': 'between', 'vertical-align': 'center' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					mods: { 'vertical-align': 'center' },
																					mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
																					content: [
																						{
																							elem: 'icon',
																							elemMods: { 'indent-r': 's' },
																							mix: { block: 'brand-logo', mods: { name: 'yota', size: 'xs' } }
																						},
																						{
																							elem: 'block',
																							mix: { block: 'text', mods: { view: 'primary', weight: 'semibold', size: 'm' } },
																							content: 'Yota'
																						}
																					]
																				},
																				{
																					block: 'text',
																					mods: { size: 'm', view: 'primary', weight: 'semibold', align: 'right' },
																					content: '− 360 ₽'
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				/* /История */

				/* Платежи */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 1008px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'payment',
													mods: { view: 'whole' },
													mix: { block: 'decorator', mods: { 'space-t': 'xxxxl', 'space-h': 'l', 'space-b': 'l' } },
													content: [
														{
															elem: 'header',
															mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
															content: [
																{
																	block: 'text',
																	mods: { size: 'xxxl', view: 'primary', weight: 'black' },
																	content: 'Steam Wallet'
																}
															]
														},
														{
															block: 'pt-form',
															mods: { view: 'default' },
															mix: { block: 'payment', elem: 'form' },
															content: [
																{
																	elem: 'item',
																	elemMods: { 'indent-b': 'xl' },
																	content: [
																		{
																			block: 'text', mods: { view: 'ghost', size: 's' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
																			content: 'Identifacation'
																		},
																		{
																			block: 'input',
																			mods: { theme: 'islands', width: 'available', size: 'l'},
																			val: '3023281048110009'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'indent-b': 'xl' },
																	content: [
																		{
																			block: 'text', mods: { view: 'ghost', size: 's' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
																			content: 'Number'
																		},
																		{
																			block: 'input',
																			mods: { theme: 'islands', width: 'available', size: 'l'},
																			val: '6-10'
																		}
																	]
																},
																{
																	elem: 'item',
																	elemMods: { 'indent-b': 'xxl' },
																	content: [
																		{
																			block: 'text', mods: { view: 'ghost', size: 's' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
																			content: 'Price'
																		},
																		{
																			block: 'input',
																			mods: { theme: 'islands', width: 'available', size: 'l'},
																			val: 'RUB'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: {
																		block: 'button',
																		mods: { theme: 'islands', width: 'full', size: 'l', view: 'action',  width: 'available' },
																		text: 'PAY'
																	}
																}
															]
														}
													]
												}
											]
										},

										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'payment',
													mods: { view: 'devided' },
													content: [
														{
															elem: 'header',
															mix: { block: 'decorator', mods: { 'space-t': 'xxxxl', 'space-h': 'l', 'space-b': 'l', 'indent-b': 'xs' } },
															content: [
																{
																	block: 'text',
																	mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
																	mods: { size: 'xxxl', view: 'primary', weight: 'black' },
																	content: 'Steam Wallet'
																},
																{
																	elem: 'info',
																	mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's', weight: 'bold' },
																			content: 'Information'
																		},
																		{
																			block: 'text',
																			mods: { view: 'link', size: 's', weight: 'semibold' },
																			content: 'Edit'
																		}
																	]
																},
																{
																	block: 'text',
																	mods: { view: 'primary', size: 's' },
																	content: 'To correct the previous steps, you can click edit'
																}
															]
														},
														{
															elem: 'methods',
															mix: { block: 'decorator', mods: { 'space-t': 'l', 'space-b': 'xl', 'space-h': 'l', 'indent-b': 'xs' } },
															content: [
																{
																	block: 'text',
																	mods: { view: 'primary', size: 'xl', weight: 'black' },
																	mix: { block: 'decorator', mods: { 'indent-b': 'm'} },
																	content: 'Payment method'
																},
																{
																	block: 'payment-methods',
																	mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
																	content: [
																		{
																			elem: 'item',
																			content: [
																				{
																					elem: 'item-header',
																					content: [
																						{
																							elem: 'name',
																							content: [
																								{
																									elem: 'radio',
																									elemMods: { view: 'default' }
																								},
																								{
																									block: 'text',
																									mods: { view: 'link', size: 's', weight: 'bold' },
																									content: 'Bank Card'
																								},
																							]
																						},
																						{
																							block: 'image',
																							mix: { block: 'payment-methods', elem: 'logo' },
																							url: '/assets/bem-starter-kit/mastercard_inverse.svg',
																							width: 30
																						}
																					]
																				}
																			]
																		},
																		{
																			elem: 'item',
																			content: [
																				{
																					elem: 'item-header',
																					content: [
																						{
																							elem: 'name',
																							content: [
																								{
																									elem: 'radio',
																									elemMods: { view: 'default' }
																								},
																								{
																									block: 'text',
																									mods: { view: 'link', size: 's', weight: 'bold' },
																									content: 'Yandex Money'
																								}
																							]
																						},
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 's', weight: 'semibold' },
																							content: '2 000 ₽'
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	block: 'text',
																	mods: { view: 'primary', weight: 'bold', size: 's' },
																	mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																	content: 'About'
																},
																{
																	block: 'text',
																	mods: { view: 'primary', size: 's' },
																	content: 'To the next time to pay it was more convenient, we will open a purse for you in Yandex. We can also tie a card.'
																}
															]
														},
														{
															elem: 'button',
															mix: { block: 'decorator', mods: { 'space-h': 'l', 'space-v': 'xl' } },
															content: [
																{
																	block: 'button',
																	mods: { theme: 'islands', width: 'full', size: 'l', view: 'action',  width: 'available' },
																	text: 'PAY 2 000 ₽',
																}
															]
														}
													]
												}
											]
										},

										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'payment',
													mods: { view: 'devided' },
													content: [
														{
															elem: 'header',
															mix: { block: 'decorator', mods: { 'space-t': 'xxxxl', 'space-h': 'l', 'space-b': 'l', 'indent-b': 'xs' } },
															content: [
																{
																	block: 'text',
																	mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
																	mods: { size: 'xxxl', view: 'primary', weight: 'black' },
																	content: 'Steam Wallet'
																},
																{
																	elem: 'info',
																	mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's', weight: 'bold' },
																			content: 'Information'
																		},
																		{
																			block: 'text',
																			mods: { view: 'link', size: 's', weight: 'semibold' },
																			content: 'Edit'
																		}
																	]
																},
																{
																	block: 'text',
																	mods: { view: 'primary', size: 's' },
																	content: 'To correct the previous steps, you can click edit'
																}
															]
														},
														{
															elem: 'methods',
															mix: { block: 'decorator', mods: { 'space-t': 'l', 'space-b': 'xl', 'space-h': 'l', 'indent-b': 'xs' } },
															content: [
																{
																	block: 'text',
																	mods: { view: 'primary', size: 'xl', weight: 'black' },
																	mix: { block: 'decorator', mods: { 'indent-b': 'm'} },
																	content: 'Payment method'
																},
																{
																	block: 'payment-methods',
																	mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
																	content: [
																		{
																			elem: 'item',
																			content: [
																				{
																					elem: 'item-header',
																					content: [
																						{
																							elem: 'name',
																							content: [
																								{
																									elem: 'radio',
																									elemMods: { view: 'default' }
																								},
																								{
																									block: 'text',
																									mods: { view: 'link', size: 's', weight: 'bold' },
																									content: 'Bank Card'
																								},
																							]
																						},
																						{
																							block: 'image',
																							mix: { block: 'payment-methods', elem: 'logo' },
																							url: '/assets/bem-starter-kit/mastercard_inverse.svg',
																							width: 30
																						}
																					]
																				}
																			]
																		},
																		{
																			elem: 'item',
																			elemMods: { view: 'brand' },
																			mix: [
																				{ block: 'theme', mods: { color: 'whitepaper-brand' }},
																				{ block: 'component', mods: { whitepaper: 'brand' }},
																			],
																			content: [
																				{
																					elem: 'item-header',
																					content: [
																						{
																							elem: 'name',
																							content: [
																								{
																									elem: 'radio',
																									elemMods: { view: 'checked' }
																								},
																								{
																									block: 'text',
																									mods: { view: 'primary', size: 's', weight: 'bold' },
																									content: 'Yandex Money'
																								},
																							]
																						},
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 's', weight: 'semibold' },
																							content: '2 000 ₽'
																						}
																					]
																				},
																				{
																					elem: 'content',
																					content: [
																						{
																							block: 'payment-methods', elem: 'user',
																							mix: { block: 'decorator', mods: { 'indent-b': 'xxs'} },
																							content: [
																								{
																									block: 'avatar',
																									mix: [
																										{ block: 'payment-methods', elem: 'avatar' },
																										{ block: 'decorator', mods: { 'indent-b': 's'}}
																									],
																									content: {
																										elem: 'photo',
																										elemMods: { size: 's'}
																									}
																								},
																								{
																									block: 'text',
																									mods: { view: 'primary', size: 's', weight: 'bold'},
																									content: 'Luke Appleyard'
																								},
																								{
																									block: 'text',
																									mods: { view: 'primary', size: 'xs', weight: 'light'},
																									content: 'Selected'
																								}
																							]
																						},
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 's', weight: 'semibold', align: 'right'},
																							content: 'Edit'
																						}
																					]
																				}
																			]
																		},
																	]
																},
																{
																	block: 'text',
																	mods: { view: 'primary', weight: 'bold', size: 's' },
																	mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																	content: 'About'
																},
																{
																	block: 'text',
																	mods: { view: 'primary', size: 's' },
																	content: 'To the next time to pay it was more convenient, we will open a purse for you in Yandex. We can also tie a card.'
																}
															]
														},
														{
															elem: 'button',
															mix: { block: 'decorator', mods: { 'space-h': 'l', 'space-v': 'xl' } },
															content: [
																{
																	block: 'button',
																	mods: { theme: 'islands', width: 'full', size: 'l', view: 'action',  width: 'available' },
																	text: 'PAY 2 000 ₽',
																}
															]
														}
													]
												}
											]
										},

										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'payment',
													mods: { view: 'devided' },
													content: [
														{
															elem: 'header',
															mix: { block: 'decorator', mods: { 'space-t': 'xxxxl', 'space-h': 'l', 'space-b': 'l', 'indent-b': 'xs' } },
															content: [
																{
																	block: 'text',
																	mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
																	mods: { size: 'xxxl', view: 'primary', weight: 'black' },
																	content: 'Steam Wallet'
																},
																{
																	elem: 'info',
																	mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's', weight: 'bold' },
																			content: 'Information'
																		},
																		{
																			block: 'text',
																			mods: { view: 'link', size: 's', weight: 'semibold' },
																			content: 'Edit'
																		}
																	]
																},
																{
																	block: 'text',
																	mods: { view: 'primary', size: 's' },
																	content: 'To correct the previous steps, you can click edit'
																}
															]
														},
														{
															elem: 'methods',
															mix: { block: 'decorator', mods: { 'space-t': 'l', 'space-b': 'xl', 'space-h': 'l', 'indent-b': 'xs' } },
															content: [
																{
																	block: 'text',
																	mods: { view: 'primary', size: 'xl', weight: 'black' },
																	mix: { block: 'decorator', mods: { 'indent-b': 'm'} },
																	content: 'Payment method'
																},
																{
																	block: 'payment-methods',
																	mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
																	content: [
																		{
																			block: 'payment-methods',
																			mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																			content: [
																				{
																					elem: 'item',
																					elemMods: { view: 'brand' },
																					mix: [
																						{ block: 'theme', mods: { color: 'whitepaper-brand' }},
																						{ block: 'component', mods: { whitepaper: 'brand' }},
																					],
																					content: [
																						{
																							elem: 'item-header',
																							content: [
																								{
																									elem: 'name',
																									content: [
																										{
																											elem: 'radio',
																											elemMods: { view: 'checked' }
																										},
																										{
																											block: 'text',
																											mods: { view: 'primary', size: 's', weight: 'bold' },
																											content: 'Bank Card'
																										},
																									]
																								},
																								{
																									block: 'image',
																									mix: { block: 'payment-methods', elem: 'logo' },
																									url: '/assets/bem-starter-kit/mastercard.svg',
																									width: 30
																								}
																							]
																						},
																						{
																							elem: 'content',
																							content: [
																								{
																									block: 'input',
																									mods: { theme: 'islands', width: 'available', size: 'xl'},
																									mix: { block: 'decorator', mods: { 'indent-v': 'l'}},
																									placeholder: 'Card number'
																								},
																								{
																									elem: 'card-info',
																									mix: { block: 'decorator', mods: { 'indent-b': 's'}},
																									content: [
																										{
																											block: 'input',
																											mods: { theme: 'islands', size: 'xl'},
																											mix: { block: 'decorator', mods: { 'indent-r': 's'}},
																											placeholder: 'MM'
																										},
																										{
																											block: 'text',
																											mods: { view: 'primary', size: 'm' },
																											mix: { block: 'decorator', mods: { 'indent-r': 's'}},
																											content: '/'
																										},
																										{
																											block: 'input',
																											mods: { theme: 'islands', size: 'xl'},
																											mix: { block: 'decorator', mods: { 'indent-r': 's'}},
																											placeholder: 'YR'
																										},
																										{
																											block: 'input',
																											mods: { theme: 'islands', size: 'xl'},
																											attrs: { style: 'align-self: flex-end'},
																											placeholder: 'CVV'
																										}
																									]
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'item',
																					content: [
																						{
																							elem: 'item-header',
																							content: [
																								{
																									elem: 'name',
																									content: [
																										{
																											elem: 'radio',
																											elemMods: { view: 'default' }
																										},
																										{
																											block: 'text',
																											mods: { view: 'link', size: 's', weight: 'bold' },
																											content: 'Yandex Money'
																										}
																									]
																								},
																								{
																									block: 'text',
																									mods: { view: 'primary', size: 's', weight: 'semibold' },
																									content: '2 000 ₽'
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
																	block: 'text',
																	mods: { view: 'primary', weight: 'bold', size: 's' },
																	mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																	content: 'About'
																},
																{
																	block: 'text',
																	mods: { view: 'primary', size: 's' },
																	content: 'To the next time to pay it was more convenient, we will open a purse for you in Yandex. We can also tie a card.'
																}
															]
														},
														{
															elem: 'button',
															mix: { block: 'decorator', mods: { 'space-h': 'l', 'space-v': 'xl' } },
															content: [
																{
																	block: 'button',
																	mods: { theme: 'islands', width: 'full', size: 'l', view: 'action',  width: 'available' },
																	text: 'PAY 2 000 ₽',
																}
															]
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				/* /Платежи */

				/* Медиа */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 1008px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'digital-item',
													mix: { block: 'pt-card', mods: { view: 'default' } },
													content: [
														{
															elem: 'cover',
															mix: { block: 'pt-card', elem: 'content' },
															content: [
																{
																	block: 'image',
																	mix: { block: 'pt-card', elem: 'image', elemMods: { size: 'cover' } },
																	url: '/assets/bem-starter-kit/uncharted_horizontal.jpg'
																}
															]
														},
														{
															elem: 'info',
															mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xl' } },
															content: [
																{
																	elem: 'wrap',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', 'size': 'xxl', align: 'center', weight: 'black' },
																			content: 'Uncharted 4'
																		},
																		{
																			block: 'text',
																			mods: { view: 'ghost', 'size': 'm', align: 'center' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'xxl' } },
																			content: 'from Nauchty Dog'
																		},
																		{
																			block: 'text',
																			mods: { view: 'link', 'size': 'xxxl', align: 'center', weight: 'black' },
																			content: '$129'
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
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'digital-product',
													content: [
														{
															elem: 'cover',
															mix: { block: 'decorator', mods: { 'indent-b': 'xxl' } },
															content: [
																{
																	block: 'image',
																	url: '/assets/bem-starter-kit/uncharted_vertical.jpg'
																}
															]
														},
														{
															elem: 'content',
															mix: { block: 'decorator', mods: { 'indent-h': 'l', 'space-b': 'l' } },
															content: [
																{
																	elem: 'info',
																	mix: { block: 'decorator', mods: { 'indent-b': 'xxl' } },
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'xxxl', weight: 'black' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
																			content: 'Uncharted 4'
																		},
																		{
																			block: 'text',
																			mods: { view: 'link', size: 'm' },
																			mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																			content: 'from Nauchty Dog'
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
																			content: 'Uncharted 4: A Thiefs End is an action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment for PlayStation 4 in May 2016.'
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's', weight: 'bold' },
																			mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																			content: 'Information'
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's' },
																			content: 'The key for activation of the game can be used only in the territory of the countries: the Russian Federation, the Republic of Armenia, the Republic of Azerbaijan, the Republic of Belarus, Georgia'
																		}
																	]
																},
																{
																	elem: 'buy',
																	mix: { block: 'decorator', mods: { 'indent-b': 'xxl' } },
																	content: [
																		{
																			block: 'text',
																			mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																			mods: { size: 'xl', view: 'primary', weight: 'black' },
																			content: 'Buy'
																		},
																		{
																			block: 'payment-methods',
																			content: [
																				{
																					elem: 'item',
																					content: [
																						{
																							elem: 'item-header',
																							content: [
																								{
																									elem: 'name',
																									content: [
																										{
																											elem: 'radio',
																											elemMods: { view: 'default' }
																										},
																										{
																											block: 'text',
																											mods: { view: 'primary', size: 's', weight: 'bold' },
																											content: 'Sony Games'
																										},
																									]
																								},
																								{
																									block: 'text',
																									mods: { view: 'link', size: 's', weight: 'bold' },
																									content: '$129'
																								},
																							]
																						}
																					]
																				},
																				{
																					elem: 'item',
																					content: [
																						{
																							elem: 'item-header',
																							content: [
																								{
																									elem: 'name',
																									content: [
																										{
																											elem: 'radio',
																											elemMods: { view: 'default' }
																										},
																										{
																											block: 'text',
																											mods: { view: 'primary', size: 's', weight: 'bold' },
																											content: 'Yandex Store'
																										}
																									]
																								},
																								{
																									block: 'text',
																									mods: { view: 'link', size: 's', weight: 'bold' },
																									content: '$99'
																								},
																							]
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'tags',
																	content: [
																		{
																			elem: 'title',
																			mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
																			content: [
																				{
																					block: 'text',
																					mods: { view: 'primary', size: 'xl', weight: 'black' },
																					content: 'Tags'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					mods: { 'vertical-align': 'center' },
																					content: [
																						{
																							elem: 'icon',
																							elemMods: { 'indent-r': 's' },
																							mix: { block: 'icon-circle' },
																							content: {
																								block: 'icon',
																								mods: { name: 'marker', size: 's', view: 'primary' }
																							}
																						},
																						{
																							elem: 'block',
																							content: [
																								{
																									block: 'text',
																									mods: { size: 's', weight: 'light', display: 'inline' },
																									content: '10 November'
																								}
																							]
																						}
																					]
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					mods: { 'vertical-align': 'center' },
																					content: [
																						{
																							elem: 'icon',
																							elemMods: { 'indent-r': 's' },
																							mix: { block: 'icon-circle' },
																						},
																						{
																							elem: 'block',
																							content: [
																								{
																									block: 'text',
																									mods: { size: 's', weight: 'light', display: 'inline' },
																									content: 'Pegi 18'
																								}
																							]
																						}
																					]
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					mods: { 'vertical-align': 'center' },
																					mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
																					content: [
																						{
																							elem: 'icon',
																							elemMods: { 'indent-r': 's' },
																							mix: { block: 'icon-circle' },
																						},
																						{
																							elem: 'block',
																							content: [
																								{
																									block: 'text',
																									mods: { size: 's', weight: 'light', display: 'inline' },
																									content: 'Sony Enterteiment'
																								}
																							]
																						}
																					]
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				/* /Медиа */

				/* Музыка */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 1008px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'play-list',
													mix: [
														{ block: 'pt-card', mods: { view: 'default' } },
														{ block: 'decorator', mods: { 'space-a': 'l' }}
													],
													content: [
														{
															elem: 'header',
															content: [
																{
																	block: 'pt-icon-plus',
																	mods: { 'vertical-align': 'bottom' },
																	content: [
																		{
																			elem: 'icon',
																			mix: { block: 'playlist-cover', mods: { size: 'big' } },
																			elemMods: { 'indent-r': 'l' },
																			content: {
																				block: 'image',
																				url: '/assets/bem-starter-kit/music-playlist.png',
																				width: 100
																			}
																		},
																		{
																			elem: 'block',
																			content: [
																				{
																					block: 'text',
																					mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																					mods: { view: 'primary', size: 'xl', weight: 'black' },
																					content: "Pitchfork's Best New Music"
																				},
																				{
																					block: 'text',
																					mods: { view: 'link', size: 's', weight: 'semibold', style: 'italic' },
																					content: 'Pitchfork'
																				}
																			]
																		}
																	]
																}
															]
														},
														{
															block: 'text',
															mix: { block: 'decorator', mods: { 'indent-v': 'm' } },
															mods: { view: 'primary', size: 'xs' },
															content: 'Here’s a shining example of an Inspired By playlist based around an album. With Kanye West performing his melancholy, Auto-Tune–heavy 2008 album in full lately, it’s worth taking a look at its influence on Drake, Lorde, the xx, and Raury.'
														},
														{
															elem: 'playlist',
															mix: { block: 'pt-list' },
															content : [

															// TRACK-1
																{
																	elem: 'track',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'between', 'vertical-align': 'center', 'space-v': 'xs' } },
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'bottom' },
																			content: [
																				{
																					elem: 'icon',
																					mix: { block: 'playlist-cover', mods: { size: 'small' } },
																					elemMods: { 'indent-r': 's' },
																					content: {
																						block: 'image',
																						url: '/assets/bem-starter-kit/music-album-cover.png',
																						width: 32
																					}
																				},
																				{
																					elem: 'block',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 's', weight: 'semibold' },
																							content: 'London'
																						},
																						{
																							block: 'text',
																							mods: { view: 'secondary', size: 'xs' },
																							content: 'Benjamin Clementine • At Least for Now'
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'ghost', size: 's' },
																			content: '4:20'
																		}
																	]
																},

															// TRACK-2
																{
																	elem: 'track',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'between', 'vertical-align': 'center', 'space-v': 'xs' } },
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'bottom' },
																			content: [
																				{
																					elem: 'icon',
																					mix: { block: 'playlist-cover', mods: { size: 'small' } },
																					elemMods: { 'indent-r': 's' },
																					content: {
																						block: 'image',
																						url: '/assets/bem-starter-kit/music-album-cover.png',
																						width: 32
																					}
																				},
																				{
																					elem: 'block',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 's', weight: 'semibold' },
																							content: 'London'
																						},
																						{
																							block: 'text',
																							mods: { view: 'secondary', size: 'xs' },
																							content: 'Benjamin Clementine • At Least for Now'
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'ghost', size: 's' },
																			content: '4:20'
																		}
																	]
																},
																{
																	elem: 'track',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'between', 'vertical-align': 'center', 'space-v': 'xs' } },
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'bottom' },
																			content: [
																				{
																					elem: 'icon',
																					mix: { block: 'playlist-cover', mods: { size: 'small' } },
																					elemMods: { 'indent-r': 's' },
																					content: {
																						block: 'image',
																						url: '/assets/bem-starter-kit/music-album-cover.png',
																						width: 32
																					}
																				},
																				{
																					elem: 'block',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 's', weight: 'semibold' },
																							content: 'London',
																						},
																						{
																							block: 'text',
																							mods: { view: 'secondary', size: 'xs' },
																							content: 'Benjamin Clementine • At Least for Now'
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'ghost', size: 's' },
																			content: '4:20'
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
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'album',
													mix: { block: 'decorator', mods: { 'space-a': 'l' } },
													content: [
														{
															elem: 'info',
															content: [
																{
																	block: 'image',
																	mix: [
																		{ block: 'decorator', mods: { 'indent-h': 'auto', 'indent-b': 'xs' } },
																		{ block: 'playlist-cover', mods: { size: 'big' } }
																	],
																	url: '/assets/bem-starter-kit/music-album-cover.png',
																	width: 100
																},
																{
																	block: 'text',
																	mods: { view: 'primary', size: 'xxl', weight: 'black', align: 'center' },
																	content: 'Damn'
																},
																{
																	block: 'text',
																	mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
																	mods: { view: 'link', size: 'm', weight: 'semibold', align: 'center' },
																	content: 'Kendrick Lamar'
																},
																{
																	block: 'button',
																	mods: { theme: 'islands', size: 's', view: 'action' },
																	text: 'Shuffle'
																}
															]
														},
														{
															elem: 'playlist',
															mix: { block: 'pt-list' },
															content : [
																{
																	elem: 'track',
																	mix: [
																		{ block: 'decorator', mods: { 'indent-t': 's' } },
																		{ block: 'pt-list', elem: 'item', elemMods: { distribute: 'between', 'vertical-align': 'center', 'space-v': 'xs' } }
																	],
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'bottom' },
																			content: [
																				{
																					elem: 'icon',
																					mix: { block: 'playlist-cover', mods: { size: 'small' } },
																					elemMods: { 'indent-r': 's' },
																					content: {
																						block: 'image',
																						url: '/assets/bem-starter-kit/music-album-cover.png',
																						width: 32
																					}
																				},
																				{
																					elem: 'block',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 's', weight: 'semibold' },
																							content: 'London'
																						},
																						{
																							block: 'text',
																							mods: { view: 'secondary', size: 'xs' },
																							content: 'Benjamin Clementine • At Least for Now'
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'ghost', size: 's' },
																			content: '4:20'
																		}
																	]
																},
																{
																	elem: 'track',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'between', 'vertical-align': 'center', 'space-v': 'xs' } },
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'bottom' },
																			content: [
																				{
																					elem: 'icon',
																					mix: { block: 'playlist-cover', mods: { size: 'small' } },
																					elemMods: { 'indent-r': 's' },
																					content: {
																						block: 'image',
																						url: '/assets/bem-starter-kit/music-album-cover.png',
																						width: 32
																					}
																				},
																				{
																					elem: 'block',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 's', weight: 'semibold' },
																							content: 'London'
																						},
																						{
																							block: 'text',
																							mods: { view: 'secondary', size: 'xs' },
																							content: 'Benjamin Clementine • At Least for Now'
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'ghost', size: 's' },
																			content: '4:20'
																		}
																	]
																},
																{
																	elem: 'track',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'between', 'vertical-align': 'center', 'space-v': 'xs' } },
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'bottom' },
																			content: [
																				{
																					elem: 'icon',
																					mix: { block: 'playlist-cover', mods: { size: 'small' } },
																					elemMods: { 'indent-r': 's' },
																					content: {
																						block: 'image',
																						url: '/assets/bem-starter-kit/music-album-cover.png',
																						width: 32
																					}
																				},
																				{
																					elem: 'block',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 's', weight: 'semibold' },
																							content: 'London'
																						},
																						{
																							block: 'text',
																							mods: { view: 'secondary', size: 'xs' },
																							content: 'Benjamin Clementine • At Least for Now'
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'ghost', size: 's' },
																			content: '4:20'
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
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'track',
													mix: { block: 'pt-card', mods: { view: 'default' } },
													content: [
														{
															elem: 'about',
															mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-h': 'xxl', 'space-t': 'xl' } },
															content: [
																{
																	block: 'image',
																	mix: { block: 'playlist-cover', mods: { size: 'big' } },
																	url: '/assets/bem-starter-kit/music-album-cover.png'
																},
																{
																	block: 'text',
																	mix: { block: 'decorator', mods: { 'indent-t': 'xxl' } },
																	mods: { view: 'primary', size: 'xl', weight: 'black' },
																	content: 'All Down Hill From Here'
																},
																{
																	block: 'text',
																	mods: { view: 'link', size: 'm', weight: 'semibold' },
																	content: 'Kendrick Lamar • DAMN.'
																},
															]
														},
														{
															elem: 'controls',
															mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xl'} },
															content: [
																{
															    block: 'progressbar',
															    mods: { theme: 'islands' },
															    val: 25
																},
																{
																	elem: 'buttons',
																	content: [
																		{
																			block: 'icon',
																			mods: { name: 'previous', size: 's', view: 'primary' }
																		},
																		{
																			block: 'icon',
																			mods: { name: 'play', size: 's', view: 'primary' }
																		},
																		{
																			block: 'icon',
																			mods: { name: 'next', size: 's', view: 'primary' }
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				/* /Музыка */

				/* Друзья */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 1008px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'friendlist',
													mix: [
														{ block: 'pt-list', mods: { view: 'default' } },
														{ block: 'decorator', mods: { 'space-a': 'l' } }
													],
													content: [
														{
															elem: 'group',
															mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'default', 'space-v': 's'} },
															content: [
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'avatar',
																			mix: [{ block: 'avatar' }, { block: 'decorator', mods: { 'indent-b': 'xs' } } ],
																			content: [
																				{
																					block: 'avatar',
																					elem: 'photo',
																					elemMods: { size: 'l' },
																					content: {
																						tag: 'img',
																						attrs: { src: '/assets/bem-starter-kit/ava1.png' }
																					}
																				},
																				{
																					elem: 'status',
																					elemMods: { view: 'online' }
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { size: 'xs', view: 'primary', weight: 'semibold' },
																			content: 'Joe Shoester'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'avatar',
																			mix: [{ block: 'avatar' }, { block: 'decorator', mods: { 'indent-b': 'xs' } } ],
																			content: [
																				{
																					block: 'avatar',
																					elem: 'photo',
																					elemMods: { size: 'l'},
																					content: {
																						tag: 'img',
																						attrs: { src: '/assets/bem-starter-kit/ava7.png' }
																					}
																				},
																				{
																					elem: 'status',
																					elemMods: { view: 'online' }
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { size: 'xs', view: 'primary', weight: 'semibold' },
																			content: 'Amanda Davis'
																		}
																	]
																}
															]
														},
														{
															elem: 'group',
															mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'default', 'space-v': 's'} },
															content: [
																{
																	elem: 'letter',
																	mix: [
																		{ block: 'text', mods: { view: 'primary', size: 'xl', weight: 'black' } },
																		{ block: 'decorator', mods: { 'indent-b': 'xs', 'space-l': 'xs' } }
																	],
																	content: 'A'
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'avatar',
																			mix: [{ block: 'avatar' }, { block: 'decorator', mods: { 'indent-b': 'xs' } } ],
																			content: [
																				{
																					block: 'avatar',
																					elem: 'photo',
																					elemMods: { size: 'l'},
																					content: {
																						tag: 'img',
																						attrs: { src: '/assets/bem-starter-kit/ava2.png' }
																					}
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { size: 'xs', view: 'primary', weight: 'semibold' },
																			content: 'Kevin Abrams'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'avatar',
																			mix: [{ block: 'avatar' }, { block: 'decorator', mods: { 'indent-b': 'xs' } } ],
																			content: [
																				{
																					block: 'avatar',
																					elem: 'photo',
																					elemMods: { size: 'l'},
																					content: {
																						tag: 'img',
																						attrs: { src: '/assets/bem-starter-kit/ava3.png' }
																					}
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { size: 'xs', view: 'primary', weight: 'semibold' },
																			content: 'Mary Alabama'
																		}
																	]
																}
															]
														},
														{
															elem: 'group',
															mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'default', 'space-v': 's'} },
															content: [
																{
																	elem: 'letter',
																	mix: [
																		{ block: 'text', mods: { view: 'primary', size: 'xl', weight: 'black' } },
																		{ block: 'decorator', mods: { 'indent-b': 'xs', 'space-l': 'xs' } }
																	],
																	content: 'B'
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'avatar',
																			mix: [{ block: 'avatar' }, { block: 'decorator', mods: { 'indent-b': 'xs' } } ],
																			content: [
																				{
																					block: 'avatar',
																					elem: 'photo',
																					elemMods: { size: 'l'},
																					content: {
																						tag: 'img',
																						attrs: { src: '/assets/bem-starter-kit/ava4.png' }
																					}
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { size: 'xs', view: 'primary', weight: 'semibold' },
																			content: 'Bob Billigan'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'avatar',
																			mix: [{ block: 'avatar' }, { block: 'decorator', mods: { 'indent-b': 'xs' } } ],
																			content: [
																				{
																					block: 'avatar',
																					elem: 'photo',
																					elemMods: { size: 'l'},
																					content: {
																						tag: 'img',
																						attrs: { src: '/assets/bem-starter-kit/ava5.png' }
																					}
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { size: 'xs', view: 'primary', weight: 'semibold' },
																			content: 'David Bell'
																		}
																	]
																},
																{
																	elem: 'item',
																	mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
																	content: [
																		{
																			elem: 'avatar',
																			mix: [{ block: 'avatar' }, { block: 'decorator', mods: { 'indent-b': 'xs' } } ],
																			content: [
																				{
																					block: 'avatar',
																					elem: 'photo',
																					elemMods: { size: 'l'},
																					content: {
																						tag: 'img',
																						attrs: { src: '/assets/bem-starter-kit/ava6.png' }
																					}
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { size: 'xs', view: 'primary', weight: 'semibold' },
																			content: 'Brother'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'avatar',
																			mix: [{ block: 'avatar' }, { block: 'decorator', mods: { 'indent-b': 'xs' } } ],
																			content: [
																				{
																					block: 'avatar',
																					elem: 'photo',
																					elemMods: { size: 'l'},
																					content: {
																						tag: 'img',
																						attrs: { src: '/assets/bem-starter-kit/ava8.png' }
																					}
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { size: 'xs', view: 'primary' },
																			content: 'Kate Black'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'avatar',
																			mix: [{ block: 'avatar' }, { block: 'decorator', mods: { 'indent-b': 'xs' } } ],
																			content: [
																				{
																					block: 'avatar',
																					elem: 'photo',
																					elemMods: { size: 'l'},
																					content: {
																						tag: 'img',
																						attrs: { src: '/assets/bem-starter-kit/ava9.png' }
																					}
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { size: 'xs', view: 'primary' },
																			content: 'Steven Beningthon'
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
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'activities',
													attrs: { style: 'height: 456px; overflow: hidden;'},
													mix: [
														{ block: 'pt-list', mods: { view: 'default' } },
														{ block: 'decorator', mods: { 'space-a': 'l' } },
													],
													content: [
														{
															elem: 'item',
															mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'default', 'space-v': 's' }},
															content: [
																{
																	elem: 'avatar',
																	mix: [
																		{ block: 'avatar' },
																		{ block: 'decorator', mods: { 'indent-r': 's'}}
																	],
																	content: [
																		{
																			block: 'avatar',
																			elem: 'photo',
																			elemMods: { size: 's'},
																			content: {
																				block: 'activities',
																				elem: 'avatar-img',
																				tag: 'img',
																				attrs: { src: '/assets/bem-starter-kit/ava6.png' }
																			}
																		}
																	]
																},
																{
																	elem: 'block',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's' },
																			content: 'Tony Montana added 5 photos to group "Work and Travel"'
																		},
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'xs' },
																			content: 'Tuesday 9:32 PM'
																		}
																	]
																}
															]
														},
														{
															elem: 'item',
															mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'default', 'space-v': 's' }},
															content: [
																{
																	elem: 'avatar',
																	mix: [
																		{ block: 'avatar' },
																		{ block: 'decorator', mods: { 'indent-r': 's'}}
																	],
																	content: [
																		{
																			block: 'avatar',
																			elem: 'photo',
																			elemMods: { size: 's'},
																			content: {
																				block: 'activities',
																				elem: 'avatar-img',
																				tag: 'img',
																				attrs: { src: '/assets/bem-starter-kit/ava7.png' }
																			}
																		}
																	]
																},
																{
																	elem: 'block',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's' },
																			content: 'Tony Montana added 5 photos to group "Work and Travel"'
																		},
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'xs' },
																			content: 'Tuesday 9:32 PM'
																		}
																	]
																}
															]
														},
														{
															elem: 'item',
															mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'default', 'space-v': 's' }},
															content: [
																{
																	elem: 'avatar',
																	mix: [
																		{ block: 'avatar' },
																		{ block: 'decorator', mods: { 'indent-r': 's'}}
																	],
																	content: [
																		{
																			block: 'avatar',
																			elem: 'photo',
																			elemMods: { size: 's'},
																			content: {
																				block: 'activities',
																				elem: 'avatar-img',
																				tag: 'img',
																				attrs: { src: '/assets/bem-starter-kit/ava9.png' }
																			}
																		}
																	]
																},
																{
																	elem: 'block',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's' },
																			content: 'Jo Han added Annie Star to friends'
																		},
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'xs' },
																			content: 'Tuesday 9:32 PM'
																		}
																	]
																}
															]
														},
														{
															elem: 'item',
															mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'default', 'space-v': 's' }},
															content: [
																{
																	elem: 'avatar',
																	mix: [
																		{ block: 'avatar' },
																		{ block: 'decorator', mods: { 'indent-r': 's'}}
																	],
																	content: [
																		{
																			block: 'avatar',
																			elem: 'photo',
																			elemMods: { size: 's'},
																			content: {
																				block: 'activities',
																				elem: 'avatar-img',
																				tag: 'img',
																				attrs: { src: '/assets/bem-starter-kit/ava6.png' }
																			}
																		}
																	]
																},
																{
																	elem: 'block',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's' },
																			content: 'Tony Montana added 5 photos to group "Work and Travel"'
																		},
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'xs' },
																			content: 'Tuesday 9:32 PM'
																		}
																	]
																}
															]
														},
														{
															elem: 'item',
															mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'default', 'space-v': 's' }},
															content: [
																{
																	elem: 'avatar',
																	mix: [
																		{ block: 'avatar' },
																		{ block: 'decorator', mods: { 'indent-r': 's'}}
																	],
																	content: [
																		{
																			block: 'avatar',
																			elem: 'photo',
																			elemMods: { size: 's'},
																			content: {
																				block: 'activities',
																				elem: 'avatar-img',
																				tag: 'img',
																				attrs: { src: '/assets/bem-starter-kit/ava4.png' }
																			}
																		}
																	]
																},
																{
																	elem: 'block',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's' },
																			content: 'Albert Godfrey changed hos status'
																		},
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'xs' },
																			content: 'Tuesday 9:32 PM'
																		}
																	]
																}
															]
														},
														{
															elem: 'item',
															mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'default', 'space-v': 's' }},
															content: [
																{
																	elem: 'avatar',
																	mix: [
																		{ block: 'avatar' },
																		{ block: 'decorator', mods: { 'indent-r': 's'}}
																	],
																	content: [
																		{
																			block: 'avatar',
																			elem: 'photo',
																			elemMods: { size: 's'},
																			content: {
																				block: 'activities',
																				elem: 'avatar-img',
																				tag: 'img',
																				attrs: { src: '/assets/bem-starter-kit/ava4.png' }
																			}
																		}
																	]
																},
																{
																	elem: 'block',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's' },
																			content: 'Albert Godfrey added 5 photos to group "Work and Travel"'
																		},
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'xs' },
																			content: 'Tuesday 9:32 PM'
																		}
																	]
																}
															]
														},
														{
															elem: 'item',
															mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'default', 'space-v': 's' }},
															content: [
																{
																	elem: 'avatar',
																	mix: [
																		{ block: 'avatar' },
																		{ block: 'decorator', mods: { 'indent-r': 's'}}
																	],
																	content: [
																		{
																			block: 'avatar',
																			elem: 'photo',
																			elemMods: { size: 's'},
																			content: {
																				block: 'activities',
																				elem: 'avatar-img',
																				tag: 'img',
																				attrs: { src: '/assets/bem-starter-kit/ava4.png' }
																			}
																		}
																	]
																},
																{
																	elem: 'block',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's' },
																			content: 'Tony Montana added 5 photos to group "Work and Travel"'
																		},
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'xs' },
																			content: 'Tuesday 9:32 PM'
																		}
																	]
																}
															]
														},
														{
															elem: 'item',
															mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'default', 'space-v': 's' }},
															content: [
																{
																	elem: 'avatar',
																	mix: [
																		{ block: 'avatar' },
																		{ block: 'decorator', mods: { 'indent-r': 's'}}
																	],
																	content: [
																		{
																			block: 'avatar',
																			elem: 'photo',
																			elemMods: { size: 's'},
																			content: {
																				block: 'activities',
																				elem: 'avatar-img',
																				tag: 'img',
																				attrs: { src: '/assets/bem-starter-kit/ava8.png' }
																			}
																		}
																	]
																},
																{
																	elem: 'block',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's' },
																			content: 'Tony Montana added 5 photos to group "Work and Travel"'
																		},
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'xs' },
																			content: 'Tuesday 9:32 PM'
																		}
																	]
																}
															]
														},
														{
															elem: 'item',
															mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'default', 'space-v': 's' }},
															content: [
																{
																	elem: 'avatar',
																	mix: [
																		{ block: 'avatar' },
																		{ block: 'decorator', mods: { 'indent-r': 's'}}
																	],
																	content: [
																		{
																			block: 'avatar',
																			elem: 'photo',
																			elemMods: { size: 's'},
																			content: {
																				block: 'activities',
																				elem: 'avatar-img',
																				tag: 'img',
																				attrs: { src: '/assets/bem-starter-kit/ava5.png' }
																			}
																		}
																	]
																},
																{
																	elem: 'block',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's' },
																			content: 'Tony Montana added 5 photos to group "Work and Travel"'
																		},
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'xs' },
																			content: 'Tuesday 9:32 PM'
																		}
																	]
																}
															]
														},
														{
															elem: 'item',
															mix: { block: 'pt-list', elem: 'item', elemMods: { distribute: 'default', 'space-a': 's' }},
															content: [
																{
																	elem: 'avatar',
																	mix: [
																		{ block: 'avatar' },
																		{ block: 'decorator', mods: { 'indent-r': 's'}}
																	],
																	content: [
																		{
																			block: 'avatar',
																			elem: 'photo',
																			elemMods: { size: 's'},
																			content: {
																				block: 'activities',
																				elem: 'avatar-img',
																				tag: 'img',
																				attrs: { src: '/assets/bem-starter-kit/ava3.png' }
																			}
																		}
																	]
																},
																{
																	elem: 'block',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's' },
																			content: 'Tony Montana added 5 photos to group "Work and Travel"'
																		},
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'xs' },
																			content: 'Tuesday 9:32 PM'
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				/* /Друзья */

				/* Событие */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 1008px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'meetup',
													mix: { block: 'pt-list', mods: { 'view': 'ghost' } },
													content: [
														{
															elem: 'photo',
															content: [
																{
																	block: 'image',
																	width: 320,
																	url: '../../../../assets/bem-starter-kit/subzero-cover.png',
																}
															]
														},
														{
															elem: 'description',
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-brand' }},
																{ block: 'component', mods: { whitepaper: 'brand' }},
																{ block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'l' } },
															],
															content: [
																{
																	elem: 'name',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'xxs', distribute: 'between' } },
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'xl', weight: 'black' },
																			content: 'Subzero!'
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'xl', weight: 'black' },
																			content: '4.5'
																		}
																	]
																},
																{
																	elem: 'rating',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'xl', distribute: 'between' } },
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'm', weight: 'semibold' },
																			content: 'Cafe'
																		},
																		{
																			block: 'text',
																			mods: { view: 'secondary', size: 'm', weight: 'semibold' },
																			content: '324 reviews'
																		}
																	]
																},
																{
																	elem: 'action',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm', distribute: 'between' } },
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's' },
																			content: 'Get directions'
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's' },
																			content: 'Call'
																		}
																	]
																}
															]
														},
														{
															elem: 'feedback',
															mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'l', 'indent-b': 'xs' } },
															content: [
																{
																	block: 'text',
																	mods: { view: 'primary', size: 's', weight: 'bold' },
																	content: 'Broun Andvild'
																},
																{
																	block: 'text',
																	mods: { view: 'ghost', size: 's' },
																	mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																	content: '5h ago'
																},
																{
																	block: 'text',
																	mods: { view: 'primary', size: 's' },
																	content: 'Just visited the best beach for surfing. The waves are awesome.'
																}
															]
														},
														{
															elem: 'info',
															mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'l', 'indent-b': 's' } },
															content: [
																{
																	elem: 'title',
																	mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'xl', weight: 'bold' },
																			content: 'Information'
																		}
																	]
																},
																{
																	elem: 'item',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
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
																							block: 'icon',
																							mods: { name: 'arrow-left', size: 's', view: 'primary' }
																						}
																					]
																				},
																				{
																					block: 'content',
																					content: [
																						{
																							block: 'text',
																							mods: { size: 'm', weight: 'light', display: 'inline' },
																							content: 'Kaigandori, Naka-ku 23 Japan, Kanaga Prefecture'
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'item',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'center' },
																			mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
																			content: [
																				{
																					elem: 'icon',
																					elemMods: { 'indent-r': 's' },
																					content: [
																						{
																							block: 'icon',
																							mods: { name: 'arrow-left', size: 's', view: 'primary' }
																						}
																					]
																				},
																				{
																					block: 'content',
																					content: [
																						{
																							block: 'text',
																							mods: { size: 'm', weight: 'light', display: 'inline' },
																							content: '81 45-662-1099'
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'item',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'center' },
																			mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
																			content: [
																				{
																					elem: 'icon',
																					elemMods: { 'indent-r': 's' },
																					content: [
																						{
																							block: 'icon',
																							mods: { name: 'arrow-left', size: 's', view: 'primary' }
																						}
																					]
																				},
																				{
																					block: 'content',
																					content: [
																						{
																							block: 'text',
																							mods: { size: 'm', weight: 'light', display: 'inline' },
																							content: 'www.subzero.com'
																						}
																					]
																				}
																			]
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
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'place',
													mix: { block: 'pt-list', mods: { 'view': 'ghost' } },
													content: [
														{
															elem: 'description',
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-brand' }},
																{ block: 'component', mods: { whitepaper: 'brand' }},
																{ block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'l' }},
															],
															content: [
																{
																	elem: 'date',
																	mix: [ { block: 'text', mods: { size: 's', view: 'primary' } } ],
																	content: '27 may'
																},
																{
																	elem: 'type',
																	mix: [ { block: 'text', mods: { size: 'm', view: 'primary', weight: 'bold' } },  { block: 'decorator', mods: { 'indent-b': 'xs' } } ],
																	content: 'Event'
																},
																{
																	elem: 'event',
																	mix: [ { block: 'text', mods: { size: 'xxl', view: 'primary', weight: 'bold' } }, { block: 'decorator', mods: { 'indent-b': 's' } } ],
																	content: '3rd Annual Innate Killer Summit'
																},
																{
																	elem: 'type',
																	mix: [ { block: 'text', mods: { size: 's', view: 'primary' } }, { block: 'decorator', mods: { 'indent-b': 'm' } } ],
																	content: 'Gary Tatinashvily Gallery'
																},
																{
																	block: 'avatar',
																	content: [
																		{
																			elem: 'photo',
																			elemMods: { size: 's' }
																		}
																	]
																}
															]
														},
														{
															elem: 'feedback',
															mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'l', 'indent-b': 'xs' } },
															content: [
																{
																	block: 'text',
																	mods: { view: 'primary', size: 's', weight: 'bold' },
																	mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																	content: 'Information'
																},
																{
																	block: 'text',
																	mods: { view: 'primary', size: 's' },
																	content: 'Just visited the best beach for surfing. The waves are awesome.'
																}
															]
														},
														{
															elem: 'info',
															mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'l' } },
															content: [
																{
																	elem: 'item',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
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
																							block: 'icon',
																							mods: { name: 'arrow-left', size: 's', view: 'primary' }
																						}
																					]
																				},
																				{
																					block: 'content',
																					content: [
																						{
																							block: 'text',
																							mods: { size: 'm', weight: 'light', display: 'inline' },
																							content: 'Kaigandori, Naka-ku 23 Japan, Kanaga Prefecture'
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'item',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'center' },
																			mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
																			content: [
																				{
																					elem: 'icon',
																					elemMods: { 'indent-r': 's' },
																					content: [
																						{
																							block: 'icon',
																							mods: { name: 'arrow-left', size: 's', view: 'primary' }
																						}
																					]
																				},
																				{
																					block: 'content',
																					content: [
																						{
																							block: 'text',
																							mods: { size: 'm', weight: 'light', display: 'inline' },
																							content: '81 45-662-1099'
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'item',
																	mix: [{ block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } }, { block: 'decorator', mods: { 'indent-t': 'l' }  }],
																	content: [
																		{
																			block: 'button',
																			mods: { theme: 'islands', size: 'l', view: 'action', width: 'available' },
																			text: 'Choose month plan'
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				/* /Событие */

				/* Статьи */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 1008px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'publication',
													mix: { block: 'decorator', mods: { 'space-h': 'l', 'space-v': 'm' } },
													content: [
														{
															elem: 'header',
															content: [
																{
																	block: 'text',
																	mods: { view: 'primary', size: 'm', weight: 'black' },
																	content: 'Hive'
																},
																{
																	block: 'text',
																	mods: { view: 'link', size: 'xs', weight: 'bold', transform: 'uppercase' },
																	content: 'Technology'
																}
															]
														},
														{
															block: 'text',
															mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
															mods: { view: 'link', size: 'xxl' },
															content: [
																{
																	block: 'text',
																	mods: { weight: 'black' },
																	content: 'This is a slow roll: '
																},
																'silicon valley insiders think that facebook will never be the same '
															]
														},
														{
															block: 'pt-icon-plus',
															mix: { block: 'decorator', mods: { 'indent-b': 'xxl' } },
															mods: { 'vertical-align': 'center' },
															content: [
																{
																	elem: 'icon',
																	elemMods: { 'indent-r': 's' },
																	content: {
																		block: 'avatar',
																		content: {
																			elem: 'photo',
																			elemMods: { size: 's'}
																		}
																	}
																},
																{
																	elem: 'block',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's', weight: 'semibold' },
																			content: 'Luke Appleyard'
																		},
																		{
																			block: 'text',
																			mods: { view: 'ghost', size: 'xs' },
																			content: '2h ago'
																		}
																	]
																}
															]
														},
														{
															block: 'text',
															mods: { view: 'primary', size: 'm' },
															content: 'The scandal, the latest in Facebook’s tortured history with privacy concerns, has eroded the potential for any of the company’s leaders to ever credibly run for public office. And it’s made Zuckerberg’s Chinese dreams a lot more fraught. One tech investor put it more succinctly: “They’re fucked.”',
														},
														{
															elem: 'image',
															mix: { block: 'decorator', mods: { 'indent-b': 'xxl' } },
															content: [
																{
																	block: 'image',
																	url: '/assets/bem-starter-kit/publication.png'
																},
																{
																	block: 'text',
																	mods: { view: 'secondary', size: 's' },
																	content: 'Mark Zuckerberg at Cortex Innovation Community technology hub in St. Louis.'
																}
															]
														},
														{
															elem: 'article-content',
															mix: { block: 'text', mods: { size: 's' } },
															content: `Late last Friday, Paul Grewal, Facebook’s vice president and deputy general counsel, wrote a seemingly straightforward blog post on the company’s newsroom page indicating that Facebook was suspending the data firm Strategic Communications Laboratory, and its political unit, Cambridge Analytica, for policy violations—in particular, for obtaining user information without corporate approval. It was an egregious breach, but it appeared as though Facebook was handling it responsibly. Rather than fumbling around for an articulate response, as the company had in the wake of revelations that its platform facilitated the dissemination of fake news that influenced Donald Trump’s election, Facebook was trying to get ahead of the bad press, to get “out front,” as they say in the lingua franca of corporate communications. “We are committed to vigorously enforcing our policies to protect people’s information,” Grewal wrote. “We will take whatever steps are required to see that this happens. We will take legal action if necessary to hold them responsible and accountable for any unlawful behavior.”`
														},
														{
															block: 'text',
															mix: { block: 'decorator', mods: { 'indent-v': 'xxl', 'indent-l': 'l' } },
															mods: { view: 'primary', size: 'xl', weight: 'bold', style: 'italic' },
															content: [
																{
																	block: 'text',
																	mods: { weight: 'black' },
																	content: 'We are committed'
																},
																' to vigorously enforcing our policies to protect people’s information'
															]
														},
														{
															block: 'text',
															mods: { view: 'primary', size: 's' },
															content: `As we all now know, of course, Facebook wasn’t offering a bare-chested confessional. Instead, a day later, The New York Times, in partnership with The Guardian, published a blockbuster exposé that accused Cambridge Analytica of exploiting the Facebook data of some 50 million people. Grewal’s note, it appeared, was simply a dastardly attempt to forestall yet another calamitous story about Facebook surrounding the election. “This attempt to appear ‘out front’ is totally disingenuous,” the Times’s Gabriel J.X. Dance, who worked on the initial story, wrote on Twitter.`
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'article-preview',
													mix: [
														{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
														{ block: 'component', mods: { whitepaper: 'inverse' }},
														{ block: 'pt-card' }
													],
													content: [
														{
															elem: 'footer-wrapper',
															mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l' } },
															content: [
																{
																	elem: 'footer',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'xxl', weight: 'bold' },
																			content: 'This is a slow roll: '
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'l' },
																			content: 'silicon valley insiders think that facebook will never be the same'
																		},
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'center' },
																			mix: { block: 'decorator', mods: { 'indent-t': 'l' } },
																			content: [
																				{
																					elem: 'icon',
																					elemMods: { 'indent-r': 's' },
																					mix: { block: 'brand-logo', mods: { name: 'itunes', size: 'xs' } }
																				},
																				{
																					elem: 'block',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 'm', weight: 'bold', display: 'inline' },
																							content: 'Hive '
																						},
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 'm', weight: 'light', display: 'inline' },
																							content: 'Nick Bilton'
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
															block: 'image',
															mix: { block: 'pt-card', elem: 'image', elemMods: { size: 'cover' } },
															url: '/assets/bem-starter-kit/article-preview.png'
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				/* /Статьи */

				/* Комментарии */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 1008px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'answer',
													mix: [
														{ block: 'theme', mods: { color: 'whitepaper-brand' }},
														{ block: 'component', mods: { whitepaper: 'brand' }},
														{ block: 'pt-card' }
													],
													content: [
														{
															elem: 'content',
															mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xl' } },
															content: [
																{
																	block: 'pt-icon-plus',
																	mods: { 'vertical-align': 'center' },
																	mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
																	content: [
																		{
																			elem: 'icon',
																			elemMods: { 'indent-r': 's' },
																			content: [
																				{
																					block: 'avatar',
																					content: {
																						elem: 'photo',
																						elemMods: { size: 's' }
																					}
																				}
																			]
																		},
																		{
																			elem: 'block',
																			content: [
																				{
																					block: 'text',
																					mods: { size: 's', view: 'primary', weight: 'bold' },
																					content: 'Luke Appleyard'
																				},
																				{
																					block: 'text',
																					mods: { size: 'xs', view: 'primary', },
																					content: '@lukeappeyard'
																				}
																			]
																		}
																	]
																},
																{
																	block: 'text',
																	mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
																	mods: { size: 'xl', view: 'primary', weight: 'black' },
																	content: [
																		'No individual colour making up this wave travels ',
																		{
																			block: 'text',
																			mods: { weight: 'light', display: 'inline' },
																			content: 'faster than the grid lines, but the sum of all components appears to outrace the grid.  This is how “group velocities” can exceed the speed of light without carrying information.'
																		}
																	]
																}
															]
														},
														{
															elem: 'logo',
															mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-b': 'l', 'space-a': 'xl' } },
															content: {
																block: 'social-icon',
																mods: { size: 'm', clear: 'twitter-inverse' }
															}
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											attrs: {
												'style': 'background-color: var(--color-default);'
											},
											elemMods: { col: '4'},
											content: [
												{
													block: 'comments',
													mix: { block: 'decorator', mods: { 'space-a': 'l' } },
													content: [
														{
															block: 'text',
															mix: { block: 'decorator', mods: { 'indent-b': 'xs' } },
															mods: { size: 'xxxl', view: 'primary', weight: 'black', },
															content: 'This is a slow roll: silicon valley insiders '
														},
														{
															block: 'text',
															mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
															mods: { size: 'm', view: 'primary' },
															content: 'The scandal, the latest in Facebook’s tortured history with privacy concerns, has eroded the potential for any of the company’s leaders to ever credibly run for public office'
														},
														{
															block: 'pt-icon-plus',
															mods: { 'vertical-align': 'center' },
															content: [
																{
																	elem: 'icon',
																	elemMods: { 'indent-r': 's'},
																	content: {
																		block: 'avatar',
																		content: {
																			elem: 'photo',
																			elemMods: { size: 's' }
																		}
																	}
																},
																{
																	elem: 'block',
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'primary', weight: 'bold', display: 'inline' },
																			content: 'Hive '
																		},
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'primary', weight: 'light', display: 'inline' },
																			content: 'Nick Bilton'
																		}
																	]
																}
															]
														},
														{
															block: 'comments-section',
															content: [
																{
																	elem: 'header',
																	mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'xl', view: 'primary', weight: 'black', },
																			content: '20 Comments'
																		},
																		{
																			block: 'text',
																			tag: 'a',
																			attrs: { href: ''},
																			mods: { size: 's', view: 'link', },
																			content: 'Sort by Best'
																		}
																	]
																},
																{
																	elem: 'field',
																	mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																	content: [
																		{
																			block: 'textarea',
																			mods: { theme: 'islands', size: 'm', width: 'available' },
																			placeholder : 'Ваш текст должен быть здесь'
																		}
																	]
																},
																{
																	block: 'comment',
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'top' },
																			content: [
																				{
																					elem: 'icon',
																					elemMods: { 'indent-r': 's'},
																					content: {
																						block: 'avatar',
																						content: {
																							elem: 'photo',
																							elemMods: { size: 's' }
																						}
																					}
																				},
																				{
																					elem: 'block',
																					content: [
																						{
																							block: 'text',
																							mods: { size: 's', view: 'link', weigh: 'bold' },
																							content: 'Broun Andvild'
																						},
																						{
																							block: 'text',
																							mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																							mods: { size: 'xs', view: 'ghost' },
																							content: '5h ago'
																						},
																						{
																							block: 'text',
																							mods: { size: 's', view: 'primary', weight: 'light' },
																							content: 'Just visited the best beach for surfing. The waves are awesome.'
																						},
																						{
																							elem: 'answers',
																							mix: { block: 'decorator', mods: { 'indent-t': 'xxl' } },
																							content: [
																								{
																									block: 'pt-icon-plus',
																									mods: { 'vertical-align': 'top' },
																									content: [
																										{
																											elem: 'icon',
																											elemMods: { 'indent-r': 's'},
																											content: {
																												block: 'avatar',
																												content: {
																													elem: 'photo',
																													elemMods: { size: 's' }
																												}
																											}
																										},
																										{
																											elem: 'block',
																											content: [
																												{
																													block: 'text',
																													mods: { size: 's', view: 'link', weigh: 'bold' },
																													content: 'Shervy Jonson'
																												},
																												{
																													block: 'text',
																													mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																													mods: { size: 'xs', view: 'ghost' },
																													content: '5h ago'
																												},
																												{
																													block: 'text',
																													mods: { size: 's', view: 'primary', weight: 'light' },
																													content: 'Just visited the best beach for surfing. The waves are awesome.'
																												},
																											]
																										}
																									]
																								}
																							]
																						}
																					]
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				/* /Комментарии */

				/* Информер */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 1008px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'informer',
													mods: { view: 'alert' },
													mix: { block: 'pt-card' },
													content: [
														{
															elem: 'content',
															mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } },
															content: [
																{
																	elem: 'icon-wrapper',
																	content: [
																		{
																			block: 'icon',
																			mods: { name: 'arrow-left', size: 's', view: 'primary' }
																		}
																	]
																},
																{
																	block: 'text',
																	mods: { size: 'xxl', weight: 'bold', align: 'center' },
																	content: 'Error'
																},
																{
																	block: 'text',
																	mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
																	mods: { size: 'm', align: 'center' },
																	content: 'Currently payments not available'
																},
																{
																	elem: 'info',
																	content: [
																		{
																			block: 'text',
																			mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																			mods: { size: 's', weight: 'bold' },
																			content: 'Information'
																		},
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'center' },
																			content: [
																				{
																					elem: 'icon',
																					elemMods: { 'indent-r': 'l' },
																					content: [
																						{
																							block: 'icon',
																							mods: { name: 'arrow-left', size: 's', view: 'primary' }
																						}
																					]
																				},
																				{
																					elem: 'block',
																					content: {
																						block: 'text',
																						mods: { mods: 'm' },
																						content: '4276 55•• •••• 5371'
																					}
																				}
																			]
																		}
																	]
																}
															]
														},
														{
															elem: 'button',
															mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xxl', align: 'center' } },
															content: {
																block: 'button',
																mods: { theme: 'islands', size: 'l', width: 'available' },
																text: 'DONE'
															}
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'informer',
													mods: { view: 'warning' },
													mix: { block: 'pt-card' },
													content: [
														{
															elem: 'content',
															mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } },
															content: [
																{
																	elem: 'icon-wrapper',
																	content: [
																		{
																			block: 'icon',
																			mods: { name: 'arrow-left', size: 's', view: 'primary' }
																		}
																	]
																},
																{
																	block: 'text',
																	mods: { size: 'xxl', weight: 'bold', align: 'center' },
																	content: 'Alert'
																},
																{
																	block: 'text',
																	mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
																	mods: { size: 'm', align: 'center' },
																	content: 'Currently payments not available'
																},
																{
																	elem: 'info',
																	content: [
																		{
																			block: 'text',
																			mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																			mods: { size: 's', weight: 'bold' },
																			content: 'Transfer to card'
																		},
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'center' },
																			content: [
																				{
																					elem: 'icon',
																					elemMods: { 'indent-r': 'l' },
																					content: [
																						{
																							block: 'icon',
																							mods: { name: 'arrow-left', size: 's', view: 'primary' }
																						}
																					]
																				},
																				{
																					elem: 'block',
																					content: {
																						block: 'text',
																						mods: { mods: 'm' },
																						content: '4276 55•• •••• 5371'
																					}
																				}
																			]
																		}
																	]
																}
															]
														},
														{
															elem: 'button',
															mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xxl', align: 'center' } },
															content: {
																block: 'button',
																mods: { theme: 'islands', size: 'l', width: 'available' },
																text: 'DONE'
															}
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'informer',
													mods: { view: 'success' },
													mix: { block: 'pt-card' },
													content: [
														{
															elem: 'content',
															mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } },
															content: [
																{
																	elem: 'icon-wrapper',
																	content: [
																		{
																			block: 'icon',
																			mods: { name: 'arrow-left', size: 's', view: 'primary' }
																		}
																	]
																},
																{
																	block: 'text',
																	mods: { size: 'xxl', weight: 'bold', align: 'center' },
																	content: 'Success'
																},
																{
																	block: 'text',
																	mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
																	mods: { size: 'm', align: 'center' },
																	content: 'Payment completed'
																},
																{
																	elem: 'info',
																	content: [
																		{
																			block: 'text',
																			mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
																			mods: { size: 's', weight: 'bold' },
																			content: 'Information'
																		},
																		{
																			block: 'text',
																			mods: { size: 's' },
																			content: 'Just visited the best beach for surfing. The waves are awesome.'
																		}
																	]
																}
															]
														},
														{
															elem: 'button',
															mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xxl', align: 'center' } },
															content: {
																block: 'button',
																mods: { theme: 'islands', size: 'l', width: 'available' },
																text: 'DONE'
															}
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				/* /Информер */

				/* Коммерческая */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 1008px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										//PRODUCT-FOLD
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'product',
													mix: { block: 'pt-card' },
													content: [
														{
															elem: 'footer',
															elemMods: { state: 'fold' },
															mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l', align: 'between', 'vertical-align': 'bottom' } },
															content: [
																{
																	elem: 'about',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'xl', weight: 'black', display: 'inline-block' },
																			content: '$'
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'xxxxl' ,weight: 'black', display: 'inline-block' },
																			content: '79'
																		},
																		{
																			block: 'text',
																			mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																			mods: { view: 'secondary', size: 'm' },
																			content: 'Jeans skinny jacket by Levi Brand'
																		},
																		{
																			block: 'button',
																			mods: { theme: 'islands', size: 'l' },
																			text: 'CHOOSE SIZE'
																		}
																	]
																},
																{
																	elem: 'icon',
																 	elemMods: { 'indent-r': 's' },
																	content: [
																		{
																			block: 'icon',
																			mods: { name: 'arrow-left', size: 's', view: 'primary' }
																		}
																	]
																},
															]
														},
														{
															block: 'image',
															mix: { block: 'pt-card', elem: 'image' },
															url: '/assets/bem-starter-kit/ecommerce-product.png'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'product',
													mix: { block: 'pt-card' },
													content: [
														{
															elem: 'footer',
															mix: [
																{ block: 'theme', mods: { color: 'whitepaper-brand' }},
																{ block: 'component', mods: { whitepaper: 'brand' }},
																{ block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l', align: 'between', 'vertical-align': 'bottom' }}
															],
															elemMods: { state: 'unfold' },
															content: [
																{
																	elem: 'about',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'xl', weight: 'black', display: 'inline-block' },
																			content: '$'
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'xxxxl' ,weight: 'black', display: 'inline-block' },
																			content: '79'
																		},
																		{
																			block: 'text',
																			mix: { block: 'decorator', mods: { 'indent-b': 's' } },
																			mods: { view: 'primary', size: 'm' },
																			content: 'Jeans skinny jacket by Levi Brand'
																		},
																		{
																			block: 'button',
																			mods: { theme: 'islands', size: 'l' },
																			text: 'BUY'
																		}
																	]
																},
																{
																	elem: 'icon',
																 	elemMods: { 'indent-r': 's' },
																	content: [
																		{
																			block: 'icon',
																			mods: { name: 'arrow-left', size: 's', view: 'primary' }
																		}
																	]
																}
															]
														},
														{
															block: 'image',
															mix: { block: 'pt-card', elem: 'image' },
															url: '/assets/bem-starter-kit/ecommerce-product.png'
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				/* /Коммерческая */

				/* Авторизация */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 1008px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'auth',
													mix: { block: 'decorator', mods: { 'space-a': 'l' } },
													attrs: { style: 'height: 456px; box-sizing: border-box'},
													content: [
														{
															elem: 'header',
															content: [
																{
																	block: 'text',
																	mods: { view: 'primary', size: 'xxxxl', weight: 'black' },
																	attrs: { style: 'font-weight: 900' },
																	mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
																	content: 'Log in'
																},
																{
																	block: 'text',
																	mods: { view: 'ghost', size: 's' },
																	content: 'Welcome Back, Andrey Kopeyka'
																}
															]
														},
														{
															block: 'pt-form',
															mods: { view: 'default' },
															mix: { block: 'auth', elem: 'form' },
															content: [
																{
																	elem: 'item',
																	elemMods: { 'indent-b': 'l' },
																	content: {
																		block: 'input',
																		mods: { theme: 'islands', width: 'available', size: 'l'},
																		placeholder: 'Username'
																	}
																},
																{
																	elem: 'item',
																	elemMods: { 'indent-b': 'xl' },
																	content: {
																		block: 'input',
																		mods: { theme: 'islands', width: 'available', size: 'l'},
																		placeholder: 'Password'
																	}
																},
																{
																	elem: 'item',
																	elemMods: { 'indent-b': 's' },
																	content: {
																		block: 'button',
																		mods: { theme: 'islands', width: 'full', size: 'l', view: 'action', width: 'available' },
																		text: 'Sign in'
																	}
																},
																{
																	elem: 'item',
																	elemMods: { 'indent-b': 'm' },
																	content: {
																		block: 'button',
																		mods: { theme: 'islands', width: 'full', size: 'l', width: 'available' },
																		text: 'Facebook'
																	}
																},
																{
																	elem: 'item',
																	content: {
																		block: 'text', mods: { view: 'link', size: 'l', align: 'center', width: 'available' },
																		content: 'Signup'
																	}
																}
															]
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'auth',
													mix: { block: 'decorator', mods: { 'space-a': 'l' } },
													attrs: { style: 'height: 456px; box-sizing: border-box; background: #fff;'},
													content: [
														{
															elem: 'header',
															content: [
																{
																	block: 'text',
																	mods: { view: 'primary', size: 'xxxxl', weight: 'black' },
																	attrs: { style: 'font-weight: 900' },
																	mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
																	content: 'Sign in'
																},
																{
																	block: 'text',
																	mods: { view: 'ghost', size: 's' },
																	content: 'Welcome Back, Andrey Kopeyka'
																}
															]
														},
														{
															block: 'pt-form',
															mods: { view: 'default' },
															mix: { block: 'auth', elem: 'form' },
															content: [
																{
																	elem: 'item',
																	elemMods: { 'indent-b': 'l' },
																	content: {
																		block: 'input',
																		mods: { theme: 'islands', width: 'available', size: 'l'},
																		placeholder: 'Username'
																	}
																},
																{
																	elem: 'item',
																	elemMods: { 'indent-b': 'xl' },
																	content: {
																		block: 'input',
																		mods: { theme: 'islands', width: 'available', size: 'l'},
																		placeholder: 'Password'
																	}
																},
																{
																	elem: 'item',
																	elemMods: { 'indent-b': 's' },
																	content: {
																		block: 'button',
																		mods: { theme: 'islands', width: 'full', size: 'l', view: 'action', width: 'available'  },
																		text: 'Sign up'
																	}
																},
																{
																	elem: 'item',
																	elemMods: { 'indent-b': 'm' },
																	content: {
																		block: 'button',
																		mods: { theme: 'islands', width: 'full', size: 'l', width: 'available' },
																		text: 'Facebook'
																	}
																},
																{
																	elem: 'item',
																	content: {
																		block: 'text', mods: { view: 'link', size: 'l', align: 'center' },
																		content: 'Login'
																	}
																}
															]
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'auth',
													mix: { block: 'decorator', mods: { 'space-a': 'l' } },
													attrs: { style: 'height: 456px; box-sizing: border-box; background: #fff;'},
													content: [
														{
															elem: 'header',
															content: [
																{
																	block: 'text',
																	mods: { view: 'primary', size: 'xxxxl', weight: 'black' },
																	attrs: { style: 'font-weight: 900; line-height: 1em' },
																	mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
																	content: 'Forgot Password'
																},
																{
																	block: 'text',
																	mods: { view: 'ghost', size: 's' },
																	content: 'Please enter you email'
																}
															]
														},
														{
															block: 'pt-form',
															mods: { view: 'default' },
															mix: { block: 'auth', elem: 'form' },
															content: [
																{
																	elem: 'item',
																	elemMods: { 'indent-b': 'l' },
																	content: {
																		block: 'input',
																		mods: { theme: 'islands', width: 'available', size: 'l' },
																		placeholder: 'Username'
																	}
																},
																{
																	elem: 'item',
																	content: {
																		block: 'button',
																		mods: { theme: 'islands', width: 'full', size: 'l', view: 'action',  width: 'available' },
																		text: 'Reset'
																	}
																}
															]
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				/* /Авторизация */

				/* Настройки карты */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 1008px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'feed',
													mix: { block: 'pt-list', mods: { view: 'ghost' } },
													content: [
														{
															elem: 'item',
															mix: [{ block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'm' }}, { block: 'decorator', mods: { 'indent-b': 's' } }],
															content: [
																{
																	elem: 'header',
																	elemMods: { align: 'center' },
																	mix: [
																		{ block: 'pt-list', elem: 'item', elemMods: { 'distribute': 'between' }},
																		{ block: 'decorator', mods: { 'indent-b': 'm' }}
																	],
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'center' },
																			content: [
																				{
																					elem: 'icon',
																					elemMods: { 'indent-r': 's' },
																					mix: { block: 'avatar' },
																					content: [
																						{
																							block: 'avatar',
																							elem: 'photo',
																							elemMods: { size: 's'},
																							content: {
																								block: 'activities',
																								elem: 'avatar-img',
																								tag: 'img',
																								attrs: { src: '/assets/bem-starter-kit/ava1.png' }
																							}
																						}
																					]
																				},
																				{
																					elem: 'block',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 's', weight: 'semibold' },
																							content: 'Tony Montana'
																						},
																						{
																							block: 'text',
																							mods: { view: 'secondary', size: 'xs' },
																							content: '2h ago'
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'icon',
																			mods: { name: 'arrow-left', size: 's', view: 'primary' }
																		}
																	]
																},
																{
																	block: 'text',
																	mods: { view: 'primary', size: 's' },
																	mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																	content: 'Just visited the best beach for surfing. The waves are awesome.'
																},
																{
																	block: 'image',
																	url: '/assets/bem-starter-kit/feed-photo.png',
																	width: '100%',
																	mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
																},
																{
																	elem: 'action',
																	mix: [
																		{ block: 'pt-list', elem: 'item', elemMods: { distribute: 'between' } },
																		{ block: 'decorator', mods: { 'space-b': 'x,s' }}
																	],
																	content: [
																		{
																			block: 'pt-list',
																			elem: 'item',
																			content: [
																				{
																					block: 'text',
																					mods: { view: 'link', size: 's', display: 'inline-block' },
																					mix: { block: 'decorator', mods: { 'indent-r': 'm' }},
																					content: 'Add comment'
																				},
																				{
																					block: 'text',
																					mods: { view: 'link', size: 's', display: 'inline-block' },
																					content: 'Share'
																				}
																			]
																		},
																		{
																			block: 'pt-list',
																			elem: 'item',
																			content: {
																				block: 'text',
																				mods: { view: 'link', size: 's', display: 'inline-block' },
																				content: 'Like'
																			}
																		}
																	]
																}
															]
														},
														{
															elem: 'item',
															mix: [{ block: 'pt-list', elem: 'item', elemMods: { 'space-a': 'm' }}],
															content: [
																{
																	elem: 'header',
																	elemMods: { align: 'center' },
																	mix: [
																		{ block: 'pt-list', elem: 'item', elemMods: { 'distribute': 'between' }},
																		{ block: 'decorator', mods: { 'indent-b': 'm' }}
																	],
																	content: [
																		{
																			block: 'pt-icon-plus',
																			mods: { 'vertical-align': 'center' },
																			content: [
																				{
																					elem: 'icon',
																					elemMods: { 'indent-r': 's' },
																					mix: { block: 'avatar' },
																					content: [
																						{
																							block: 'avatar',
																							elem: 'photo',
																							elemMods: { size: 's'},
																							content: {
																								block: 'activities',
																								elem: 'avatar-img',
																								tag: 'img',
																								attrs: { src: '/assets/bem-starter-kit/ava9.png' }
																							}
																						}
																					]
																				},
																				{
																					elem: 'block',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 's', weight: 'semibold' },
																							content: 'Tony Montana'
																						},
																						{
																							block: 'text',
																							mods: { view: 'secondary', size: 'xs' },
																							content: '2h ago'
																						}
																					]
																				}
																			]
																		},
																		{
																			block: 'icon',
																			mods: { name: 'arrow-left', size: 's', view: 'primary' }
																		}
																	]
																},
																{
																	block: 'text',
																	mods: { view: 'primary', size: 's' },
																	mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																	content: 'How does he do it? 😵😵😵'
																},
																{
																	elem: 'item',
																	mix: [{ block: 'pt-list', elem: 'item', elemMods: { border: 'top', 'space-t': 's' }} ],
																	content: [
																		{
																			elem: 'header',
																			elemMods: { align: 'baseline' },
																			mix: [
																				{ block: 'pt-list', elem: 'item', elemMods: { 'distribute': 'between' }},
																				{ block: 'decorator', mods: { 'indent-b': 'm' }}
																			],
																			content: [
																				{
																					block: 'text',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'primary', size: 'xs', weight: 'semibold'  },
																							content: 'Garry Tornthon'
																						},
																						{
																							block: 'text',
																							mods: { view: 'secondary', size: 'xs' },
																							content: '5h ago'
																						}
																					]
																				},
																				{
																					block: 'text',
																					mods: { view: 'secondary', size: 'xs' },
																					content: 'Shared post'
																				}
																			]
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 's' },
																			mix: { block: 'decorator', mods: { 'indent-b': 's' }},
																			content: 'Just visited the best beach for surfing. The waves are awesome.'
																		},
																		{
																			block: 'image',
																			url: '/assets/bem-starter-kit/feed-photo.png',
																			width: '100%',
																			mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
																		},
																		{
																			elem: 'action',
																			mix: [
																				{ block: 'pt-list', elem: 'item', elemMods: { distribute: 'between' } },
																				{ block: 'decorator', mods: { 'space-b': 'x,s' }}
																			],
																			content: [
																				{
																					block: 'pt-list',
																					elem: 'item',
																					content: [
																						{
																							block: 'text',
																							mods: { view: 'link', size: 's', display: 'inline-block' },
																							mix: { block: 'decorator', mods: { 'indent-r': 'm' }},
																							content: 'Add comment'
																						},
																						{
																							block: 'text',
																							mods: { view: 'link', size: 's', display: 'inline-block' },
																							content: 'Share'
																						}
																					]
																				},
																				{
																					block: 'pt-list',
																					elem: 'item',
																					content: {
																						block: 'text',
																						mods: { view: 'link', size: 's', display: 'inline-block' },
																						content: 'Like'
																					}
																				}
																			]
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
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'card',
													content: [
														{
															block: 'decorator',
															mods: { 'space-t': 'xl' },
															content: [
																{
																	block: 'text',
																	mods: { view: 'primary', size: 'xxl', align: 'center', weight: 'bold' },
																	content: 'Plastic'
																},
																{
																	block:'text',
																	mods: { view: 'link', size: 'm', align: 'center' },
																	mix: { block: 'decorator', mods: { 'indent-b': 'm'}},
																	content: 'Card for offline payments'
																},
																{
																	block: 'bank-card',
																	mods: { view: 'brand' },
																	mix: [
																		{ block: 'theme', mods: { color: 'whitepaper-brand' }},
																		{ block: 'component', mods: { whitepaper: 'brand' }},
																		{ block: 'decorator', mods: { 'indent-h': 'xl'}}
																	],
																	content: [
																		{
																			elem: 'content',
																			content: [
																				{
																					elem: 'icon',
																					content: {
																						block: 'icon',
																						mods: { name: 'arrow-left', size: 's', view: 'primary' }
																					}
																				},
																				{
																					elem: 'number',
																					mix: { block: 'text', mods: { view: 'primary', size: 'l', align: 'center', spacing: 'm' }},
																					content: '•••• •••• •••• 5106'
																				},
																				{
																					elem: 'footer',
																					content: [
																						{
																							block: 'text',
																							mods: { size: 'xs', view: 'primary'},
																							content: 'Card Information'
																						},
																						{
																							block: 'image',
																							url: '/assets/bem-starter-kit/mastercard.svg',
																							width: 36
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	block: 'dots',
																	mix: { block: 'decorator', mods: { 'indent-t': 'm', 'indent-b': 'xl' } },
																	content: {
																		elem: 'wrapper',
																		content: [
																			{ elem: 'item', elemMods: { view: 'active' }},
																			{ elem: 'item', elemMods: { view: 'default' }},
																			{ elem: 'item', elemMods: { view: 'default' }}
																		]
																	}
																},
																{
																	block: 'text',
																	mods: { view: 'primary', size: 'xl', weight: 'bold' },
																	mix: { block: 'decorator', mods: { 'indent-l': 'l', 'indent-b': 'xxs'}},
																	content: 'Settings'
																},
																{
																	block: 'pt-list',
																	mods: { view: 'default' },
																	content: [
																		{
																			elem: 'item',
																			elemMods: { 'space-h': 'l', 'space-v': 's'},
																			mix: { block: 'pt-icon-plus', mods: { 'vertical-align': 'center' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					elem: 'icon',
																					elemMods: { 'indent-r': 's' },
																					content: [
																						{
																							block: 'icon',
																							mods: { name: 'arrow-left', size: 's', view: 'primary' }
																						}
																					]
																				},
																				{
																					elem: 'block',
																					content: {
																						block: 'text',
																						mods: { view: 'primary', size: 's' },
																						content: 'Code word information'
																					}
																				}
																			]
																		},
																		{
																			elem: 'item',
																			elemMods: { 'space-h': 'l', 'space-v': 's'},
																			mix: { block: 'pt-icon-plus', mods: { 'vertical-align': 'center' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					elem: 'icon',
																					elemMods: { 'indent-r': 's' },
																					content: [
																						{
																							block: 'icon',
																							mods: { name: 'arrow-left', size: 's', view: 'primary' }
																						}
																					]
																				},
																				{
																					elem: 'block',
																					content: {
																						block: 'text',
																						mods: { view: 'primary', size: 's' },
																						content: 'Pin code settings'
																					}
																				}
																			]
																		},
																		{
																			elem: 'item',
																			elemMods: { 'space-h': 'l', 'space-v': 's'},
																			mix: { block: 'pt-icon-plus', mods: { 'vertical-align': 'center' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					elem: 'icon',
																					elemMods: { 'indent-r': 's' },
																					content: [
																						{
																							block: 'icon',
																							mods: { name: 'arrow-left', size: 's', view: 'primary' }
																						}
																					]
																				},
																				{
																					elem: 'block',
																					content: {
																						block: 'text',
																						mods: { view: 'primary', size: 's' },
																						content: 'Card lock '
																					}
																				}
																			]
																		},
																		{
																			elem: 'item',
																			elemMods: { 'space-h': 'l', 'space-v': 's'},
																			mix: { block: 'pt-icon-plus', mods: { 'vertical-align': 'center' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					elem: 'icon',
																					elemMods: { 'indent-r': 's' },
																					content: [
																						{
																							block: 'icon',
																							mods: { name: 'arrow-left', size: 's', view: 'primary' }
																						}
																					]
																				},
																				{
																					elem: 'block',
																					content: {
																						block: 'text',
																						mods: { view: 'primary', size: 's' },
																						content: 'Delete card'
																					}
																				}
																			]
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				/* /Настройки карты */

				/* Тариф */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 1008px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'tariff',
													mix: { block: 'pt-card' },
													content: [
														{
															elem: 'content',
															mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } },
															content: [
																{
																	elem: 'type',
																	mix: [ { block: 'text', mods: { view: 'primary', size: 'xxl', weight: 'bold', align: 'center' } }, { block: 'decorator', mods: { 'indent-b': 'xxs' } } ],
																	content: 'Standard'
																},
																{
																	elem: 'type',
																	mix: [ { block: 'text', mods: { view: 'primary', size: 'm', align: 'center' } }, { block: 'decorator', mods: { 'indent-b': 'xl' } } ],
																	content: 'For large companies'
																},
																{
																	elem: 'sale',
																	mix: [{ block: 'text', mods: { view: 'primary', size: 'm', align: 'center', weight: 'bold' } }, { block: 'decorator', mods: { 'indent-b': 'l' } }],
																	content: '$89'
																},
																{
																	elem: 'assets',
																	mix: { block: 'decorator', mods: { 'space-h': 'm' } },
																	content: [
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
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
																									block: 'icon',
																									mods: { name: 'arrow-left', size: 's', view: 'primary' }
																								}
																							]
																						},
																						{
																							block: 'content',
																							content: [
																								{
																									block: 'text',
																									mods: { size: 'm', view: 'primary', weight: 'light' },
																									content: '50 presentations/month'
																								}
																							]
																						}
																					]
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
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
																									block: 'icon',
																									mods: { name: 'arrow-left', size: 's', view: 'primary' }
																								}
																							]
																						},
																						{
																							block: 'content',
																							content: [
																								{
																									block: 'text',
																									mods: { size: 'm', view: 'primary', weight: 'light' },
																									content: '5 house of free support'
																								}
																							]
																						}
																					]
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
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
																									block: 'icon',
																									mods: { name: 'arrow-left', size: 's', view: 'primary' }
																								}
																							]
																						},
																						{
																							block: 'content',
																							content: [
																								{
																									block: 'text',
																									mods: { size: 'm', view: 'primary', weight: 'light',  },
																									content: '10 campaigns/month'
																								}
																							]
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
															elem: 'footer',
															mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l' } },
															content: [
																{
																	block: 'button',
																	mods: { theme: 'islands', size: 'l', width: 'available', view: 'action' },
																	text: 'Choose month plan'
																}
															]
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'tariff',
													mix: [
														{ block: 'theme', mods: { color: 'whitepaper-brand' }},
														{ block: 'component', mods: { whitepaper: 'brand' }},
														{ block: 'pt-card' }
													],
													content: [
														{
															elem: 'content',
															mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } },
															content: [
																{
																	elem: 'type',
																	mix: [ { block: 'text', mods: { view: 'primary', size: 'xxl', weight: 'bold', align: 'center' } }, { block: 'decorator', mods: { 'indent-b': 'xxs' } } ],
																	content: 'Standard'
																},
																{
																	elem: 'type',
																	mix: [ { block: 'text', mods: { view: 'primary', size: 'm', align: 'center' } }, { block: 'decorator', mods: { 'indent-b': 'xl' } } ],
																	content: 'For large companies'
																},
																{
																	elem: 'sale',
																	mix: [{ block: 'text', mods: { view: 'primary', size: 'm', align: 'center', weight: 'bold' } }, { block: 'decorator', mods: { 'indent-b': 'l' } }],
																	content: '$89'
																},
																{
																	elem: 'assets',
																	mix: { block: 'decorator', mods: { 'space-h': 'm' } },
																	content: [
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
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
																									block: 'icon',
																									mods: { name: 'arrow-left', size: 's', view: 'primary' }
																								}
																							]
																						},
																						{
																							block: 'content',
																							content: [
																								{
																									block: 'text',
																									mods: { size: 'm', view: 'primary', weight: 'light' },
																									content: '50 presentations/month'
																								}
																							]
																						}
																					]
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
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
																									block: 'icon',
																									mods: { name: 'arrow-left', size: 's', view: 'primary' }
																								}
																							]
																						},
																						{
																							block: 'content',
																							content: [
																								{
																									block: 'text',
																									mods: { size: 'm', view: 'primary', weight: 'light' },
																									content: '5 house of free support'
																								}
																							]
																						}
																					]
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
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
																									block: 'icon',
																									mods: { name: 'arrow-left', size: 's', view: 'primary' }
																								}
																							]
																						},
																						{
																							block: 'content',
																							content: [
																								{
																									block: 'text',
																									mods: { size: 'm', view: 'primary', weight: 'light',  },
																									content: '10 campaigns/month'
																								}
																							]
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
															elem: 'footer',
															mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l' } },
															content: [
																{
																	block: 'button',
																	mods: { theme: 'islands', size: 'l', width: 'available', view: 'action' },
																	text: 'Choose month plan'
																}
															]
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'tariff',
													mods: { view: 'image' },
													mix: [
														{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
														{ block: 'component', mods: { whitepaper: 'inverse' }},
														{ block: 'pt-card' }
													],
													content: [
														{
															elem: 'content',
															mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'l' } },
															content: [
																{
																	elem: 'type',
																	mix: [ { block: 'text', mods: { view: 'primary', size: 'xxl', weight: 'bold', align: 'center' } }, { block: 'decorator', mods: { 'indent-b': 'xxs' } } ],
																	content: 'Standard'
																},
																{
																	elem: 'type',
																	mix: [ { block: 'text', mods: { view: 'primary', size: 'm', align: 'center' } }, { block: 'decorator', mods: { 'indent-b': 'xl' } } ],
																	content: 'For large companies'
																},
																{
																	elem: 'sale',
																	mix: [{ block: 'text', mods: { view: 'primary', size: 'm', align: 'center', weight: 'bold' } }, { block: 'decorator', mods: { 'indent-b': 'l' } }],
																	content: '$89'
																},
																{
																	elem: 'assets',
																	mix: { block: 'decorator', mods: { 'space-h': 'm' } },
																	content: [
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
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
																									block: 'icon',
																									mods: { name: 'arrow-left', size: 's', view: 'primary' }
																								}
																							]
																						},
																						{
																							block: 'content',
																							content: [
																								{
																									block: 'text',
																									mods: { size: 'm', view: 'primary', weight: 'light' },
																									content: '50 presentations/month'
																								}
																							]
																						}
																					]
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
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
																									block: 'icon',
																									mods: { name: 'arrow-left', size: 's', view: 'primary' }
																								}
																							]
																						},
																						{
																							block: 'content',
																							content: [
																								{
																									block: 'text',
																									mods: { size: 'm', view: 'primary', weight: 'light' },
																									content: '5 house of free support'
																								}
																							]
																						}
																					]
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'm' } },
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
																									block: 'icon',
																									mods: { name: 'arrow-left', size: 's', view: 'primary' }
																								}
																							]
																						},
																						{
																							block: 'content',
																							content: [
																								{
																									block: 'text',
																									mods: { size: 'm', view: 'primary', weight: 'light',  },
																									content: '10 campaigns/month'
																								}
																							]
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
															elem: 'footer',
															mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'l' } },
															content: [
																{
																	block: 'button',
																	mods: { theme: 'islands', size: 'l', width: 'available', view: 'action' },
																	text: 'Choose month plan'
																}
															]
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				}
				/* /Тариф */

			]
		}
	]
};
