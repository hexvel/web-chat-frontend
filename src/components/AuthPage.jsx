import axios from "axios";

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post("http://localhost:3000/auth", {
        username: value,
      })
      .then((res) => props.onAuth({ ...res.data, secret: value }))
      .catch((err) => console.log("error", err));
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Здарова 👋</div>

        <div className="form-subtitle">
          Введите свой ник чтобы перейти в мессенджер
        </div>

        <div className="auth">
          <div className="auth-label">Ник</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Войти
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
