import React,{useEffect}  from 'react'
import {useDispatch} from 'react-redux'
import {fetchVideos} from '../services/appAPI'
import AddForm from './AddForm'
import VideoList from './VideoList'

const App = () => {
	const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchVideos())
    },[])
	return(
		<div>
			<AddForm />
			<VideoList/>
		</div>
	)
}

export default App