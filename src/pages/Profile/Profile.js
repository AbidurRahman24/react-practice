import { useState } from 'react';
import './Profile.css'
import { FaCommentDots, FaBell } from 'react-icons/fa';
const Profile = () => {
    const [followers, setFollower] = useState(786)
    const [Following, setFollowing] = useState(786)
    const [post, setPost] = useState(438)

    const handleFollowerClick = () => {
        setFollower(followers + 1);
    }
    const handleFollowingClick = () => {
        setFollowing(Following + 1);
    }
    const handlePostClick = () => {
        setPost(post + 1);
    }
    return (
        <section class="protfolio">
        <div class="protfolio_header">
          <div class="protfolio_header-left">
            <h3>Hi Shakir</h3>
            <p>Good Morning!</p>
          </div>
          <div class="protfolio_header-right">
            <a href="/message" className='fa-solid'><FaCommentDots/></a>
            <a href="/notification" className='fa-solid'><FaBell/></a>
          </div>
        </div>
        <div class="protfolio_body">
          <div class="protfolio_body-img">
            <img src="https://cdn3.iconfinder.com/data/icons/ramadan-flat-8/64/03-Man-512.png" alt="" />
          </div>
          <div class="protfolio_body-text">
            <h3>Firuz Kabir</h3>
            <p>UI/UX Designer Redwhale</p>
          </div>
          <div class="protfolio_body-footer">
            <div class="protfolio_body-footer--left">
            <h2 onClick={handleFollowerClick}>{followers}K</h2>
              <small class="sml">Followers</small>
            </div>
            <div class="protfolio_body-footer--middle">
              <h2 onClick={handleFollowingClick}>{Following}K</h2>
              <small class="sml">Following</small>
            </div>
            <div class="protfolio_body-footer--right">
              <h2 onClick={handlePostClick}>{post}</h2>
              <small class="sml">Posts</small>
            </div>
          </div>
        </div>
        <div class="protfolio_button">
          <button class="btn1">View Profile</button>
          <button class="btn2">Edit Profile</button>
        </div>
      </section>
    );
};

export default Profile;