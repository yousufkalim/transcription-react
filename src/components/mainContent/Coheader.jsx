import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faNavicon } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import TagsList from './TagsList';

import GraphsHome from './GraphsHome';

function Coheader() {
  const navigate = useNavigate();
  const handleback = () => {
    navigate('/');
  };

  const Downloaddata = () => {
    const htmlContent = document.getElementById('Data').outerHTML;
    const plainText = htmlContent.replace(/<[^>]+>/g, '');
    const blob = new Blob([plainText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'webpage.doc';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="body">
      <div className="coheader">
        <div className="title">
          <div className="back-button">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="back-icon"
              onClick={handleback}
              width={50}
              height={50}
            />
          </div>
          <h5>falcon_meeting_audio.mp3</h5>
        </div>
        <div className="btns">
          <div className="label">
            <p>Trancelate</p>
          </div>

          <div className="select-language">
            <select type="select">
              <option value="English">English</option>
              <option value="urdu">Urdu</option>
              <option value="persian">Persian</option>
              <option value="arabic">Arabic</option>
            </select>
          </div>
          <div className="download-btn">
            <button type="button" onClick={Downloaddata}>
              Download
            </button>
          </div>
        </div>
        <div className="burgericon">
          <FontAwesomeIcon icon={faNavicon} className="menu" onClick={handleClick} />
          {showMenu ? (
            <div className="menue">
              <div className="label">
                <p>Trancelate</p>
              </div>

              <div className="select-language">
                <select type="select">
                  <option value="English">English</option>
                  <option value="urdu">Urdu</option>
                  <option value="persian">Persian</option>
                  <option value="arabic">Arabic</option>
                </select>
              </div>
              <div className="download-btn">
                <button type="button" onClick={Downloaddata}>
                  Download
                </button>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="scroll">
        <div className="BodyContent">
          <GraphsHome />
          <TagsList />

          <div id="Data">
            <p id="heading">Summary</p>
            <p>
              Elon Musk has open sourced the code to Twitter&apos;s recommendation algorithm. The
              code base is mostly written in sc age Av language, that&apos;s kind of like Java, but
              concise sand just way better.It finds a pool of fifteen hundred tweets that you might
              be interested in.
            </p>
            <p id="heading">Transcript</p>
            <p>
              It is April third twenty twenty three, and you were watching the code report. Less
              than six months ago, Elon musk paid forty four billion dollars for Twitter, and people
              have been dunking on ever. He fired half the company gave Blue check marks to the
              peasants and freed a bunch of people from Twitter jail. Do not come. Do not come.
            </p>
            <p>
              I&apos;m gonna come. In some ways it looks like Twitter is collapsing. It&apos;s now
              only worth twenty billion dollars. Many users have moved to mastodon. The New York
              Times just lost its blue and even Lebron James won&apos;t pay five.
            </p>
            <p>
              So that elon by Twitter just to be the king and watch it byrne, or is he actually
              playing a game of five d chess against the mainstream news media like Fox news and Cnn
              channels that your grandparents watch. He&apos;s playing the long game to take their
              advertisers. By making Twitter, the future platform for all journalists and if he
              plays his moves right, I predict he will become the richest man in the world, even
              richer than Elon Musk himself.
            </p>
            <p>
              Yesterday, he made a crazy move by open sourcing the code to Twitter&apos;s
              recommendation algorithm. And it&apos;s some of the most interesting code you&apos;ll
              ever see. In today&apos;s video we&apos;ll dissect the code and explain why they wanna
              make Twitter like the linux of social media companies well kind of, though it is real
              production code at Twitter, it&apos;s not one hundred percent of the code. So
              it&apos;s really only useful for research and transparency. The code base is mostly
              written in sc age Av language, that&apos;s kind of like Java, but concise sand just
              way better. Twitter was originally written with Ruby on rails, but they moved away
              from it over a decade to go.
            </p>
            <p>
              Everybody already kind of knows how these algorithms work, but it&apos;s extremely
              interesting to see the real deal implemented in code. Like this method in the early
              bird tensorflow based similarity engine dot skull file we have a bunch of ranking
              parameters each with a default value. Re tweets provide a twenty boost while likes
              provide a thirty boost. And images and videos also provide a small boost and not
              surprisingly, you also get a boost for being a pain Twitter blue member. Like I said,
              the New York Times just lost its blue mark. And now it&apos;s not verified, so it
              could just be a cap behind the screen the flip side, a tweak can get a deb off if the
              account has a lot of mute, blocks or spam reports. Also, spelling errors and made
              upwards will give you a deep And there&apos;s also a long list of topics that
              won&apos;t be amplified. Like anything that&apos;s been flagged as misinformation,
              harassment putting bounties on people&apos;s head and many other no knows.
            </p>
            <p>
              The platform also keeps close track of elections and there&apos;s actually tools in
              place like this government requested class that allows president and Cam to keep you
              safe from bad content. But taking a step back, we can break the total algorithm into
              three parts. First, it finds a pool of fifteen hundred tweets that you might be
              interested in. Using a technique called candidate sourcing. It includes accounts
              follow but also out of network sources by clustering similar accounts together
              allowing it to find relevant tweets from accounts that you don&apos;t follow yet. From
              there, it ranks that pool of tweets with a forty eight million parameter neural
              network. And then finally, it filters out content by static rules like accounts that
              you&apos;ve blocked or muted. There&apos;s also a second repo called the algorithm Ml
              that contains the machine learning models used to Twitter.
            </p>
            <p>
              The project uses p and they created their own in house and bedding that contain over a
              billion nodes and hundreds of billions of edges. On the home feed, it uses something
              called a heavy rink, but some people have criticized this for amplifying
              misinformation. The most controversial block of code though, was this one here that
              keeps track of whether or not an author is a Democrat or Republican or whether
              it&apos;s Elon or a power user but apparently, this code is only used for collecting
              metrics, but has already been removed. One thing that&apos;s not found in the source
              code though, Is it&apos;s a apparent j of Vip account like Ao on the left and cat turd
              on the right, but which was reported by platformer.
            </p>
            <p>
              The code is highly interesting and I recommend you clone it and check it yourself, but
              why would Elon do this? Why would he release his trade secrets to the public? It kinda
              makes Twitter like the linux of social media. The public can identify things that are
              fare in the algorithm and address them in public. It&apos;s mostly a marketing move to
              build trust. It no longer feels like it&apos;s run by a mysterious, that can shadow
              band and Deep boost content without some degree of transparency. And there&apos;s a
              huge opportunity here because the trust in mainstream media has fallen so low.
            </p>
            <p>
              Many people already use Twitter to assume the news and although Twitter currently
              losing money, they&apos;ve talked about compensating content creators and just like
              Youtube and other platforms do. When that happens, journalists could potentially make
              a living on Twitter and put their best content there. Elon knows, Twitter Blue is
              never going to make twitter any money, but rather it&apos;s designed to uplift
              independent creators while embarrassing the establishment. The blue checks are now
              relevant and by open sourcing the code twitter is laying the groundwork to become the
              Fair balanced, most trusted name and news. And this may force other social media
              platforms to become more parent. Putting elon balls and Zuckerberg court. This has
              been the code report, and thanks for watching, and I will see you in the next one.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coheader;
