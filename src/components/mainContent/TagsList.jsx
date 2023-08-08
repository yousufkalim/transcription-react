/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function TagsList() {
  return (
    <div className="TagList">
      <p>Topics/Tags</p>
      <div className="tagbutton">
        <div className="twitter">
          <label>Twitter</label>
        </div>
        <div className="Elon">
          <label>Elon Mask</label>
        </div>
        <div className="Twitterblue">
          <label>Twitter Blue</label>
        </div>
        <div className="algorithm">
          <label>Algorithm</label>
        </div>
        <div className="java">
          <label>Java</label>
        </div>
        <div className="news">
          <label>News</label>
        </div>

        <div className="Mastodon">
          <label>Mastodon</label>
        </div>
        <div className="SocialMedia">
          <label>Social Media</label>
        </div>
      </div>
    </div>
  );
}

export default TagsList;
