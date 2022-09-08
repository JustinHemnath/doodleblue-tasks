import './Contactcard.scss';
import logo from './google.png';
import { useState, useRef } from 'react';
import { DELETE_CONTACT } from '../../features/contactSlice';
import { useDispatch } from 'react-redux';

const Contactcard = ({ name, email, company, tel, id }) => {
  const [view, setView] = useState(true);
  const divRef = useRef();
  const dispatch = useDispatch();

  const toggleContact = () => {
    setView(!view);
    if (view) {
      divRef.current.style.height = '15em';
    } else divRef.current.style.height = '5.5em';
  };

  return (
    <div className="Contactcard" ref={divRef}>
      <div className="topPart">
        <img src={logo} width="75" height="75" />
        <h1>{name}</h1>
        <div className="buttons">
          <button onClick={() => toggleContact()}>
            {view ? 'Show Contact' : 'Hide Contact'}
          </button>
          <button
            onClick={() => dispatch(DELETE_CONTACT(id))}
            className="delete-btn"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="bottompart">
        <div className="bottompartFirst">
          <p>
            <span>Mail ID:</span> {email}
          </p>
          <p>
            <span>Company:</span> {company}
          </p>
        </div>
        <div className="bottompartSecond">
          <p>
            <span>Ph. No.</span> {tel}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Contactcard;
