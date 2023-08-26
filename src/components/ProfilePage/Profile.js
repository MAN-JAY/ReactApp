import React  from 'react'
import { useOutletContext } from 'react-router-dom';
import "./Profile.css";

const Profile = () => {
  // user details from react outlet
  const selectedUser = useOutletContext();
  
  return (
      <div className="user_detail"> 
            <div className="user_info_section">
            <div className="user_info">
                  <img
                    src={selectedUser.profilepicture}
                    alt="profile_picture" 
                    className="profile__image"
                  />
                  <h3 className="name">{selectedUser.name}</h3>
                  <div className="personal__details">
                    <div className="key__value">
                      <span>Username : </span>
                      <p>{selectedUser.username}</p>
                    </div>
                    <div className="key__value">
                      <span>email : </span>
                      <p>{selectedUser.email}</p>
                    </div>
                    <div className="key__value">
                      <span>Phone : </span>
                      <p>{selectedUser.phone}</p>
                    </div>
                    <div className="key__value">
                      <span>website : </span>
                      <p>{selectedUser.website}</p>
                    </div>
                  </div>
                  <div className="border"></div>
                  <p>Company</p>
                  <div className="company__details">
                    <div className="key__value">
                      <span>Name : </span>
                      <p>{selectedUser.company.name}</p>
                    </div>
                    <div className="key__value">
                      <span>catchphrase : </span>
                      <p>{selectedUser.company.catchPhrase}</p>
                    </div>
                    <div className="key__value">
                      <span>bs : </span>
                      <p>{selectedUser.company.bs}</p>
                    </div>
                  </div>
            </div>

            <div className="vertical__border"></div>
            
            <div className="user__address">
                    <span className='heading'>Address :</span>
                  <div className="address">
                    <div className="key__value">
                      <span>Street: </span>
                      <p>{selectedUser.address.street}</p>
                    </div>
                    <div className="key__value">
                      <span>Suite: </span>
                      <p>{selectedUser.address.suite}</p>
                    </div>
                    <div className="key__value">
                      <span>City: </span>
                      <p>{selectedUser.address.city}</p>
                    </div>
                    <div className="key__value">
                      <span>Zipcode:</span>
                      <p>{selectedUser.address.zipcode}</p>
                    </div>
                  </div>
                  <div className="map">
                  <iframe
                      src={`https://maps.google.com/maps?q=${selectedUser.address.geo.lat},${selectedUser.address.geo.lng}&output=embed`}
                      width="450"
                      height="260"
                      zoom={8}
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className="geo__location">
                      <p className="latitude">
                        {" "}
                        Lat : {selectedUser.address.geo.lat}
                      </p>
                      <p className="longitude">
                        {" "}
                        Lng : {selectedUser.address.geo.lng}
                      </p>
                    </div>
                  </div>
            </div>

            </div>
      </div>
  )
}

export default Profile