"use strict";(self.webpackChunkgh_action_test=self.webpackChunkgh_action_test||[]).push([[9677],{1460:(e,t,a)=>{a.d(t,{Z:()=>f});var s=a(7294),n=a(512),r=a(6040),i=a(7524),l=a(9960),o=a(5999),c=a(6550),m=a(8596);function d(e){const{pathname:t}=(0,c.TH)();return(0,s.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,m.Mg)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var h=a(5893);function g(e){let{sidebar:t}=e;const a=d(t.items);return(0,h.jsx)("aside",{className:"col col--3",children:(0,h.jsxs)("nav",{className:(0,n.Z)(u.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.jsx)("div",{className:(0,n.Z)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,h.jsx)("ul",{className:(0,n.Z)(u.sidebarItemList,"clean-list"),children:a.map((e=>(0,h.jsx)("li",{className:u.sidebarItem,children:(0,h.jsx)(l.Z,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var p=a(3102);function x(e){let{sidebar:t}=e;const a=d(t.items);return(0,h.jsx)("ul",{className:"menu__list",children:a.map((e=>(0,h.jsx)("li",{className:"menu__list-item",children:(0,h.jsx)(l.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function j(e){return(0,h.jsx)(p.Zo,{component:x,props:e})}function b(e){let{sidebar:t}=e;const a=(0,i.i)();return t?.items.length?"mobile"===a?(0,h.jsx)(j,{sidebar:t}):(0,h.jsx)(g,{sidebar:t}):null}function f(e){const{sidebar:t,toc:a,children:s,...i}=e,l=t&&t.items.length>0;return(0,h.jsx)(r.Z,{...i,children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(b,{sidebar:t}),(0,h.jsx)("main",{className:(0,n.Z)("col",{"col--7":l,"col--9 col--offset-1":!l}),itemScope:!0,itemType:"https://schema.org/Blog",children:s}),a&&(0,h.jsx)("div",{className:"col col--2",children:a})]})})})}},390:(e,t,a)=>{a.d(t,{Z:()=>y});a(7294);var s=a(512),n=a(9460),r=a(4996),i=a(5893);function l(e){let{children:t,className:a}=e;const{frontMatter:s,assets:l,metadata:{description:o}}=(0,n.C)(),{withBaseUrl:c}=(0,r.C)(),m=l.image??s.image,d=s.keywords??[];return(0,i.jsxs)("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting",children:[o&&(0,i.jsx)("meta",{itemProp:"description",content:o}),m&&(0,i.jsx)("link",{itemProp:"image",href:c(m,{absolute:!0})}),d.length>0&&(0,i.jsx)("meta",{itemProp:"keywords",content:d.join(",")}),t]})}var o=a(9960);const c={title:"title_f1Hy"};function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:r}=(0,n.C)(),{permalink:l,title:m}=a,d=r?"h1":"h2";return(0,i.jsx)(d,{className:(0,s.Z)(c.title,t),itemProp:"headline",children:r?m:(0,i.jsx)(o.Z,{itemProp:"url",to:l,children:m})})}var d=a(5999),u=a(8824);const h={container:"container_mt6G"};function g(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,u.c)();return t=>{const a=Math.ceil(t);return e(a,(0,d.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,i.jsx)(i.Fragment,{children:a(t)})}function p(e){let{date:t,formattedDate:a}=e;return(0,i.jsx)("time",{dateTime:t,itemProp:"datePublished",children:a})}function x(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:a}=(0,n.C)(),{date:r,formattedDate:l,readingTime:o}=a;return(0,i.jsxs)("div",{className:(0,s.Z)(h.container,"margin-vert--md",t),children:[(0,i.jsx)(p,{date:r,formattedDate:l}),void 0!==o&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x,{}),(0,i.jsx)(g,{readingTime:o})]})]})}function b(e){return e.href?(0,i.jsx)(o.Z,{...e}):(0,i.jsx)(i.Fragment,{children:e.children})}function f(e){let{author:t,className:a}=e;const{name:n,title:r,url:l,imageURL:o,email:c}=t,m=l||c&&`mailto:${c}`||void 0;return(0,i.jsxs)("div",{className:(0,s.Z)("avatar margin-bottom--sm",a),children:[o&&(0,i.jsx)(b,{href:m,className:"avatar__photo-link",children:(0,i.jsx)("img",{className:"avatar__photo",src:o,alt:n,itemProp:"image"})}),n&&(0,i.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,i.jsx)("div",{className:"avatar__name",children:(0,i.jsx)(b,{href:m,itemProp:"url",children:(0,i.jsx)("span",{itemProp:"name",children:n})})}),r&&(0,i.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:r})]})]})}const v={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function _(e){let{className:t}=e;const{metadata:{authors:a},assets:r}=(0,n.C)();if(0===a.length)return null;const l=a.every((e=>{let{name:t}=e;return!t}));return(0,i.jsx)("div",{className:(0,s.Z)("margin-top--md margin-bottom--sm",l?v.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,i.jsx)("div",{className:(0,s.Z)(!l&&"col col--6",l?v.imageOnlyAuthorCol:v.authorCol),children:(0,i.jsx)(f,{author:{...e,imageURL:r.authorsImageUrls[t]??e.imageURL}})},t)))})}function N(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(m,{}),(0,i.jsx)(j,{}),(0,i.jsx)(_,{})]})}var P=a(8780),Z=a(2196);function k(e){let{children:t,className:a}=e;const{isBlogPostPage:r}=(0,n.C)();return(0,i.jsx)("div",{id:r?P.blogPostContainerID:void 0,className:(0,s.Z)("markdown",a),itemProp:"articleBody",children:(0,i.jsx)(Z.Z,{children:t})})}var C=a(4881),T=a(1526);function w(){return(0,i.jsx)("b",{children:(0,i.jsx)(d.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function I(e){const{blogPostTitle:t,...a}=e;return(0,i.jsx)(o.Z,{"aria-label":(0,d.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,i.jsx)(w,{})})}const F={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function L(){const{metadata:e,isBlogPostPage:t}=(0,n.C)(),{tags:a,title:r,editUrl:l,hasTruncateMarker:o}=e,c=!t&&o,m=a.length>0;return m||c||l?(0,i.jsxs)("footer",{className:(0,s.Z)("row docusaurus-mt-lg",t&&F.blogPostFooterDetailsFull),children:[m&&(0,i.jsx)("div",{className:(0,s.Z)("col",{"col--9":c}),children:(0,i.jsx)(T.Z,{tags:a})}),t&&l&&(0,i.jsx)("div",{className:"col margin-top--sm",children:(0,i.jsx)(C.Z,{editUrl:l})}),c&&(0,i.jsx)("div",{className:(0,s.Z)("col text--right",{"col--3":m}),children:(0,i.jsx)(I,{blogPostTitle:r,to:e.permalink})})]}):null}function y(e){let{children:t,className:a}=e;const r=function(){const{isBlogPostPage:e}=(0,n.C)();return e?void 0:"margin-bottom--xl"}();return(0,i.jsxs)(l,{className:(0,s.Z)(r,a),children:[(0,i.jsx)(N,{}),(0,i.jsx)(k,{children:t}),(0,i.jsx)(L,{})]})}},4881:(e,t,a)=>{a.d(t,{Z:()=>m});a(7294);var s=a(5999),n=a(5281),r=a(9960),i=a(512);const l={iconEdit:"iconEdit_Z9Sw"};var o=a(5893);function c(e){let{className:t,...a}=e;return(0,o.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(l.iconEdit,t),"aria-hidden":"true",...a,children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function m(e){let{editUrl:t}=e;return(0,o.jsxs)(r.Z,{to:t,className:n.k.common.editThisPage,children:[(0,o.jsx)(c,{}),(0,o.jsx)(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},2244:(e,t,a)=>{a.d(t,{Z:()=>i});a(7294);var s=a(512),n=a(9960),r=a(5893);function i(e){const{permalink:t,title:a,subLabel:i,isNext:l}=e;return(0,r.jsxs)(n.Z,{className:(0,s.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,r.jsx)("div",{className:"pagination-nav__label",children:a})]})}},3008:(e,t,a)=>{a.d(t,{Z:()=>l});a(7294);var s=a(512),n=a(9960);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var i=a(5893);function l(e){let{permalink:t,label:a,count:l}=e;return(0,i.jsxs)(n.Z,{href:t,className:(0,s.Z)(r.tag,l?r.tagWithCount:r.tagRegular),children:[a,l&&(0,i.jsx)("span",{children:l})]})}},1526:(e,t,a)=>{a.d(t,{Z:()=>o});a(7294);var s=a(512),n=a(5999),r=a(3008);const i={tags:"tags_jXut",tag:"tag_QGVx"};var l=a(5893);function o(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,s.Z)(i.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:a}=e;return(0,l.jsx)("li",{className:i.tag,children:(0,l.jsx)(r.Z,{label:t,permalink:a})},a)}))})]})}},9460:(e,t,a)=>{a.d(t,{C:()=>o,n:()=>l});var s=a(7294),n=a(902),r=a(5893);const i=s.createContext(null);function l(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const l=function(e){let{content:t,isBlogPostPage:a}=e;return(0,s.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return(0,r.jsx)(i.Provider,{value:l,children:t})}function o(){const e=(0,s.useContext)(i);if(null===e)throw new n.i6("BlogPostProvider");return e}},8824:(e,t,a)=>{a.d(t,{c:()=>c});var s=a(7294),n=a(2263);const r=["zero","one","two","few","many","other"];function i(e){return r.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const s=e.split("|");if(1===s.length)return s[0];s.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const n=a.select(t),r=a.pluralForms.indexOf(n);return s[Math.min(r,s.length-1)]}(a,t,e)}}}}]);