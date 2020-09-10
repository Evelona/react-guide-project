export const getRoomIndex = (node) => {
	if (node.classList.contains('room')) {
		return parseInt(node.dataset.index)
	}

	return false
}