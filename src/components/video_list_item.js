import React from 'react';

const VideoListItem = ({video, onVideoSelect}) =>{
  /*
  Anzichè passare props come argomento e poi nel body fare:
  const video = props.video;
  const onVideoSelect = props.onVideoSelct;
  faccio direttamente questo oggetto in argomento e separo i parametri con la virgola.
  */
  const imageUrl = video.snippet.thumbnails.default.url;

  return(
    <li onClick={()=> onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
