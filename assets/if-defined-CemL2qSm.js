const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/add-D099iu4v.js","assets/web3-libs-CWH8scYH.js","assets/react-vendor-BRma4tE0.js","assets/react-query-xO9mIliO.js","assets/all-wallets-DjR9F6K9.js","assets/arrow-bottom-circle-BJLccADT.js","assets/app-store-BuCpULTQ.js","assets/apple-NRGweivg.js","assets/arrow-bottom-PaCH2jEM.js","assets/arrow-left-Bc3QP2KZ.js","assets/arrow-right-DYlOKvlc.js","assets/arrow-top-C2BFMAAF.js","assets/bank-isNLvrYy.js","assets/browser-BreJpiXH.js","assets/bin-CDwTSBrk.js","assets/bitcoin-BQB8Wevs.js","assets/card-PFaZ6pv5.js","assets/checkmark-DoK_nJA2.js","assets/checkmark-bold-BH7b0tlH.js","assets/chevron-bottom-cFgY0QbD.js","assets/chevron-left-cjepII4J.js","assets/chevron-right-t94HOgr0.js","assets/chevron-top-BGhtV6cl.js","assets/chrome-store-BMptjLuv.js","assets/clock-6voaMlIQ.js","assets/close-C9wIpZaz.js","assets/compass-BQ7AmCUb.js","assets/coinPlaceholder-e1k3AnuP.js","assets/copy-CtQP9ao4.js","assets/cursor-qOb_lpi2.js","assets/cursor-transparent-CkRjpJsL.js","assets/circle-BVfnUfXz.js","assets/desktop-Bw6nrqaw.js","assets/disconnect-CJn3wIXD.js","assets/discord-CVpNL8HE.js","assets/ethereum-DUWlgMos.js","assets/etherscan-Dou6uVz0.js","assets/extension-CebZYJEp.js","assets/external-link-snkWTaQ3.js","assets/facebook-DCKqv0mp.js","assets/farcaster-CpqrPTCx.js","assets/filters-hGGCG-hI.js","assets/github-DsrGLUl5.js","assets/google-CVpHzZMA.js","assets/help-circle-ClM27avT.js","assets/image-BuQHeTdM.js","assets/id-BQ97iF90.js","assets/info-circle-BdsJmlCg.js","assets/lightbulb-BgfJiqYE.js","assets/mail-B8UIYv-4.js","assets/mobile-Ba4Pl1z4.js","assets/more-iCsX1IHm.js","assets/network-placeholder-BAhm15jB.js","assets/nftPlaceholder-BoHZdU53.js","assets/off-CyKMNL_x.js","assets/play-store-BpxSsR4P.js","assets/plus-DfIGWYQC.js","assets/qr-code-CgTAKgbK.js","assets/recycle-horizontal-BT7OmN4k.js","assets/refresh-CY8nbcH1.js","assets/search-MzDW7c-M.js","assets/send-Bdd_Y5Gn.js","assets/swapHorizontal-Brh0hOeK.js","assets/swapHorizontalMedium-BiAEJ98J.js","assets/swapHorizontalBold-bQBwVtM_.js","assets/swapHorizontalRoundedBold-R7oHx-nq.js","assets/swapVertical-CNeUFHmv.js","assets/solana-7kOYLpcs.js","assets/telegram-DZ5mBZbE.js","assets/three-dots-lHPc-fCB.js","assets/twitch-BlNqzk11.js","assets/x-zZuRGAwB.js","assets/twitterIcon-Bv3z0s2y.js","assets/verify-z_7o_wRJ.js","assets/verify-filled-D720qt5O.js","assets/wallet-BuqKX1wo.js","assets/walletconnect-BKjP0WGL.js","assets/wallet-placeholder-CMvEYtWn.js","assets/warning-circle-BC4Oz9UZ.js","assets/info-BJ0Z40cY.js","assets/exclamation-triangle-C_oygYo2.js","assets/reown-logo-BeRlvGQc.js","assets/x-mark-zOB2WsTo.js"])))=>i.map(i=>d[i]);
import{aw as k,ax as B,ay as T,t as P,E as R,ai as j,v as $,x as m,_ as a,z as I,U as v,aq as H}from"./web3-libs-CWH8scYH.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:k},G=(t=M,i,e)=>{const{kind:r,metadata:o}=e;let n=globalThis.litPropertyMetadata.get(o);if(n===void 0&&globalThis.litPropertyMetadata.set(o,n=new Map),r==="setter"&&((t=Object.create(t)).wrapped=!0),n.set(e.name,t),r==="accessor"){const{name:c}=e;return{set(s){const w=i.get.call(this);i.set.call(this,s),this.requestUpdate(c,w,t)},init(s){return s!==void 0&&this.C(c,void 0,t,s),s}}}if(r==="setter"){const{name:c}=e;return function(s){const w=this[c];i.call(this,s),this.requestUpdate(c,w,t)}}throw Error("Unsupported decorator location: "+r)};function l(t){return(i,e)=>typeof e=="object"?G(t,i,e):((r,o,n)=>{const c=o.hasOwnProperty(n);return o.constructor.createProperty(n,r),c?Object.getOwnPropertyDescriptor(o,n):void 0})(t,i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ot(t){return l({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=t=>t===null||typeof t!="object"&&typeof t!="function",W=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V={ATTRIBUTE:1,CHILD:2},b=t=>(...i)=>({_$litDirective$:t,values:i});let x=class{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,e,r){this._$Ct=i,this._$AM=e,this._$Ci=r}_$AS(i,e){return this.update(i,e)}update(i,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const h=(t,i)=>{const e=t._$AN;if(e===void 0)return!1;for(const r of e)r._$AO?.(i,!1),h(r,i);return!0},S=t=>{let i,e;do{if((i=t._$AM)===void 0)break;e=i._$AN,e.delete(t),t=i}while(e?.size===0)},C=t=>{for(let i;i=t._$AM;t=i){let e=i._$AN;if(e===void 0)i._$AN=e=new Set;else if(e.has(t))break;e.add(t),q(i)}};function N(t){this._$AN!==void 0?(S(this),this._$AM=t,C(this)):this._$AM=t}function F(t,i=!1,e=0){const r=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(i)if(Array.isArray(r))for(let n=e;n<r.length;n++)h(r[n],!1),S(r[n]);else r!=null&&(h(r,!1),S(r));else h(this,t)}const q=t=>{t.type==V.CHILD&&(t._$AP??=F,t._$AQ??=N)};class K extends x{constructor(){super(...arguments),this._$AN=void 0}_$AT(i,e,r){super._$AT(i,e,r),C(this),this.isConnected=i._$AU}_$AO(i,e=!0){i!==this.isConnected&&(this.isConnected=i,i?this.reconnected?.():this.disconnected?.()),e&&(h(this,i),S(this))}setValue(i){if(W(this._$Ct))this._$Ct._$AI(i,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=i,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class X{constructor(i){this.G=i}disconnect(){this.G=void 0}reconnect(i){this.G=i}deref(){return this.G}}class Y{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(i=>this.Z=i)}resume(){this.Z?.(),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=t=>!U(t)&&typeof t.then=="function",L=1073741823;class Z extends K{constructor(){super(...arguments),this._$Cwt=L,this._$Cbt=[],this._$CK=new X(this),this._$CX=new Y}render(...i){return i.find(e=>!O(e))??T}update(i,e){const r=this._$Cbt;let o=r.length;this._$Cbt=e;const n=this._$CK,c=this._$CX;this.isConnected||this.disconnected();for(let s=0;s<e.length&&!(s>this._$Cwt);s++){const w=e[s];if(!O(w))return this._$Cwt=s,w;s<o&&w===r[s]||(this._$Cwt=L,o=0,Promise.resolve(w).then(async z=>{for(;c.get();)await c.get();const d=n.deref();if(d!==void 0){const E=d._$Cbt.indexOf(w);E>-1&&E<d._$Cwt&&(d._$Cwt=E,d.setValue(z))}}))}return T}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const Q=b(Z);class J{constructor(){this.cache=new Map}set(i,e){this.cache.set(i,e)}get(i){return this.cache.get(i)}has(i){return this.cache.has(i)}delete(i){this.cache.delete(i)}clear(){this.cache.clear()}}const A=new J,tt=P`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var y=function(t,i,e,r){var o=arguments.length,n=o<3?i:r,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,i,e,r);else for(var s=t.length-1;s>=0;s--)(c=t[s])&&(n=(o<3?c(n):o>3?c(i,e,n):c(i,e))||n);return o>3&&n&&Object.defineProperty(i,e,n),n};const D={add:async()=>(await a(async()=>{const{addSvg:t}=await import("./add-D099iu4v.js");return{addSvg:t}},__vite__mapDeps([0,1,2,3]))).addSvg,allWallets:async()=>(await a(async()=>{const{allWalletsSvg:t}=await import("./all-wallets-DjR9F6K9.js");return{allWalletsSvg:t}},__vite__mapDeps([4,1,2,3]))).allWalletsSvg,arrowBottomCircle:async()=>(await a(async()=>{const{arrowBottomCircleSvg:t}=await import("./arrow-bottom-circle-BJLccADT.js");return{arrowBottomCircleSvg:t}},__vite__mapDeps([5,1,2,3]))).arrowBottomCircleSvg,appStore:async()=>(await a(async()=>{const{appStoreSvg:t}=await import("./app-store-BuCpULTQ.js");return{appStoreSvg:t}},__vite__mapDeps([6,1,2,3]))).appStoreSvg,apple:async()=>(await a(async()=>{const{appleSvg:t}=await import("./apple-NRGweivg.js");return{appleSvg:t}},__vite__mapDeps([7,1,2,3]))).appleSvg,arrowBottom:async()=>(await a(async()=>{const{arrowBottomSvg:t}=await import("./arrow-bottom-PaCH2jEM.js");return{arrowBottomSvg:t}},__vite__mapDeps([8,1,2,3]))).arrowBottomSvg,arrowLeft:async()=>(await a(async()=>{const{arrowLeftSvg:t}=await import("./arrow-left-Bc3QP2KZ.js");return{arrowLeftSvg:t}},__vite__mapDeps([9,1,2,3]))).arrowLeftSvg,arrowRight:async()=>(await a(async()=>{const{arrowRightSvg:t}=await import("./arrow-right-DYlOKvlc.js");return{arrowRightSvg:t}},__vite__mapDeps([10,1,2,3]))).arrowRightSvg,arrowTop:async()=>(await a(async()=>{const{arrowTopSvg:t}=await import("./arrow-top-C2BFMAAF.js");return{arrowTopSvg:t}},__vite__mapDeps([11,1,2,3]))).arrowTopSvg,bank:async()=>(await a(async()=>{const{bankSvg:t}=await import("./bank-isNLvrYy.js");return{bankSvg:t}},__vite__mapDeps([12,1,2,3]))).bankSvg,browser:async()=>(await a(async()=>{const{browserSvg:t}=await import("./browser-BreJpiXH.js");return{browserSvg:t}},__vite__mapDeps([13,1,2,3]))).browserSvg,bin:async()=>(await a(async()=>{const{binSvg:t}=await import("./bin-CDwTSBrk.js");return{binSvg:t}},__vite__mapDeps([14,1,2,3]))).binSvg,bitcoin:async()=>(await a(async()=>{const{bitcoinSvg:t}=await import("./bitcoin-BQB8Wevs.js");return{bitcoinSvg:t}},__vite__mapDeps([15,1,2,3]))).bitcoinSvg,card:async()=>(await a(async()=>{const{cardSvg:t}=await import("./card-PFaZ6pv5.js");return{cardSvg:t}},__vite__mapDeps([16,1,2,3]))).cardSvg,checkmark:async()=>(await a(async()=>{const{checkmarkSvg:t}=await import("./checkmark-DoK_nJA2.js");return{checkmarkSvg:t}},__vite__mapDeps([17,1,2,3]))).checkmarkSvg,checkmarkBold:async()=>(await a(async()=>{const{checkmarkBoldSvg:t}=await import("./checkmark-bold-BH7b0tlH.js");return{checkmarkBoldSvg:t}},__vite__mapDeps([18,1,2,3]))).checkmarkBoldSvg,chevronBottom:async()=>(await a(async()=>{const{chevronBottomSvg:t}=await import("./chevron-bottom-cFgY0QbD.js");return{chevronBottomSvg:t}},__vite__mapDeps([19,1,2,3]))).chevronBottomSvg,chevronLeft:async()=>(await a(async()=>{const{chevronLeftSvg:t}=await import("./chevron-left-cjepII4J.js");return{chevronLeftSvg:t}},__vite__mapDeps([20,1,2,3]))).chevronLeftSvg,chevronRight:async()=>(await a(async()=>{const{chevronRightSvg:t}=await import("./chevron-right-t94HOgr0.js");return{chevronRightSvg:t}},__vite__mapDeps([21,1,2,3]))).chevronRightSvg,chevronTop:async()=>(await a(async()=>{const{chevronTopSvg:t}=await import("./chevron-top-BGhtV6cl.js");return{chevronTopSvg:t}},__vite__mapDeps([22,1,2,3]))).chevronTopSvg,chromeStore:async()=>(await a(async()=>{const{chromeStoreSvg:t}=await import("./chrome-store-BMptjLuv.js");return{chromeStoreSvg:t}},__vite__mapDeps([23,1,2,3]))).chromeStoreSvg,clock:async()=>(await a(async()=>{const{clockSvg:t}=await import("./clock-6voaMlIQ.js");return{clockSvg:t}},__vite__mapDeps([24,1,2,3]))).clockSvg,close:async()=>(await a(async()=>{const{closeSvg:t}=await import("./close-C9wIpZaz.js");return{closeSvg:t}},__vite__mapDeps([25,1,2,3]))).closeSvg,compass:async()=>(await a(async()=>{const{compassSvg:t}=await import("./compass-BQ7AmCUb.js");return{compassSvg:t}},__vite__mapDeps([26,1,2,3]))).compassSvg,coinPlaceholder:async()=>(await a(async()=>{const{coinPlaceholderSvg:t}=await import("./coinPlaceholder-e1k3AnuP.js");return{coinPlaceholderSvg:t}},__vite__mapDeps([27,1,2,3]))).coinPlaceholderSvg,copy:async()=>(await a(async()=>{const{copySvg:t}=await import("./copy-CtQP9ao4.js");return{copySvg:t}},__vite__mapDeps([28,1,2,3]))).copySvg,cursor:async()=>(await a(async()=>{const{cursorSvg:t}=await import("./cursor-qOb_lpi2.js");return{cursorSvg:t}},__vite__mapDeps([29,1,2,3]))).cursorSvg,cursorTransparent:async()=>(await a(async()=>{const{cursorTransparentSvg:t}=await import("./cursor-transparent-CkRjpJsL.js");return{cursorTransparentSvg:t}},__vite__mapDeps([30,1,2,3]))).cursorTransparentSvg,circle:async()=>(await a(async()=>{const{circleSvg:t}=await import("./circle-BVfnUfXz.js");return{circleSvg:t}},__vite__mapDeps([31,1,2,3]))).circleSvg,desktop:async()=>(await a(async()=>{const{desktopSvg:t}=await import("./desktop-Bw6nrqaw.js");return{desktopSvg:t}},__vite__mapDeps([32,1,2,3]))).desktopSvg,disconnect:async()=>(await a(async()=>{const{disconnectSvg:t}=await import("./disconnect-CJn3wIXD.js");return{disconnectSvg:t}},__vite__mapDeps([33,1,2,3]))).disconnectSvg,discord:async()=>(await a(async()=>{const{discordSvg:t}=await import("./discord-CVpNL8HE.js");return{discordSvg:t}},__vite__mapDeps([34,1,2,3]))).discordSvg,ethereum:async()=>(await a(async()=>{const{ethereumSvg:t}=await import("./ethereum-DUWlgMos.js");return{ethereumSvg:t}},__vite__mapDeps([35,1,2,3]))).ethereumSvg,etherscan:async()=>(await a(async()=>{const{etherscanSvg:t}=await import("./etherscan-Dou6uVz0.js");return{etherscanSvg:t}},__vite__mapDeps([36,1,2,3]))).etherscanSvg,extension:async()=>(await a(async()=>{const{extensionSvg:t}=await import("./extension-CebZYJEp.js");return{extensionSvg:t}},__vite__mapDeps([37,1,2,3]))).extensionSvg,externalLink:async()=>(await a(async()=>{const{externalLinkSvg:t}=await import("./external-link-snkWTaQ3.js");return{externalLinkSvg:t}},__vite__mapDeps([38,1,2,3]))).externalLinkSvg,facebook:async()=>(await a(async()=>{const{facebookSvg:t}=await import("./facebook-DCKqv0mp.js");return{facebookSvg:t}},__vite__mapDeps([39,1,2,3]))).facebookSvg,farcaster:async()=>(await a(async()=>{const{farcasterSvg:t}=await import("./farcaster-CpqrPTCx.js");return{farcasterSvg:t}},__vite__mapDeps([40,1,2,3]))).farcasterSvg,filters:async()=>(await a(async()=>{const{filtersSvg:t}=await import("./filters-hGGCG-hI.js");return{filtersSvg:t}},__vite__mapDeps([41,1,2,3]))).filtersSvg,github:async()=>(await a(async()=>{const{githubSvg:t}=await import("./github-DsrGLUl5.js");return{githubSvg:t}},__vite__mapDeps([42,1,2,3]))).githubSvg,google:async()=>(await a(async()=>{const{googleSvg:t}=await import("./google-CVpHzZMA.js");return{googleSvg:t}},__vite__mapDeps([43,1,2,3]))).googleSvg,helpCircle:async()=>(await a(async()=>{const{helpCircleSvg:t}=await import("./help-circle-ClM27avT.js");return{helpCircleSvg:t}},__vite__mapDeps([44,1,2,3]))).helpCircleSvg,image:async()=>(await a(async()=>{const{imageSvg:t}=await import("./image-BuQHeTdM.js");return{imageSvg:t}},__vite__mapDeps([45,1,2,3]))).imageSvg,id:async()=>(await a(async()=>{const{idSvg:t}=await import("./id-BQ97iF90.js");return{idSvg:t}},__vite__mapDeps([46,1,2,3]))).idSvg,infoCircle:async()=>(await a(async()=>{const{infoCircleSvg:t}=await import("./info-circle-BdsJmlCg.js");return{infoCircleSvg:t}},__vite__mapDeps([47,1,2,3]))).infoCircleSvg,lightbulb:async()=>(await a(async()=>{const{lightbulbSvg:t}=await import("./lightbulb-BgfJiqYE.js");return{lightbulbSvg:t}},__vite__mapDeps([48,1,2,3]))).lightbulbSvg,mail:async()=>(await a(async()=>{const{mailSvg:t}=await import("./mail-B8UIYv-4.js");return{mailSvg:t}},__vite__mapDeps([49,1,2,3]))).mailSvg,mobile:async()=>(await a(async()=>{const{mobileSvg:t}=await import("./mobile-Ba4Pl1z4.js");return{mobileSvg:t}},__vite__mapDeps([50,1,2,3]))).mobileSvg,more:async()=>(await a(async()=>{const{moreSvg:t}=await import("./more-iCsX1IHm.js");return{moreSvg:t}},__vite__mapDeps([51,1,2,3]))).moreSvg,networkPlaceholder:async()=>(await a(async()=>{const{networkPlaceholderSvg:t}=await import("./network-placeholder-BAhm15jB.js");return{networkPlaceholderSvg:t}},__vite__mapDeps([52,1,2,3]))).networkPlaceholderSvg,nftPlaceholder:async()=>(await a(async()=>{const{nftPlaceholderSvg:t}=await import("./nftPlaceholder-BoHZdU53.js");return{nftPlaceholderSvg:t}},__vite__mapDeps([53,1,2,3]))).nftPlaceholderSvg,off:async()=>(await a(async()=>{const{offSvg:t}=await import("./off-CyKMNL_x.js");return{offSvg:t}},__vite__mapDeps([54,1,2,3]))).offSvg,playStore:async()=>(await a(async()=>{const{playStoreSvg:t}=await import("./play-store-BpxSsR4P.js");return{playStoreSvg:t}},__vite__mapDeps([55,1,2,3]))).playStoreSvg,plus:async()=>(await a(async()=>{const{plusSvg:t}=await import("./plus-DfIGWYQC.js");return{plusSvg:t}},__vite__mapDeps([56,1,2,3]))).plusSvg,qrCode:async()=>(await a(async()=>{const{qrCodeIcon:t}=await import("./qr-code-CgTAKgbK.js");return{qrCodeIcon:t}},__vite__mapDeps([57,1,2,3]))).qrCodeIcon,recycleHorizontal:async()=>(await a(async()=>{const{recycleHorizontalSvg:t}=await import("./recycle-horizontal-BT7OmN4k.js");return{recycleHorizontalSvg:t}},__vite__mapDeps([58,1,2,3]))).recycleHorizontalSvg,refresh:async()=>(await a(async()=>{const{refreshSvg:t}=await import("./refresh-CY8nbcH1.js");return{refreshSvg:t}},__vite__mapDeps([59,1,2,3]))).refreshSvg,search:async()=>(await a(async()=>{const{searchSvg:t}=await import("./search-MzDW7c-M.js");return{searchSvg:t}},__vite__mapDeps([60,1,2,3]))).searchSvg,send:async()=>(await a(async()=>{const{sendSvg:t}=await import("./send-Bdd_Y5Gn.js");return{sendSvg:t}},__vite__mapDeps([61,1,2,3]))).sendSvg,swapHorizontal:async()=>(await a(async()=>{const{swapHorizontalSvg:t}=await import("./swapHorizontal-Brh0hOeK.js");return{swapHorizontalSvg:t}},__vite__mapDeps([62,1,2,3]))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await a(async()=>{const{swapHorizontalMediumSvg:t}=await import("./swapHorizontalMedium-BiAEJ98J.js");return{swapHorizontalMediumSvg:t}},__vite__mapDeps([63,1,2,3]))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await a(async()=>{const{swapHorizontalBoldSvg:t}=await import("./swapHorizontalBold-bQBwVtM_.js");return{swapHorizontalBoldSvg:t}},__vite__mapDeps([64,1,2,3]))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await a(async()=>{const{swapHorizontalRoundedBoldSvg:t}=await import("./swapHorizontalRoundedBold-R7oHx-nq.js");return{swapHorizontalRoundedBoldSvg:t}},__vite__mapDeps([65,1,2,3]))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await a(async()=>{const{swapVerticalSvg:t}=await import("./swapVertical-CNeUFHmv.js");return{swapVerticalSvg:t}},__vite__mapDeps([66,1,2,3]))).swapVerticalSvg,solana:async()=>(await a(async()=>{const{solanaSvg:t}=await import("./solana-7kOYLpcs.js");return{solanaSvg:t}},__vite__mapDeps([67,1,2,3]))).solanaSvg,telegram:async()=>(await a(async()=>{const{telegramSvg:t}=await import("./telegram-DZ5mBZbE.js");return{telegramSvg:t}},__vite__mapDeps([68,1,2,3]))).telegramSvg,threeDots:async()=>(await a(async()=>{const{threeDotsSvg:t}=await import("./three-dots-lHPc-fCB.js");return{threeDotsSvg:t}},__vite__mapDeps([69,1,2,3]))).threeDotsSvg,twitch:async()=>(await a(async()=>{const{twitchSvg:t}=await import("./twitch-BlNqzk11.js");return{twitchSvg:t}},__vite__mapDeps([70,1,2,3]))).twitchSvg,twitter:async()=>(await a(async()=>{const{xSvg:t}=await import("./x-zZuRGAwB.js");return{xSvg:t}},__vite__mapDeps([71,1,2,3]))).xSvg,twitterIcon:async()=>(await a(async()=>{const{twitterIconSvg:t}=await import("./twitterIcon-Bv3z0s2y.js");return{twitterIconSvg:t}},__vite__mapDeps([72,1,2,3]))).twitterIconSvg,verify:async()=>(await a(async()=>{const{verifySvg:t}=await import("./verify-z_7o_wRJ.js");return{verifySvg:t}},__vite__mapDeps([73,1,2,3]))).verifySvg,verifyFilled:async()=>(await a(async()=>{const{verifyFilledSvg:t}=await import("./verify-filled-D720qt5O.js");return{verifyFilledSvg:t}},__vite__mapDeps([74,1,2,3]))).verifyFilledSvg,wallet:async()=>(await a(async()=>{const{walletSvg:t}=await import("./wallet-BuqKX1wo.js");return{walletSvg:t}},__vite__mapDeps([75,1,2,3]))).walletSvg,walletConnect:async()=>(await a(async()=>{const{walletConnectSvg:t}=await import("./walletconnect-BKjP0WGL.js");return{walletConnectSvg:t}},__vite__mapDeps([76,1,2,3]))).walletConnectSvg,walletConnectLightBrown:async()=>(await a(async()=>{const{walletConnectLightBrownSvg:t}=await import("./walletconnect-BKjP0WGL.js");return{walletConnectLightBrownSvg:t}},__vite__mapDeps([76,1,2,3]))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await a(async()=>{const{walletConnectBrownSvg:t}=await import("./walletconnect-BKjP0WGL.js");return{walletConnectBrownSvg:t}},__vite__mapDeps([76,1,2,3]))).walletConnectBrownSvg,walletPlaceholder:async()=>(await a(async()=>{const{walletPlaceholderSvg:t}=await import("./wallet-placeholder-CMvEYtWn.js");return{walletPlaceholderSvg:t}},__vite__mapDeps([77,1,2,3]))).walletPlaceholderSvg,warningCircle:async()=>(await a(async()=>{const{warningCircleSvg:t}=await import("./warning-circle-BC4Oz9UZ.js");return{warningCircleSvg:t}},__vite__mapDeps([78,1,2,3]))).warningCircleSvg,x:async()=>(await a(async()=>{const{xSvg:t}=await import("./x-zZuRGAwB.js");return{xSvg:t}},__vite__mapDeps([71,1,2,3]))).xSvg,info:async()=>(await a(async()=>{const{infoSvg:t}=await import("./info-BJ0Z40cY.js");return{infoSvg:t}},__vite__mapDeps([79,1,2,3]))).infoSvg,exclamationTriangle:async()=>(await a(async()=>{const{exclamationTriangleSvg:t}=await import("./exclamation-triangle-C_oygYo2.js");return{exclamationTriangleSvg:t}},__vite__mapDeps([80,1,2,3]))).exclamationTriangleSvg,reown:async()=>(await a(async()=>{const{reownSvg:t}=await import("./reown-logo-BeRlvGQc.js");return{reownSvg:t}},__vite__mapDeps([81,1,2,3]))).reownSvg,"x-mark":async()=>(await a(async()=>{const{xMarkSvg:t}=await import("./x-mark-zOB2WsTo.js");return{xMarkSvg:t}},__vite__mapDeps([82,1,2,3]))).xMarkSvg};async function it(t){if(A.has(t))return A.get(t);const e=(D[t]??D.copy)();return A.set(t,e),e}let g=class extends ${constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `,m`${Q(it(this.name),m`<div class="fallback"></div>`)}`}};g.styles=[R,j,tt];y([l()],g.prototype,"size",void 0);y([l()],g.prototype,"name",void 0);y([l()],g.prototype,"color",void 0);y([l()],g.prototype,"aspectRatio",void 0);g=y([I("wui-icon")],g);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=b(class extends x{constructor(t){if(super(t),t.type!==V.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(i=>t[i]).join(" ")+" "}update(t,[i]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in i)i[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(i)}const e=t.element.classList;for(const r of this.st)r in i||(e.remove(r),this.st.delete(r));for(const r in i){const o=!!i[r];o===this.st.has(r)||this.nt?.has(r)||(o?(e.add(r),this.st.add(r)):(e.remove(r),this.st.delete(r)))}return T}}),et=P`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600,
  .wui-font-micro-500 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var f=function(t,i,e,r){var o=arguments.length,n=o<3?i:r===null?r=Object.getOwnPropertyDescriptor(i,e):r,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,i,e,r);else for(var s=t.length-1;s>=0;s--)(c=t[s])&&(n=(o<3?c(n):o>3?c(i,e,n):c(i,e))||n);return o>3&&n&&Object.defineProperty(i,e,n),n};let p=class extends ${constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const i={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,m`<slot class=${at(i)}></slot>`}};p.styles=[R,et];f([l()],p.prototype,"variant",void 0);f([l()],p.prototype,"color",void 0);f([l()],p.prototype,"align",void 0);f([l()],p.prototype,"lineClamp",void 0);p=f([I("wui-text")],p);const rt=P`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var u=function(t,i,e,r){var o=arguments.length,n=o<3?i:r===null?r=Object.getOwnPropertyDescriptor(i,e):r,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,i,e,r);else for(var s=t.length-1;s>=0;s--)(c=t[s])&&(n=(o<3?c(n):o>3?c(i,e,n):c(i,e))||n);return o>3&&n&&Object.defineProperty(i,e,n),n};let _=class extends ${render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&v.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&v.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&v.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&v.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&v.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&v.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&v.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&v.getSpacingStyles(this.margin,3)};
    `,m`<slot></slot>`}};_.styles=[R,rt];u([l()],_.prototype,"flexDirection",void 0);u([l()],_.prototype,"flexWrap",void 0);u([l()],_.prototype,"flexBasis",void 0);u([l()],_.prototype,"flexGrow",void 0);u([l()],_.prototype,"flexShrink",void 0);u([l()],_.prototype,"alignItems",void 0);u([l()],_.prototype,"justifyContent",void 0);u([l()],_.prototype,"columnGap",void 0);u([l()],_.prototype,"rowGap",void 0);u([l()],_.prototype,"gap",void 0);u([l()],_.prototype,"padding",void 0);u([l()],_.prototype,"margin",void 0);_=u([I("wui-flex")],_);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut=t=>t??H;export{b as a,at as e,K as f,l as n,ut as o,ot as r};
