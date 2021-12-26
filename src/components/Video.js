import React  from 'react'
import {useDispatch} from 'react-redux'
import {deleteVideo} from '../services/appAPI'


const Video = (props) => {
	const {video} = props
    const dispatch = useDispatch()

    const onDelete = (e,id) =>{
        e.preventDefault();
		dispatch(deleteVideo(id))
	}


	const link = "https://www.youtube.com/embed/"+video.video_id

	return(
		<div className="c4">
			<h5>{video.title} <span className="delete">
				<a onClick={(e) => onDelete(e, video.id)} href="#">X</a></span>
			</h5>
			<iframe width="360" height="285" src={link} frameBorder="0" allowFullScreen></iframe>
			<p>{video.description}</p>
		</div>
	)
}

export default Video;