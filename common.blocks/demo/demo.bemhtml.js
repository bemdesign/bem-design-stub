block('demo')(
	content()(function(n, ctx) {
		return [
			{
				elem: 'plug'
			},
			ctx.content
		]
	})
);
