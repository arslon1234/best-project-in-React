import './work.scss'
import item1 from '../../assets/images/item1.jpg'
import {useSpring, animated} from 'react-spring'
import styled from 'styled-components'
const ImgContainer =styled(animated.div)`
       width: 400px;
       height: 500px;
       margin-left: 100px;
       background-clip: border-box;
       z-index: 3;
       margin-top: 100px; 
       position: absolute;
`
const WorkImg = styled.img`
       width: 100%;
       height: 80%;
`;
const WorkTitle = styled.p`
       z-index: 6;
       position: absolute;
`
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
export default function Work() {
       const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: {mass:10, tension: 200, friction: 50}}))
       return (
              <div className="works" id="work">
              <span className="web">WEB</span>
                     <div className="worktitle">
                            <span>Work {"/>"}</span>
                            <span>Selected web, mobile, video projects...</span>
                     </div>
                     <div className="workItem">
                          <ImgContainer
                            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
                            onMouseLeave={() => set({xys:[0,0,1]})}
                            style={{
                            //     transform: props.xys.interpolate(trans)
                            transform: props.xys.interpolate(trans)
                            } }
                          >
                                 <WorkImg src={item1}/>
                                 <WorkTitle>xasdwq</WorkTitle>
                          </ImgContainer>
                     </div>
              </div>
       )
}

// import React from 'react'
// import me from './images/man2.png'
// import {useSpring, animated} from 'react-spring'
// import styled from 'styled-components'

// const Container =styled(animated.div)`
//        display: flex;
//        align-item: center;
//        justify-content: center;
//        flex-direction: column;
//        background-color: #C7D2FE66;
//        padding: 60px;
//        border-radius: 10px;
//        z-index: 1;
//        position: relative;
//        backdrop-filter: blur(10px);
//        border: 2px solid transparent;
//        background-clip: border-box;
//        cursor:pointer;
// `

// const StyledImg = styled.img`
//        width: 250px;
//        height: 250;
//        border: 2px solid #000;
//        border-radius: 50%;
// `;
// const StyledH1 = styled.h1`
//        line-height: 1.5;
//        letter-spacing: 1.15;
//        font-family: "Poppins";
//        text-align: center;
// `;
// const StyledH3 = styled.h3`
//        line-height: 1.5;
//        letter-spacing: 1.15;
//        font-family: "Poppins";
//        font-size: 20px;
//        text-align: center;

      
// `
// const calc = (x, y) => [-(y - window.innerHeight / 2) / 15, (x - window.innerWidth / 2) / 15, 1]
// const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
// export default function Glasscart() {
       // const [props, set] = useSpring(()=>({xys : [0, 0, 1], config:{mass:10, tension: 200, friction: 50}}))
//        return (
//               <Container
//                onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
//             onMouseLeave={() => set({xys:[0,0,1]})}
//             style={{
//                 transform: props.xys.interpolate(trans)
//             }}
//               >
//                      <StyledImg src={me}/>
//                      <StyledH1>ArslonBek</StyledH1>
//                      <StyledH3>Frontend Developer <br /> Reactjs Developer</StyledH3>
//               </Container>
//        )
// }

