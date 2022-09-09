import './Form.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ADD_CONTACT } from '../../features/contactSlice';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  company: yup.string().required(),
  tel: yup.number().required(),
});

const Form = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSubmit = (data) => {
    if (data) {
      let Data = {
        id: new Date().getTime(),
        ...data,
      };
      dispatch(ADD_CONTACT(Data));
      navigate('/');
    }
  };

  return (
    <div className="contactform">
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="heading">
          <h1>ADD CONTACT</h1>
          <div className="underline"></div>
        </div>
        <input
          name="name"
          placeholder="Enter your name"
          {...register('name')}
        />
        <input
          name="email"
          placeholder="Enter your email"
          {...register('email')}
        />
        <input
          name="company"
          placeholder="Enter your company name"
          {...register('company')}
        />
        <input
          type="tel"
          name="tel"
          placeholder="Enter your number"
          {...register('tel')}
        />
        <button type="submit" onSubmit={handleSubmit(formSubmit)}>
          SUBMIT
        </button>
        <Link to="/" className="backButton">
          BACK
        </Link>
      </form>
    </div>
  );
};
export default Form;
