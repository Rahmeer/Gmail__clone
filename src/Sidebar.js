import { Button, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';

import React from 'react';
import SidebarOption from './SidebarOption';
import './Sidebar.css';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar-compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={53}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={53} />
      <SidebarOption Icon={AccessAlarmIcon} title="Snoozed" number={53} />
      <SidebarOption Icon={LabelImportantIcon} title="Imporant" number={53} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={53} />
      <SidebarOption Icon={NoteIcon} title="Draft" number={53} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" />

      <div className="sidebar-footer">
        <div className="sidebar-footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
