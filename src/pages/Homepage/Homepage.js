import './Homepage.scss';
import Contactlist from '../../components/Contactlist/Contactlist';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <main>
      <header>Doodleblue Task</header>
      <p className="contactHeading">CONTACTS</p>
      <Contactlist />
      <Link to="form" className="addContact">
        Add Contact
      </Link>
    </main>
  );
};
export default Homepage;
