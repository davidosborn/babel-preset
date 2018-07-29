module.exports = function() {
	return {
		plugins: [
			require('@babel/proposal-class-properties'),
			require('@babel/proposal-decorators'),
			require('@babel/proposal-do-expressions'),
			require('@babel/proposal-export-default-from'),
			require('@babel/proposal-export-namespace-from'),
			require('@babel/proposal-function-sent'),
			require('@babel/proposal-json-strings'),
			require('@babel/proposal-logical-assignment-operators'),
			require('@babel/proposal-nullish-coalescing-operator'),
			require('@babel/proposal-numeric-separator'),
			require('@babel/proposal-optional-chaining'),
			require('@babel/proposal-pipeline-operator'),
			require('@babel/proposal-throw-expressions'),
			require('@babel/syntax-dynamic-import'),
			require('@babel/syntax-import-meta')
		],
		presets: [
			[require('@babel/env'), {
				targets: {
					node: 'current'
				}
			}],
			require('minify')
		],
	}
}
