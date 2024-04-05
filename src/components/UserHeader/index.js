import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { editUserName } from '../../Redux/userProfileSlice';


import "./style.css";

const UserHeader = () => {
 const dispatch = useDispatch();
 const userName = useSelector(state => state.user.userProfile?.userName);
 const firstName = useSelector(state => state.user.userProfile?.firstName);
 const lastName = useSelector(state => state.user.userProfile?.lastName);

 const [editedUserName, setEditedUserName] = useState(userName);
 const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(editUserName({userName: editedUserName}));
    setIsEditing(false);
  };

  return(
    <>
      {!isEditing ? (
        <div className="header">
          <h1>Welcome back<br />{firstName} {lastName}!</h1>
          <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
        </div>
      ) : (
        <form className="form-edit" onSubmit={handleSubmit}>
          <h1>Edit user info</h1>
          <label htmlFor="username">User name:<input 
              type="text"
              id="username"
              value={editedUserName}
              onChange={(e) => setEditedUserName(e.target.value)}
          />
          </label>
          
          <label htmlFor="firstname">First name:<input 
              type="text"
              id="firstname"
              placeholder={firstName}
              readOnly
          />
          </label>
          
          <label htmlFor="lastname">Last name:<input 
              type="text"
              id="lastname"
              placeholder={lastName}
              readOnly
          />
          </label>
          
          <div className='edit-button-container'>
            <button type='submit' className='edit-button'>Save</button>
            <button className='edit-button' onClick={handleCancelClick}>Cancel</button>
          </div>
        </form>
      )}
    </> 
  )
};

export default UserHeader;
