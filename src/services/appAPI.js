import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, addDoc, doc, deleteDoc } from 'firebase/firestore'
import {addVideo,receiveVideos,removeVideo} from '../redux/reducer'

const firebaseConfig = {
    apiKey: "REDACTED_VAL",
    authDomain: "REDACTED_VAL",
    databaseURL: "REDACTED_VAL",
    projectId: "REDACTED_VAL",
    storageBucket: "REDACTED_VAL",
    messagingSenderId: "REDACTED_VAL",
    appId: "REDACTED_VAL"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const videos = collection(db, 'videos');

const postVideo = (video)=> async (dispatch) => {
    try {
        const docRef = await addDoc(videos, video);
        console.log("Document written with ID: ", docRef.id);
        dispatch(addVideo({video:{
            title:video.title,
            video_id:video.video_id,
            description: video.description,
            id:docRef.id
        }}))
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

const fetchVideos = () => async (dispatch) => {
    try {
        const videoSnapshot = await getDocs(videos);
        let videoList = [];
        videoSnapshot.forEach((childSnapshot) => {
            videoList.push( {
                id: childSnapshot.id,
                title: childSnapshot.get('title'),
                video_id: childSnapshot.get('video_id'),
                description: childSnapshot.get('description')
            })
        })
        dispatch(receiveVideos({videos: videoList}))
    } catch(err) {
        dispatch(receiveVideos([]))
    }
}

const deleteVideo = (videoId) => async(dispatch) => {
    const firebaseRef = doc(db,"videos",videoId)
    try {
        await deleteDoc(firebaseRef);
        dispatch(removeVideo(videoId))
    } catch (e) {
        console.error("Error remove document: ", e);
    }
}

 export {postVideo, fetchVideos, deleteVideo }   
