import i18n from 'i18n';
import { State } from 'models/state';

const INITIAL_STATE: State = {
  loading: {
    count: 0,
  },
  i18n: {
    language: 'EN',
    literals: i18n.EN,
  },
  session: {
    user: {
      id: '',
      username: '',
      email: '',
      password: '',
      profilePicture: '',
      notificationSound: '',
      dogName: '',
      location: '',
      friendsArray: [],
      friendRequestsArray: [],
      pendingFriendRequestsArray: [],
      pendingFriendRequestsSentArray: [],
      blockedUsersArray: [],
      groupsArray: [],
      groupInvitesArray: [],
      pendingGroupInvitesArray: [],
      pendingGroupInvitesSentArray: [],
      blockedGroupsArray: [],
      postsArray: [],
    },
    checked: false,
    error: '',
  },
};

export default INITIAL_STATE;
