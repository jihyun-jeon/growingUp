(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[348],{9451:function(t,e,r){"use strict";var i=r(7294),o=r(9521),n=r(5893);e.Z=function(t){var e=t.CarouselTitle,r=t.children,o=(0,i.useState)(!1),c=o[0],l=o[1],s=(0,i.useState)(0),p=s[0],g=s[1],m=(0,i.useRef)(null);return(0,i.useEffect)(function(){var t,e;g(null!==(t=null===(e=m.current)||void 0===e?void 0:e.scrollHeight)&&void 0!==t?t:0)},[]),(0,n.jsxs)(a,{children:[(0,n.jsx)("div",{className:"title accordion-title ".concat(c?"open":""),onClick:function(){return l(!c)},children:e}),(0,n.jsx)("div",{ref:m,className:"content ".concat(c?"":"collapsed"),style:{height:"".concat(c?p:0,"px")},children:(0,n.jsx)(d,{children:r})})]})};var a=o.ZP.div.withConfig({displayName:"Accordion__AccordionStyle",componentId:"sc-3loezt-0"})([""," .title{"," &:hover{","}&.open{","}&::before{","}&.open::before{","}}.content{"," &.collapsed{","}}"],{marginBottom:"1rem"},{display:"flex",cursor:"pointer",alignItems:"center",borderRadius:"1rem",borderWidth:"1px","--tw-border-opacity":"1",borderColor:"rgb(55 65 81 / var(--tw-border-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgb(249 242 237 / var(--tw-bg-opacity))",paddingTop:"0.75rem",paddingBottom:"0.75rem",paddingLeft:"1.5rem",paddingRight:"1.5rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(102 102 102 / var(--tw-text-opacity))"},{fontWeight:"700","--tw-text-opacity":"1",color:"rgb(77 85 159 / var(--tw-text-opacity))"},{fontWeight:"700","--tw-text-opacity":"1",color:"rgb(77 85 159 / var(--tw-text-opacity))"},{marginRight:"0.75rem",height:"0px",width:"0px",borderLeftWidth:"5px",borderRightWidth:"5px",borderTopWidth:"5px",borderStyle:"solid",borderLeftColor:"transparent",borderRightColor:"transparent",borderTopColor:"currentColor","--tw-content":"''",content:"var(--tw-content)"},{marginRight:"0.75rem",height:"0px",width:"0px",borderLeftWidth:"6px",borderTopWidth:"5px",borderBottomWidth:"5px",borderRightWidth:"5px",borderStyle:"solid","--tw-border-opacity":"1",borderLeftColor:"rgb(77 85 159 / var(--tw-border-opacity))",borderTopColor:"transparent",borderBottomColor:"transparent",borderRightColor:"transparent","--tw-content":"''",content:"var(--tw-content)"},{overflow:"hidden",transitionProperty:"height",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms"},{height:"0px",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",transitionDuration:"300ms"}),d=(0,o.ZP)("div").withConfig({displayName:"Accordion___StyledDiv",componentId:"sc-3loezt-1"})({paddingLeft:"1.5rem",paddingRight:"1.5rem",paddingBottom:"0.25rem",paddingTop:"1rem"})},2047:function(t,e,r){"use strict";var i=r(9499),o=r(9521),n=r(7294),a=r(6066),d=r(1649),c=r(8357),l=r(5893);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,i)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach(function(e){(0,i.Z)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var g=o.ZP.div.withConfig({displayName:"Carousel__SliderWrapper",componentId:"sc-1q1dkpc-0"})([".slick-slider{display:flex;align-items:center;justify-content:center;width:100vw;position:relative;left:calc(-50vw + 50%);}.slick-list{width:1200px;padding-bottom:20px;overflow:hidden;}.slick-list .slick-track{display:flex;width:100%;height:100%;}.slick-dots{position:absolute;bottom:-30px;}.slick-dots li{display:inline-block;}.slick-dots li button{border-radius:50%;background-color:lightgray;border:1px solid lightgray;margin-right:10px;width:20px;height:20px;color:transparent;}.slick-dots li.slick-active button{background-color:orange;}"]);e.Z=function(t){var e=t.CarouselData,r={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,lazyLoad:"anticipated",prevArrow:(0,l.jsx)(c.Pd.Provider,{value:{color:"lightgray",size:"30px"},children:(0,l.jsx)(m,{onClick:function(){var t;return null==i?void 0:null===(t=i.current)||void 0===t?void 0:t.slickPrev()},children:(0,l.jsx)(d.AFP,{})})}),nextArrow:(0,l.jsx)(c.Pd.Provider,{value:{color:"lightgray",size:"30px"},children:(0,l.jsx)(h,{onClick:function(){var t;return null==i?void 0:null===(t=i.current)||void 0===t?void 0:t.slickNext()},children:(0,l.jsx)(d.CkB,{})})})},i=(0,n.useRef)(null);return(0,l.jsx)(g,{children:(0,l.jsx)(a.Z,p(p({},r),{},{ref:i,children:e.map(function(t,e){return(0,l.jsxs)("div",{className:"slideItem",children:[(0,l.jsxs)(u,{children:["\uD83D\uDCCD\xa0",t.title]}),t.url.includes("imgs")?(0,l.jsx)("div",{style:{backgroundImage:"url(".concat(t.url,")"),backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center",width:"1200px",height:"750px",margin:"0 auto"}}):(0,l.jsx)("iframe",{width:"1200px",height:"600px",src:t.url,title:"YouTube video player",frameBorder:"1",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]},t.title)})}))})};var m=(0,o.ZP)("div").withConfig({displayName:"Carousel___StyledDiv",componentId:"sc-1q1dkpc-1"})({marginRight:"1.25rem"}),h=(0,o.ZP)("div").withConfig({displayName:"Carousel___StyledDiv2",componentId:"sc-1q1dkpc-2"})({marginLeft:"1.25rem"}),u=(0,o.ZP)("h1").withConfig({displayName:"Carousel___StyledH",componentId:"sc-1q1dkpc-3"})({display:"flex",height:"3rem",alignItems:"center",fontSize:"1.25rem",lineHeight:"1.75rem",fontWeight:"700"})},7599:function(t,e,r){"use strict";r.d(e,{Z:function(){return l}});var i=r(9521),o=r(7294),n=function(t){return t.split("\n").reduce(function(t,e){return"<p>".concat(t,"</p>")+"<p>".concat(e,"</p>")})},a=r(5893),d=i.ZP.div.withConfig({displayName:"Growing__StyledGrowing",componentId:"sc-wwd0w3-0"})(["button{","}button:hover{cursor:pointer;}button.btnClicked{"," background-image:linear-gradient(rgb(77 85 159),rgb(77 85 159)),linear-gradient( to top,rgb(234 179 8) 0%,rgb(254 215 170) 10%,rgb(222 94 60) 100% );background-clip:content-box,border-box;}.circleContent p{","}b{","}"],{aspectRatio:"1 / 1",width:"33.333333%",borderRadius:"50%",borderWidth:"5px","--tw-border-opacity":"1",borderColor:"rgb(249 242 237 / var(--tw-border-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgb(77 85 159 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))"},{borderRadius:"50%",borderWidth:"5px",borderColor:"transparent",backgroundOrigin:"border-box"},{marginBottom:"0.25rem"},{"--tw-text-opacity":"1",color:"rgb(222 94 60 / var(--tw-text-opacity))"}),c=(0,i.ZP)(d).withConfig({displayName:"Growing___StyledStyledGrowing",componentId:"sc-wwd0w3-1"})({marginLeft:"auto",marginRight:"auto",maxWidth:"660px"}),l=function(t){var e=t.GrowingData,r=(0,o.useState)(0),i=r[0],d=r[1],l=function(t){d(+t.currentTarget.value)};return(0,a.jsxs)(c,{children:[(0,a.jsx)(s,{children:e.map(function(t,e){return(0,a.jsx)("button",{type:"button",value:e,onClick:l,dangerouslySetInnerHTML:{__html:t[0].replace("\n","<br/>")},className:i===e?"btnClicked":""},e)})}),(0,a.jsx)(p,{children:(0,a.jsxs)(g,{children:[0===i&&(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:n(e[i][1])}}),1===i&&(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:n(e[i][1])}}),2===i&&(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:n(e[i][1])}})]})})]})},s=(0,i.ZP)("div").withConfig({displayName:"Growing___StyledDiv",componentId:"sc-wwd0w3-2"})({display:"flex",flexWrap:"nowrap",justifyContent:"space-around",gap:"3rem"}),p=(0,i.ZP)("div").withConfig({displayName:"Growing___StyledDiv2",componentId:"sc-wwd0w3-3"})({minHeight:"250px",lineHeight:"1.5rem"}),g=(0,i.ZP)("div").withConfig({displayName:"Growing___StyledDiv3",componentId:"sc-wwd0w3-4"})({marginTop:"2rem",borderRadius:"1rem",borderWidth:"1px","--tw-border-opacity":"1",borderColor:"rgb(55 65 81 / var(--tw-border-opacity))",padding:"1rem"})},1500:function(t,e,r){"use strict";r.d(e,{_:function(){return a}});var i=r(9521);r(7294);var o=r(5893),n={blue:{"--tw-bg-opacity":"1",backgroundColor:"rgb(211 229 239 / var(--tw-bg-opacity))"},rosy:{"--tw-bg-opacity":"1",backgroundColor:"rgb(255 226 221 / var(--tw-bg-opacity))"},violet:{"--tw-bg-opacity":"1",backgroundColor:"rgb(234 220 241 / var(--tw-bg-opacity))"},green:{"--tw-bg-opacity":"1",backgroundColor:"rgb(219 244 219 / var(--tw-bg-opacity))"},yellow:{"--tw-bg-opacity":"1",backgroundColor:"rgb(253 236 200 / var(--tw-bg-opacity))"}},a=function(t){var e=t.txt,r=t.color;return(0,o.jsx)(d,{$_css:[{marginRight:"0.5rem",borderRadius:"1rem",paddingLeft:"6px",paddingRight:"6px",paddingTop:"2px",paddingBottom:"2px",fontSize:"0.875rem",lineHeight:"1.25rem"},n[r]],children:e})},d=(0,i.ZP)("span").withConfig({displayName:"Label___StyledSpan",componentId:"sc-ns40ri-0"})(["",""],function(t){return t.$_css})},70:function(t,e,r){"use strict";var i=r(9521),o=r(5675),n=r.n(o);r(7294);var a=r(5893);e.Z=function(t){var e=t.txt,r=t.url;return(0,a.jsxs)(d,{href:r,target:"_blank",rel:"noreferrer",children:["git"===e?(0,a.jsx)(c,{src:"".concat("/portfolio","/imgs/github-icon.png"),alt:"gitIcon",width:24,height:24}):(0,a.jsx)(l,{src:"".concat("/portfolio","/imgs/note.png"),alt:"noteIcon",width:24,height:24}),(0,a.jsx)(s,{children:e})]})};var d=(0,i.ZP)("a").withConfig({displayName:"LinkIcon___StyledA",componentId:"sc-12ygat7-0"})({marginRight:"1.25rem",display:"flex"}),c=(0,i.ZP)(n()).withConfig({displayName:"LinkIcon___StyledImage",componentId:"sc-12ygat7-1"})({marginRight:"0.25rem",height:"1.5rem",width:"1.5rem",borderRadius:"3px",verticalAlign:"-0.15rem"}),l=(0,i.ZP)(n()).withConfig({displayName:"LinkIcon___StyledImage2",componentId:"sc-12ygat7-2"})({marginRight:"0.25rem",height:"1.5rem",width:"1.5rem",borderRadius:"3px",verticalAlign:"-0.15rem"}),s=(0,i.ZP)("span").withConfig({displayName:"LinkIcon___StyledSpan",componentId:"sc-12ygat7-3"})({fontWeight:"600"})},7901:function(t,e,r){"use strict";r.d(e,{l:function(){return i}});var i=r(9521).ZP.div.withConfig({displayName:"ProjectWrapper",componentId:"sc-pciced-0"})(["",""],{overflowX:"hidden",paddingTop:"6rem",paddingBottom:"6rem"})},3747:function(t,e,r){"use strict";r.r(e);var i=r(9521),o=r(1500),n=r(2047),a=r(9451),d=r(70),c=r(7599),l=r(7901);r(7294);var s=r(5893);e.default=function(){return(0,s.jsx)(l.l,{children:(0,s.jsxs)(h,{children:[(0,s.jsx)(u,{children:"Threppa (신발 온라인 쇼핑몰)"}),(0,s.jsxs)(b,{children:[(0,s.jsxs)(p,{children:[(0,s.jsx)(y,{children:"링크"}),(0,s.jsxs)(x,{children:[(0,s.jsx)(d.Z,{txt:"git",url:"https://github.com/jihyun-jeon/crocs-clone-threppa-team"}),(0,s.jsx)(d.Z,{txt:"notion",url:"https://velog.io/@jhplus13/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9B%84%EA%B8%B0"})]})]}),(0,s.jsxs)(p,{children:[(0,s.jsx)(f,{children:"서비스 소개"}),(0,s.jsx)("li",{children:"이 서비스는 crocs 사이트를 모티브하여 진행한 신발 이커머스 사이트 입니다."})]}),(0,s.jsxs)(p,{children:[(0,s.jsx)(w,{children:"사용 스택"}),(0,s.jsxs)("li",{children:[(0,s.jsx)(o._,{txt:"HTML",color:"violet"}),(0,s.jsx)(o._,{txt:"SCSS",color:"green"}),(0,s.jsx)(o._,{txt:"React.js",color:"blue"})]})]}),(0,s.jsxs)(p,{children:[(0,s.jsx)(_,{children:"기간"}),(0,s.jsx)("li",{children:"2022. 06. 20 ~ 2022. 06. 30 (2주)"})]}),(0,s.jsxs)(p,{children:[(0,s.jsx)(v,{children:"팀 구성"}),(0,s.jsx)("li",{children:"프론트엔드 3명, 백엔드 1명"})]})]}),(0,s.jsx)(n.Z,{CarouselData:g}),(0,s.jsxs)(j,{children:[(0,s.jsxs)(C,{children:[(0,s.jsx)(S,{children:"개발 내용"}),(0,s.jsx)(a.Z,{CarouselTitle:"1. 로그인, 회원가입\xa0 폼 유효성 검사",children:(0,s.jsx)("div",{children:(0,s.jsxs)(P,{children:["첫 팀 프로젝트였던 터라 유효성 검사 기능이 어떻게 돌아가는지 파악하기 위해 라이브러리 없이",(0,s.jsx)("br",{})," 직접 구현했습니다. ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"또한 로그인, 회원가입 시 상황별 에러 메시지를 \xa0",(0,s.jsx)("u",{children:(0,s.jsx)("b",{children:"백엔드와의 소통 "})}),"을 통해 맞추어 ",(0,s.jsx)("br",{}),"클라이언트 에러 알림을 하단에 보여주었습니다."]})})}),(0,s.jsx)(a.Z,{CarouselTitle:"2. 장바구니 및 주문완료",children:(0,s.jsxs)(I,{children:["장바구니에서 수량 변경 또는 할인 쿠폰 입력 시 총액과 배송비가 자동으로 계산되도록 하였습니다. ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})," 또한 수량 변경 시 post 요청 api을 호출해야 했는데 수량 변경 버튼을 누를 때마다 ",(0,s.jsx)("br",{}),"api를 호출하면 api를 불필요하게 자주 호출하는 문제가 있었습니다.",(0,s.jsx)("br",{})," ",(0,s.jsx)("br",{})," 이를 해결하기 위해\xa0",(0,s.jsx)("u",{children:(0,s.jsx)("b",{children:"디바운스 처리 "})}),"를 통해 마지막에 최종 수량을 한 번만 post 요청 하도록 하였습니다."]})}),(0,s.jsx)(a.Z,{CarouselTitle:"3. Nav bar, Side menu 토글기능",children:(0,s.jsxs)(k,{children:["마우스 hover 시 nav bar와 side menu가 토글 되는 기능을 구현했습니다.",(0,s.jsx)("br",{})," 첫 프로젝트이기 때문에 학습을 하기 위해 애니메이션 라이브러리를 사용하지 않고",(0,s.jsx)("br",{}),(0,s.jsx)("u",{children:(0,s.jsx)("b",{children:"순수 CSS의 transition"})}),"을 이용하여 구현 하였습니다."]})})]}),(0,s.jsxs)(Z,{children:[(0,s.jsx)(N,{children:"성장 포인트"}),(0,s.jsx)(c.Z,{GrowingData:m})]})]})]})})};var p=i.ZP.ul.withConfig({displayName:"threppa__InfoList",componentId:"sc-1rgyqt3-0"})([""," .InfoTitle{","}.bold{","}.underLine{","}"],{marginBottom:"0.5rem",display:"grid",gridTemplateColumns:"100px minmax(100px, 1fr)",lineHeight:"1.5rem"},{fontWeight:"700"},{paddingLeft:"0.25rem",paddingRight:"0.25rem","--tw-text-opacity":"1",color:"rgb(222 94 60 / var(--tw-text-opacity))"},{textDecorationLine:"underline"}),g=[{title:"로그인, 회원가입",url:"https://www.youtube.com/embed/YzbRaQwVHlo"},{title:"장바구니 페이지",url:"https://www.youtube.com/embed/IoGZxKdliYY"},{title:"Nav bar, Side menu",url:"".concat("/portfolio","/imgs/threppaMenu.png")}],m=[["소통의 중요성","다른 파트와 협업시 원활한 소통에 대한 중요성을 느꼈습니다.\n<br/>\n navigation bar, render와 같이 프론트엔드에겐 당연한 용어가 백엔드에겐 낯선 용어일 수 있다는 것을 알고, 앞으론 타 부서와 협업시 좀 더 <b>상대를 배려하는 용어와 태도</b>를 취해야 겠다는 생각을 하였습니다.\n<br/> 또한 백엔드와 논의시 구두로 하기보단 <b>문서화하여 정확히 자료를 남기는 것</b>이<br/> 서로에게 더 확실히 소통할 수 있는 방법이라는 것도 알게되었습니다."],["state 선언에 대한 고민","불필요한 state를 선언하게 되면 불필요한 리렌더링이 일어나 성능이 악화된다는 것을 알았습니다.\n<br/>때문에 로그인 구현시 기존에 id와 password를 각각 state로 선언한 코드를 하나의 객체 형태의 state로 바꾸거나, state값을 참조하여 계산되는 값은 변수로 선언하였습니다. \n<br/>이렇게 <b>state를 적절히 선언하는 법</b>에 대해 알게되었고 \n나아가 <u>리액트 렌더링 성능 향상을 고민</u>하며 코드를 작성하고자 노력하고 있습니다. \n<br/>"]],h=(0,i.ZP)("div").withConfig({displayName:"threppa___StyledDiv",componentId:"sc-1rgyqt3-1"})({marginLeft:"auto",marginRight:"auto",maxWidth:"48rem"}),u=(0,i.ZP)("h1").withConfig({displayName:"threppa___StyledH",componentId:"sc-1rgyqt3-2"})({marginBottom:"1.25rem",display:"flex",width:"100%",justifyContent:"space-between",fontSize:"1.875rem",lineHeight:"2.25rem",fontWeight:"700"}),b=(0,i.ZP)("div").withConfig({displayName:"threppa___StyledDiv2",componentId:"sc-1rgyqt3-3"})({marginTop:"3rem",marginBottom:"3rem"}),y=(0,i.ZP)("li").withConfig({displayName:"threppa___StyledLi",componentId:"sc-1rgyqt3-4"})({marginBottom:"0.75rem",fontWeight:"700"}),x=(0,i.ZP)("li").withConfig({displayName:"threppa___StyledLi2",componentId:"sc-1rgyqt3-5"})({display:"flex"}),f=(0,i.ZP)("li").withConfig({displayName:"threppa___StyledLi3",componentId:"sc-1rgyqt3-6"})({marginBottom:"0.5rem",fontWeight:"700"}),w=(0,i.ZP)("li").withConfig({displayName:"threppa___StyledLi4",componentId:"sc-1rgyqt3-7"})({marginBottom:"0.5rem",fontWeight:"700"}),_=(0,i.ZP)("li").withConfig({displayName:"threppa___StyledLi5",componentId:"sc-1rgyqt3-8"})({marginBottom:"0.5rem",fontWeight:"700"}),v=(0,i.ZP)("li").withConfig({displayName:"threppa___StyledLi6",componentId:"sc-1rgyqt3-9"})({marginBottom:"0.5rem",fontWeight:"700"}),j=(0,i.ZP)("div").withConfig({displayName:"threppa___StyledDiv3",componentId:"sc-1rgyqt3-10"})({marginTop:"5rem",marginBottom:"5rem"}),C=(0,i.ZP)("div").withConfig({displayName:"threppa___StyledDiv4",componentId:"sc-1rgyqt3-11"})({marginLeft:"auto",marginRight:"auto",maxWidth:"660px"}),S=(0,i.ZP)("h1").withConfig({displayName:"threppa___StyledH2",componentId:"sc-1rgyqt3-12"})({paddingTop:"2rem",paddingBottom:"2rem",fontSize:"1.25rem",lineHeight:"1.75rem",fontWeight:"700"}),P=(0,i.ZP)("div").withConfig({displayName:"threppa___StyledDiv5",componentId:"sc-1rgyqt3-13"})({marginBottom:"1.5rem"}),I=(0,i.ZP)("div").withConfig({displayName:"threppa___StyledDiv6",componentId:"sc-1rgyqt3-14"})({marginBottom:"1.5rem"}),k=(0,i.ZP)("div").withConfig({displayName:"threppa___StyledDiv7",componentId:"sc-1rgyqt3-15"})({marginBottom:"1.5rem"}),Z=(0,i.ZP)("div").withConfig({displayName:"threppa___StyledDiv8",componentId:"sc-1rgyqt3-16"})({marginLeft:"auto",marginRight:"auto",marginTop:"2.5rem",marginBottom:"2.5rem",maxWidth:"660px"}),N=(0,i.ZP)("h1").withConfig({displayName:"threppa___StyledH3",componentId:"sc-1rgyqt3-17"})({paddingTop:"2rem",paddingBottom:"2rem",fontSize:"1.25rem",lineHeight:"1.75rem",fontWeight:"700"})},1700:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/threppa",function(){return r(3747)}])}},function(t){t.O(0,[866,892,66,774,888,179],function(){return t(t.s=1700)}),_N_E=t.O()}]);