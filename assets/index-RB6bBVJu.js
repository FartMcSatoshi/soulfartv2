import{t as u,z as a,v as f,ao as o,R as b,M as v,x as p}from"./web3-libs-CWH8scYH.js";import{n as g,r as m}from"./if-defined-CemL2qSm.js";const y=u`
  :host {
    width: 100%;
    display: block;
  }
`;var c=function(n,e,i,s){var l=arguments.length,t=l<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,i,s);else for(var d=n.length-1;d>=0;d--)(h=n[d])&&(t=(l<3?h(t):l>3?h(e,i,t):h(e,i))||t);return l>3&&t&&Object.defineProperty(e,i,t),t};let r=class extends f{constructor(){super(),this.unsubscribe=[],this.text="",this.open=o.state.open,this.unsubscribe.push(b.subscribeKey("view",()=>{o.hide()}),v.subscribeKey("open",e=>{e||o.hide()}),o.subscribeKey("open",e=>{this.open=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),o.hide()}render(){return p`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return p`<slot></slot> `}onMouseEnter(){const e=this.getBoundingClientRect();this.open||o.showTooltip({message:this.text,triggerRect:{width:e.width,height:e.height,left:e.left,top:e.top},variant:"shade"})}onMouseLeave(e){this.contains(e.relatedTarget)||o.hide()}};r.styles=[y];c([g()],r.prototype,"text",void 0);c([m()],r.prototype,"open",void 0);r=c([a("w3m-tooltip-trigger")],r);
