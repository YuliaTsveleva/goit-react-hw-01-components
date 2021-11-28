import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';
import friend from '../../data/friends.json';

export default function FriendListItem(props) {
  const { avatar, name, isOnline } = props;
  return (
    <li className={s.listItem} key={friend.id}>
      <span className={isOnline ? s.statusOnline : s.statusOffline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
