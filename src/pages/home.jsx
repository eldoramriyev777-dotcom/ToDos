import React from 'react'
import Navbar from '../navigation/navbar'
import { BottomNavbar, InfoLeft, DiagramRight, JointInfoWrap, OurServices, PictureThreeDiv, PictureFirst, MiddlePicture, LastPictureSide, ThreePicturesWrap, FreeSpace, TalkingMan, TalkingWrap, WomanTalking, WomanTalkWrap, LeftWomanWrap, CommentsSide, CommentSideWrap, CommentTemplateUp, CommentsDown, GroupModeling, GroupModelingWrap, ModelingGroupDown, OurBlog, Categories, CategoriesWrap, CategoriesUp } from './homeStyle'
import progresBar from '../assets/progres-bar.png';
import graph from '../assets/graph.svg';
import circleFrame from '../assets/circleFrame.png';
import picture1 from '../assets/picture1.svg'
import picture2 from '../assets/picture2.svg'
import picture3 from '../assets/picture3.svg'
import arrowRight from '../assets/arrow-right.svg'
import freeSpaceAdds from '../assets/freeSpaceAdds.png'
import talkman from '../assets/manTalkinonPhone.png'
import check from '../assets/check.svg'
import womanTalk from '../assets/talkinWoman.png'
import feather from '../assets/feather.svg'
import eye from '../assets/eye.svg'
import sun from '../assets/sun.svg'
import bpro1 from '../assets/bprofile1.svg'
import bpro2 from '../assets/bprofile2.svg'
import bpro3 from '../assets/bprofile3.svg'
import vector_left from '../assets/arrow-left.svg'
import vector_right from '../assets/arrow-right.svg'
import groupPhoto from '../assets/group-photo.png'
import checkDown from '../assets/chevron-down.svg'
import article1 from '../assets/Article1.png'
import article2 from '../assets/Article2.png'
import article3 from '../assets/Article3.png'
import FooterComponent from '../footer/footer';

