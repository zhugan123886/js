(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8cfb0486"],{"4ca0":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"PageBox"},[n("div",{staticClass:"ScrollBox"},[1!=t.userInfo.is_realname?n("div",{staticStyle:{overflow:"hidden","margin-top":"15px"}},[n("van-divider",{attrs:{hairline:!1}},[t._v(t._s(t.$t("bankCard.tips[0]")))]),n("div",{staticStyle:{padding:"15px"}},[n("van-button",{staticStyle:{"font-size":"16px"},attrs:{block:"",type:"danger"},on:{click:function(a){return t.$router.push("/user/set/realname")}}},[t._v(t._s(t.$t("bankCard.default[1]")))])],1)],1):n("div",[t.showAdd?n("van-divider",{staticStyle:{"text-align":"center"},attrs:{hairline:!1}},[t._v(t._s(t.$t("bankCard.tips[1]")))]):t._e(),t.showAdd?n("van-form",{on:{submit:t.onSubmit}},[n("van-field",{attrs:{readonly:"",value:t.userInfo.realname,label:t.$t("bankCard.label[0]")}}),n("van-field",{attrs:{label:t.$t("bankCard.label[2]"),placeholder:t.$t("bankCard.placeholder[1]")},model:{value:t.postData.card_no,callback:function(a){t.$set(t.postData,"card_no","string"===typeof a?a.trim():a)},expression:"postData.card_no"}}),n("van-field",{attrs:{readonly:"",value:t.postData.bank_name,label:t.$t("bankCard.label[1]"),placeholder:"--"+t.$t("bankCard.placeholder[0]")+"--"},on:{click:function(a){t.showPicker=!0}}}),n("div",{staticStyle:{padding:"15px"}},[n("van-button",{staticStyle:{"font-size":"16px"},attrs:{block:"",type:"danger",loading:t.isSubmit,"loading-text":t.$t("bankCard.default[2]")}},[t._v(t._s(t.$t("bankCard.default[3]")))])],1)],1):n("div",[n("div",{staticStyle:{padding:"10px 10px 0"}},[n("van-button",{staticStyle:{"font-size":"16px"},attrs:{block:"",type:"info"},on:{click:function(a){t.showAdd=!0}}},[t._v(t._s(t.$t("bankCard.default[4]")))])],1),t._l(t.cardList,(function(t){return n("van-cell",{key:t.id,staticClass:"list",attrs:{border:!1,title:t.bank_name+" "+t.bank_branch_name,label:t.card_no.replace(/^(.{4}).*(.{4})$/,"$1 **** **** $2"),icon:"card"}})}))],2)],1)]),n("van-popup",{attrs:{position:"bottom"},model:{value:t.showPicker,callback:function(a){t.showPicker=a},expression:"showPicker"}},[n("van-picker",{attrs:{"show-toolbar":"",columns:t.bankList,"confirm-button-text":t.$t("bankCard.placeholder[3]"),"cancel-button-text":t.$t("bankCard.placeholder[4]")},on:{confirm:t.onConfirm,cancel:function(a){t.showPicker=!1}}})],1)],1)},s=[],i={name:"BankCard",components:{},props:[],data(){return{postData:{name:"",bank_id:"",bank_name:"",card_no:""},showPicker:!1,bankList:"",showAdd:!1,isSubmit:!1}},computed:{userInfo(){return this.$store.state.UserInfo},cardList(){return this.$store.state.BankCardList}},watch:{},created(){this.$parent.navBarTitle=this.$t("bankCard.default[0]"),this.cardList.length?this.showAdd=!1:this.showAdd=!0,this.postData.name=this.userInfo.realname,this.bankList=this.InitData.BanksList.flatMap(t=>t.bank),this.$Model.GetBankCardList()},mounted(){},activated(){},destroyed(){},methods:{onConfirm(t,a){this.postData.bank_name=t,null!=this.InitData.BanksList&&this.InitData.BanksList.length>0&&(this.postData.bank_id=this.InitData.BanksList[a].bank_id),this.showPicker=!1},onSubmit(){this.postData.bank_name?this.postData.card_no?(this.postData.name=this.userInfo.realname,this.isSubmit=!0,this.$Model.AddBankCard(this.postData,t=>{this.isSubmit=!1,1==t.code&&(this.showAdd=!1)})):this.$Dialog.Toast(this.$t("bankCard.placeholder[1]")):this.$Dialog.Toast(this.$t("bankCard.placeholder[0]"))}}},o=i,r=(n("a63d"),n("2877")),d=Object(r["a"])(o,e,s,!1,null,"c7148b1e",null);a["default"]=d.exports},a63d:function(t,a,n){"use strict";var e=n("b07a"),s=n.n(e);s.a},b07a:function(t,a,n){}}]);