"use strict";(self.webpackChunkVLab=self.webpackChunkVLab||[]).push([[108],{2108:(E,h,s)=>{s.r(h),s.d(h,{FluidMechanicsExpModule:()=>l});var r=s(6895),d=s(1310),b=s(6285),e=s(4650),U=s(7009),p=s(3683),m=s(4859);function A(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"li",21)(1,"a")(2,"button",22),e.NdJ("click",function(){const S=e.CHM(t).$implicit,_=e.oxw();return _.selected=S,e.KtG(_.selectedExp(_.selected))}),e._uU(3),e.qZA()()()}if(2&o){const t=i.$implicit;e.xp6(3),e.Oqu(t)}}function q(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div")(1,"div",23)(2,"button",24),e.NdJ("click",function(){e.CHM(t);const T=e.oxw();return e.KtG(T.ismenuOn=!0)}),e.TgZ(3,"h1"),e._uU(4,"Select Process"),e.qZA()()()()}}class Z{constructor(i,t){this.router=i,this.snackBar=t,this.m=b.P,this.selected="Annulus Pipes",this.isTreeOn=!1,this.ismenuOn=!1}ngOnInit(){setTimeout(()=>{this.snackBar.open("Currently in Fluid mechanics Stream , Use the menu bar to Navigate to other processes","Ok",{duration:5e3})},2e3),this.selected=localStorage.getItem("Current")?localStorage.getItem("Current")+"":"Shell and Tube Heat Exchanger",this.equipments=["Annulus Pipes","Straight pipes"],this.selectedOperation="Theory"}ngOnChanges(){this.selectedExp(this.selected)}selectedLab(i){i=i.replace(" ",""),this.navigateTo(i)}selectedExp(i){"Annulus Pipes"==i&&(i="AnnulusPipes"),localStorage.setItem("Current",i),this.navigateTo(i)}navigateTo(i){this.router.navigate(["/Home","FluidMechanics",i])}ngOnDestroy(){localStorage.removeItem("Current")}}Z.\u0275fac=function(i){return new(i||Z)(e.Y36(d.F0),e.Y36(U.ux))},Z.\u0275cmp=e.Xpm({type:Z,selectors:[["app-fluid-mechanics-exp"]],features:[e.TTD],decls:27,vars:3,consts:[[1,"ht-page"],["color","primary",2,"position","sticky","top","0","z-index","10"],["mat-flat-button","","color","primary","type","button","data-bs-toggle","offcanvas","data-bs-target","#Equip","aria-controls","offcanvasWithBackdrop",3,"click"],[1,"lheading"],[1,"example-spacer",2,"flex","1 1 auto"],[1,"row",2,"z-index","-1"],["tabindex","-1","id","Equip","aria-labelledby","offcanvasWithBackdropLabel",1,"offcanvas","offcanvas-start"],[1,"offcanvas-header"],["id","offcanvasWithBackdropLabel",1,"offcanvas-title"],["type","button","data-bs-dismiss","offcanvas","aria-label","Close",1,"btn-close","text-reset"],[1,"offcanvas-body"],[1,"labs"],["class","sub",4,"ngFor","ngForOf"],[1,"container-fluid",2,"width","90%","margin","0 5%"],[1,"col",2,"padding","2%"],[1,"container-fluid"],[1,"position-fixed","bottom-0","end-0"],["id","GoTO","routerLink","/HeatTransfer"],["mat-fab","","color","primary"],[1,"bi","bi-chevron-up",2,"color","rgba(233, 233, 233, 0.875)","font-size","20px"],[4,"ngIf"],[1,"sub"],["mat-raised-button","",1,"btn","btn-lab",2,"padding","10px",3,"click"],[2,"margin","30%","width","40%"],["mat-flat-button","","type","button","data-bs-toggle","offcanvas","data-bs-target","#Equip","aria-controls","offcanvasWithBackdrop",3,"click"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"mat-toolbar",1)(2,"button",2),e.NdJ("click",function(){return t.ismenuOn=!0}),e.TgZ(3,"span",3),e._uU(4),e.qZA()(),e._UZ(5,"span",4),e.TgZ(6,"button",2),e.NdJ("click",function(){return t.isTreeOn=!0}),e.TgZ(7,"span",3),e._uU(8,"Heat Transfer"),e.qZA()()(),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"h2",8),e._uU(13,"Equipments"),e.qZA(),e._UZ(14,"button",9),e.qZA(),e.TgZ(15,"div",10)(16,"ul",11),e.YNc(17,A,4,1,"li",12),e.qZA()()(),e.TgZ(18,"div",13),e._UZ(19,"router-outlet"),e.qZA(),e.TgZ(20,"div",14)(21,"div",15)(22,"div",16)(23,"a",17)(24,"button",18),e._UZ(25,"i",19),e.qZA()()()()()()(),e.YNc(26,q,5,0,"div",20)),2&i&&(e.xp6(4),e.Oqu(t.selected),e.xp6(13),e.Q6J("ngForOf",t.equipments),e.xp6(9),e.Q6J("ngIf",null==t.selected||0==t.selected.length))},dependencies:[r.sg,r.O5,d.lC,d.rH,p.Ye,m.lW,m.cs]});var u=s(4006),f=s(5465);class v{constructor(){this.isCalculated=!1,this.isFeasible=!1}}var c=s(3848);function C(o,i){1&o&&(e.TgZ(0,"div",57),e._uU(1,"All fields are required."),e.qZA())}function N(o,i){1&o&&(e.TgZ(0,"div",58),e._uU(1,"Ready to calculate"),e.qZA())}function F(o,i){if(1&o&&(e.TgZ(0,"div")(1,"table",59)(2,"thead")(3,"tr")(4,"th"),e._uU(5,"Property"),e.qZA(),e.TgZ(6,"th"),e._uU(7,"Value"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Units"),e.qZA()()(),e.TgZ(10,"tbody")(11,"tr")(12,"td"),e._uU(13," Mass flowrate of the Fluid "),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17,"\xb0C "),e.qZA()(),e.TgZ(18,"tr")(19,"td"),e._uU(20,"Fluid velocity"),e.qZA(),e.TgZ(21,"td"),e._uU(22),e.qZA(),e.TgZ(23,"td"),e._uU(24,"m/s"),e.qZA()(),e.TgZ(25,"tr")(26,"td"),e._uU(27,"Reynolds Number"),e.qZA(),e.TgZ(28,"td"),e._uU(29),e.qZA(),e.TgZ(30,"td"),e._uU(31,"m/s"),e.qZA()(),e.TgZ(32,"tr")(33,"td"),e._uU(34,"Shell side Pressure Drop"),e.qZA(),e.TgZ(35,"td"),e._uU(36),e.qZA(),e.TgZ(37,"td"),e._uU(38,"Psi"),e.qZA()()()()()),2&o){const t=e.oxw();e.xp6(15),e.Oqu(t.s.QPipe),e.xp6(7),e.Oqu(t.s.Velocity),e.xp6(7),e.Oqu(t.s.NRe),e.xp6(7),e.Oqu(t.s.PDrop)}}function x(o,i){1&o&&(e.TgZ(0,"div")(1,"div",60)(2,"h1"),e._UZ(3,"i",61),e._uU(4," Cannot generate results"),e.qZA(),e.TgZ(5,"h3"),e._uU(6,"Simulate to get results"),e.qZA()()())}function y(o,i){1&o&&(e.TgZ(0,"div",57),e._uU(1,"All fields are required."),e.qZA())}function w(o,i){1&o&&(e.TgZ(0,"div",58),e._uU(1,"Ready to calculate"),e.qZA())}function P(o,i){1&o&&(e.TgZ(0,"div")(1,"h2"),e._uU(2,"No Data To display !"),e.qZA()())}function I(o,i){if(1&o&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA()()),2&o){const t=i.$implicit;e.xp6(2),e.hij(" ",t.Mh," "),e.xp6(2),e.hij(" ",t.Mc," "),e.xp6(2),e.hij(" ",t.Thi," "),e.xp6(2),e.hij(" ",t.Tci," "),e.xp6(2),e.hij(" ",t.Tho," "),e.xp6(2),e.hij(" ",t.Tco," ")}}function O(o,i){if(1&o&&(e.TgZ(0,"div")(1,"h2",62),e._UZ(2,"i",63),e._uU(3," Logs "),e.qZA(),e.TgZ(4,"table",64)(5,"thead")(6,"tr")(7,"th"),e._uU(8,"Mass Flowrate -methanol"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Mass Flowrate -water"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Hot Fluid inlet Temperature "),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Cold Fluid inlet Temperature "),e.qZA(),e.TgZ(15,"th"),e._uU(16,"Hot Fluid outlet Temperature "),e.qZA(),e.TgZ(17,"th"),e._uU(18,"Cold Fluid outlet Temperature "),e.qZA()()(),e.TgZ(19,"tbody"),e.YNc(20,I,13,6,"tr",65),e.qZA()()()),2&o){const t=e.oxw();e.xp6(20),e.Q6J("ngForOf",t.logs)}}function H(o,i){1&o&&e._UZ(0,"div")}class g{constructor(i){this._snackBar=i,this.log=[{}],this.logs=[],this.s=new v,this.ip=new u.cw({Fluid:new u.NI("Water",u.kI.required),Waterflowrate:new u.NI(50,u.kI.required),WaterFRUnit:new u.NI("m3/hr",u.kI.required),L:new u.NI(5,u.kI.required),Do:new u.NI(.1,u.kI.required),Di:new u.NI(.05,u.kI.required),Pi:new u.NI(4,u.kI.required),Po:new u.NI(3,u.kI.required),HeatTransferCoeffAssumed:new u.NI(500,u.kI.required),OilFlowRate:new u.NI(27.7,u.kI.required),OilFRUnit:new u.NI("Kg/hr",u.kI.required),Tci:new u.NI(25,u.kI.required),Tco:new u.NI(40,u.kI.required),Passes:new u.NI("2",u.kI.required),ShellFluid:new u.NI("Methanol",u.kI.required)})}openSnackBar(i,t){this._snackBar.open(i,t)}ngOnInit(){this.selected="Shell and Tube Heat Exchanger",this.isClickLabOn=!0}initialization(){this.s.isFeasible=!1,this.water=new f.B(30),this.s.Density=this.water.density,this.s.Cond=this.water.k,this.s.Cp=this.water.cp,this.s.Visc=this.water.viscosity,this.s.Flowrate=Number(this.ip.value.Waterflowrate)}roundOff(){this.s.Velocity=Number(this.s.Velocity.toFixed(5)),this.s.PDrop=Number(this.s.PDrop.toFixed(3))}ShellSideCalc(){console.log("calculating"),this.initialization();const i=Number(this.ip.value.Di),t=Number(this.ip.value.Do);var n=Math.PI*(Math.pow(t,2)-Math.pow(i,2))/4;this.s.QPipe=n*this.s.Flowrate/3600,this.s.Velocity=this.s.QPipe/n,this.s.Dh=4*n/(Math.PI*(.1+.05)),this.s.NRe=this.s.Density*this.s.Velocity*this.s.Dh/this.s.Visc,this.s.f=.0278,this.s.PDrop=this.s.f*Number(this.ip.value.L)*this.s.Density*Math.pow(this.s.Velocity,2)/(2*this.s.Dh),this.s.PDrop=14.69*this.s.PDrop/101325,this.s.isFeasible=!0,this.s.isFeasible=!0,this.log.Mh=this.ip.value.OilFlowRate,this.log.Mc=this.ip.value.Waterflowrate,this.log.Thi=this.ip.value.Pi,this.log.Tho=this.s.Tho,this.log.Tci=this.ip.value.Tci,this.log.Tco=this.s.Tco,this.logs.push(this.log),this.log=[],this.roundOff(),console.log(this.logs),console.log(this.s),this.openSnackBar("Results have been calculated !! You can navigate to Results ","Ok"),this.s.isCalculated=!0}getLmtd(){const i=Number(this.ip.value.Po)-Number(this.ip.value.Tci),t=Number(this.ip.value.Pi)-Number(this.ip.value.Tco);return this.s.lmtd=(t-i)/Math.log(t/i),this.s.lmtd=Number(this.s.lmtd.toFixed(3)),this.s.lmtd}onSubmit(){this.ip.invalid?this.ip.markAllAsTouched():Number(this.ip.value.Po)>=Number(this.ip.value.Pi)?(alert("Cold Fluid inlet temperature should not be higher than Hot Fluid Temperature"),this.s.isValid=!1):(this.s.isValid=!0,this.ShellSideCalc())}}g.\u0275fac=function(i){return new(i||g)(e.Y36(U.ux))},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-annulus-pipe"]],inputs:{selected:"selected",selectedOperation:"selectedOperation"},decls:405,vars:17,consts:[["label","Theory"],[1,"Theory"],["label","Formulae","color","Accent"],[1,"formulae",2,"margin-top","5%","font-size","large","letter-spacing","2.5"],[1,"row"],[1,"col-8"],[2,"font-weight","600"],[2,"font-weight","600","color","rgba(52, 52, 52, 0.855)"],[2,"font-weight","600","color","rgba(52, 52, 52, 0.856)"],[1,"col-4"],["label","Simulation"],[2,"margin","5%","width","90%","overflow-x","autos"],[3,"formGroup"],[1,"table","table-hover","table-striped","mat-elevation-z8"],["formControlName","Fluid"],["value","Water"],["type","number","formControlName","Do"],["type","number","formControlName","Di"],["type","number","formControlName","L"],["type","number","formControlName","Waterflowrate"],["formControlName","WaterFRUnit"],["value","m3/hr"],["type","number","formControlName","Pi"],["type","number","formControlName","Po"],["type","submit",1,"btn","btn-success",3,"disabled","click"],["style","color: red",4,"ngIf"],["style","color: rgb(4, 255, 0)",4,"ngIf"],["label","Result"],[4,"ngIf"],["label","Virtual Experiment"],["mat-table","",1,"table","table-bordered","table-striped","mat-elevation-z8"],["type","number","formControlName","OilFlowRate"],["formControlName","OilFRUnit"],["value","Kg/sec"],["value","Kg/hr"],["value","Kg/min"],["value","l/hr","disabled",""],["value","l/min","disabled",""],["value","l/sec","disabled",""],["type","number","formControlName","Thi"],["type","number","formControlName","Tci"],["type","number","formControlName","Tco"],["type","number","formControlName","Tho"],[1,"image"],[1,"Tco",2,"position","absolute","top","5","left","3"],[1,"Tho"],["src","https://www.researchgate.net/publication/50384285/figure/fig1/AS:650799378100225@1532174071339/Experimental-Setup-of-Heat-Exchanger.png","alt","Shell And TUbe Heat Exchanger",1,"rounded","mx-auto","d-block",2,"height","30%","width","30%"],["tabindex","-1","role","dialog","aria-labelledby","errorModalLabel","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],["id","errorModalLabel",1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary"],[2,"color","red"],[2,"color","rgb(4, 255, 0)"],[1,"table","table-hover","table-striped","table-striped","mat-elevation-z8"],[1,"alert-warning",2,"padding","20px","margin","5% 20%"],[1,"bi","bi-exclamation-circle"],[2,"text-align","center"],[1,"bi","bi-card-list"],["mat-table","",1,"table","table-bordered",2,"margin","10px"],[4,"ngFor","ngForOf"]],template:function(i,t){1&i&&(e.TgZ(0,"mat-tab-group")(1,"mat-tab",0),e._UZ(2,"br"),e.TgZ(3,"h2"),e._uU(4,"Objective"),e.qZA(),e.TgZ(5,"p",1),e._uU(6," To determine the Pressure drop of the given Annulus pipes "),e.qZA(),e._UZ(7,"br"),e.TgZ(8,"h2"),e._uU(9,"Theory "),e.qZA(),e.TgZ(10,"p",1),e._UZ(11,"br")(12,"br")(13,"br"),e.qZA()(),e.TgZ(14,"mat-tab",2)(15,"div",3)(16,"div",4)(17,"div",5)(18,"h4",6),e._uU(19," Overall energy balance :"),e.qZA(),e.TgZ(20,"h4",6),e._uU(21," Overall Heat Transfer Coefficient :"),e.qZA(),e.TgZ(22,"p"),e._uU(23," 1/U = (1/H"),e.TgZ(24,"sub"),e._uU(25,"o"),e.qZA(),e._uU(26,") + (1/H"),e.TgZ(27,"sub"),e._uU(28,"od"),e.qZA(),e._uU(29,") +((d"),e.TgZ(30,"sub"),e._uU(31,"o"),e.qZA(),e._uU(32,"/d"),e.TgZ(33,"sub"),e._uU(34,"i"),e.qZA(),e._uU(35,") X 1/H"),e.TgZ(36,"sub"),e._uU(37,"i"),e.qZA(),e._uU(38,") +((d"),e.TgZ(39,"sub"),e._uU(40,"o"),e.qZA(),e._uU(41,"/d"),e.TgZ(42,"sub"),e._uU(43,"i"),e.qZA(),e._uU(44,") X 1/H"),e.TgZ(45,"sub"),e._uU(46,"id"),e.qZA(),e._uU(47,") + d"),e.TgZ(48,"sub"),e._uU(49,"o"),e.qZA(),e._uU(50,"(ln(d"),e.TgZ(51,"sub"),e._uU(52,"o"),e.qZA(),e._uU(53,"/d"),e.TgZ(54,"sub"),e._uU(55,"i"),e.qZA(),e._uU(56,"))/2K"),e.TgZ(57,"sub"),e._uU(58,"w"),e.qZA()(),e.TgZ(59,"h5",7),e._uU(60,"Tube Side Heat Transfer Coefficient "),e.qZA(),e.TgZ(61,"p"),e._uU(62,"H"),e.TgZ(63,"sub"),e._uU(64,"i"),e.qZA(),e._uU(65," = J"),e.TgZ(66,"sub"),e._uU(67,"h"),e.qZA(),e._uU(68," N"),e.TgZ(69,"sub"),e._uU(70,"RE"),e.qZA(),e._uU(71," N"),e.TgZ(72,"sub"),e._uU(73,"Pr"),e.qZA(),e.TgZ(74,"sup"),e._uU(75,"0.33"),e.qZA(),e._uU(76," (\u03bc/\u03bcw)"),e.TgZ(77,"sup"),e._uU(78,"0.14"),e.qZA(),e._uU(79," (K"),e.TgZ(80,"sub"),e._uU(81," f"),e.qZA(),e._uU(82,"d"),e.TgZ(83,"sub"),e._uU(84,"i"),e.qZA(),e._uU(85,") "),e.qZA(),e.TgZ(86,"h5",8),e._uU(87,"Shell Side Heat Transfer Coefficient "),e.qZA(),e.TgZ(88,"p"),e._uU(89,"H"),e.TgZ(90,"sub"),e._uU(91,"o"),e.qZA(),e._uU(92," = J"),e.TgZ(93,"sub"),e._uU(94,"f"),e.qZA(),e._uU(95," N"),e.TgZ(96,"sub"),e._uU(97,"RE"),e.qZA(),e._uU(98," N"),e.TgZ(99,"sub"),e._uU(100,"Pr"),e.qZA(),e.TgZ(101,"sup"),e._uU(102,"0.33"),e.qZA(),e._uU(103," (\u03bc/\u03bcw)"),e.TgZ(104,"sup"),e._uU(105,"0.14"),e.qZA(),e._uU(106," (K"),e.TgZ(107,"sub"),e._uU(108," f"),e.qZA(),e._uU(109,"d"),e.TgZ(110,"sub"),e._uU(111,"e"),e.qZA(),e._uU(112,") "),e.qZA()(),e.TgZ(113,"div",9)(114,"p")(115,"b"),e._uU(116,"Q"),e.TgZ(117,"sub"),e._uU(118,"h"),e.qZA()(),e._uU(119," - Amount of Heat Transfer(Hot fluid side)"),e._UZ(120,"br"),e.TgZ(121,"b"),e._uU(122,"Q "),e.TgZ(123,"sub"),e._uU(124,"c"),e.qZA()(),e._uU(125," - Amount of Heat Transfer(Cold fluid side)"),e._UZ(126,"br"),e.TgZ(127,"b"),e._uU(128,"T"),e.TgZ(129,"sub"),e._uU(130,"hin"),e.qZA()(),e._uU(131," - Hot Fluid inlet temperature "),e._UZ(132,"br"),e.TgZ(133,"b"),e._uU(134,"T"),e.TgZ(135,"sub"),e._uU(136,"hout"),e.qZA()(),e._uU(137," - Hot Fluid outlet temperature "),e._UZ(138,"br"),e.TgZ(139,"b"),e._uU(140,"T"),e.TgZ(141,"sub"),e._uU(142,"cin"),e.qZA()(),e._uU(143," - Cold Fluid inlet temperature "),e._UZ(144,"br"),e.TgZ(145,"b"),e._uU(146,"T"),e.TgZ(147,"sub"),e._uU(148,"cout"),e.qZA()(),e._uU(149," - Cold Fluid outlet temperature "),e._UZ(150,"br"),e.TgZ(151,"b"),e._uU(152,"\u0394T"),e.TgZ(153,"sub"),e._uU(154,"LMTD"),e.qZA()(),e._uU(155,"- Log mean temperature difference"),e._UZ(156,"br"),e.TgZ(157,"b"),e._uU(158,"A"),e.qZA(),e._uU(159," - Heat Transfer Area "),e._UZ(160,"br"),e.TgZ(161,"b"),e._uU(162,"U"),e.qZA(),e._uU(163," - Overall Side Heat transfer Coefficient "),e._UZ(164,"br"),e.TgZ(165,"b"),e._uU(166,"H"),e.TgZ(167,"sub"),e._uU(168,"i"),e.qZA()(),e._uU(169," - Tube Side Heat transfer Coefficient "),e._UZ(170,"br"),e.TgZ(171,"b"),e._uU(172,"H"),e.TgZ(173,"sub"),e._uU(174,"id"),e.qZA()(),e._uU(175," - Tube side Heat Transfer(fouling)"),e._UZ(176,"br"),e.TgZ(177,"b"),e._uU(178,"H"),e.TgZ(179,"sub"),e._uU(180,"o"),e.qZA()(),e._uU(181," - Shell Side Heat transfer Coefficient "),e._UZ(182,"br"),e.TgZ(183,"b"),e._uU(184,"H"),e.TgZ(185,"sub"),e._uU(186,"od"),e.qZA()(),e._uU(187," - Sell side Heat Transfer(fouling)"),e._UZ(188,"br"),e.TgZ(189,"b"),e._uU(190,"N"),e.TgZ(191,"sub"),e._uU(192,"Re"),e.qZA()(),e._uU(193," - Reynold's Number"),e._UZ(194,"br"),e.TgZ(195,"b"),e._uU(196,"N"),e.TgZ(197,"sub"),e._uU(198,"Pr"),e.qZA()(),e._uU(199," - Prandtl's Number"),e._UZ(200,"br"),e.qZA()()()()(),e.TgZ(201,"mat-tab",10)(202,"div",11)(203,"form",12)(204,"table",13)(205,"thead")(206,"tr")(207,"th"),e._uU(208,"Property"),e.qZA(),e.TgZ(209,"th"),e._uU(210,"Value"),e.qZA(),e.TgZ(211,"th"),e._uU(212,"Units"),e.qZA()()(),e.TgZ(213,"tbody")(214,"tr")(215,"td"),e._uU(216,"Fluid used"),e.qZA(),e.TgZ(217,"td")(218,"select",14)(219,"option",15),e._uU(220,"Water"),e.qZA()()(),e.TgZ(221,"td"),e._uU(222," NA"),e.qZA()(),e.TgZ(223,"tr")(224,"td"),e._uU(225," Outside Pipe's diameter"),e.qZA(),e.TgZ(226,"td"),e._UZ(227,"input",16),e.qZA(),e.TgZ(228,"td"),e._uU(229," m "),e.qZA()(),e.TgZ(230,"tr")(231,"td"),e._uU(232," Inside Pipe's diameter"),e.qZA(),e.TgZ(233,"td"),e._UZ(234,"input",17),e.qZA(),e.TgZ(235,"td"),e._uU(236," m "),e.qZA()(),e.TgZ(237,"tr")(238,"td"),e._uU(239,"Pipe's Length"),e.qZA(),e.TgZ(240,"td"),e._UZ(241,"input",18),e.qZA(),e.TgZ(242,"td"),e._uU(243," m "),e.qZA()(),e.TgZ(244,"tr")(245,"td"),e._uU(246,"Fluid flowrate"),e.qZA(),e.TgZ(247,"td"),e._UZ(248,"input",19),e.qZA(),e.TgZ(249,"td")(250,"select",20)(251,"option",21),e._uU(252,"m"),e.TgZ(253,"sup"),e._uU(254,"3"),e.qZA(),e._uU(255,"/sec"),e.qZA()()()(),e.TgZ(256,"tr")(257,"td"),e._uU(258,"Inlet Pressure"),e.qZA(),e.TgZ(259,"td"),e._UZ(260,"input",22),e.qZA(),e.TgZ(261,"td"),e._uU(262,"bar"),e.qZA()(),e.TgZ(263,"tr")(264,"td"),e._uU(265,"Outlet Pressure/td> "),e.qZA(),e.TgZ(266,"td"),e._UZ(267,"input",23),e.qZA(),e.TgZ(268,"td"),e._uU(269,"bar"),e.qZA()()()(),e.TgZ(270,"button",24),e.NdJ("click",function(){return t.onSubmit()}),e._uU(271,"submit"),e.qZA(),e.YNc(272,C,2,0,"div",25),e.YNc(273,N,2,0,"div",26),e.qZA()()(),e.TgZ(274,"mat-tab",27),e.YNc(275,F,39,4,"div",28),e.YNc(276,x,7,0,"div",28),e.qZA(),e.TgZ(277,"mat-tab",29)(278,"form",12)(279,"table",30)(280,"thead")(281,"tr")(282,"th"),e._uU(283,"Property"),e.qZA(),e.TgZ(284,"th"),e._uU(285,"Value"),e.qZA(),e.TgZ(286,"th"),e._uU(287,"Units"),e.qZA()()(),e.TgZ(288,"tbody")(289,"tr")(290,"td"),e._uU(291," Mass Flowrate (Methanol)"),e.qZA(),e.TgZ(292,"td"),e._UZ(293,"input",31),e.qZA(),e.TgZ(294,"td")(295,"select",32)(296,"option",33),e._uU(297,"Kg/sec"),e.qZA(),e.TgZ(298,"option",34),e._uU(299,"Kg/Hrs"),e.qZA(),e.TgZ(300,"option",35),e._uU(301,"Kg/min"),e.qZA(),e.TgZ(302,"option",36),e._uU(303,"l/hr"),e.qZA(),e.TgZ(304,"option",37),e._uU(305,"l/hr"),e.qZA(),e.TgZ(306,"option",38),e._uU(307,"l/hr"),e.qZA()()()(),e.TgZ(308,"tr")(309,"td"),e._uU(310,"Mass Flowrate (Water)"),e.qZA(),e.TgZ(311,"td"),e._UZ(312,"input",19),e.qZA(),e.TgZ(313,"td")(314,"select",20)(315,"option",33),e._uU(316,"Kg/sec"),e.qZA(),e.TgZ(317,"option",34),e._uU(318,"Kg/hr"),e.qZA(),e.TgZ(319,"option",35),e._uU(320,"Kg/min"),e.qZA(),e.TgZ(321,"option",36),e._uU(322,"l/hr"),e.qZA(),e.TgZ(323,"option",37),e._uU(324,"l/hr"),e.qZA(),e.TgZ(325,"option",38),e._uU(326,"l/hr"),e.qZA()()()(),e.TgZ(327,"tr")(328,"td"),e._uU(329,"HotFluid Inlet temperature"),e.qZA(),e.TgZ(330,"td"),e._UZ(331,"input",39),e.qZA(),e.TgZ(332,"td"),e._uU(333,"\xb0C"),e.qZA()(),e.TgZ(334,"tr")(335,"td"),e._uU(336,"Cold fluid inlet temperature"),e.qZA(),e.TgZ(337,"td"),e._UZ(338,"input",40),e.qZA(),e.TgZ(339,"td"),e._uU(340,"\xb0C"),e.qZA()(),e.TgZ(341,"tr")(342,"td"),e._uU(343," Obtained Overall Heat Temperature Coefficient - U"),e.qZA(),e.TgZ(344,"td"),e._uU(345),e.qZA(),e.TgZ(346,"td"),e._uU(347,"W/m"),e.TgZ(348,"sup"),e._uU(349,"2"),e.qZA(),e._uU(350," \xb0C"),e.qZA()(),e.TgZ(351,"tr")(352,"td"),e._uU(353,"Cold fluid Outlet temperature (Desired)"),e.qZA(),e.TgZ(354,"td"),e._UZ(355,"input",41),e.qZA(),e.TgZ(356,"td"),e._uU(357,"\xb0C"),e.qZA()(),e.TgZ(358,"tr")(359,"td"),e._uU(360,"Hot fluid Outlet temperature (Desired)"),e.qZA(),e.TgZ(361,"td"),e._UZ(362,"input",42),e.qZA(),e.TgZ(363,"td"),e._uU(364,"\xb0C"),e.qZA()(),e.TgZ(365,"tr")(366,"td"),e._uU(367,"Hot Fluid Outlet temperature (Actual)"),e.qZA(),e.TgZ(368,"td"),e._uU(369),e.qZA(),e.TgZ(370,"td"),e._uU(371," \xb0C"),e.qZA()(),e.TgZ(372,"tr")(373,"td"),e._uU(374," Cold Fluid Outlet temperature (Actual)"),e.qZA(),e.TgZ(375,"td"),e._uU(376),e.qZA(),e.TgZ(377,"td"),e._uU(378," \xb0C"),e.qZA()()()(),e.TgZ(379,"button",24),e.NdJ("click",function(){return t.onSubmit()}),e._uU(380,"submit"),e.qZA(),e.YNc(381,y,2,0,"div",25),e.YNc(382,w,2,0,"div",26),e.qZA(),e.TgZ(383,"div",43)(384,"div",44),e._uU(385),e.qZA(),e.TgZ(386,"div",45),e._uU(387),e.qZA(),e._UZ(388,"img",46),e.qZA(),e.YNc(389,P,3,0,"div",28),e.YNc(390,O,21,1,"div",28),e.qZA()(),e.TgZ(391,"div",47)(392,"div",48)(393,"div",49)(394,"div",50)(395,"h5",51),e._uU(396,"Error"),e.qZA(),e.TgZ(397,"button",52)(398,"span",53),e._uU(399,"\xd7"),e.qZA()()(),e.TgZ(400,"div",54),e.YNc(401,H,1,0,"div",28),e.qZA(),e.TgZ(402,"div",55)(403,"button",56),e._uU(404,"Close"),e.qZA()()()()()),2&i&&(e.xp6(203),e.Q6J("formGroup",t.ip),e.xp6(67),e.Q6J("disabled",!t.ip.valid),e.xp6(2),e.Q6J("ngIf",t.ip.invalid&&t.ip.dirty),e.xp6(1),e.Q6J("ngIf",t.ip.valid&&!t.s.isCalculated),e.xp6(2),e.Q6J("ngIf",t.s.isCalculated),e.xp6(1),e.Q6J("ngIf",!t.s.isCalculated),e.xp6(2),e.Q6J("formGroup",t.ip),e.xp6(67),e.Oqu(t.s.OverallHTCoeff),e.xp6(24),e.Oqu(t.s.Tho),e.xp6(7),e.Oqu(t.s.Tco),e.xp6(3),e.Q6J("disabled",!t.ip.valid),e.xp6(2),e.Q6J("ngIf",t.ip.invalid&&t.ip.dirty),e.xp6(1),e.Q6J("ngIf",t.ip.valid&&!t.s.isCalculated),e.xp6(3),e.Oqu(t.s.Tco),e.xp6(2),e.Oqu(t.s.Tho),e.xp6(2),e.Q6J("ngIf",0==t.logs.length),e.xp6(1),e.Q6J("ngIf",0!=t.logs.length))},dependencies:[r.sg,r.O5,u._Y,u.YN,u.Kr,u.Fj,u.wV,u.EJ,u.JJ,u.JL,u.sg,u.u,c.uX,c.SP]});const k=[{path:"",component:Z,children:[{path:"AnnulusPipes",component:g}]}];class a{}a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[d.Bz.forChild(k),d.Bz]});var M=s(4028);class l{}l.\u0275fac=function(i){return new(i||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[r.ez,a,p.g0,M.q,p.g0,u.u5,u.UX,c.Nh]})}}]);