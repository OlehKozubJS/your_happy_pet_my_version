import{v as o,x as w,j as e,i as u,r as l,N as Y,y as P}from"./index-440b9c34.js";const{fonts:U}=w,G=o.form`
  margin-top: 40px;
  margin-inline: auto;
  margin-bottom: 43px;
  width: 608px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: #fff;
  padding-left: 20px;
  padding-right: 10px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`,M=o.input`
  width: 544px;
  height: 44px;
  border: none;
  background: none;
  outline: none;

  color: #888;
  font-family: ${U.regular}, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.8px;

  ::placeholder {
    color: #888;
    font-family: Inter, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.8px;
  }
`,q=o.button`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border: none;
  background: none;
`,W=()=>e.jsxs(G,{children:[e.jsx(M,{type:"text",placeholder:"Search"}),e.jsx(q,{type:"submit",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${u}#search`})})})]}),{fonts:T,fontSizes:I,colors:E}=w,K=o.form`
  display: flex;
  column-gap: 12px;
  height: 35px;
`,B=o.input`
  display: none;
`,V=o.label`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 40px;
  background: rgba(140, 200, 253, 0.44);

  color: ${E.blue};
  font-family: ${T.medium}, sans-serif;
  font-size: ${I.s};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
`,Z=o.label`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 40px;
  border-radius: 40px;
  background: ${E.blue};

  color: #fef9f9;
  font-family: ${T.medium}, sans-serif;
  font-size: ${I.s};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
`,x=({name:i,value:d,checked:t,defaultChecked:c,children:n})=>t?e.jsxs(Z,{children:[e.jsx(B,{type:"radio",name:i,value:d,defaultChecked:c}),n]}):e.jsxs(V,{children:[e.jsx(B,{type:"radio",name:i,value:d}),n]}),J=({isLoggedIn:i,onChange:d})=>{const[t,c]=l.useState(""),n=p=>{p.preventDefault();const a=p.currentTarget.elements.categoryOption.value;c(a),d(a)};return e.jsxs(K,{onInput:n,children:[e.jsx(x,{name:"categoryOption",value:"",checked:t==="",defaultChecked:!0,children:"all categories"}),e.jsx(x,{name:"categoryOption",value:"sell",checked:t==="sell",defaultChecked:!1,children:"sell"}),e.jsx(x,{name:"categoryOption",value:"lost/found",checked:t==="lost/found",defaultChecked:!1,children:"lost/found"}),e.jsx(x,{name:"categoryOption",value:"in good hands",checked:t==="in good hands",defaultChecked:!1,children:"in good hands"}),i&&e.jsx(x,{name:"categoryOption",value:"favorite ads",checked:t==="favorite ads",defaultChecked:!1,children:"favorite ads"}),i&&e.jsx(x,{name:"categoryOption",value:"my ads",checked:t==="my ads",defaultChecked:!1,children:"my ads"})]})},{fonts:_,fontSizes:H,fontWeights:N,colors:Q}=w,X=o.div`
  width: 152px;
  padding: 14px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
  z-index: 1;

  border-radius: 20px;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`,ee=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`,L=o.form`
  display: flex;
  width: 136px;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  border-radius: 20px;
  background: ${Q.blue_light};

  color: #54adff;
  font-feature-settings:
    'clig' off,
    'liga' off;

  font-family: ${_.normal}, sans-serif;
  font-size: ${H.s};
  font-style: normal;
  font-weight: ${N.normal};
  line-height: 130%; /* 18.2px */
`,te=o.button`
  display: flex;
  width: 152px;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  border: 2px solid ${Q.blue};
  background-color: #fff;

  color: #54adff;
  font-family: ${_.bold}, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: ${N.bold};
  line-height: normal;
  letter-spacing: 0.64px;

  :hover,
  :focus {
    padding: 6px 12px;
    border: none;
    border-radius: 40px;
    background: linear-gradient(290deg, #419ef1 0%, #9bd0ff 107.89%);
    color: #fef9f9;
  }
`,oe=o.button`
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
  font-family: ${_.bold}, sans-serif;
  font-size: ${H.m};
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.64px;
`,j=o.button`
  display: flex;
  justify-content: flex-start;
  padding: 4px 8px;
  align-items: center;
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

  font-family: Inter, sans-serif;
  font-size: ${H.s};
  font-style: normal;
  font-weight: ${N.normal};
  line-height: 130%; /* 18.2px */
`,ne=o.input`
  display: none;
`,ae=o.label`
  display: flex;
  align-items: center;
  column-gap: 12px;
  font-size: 12px;
`,g=({name:i,value:d,checked:t,defaultChecked:c,children:n})=>e.jsxs(ae,{children:[e.jsx(ne,{type:"radio",name:i,value:d,defaultChecked:c}),e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${u}#${t?"check-round":"round"}`})}),n]}),se=({onClick:i,onChange:d})=>{const[t,c]=l.useState("anyAge"),n=a=>{a.preventDefault();const f=a.currentTarget.elements.ageOption.value;c(f),d(f)},p=a=>{a.preventDefault(),i()};return e.jsxs(L,{onInput:n,onSubmit:p,children:[e.jsxs(j,{type:"submit",children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${u}#chevron-up`})}),"By age"]}),e.jsx(g,{name:"ageOption",value:"upToOne",checked:t==="upToOne",defaultChecked:!1,children:"up to 1 year"}),e.jsx(g,{name:"ageOption",value:"upToTwo",checked:t==="upToTwo",defaultChecked:!1,children:"up to 2 years"}),e.jsx(g,{name:"ageOption",value:"fromTwo",checked:t==="fromTwo",defaultChecked:!1,children:"from 2 years"}),e.jsx(g,{name:"ageOption",value:"anyAge",checked:t==="anyAge",defaultChecked:!0,children:"any age"})]})},ie=({onClick:i,onChange:d})=>{const[t,c]=l.useState(""),n=a=>{a.preventDefault();const f=a.currentTarget.elements.genderOption.value;c(f),d(f)},p=a=>{a.preventDefault(),i()};return e.jsxs(L,{onInput:n,onSubmit:p,children:[e.jsxs(j,{type:"submit",children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${u}#chevron-up`})}),"By gender"]}),e.jsx(g,{name:"genderOption",value:"female",checked:t==="female",defaultChecked:!1,children:"female"}),e.jsx(g,{name:"genderOption",value:"male",checked:t==="male",defaultChecked:!1,children:"male"}),e.jsx(g,{name:"genderOption",value:"",checked:t==="",defaultChecked:!0,children:"any gender"})]})},re=({onChange:i})=>{const[d,t]=l.useState(!1),[c,n]=l.useState(!1),[p,a]=l.useState(!1),[f,D]=l.useState("anyAge"),[y,v]=l.useState(""),[S,b]=l.useState(!1),$=()=>{b(!0)},F=()=>{b(!1)},s=()=>{t(!d)},h=()=>{n(!c)},r=()=>{a(!p)},m=C=>{D(C)},k=C=>{v(C)};return l.useEffect(()=>{i({age:f,gender:y})},[f,y]),d?e.jsxs(X,{children:[e.jsxs(oe,{onClick:s,children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${u}#chevron-up`})}),"Filters"]}),e.jsxs(ee,{children:[c?e.jsx(se,{onClick:h,onChange:m}):e.jsxs(j,{onClick:h,children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${u}#chevron-down`})}),"By gender"]}),p?e.jsx(ie,{onClick:r,onChange:k}):e.jsxs(j,{onClick:r,children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${u}#chevron-down`})}),"By gender"]})]})]}):e.jsxs(te,{onClick:s,onMouseOver:$,onMouseLeave:F,children:["Filter",e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",stroke:S?"#FEF9F9":"#54adff",children:e.jsx("use",{xlinkHref:`${u}#filters-3`})})]})},{fonts:A,fontSizes:le,fontWeights:R,colors:de}=w,ce=o.h3`
  margin-top: 90px;
  color: #111;
  font-family: ${A.bold}, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: ${R.bold};
  text-align: center;
  line-height: normal;
`,pe=o.div`
  margin-bottom: 42px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  row-gap: 16px;
`,fe=o.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 12px;
`,he=o(Y)`
  display: flex;
  width: 129px;
  height: 25px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 40px;
  background: ${de.blue};

  color: #fef9f9;
  font-family: ${A.bold}, sans-serif;
  font-size: ${le.m};
  font-style: normal;
  font-weight: ${R.bold};
  line-height: normal;
  letter-spacing: 0.64px;
`,O=[{_id:"pet-01",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute dog looking for a home",location:"Ivano - Frankivsk",petBirthday:"2022-07-09",sex:"female",name:"Dog",breed:"friendly",price:"0$",favourite:!0,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",category:"in good hands"},{_id:"pet-02",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute cat looking for a home",location:"Lviv",petBirthday:"2013-04-29",sex:"female",name:"Cat",breed:"lazy",price:"50$",favourite:!1,description:"Morbi a ipsum scelerisque, dapibus arcu et, faucibus nulla",category:"lost/found"},{_id:"pet-03",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute mouse looking for a home",location:"Khmelnytskyi",petBirthday:"2015-03-13",sex:"female",name:"Mouse",breed:"sneaky",price:"100$",favourite:!0,description:"Etiam vitae ex at purus interdum congue",category:"favorite ads"},{_id:"pet-04",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute frog looking for a home",location:"Lviv",petBirthday:"2019-06-06",sex:"female",name:"Frog",breed:"clumsy",price:"0$",favourite:!1,description:"Quisque dignissim augue sed imperdiet consectetur",category:"my ads"},{_id:"pet-05",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute bat looking for a home",location:"Ivano - Frankivsk",petBirthday:"2023-02-24",sex:"male",name:"Bat",breed:"scary",price:"50$",favourite:!1,description:"Vivamus dapibus sed felis in faucibus.",category:"sell"},{_id:"pet-06",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute elephant looking for a home",location:"Ivano - Frankivsk",petBirthday:"2023-03-02",sex:"female",name:"Elephant",breed:"big",price:"100$",favourite:!0,description:"Mauris congue metus eget libero ornare suscipit.",category:"in good hands"},{_id:"pet-07",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute lion looking for a home",location:"Ivano - Frankivsk",petBirthday:"2022-04-18",sex:"female",name:"Lion",breed:"brave",price:"0$",favourite:!0,description:"Donec finibus rhoncus mauris porta euismod.",category:"lost/found"},{_id:"pet-08",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute fox looking for a home",location:"Ivano - Frankivsk",petBirthday:"2016-09-01",sex:"male",name:"Fox",breed:"cunning",price:"50$",favourite:!1,description:"Fusce faucibus aliquet nunc, ut faucibus augue laoreet in.",category:"my ads"},{_id:"pet-09",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute blue whale looking for a home",location:"Chernivtsi",petBirthday:"2023-08-06",sex:"female",name:"Blue Whale",breed:"giant",price:"100$",favourite:!0,description:"Phasellus in dui feugiat, pharetra dolor at, rutrum tortor.",category:"in good hands"},{_id:"pet-10",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute rabbit looking for a home",location:"Ivano - Frankivsk",petBirthday:"2022-11-10",sex:"male",name:"Rabbit",breed:"fast",price:"0$",favourite:!1,description:"Pellentesque quis lectus feugiat, luctus purus ut, semper diam. Integer sagittis mattis dui.",category:"favorite ads"},{_id:"pet-11",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute hedgehog looking for a home",location:"Ivano - Frankivsk",petBirthday:"2023-01-30",sex:"female",name:"Hedgehog",breed:"spiky",price:"50$",favourite:!1,description:"Fusce nec ornare lectus. Morbi id lorem cursus, congue ligula eget, imperdiet metus.",category:"in good hands"},{_id:"pet-12",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute fish looking for a home",location:"Zaporizhzhia",petBirthday:"2020-12-16",sex:"male",name:"Fish",breed:"floatable",price:"100$",favourite:!0,description:"Phasellus fermentum sed ligula sed porta.",category:"lost/found"}],z=!0,ge=()=>{const[i,d]=l.useState(O),[t,c]=l.useState(""),[n,p]=l.useState({age:"any age",gender:""}),[a,f]=l.useState(O),D=s=>{c(s)},y=s=>{p(s)},v=s=>{const h=new Date(s),r=new Date;return new Date(r-h).getFullYear()-1970},S=(s,h)=>{const r=v(s.petBirthday);return{upToOne:r<1,upToTwo:r<2,fromTwo:r>=2,anyAge:!0}[h]},b=s=>{console.log("onAddToFavourite"+s)},$=s=>{console.log("onDeleteFromFavourite"+s)},F=s=>{console.log("onLearnMore"+s)};return l.useEffect(()=>{const h=i.filter(r=>(!t||r.category===t)&&S(r,n.age)&&(!n.gender||r.sex===n.gender)).map(r=>{const m=v(r.petBirthday),k=`${m} year${m!==1?"s":""}`;return{...r,age:k}});f(h)},[i,t,n]),e.jsxs("div",{children:[e.jsx(ce,{children:"Find your favorite pet"}),e.jsx(W,{}),e.jsxs(pe,{children:[e.jsx(J,{isLoggedIn:z,onChange:D}),e.jsxs(fe,{children:[e.jsx(re,{onChange:y}),e.jsx(he,{to:"http://localhost:5173/your_happy_pet/add-pet",children:"Add pet"})]})]}),e.jsx(P,{petsData:a,isLoggedIn:z,onAddToFavourite:b,onDelete:$,onLearnMore:F})]})};export{ge as default};
