import classes from './Auth.module.css';

export default function Login() {
  return (
    <>
      <div className={classes.auth_input}>
        <input type="text" name="login" id="login" placeholder="" />
        <label htmlFor="login"> Login</label>
      </div>
      <div className={classes.auth_input}>
        <input type="password" name="password" id="password" placeholder="" />
        <label htmlFor="password"> Password</label>
      </div>
    </>
  );
}
