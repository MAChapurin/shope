export const getSlugFromString = (str: string) =>
	str.replaceAll(' ', '-').trim()
