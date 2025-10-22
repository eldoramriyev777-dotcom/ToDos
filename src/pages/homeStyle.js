import styled from "styled-components";

export const NotFoundImageWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;
export const NotFoundImage = styled.img`
width: fit-content;
`;
export const BottomNavbar = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #0A2640;
flex-direction: column;
`
export const JointInfoWrap = styled.div`
max-width: 1200px;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`

export const InfoLeft  = styled.div`
display: flex;
align-items: start;
justify-content: left;
.leftInfoWrap{
    display: flex;
    flex-direction: column;
    gap: 25px;  
}
.bottonWrap{
    align-items: start;
    justify-content: left;
    display: flex;
    gap: 24px;
}
h3{
display: flex;
width: 550px;
height: 138px;
flex-direction: column;
justify-content: center;
font-size: 48px;
font-style: normal;
font-weight: 400;
color: #FFFFFF;
}
p{
width: 550px;
color: var(--Light-Grey, #F1F1F1);
font-size: 16px;
font-style: normal;
font-weight: 400;
}
.leftBottom{
display: flex;
padding: 16px 56px;
justify-content: center;
align-items: center;
gap: 8px;
border-radius: 56px;
border: 2px solid #69E6A6;
background: var(--Green, #65E4A3);
}
.rightBottom{
display: flex;
padding: 16px 56px;
justify-content: center;
align-items: center;
gap: 8px;
border-radius: 56px;
border: 2px solid #FFF;
background-color: transparent;
color: #FFFFFF;
}
`
export const DiagramRight = styled.div`
display: flex;
.imgsWrap{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    gap: 25px;
}
.bottomImgs{
    display: flex;
    gap: 39px;
}
.smallGraphWrap{
width: 192.175px;
height: 165.335px;
flex-shrink: 0;
border-radius: 15.03px;
background: rgba(255, 255, 255, 0.18);
backdrop-filter: blur(34.35533142089844px);
display: flex;
align-items: center;
justify-content: center;
}
`
export const FreeSpace = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 217px;
background-color: #0A2640;
img{
    width: 1173px;
height: 93px;
flex-shrink: 0;
}
`

export const OurServices = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 12px;
small{
color: var(--Gray, #777);
font-size: 20px;
font-style: normal;
font-weight: 400;
}
p{
width: 842px;
color: #000;
text-align: center;
font-size: 48px;
font-weight: 400;
}
padding: 80px 0;
background-color: #FFF;
`

export const PictureThreeDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const ThreePicturesWrap = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
max-width: 1200px;
width: 100%;
gap: 100px;
.pictureAll{
width: 300px;
height: 354px;
}
padding: 0 50px;
`
export const PictureFirst = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
small{
    color: #000;
font-size: 24px;
font-style: normal;
font-weight: 400;
}
span{
    color: var(--Gray, #777);
font-size: 20px;
font-style: normal;
font-weight: 400;
width: 293px;
}
p{
color: #0A2640;
font-size: 20px;
font-weight: 700;
display: flex;
align-items: center;
gap: 12px;
}
`
export const MiddlePicture = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
small{
    color: #000;
font-size: 24px;
font-style: normal;
font-weight: 400;
}
span{
    color: var(--Gray, #777);
font-size: 20px;
font-style: normal;
font-weight: 400;
width: 293px;
}
p{
color: #0A2640;
font-size: 20px;
font-weight: 700;
display: flex;
align-items: center;
gap: 12px;
}
`
export const LastPictureSide = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
small{
    color: #000;
font-size: 24px;
font-style: normal;
font-weight: 400;
}
span{
    color: var(--Gray, #777);
font-size: 20px;
font-style: normal;
font-weight: 400;
width: 293px;
}
p{
color: #0A2640;
font-size: 20px;
font-weight: 700;
display: flex;
align-items: center;
gap: 12px;
}
`
export const TalkingMan  = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 197px;
`

export const TalkingWrap = styled.div`
max-width: 1200px;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
.mantalking{
    height: 600px;
}
.wrapAllinfo{
    display: flex;
    flex-direction: column;
    height: 479px;
    align-items: start;
    justify-content: space-between;
    small{
display: flex;
width: 493px;
height: 164px;
flex-direction: column;
justify-content: center;
color: #000;
font-size: 36px;
font-style: normal;
font-weight: 400;
    }
    button{
display: flex;
padding: 16px 56px;
justify-content: center;
align-items: center;
gap: 8px;
border-radius: 56px;
border: 2px solid var(--Dark-Blue, #0A2640);
background-color: var(--Dark-Blue, #0A2640);
color: #FFF;
font-size: 20px;
font-style: normal;
font-weight: 700;
    }
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
height: 36px;
flex-shrink: 0;
border-radius: 50%;
background-color: #0A2640;

    }
}
li{
padding-bottom: 24px;
list-style-type: none;
display: flex;
align-items: center;
gap: 27px;
justify-content: left;
color: #000;
font-size: 20px;
font-style: normal;
font-weight: 400;
}
`
export const WomanTalking = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 120px 0;
`
export const WomanTalkWrap = styled.div`
display: flex;
justify-content: space-between;
max-width: 1200px;
width: 100%;
align-items: center;
.talkWoman{
    height: 689px;
}
`
export const LeftWomanWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    height: 480px;
    span{
        display: flex;
        width: 493px;
        height: 164px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;
        color: #000;
        font-size: 36px;
        font-style: normal;
        font-weight: 400;
    }
    div{
        display: flex;
        justify-content: left;
        align-items: center;
        width: 500px;
        height: 68px;
        flex-shrink: 0;
        border-radius: 4px;
        background: #FFF;
        box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.08);
        gap: 14px;
        img{
         padding-left   : 22px;
        }
        small{
            display: flex;
            width: 387px;
            height: 36px;
            flex-direction: column;
            justify-content: center;
            flex-shrink: 0;
            color: #000;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
        }
    }
    .featherWrap{
            width: 500px;
            height: 68px;
            flex-shrink: 0;
            border-radius: 4px;
            background: var(--Dark-Blue, #0A2640);
            box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.08);
        small{
            display: flex;
            width: 387px;
            height: 36px;
            flex-direction: column;
            justify-content: center;
            flex-shrink: 0;
            color: #FFF;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            }
        }
`
export const CommentsSide  = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: var(--Dark-Blue, #0A2640);
height: 797px;
flex-shrink: 0;
`
export const CommentSideWrap = styled.div`
display: flex;
flex-direction: column;
max-width: 1200px;
width: 100%;
gap: 56px;
`
export const CommentTemplateUp = styled.div`
display: flex;
justify-content: space-between;
align-items: end;
span{
    display: flex;
    width: 716px;
    height: 139px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #FFF;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
}
.vectorsWrap{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 28px;
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 72px;
        height: 72px;
        flex-shrink: 0;
        background-color: #FFF;
    }
}
`
export const CommentsDown=styled.div`
display: flex;
align-items: start;
justify-content: left;
gap: 22px;
small{
    width: 270px;
    color: #000;
font-size: 24px;
font-style: normal;
font-weight: 400;
}
.box1{
    display: inline-flex;
padding: 40px;
flex-direction: column;
align-items: flex-start;
gap: 40px;
border-radius: 12px;
background-color: #FFF;
box-shadow: 0 12px 32px 0 rgba(0, 0, 0, 0.12);
}
.box2{
    display: inline-flex;
padding: 40px;
flex-direction: column;
align-items: flex-start;
gap: 40px;
border-radius: 12px;
background-color: #FFF;
box-shadow: 0 12px 32px 0 rgba(0, 0, 0, 0.12);
}
.box3{
    display: inline-flex;
padding: 40px;
flex-direction: column;
align-items: flex-start;
gap: 40px;
border-radius: 12px;
background-color: #FFF;
box-shadow: 0 12px 32px 0 rgba(0, 0, 0, 0.12);
}
.nextProfileImg{
    display: flex;
    flex-direction: column;
    span{
        display: flex;
width: 196px;
height: 22px;
flex-direction: column;
justify-content: center;
flex-shrink: 0;
color: var(--Dark-Blue, #0A2640);
font-size: 16px;
font-style: normal;
font-weight: 700;
    }
    small{
        display: flex;
width: 196px;
height: 24px;
flex-direction: column;
justify-content: center;
flex-shrink: 0;
color: var(--Dark-Blue, #0A2640);
font-size: 14px;
font-style: normal;
font-weight: 400;
    }
}
.profileDownWrap{
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 15px;
}
`
export const GroupModeling=styled.div`
padding: 120px 0;
display: flex;
align-items: center;
justify-content: center;
`
export const GroupModelingWrap = styled.div`
max-width: 1200px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
gap: 56px;
`
export const ModelingGroupDown = styled.div`
display: flex;
width: 90%;
align-items: start;
justify-content: space-between;
small{
    display: flex;
width: 500px;
height: 164px;
flex-direction: column;
flex-shrink: 0;
color: #000;
font-size: 36px;
font-style: normal;
font-weight: 400;
}
.groupModelInfoSmall{
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
    align-items: center;
    span{
    display: flex;
    height: 37px;
    flex-direction: column;
    flex-shrink: 0;
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 400; 
}
.chevsonDownWrap{
    display: flex;
    align-items: center;
    justify-content: center;
        width: 28px;
        height: 28px;
        flex-shrink: 0;
        border-radius: 50%;
        background-color: #0A2640;
    }
    .infoSmalWrapping{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 40px;
    }
}
`
export const OurBlog = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 12px;
small{
color: var(--Gray, #777);
font-size: 20px;
font-style: normal;
font-weight: 400;
}
p{
width: 842px;
color: #000;
text-align: center;
font-size: 48px;
font-weight: 400;
}
background-color: #FFF;
`
export const Categories = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 79px 0 124px 0;
`
export const CategoriesWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 84px;
button{
display: inline-flex;
padding: 16px 56px;
justify-content: center;
align-items: center;
gap: 8px;
border-radius: 56px;
border: 2px solid var(--Dark-Blue, #0A2640);
color: var(--Dark-Blue, #0A2640);
font-size: 20px;
font-style: normal;
font-weight: 700;
background-color: transparent;
}
`
export const CategoriesUp = styled.div`
display: flex;
max-width: 1000px;
width: 100%;
justify-content: center;
align-items: center;
gap: 50px;
div{
display: flex;
width: 300px;
flex-direction: column;
align-items: flex-start;
gap: 24px;
}
`

