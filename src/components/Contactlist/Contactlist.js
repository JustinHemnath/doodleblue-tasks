import './Contactlist.scss';
import { useSelector } from 'react-redux';
import Contactcard from '../Contactcard/Contactcard';
import { useEffect } from 'react';
import { useState } from 'react';

const Contactlist = () => {
  const contact = useSelector((store) => store.contact);
  const [list, setlist] = useState(contact);

  // useEffect(() => {
  //   if (list === []) {
  //     setListValid(!);
  //   }
  // }, [list]);

  return (
    <div className="Contactlist">
      {list !== [] ? (
        <h1>
          You have no contacts in your list. Click the Add Contact button to add
          contacts
        </h1>
      ) : (
        contact.map((item) => {
          return (
            <Contactcard
              key={item.id}
              name={item.name}
              email={item.email}
              company={item.company}
              tel={item.tel}
              id={item.id}
            />
          );
        })
      )}
    </div>
  );
};
export default Contactlist;
