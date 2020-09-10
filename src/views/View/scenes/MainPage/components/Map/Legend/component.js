import { Legend, LegendSvg } from './style'

import { DURATION } from 'config'
import getLegendLabels from './render-legend-labels'
import { useEffect } from 'react'

export default () => {
	const handle = () => {
		const legend = typeof document !== 'undefined' ? document.getElementById('legend') : {}

		legend.style.opacity = 0.8
		setTimeout(() => {
			legend.style.opacity = 0.4
		}, DURATION.UNUSED)
	}

	useEffect(() => {
		Array.from(document
			.getElementById('legend')
			.getElementsByClassName('label'))
			.forEach((element) => {
				element.addEventListener('click', handle)
			})

		return () => window.removeEventListener('click', handle)
	}, [])

	return pug`
		Legend#legend
			LegendSvg#kek(width="1102" height="517" viewBox="0 0 1102 517" fill="none" xmlns="http://www.w3.org/2000/svg")
				g(filter='url(#filter0_d)')
					path(d="M823.5 344.809L824.081 341.865L823.5 344.809ZM739.962 281.467C738.392 280.936 736.689 281.777 736.158 283.347L727.502 308.922C726.971 310.491 727.812 312.194 729.382 312.725C730.951 313.256 732.654 312.415 733.185 310.845L740.88 288.112L763.613 295.806C765.182 296.338 766.885 295.496 767.416 293.927C767.947 292.357 767.106 290.654 765.536 290.123L739.962 281.467ZM928 335.309C926.686 332.612 926.687 332.611 926.687 332.611C926.687 332.611 926.688 332.611 926.688 332.611C926.688 332.611 926.687 332.611 926.686 332.612C926.683 332.613 926.678 332.616 926.67 332.619C926.654 332.627 926.628 332.64 926.591 332.657C926.517 332.692 926.401 332.746 926.244 332.818C925.93 332.962 925.451 333.176 924.815 333.447C923.544 333.988 921.642 334.758 919.165 335.649C914.208 337.432 906.953 339.698 897.826 341.6C879.568 345.404 853.857 347.742 824.081 341.865L822.919 347.752C853.643 353.816 880.182 351.405 899.049 347.473C908.485 345.507 916.011 343.16 921.195 341.295C923.788 340.363 925.796 339.551 927.167 338.967C927.853 338.674 928.379 338.439 928.739 338.275C928.919 338.192 929.057 338.128 929.154 338.082C929.202 338.06 929.239 338.042 929.266 338.029C929.279 338.022 929.29 338.017 929.298 338.013C929.302 338.011 929.306 338.01 929.308 338.008C929.31 338.008 929.311 338.007 929.312 338.007C929.313 338.006 929.314 338.005 928 335.309ZM824.081 341.865C794.547 336.036 773.935 321.279 760.689 307.965C754.064 301.306 749.291 295.016 746.183 290.405C744.629 288.101 743.493 286.22 742.752 284.927C742.381 284.28 742.109 283.78 741.933 283.449C741.845 283.283 741.781 283.159 741.74 283.08C741.72 283.041 741.706 283.012 741.697 282.995C741.693 282.987 741.69 282.981 741.689 282.979C741.688 282.977 741.688 282.977 741.688 282.977C741.688 282.977 741.688 282.977 741.688 282.977C741.689 282.978 741.689 282.979 739 284.309C736.31 285.638 736.311 285.639 736.312 285.641C736.312 285.641 736.313 285.643 736.314 285.645C736.315 285.648 736.317 285.652 736.319 285.656C736.324 285.665 736.33 285.677 736.338 285.692C736.353 285.722 736.373 285.763 736.4 285.816C736.454 285.921 736.532 286.072 736.635 286.265C736.84 286.65 737.143 287.206 737.546 287.91C738.354 289.319 739.566 291.325 741.208 293.76C744.49 298.627 749.498 305.224 756.436 312.197C770.315 326.148 791.953 341.64 822.919 347.752L824.081 341.865Z" fill="#575555")
				g(filter='url(#filter1_d)')
					path(d="M990.683 220.809L991.264 217.865L990.683 220.809ZM864.685 236.772C864.112 238.327 864.908 240.051 866.463 240.624L891.8 249.954C893.355 250.527 895.079 249.731 895.652 248.176C896.224 246.621 895.428 244.897 893.873 244.324L871.352 236.03L879.646 213.509C880.218 211.954 879.422 210.23 877.867 209.657C876.313 209.084 874.588 209.881 874.016 211.435L864.685 236.772ZM1095.18 211.309C1093.87 208.612 1093.87 208.611 1093.87 208.611C1093.87 208.611 1093.87 208.611 1093.87 208.611C1093.87 208.611 1093.87 208.611 1093.87 208.612C1093.87 208.613 1093.86 208.616 1093.85 208.619C1093.84 208.627 1093.81 208.64 1093.77 208.657C1093.7 208.692 1093.58 208.746 1093.43 208.818C1093.11 208.962 1092.63 209.176 1092 209.447C1090.73 209.988 1088.83 210.758 1086.35 211.649C1081.39 213.432 1074.14 215.698 1065.01 217.6C1046.75 221.404 1021.04 223.742 991.264 217.865L990.103 223.752C1020.83 229.816 1047.37 227.405 1066.23 223.473C1075.67 221.507 1083.19 219.16 1088.38 217.295C1090.97 216.363 1092.98 215.551 1094.35 214.966C1095.04 214.674 1095.56 214.439 1095.92 214.275C1096.1 214.192 1096.24 214.128 1096.34 214.082C1096.39 214.06 1096.42 214.042 1096.45 214.029C1096.46 214.022 1096.47 214.017 1096.48 214.013C1096.49 214.011 1096.49 214.01 1096.49 214.008C1096.49 214.008 1096.49 214.007 1096.5 214.007C1096.5 214.006 1096.5 214.005 1095.18 211.309ZM991.264 217.865C960.412 211.776 929.132 216.123 905.684 221.918C893.938 224.822 884.103 228.102 877.198 230.66C873.744 231.939 871.019 233.039 869.152 233.822C868.218 234.213 867.498 234.525 867.008 234.742C866.763 234.85 866.575 234.934 866.447 234.992C866.383 235.021 866.334 235.043 866.299 235.059C866.282 235.067 866.269 235.073 866.26 235.077C866.255 235.079 866.251 235.081 866.248 235.082C866.247 235.083 866.245 235.084 866.245 235.084C866.243 235.084 866.242 235.085 867.5 237.809C868.758 240.532 868.757 240.533 868.757 240.533C868.757 240.533 868.757 240.533 868.758 240.532C868.759 240.532 868.761 240.531 868.763 240.53C868.769 240.527 868.779 240.523 868.792 240.517C868.818 240.504 868.86 240.486 868.916 240.46C869.029 240.409 869.201 240.332 869.43 240.231C869.887 240.029 870.573 239.732 871.471 239.355C873.268 238.602 875.914 237.534 879.282 236.286C886.02 233.791 895.637 230.582 907.124 227.743C930.143 222.054 960.455 217.9 990.103 223.752L991.264 217.865Z" fill="#575555")
				g(filter='url(#filter2_d)')
					path(d="M326 343.809L328.509 345.453L326 343.809ZM354.531 281.698C353.641 280.3 351.787 279.888 350.389 280.778L327.611 295.273C326.213 296.163 325.801 298.017 326.69 299.415C327.58 300.813 329.434 301.225 330.832 300.335L351.08 287.45L363.965 307.698C364.854 309.096 366.708 309.508 368.106 308.618C369.504 307.729 369.916 305.875 369.027 304.477L354.531 281.698ZM280.5 381.308C281.417 384.165 281.418 384.164 281.419 384.164C281.42 384.164 281.421 384.163 281.422 384.163C281.424 384.162 281.427 384.161 281.43 384.16C281.436 384.158 281.444 384.156 281.453 384.153C281.472 384.147 281.497 384.138 281.529 384.128C281.591 384.107 281.679 384.077 281.791 384.038C282.014 383.96 282.334 383.846 282.74 383.691C283.554 383.382 284.719 382.914 286.168 382.263C289.064 380.962 293.101 378.925 297.74 375.961C307.017 370.035 318.73 360.38 328.509 345.453L323.491 342.165C314.27 356.238 303.234 365.332 294.51 370.905C290.149 373.691 286.374 375.592 283.708 376.791C282.375 377.39 281.321 377.812 280.612 378.081C280.257 378.216 279.988 378.312 279.814 378.373C279.727 378.403 279.664 378.425 279.625 378.438C279.606 378.444 279.593 378.449 279.586 378.451C279.582 378.452 279.58 378.453 279.58 378.453C279.58 378.453 279.58 378.453 279.581 378.453C279.581 378.452 279.582 378.452 279.582 378.452C279.583 378.452 279.584 378.451 280.5 381.308ZM328.509 345.453C338.179 330.693 344.774 315.336 348.949 303.696C351.039 297.87 352.529 292.957 353.498 289.492C353.983 287.759 354.338 286.387 354.573 285.443C354.691 284.971 354.778 284.606 354.837 284.356C354.867 284.231 354.889 284.135 354.904 284.068C354.912 284.035 354.917 284.009 354.921 283.991C354.924 283.982 354.925 283.975 354.926 283.969C354.927 283.967 354.927 283.965 354.928 283.963C354.928 283.962 354.928 283.961 354.928 283.961C354.928 283.96 354.929 283.959 352 283.309C349.071 282.658 349.072 282.657 349.072 282.657C349.072 282.657 349.072 282.657 349.072 282.657C349.072 282.657 349.071 282.658 349.071 282.659C349.071 282.662 349.07 282.666 349.068 282.672C349.065 282.684 349.061 282.704 349.055 282.731C349.042 282.786 349.023 282.87 348.996 282.983C348.943 283.208 348.862 283.548 348.751 283.994C348.529 284.886 348.189 286.202 347.72 287.875C346.784 291.223 345.336 295.998 343.301 301.671C339.226 313.031 332.821 327.924 323.491 342.165L328.509 345.453Z" fill="#575555")
				g(filter='url(#filter3_d)')
					path(d="M536.37 458.808L539.37 458.808L539.37 458.808L536.37 458.808ZM538.492 424.187C537.32 423.015 535.421 423.015 534.249 424.187L515.157 443.279C513.986 444.45 513.986 446.35 515.157 447.521C516.329 448.693 518.228 448.693 519.4 447.521L536.37 430.551L553.341 447.521C554.512 448.693 556.412 448.693 557.584 447.521C558.755 446.35 558.755 444.45 557.584 443.279L538.492 424.187ZM539.37 508.308L539.37 458.808L533.37 458.808L533.37 508.308L539.37 508.308ZM539.37 458.808L539.37 426.308L533.37 426.308L533.37 458.808L539.37 458.808Z" fill="#575555")
				g(filter='url(#filter4_d)')
					path(d="M329 50.808L328.594 53.7805L329 50.808ZM423.04 143.525C423.989 144.884 425.859 145.216 427.218 144.267L449.354 128.809C450.713 127.86 451.045 125.99 450.096 124.631C449.148 123.273 447.277 122.941 445.919 123.889L426.242 137.631L412.501 117.954C411.552 116.595 409.682 116.263 408.324 117.212C406.965 118.16 406.633 120.03 407.582 121.389L423.04 143.525ZM7 213.808C8.92908 216.105 8.92955 216.105 8.93082 216.104C8.93235 216.103 8.93441 216.101 8.93742 216.098C8.94342 216.093 8.95264 216.086 8.96505 216.075C8.98988 216.054 9.02751 216.023 9.07775 215.981C9.17823 215.897 9.32923 215.771 9.52959 215.604C9.9303 215.271 10.5284 214.776 11.3142 214.129C12.8857 212.835 15.2083 210.938 18.2051 208.526C24.1988 203.702 32.8888 196.825 43.6619 188.616C65.212 172.196 95.0795 150.466 128.364 129.211C161.662 107.948 198.309 87.2063 233.425 72.722C268.627 58.2022 301.897 50.14 328.594 53.7805L329.405 47.8355C301.103 43.9761 266.622 52.5388 231.137 67.1753C195.566 81.8473 158.587 102.793 125.135 124.155C91.6703 145.524 61.6629 167.357 40.0255 183.844C29.2049 192.088 20.473 198.999 14.4434 203.852C11.4285 206.278 9.08885 208.19 7.50127 209.496C6.70749 210.149 6.10166 210.652 5.69344 210.991C5.4893 211.161 5.33457 211.29 5.23041 211.377C5.17835 211.42 5.13892 211.453 5.11228 211.476C5.09898 211.487 5.08887 211.495 5.08196 211.501C5.07851 211.504 5.07575 211.506 5.07404 211.508C5.07209 211.509 5.07092 211.51 7 213.808ZM328.594 53.7805C382.825 61.1756 405.969 83.4615 415.813 103.268C420.782 113.265 422.461 122.822 422.896 129.883C423.113 133.41 423.019 136.302 422.873 138.294C422.8 139.289 422.715 140.058 422.649 140.568C422.616 140.823 422.589 141.013 422.57 141.133C422.561 141.194 422.554 141.237 422.55 141.262C422.548 141.274 422.546 141.282 422.546 141.286C422.545 141.288 422.545 141.288 422.545 141.288C422.545 141.288 422.546 141.287 422.546 141.286C422.546 141.285 422.546 141.283 425.5 141.808C428.454 142.332 428.454 142.33 428.455 142.327C428.455 142.326 428.455 142.323 428.456 142.321C428.457 142.316 428.458 142.309 428.459 142.302C428.462 142.287 428.465 142.268 428.469 142.244C428.477 142.196 428.488 142.129 428.501 142.045C428.526 141.877 428.561 141.639 428.6 141.333C428.679 140.722 428.776 139.844 428.857 138.732C429.02 136.509 429.121 133.346 428.885 129.514C428.413 121.857 426.593 111.476 421.186 100.598C410.28 78.6544 385.174 55.4404 329.405 47.8355L328.594 53.7805Z" fill="#575555")
				defs
					filter(id="filter0_d" x="719.797" y="278.176" width="217.639" height="91.5664" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB")
						feFlood(floodOpacity="0" result="BackgroundImageFix")
						feColorMatrix(in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0")
						feOffset(dy="2")
						feGaussianBlur(stdDeviation="2")
						feColorMatrix(type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0")
						feBlend(mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow")
						feBlend(mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape")

					filter(id="filter1_d" x="859.259" y="172.684" width="241.989" height="113.371" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB")
						feFlood(floodOpacity="0" result="BackgroundImageFix")
						feColorMatrix(in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0")
						feOffset(dy="2")
						feGaussianBlur(stdDeviation="2")
						feColorMatrix(type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0")
						feBlend(mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow")
						feBlend(mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape")

					filter(id="filter2_d" x="274.761" y="269.637" width="102.256" height="132.001" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB")
						feFlood(floodOpacity="0" result="BackgroundImageFix")
						feColorMatrix(in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0")
						feOffset(dy="2")
						feGaussianBlur(stdDeviation="2")
						feColorMatrix(type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0")
						feBlend(mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow")
						feBlend(mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape")

					filter(id="filter3_d" x="501.198" y="418.449" width="64.1219" height="98.1833" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB")
						feFlood(floodOpacity="0" result="BackgroundImageFix")
						feColorMatrix(in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0")
						feOffset(dy="2")
						feGaussianBlur(stdDeviation="2")
						feColorMatrix(type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0")
						feBlend(mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow")
						feBlend(mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape")

					filter(id="filter4_d" x="0.470459" y="0.6875" width="463.226" height="285.964" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB")
						feFlood(floodOpacity="0" result="BackgroundImageFix")
						feColorMatrix(in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0")
						feOffset(dy="2")
						feGaussianBlur(stdDeviation="2")
						feColorMatrix(type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0")
						feBlend(mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow")
						feBlend(mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape")
			=getLegendLabels()
	`
}

