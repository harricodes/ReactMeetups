import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory} from 'react-router-dom'
function NewMeetup(props){
    const history = useHistory();
    
    function addMeetupHandler(meetupDate){
        fetch('https://meetup-fd136-default-rtdb.firebaseio.com/meetups.json', {
            method: 'POST',
            body: JSON.stringify(meetupDate),
                headers: {
                    'Content-Type': 'application/json'
                }
        }).then( () => {
            history.replace('/')
        });
    }

    return (
      <section>
        <h1>Add new meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
      </section>
    );
}

export default NewMeetup;