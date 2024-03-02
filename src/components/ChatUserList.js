import React from 'react';


export default function ChatUserList() {

  return(
    <div className="list-container">
      <div className="chat-search-box">
        <div className="input-group">
          <input className="form-control" placeholder="Search" />
        </div>
      </div>
      <ul className="items">
        <li
          onClick={() => {}}
          className="item">
          <div className="item-status">
            <img src="https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png" alt="Retail Admin" />
            <span className="status online"></span>
          </div>
          <p className="name-time">
          <span className="name mr-2">Some User 1</span>
          </p>
        </li>
        <li
          onClick={() => {}}
          className="item">
          <div className="item-status">
            <img src="https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png" alt="Retail Admin" />
            <span className="status online"></span>
          </div>
          <p className="name-time">
          <span className="name mr-2">Some User 2</span>
          </p>
        </li>
        <li
          onClick={() => {}}
          className="item">
          <div className="item-status">
            <img src="https://banner2.cleanpng.com/20180627/qvc/kisspng-the-legend-of-zelda-majora-s-mask-discord-compute-discord-icon-5b3371b7b55eb4.6840271215300981037429.jpg" alt="Retail Admin" />
            <span className="status online"></span>
          </div>
          <p className="name-time">
          <span className="name mr-2">Some User 3</span>
          </p>
        </li>
        <li
          onClick={() => {}}
          className="item">
          <div className="item-status">
            <img src="https://banner2.cleanpng.com/20180627/qvc/kisspng-the-legend-of-zelda-majora-s-mask-discord-compute-discord-icon-5b3371b7b55eb4.6840271215300981037429.jpg" alt="Retail Admin" />
            <span className="status online"></span>
          </div>
          <p className="name-time">
          <span className="name mr-2">Some User 4</span>
          </p>
        </li>
      </ul>
    </div>
  )
}