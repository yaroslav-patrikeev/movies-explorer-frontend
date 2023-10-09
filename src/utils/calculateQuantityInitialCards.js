export const calculateQuantityInitialCards = size => {
	if (size.width < 768) return { cards: 5, add: 2 };
	if (size.width < 1280) return { cards: 4, add: 2 };
	return { cards: 16, add: 4 };
};
