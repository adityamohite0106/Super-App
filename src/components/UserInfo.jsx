import './UserInfo.css'
// import avatar from '../Image/avatar.png';

export default function UserInfo() {
    const user = JSON.parse(localStorage.getItem("user"))
    const movies = JSON.parse(localStorage.getItem("selected"))
    return (
        <div className="profile-card">
            <div>    <img src="/Image/avatar.png" alt="Avatar" /></div>
         <div> <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.mobile}</p>
          <p style={{ fontSize: "1.2em" }}>{user.username}</p>
          <div className="movies-container">
            <div className="movie-tags">
              {movies.map((movie, idx) => (
                <p key={idx}>{movie}</p>
              ))}
            </div>
          </div>
          </div>
        </div>
      );
    }