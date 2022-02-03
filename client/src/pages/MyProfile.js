import React from 'react';
import { Link } from 'react-router-dom';
import SubscriptionBox from '../components/SubscriptionBox';
import MenuSlideIn from '../components/MenuSlideIn';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';


function MyProfile() {
   const { data, loading } = useQuery(QUERY_USER);

   let user;
   if (data) {
     user = data.user;
   }

   if (loading) {
     return <div>loading...</div>
   }

  return (
    <>
    <MenuSlideIn />
      <div className="container my-4">
        <Link to="/">← Back to Home</Link>
        <h1 className='mb-3 title'>Account</h1>
        {user ? (
          <>
            <div className='flex-row justify-space-around align-center account-info'>
              <div className='flex-column align-center'>
              <span className='account-emoji' role='img' aria-label='face savoring food'>😋</span>
              <h4 className='name mb-2'><span>{user.firstName} {user.lastName}</span></h4>
              </div>
              <div>
                <h5 className='mb-3'>Email: <span>{user.email}</span></h5>
                <h5 className='mb-3'>Location: <span>{user.city}, {user.province}</span></h5>
                <h5>Subscriptions: <span>{user.subscription.length}</span></h5>
              </div>
            </div>

            {user.subscription.length ? (
              <div className="d-flex flex-wrap">
                {user.subscription.map((subscription, index) => (
                  <SubscriptionBox 
                    key={index}
                    subscription={subscription} 
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className='no-sub mt-5'>
                <img src={require('../components/assets/images/family-dinner.jpg')} alt='family making dinner' />
                <div className='mx-4 browse'>
                  <h2 className='title mb-4'>Start Browsing our Savoury Meals!</h2>
                  <h5 className='mb-4'>Once you have purchased your first subscription it will show up here for you to view and edit!</h5>
                  <div>
                    <Link className='big-btn' to='/meals'>Browse Our Menu</Link>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <h4>
            You need to be logged in to see this page. Use the navigation links above to sign up of login!
          </h4>
        )}
      </div>
    </>
  );
}

export default MyProfile;
