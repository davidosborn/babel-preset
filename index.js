module.exports = function() {
	return {
		plugins: [
			require('@babel/plugin-proposal-class-properties'),
			[require('@babel/plugin-proposal-decorators'), {legacy: true}],
			require('@babel/plugin-proposal-do-expressions'),
			require('@babel/plugin-proposal-export-default-from'),
			require('@babel/plugin-proposal-export-namespace-from'),
			require('@babel/plugin-proposal-function-sent'),
			require('@babel/plugin-proposal-json-strings'),
			require('@babel/plugin-proposal-logical-assignment-operators'),
			require('@babel/plugin-proposal-nullish-coalescing-operator'),
			require('@babel/plugin-proposal-numeric-separator'),
			require('@babel/plugin-proposal-optional-chaining'),
			require('@babel/plugin-proposal-pipeline-operator'),
			require('@babel/plugin-proposal-throw-expressions'),
			require('@babel/plugin-syntax-dynamic-import'),
			require('@babel/plugin-syntax-import-meta')
		],
		presets: [
			[require('@babel/preset-env'), {
				targets: {
					node: 'current'
				}
			}],
			require('babel-preset-minify')
		],
	}
}
