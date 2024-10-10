import classes from './Auth.module.css';

export default function SignUp({changeUserInput}) {
  
  return (
    <>
      <div className={classes.auth_input}>
        <input type="text" name="username" id="username" placeholder="" onChange={changeUserInput}/>
        <label htmlFor="username"> Username</label>
      </div>
      <div className={classes.auth_input}>
        <input type="text" name="email" id="email" placeholder="" onChange={changeUserInput}/>
        <label htmlFor="email"> E-mail</label>
      </div>
      <div className={classes.auth_input}>
        <input type="password" name="password" id="password" placeholder="" onChange={changeUserInput}/>
        <label htmlFor="password"> Password</label>
      </div>
    </>
  );
}
