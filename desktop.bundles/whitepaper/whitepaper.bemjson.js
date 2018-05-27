module.exports = {
	block: 'page',
	title: 'White Paper Tools',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'whitepaper.min.css' },
	],
	scripts: [{ elem: 'js', url: 'whitepaper.min.js' }],
	mix: {
		block: 'theme',
		mods: { color: 'default', space: 'default', size: 'default', breakpoint: 'default', gap: 'medium', menu: 'default', font: 'ibm' }
	},
	content: [
	{
		block: 'cdn'
	}]
};
