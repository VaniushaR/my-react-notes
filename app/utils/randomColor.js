export const getRandomColor = (colorsArray) => {
	//get a random index number less than the max length of the array
	const randomIndex =
		colorsArray && colorsArray.length > 0
			? Math.floor(Math.random() * colorsArray.length)
			: null;

	return randomIndex;
};

export const fillArrayPalette = (maxlength, paletteArray) => {
	const extendedPalette = paletteArray;
	let currentIndex = 0;

	while (extendedPalette.length < maxlength) {
		extendedPalette.push(paletteArray[currentIndex]);
		currentIndex++;
	}

	return extendedPalette;
};
