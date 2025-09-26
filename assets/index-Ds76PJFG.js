import{t as I,z as C,v as A,x as c,E as L,k as v,ar as p,h as O,as as b,R as k,X as z,H as E,I as W,J as F,at as P}from"./web3-libs-CWH8scYH.js";import{n as l,o as S,r as x}from"./if-defined-CemL2qSm.js";import"./index-D7TiUfiD.js";import"./index-CYC8yU5Y.js";import"./index-CASfriZ_.js";import"./index-Ck-ClO5v.js";var R;(function(r){r.approve="approved",r.bought="bought",r.borrow="borrowed",r.burn="burnt",r.cancel="canceled",r.claim="claimed",r.deploy="deployed",r.deposit="deposited",r.execute="executed",r.mint="minted",r.receive="received",r.repay="repaid",r.send="sent",r.sell="sold",r.stake="staked",r.trade="swapped",r.unstake="unstaked",r.withdraw="withdrawn"})(R||(R={}));const U=I`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var g=function(r,t,i,s){var o=arguments.length,e=o<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,i):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,s);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(e=(o<3?n(e):o>3?n(t,i,e):n(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let f=class extends A{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[t,i]=this.images,s=t?.type==="NFT",o=i?.url?i.type==="NFT":s,e=s?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",n=o?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${e};
    --local-right-border-radius: ${n};
    `,c`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[t,i]=this.images,s=t?.type;return this.images.length===2&&(t?.url||i?.url)?c`<div class="swap-images-container">
        ${t?.url?c`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
        ${i?.url?c`<wui-image src=${i.url} alt="Transaction image"></wui-image>`:null}
      </div>`:t?.url?c`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:s==="NFT"?c`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:c`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let t="accent-100",i;return i=this.getIcon(),this.status&&(t=this.getStatusColor()),i?c`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${i}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};f.styles=[U];g([l()],f.prototype,"type",void 0);g([l()],f.prototype,"status",void 0);g([l()],f.prototype,"direction",void 0);g([l({type:Boolean})],f.prototype,"onlyDirectionIcon",void 0);g([l({type:Array})],f.prototype,"images",void 0);g([l({type:Object})],f.prototype,"secondImage",void 0);f=g([C("wui-transaction-visual")],f);const V=I`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var d=function(r,t,i,s){var o=arguments.length,e=o<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,i):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,s);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(e=(o<3?n(e):o>3?n(t,i,e):n(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let u=class extends A{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return c`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${S(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${S(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${R[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){const t=this.descriptions?.[0];return t?c`
          <wui-text variant="small-500" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}templateSecondDescription(){const t=this.descriptions?.[1];return t?c`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}};u.styles=[L,V];d([l()],u.prototype,"type",void 0);d([l({type:Array})],u.prototype,"descriptions",void 0);d([l()],u.prototype,"date",void 0);d([l({type:Boolean})],u.prototype,"onlyDirectionIcon",void 0);d([l()],u.prototype,"status",void 0);d([l()],u.prototype,"direction",void 0);d([l({type:Array})],u.prototype,"images",void 0);d([l({type:Array})],u.prototype,"price",void 0);d([l({type:Array})],u.prototype,"amount",void 0);d([l({type:Array})],u.prototype,"symbol",void 0);u=d([C("wui-transaction-list-item")],u);const G=I`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var M=function(r,t,i,s){var o=arguments.length,e=o<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,i):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,s);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(e=(o<3?n(e):o>3?n(t,i,e):n(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};let _=class extends A{render(){return c`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};_.styles=[L,G];_=M([C("wui-transaction-list-item-loader")],_);const H=I`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: var(--wui-spacing-m);
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var w=function(r,t,i,s){var o=arguments.length,e=o<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,i):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,i,s);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(e=(o<3?n(e):o>3?n(t,i,e):n(t,i))||e);return o>3&&e&&Object.defineProperty(t,i,e),e};const $="last-transaction",K=7;let m=class extends A{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=v.state.activeCaipAddress,this.transactionsByYear=p.state.transactionsByYear,this.loading=p.state.loading,this.empty=p.state.empty,this.next=p.state.next,p.clearCursor(),this.unsubscribe.push(v.subscribeKey("activeCaipAddress",t=>{t&&this.caipAddress!==t&&(p.resetTransactions(),p.fetchTransactions(t)),this.caipAddress=t}),v.subscribeKey("activeCaipNetwork",()=>{this.updateTransactionView()}),p.subscribe(t=>{this.transactionsByYear=t.transactionsByYear,this.loading=t.loading,this.empty=t.empty,this.next=t.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return c` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){p.resetTransactions(),this.caipAddress&&p.fetchTransactions(O.getPlainAddress(this.caipAddress))}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(i=>{const s=parseInt(i,10),o=new Array(12).fill(null).map((e,n)=>{const a=b.getTransactionGroupTitle(s,n),h=this.transactionsByYear[s]?.[n];return{groupTitle:a,transactions:h}}).filter(({transactions:e})=>e).reverse();return o.map(({groupTitle:e,transactions:n},a)=>{const h=a===o.length-1;return n?c`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${h?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200" data-testid="group-title"
                >${e}</wui-text
              >
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(n,h)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(t,i){const{date:s,descriptions:o,direction:e,isAllNFT:n,images:a,status:h,transfers:y,type:D}=this.getTransactionListItemProps(t),B=y?.length>1;return y?.length===2&&!n?c`
        <wui-transaction-list-item
          date=${s}
          .direction=${e}
          id=${i&&this.next?$:""}
          status=${h}
          type=${D}
          .images=${a}
          .descriptions=${o}
        ></wui-transaction-list-item>
      `:B?y.map((j,N)=>{const T=b.getTransferDescription(j),Y=i&&N===y.length-1;return c` <wui-transaction-list-item
          date=${s}
          direction=${j.direction}
          id=${Y&&this.next?$:""}
          status=${h}
          type=${D}
          .onlyDirectionIcon=${!0}
          .images=${[a[N]]}
          .descriptions=${[T]}
        ></wui-transaction-list-item>`}):c`
      <wui-transaction-list-item
        date=${s}
        .direction=${e}
        id=${i&&this.next?$:""}
        status=${h}
        type=${D}
        .images=${a}
        .descriptions=${o}
      ></wui-transaction-list-item>
    `}templateTransactions(t,i){return t.map((s,o)=>{const e=i&&o===t.length-1;return c`${this.templateRenderTransaction(s,e)}`})}emptyStateActivity(){return c`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
      data-testid="empty-activity-state"
    >
      <wui-icon-box
        backgroundColor="gray-glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return c`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
      data-testid="empty-account-state"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return this.page==="account"?c`${this.emptyStateAccount()}`:c`${this.emptyStateActivity()}`}templateLoading(){return this.page==="activity"?Array(K).fill(c` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(t=>t):null}onReceiveClick(){k.push("WalletReceive")}createPaginationObserver(){const{projectId:t}=z.state;this.paginationObserver=new IntersectionObserver(([i])=>{i?.isIntersecting&&!this.loading&&(p.fetchTransactions(O.getPlainAddress(this.caipAddress)),E.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:O.getPlainAddress(this.caipAddress),projectId:t,cursor:this.next,isSmartAccount:W(v.state.activeChain)===F.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();const t=this.shadowRoot?.querySelector(`#${$}`);t&&this.paginationObserver?.observe(t)}getTransactionListItemProps(t){const i=P.formatDate(t?.metadata?.minedAt),s=b.getTransactionDescriptions(t),o=t?.transfers,e=t?.transfers?.[0],n=!!e&&t?.transfers?.every(h=>!!h.nft_info),a=b.getTransactionImages(o);return{date:i,direction:e?.direction,descriptions:s,isAllNFT:n,images:a,status:t.metadata?.status,transfers:o,type:t.metadata?.operationType}}};m.styles=H;w([l()],m.prototype,"page",void 0);w([x()],m.prototype,"caipAddress",void 0);w([x()],m.prototype,"transactionsByYear",void 0);w([x()],m.prototype,"loading",void 0);w([x()],m.prototype,"empty",void 0);w([x()],m.prototype,"next",void 0);m=w([C("w3m-activity-list")],m);
