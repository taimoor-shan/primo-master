class o{constructor(s,t){this.status=s,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${s}`}}toString(){return JSON.stringify(this.body)}}class e{constructor(s,t){this.status=s,this.location=t}}class i extends Error{constructor(s){super(),this.status=404,this.message=`Not found: ${s}`}}export{o as H,i as N,e as R};
//# sourceMappingURL=control.c2cf8273.js.map
