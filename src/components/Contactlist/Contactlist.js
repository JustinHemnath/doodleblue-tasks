import './Contactlist.scss';
import { useSelector } from 'react-redux';
import Contactcard from '../Contactcard/Contactcard';
import { Link } from 'react-router-dom';

const Contactlist = () => {
  const contacts = useSelector((store) => store.contacts);

  return (
    <div className="Contactlist">
      {contacts.length === 0 ? (
        <h1>
          You have no contacts in your list. <br />
          <br /> Click the 'Add Contact' button to add contacts.
        </h1>
      ) : (
        contacts.map((item) => {
          const { id, name, email, company, tel } = item;
          return (
            <Contactcard
              key={id}
              name={name}
              email={email}
              company={company}
              tel={tel}
              id={id}
            />
          );
        })
      )}

      {contacts.length > 1 ? (
        <Link to="chatroom" className="openchat">
          OPEN CHAT
        </Link>
      ) : (
        <h1>You need to add atleast 2 contacts to create a new chat session</h1>
      )}
    </div>
  );
};
export default Contactlist;
