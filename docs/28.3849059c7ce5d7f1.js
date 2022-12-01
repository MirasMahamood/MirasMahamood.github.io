"use strict";(self.webpackChunksmart_pm_tools=self.webpackChunksmart_pm_tools||[]).push([[28],{3028:(k,U,r)=>{r.r(U),r.d(U,{UsersModule:()=>J});var Z=r(6895),a=r(433),c=r(6103),T=r(369),g=r(5593),N=r(5047),f=r(1740),u=r(165),h=r(2453),I=r(3608),d=r(593),l=r(805),e=r(1571),p=r(9646);const b=JSON.parse('[{"id":"0001","firstName":"Miras","lastName":"Mahamood","designation":"Manager","proofId":"SPT-1","phone":9043545568,"email":"miras.ap@gmail.com","organization":"Org Name","image":""},{"id":"0002","firstName":"Alice","lastName":"Wonderland","designation":"Manager","proofId":"SPT-2","phone":9043545568,"email":"alice.wonderland@gmail.com","organization":"Org Name","image":""},{"id":"0003","firstName":"Vinoth","lastName":"Kumar","designation":"Manager","proofId":"SPT-3","phone":9043545568,"email":"vinoth.kumar@gmail.com","organization":"Org Name","image":""},{"id":"0004","firstName":"Yiorgos","lastName":"Avraamu","designation":"Manager","proofId":"SPT-4","phone":9043545568,"email":"Yiorgos.Avraamu@gmail.com","organization":"Org Name","image":""},{"id":"0005","firstName":"Avram","lastName":"Tarasios","designation":"Manager","proofId":"SPT-5","phone":9043545568,"email":"Avram.Tarasios@gmail.com","organization":"Org Name","image":""},{"id":"0006","firstName":"Quintin","lastName":"Ed","designation":"Manager","proofId":"SPT-6","phone":9043545568,"email":"Quintin.Ed@gmail.com","organization":"Org Name","image":""},{"id":"0007","firstName":"Eneas","lastName":"Kwadwo","designation":"Manager","proofId":"SPT-7","phone":9043545568,"email":"Eneas.Kwadwo@gmail.com","organization":"Org Name","image":""},{"id":"0008","firstName":"Agapetus","lastName":"Tadeas","designation":"Manager","proofId":"SPT-8","phone":9043545568,"email":"Agapetus.Tadeas@gmail.com","organization":"Org Name","image":""},{"id":"0009","firstName":"Friderik","lastName":"David","designation":"Manager","proofId":"SPT-9","phone":9043545568,"email":"Friderik.David@gmail.com","organization":"Org Name","image":""},{"id":"0010","firstName":"John","lastName":"Snow","designation":"Manager","proofId":"SPT-10","phone":9043545568,"email":"John.Snow@gmail.com","organization":"Org Name","image":""},{"id":"0011","firstName":"Lional","lastName":"Messi","designation":"Manager","proofId":"SPT-11","phone":9043545568,"email":"Lional.Messi@gmail.com","organization":"Org Name","image":""},{"id":"0012","firstName":"Cristiano","lastName":"Ronaldo","designation":"Manager","proofId":"SPT-12","phone":9043545568,"email":"Cristiano.Ronaldo@gmail.com","organization":"Org Name","image":""}]');var C=r(529);let v=(()=>{class i{constructor(t){this.http=t,this.userList=b}createUser(t){return t.id=""+1e3*Math.random(),this.userList.unshift(t),(0,p.of)({data:t})}deleteUser(t){const o=this.userList.findIndex(m=>m.id==t);return this.userList.splice(o,1),(0,p.of)({data:this.userList})}getAllUsers(){return(0,p.of)({data:this.userList})}getUserById(t){let n={data:this.userList.find(m=>m.id===t)};return(0,p.of)(n)}updateUser(t){const o=this.userList.findIndex(m=>m.id===t.id);return this.userList.splice(o,1),this.userList.unshift(t),(0,p.of)({data:t})}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(C.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function S(i,s){1&i&&(e.TgZ(0,"small",23),e._uU(1,"User ID is required."),e.qZA())}function _(i,s){1&i&&(e.TgZ(0,"small",23),e._uU(1,"First name is required."),e.qZA())}function q(i,s){1&i&&(e.TgZ(0,"small",23),e._uU(1,"Last name is required."),e.qZA())}function x(i,s){1&i&&(e.TgZ(0,"small",23),e._uU(1,"Proof ID is required."),e.qZA())}function y(i,s){1&i&&(e.TgZ(0,"small",23),e._uU(1,"Phone number should be 10 digit."),e.qZA())}function M(i,s){1&i&&(e.TgZ(0,"small",23),e._uU(1,"A valid email is required."),e.qZA())}let A=(()=>{class i{constructor(t,o,n,m){this.formBuilder=t,this.route=o,this.messageService=n,this.userService=m,this.form=this.formBuilder.group({id:["",a.kI.required],proofId:["",a.kI.required],firstName:["",a.kI.required],lastName:["",a.kI.required],designation:[""],phone:[null,[a.kI.min(1e9),a.kI.max(9999999999)]],email:["",[a.kI.required,a.kI.email]],organization:[""],image:[""]}),this.isAddMode=!0,this.submitted=!1}ngOnInit(){let t=this.route.snapshot.params.id;this.isAddMode=!t,this.isAddMode||this.getUserById(t)}get f(){return this.form.controls}onSubmit(){this.submitted=!0,!this.form.invalid&&(this.isAddMode?this.createUser():this.updateUser())}createUser(){this.userService.createUser(this.form.value).subscribe(t=>{this.messageService.add({severity:"success",summary:"Success",detail:"User created successfully"}),this.submitted=!1,this.form.reset()})}getUserById(t){this.userService.getUserById(t).subscribe(o=>{console.log(o.data),this.form.patchValue(o.data)})}updateUser(){this.submitted=!0,this.userService.updateUser(this.form.value).subscribe(t=>{this.messageService.add({severity:"success",summary:"Success",detail:"User updated successfully"}),this.submitted=!1})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(a.qu),e.Y36(d.gz),e.Y36(l.ez),e.Y36(v))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-create-edit-user"]],features:[e._Bn([l.ez])],decls:48,vars:9,consts:[["autocomplete","off",3,"formGroup","ngSubmit"],[1,"field","grid"],["for","id",1,"col-12","mb-2","md:col-1","md:mb-0"],[1,"col-12","md:col-3"],["type","text","id","id","pInputText","","formControlName","id",1,"p-1"],["class","p-error block",4,"ngIf"],["for","firstName",1,"col-12","mb-2","md:col-1","md:mb-0"],["type","text","id","firstName","pInputText","","formControlName","firstName",1,"p-1"],["for","lastName",1,"col-12","mb-2","md:col-1","md:mb-0"],["type","text","id","lastName","pInputText","","formControlName","lastName",1,"p-1"],["for","proofId",1,"col-12","mb-2","md:col-1","md:mb-0"],["type","text","id","proofId","pInputText","","formControlName","proofId",1,"p-1"],["for","designation",1,"col-12","mb-2","md:col-1","md:mb-0"],["type","text","id","designation","pInputText","","formControlName","designation",1,"p-1"],["for","phone",1,"col-12","mb-2","md:col-1","md:mb-0"],["inputStyleClass","p-1","inputId","phone","formControlName","phone",3,"useGrouping"],["for","email",1,"col-12","mb-2","md:col-1","md:mb-0"],["type","email","id","email","pInputText","","formControlName","email",1,"p-1"],["type","organization","id","email","pInputText","","formControlName","organization",1,"p-1"],[1,"text-center"],["pButton","","icon","pi pi-check",1,"mr-1","p-button-sm"],["routerLink","/masters/users/list",1,"no-underline"],["pButton","","label","Close","icon","pi pi-times",1,"p-button-sm","p-button-danger"],[1,"p-error","block"]],template:function(t,o){1&t&&(e._UZ(0,"p-toast"),e.TgZ(1,"form",0),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(2,"div",1)(3,"label",2),e._uU(4,"User ID"),e.qZA(),e.TgZ(5,"div",3),e._UZ(6,"input",4),e.YNc(7,S,2,0,"small",5),e.qZA(),e.TgZ(8,"label",6),e._uU(9,"First Name"),e.qZA(),e.TgZ(10,"div",3),e._UZ(11,"input",7),e.YNc(12,_,2,0,"small",5),e.qZA(),e.TgZ(13,"label",8),e._uU(14,"last Name"),e.qZA(),e.TgZ(15,"div",3),e._UZ(16,"input",9),e.YNc(17,q,2,0,"small",5),e.qZA()(),e.TgZ(18,"div",1)(19,"label",10),e._uU(20,"Proof ID"),e.qZA(),e.TgZ(21,"div",3),e._UZ(22,"input",11),e.YNc(23,x,2,0,"small",5),e.qZA(),e.TgZ(24,"label",12),e._uU(25,"Designation"),e.qZA(),e.TgZ(26,"div",3),e._UZ(27,"input",13),e.qZA(),e.TgZ(28,"label",14),e._uU(29,"Phone"),e.qZA(),e.TgZ(30,"div",3),e._UZ(31,"p-inputNumber",15),e.YNc(32,y,2,0,"small",5),e.qZA()(),e.TgZ(33,"div",1)(34,"label",16),e._uU(35,"Email"),e.qZA(),e.TgZ(36,"div",3),e._UZ(37,"input",17),e.YNc(38,M,2,0,"small",5),e.qZA(),e.TgZ(39,"label",16),e._uU(40,"Organization"),e.qZA(),e.TgZ(41,"div",3),e._UZ(42,"input",18),e.qZA()(),e.TgZ(43,"div",19)(44,"button",20),e._uU(45),e.qZA(),e.TgZ(46,"a",21),e._UZ(47,"button",22),e.qZA()()()),2&t&&(e.xp6(1),e.Q6J("formGroup",o.form),e.xp6(6),e.Q6J("ngIf",o.submitted&&o.f.id.errors),e.xp6(5),e.Q6J("ngIf",o.submitted&&o.f.firstName.errors),e.xp6(5),e.Q6J("ngIf",o.submitted&&o.f.lastName.errors),e.xp6(6),e.Q6J("ngIf",o.submitted&&o.f.proofId.errors),e.xp6(8),e.Q6J("useGrouping",!1),e.xp6(1),e.Q6J("ngIf",o.submitted&&(o.f.phone.hasError("min")||o.f.phone.hasError("max"))),e.xp6(6),e.Q6J("ngIf",o.submitted&&o.f.email.errors),e.xp6(7),e.Oqu(o.isAddMode?"Save":"Update"))},dependencies:[Z.O5,g.Hq,N.Rn,f.o,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,h.FN,d.yS],encapsulation:2}),i})();function z(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",8)(1,"span",9),e._UZ(2,"i",10),e.TgZ(3,"input",11,12),e.NdJ("input",function(){e.CHM(t);const n=e.MAs(4);e.oxw();const m=e.MAs(8);return e.KtG(m.filterGlobal(n.value,"contains"))}),e.qZA()()()}}function L(i,s){1&i&&(e.TgZ(0,"tr")(1,"th",13),e._uU(2,"ID "),e._UZ(3,"p-sortIcon",14),e.qZA(),e.TgZ(4,"th",15),e._uU(5,"Proof ID "),e._UZ(6,"p-sortIcon",16),e.qZA(),e.TgZ(7,"th",17),e._uU(8,"Name "),e._UZ(9,"p-sortIcon",18),e.qZA(),e.TgZ(10,"th",19),e._uU(11,"Designation "),e._UZ(12,"p-sortIcon",20),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Phone"),e.qZA(),e.TgZ(15,"th",21),e._uU(16,"Email "),e._UZ(17,"p-sortIcon",22),e.qZA(),e.TgZ(18,"th",23),e._uU(19,"Organization "),e._UZ(20,"p-sortIcon",24),e.qZA(),e.TgZ(21,"th"),e._uU(22,"Actions"),e.qZA()())}function P(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td")(16,"a",25),e._UZ(17,"i",26),e.qZA(),e.TgZ(18,"i",27),e.NdJ("click",function(n){const F=e.CHM(t).$implicit,B=e.oxw();return e.KtG(B.confirmDelete(n,F.id))}),e.qZA()()()}if(2&i){const t=s.$implicit;e.xp6(2),e.Oqu(t.id),e.xp6(2),e.Oqu(t.proofId),e.xp6(2),e.AsE("",t.firstName," ",t.lastName,""),e.xp6(2),e.Oqu(t.designation),e.xp6(2),e.Oqu(t.phone),e.xp6(2),e.Oqu(t.email),e.xp6(2),e.Oqu(t.organization),e.xp6(2),e.MGl("routerLink","/masters/users/edit/",t.id,"")}}const O=function(){return[5,10,15]},E=function(){return["id","proofId","firstName","lastName","designation","phone","email","organization"]},Y=[{path:"",data:{title:"Users"},children:[{path:"",pathMatch:"full",redirectTo:"list"},{path:"list",component:(()=>{class i{constructor(t,o,n){this.confirmationService=t,this.messageService=o,this.userService=n,this.users=[]}ngOnInit(){this.userService.getAllUsers().subscribe(t=>{this.users=t.data})}confirmDelete(t,o){this.confirmationService.confirm({target:t.target,message:"Are you sure that you want to Delete?",icon:"pi pi-exclamation-triangle",accept:()=>{this.deleteUser(o)},reject:()=>{console.log("Rejected")}})}deleteUser(t){this.userService.deleteUser(t).subscribe(o=>{this.messageService.add({severity:"success",summary:"Success",detail:"User deleted successfully"}),this.users=o.data})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(l.YP),e.Y36(l.ez),e.Y36(v))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-users-list"]],features:[e._Bn([l.YP,l.ez])],decls:12,vars:8,consts:[["routerLink","/masters/users/create",1,"no-underline"],["pButton","","type","button","label","Create","icon","pi pi-plus",1,"p-button-sm"],["xs","12",1,"pt-0"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","styleClass","p-datatable-sm p-datatable-gridlines",3,"value","paginator","rows","showCurrentPageReport","rowsPerPageOptions","globalFilterFields"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"flex"],[1,"p-input-icon-left","ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search keyword",3,"input"],["fgInputText",""],["pSortableColumn","id"],["field","id"],["pSortableColumn","proofId"],["field","proofId"],["pSortableColumn","firstName"],["field","firstName"],["pSortableColumn","designation"],["field","designation"],["pSortableColumn","email"],["field","email"],["pSortableColumn","organization"],["field","organization"],[1,"no-underline","text-color",3,"routerLink"],["pTooltip","Edit User","tooltipPosition","left",1,"pi","pi-user-edit","mr-3","cursor-pointer"],["pTooltip","Delete User","tooltipPosition","left",1,"pi","pi-trash","cursor-pointer",3,"click"]],template:function(t,o){1&t&&(e._UZ(0,"p-confirmPopup")(1,"p-toast"),e.TgZ(2,"c-row")(3,"c-col")(4,"a",0),e._UZ(5,"button",1),e.qZA()(),e.TgZ(6,"c-col",2)(7,"p-table",3,4),e.YNc(9,z,5,0,"ng-template",5),e.YNc(10,L,23,0,"ng-template",6),e.YNc(11,P,19,9,"ng-template",7),e.qZA()()()),2&t&&(e.xp6(7),e.Q6J("value",o.users)("paginator",!0)("rows",5)("showCurrentPageReport",!0)("rowsPerPageOptions",e.DdM(6,O))("globalFilterFields",e.DdM(7,E)))},dependencies:[g.Hq,T.P,f.o,c.iok,c.Yp0,u.iA,l.jx,u.lQ,u.fz,h.FN,I.u,d.yS],encapsulation:2}),i})(),data:{title:"List"}},{path:"create",component:A,data:{title:"Create"}},{path:"edit/:id",component:A,data:{title:"Edit"}}]}];let D=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.Bz.forChild(Y),d.Bz]}),i})(),J=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[Z.ez,g.hJ,T.n,N.L$,f.j,c.zE6,a.UX,u.U$,h.EV,I.z,D]}),i})()}}]);