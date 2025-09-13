import './App.css'
import ProfileImg from "./assets/profile_thumbnail.png";
function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="profile">
            <div className="img-container">
              <img src={ProfileImg} className="profile-img" alt="profile-img"></img>
            </div>
            <div className="profile-identification">
              <h3 className="profile-name">
                Sarah Dole
              </h3>
              <p className="profile-handle">
                @sarahdole
              </p>
            </div>
        </div>  
        <div>
          <p className="card-desc">
            I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!
          </p>
        </div>    
      </div>
    </div>
  )
}

export default App