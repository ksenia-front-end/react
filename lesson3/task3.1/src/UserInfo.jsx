import React from 'react';
import Avatar from './Avatar.jsx';

function UserInfo(props) {
  return (
    <div className="user-info">
      <Avatar avatarUrl={props.user.avatarUrl} name={props.user.name} />
      <div className="user-info__name">{props.name}</div>
    </div>
  );
}

export default UserInfo;
