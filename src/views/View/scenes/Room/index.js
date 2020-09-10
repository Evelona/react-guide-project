import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Collection from './components/Collection'
import { DURATION } from 'config'
import ExhibitView from './components/ExhibitView'
import Page from 'Page'
import PhotoViewer from './components/PhotoViewer'
import RoomText from './components/RoomText'
import useBoolean from 'use-boolean'
import { useState } from 'react'
const Room = () => {
	const [indexOfClickedExhibit, setIndexOfClikedExhibit] = useState(0)
	const [isViewerOpened, openViewer, closeViewer] = useBoolean(false)

	return pug`
		Page
			RoomText
			Collection(setIndex=setIndexOfClikedExhibit)
			ExhibitView(index=indexOfClickedExhibit openViewer=openViewer)
			TransitionGroup(component=null)
				if isViewerOpened
						CSSTransition(key=indexOfClickedExhibit timeout=DURATION.NORMAL classNames='anim')
							PhotoViewer(
								key=indexOfClickedExhibit
								setCurrentPhotoIndex=setIndexOfClikedExhibit
								closeViewer=closeViewer
								currentPhotoIndex=indexOfClickedExhibit
								controls=true
								photoWidth=1500
							)
	
	`
}

export default Room