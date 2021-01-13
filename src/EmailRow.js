import { Checkbox, IconButton } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

import React from 'react';
import './EmailRow.css';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectedMail } from './features/mailSlice';

function EmailRow({ id, title, subject, description, time }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(
      selectedMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    history.push('/mail');
  };

  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow-option">
        <Checkbox />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <h3 className="emailRow-title">{title}</h3>
      <div className="emailRow-message">
        <h4>
          {subject} <span className="emailRow-description">-{description}</span>
        </h4>
      </div>
      <div className="emailRow-time">{time}</div>
    </div>
  );
}

export default EmailRow;
