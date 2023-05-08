"use strict";(self.webpackChunkVLab=self.webpackChunkVLab||[]).push([[519],{519:(x,f,o)=>{o.r(f),o.d(f,{MechanicaloperationsModule:()=>i});var p=o(6895),r=o(1310),b=o(6285),e=o(4650),v=o(7009),m=o(4859),h=o(3683);function C(n,t){if(1&n){const a=e.EpF();e.TgZ(0,"li")(1,"a")(2,"button",21),e.NdJ("click",function(){const M=e.CHM(a).$implicit,d=e.oxw();return d.selected=M,e.KtG(d.selectedExp(d.selected))}),e._uU(3),e.qZA()()()}if(2&n){const a=t.$implicit;e.xp6(3),e.Oqu(a)}}function T(n,t){if(1&n){const a=e.EpF();e.TgZ(0,"div")(1,"div",22)(2,"button",23),e.NdJ("click",function(){e.CHM(a);const g=e.oxw();return e.KtG(g.ismenuOn=!0)}),e.TgZ(3,"h1"),e._uU(4,"Select Process"),e.qZA()()()()}}class s{constructor(t,a){this.router=t,this.snackBar=a,this.m=b.P,this.selected="Cyclone Separator",this.isTreeOn=!1,this.ismenuOn=!1,this.subjects=["Fluid Mechanics","Heat Transfer","Mass Transfer","Mechanical operation","Chemical Reaction Engineering"]}ngOnInit(){setTimeout(()=>{this.snackBar.open("Currently in Heat Transfer Stream , Use the menu bar to Navigate to other processes","Ok",{duration:5e3})},2e3),this.selected=localStorage.getItem("Current")?localStorage.getItem("Current")+"":"Shell and Tube Heat Exchanger",this.equipments=["Cyclone Separator"," "," "," "," "," "," "]}ngOnChanges(){this.selectedExp(this.selected)}selectedLab(t){t=t.replace(" ",""),this.navigateTo(t)}selectedExp(t){"Cyclone Separator"==t?t="CycloneSeparator":"Helical Coil Heat Exchanger"==t?t="HelicalCoilHeatExchanger":"Double Pipe Heat Exchanger"==t?t="DoublePipeHeatExchanger":"Vertical Condenser"==t&&(t="VerticalCondenser"),localStorage.setItem("Current",t),this.navigateTo(t)}navigateTo(t){this.router.navigate(["/Home","MechanicalOperations",t])}ngOnDestroy(){localStorage.removeItem("Current")}}s.\u0275fac=function(t){return new(t||s)(e.Y36(r.F0),e.Y36(v.ux))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-mechanicaloperations"]],features:[e.TTD],decls:27,vars:3,consts:[[1,"ht-page"],["color","primary",2,"position","sticky","top","0","z-index","10"],["mat-flat-button","","color","primary","type","button","data-bs-toggle","offcanvas","data-bs-target","#Equip","aria-controls","offcanvasWithBackdrop",3,"click"],[1,"lheading"],[1,"example-spacer",2,"flex","1 1 auto"],[1,"row",2,"z-index","-1"],["tabindex","-1","id","Equip","aria-labelledby","offcanvasWithBackdropLabel",1,"offcanvas","offcanvas-start"],[1,"offcanvas-header"],["id","offcanvasWithBackdropLabel",1,"offcanvas-title"],["type","button","data-bs-dismiss","offcanvas","aria-label","Close",1,"btn-close","text-reset"],[1,"offcanvas-body"],[1,"labs"],[4,"ngFor","ngForOf"],[1,"container-fluid",2,"width","90%","margin","0 5%"],[1,"col",2,"padding","2%"],[1,"container-fluid"],[1,"position-fixed","bottom-0","end-0"],["id","GoTO","routerLink","/HeatTransfer"],["mat-fab","","color","primary"],[1,"bi","bi-chevron-up",2,"color","rgba(233, 233, 233, 0.875)","font-size","20px"],[4,"ngIf"],["mat-raised-button","",1,"btn","btn-lab",2,"padding","10px",3,"click"],[2,"margin","30%","width","40%"],["mat-flat-button","","type","button","data-bs-toggle","offcanvas","data-bs-target","#Equip","aria-controls","offcanvasWithBackdrop",3,"click"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"mat-toolbar",1)(2,"button",2),e.NdJ("click",function(){return a.ismenuOn=!0}),e.TgZ(3,"span",3),e._uU(4),e.qZA()(),e._UZ(5,"span",4),e.TgZ(6,"button",2),e.NdJ("click",function(){return a.isTreeOn=!0}),e.TgZ(7,"span",3),e._uU(8,"Heat Transfer"),e.qZA()()(),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"h2",8),e._uU(13,"Equipments"),e.qZA(),e._UZ(14,"button",9),e.qZA(),e.TgZ(15,"div",10)(16,"ul",11),e.YNc(17,C,4,1,"li",12),e.qZA()()(),e.TgZ(18,"div",13),e._UZ(19,"router-outlet"),e.qZA(),e.TgZ(20,"div",14)(21,"div",15)(22,"div",16)(23,"a",17)(24,"button",18),e._UZ(25,"i",19),e.qZA()()()()()()(),e.YNc(26,T,5,0,"div",20)),2&t&&(e.xp6(4),e.Oqu(a.selected),e.xp6(13),e.Q6J("ngForOf",a.equipments),e.xp6(9),e.Q6J("ngIf",null==a.selected||0==a.selected.length))},dependencies:[p.sg,p.O5,r.lC,r.rH,m.lW,m.cs,h.Ye]});class l{}l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-cyclone-separator"]],decls:2,vars:0,template:function(t,a){1&t&&(e.TgZ(0,"p"),e._uU(1,"cyclone-separator works!"),e.qZA())}});const y=[{path:"",component:s,children:[{path:"CycloneSeparator",component:l}]}];class c{}c.\u0275fac=function(t){return new(t||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({imports:[r.Bz.forChild(y),r.Bz]});var Z=o(5206);class i{}i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[p.ez,c,Z.q,h.g0]})}}]);