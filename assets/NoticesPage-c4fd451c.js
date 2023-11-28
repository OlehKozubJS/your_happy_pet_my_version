import{G as N,w as W,t as i,c as E,r as p,m as V,j as e,a as B,x as H,b as I,y as P,z as q,n as K,i as j,A as Z}from"./index-0661320a.js";function J(t){return N({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",fill:"currentColor"}}]})(t)}const X={type:0,params:{}},ee=W({name:"modal",initialState:X,reducers:{showModal(t,o){t.type=o.payload.type,t.params=o.payload.params},closeModal(t,o){t.type=0,t.params={}}}}),{showModal:Ue,closeModal:T}=ee.actions,te=Object.freeze({fonts:{main:"'Manrope', sans-serif",second:"'Inter', sans-serif"},fontSizes:[12,14,16,18,20,24,28,32,44,48,60,72,100],fontWeights:{regular:400,medium:500,semibold:600,bold:700,extrabold:800},colors:{accent:"#FF8356",background:"#FEF9F9",black:"#111111",yellow:"#FFC107",blue:"#54ADFF",blueGradient:"linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%)",blueLight:"#CCE4FB",red:"#F43F5E",green:"#00C3AD",grey:"#888888",white:"#FFFFFF",orangeGradient:"linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)",backdrop:"rgba(97, 97, 97, 0.6)",transparent:"transparent"},shadows:{defaultShadow:"3px 8px 14px rgba(136, 198, 253, 0.19)",hoverShadow:"7px 13px 14px rgba(116, 177, 232, 0.24)"},media:{mobile:"(min-width: 320px)",tablet:"(min-width: 768px)",desktop:"(min-width: 1280px)",mobileTablet:"(min-width: 320px) and (max-width: 767px)",tabletDesktop:"(min-width: 768px) and (max-width: 1279px)"}}),{fonts:v,fontSizes:w,fontWeights:m,colors:l,media:y}=te,ne=i.div`
  position: fixed;
  z-index: 1000;
  top: 0;

  width: 100vw;
  height: 100vh;
  background-color: ${l.backdrop};
  backdrop-filter: blur(4px);
  overflow: auto;

  overflow-y: auto;
`,oe=i.div`
  position: relative;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 300px;
  width: 280px;
  background-color: ${l.white};
  border-radius: 20px;
  padding-top: 40px;
  padding-bottom: 16px;
  overflow: auto;
  overflow-x: auto;

  @media screen and (${y.tablet}) {
    top: 50%;
    width: 681px;
    padding: 0;
    border-radius: 40px;
  }
`,ae=i.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px;
  gap: 10px;

  position: absolute;
  width: 126px;
  height: 32px;
  left: 0px;
  top: 16px;

  background: ${l.blueLight};
  border-radius: 0px 16px 16px 0px;
  border: none;

  font-family: ${v.main};
  font-weight: ${m.medium};
  font-size: ${w[1]}px;
  line-height: 19px;
`,ie=i.img`
  display: block;
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 0px 0px 40px 40px;

  @media screen and (${y.tablet}) {
    width: 262px;
    height: 298px;
    margin: 0;
  }
`,se=i.div`
  position: relative;
  margin: 0 auto;
`,re=i.div`
  display: flex;
  gap: 12px;
  flex-direction: column;

  @media screen and (${y.tablet}) {
    flex-direction: row;
    gap: 24px;
    padding: 32px 32px 24px;
  }
`,le=i.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  right: 5px;
  top: 5px;
  border: none;
  background-color: ${l.transparent};

  @media screen and (${y.tablet}) {
    right: 19px;
    top: 16px;
  }
`,de=i.h2`
  margin-top: 0;
  margin-bottom: 20px;
  width: 198px;
  font-family: ${v.main};
  font-weight: ${m.bold};
  font-size: ${w[5]}px;
  line-height: 33px;
  letter-spacing: -0.01em;

  color: ${l.black};

  @media screen and (${y.tablet}) {
    font-size: 28px;
    line-height: 38px;
    width: 250px;
  }
`,Q=i.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,c=i.li`
  margin: 0;
  font-family: ${v.main};
  font-weight: ${m.semibold};
  font-size: ${w[1]}px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;

  color: ${l.black};

  @media screen and (${y.tablet}) {
    font-size: ${w[2]}px;
    line-height: 22px;
  }
`,ce=i.p`
  margin: 12px 0;
  padding: 0 12px;
  width: 256px;
  font-family: ${v.main};
  font-weight: ${m.semibold};
  font-size: ${w[1]}px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.03em;

  color: ${l.black};

  @media screen and (${y.tablet}) {
    font-size: 16px;
    line-height: 24px;
    width: 618px;
    margin: 0 auto;
    padding: 0;
  }
`,pe=i.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 256px;
  padding: 8px 0;
  gap: 8px;
  text-decoration: none;

  border: 2px solid ${l.blue};
  border-radius: 40px;

  font-family: ${v.main};
  font-style: normal;
  font-weight: ${m.bold};
  font-size: ${w[2]}px;
  line-height: 22px;
  color: ${l.blue};
  transition: all 250ms ease-in-out;

  :hover,
  :focus {
    background: ${l.blueGradient};
    color: ${l.background};
    /* border: none; */
    outline: none;
  }

  @media screen and (${y.tablet}) {
    width: 129px;
  }
`,he=i.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  gap: 8px;
  width: 256px;
  height: 40px;

  background: ${l.blue};
  border-radius: 40px;
  border: none;

  font-family: ${v.main};
  font-style: normal;
  font-weight: ${m.bold};
  font-size: ${w[2]}px;
  line-height: 22px;

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: ${l.background};

  svg {
    stroke-width: 0.3px;
  }

  :hover,
  :focus {
    background: ${l.blueGradient};
    border-radius: 40px;
  }

  @media screen and (${y.tablet}) {
    width: 129px;
  }
`,ue=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 12px;

  @media screen and (${y.tablet}) {
    flex-direction: row;
    gap: 17px;
    margin: 0 auto;
    justify-content: flex-end;
    margin-top: 70px;
    padding-right: 31px;
    padding-bottom: 24px;
  }
`,xe=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  font-family: ${v.main};
`,ge=i.div`
  font-size: 28px;
  line-height: 38px;
  font-weight: ${m.bold};
`,fe=i.div`
  margin-top: 40px;
  width: 393px;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
`,me=i.div`
  font-weight: ${m.bold};
`,ye=i.div`
  margin-top: 48px;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  gap: 17px;
`,be=i.button`
  padding: 9px 35px;
  border-radius: 40px;
  border-color: ${l.blue};
  background: ${l.white};
  color: ${l.blue};
  font-size: 16px;
  line-height: 22px;
  font-family: ${v.main};
  font-weight: ${m.bold};
`,ve=i.button`
  display: flex;
  padding: 9px 34px;
  border-radius: 40px;
  background: ${l.blue};
  color: ${l.white};
  font-size: 16px;
  line-height: 22px;
  font-family: ${v.main};
  font-weight: ${m.bold};
  border-color: ${l.blue};
  gap: 12px;
  letter-spacing: 0.04em;
`,je=document.querySelector("#modal-root"),ke=({children:t})=>{const o=E();p.useEffect(()=>{const a=s=>{s.code==="Escape"&&o(T())};return document.addEventListener("keydown",a),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",a),document.body.style.overflow="unset"}},[o]);const n=a=>{a.currentTarget===a.target&&o(T())};return V.createPortal(e.jsx(ne,{onClick:n,children:e.jsxs(oe,{children:[e.jsx(le,{type:"button",onClick:()=>o(T()),children:e.jsx(J,{size:22,color:"#54ADFF"})}),t]})}),je)};function we(t){return N({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M14.88 4.78a3.489 3.489 0 0 0-.37-.9 3.24 3.24 0 0 0-.6-.79 3.78 3.78 0 0 0-1.21-.81 3.74 3.74 0 0 0-2.84 0 4 4 0 0 0-1.16.75l-.05.06-.65.65-.65-.65-.05-.06a4 4 0 0 0-1.16-.75 3.74 3.74 0 0 0-2.84 0 3.78 3.78 0 0 0-1.21.81 3.55 3.55 0 0 0-.97 1.69 3.75 3.75 0 0 0-.12 1c0 .317.04.633.12.94a4 4 0 0 0 .36.89 3.8 3.8 0 0 0 .61.79L8 14.31l5.91-5.91c.237-.233.44-.5.6-.79A3.578 3.578 0 0 0 15 5.78a3.747 3.747 0 0 0-.12-1zm-1 1.63a2.69 2.69 0 0 1-.69 1.21l-5.21 5.2-5.21-5.2a2.9 2.9 0 0 1-.44-.57 3 3 0 0 1-.27-.65 3.25 3.25 0 0 1-.08-.69A3.36 3.36 0 0 1 2.06 5a2.8 2.8 0 0 1 .27-.65c.12-.21.268-.4.44-.57a2.91 2.91 0 0 1 .89-.6 2.8 2.8 0 0 1 2.08 0c.33.137.628.338.88.59l1.36 1.37 1.36-1.37a2.72 2.72 0 0 1 .88-.59 2.8 2.8 0 0 1 2.08 0c.331.143.633.347.89.6.174.165.32.357.43.57a2.69 2.69 0 0 1 .35 1.34 2.6 2.6 0 0 1-.06.72h-.03z"}}]})(t)}const O=t=>t.auth.user.token;B.defaults.baseURL="https://happy-pets-rest-api.onrender.com/";const A=t=>{B.defaults.headers.common.Authorization=`Bearer ${t}`};H("notices/fetchAll",async(t,o)=>{try{return(await B.get("/posts")).data.data.posts}catch(n){return o.rejectWithValue(n.message)}});const Ce=H("notices/favorite",async(t,o)=>{const n=O(o.getState());if(!n)return o.rejectWithValue("Unable to fetch user");try{A(n);const{data:a}=await B.put("/posts/favorite/"+t.id,t.data);return a.data.post}catch(a){return o.rejectWithValue(a.message)}}),$e=H("notices/remove",async(t,o)=>{const n=O(o.getState());if(!n)return o.rejectWithValue("Unable to fetch user");try{A(n);const{data:a}=await B.delete("/posts/del/"+t);return a.data.post}catch(a){return o.rejectWithValue(a.message)}});H("notices/create",async(t,o)=>{const n=O(o.getState());if(!n)return o.rejectWithValue("Unable to fetch user");try{A(n);const{data:a}=await B.post("/posts/add",t);return a.data.post}catch(a){return o.rejectWithValue(a.message)}});const Fe=({pet:{_id:t,avatar:o,title:n,location:a,petBirthday:s,sex:u,name:d,breed:x,price:b,favorite:C,description:$,owner:f,category:z}})=>{const F=I(P),D=E(),r=I(q);let g=C.includes(r==null?void 0:r._id);const h=()=>{F?(D(Ce({id:t})),D(T())):K.error("You need to sign in")};return e.jsxs(e.Fragment,{children:[e.jsxs(re,{children:[e.jsxs(se,{children:[e.jsx(ie,{src:o,alt:"dog"}),e.jsx(ae,{children:"makeCategory(category)"})]}),e.jsxs("div",{style:{width:"321px",padding:"0 12px"},children:[e.jsx(de,{children:n}),e.jsxs("div",{style:{display:"flex",gap:"50px"},children:[e.jsxs(Q,{children:[e.jsx(c,{children:"Name: "}),e.jsx(c,{children:"Birthday: "}),e.jsx(c,{children:"Breed: "}),b!=="0$"&&b!=="0"&&e.jsx(c,{children:"Price: "}),e.jsx(c,{children:"Place: "}),e.jsx(c,{children:"The sex: "}),e.jsx(c,{children:"Email: "}),e.jsx(c,{children:"Phone: "})]}),e.jsxs(Q,{children:[e.jsx(c,{children:d}),e.jsx(c,{children:s}),e.jsx(c,{children:x}),b!=="0$"&&b!=="0"&&e.jsx(c,{children:b}),e.jsx(c,{children:a}),e.jsx(c,{children:u}),e.jsx(c,{children:e.jsx("a",{style:{color:"#FFC107",textDecoration:"underline"},href:`mailto:${f.email}`,children:f.email})}),e.jsx(c,{style:{color:"#FFC107",textDecoration:"underline"},children:e.jsx("a",{style:{color:"#FFC107",textDecoration:"underline"},href:`tel:${f.phone}`,children:f.phone})})]})]})]})]}),e.jsx(ce,{children:$}),e.jsxs(ue,{children:[e.jsxs(he,{type:"button",onClick:h,children:[e.jsx("span",{children:g?"Remove":"Add"}),e.jsx(we,{size:20})]}),e.jsx(pe,{href:`tel:${f.phone}`,children:"Contact"})]})]})};function De(t){return N({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"}},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"}},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"}}]})(t)}const Se=({pet:{_id:t,title:o}})=>{const n=E(),a=()=>n(T()),s=()=>{n($e(t)),a()};return e.jsxs(xe,{children:[e.jsx(ge,{children:"Delete adverstiment?"}),e.jsxs(fe,{children:[e.jsx("div",{children:"Are you sure you want to delete ?"}),e.jsxs(me,{children:["“",o,"”"]}),e.jsx("div",{children:"You can`t undo this action."})]}),e.jsxs(ye,{children:[e.jsx(be,{onClick:a,children:"Cancel"}),e.jsxs(ve,{onClick:s,children:[e.jsx("span",{children:"Yes"}),e.jsx(De,{size:24})]})]})]})},Be=()=>e.jsxs("form",{children:[e.jsx("input",{type:"text"}),e.jsx("button",{type:"submit"})]}),ze=i.form`
  display: flex;
  column-gap: 12px;
`,M=i.input`
  display: none;
`,Te=i.label`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 40px;
  background: rgba(140, 200, 253, 0.44);

  color: var(--unnamed, #54adff);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
`,Le=i.label`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 40px;
  border-radius: 40px;
  background: #54adff;

  color: #fef9f9;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
`,S=({name:t,value:o,checked:n,defaultChecked:a,children:s})=>n?e.jsxs(Le,{children:[e.jsx(M,{type:"radio",name:t,value:o,defaultChecked:a}),s]}):e.jsxs(Te,{children:[e.jsx(M,{type:"radio",name:t,value:o}),s]}),_e=({isLoggedIn:t,onChange:o})=>{const[n,a]=p.useState(""),s=u=>{u.preventDefault();const d=u.currentTarget.elements.categoryOption.value;a(d),o(d)};return e.jsxs(ze,{onInput:s,children:[e.jsx(S,{name:"categoryOption",value:"",checked:n==="",defaultChecked:!0,children:"all categories"}),e.jsx(S,{name:"categoryOption",value:"sell",checked:n==="sell",defaultChecked:!1,children:"sell"}),e.jsx(S,{name:"categoryOption",value:"lost/found",checked:n==="lost/found",defaultChecked:!1,children:"lost/found"}),e.jsx(S,{name:"categoryOption",value:"in good hands",checked:n==="in good hands",defaultChecked:!1,children:"in good hands"}),t&&e.jsx(S,{name:"categoryOption",value:"favorite ads",checked:n==="favorite ads",defaultChecked:!1,children:"favorite ads"}),t&&e.jsx(S,{name:"categoryOption",value:"my ads",checked:n==="my ads",defaultChecked:!1,children:"my ads"})]})},He=i.div`
  width: 152px;
  padding: 14px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;

  border-radius: 20px;
  background: #fff;

  /* Shadow default */
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`,Ne=i.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`,G=i.form`
  display: flex;
  width: 136px;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  border-radius: 20px;
  background: var(--blue-light, #cce4fb);

  color: var(--unnamed, #54adff);
  font-feature-settings:
    'clig' off,
    'liga' off;

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 18.2px */
`,Ee=i.button`
  display: flex;
  width: 152px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  border: 2px solid #54adff;
  background-color: #fff;

  color: #54adff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
`,Oe=i.button`
  display: flex;
  width: 152px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  border: none;
  background-color: #fff;

  color: #54adff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
`,_=i.button`
  display: flex;
  justify-content: flex-start;
  padding: 4px 8px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  width: 100%;
  border: none;
  border-radius: 20px;
  background: #cce4fb;

  color: #54adff;
  font-feature-settings:
    'clig' off,
    'liga' off;

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 18.2px */
`,Ae=i.input`
  display: none;
`,Re=i.label`
  display: flex;
  align-items: center;
  column-gap: 12px;
  font-size: 12px;
`,k=({name:t,value:o,checked:n,defaultChecked:a,children:s})=>e.jsxs(Re,{children:[e.jsx(Ae,{type:"radio",name:t,value:o,defaultChecked:a}),e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${j}#${n?"check-round":"round"}`})}),s]}),Ie=({onClick:t,onChange:o})=>{const[n,a]=p.useState("anyAge"),s=d=>{d.preventDefault();const x=d.currentTarget.elements.ageOption.value;a(x),o(x)},u=d=>{d.preventDefault(),t()};return e.jsxs(G,{onInput:s,onSubmit:u,children:[e.jsxs(_,{type:"submit",children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${j}#chevron-up`})}),"By age"]}),e.jsx(k,{name:"ageOption",value:"upToOne",checked:n==="upToOne",defaultChecked:!1,children:"up to 1 year"}),e.jsx(k,{name:"ageOption",value:"upToTwo",checked:n==="upToTwo",defaultChecked:!1,children:"up to 2 years"}),e.jsx(k,{name:"ageOption",value:"fromTwo",checked:n==="fromTwo",defaultChecked:!1,children:"from 2 years"}),e.jsx(k,{name:"ageOption",value:"anyAge",checked:n==="anyAge",defaultChecked:!0,children:"any age"})]})},Qe=({onClick:t,onChange:o})=>{const[n,a]=p.useState(""),s=d=>{d.preventDefault();const x=d.currentTarget.elements.genderOption.value;a(x),o(x)},u=d=>{d.preventDefault(),t()};return e.jsxs(G,{onInput:s,onSubmit:u,children:[e.jsxs(_,{type:"submit",children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${j}#chevron-up`})}),"By gender"]}),e.jsx(k,{name:"genderOption",value:"female",checked:n==="female",defaultChecked:!1,children:"female"}),e.jsx(k,{name:"genderOption",value:"male",checked:n==="male",defaultChecked:!1,children:"male"}),e.jsx(k,{name:"genderOption",value:"",checked:n==="",defaultChecked:!0,children:"any gender"})]})},Me=({onChange:t})=>{const[o,n]=p.useState(!1),[a,s]=p.useState(!1),[u,d]=p.useState(!1),[x,b]=p.useState("anyAge"),[C,$]=p.useState(""),f=()=>{n(!o)},z=()=>{s(!a)},F=()=>{d(!u)},D=g=>{b(g)},r=g=>{$(g)};return p.useEffect(()=>{t({age:x,gender:C})},[x,C]),o?e.jsxs(He,{children:[e.jsxs(Oe,{onClick:f,children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${j}#chevron-up`})}),"Filters"]}),e.jsxs(Ne,{children:[a?e.jsx(Ie,{onClick:z,onChange:D}):e.jsxs(_,{onClick:z,children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${j}#chevron-down`})}),"By gender"]}),u?e.jsx(Qe,{onClick:F,onChange:r}):e.jsxs(_,{onClick:F,children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${j}#chevron-down`})}),"By gender"]})]})]}):e.jsxs(Ee,{onClick:f,children:["Filter",e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${j}#filters-3`})})]})},Y=[{_id:"pet-01",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute dog looking for a home",location:"Ivano - Frankivsk",petBirthday:"2022-07-09",sex:"female",name:"Dog",breed:"friendly",price:"0$",favourite:!0,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",category:"in good hands"},{_id:"pet-02",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute cat looking for a home",location:"Lviv",petBirthday:"2013-04-29",sex:"female",name:"Cat",breed:"lazy",price:"50$",favourite:!1,description:"Morbi a ipsum scelerisque, dapibus arcu et, faucibus nulla",category:"lost/found"},{_id:"pet-03",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute mouse looking for a home",location:"Khmelnytskyi",petBirthday:"2015-03-13",sex:"female",name:"Mouse",breed:"sneaky",price:"100$",favourite:!0,description:"Etiam vitae ex at purus interdum congue",category:"favorite ads"},{_id:"pet-04",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute frog looking for a home",location:"Lviv",petBirthday:"2019-06-06",sex:"female",name:"Frog",breed:"clumsy",price:"0$",favourite:!1,description:"Quisque dignissim augue sed imperdiet consectetur",category:"my ads"},{_id:"pet-05",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute bat looking for a home",location:"Ivano - Frankivsk",petBirthday:"2023-02-24",sex:"male",name:"Bat",breed:"scary",price:"50$",favourite:!1,description:"Vivamus dapibus sed felis in faucibus.",category:"sell"},{_id:"pet-06",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute elephant looking for a home",location:"Ivano - Frankivsk",petBirthday:"2023-03-02",sex:"female",name:"Elephant",breed:"big",price:"100$",favourite:!0,description:"Mauris congue metus eget libero ornare suscipit.",category:"in good hands"},{_id:"pet-07",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute lion looking for a home",location:"Ivano - Frankivsk",petBirthday:"2022-04-18",sex:"female",name:"Lion",breed:"brave",price:"0$",favourite:!0,description:"Donec finibus rhoncus mauris porta euismod.",category:"lost/found"},{_id:"pet-08",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute fox looking for a home",location:"Ivano - Frankivsk",petBirthday:"2016-09-01",sex:"male",name:"Fox",breed:"cunning",price:"50$",favourite:!1,description:"Fusce faucibus aliquet nunc, ut faucibus augue laoreet in.",category:"my ads"},{_id:"pet-09",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute blue whale looking for a home",location:"Chernivtsi",petBirthday:"2023-08-06",sex:"female",name:"Blue Whale",breed:"giant",price:"100$",favourite:!0,description:"Phasellus in dui feugiat, pharetra dolor at, rutrum tortor.",category:"in good hands"},{_id:"pet-10",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute rabbit looking for a home",location:"Ivano - Frankivsk",petBirthday:"2022-11-10",sex:"male",name:"Rabbit",breed:"fast",price:"0$",favourite:!1,description:"Pellentesque quis lectus feugiat, luctus purus ut, semper diam. Integer sagittis mattis dui.",category:"favorite ads"},{_id:"pet-11",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute hedgehog looking for a home",location:"Ivano - Frankivsk",petBirthday:"2023-01-30",sex:"female",name:"Hedgehog",breed:"spiky",price:"50$",favourite:!1,description:"Fusce nec ornare lectus. Morbi id lorem cursus, congue ligula eget, imperdiet metus.",category:"in good hands"},{_id:"pet-12",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute fish looking for a home",location:"Zaporizhzhia",petBirthday:"2020-12-16",sex:"male",name:"Fish",breed:"floatable",price:"100$",favourite:!0,description:"Phasellus fermentum sed ligula sed porta.",category:"lost/found"}],U=!0,Ge=()=>{const[t,o]=p.useState(Y),[n,a]=p.useState(""),[s,u]=p.useState({age:"any age",gender:""}),[d,x]=p.useState(Y),b=r=>{a(r)},C=r=>{u(r)},$=r=>{const g=new Date(r),h=new Date;return new Date(h-g).getFullYear()-1970},f=(r,g)=>{const h=$(r.petBirthday);return{upToOne:h<1,upToTwo:h<2,fromTwo:h>=2,anyAge:!0}[g]},z=r=>{console.log("onAddToFavourite"+r)},F=r=>{console.log("onDeleteFromFavourite"+r)},D=r=>{console.log("onLearnMore"+r)};return p.useEffect(()=>{const g=t.filter(h=>(!n||h.category===n)&&f(h,s.age)&&(!s.gender||h.sex===s.gender)).map(h=>{const L=$(h.petBirthday),R=`${L} year${L!==1?"s":""}`;return{...h,age:R}});x(g)},[t,n,s]),e.jsxs("div",{children:[e.jsx("h2",{children:"Find your favorite pet"}),e.jsx(Be,{}),e.jsxs("div",{children:[e.jsx(_e,{isLoggedIn:U,onChange:b}),e.jsx(Me,{onChange:C}),e.jsx("button",{children:"Add pet"})]}),e.jsx(Z,{petsData:d,isLoggedIn:U,onAddToFavourite:z,onDelete:F,onLearnMore:D}),e.jsx(ke,{}),e.jsx(Fe,{}),e.jsx(Se,{})]})};export{Ge as default};
