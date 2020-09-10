export const ops = {}
export const selectors = {}
export const components = {}

const renewConfig = (config, newConfig) => {
	for (const key in config) { delete config[key] }
	for (const key in newConfig) { config[key] = newConfig[key] }
}

export default ({
	ops: newOps,
	components: newComponents,
	selectors: newSelectors
}) => {
	renewConfig(ops, newOps)
	renewConfig(components, newComponents)
	renewConfig(selectors, newSelectors)
}