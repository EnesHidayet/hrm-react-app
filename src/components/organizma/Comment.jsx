import React from 'react';
import './Card4.css'


function Comment({ name, avatarSrc, time, content}) {
  return (
    <div className="d-flex flex-start mb-4">
      <img className="rounded-circle shadow-1-strong me-3" src={avatarSrc} alt="avatar" width="65" height="65" />
      <div className="card">
        <div style={{width: '850px'}} className="card-body p-4 comment-card-content comment-card-p">  {/* Removed unnecessary width style */}
          <div>
            <h5>{name}</h5>
            <p className="small">{time}</p>
            <p  className="small text-start text-break">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
