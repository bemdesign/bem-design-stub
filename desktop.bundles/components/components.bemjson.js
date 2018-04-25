module.exports = {
	block: 'page',
	title: 'BEM components',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'components.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'components.min.js' }],
	mods: { type: 'full-screen', theme: 'islands' },
	mix: [
		{
			block: 'theme',
			mods: { color: 'liquid-default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'ibm' }
		},
		{
			block: 'component',
			mods: { liquid: 'default' }
		}
	],
	content: [
		{
			block: 'demo',
			content: [

				{
					block: 'tpl-layout',
					content: [
						{
							elem: 'container',
							elemMods: { size: 'xs', align: 'center' },
							content: [

								/* Дефолтная */
								{
									block: 'controls',
									attrs: {
										'style': 'margin-bottom: 48px'
									},
									content: [
										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													elemMods: { width: 's' },
													content: [
														{
															block: 'button',
															mods: {
																theme: 'islands',
																size: 'm',
																view: 'action',
																width: 'available'
															},
															text: 'Buy now!'
														}
													]
												},
												{
													elem: 'item',
													elemMods: { width: 's' },
													content: [
														{
															block: 'button',
															mods: {
																theme: 'islands',
																size: 'm',
																width: 'available'
															},
															text: 'Default'
														}
													]
												},
												{
													elem: 'item',
													elemMods: { width: 's' },
													content: [
														{
															block: 'button',
															text: 'Return button',
															mods: {
																theme: 'islands',
																size: 'm',
																width: 'available'
															},
															icon: {
																block: 'icon',
																mods: {
																	name: 'arrow-left',
																	size: 's',
																	view: 'primary'
																}
															}
														}
													]
												},
												{
													elem: 'item',
													elemMods: { width: 's' },
													content: [
														{
															block: 'button',
															mods: {
																theme: 'islands',
																size: 'm',
																view: 'pseudo',
																width: 'available'
															},
															text: 'Borderless'
														}
													]
												},
											]
										},
										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													content: [
														{
													    block: 'select',
													    mods: {
													        mode: 'radio',
													        theme: 'islands',
													        width: 'available',
													        size: 'm'
													    },
													    name: 'select1',
													    val: 2,
													    options: [
													        {
													            val: 1,
													            text: 'Report'
													        },
													        {
													            val: 2,
													            text: 'Workshop'
													        },
													        {
													            val: 3,
													            text: 'Round-table conference'
													        }
													    ]
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'select',
															mods: {
																	mode: 'radio-check',
																	theme: 'islands',
																	size: 'm',
																	width: 'available',
																	disabled: true
															},
															name: 'select4',
															val: 2,
															text: '—',
															options: [
																	{
																			val: 1,
																			text: 'Report'
																	},
																	{
																			val: 2,
																			text: 'Workshop'
																	},
																	{
																			val: 3,
																			text: 'Round-table conference'
																	}
															]
														}
													]
												}
											]
										},
										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													content: [
														{
															block: 'input',
															mods: {
																theme: 'islands',
																size: 'm',
																width: 'available',
																'has-clear': true,
															},
															val: 'Hello!'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'input',
															mods: {
																theme: 'islands',
																size: 'm',
																width: 'available',
																disabled: true
															},
															placeholder: 'Enter your name'
														}
													]
												}
											]
										},
										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													content: [
														{
															block: 'textarea',
															mods: {
																theme: 'islands',
																size: 'm',
																width: 'available'
															},
															placeholder: 'Your text should be here'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'textarea',
															mods: {
																theme: 'islands',
																size: 'm',
																disabled: true,
																width: 'available'
															},
															placeholder: 'Your text should be here'
														}
													]
												}
											]
										},

										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													content: [
														{
															block: 'checkbox',
															mods: {
																theme: 'islands',
																size: 'm',
																checked: true
															},
															name: 'name1',
															val: 'val_1',
															text: 'Candies'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'checkbox',
															mods: {
																theme: 'islands',
																size: 'm',
															},
															name: 'name1',
															val: 'val_1',
															text: 'Candies'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'checkbox',
															mods: {
																theme: 'islands',
																size: 'm',
																disabled: true
															},
															name: 'name1',
															val: 'val_0',
															text: 'Candies'
														}
													]
												}
											]
										},
										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													content: [
														{
															block: 'radio',
															mods: {
																theme: 'islands',
																size: 'm',
																checked: true
															},
															name: 'radio-islands',
															val: 'BEMHTML',
															text: 'Use BEMHTML'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'radio',
															mods: {
																theme: 'islands',
																size: 'm',
															},
															name: 'radio-islands',
															val: 'BEMHTML',
															text: 'Use BEMHTML'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'radio',
															mods: {
																theme: 'islands',
																size: 'm',
																disabled: true
															},
															name: 'radio-islands',
															val: 'BEMHTML',
															text: 'Use BEMHTML'
														}
													]
												}
											]
										}
									]
								}
								/* Дефолтная */

							]
						}
					]
				},
				{
					block: 'tpl-layout',
					attrs: {
						'style': 'background: #0070f0;'
					},
					mix: [
						{
							block: 'theme',
							mods: { color: 'liquid-brand' }
						},
						{
							block: 'component',
							mods: { liquid: 'brand' }
						}
					],
					content: [
						{
							elem: 'container',
							elemMods: { size: 'xs', align: 'center' },
							content: [

								/* Яркая */
								{
									block: 'controls',
									attrs: {
										'style': 'margin-bottom: 48px'
									},
									content: [
										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													elemMods: { width: 's' },
													content: [
														{
															block: 'button',
															mods: {
																theme: 'islands',
																size: 'm',
																view: 'action',
																width: 'available'
															},
															text: 'Buy now!'
														}
													]
												},
												{
													elem: 'item',
													elemMods: { width: 's' },
													content: [
														{
															block: 'button',
															mods: {
																theme: 'islands',
																size: 'm',
																width: 'available'
															},
															text: 'Default'
														}
													]
												},
												{
													elem: 'item',
													elemMods: { width: 's' },
													content: [
														{
															block: 'button',
															text: 'Return button',
															mods: {
																theme: 'islands',
																size: 'm',
																width: 'available'
															},
															icon: {
																block: 'icon',
																mods: {
																	name: 'arrow-left',
																	size: 's',
																	view: 'primary'
																}
															}
														}
													]
												},
												{
													elem: 'item',
													elemMods: { width: 's' },
													content: [
														{
															block: 'button',
															mods: {
																theme: 'islands',
																size: 'm',
																view: 'pseudo',
																width: 'available'
															},
															text: 'Borderless'
														}
													]
												},
											]
										},
										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													content: [
														{
															block: 'select',
															mods: {
																	mode: 'radio',
																	theme: 'islands',
																	width: 'available',
																	size: 'm'
															},
															name: 'select1',
															val: 2,
															options: [
																	{
																			val: 1,
																			text: 'Report'
																	},
																	{
																			val: 2,
																			text: 'Workshop'
																	},
																	{
																			val: 3,
																			text: 'Round-table conference'
																	}
															]
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'select',
															mods: {
																	mode: 'radio-check',
																	theme: 'islands',
																	size: 'm',
																	width: 'available',
																	disabled: true
															},
															name: 'select4',
															val: 2,
															text: '—',
															options: [
																	{
																			val: 1,
																			text: 'Report'
																	},
																	{
																			val: 2,
																			text: 'Workshop'
																	},
																	{
																			val: 3,
																			text: 'Round-table conference'
																	}
															]
														}
													]
												}
											]
										},
										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													content: [
														{
															block: 'input',
															mods: {
																theme: 'islands',
																size: 'm',
																width: 'available',
																'has-clear': true,
															},
															val: 'Hello!'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'input',
															mods: {
																theme: 'islands',
																size: 'm',
																width: 'available',
																disabled: true
															},
															placeholder: 'Enter your name'
														}
													]
												}
											]
										},
										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													content: [
														{
															block: 'textarea',
															mods: {
																theme: 'islands',
																size: 'm',
																width: 'available'
															},
															placeholder: 'Your text should be here'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'textarea',
															mods: {
																theme: 'islands',
																size: 'm',
																disabled: true,
																width: 'available'
															},
															placeholder: 'Your text should be here'
														}
													]
												}
											]
										},

										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													content: [
														{
															block: 'checkbox',
															mods: {
																theme: 'islands',
																size: 'm',
																checked: true
															},
															name: 'name1',
															val: 'val_1',
															text: 'Candies'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'checkbox',
															mods: {
																theme: 'islands',
																size: 'm',
															},
															name: 'name1',
															val: 'val_1',
															text: 'Candies'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'checkbox',
															mods: {
																theme: 'islands',
																size: 'm',
																disabled: true
															},
															name: 'name1',
															val: 'val_0',
															text: 'Candies'
														}
													]
												}
											]
										},
										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													content: [
														{
															block: 'radio',
															mods: {
																theme: 'islands',
																size: 'm',
																checked: true
															},
															name: 'radio-islands',
															val: 'BEMHTML',
															text: 'Use BEMHTML'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'radio',
															mods: {
																theme: 'islands',
																size: 'm',
															},
															name: 'radio-islands',
															val: 'BEMHTML',
															text: 'Use BEMHTML'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'radio',
															mods: {
																theme: 'islands',
																size: 'm',
																disabled: true
															},
															name: 'radio-islands',
															val: 'BEMHTML',
															text: 'Use BEMHTML'
														}
													]
												}
											]
										}
									]
								}
								/* Яркая */
							]
						}
					]
				},
				{
					block: 'tpl-layout',
					attrs: {
						'style': 'background: #1a1a1a;'
					},
					mix: [
						{
							block: 'theme',
							mods: { color: 'liquid-inverse' }
						},
						{
							block: 'component',
							mods: { liquid: 'inverse' }
						}
					],
					content: [
						{
							elem: 'container',
							elemMods: { size: 'xs', align: 'center' },
							content: [

								/* Инверсная */
								{
									block: 'controls',
									attrs: {
										'style': 'margin-bottom: 48px'
									},
									content: [
										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													elemMods: { width: 's' },
													content: [
														{
															block: 'button',
															mods: {
																theme: 'islands',
																size: 'm',
																view: 'action',
																width: 'available'
															},
															text: 'Buy now!'
														}
													]
												},
												{
													elem: 'item',
													elemMods: { width: 's' },
													content: [
														{
															block: 'button',
															mods: {
																theme: 'islands',
																size: 'm',
																width: 'available'
															},
															text: 'Default'
														}
													]
												},
												{
													elem: 'item',
													elemMods: { width: 's' },
													content: [
														{
															block: 'button',
															text: 'Return button',
															mods: {
																theme: 'islands',
																size: 'm',
																width: 'available'
															},
															icon: {
																block: 'icon',
																mods: {
																	name: 'arrow-left',
																	size: 's',
																	view: 'primary'
																}
															}
														}
													]
												},
												{
													elem: 'item',
													elemMods: { width: 's' },
													content: [
														{
															block: 'button',
															mods: {
																theme: 'islands',
																size: 'm',
																view: 'pseudo',
																width: 'available'
															},
															text: 'Borderless'
														}
													]
												},
											]
										},
										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													content: [
														{
															block: 'select',
															mods: {
																	mode: 'radio',
																	theme: 'islands',
																	width: 'available',
																	size: 'm'
															},
															name: 'select1',
															val: 2,
															options: [
																	{
																			val: 1,
																			text: 'Report'
																	},
																	{
																			val: 2,
																			text: 'Workshop'
																	},
																	{
																			val: 3,
																			text: 'Round-table conference'
																	}
															]
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'select',
															mods: {
																	mode: 'radio-check',
																	theme: 'islands',
																	size: 'm',
																	width: 'available',
																	disabled: true
															},
															name: 'select4',
															val: 2,
															text: '—',
															options: [
																	{
																			val: 1,
																			text: 'Report'
																	},
																	{
																			val: 2,
																			text: 'Workshop'
																	},
																	{
																			val: 3,
																			text: 'Round-table conference'
																	}
															]
														}
													]
												}
											]
										},
										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													content: [
														{
															block: 'input',
															mods: {
																theme: 'islands',
																size: 'm',
																width: 'available',
																'has-clear': true,
															},
															val: 'Hello!'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'input',
															mods: {
																theme: 'islands',
																size: 'm',
																width: 'available',
																disabled: true
															},
															placeholder: 'Enter your name'
														}
													]
												}
											]
										},
										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													content: [
														{
															block: 'textarea',
															mods: {
																theme: 'islands',
																size: 'm',
																width: 'available'
															},
															placeholder: 'Your text should be here'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'textarea',
															mods: {
																theme: 'islands',
																size: 'm',
																disabled: true,
																width: 'available'
															},
															placeholder: 'Your text should be here'
														}
													]
												}
											]
										},

										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													content: [
														{
															block: 'checkbox',
															mods: {
																theme: 'islands',
																size: 'm',
																checked: true
															},
															name: 'name1',
															val: 'val_1',
															text: 'Candies'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'checkbox',
															mods: {
																theme: 'islands',
																size: 'm',
															},
															name: 'name1',
															val: 'val_1',
															text: 'Candies'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'checkbox',
															mods: {
																theme: 'islands',
																size: 'm',
																disabled: true
															},
															name: 'name1',
															val: 'val_0',
															text: 'Candies'
														}
													]
												}
											]
										},
										{
											elem: 'section',
											content: [
												{
													elem: 'item',
													content: [
														{
															block: 'radio',
															mods: {
																theme: 'islands',
																size: 'm',
																checked: true
															},
															name: 'radio-islands',
															val: 'BEMHTML',
															text: 'Use BEMHTML'	
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'radio',
															mods: {
																theme: 'islands',
																size: 'm',
															},
															name: 'radio-islands',
															val: 'BEMHTML',
															text: 'Use BEMHTML'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															block: 'radio',
															mods: {
																theme: 'islands',
																size: 'm',
																disabled: true
															},
															name: 'radio-islands',
															val: 'BEMHTML',
															text: 'Use BEMHTML'
														}
													]
												}
											]
										}
									]
								}
								/* Инверсная */

							]
						}
					]
				}

			]
		}
	]
};
