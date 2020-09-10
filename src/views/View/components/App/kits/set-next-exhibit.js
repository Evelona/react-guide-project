export const setNextExhibit = (
	{ setFloor, setExhibit, setRoom, check	},
	{ currFloor, currExhibit, currRoom, playing },
	floors
) => {
	const exhibitsLength = floors[currFloor]['rooms'][currRoom]['animatedExhibits'].length
	const roomsLength = floors[currFloor]['rooms'].length
	const floorsLength = floors.length

	if (playing) {
		if (currExhibit < exhibitsLength - 1) {
			setExhibit(currExhibit + 1)
		} else if (currRoom < roomsLength - 1) {
			setExhibit(0)
			setRoom(currRoom + 1)
		} else if (currFloor < floorsLength - 1) {
			setExhibit(0)
			setRoom(0)
			setFloor(currFloor + 1)
		} else if (currFloor === floorsLength - 1) {
			setExhibit(0)
			setRoom(0)
			setFloor(0)
		}
	} else {
		const nextIndex = (currExhibit + 1) % (exhibitsLength)

		setExhibit(nextIndex)
	}

	check(true)
}