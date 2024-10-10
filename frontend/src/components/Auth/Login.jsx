import classes from "./Auth.module.css";
export default function Login({changeUserInput}) {
  
  return (
    <>
      <div className={classes.auth_input}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder=""
          onChange={changeUserInput}
        />
        <label htmlFor="email"> E-mail</label>
      </div>
      <div className={classes.auth_input}>
        <input
          type="password"
          name="password"
          id="password"
          placeholder=""
          onChange={changeUserInput}
        />
        <label htmlFor="password"> Password</label>
      </div>
    </>
  );
}
