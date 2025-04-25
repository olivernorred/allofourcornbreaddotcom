export default async function(eleventyConfig) {
    eleventyConfig.setQuietMode(true);

    eleventyConfig.addPassthroughCopy('./_src/css')
	eleventyConfig.addWatchTarget('./_src/css')

    eleventyConfig.addPassthroughCopy('./_src/images')
	eleventyConfig.addWatchTarget('./_src/images')

	eleventyConfig.addPassthroughCopy('./_src/fonts')
	eleventyConfig.addWatchTarget('./_src/fonts')

	eleventyConfig.addPassthroughCopy('./_src/js')
	eleventyConfig.addWatchTarget('./_src/js')
}

export const config = {
    dir: {
        input: "_src",
        output: "_public",
        layouts: "_layouts",
    }
}