const HomeComponent = () => {
  return (
    <div>
      <Navbar></Navbar>
      <BottomNavbar>
        <JointInfoWrap>
        <InfoLeft>
          <div className='leftInfoWrap'>
          <h3>Save time by building  fast with Boldo Template </h3>
          <p>Funding handshake buyer business-to-business metrics iPad partnership. 
            First mover advantage innovator success deployment non-disclosure.</p>
            <div className='bottonWrap'>
            <button className='leftBottom'>Buy template</button>
            <button className='rightBottom'>Explore</button>
            </div>
          </div>
        </InfoLeft>
        <DiagramRight>
            <div className='imgsWrap'>
              <img src={progresBar}/>
              <div className='bottomImgs'>
                <div className='smallGraphWrap'>
                  <img src={graph}/>
                </div>
                <img src={circleFrame}/>
              </div>
            </div>
        </DiagramRight>
        </JointInfoWrap>
        <FreeSpace>
          <img src={freeSpaceAdds} alt="" />
        </FreeSpace>
      </BottomNavbar>
      <OurServices>
        <small>Our Services</small>
        <p>Handshake infographic mass market crowdfunding iteration.</p>
      </OurServices>
      <PictureThreeDiv>
        <ThreePicturesWrap>
        <PictureFirst>
          <img className='pictureAll' src={picture1} alt="picture1" />
          <small>Cool feature title</small>
          <span>Learning curve network effects return on investment.</span>
          <p>Explore page <img src={arrowRight} alt="arrowright" /></p>
        </PictureFirst>
        <MiddlePicture>
          <img className='pictureAll' src={picture2} alt="picture1" />
          <small>Even cooler feature</small>
          <span>Learning curve network effects return on investment.</span>
          <p>Explore page <img src={arrowRight} alt="arrowright" /></p>
        </MiddlePicture>
        <LastPictureSide>
          <img className='pictureAll' src={picture3} alt="picture1" />
          <small>Cool feature title</small>
          <span>Learning curve network effects return on investment.</span>
          <p>Explore page <img src={arrowRight} alt="arrowright" /></p>
        </LastPictureSide>
        </ThreePicturesWrap>
      </PictureThreeDiv>
      <TalkingMan>
        <TalkingWrap>
        <img className='mantalking' src={talkman} alt="" />
        <div className='wrapAllinfo'>
          <small>We connect our customers with the best, and help them keep up-and stay open.</small>
          <ul>
            <li> <div><img src={check} /></div> <span>We connect our customers with the best.</span></li>
            <li> <div><img src={check} /></div> <span>Advisor success customer launch party.</span></li>
            <li> <div><img src={check} /></div> <span>Business-to-consumer long tail.</span></li>
          </ul>
          <button>Start now</button>
        </div>
        </TalkingWrap>
      </TalkingMan>
      <WomanTalking>
        <WomanTalkWrap>
          <LeftWomanWrap>
            <span>We connect our customers with the best, and help them keep up-and stay open.</span>
            <div className='featherWrap'><img src={feather} alt="feather" /><small>We connect our customers with the best.</small></div>
            <div><img src={eye} alt="eye" /><small>Advisor success customer launch party.</small></div>
            <div><img src={sun} alt="sun" /><small>Business-to-consumer long tail.</small></div>
          </LeftWomanWrap>
          <img className='talkWoman' src={womanTalk} />
        </WomanTalkWrap>
      </WomanTalking>
      <CommentsSide>
        <CommentSideWrap>
          <CommentTemplateUp>
            <span>An enterprise template to ramp up your company website</span>
            <div className='vectorsWrap'>
              <div><img src={vector_left} alt="" /></div>
              <div><img src={vector_right} alt="" /></div>
            </div>
          </CommentTemplateUp>
          <CommentsDown>
            <div className='box1'> 
              <small>“Buyer buzz partner network disruptive non-disclosure agreement business”</small>
              <div className='profileDownWrap'><img src={bpro1} alt="" /> <div className='nextProfileImg'><span>Albus Dumbledore</span><small>Manager @ Howarts</small></div></div>
            </div>
            <div className='box2'>
              <small>“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”</small>
              <div className='profileDownWrap'><img src={bpro2} alt="" /> <div className='nextProfileImg'><span>Severus Snape</span><small>Manager @ Slytherin</small></div></div>
            </div>
            <div className='box3'>
              <small>“Release facebook responsive web design business model canvas seed money monetization.”</small>
              <div className='profileDownWrap'><img src={bpro3} alt="" /> <div className='nextProfileImg'><span>Harry Potter</span><small>Team Leader @ Gryffindor</small></div></div>
            </div>
          </CommentsDown>
        </CommentSideWrap>
      </CommentsSide>
      <GroupModeling>
        <GroupModelingWrap>
          <img src={groupPhoto} alt="" />
          <ModelingGroupDown>
              <small>We connect our customers with the best, and help them keep up-and stay open.</small>
              <div className='groupModelInfoSmall'>
                <div className='infoSmalWrapping'>
                  <span>We connect our customers with the best?</span>
                  <div className='chevsonDownWrap'><img src={checkDown} alt="" /></div>
                  <hr />
                </div>
                <div className='infoSmalWrapping'>
                  <span>Android research & development rockstar? </span>
                  <div className='chevsonDownWrap'><img src={checkDown} alt="" /></div>
                  <hr />
                </div>
              </div>
          </ModelingGroupDown>
        </GroupModelingWrap>
      </GroupModeling>
      <OurBlog>
        <small>Our Blog</small>
        <p>Value proposition accelerator product management venture</p>
      </OurBlog>
      <Categories>
        <CategoriesWrap>
          <CategoriesUp>
            <div><img src={article1} alt="" /></div>
            <div><img src={article2} alt="" /></div>
            <div><img src={article3} alt="" /></div>
          </CategoriesUp>
          <button>Load more</button>
        </CategoriesWrap>
      </Categories>
      <FooterComponent/>
    </div>
  )
}

export default HomeComponent
