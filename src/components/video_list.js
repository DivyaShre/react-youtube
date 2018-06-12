import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos,onSelect}) => {

	const videoList = videos.map(function(video){
		return <VideoListItem 
			onSelect = {onSelect}
			key = {video.etag}  video={video}/>
	});

	return(
		<ul className = "col-md-4 list-group">
			{videoList}
		</ul>
	);

}

export default VideoList;