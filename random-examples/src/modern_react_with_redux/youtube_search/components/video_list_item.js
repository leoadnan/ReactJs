import React from 'react';
import PropsType from 'prop-types';

const VideoListItem = ({video, onVideoSelect}) => {
   const imageUrl = video.snippet.thumbnails.default.url;
   return (
      <li onClick={() => onVideoSelect(video)} className="list-group-item">
         <div className="video-list media">
            <div className="media-left">
               <img src={imageUrl} className="media-object"/>
            </div>
            <div className="media-body">
               <h4 className="media-heading">{video.snippet.title}</h4>
            </div>
         </div>
      </li>
   );
}
// VideoListItem.prototype = {    onVideoSelect: PropsType.func.isRequired }
export default VideoListItem;