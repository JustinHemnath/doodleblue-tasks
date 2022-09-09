import './Contactcard.scss';
import logo from './google.png';
import { useState, useRef } from 'react';
import { DELETE_CONTACT } from '../../features/contactSlice';
import { useDispatch } from 'react-redux';

const Contactcard = ({ name, email, company, tel, id }) => {
  const [view, setView] = useState(true);
  const dispatch = useDispatch();

  return (
    <div className="Contactcard" style={{ height: view ? '5.5em' : '15em' }}>
      <div className="topPart">
        <img src={logo} width="75" height="75" />
        <h1>{name}</h1>
        <div className="buttons">
          <button onClick={() => setView(!view)}>
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
