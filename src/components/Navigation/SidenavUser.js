import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { NavLink, Link } from 'react-router-dom';
import './Sidenav.less';

const SidenavUser = ({ username }) => (
  <ul className="Sidenav">
    <li>
      <a href={`https://steemd.com/@${username}`} target="_blank">
        <i className="iconfont icon-dynamic" />
        <FormattedMessage id="activity" defaultMessage="Activity" />
      </a>
    </li>
    <li>
      <a href={`https://steemit.com/@${username}/recent-replies`} activeClassName="Sidenav__item--active">
        <i className="iconfont icon-message" />
        <FormattedMessage id="replies" defaultMessage="Replies" />
      </a>
    </li>
    <li>
      <a href={`https://steemit.com/@${username}/settings`} target="_blank">
        <i className="iconfont icon-mine" />
        <FormattedMessage id="edit_profile" defaultMessage="Edit profile" />
      </a>
    </li>
    <li>
      <NavLink to="/settings" activeClassName="Sidenav__item--active">
        <i className="iconfont icon-setup" />
        <FormattedMessage id="settings" defaultMessage="Settings" />
      </NavLink>
    </li>
  </ul>
);

SidenavUser.propTypes = {
  username: PropTypes.string.isRequired,
};

export default SidenavUser;
