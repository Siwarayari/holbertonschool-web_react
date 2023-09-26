import React from 'react';
import { getLatestNotification } from './utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    fntsize: {
        fontSize: "20px"
  }
  })



class Notifications extends React.Component {
 
  constructor(props) {
      super(props)
      this.state = {
          html: PropTypes.string,
          value: PropTypes.string,
          type: PropTypes.string.isRequired
      }
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
}

shouldComponentUpdate(nextProps) {
  if (nextProps.listNotifications.length === this.props.listNotifications.length) {
      return false
  }
  return true
}


  render() {
    return (
      <><div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer ? (
              <div className="Notifications">
              <p>Here is the list of notifications</p>
              <button aria-label='Close' onClick={buttonclc()} style={btncs}>
                <img src='close-icon'></img>
              </button>
              <li markAsRead={this.markAsRead} onClick="markAsRead()"></li>
              <ul>
              {listCourses ? (
                  <tr>No new notification for now</tr>
                ) : (
                  listNotifications.map(listNotification => (
                      <NotificationItem className={css(styles.fntsize)} type={listNotification.type} value={listNotification.value} dangerouslySetInnerHTML={listNotification.__html}/>
                ))
                )}
              </ul>
            </div>
      ) : (
        <Login />
      )}
</>
    );
  }
}

  function buttonclc(){
    console.log("Close button has been clicked");
}
const btncs = {
    position: 'fixed',
    float: 'right',
    background: 'transparent',
	  color: 'white',
    top: '10px',
    right: '10px',
    height: '17px',
    backgroundcolor: '#fff8f8'
}
const styless = StyleSheet.create({
  body: {
    opacity: '0.5',
    opacity: '1',
    animation: "opacityChange 1s ease-in-out",
}
})

const frame = {
  "0%": {
    opacity: "translateY(0px)",
  },
  "50%": {
    transform: 'translateY(-5px)',
  },
  "100%": {
    transform: 'translateY(5px)',
  },
};

const translateY = {
  "0%": {
    transform: "translateY(0px)",
  },
  "50%": {
    transform: 'translateY(-5px)',
  },
  "100%": {
    transform: 'translateY(5px)',
  },
};


Notifications.propTypes = {
  displayDrawer: PropTypes.bool.isRequired,
  handleDisplayDrawer: PropTypes.func.isRequired,
  handleHideDrawer: PropTypes.func.isRequired,
};
