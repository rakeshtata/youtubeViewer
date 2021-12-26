import React  from 'react'
import Video from './Video'
import { useSelector } from 'react-redux'

const VideoList = () => {
	const videos = useSelector(state => state.videos)

	return(
		<div className="row">
			{
				videos.map((video, index)=>{
					return(
						<Video video={video} key={index} />
					)
				})
			}
		</div>
	)
}

export default  VideoList;