import React,{useRef} from 'react'
import {useDispatch} from 'react-redux'
import {postVideo} from '../services/appAPI'

const AddForm = () => {

	const fieldRef = useRef([])
    const dispatch = useDispatch()
    const onSubmit = (e) => {
		e.preventDefault();
		dispatch(postVideo({
			title: fieldRef.current[0].value.trim(),
			video_id: fieldRef.current[1].value.trim(),
			description: fieldRef.current[2].value.trim()
		}))
		fieldRef.current.forEach(item => item.value = "")
	}

	return(
		<div className="add-form">
			<panel className="c12">
				<h3>Add Video</h3>
				<form onSubmit={onSubmit}>
					<div className="form-group">
						<label>Video Title</label><br />
						<input type="text" className="form-control" ref={el => fieldRef.current[0] = el}  />
					</div>
					<div className="form-group">
						<label>Video ID</label><br />
						<input type="text" className="form-control" ref={el => fieldRef.current[1] = el}   />
					</div>
					<div className="form-group">
						<label>Video Description</label><br />
						<textarea className="form-control" ref={el => fieldRef.current[2] = el}  ></textarea>
					</div>
					<button type="submit" className="button">Add</button>
				</form>
			</panel>
		</div>
	)
}

export default AddForm