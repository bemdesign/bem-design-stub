block('icon-item')(
	content()(function() {
    const name = this.ctx.name;
		return [
			{
				block: 'text',
				mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
				mods: { size: 'm', view: 'primary', weight: 'semibold', align: 'center' },
				content: "name: '" + this.ctx.name + "'"
			},
      {
				block: 'pt-icon-plus',
				mods: { indent: 'm', 'vertical-align': 'center' },
				mix: [
					{ block: 'decorator', mods: { 'indent-b': 'm' } },
					{ block: 'icon-aligner' }
				],
        content: [
          {
            elem: 'icon',
						mix: { block: 'icon-aligner', elem: 'icon' },
            content: [
							{
                block: 'icon',
								mix: { block: 'icon-aligner', elem: 'icon' },
                mods: { name: this.ctx.name, size: 's', view: 'primary' }
              }
            ]
          },
          {
            elem: 'block',
            content: [
              {
                block: 'text',
                mods: { view: 'primary', size: 'm' },
                content: "size: 's'"
              }
            ]
          }
        ]
      },
      {
				block: 'pt-icon-plus',
				mods: { 'vertical-align': 'center' },
				mix: [
					{ block: 'icon-aligner' }
				],
        content: [
          {
            elem: 'icon',
						mix: { block: 'icon-aligner', elem: 'icon' },
            content: [
							{
                block: 'icon',
								mix: { block: 'icon-aligner', elem: 'icon' },
                mods: { name: this.ctx.name, size: 'm', view: 'primary' }
              }
            ]
          },
          {
            elem: 'block',
            content: [
              {
                block: 'text',
                mods: { view: 'primary', size: 'm' },
                content: "size: 'm'"
              }
            ]
          }
        ]
      }
    ];
  })
);
