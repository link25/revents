import React, { Component } from "react";
import { connect } from 'react-redux';
import { Grid} from "semantic-ui-react";
import EventList from "../EventList/EventList";
import { deleteEvent } from '../eventActions'

const mapState = (state) => ({
  events: state.events
});

const actions = {
  deleteEvent,
}
class EventDashboard extends Component {
  // constructor(props){
  //   super(props)

  // this.handleFormOpen = this.handleFormOpen.bind(this);
  // this.handleCancel = this.handleCancel.bind(this);

  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };

  render() {
    const {events} = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            deleteEvent={this.handleDeleteEvent}
            events={events}
          />
        </Grid.Column>
        <Grid.Column width={6}>

        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(EventDashboard);
