import { Label, LabelText } from './style'

import { Multilang } from 'langs'
import data from './legend-icons.json'

const getPath = (paths) => {
	if (paths === []) return

	return paths.map((path, index) => pug`
		path(d=${path.d} fill="#575555" key=index)
	`)
}

export default () => {
	return data.map(
		(label, index) => {
			const { text, icon, x, y } = label
			const { width, height, paths } = icon
			const viewBox = `0 0 ${width} ${height}`

			return pug`
				Label.label(x=x y=y key=index)
					LabelText
						Multilang(...text)
					svg(
						width=width
						height=height
						viewBox=viewBox
						fill="none" 
						xmlns="http://www.w3.org/2000/svg"
					)
						=getPath(paths)
			`
		}
	)
}

