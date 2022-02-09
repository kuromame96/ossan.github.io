Tonyu.klass.define({
  fullName: 'user.ActPattern',
  shortName: 'ActPattern',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_ActPattern_main() {
        "use strict";
        var _this=this;
        
      },
      fiber$main :function _trc_ActPattern_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.retVal=_this;return;
      },
      actJump :function _trc_ActPattern_actJump(act) {
        "use strict";
        var _this=this;
        
        if (act.y<=act.firstY&&act.onGround) {
          act.vy=- act.jumpSp;
          act.y+=act.vy;
          act.onGround=false;
          Tonyu.globals.$sound.playSE(Tonyu.globals.$se_burp1);
          
        }
      },
      fiber$actJump :function _trc_ActPattern_f_actJump(_thread,act) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        if (act.y<=act.firstY&&act.onGround) {
          act.vy=- act.jumpSp;
          act.y+=act.vy;
          act.onGround=false;
          Tonyu.globals.$sound.playSE(Tonyu.globals.$se_burp1);
          
        }
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"actJump":{"nowait":false}},"fields":{}}
});
Tonyu.klass.define({
  fullName: 'user.AttractionMotion',
  shortName: 'AttractionMotion',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_AttractionMotion_main() {
        "use strict";
        var _this=this;
        
        _this.sp;
      },
      fiber$main :function _trc_AttractionMotion_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.sp;
        
        _thread.retVal=_this;return;
      },
      app :function _trc_AttractionMotion_app(base,target) {
        "use strict";
        var _this=this;
        
        if (base.x<target.x) {
          base.x+=_this.sp;
        }
        if (base.x>target.x) {
          base.x-=_this.sp;
        }
        if (base.y<target.y) {
          base.y+=_this.sp;
        }
        if (base.y>target.y) {
          base.y-=_this.sp;
        }
      },
      fiber$app :function _trc_AttractionMotion_f_app(_thread,base,target) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        if (base.x<target.x) {
          base.x+=_this.sp;
        }
        if (base.x>target.x) {
          base.x-=_this.sp;
        }
        if (base.y<target.y) {
          base.y+=_this.sp;
        }
        if (base.y>target.y) {
          base.y-=_this.sp;
        }
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"app":{"nowait":false}},"fields":{"sp":{}}}
});
Tonyu.klass.define({
  fullName: 'user.BGBase',
  shortName: 'BGBase',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_BGBase_main() {
        "use strict";
        var _this=this;
        
        _this.x=Tonyu.globals.$W*0.5;
        _this.y=Tonyu.globals.$H*0.5;
        _this.BGImg;
        _this.p=_this.BGImg+0;
        _this.frame=0;
        _this.imgNo=0;
        _this.zOrder=10;
        while (true) {
          Tonyu.checkLoop();
          _this.frame++;
          if (! (_this.frame%6)) {
            _this.imgNo++;
          }
          _this.p=_this.BGImg+_this.imgNo%3;
          _this.update();
          
        }
      },
      fiber$main :function _trc_BGBase_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.x=Tonyu.globals.$W*0.5;
        _this.y=Tonyu.globals.$H*0.5;
        _this.BGImg;
        _this.p=_this.BGImg+0;
        _this.frame=0;
        _this.imgNo=0;
        _this.zOrder=10;
        
        _thread.enter(function _trc_BGBase_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              _this.frame++;
              if (! (_this.frame%6)) {
                _this.imgNo++;
              }
              _this.p=_this.BGImg+_this.imgNo%3;
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"BGImg":{},"frame":{},"imgNo":{}}}
});
Tonyu.klass.define({
  fullName: 'user.BGBase4',
  shortName: 'BGBase4',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_BGBase4_main() {
        "use strict";
        var _this=this;
        
        _this.x=Tonyu.globals.$W*0.5;
        _this.y=Tonyu.globals.$H*0.5;
        _this.BGImg;
        _this.p=_this.BGImg+0;
        _this.frame=0;
        _this.imgNo=0;
        _this.zOrder=10;
        while (true) {
          Tonyu.checkLoop();
          _this.frame++;
          if (! (_this.frame%6)) {
            _this.imgNo++;
          }
          _this.p=_this.BGImg+_this.imgNo%4;
          _this.update();
          
        }
      },
      fiber$main :function _trc_BGBase4_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.x=Tonyu.globals.$W*0.5;
        _this.y=Tonyu.globals.$H*0.5;
        _this.BGImg;
        _this.p=_this.BGImg+0;
        _this.frame=0;
        _this.imgNo=0;
        _this.zOrder=10;
        
        _thread.enter(function _trc_BGBase4_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              _this.frame++;
              if (! (_this.frame%6)) {
                _this.imgNo++;
              }
              _this.p=_this.BGImg+_this.imgNo%4;
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"BGImg":{},"frame":{},"imgNo":{}}}
});
Tonyu.klass.define({
  fullName: 'user.BigFace',
  shortName: 'BigFace',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_BigFace_main() {
        "use strict";
        var _this=this;
        
        _this.img;
        _this.p=_this.img+0;
        _this.frame=0;
        _this.imgNo=0;
        _this.zOrder=10;
        _this.attack=false;
        _this.attackTime=0;
        while (true) {
          Tonyu.checkLoop();
          if (! _this.attack) {
            _this.frame++;
            if (! (_this.frame%6)) {
              _this.imgNo++;
            }
            _this.p=_this.img+_this.imgNo%2;
            _this.attackTime=0;
            
          } else {
            _this.attackUpdate();
            
          }
          _this.update();
          
        }
      },
      fiber$main :function _trc_BigFace_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.img;
        _this.p=_this.img+0;
        _this.frame=0;
        _this.imgNo=0;
        _this.zOrder=10;
        _this.attack=false;
        _this.attackTime=0;
        
        _thread.enter(function _trc_BigFace_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              if (!(! _this.attack)) { __pc=2     ; break; }
              {
                _this.frame++;
                if (! (_this.frame%6)) {
                  _this.imgNo++;
                }
                _this.p=_this.img+_this.imgNo%2;
                _this.attackTime=0;
              }
              __pc=4     ;break;
            case 2     :
              _this.fiber$attackUpdate(_thread);
              __pc=3;return;
            case 3:
              
            case 4     :
              
              _this.fiber$update(_thread);
              __pc=5;return;
            case 5:
              
              __pc=1;break;
            case 6     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      attackUpdate :function _trc_BigFace_attackUpdate() {
        "use strict";
        var _this=this;
        
        _this.attackTime++;
        if (_this.attackTime===1) {
          Tonyu.globals.$sound.playSE(Tonyu.globals.$se_kira,128,0,1.5);
          _this.p=_this.img+2;
          new Tonyu.classes.user.Kira({x: _this.x,y: _this.y});
          
        }
      },
      fiber$attackUpdate :function _trc_BigFace_f_attackUpdate(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.attackTime++;
        if (_this.attackTime===1) {
          Tonyu.globals.$sound.playSE(Tonyu.globals.$se_kira,128,0,1.5);
          _this.p=_this.img+2;
          new Tonyu.classes.user.Kira({x: _this.x,y: _this.y});
          
        }
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"attackUpdate":{"nowait":false}},"fields":{"img":{},"frame":{},"imgNo":{},"attack":{},"attackTime":{}}}
});
Tonyu.klass.define({
  fullName: 'user.BikaBika',
  shortName: 'BikaBika',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_BikaBika_main() {
        "use strict";
        var _this=this;
        
        _this.p=Tonyu.globals.$pat_bikabika;
        _this.scaleX=_this.scrScale;
        _this.rotMotion=new Tonyu.classes.user.RotMotion({firstX: _this.x,firstY: _this.y,sp: 0.001,radius: Tonyu.globals.$W*0.1,angle: 1});
        while (true) {
          Tonyu.checkLoop();
          _this.rotation+=0.001;
          _this.scaleX=_this.rotMotion.next().x*0.005;
          
        }
      },
      fiber$main :function _trc_BikaBika_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.p=Tonyu.globals.$pat_bikabika;
        _this.scaleX=_this.scrScale;
        _this.rotMotion=new Tonyu.classes.user.RotMotion({firstX: _this.x,firstY: _this.y,sp: 0.001,radius: Tonyu.globals.$W*0.1,angle: 1});
        
        _thread.enter(function _trc_BikaBika_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              {
                _this.rotation+=0.001;
                _this.scaleX=_this.rotMotion.next().x*0.005;
              }
              __pc=1;break;
            case 2     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"scrScale":{},"rotMotion":{}}}
});
Tonyu.klass.define({
  fullName: 'user.CrashCheck',
  shortName: 'CrashCheck',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_CrashCheck_main() {
        "use strict";
        var _this=this;
        
      },
      fiber$main :function _trc_CrashCheck_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.retVal=_this;return;
      },
      check :function _trc_CrashCheck_check(baseAct,targetAct) {
        "use strict";
        var _this=this;
        
        _this.result=false;
        if (! baseAct.isDead()) {
          _this.crashAct=baseAct.crashTo(targetAct);
          if (_this.crashAct) {
            _this.result=true;
            _this.crashAct.die();
            
          }
          
        }
        return _this.result;
      },
      fiber$check :function _trc_CrashCheck_f_check(_thread,baseAct,targetAct) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.result=false;
        if (! baseAct.isDead()) {
          _this.crashAct=baseAct.crashTo(targetAct);
          if (_this.crashAct) {
            _this.result=true;
            _this.crashAct.die();
            
          }
          
        }
        _thread.retVal=_this.result;return;
        
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"check":{"nowait":false}},"fields":{"result":{},"crashAct":{}}}
});
Tonyu.klass.define({
  fullName: 'user.FittedGun',
  shortName: 'FittedGun',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_FittedGun_main() {
        "use strict";
        var _this=this;
        
        _this.p=Tonyu.globals.$pat_gun;
        _this.rotation=- 60;
        _this.followTarget;
        _this.scaleX=Tonyu.globals.$scrScale*0.35;
        while (true) {
          Tonyu.checkLoop();
          _this.x=_this.followTarget.x-60;
          _this.y=_this.followTarget.y-110;
          _this.update();
          
        }
      },
      fiber$main :function _trc_FittedGun_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.p=Tonyu.globals.$pat_gun;
        _this.rotation=- 60;
        _this.followTarget;
        _this.scaleX=Tonyu.globals.$scrScale*0.35;
        
        _thread.enter(function _trc_FittedGun_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              _this.x=_this.followTarget.x-60;
              _this.y=_this.followTarget.y-110;
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"followTarget":{}}}
});
Tonyu.klass.define({
  fullName: 'user.FollMotion',
  shortName: 'FollMotion',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_FollMotion_main() {
        "use strict";
        var _this=this;
        
        _this.firstY;
        _this.YHirei=0;
      },
      fiber$main :function _trc_FollMotion_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.firstY;
        _this.YHirei=0;
        
        _thread.retVal=_this;return;
      },
      hirei :function _trc_FollMotion_hirei(a,posX) {
        "use strict";
        var _this=this;
        
        return a*posX*posX;
      },
      fiber$hirei :function _trc_FollMotion_f_hirei(_thread,a,posX) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _thread.retVal=a*posX*posX;return;
        
        
        _thread.retVal=_this;return;
      },
      next :function _trc_FollMotion_next(base) {
        "use strict";
        var _this=this;
        
        if (_this.firstY===undefined) {
          _this.firstY=base.y;
        }
        _this.pos={y: 0};
        _this.YHirei+=Tonyu.globals.$W*0.005;
        _this.pos.y=_this.hirei(0.03,_this.YHirei+- (50))+_this.firstY;
        return _this.pos;
      },
      fiber$next :function _trc_FollMotion_f_next(_thread,base) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        if (_this.firstY===undefined) {
          _this.firstY=base.y;
        }
        _this.pos={y: 0};
        _this.YHirei+=Tonyu.globals.$W*0.005;
        _this.pos.y=_this.hirei(0.03,_this.YHirei+- (50))+_this.firstY;
        _thread.retVal=_this.pos;return;
        
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"hirei":{"nowait":false},"next":{"nowait":false}},"fields":{"firstY":{},"YHirei":{},"pos":{}}}
});
Tonyu.klass.define({
  fullName: 'user.GetRandItem',
  shortName: 'GetRandItem',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_GetRandItem_main() {
        "use strict";
        var _this=this;
        
      },
      fiber$main :function _trc_GetRandItem_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.retVal=_this;return;
      },
      getTops :function _trc_GetRandItem_getTops() {
        "use strict";
        var _this=this;
        
        _this.type=_this.rnd(0,3);
        if (_this.type===0) {
          return Tonyu.globals.$pat_suutu_in;
        }
        if (_this.type===1) {
          return Tonyu.globals.$pat_porosyatu_in;
        }
        if (_this.type===2) {
          return Tonyu.globals.$pat_autaa_in;
        }
      },
      fiber$getTops :function _trc_GetRandItem_f_getTops(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.type=_this.rnd(0,3);
        if (_this.type===0) {
          _thread.retVal=Tonyu.globals.$pat_suutu_in;return;
          
        }
        if (_this.type===1) {
          _thread.retVal=Tonyu.globals.$pat_porosyatu_in;return;
          
        }
        if (_this.type===2) {
          _thread.retVal=Tonyu.globals.$pat_autaa_in;return;
          
        }
        
        _thread.retVal=_this;return;
      },
      getBottoms :function _trc_GetRandItem_getBottoms() {
        "use strict";
        var _this=this;
        
        _this.type=_this.rnd(0,2);
        if (_this.type===0) {
          return Tonyu.globals.$pat_suutu_sita_in;
        }
        if (_this.type===1) {
          return Tonyu.globals.$pat_zubon_in;
        }
      },
      fiber$getBottoms :function _trc_GetRandItem_f_getBottoms(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.type=_this.rnd(0,2);
        if (_this.type===0) {
          _thread.retVal=Tonyu.globals.$pat_suutu_sita_in;return;
          
        }
        if (_this.type===1) {
          _thread.retVal=Tonyu.globals.$pat_zubon_in;return;
          
        }
        
        _thread.retVal=_this;return;
      },
      getHat :function _trc_GetRandItem_getHat() {
        "use strict";
        var _this=this;
        
        _this.type=_this.rnd(0,3);
        if (_this.type===0) {
          return Tonyu.globals.$pat_gurasan_in;
        }
        if (_this.type===1) {
          return Tonyu.globals.$pat_bousi_in;
        }
        if (_this.type===2) {
          return Tonyu.globals.$pat_riizento_in;
        }
      },
      fiber$getHat :function _trc_GetRandItem_f_getHat(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.type=_this.rnd(0,3);
        if (_this.type===0) {
          _thread.retVal=Tonyu.globals.$pat_gurasan_in;return;
          
        }
        if (_this.type===1) {
          _thread.retVal=Tonyu.globals.$pat_bousi_in;return;
          
        }
        if (_this.type===2) {
          _thread.retVal=Tonyu.globals.$pat_riizento_in;return;
          
        }
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"getTops":{"nowait":false},"getBottoms":{"nowait":false},"getHat":{"nowait":false}},"fields":{"type":{}}}
});
Tonyu.klass.define({
  fullName: 'user.HP',
  shortName: 'HP',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_HP_main() {
        "use strict";
        var _this=this;
        
        _this.maxHP;
        _this.act;
        Tonyu.classes.user.HP=_this.maxHP;
        _this.frassingFrame=0;
        _this.frassingFlag=false;
      },
      fiber$main :function _trc_HP_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.maxHP;
        _this.act;
        Tonyu.classes.user.HP=_this.maxHP;
        _this.frassingFrame=0;
        _this.frassingFlag=false;
        
        _thread.retVal=_this;return;
      },
      damage :function _trc_HP_damage(flag,point) {
        "use strict";
        var _this=this;
        
        if (_this.act) {
          if (! _this.act.isDead()) {
            if (_this.frassingFrame>0) {
              _this.frassingFrame++;
              if (! (_this.frassingFrame%2)) {
                _this.frassingFlag=! _this.frassingFlag;
                _this.frassingFlag?_this.act.hide():_this.act.show();
                
              }
              if (_this.frassingFrame>6) {
                _this.frassingFrame=0;
                _this.act.show();
                
              }
              ;
              
              
            }
            
          }
          if (flag) {
            _this.frassingFrame=1;
            Tonyu.globals.$sound.playSE(Tonyu.globals.$se_coolguydamage);
            Tonyu.globals.$sound.playSE(Tonyu.globals.$se_doko);
            if (point<0&&Tonyu.classes.user.HP>=_this.maxHP) {
              Tonyu.classes.user.HP=_this.maxHP;
              
            } else {
              Tonyu.classes.user.HP-=point;
              
            }
            if (Tonyu.classes.user.HP<=0) {
              _this.act.die();
            }
            
          }
          
        }
        return Tonyu.classes.user.HP;
      },
      fiber$damage :function _trc_HP_f_damage(_thread,flag,point) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        if (_this.act) {
          if (! _this.act.isDead()) {
            if (_this.frassingFrame>0) {
              _this.frassingFrame++;
              if (! (_this.frassingFrame%2)) {
                _this.frassingFlag=! _this.frassingFlag;
                _this.frassingFlag?_this.act.hide():_this.act.show();
                
              }
              if (_this.frassingFrame>6) {
                _this.frassingFrame=0;
                _this.act.show();
                
              }
              ;
              
              
            }
            
          }
          if (flag) {
            _this.frassingFrame=1;
            Tonyu.globals.$sound.playSE(Tonyu.globals.$se_coolguydamage);
            Tonyu.globals.$sound.playSE(Tonyu.globals.$se_doko);
            if (point<0&&Tonyu.classes.user.HP>=_this.maxHP) {
              Tonyu.classes.user.HP=_this.maxHP;
              
            } else {
              Tonyu.classes.user.HP-=point;
              
            }
            if (Tonyu.classes.user.HP<=0) {
              _this.act.die();
            }
            
          }
          
        }
        _thread.retVal=Tonyu.classes.user.HP;return;
        
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"damage":{"nowait":false}},"fields":{"maxHP":{},"act":{},"frassingFrame":{},"frassingFlag":{}}}
});
Tonyu.klass.define({
  fullName: 'user.HomingRotItem',
  shortName: 'HomingRotItem',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_HomingRotItem_main() {
        "use strict";
        var _this=this;
        
        _this.target;
        _this.firstPos;
        _this.baseItemScale;
        _this.rotItemScale;
        _this.baseItemType;
        _this.rotItmeType;
        _this.angle;
        _this.radius;
        _this.followActorOut=false;
        _this.followActor=new Tonyu.classes.user.Items({x: _this.firstPos.x,y: _this.firstPos.y,scaleX: _this.baseItemScale,itemType: _this.baseItemType,badItem: false});
        _this.follower1=new Tonyu.classes.user.FollowRotationItem({firstAngle: 1,radius: Tonyu.globals.$W*0.35,itemType: _this.baseItemType,badItem: true,followActor: _this.followActor,scaleX: _this.rotItemScale,lifeKeeper: _this.followActor});
        _this.follower2=new Tonyu.classes.user.FollowRotationItem({firstAngle: 180,radius: Tonyu.globals.$W*0.35,itemType: _this.baseItemType,badItem: true,followActor: _this.followActor,scaleX: _this.rotItemScale,lifeKeeper: _this.followActor});
        while (true) {
          Tonyu.checkLoop();
          if (_this.angle==null) {
            _this.angle=_this.atan2(_this.target.y+(- _this.firstPos.y),_this.target.x+(- _this.firstPos.x));
            _this.radius=0;
            
          }
          if (_this.radius!=null) {
            _this.follower1.rotSp=Tonyu.globals.$W*0.005;
            _this.follower2.rotSp=Tonyu.globals.$W*0.005;
            _this.follower1.crashScale=0.1;
            _this.follower2.crashScale=0.1;
            _this.radius+=Tonyu.globals.$W*0.005;
            _this.followActor.x=_this.firstPos.x+_this.cos(_this.angle)*_this.radius;
            _this.followActor.y=_this.firstPos.y+_this.sin(_this.angle)*_this.radius;
            
          }
          ;
          
          if (_this.followActor.x>Tonyu.globals.$W*1.3||_this.followActor.x<- (Tonyu.globals.$W*0.3)) {
            _this.followActorOut=true;
            
          }
          ;
          
          if (_this.followActor.y>Tonyu.globals.$H*1.3) {
            _this.followActorOut=true;
            
          }
          ;
          
          _this.update();
          
        }
        ;
        
      },
      fiber$main :function _trc_HomingRotItem_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.target;
        _this.firstPos;
        _this.baseItemScale;
        _this.rotItemScale;
        _this.baseItemType;
        _this.rotItmeType;
        _this.angle;
        _this.radius;
        _this.followActorOut=false;
        _this.followActor=new Tonyu.classes.user.Items({x: _this.firstPos.x,y: _this.firstPos.y,scaleX: _this.baseItemScale,itemType: _this.baseItemType,badItem: false});
        _this.follower1=new Tonyu.classes.user.FollowRotationItem({firstAngle: 1,radius: Tonyu.globals.$W*0.35,itemType: _this.baseItemType,badItem: true,followActor: _this.followActor,scaleX: _this.rotItemScale,lifeKeeper: _this.followActor});
        _this.follower2=new Tonyu.classes.user.FollowRotationItem({firstAngle: 180,radius: Tonyu.globals.$W*0.35,itemType: _this.baseItemType,badItem: true,followActor: _this.followActor,scaleX: _this.rotItemScale,lifeKeeper: _this.followActor});
        
        _thread.enter(function _trc_HomingRotItem_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              if (_this.angle==null) {
                _this.angle=_this.atan2(_this.target.y+(- _this.firstPos.y),_this.target.x+(- _this.firstPos.x));
                _this.radius=0;
                
              }
              if (_this.radius!=null) {
                _this.follower1.rotSp=Tonyu.globals.$W*0.005;
                _this.follower2.rotSp=Tonyu.globals.$W*0.005;
                _this.follower1.crashScale=0.1;
                _this.follower2.crashScale=0.1;
                _this.radius+=Tonyu.globals.$W*0.005;
                _this.followActor.x=_this.firstPos.x+_this.cos(_this.angle)*_this.radius;
                _this.followActor.y=_this.firstPos.y+_this.sin(_this.angle)*_this.radius;
                
              }
              ;
              
              if (_this.followActor.x>Tonyu.globals.$W*1.3||_this.followActor.x<- (Tonyu.globals.$W*0.3)) {
                _this.followActorOut=true;
                
              }
              ;
              
              if (_this.followActor.y>Tonyu.globals.$H*1.3) {
                _this.followActorOut=true;
                
              }
              ;
              
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3     :
              
              ;
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"firstPos":{},"baseItemScale":{},"rotItemScale":{},"baseItemType":{},"rotItmeType":{},"angle":{},"followActorOut":{},"followActor":{},"follower1":{},"follower2":{}}}
});
Tonyu.klass.define({
  fullName: 'user.ItemBullet',
  shortName: 'ItemBullet',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_ItemBullet_main() {
        "use strict";
        var _this=this;
        
        _this.firstX;
        _this.firstY;
        _this.target;
        _this.badItem;
        _this.itemType;
        _this.base=new Tonyu.classes.user.Items({x: _this.firstX,y: _this.firstY,scaleX: Tonyu.globals.$scrScale*0.5,itemType: _this.itemType,badItem: _this.badItem});
        _this.mot=new Tonyu.classes.user.AttractionMotion({sp: 5});
        while (true) {
          Tonyu.checkLoop();
          if (! _this.mot||! _this.base||! _this.target) {
            return _this;
          }
          _this.mot.app(_this.base,_this.target);
          _this.update();
          
        }
      },
      fiber$main :function _trc_ItemBullet_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.firstX;
        _this.firstY;
        _this.target;
        _this.badItem;
        _this.itemType;
        _this.base=new Tonyu.classes.user.Items({x: _this.firstX,y: _this.firstY,scaleX: Tonyu.globals.$scrScale*0.5,itemType: _this.itemType,badItem: _this.badItem});
        _this.mot=new Tonyu.classes.user.AttractionMotion({sp: 5});
        
        _thread.enter(function _trc_ItemBullet_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              if (!(! _this.mot||! _this.base||! _this.target)) { __pc=2     ; break; }
              _thread.exit(_this);return;
            case 2     :
              
              _this.mot.app(_this.base,_this.target);
              _this.fiber$update(_thread);
              __pc=3;return;
            case 3:
              
              __pc=1;break;
            case 4     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"firstX":{},"firstY":{},"badItem":{},"itemType":{},"base":{},"mot":{}}}
});
Tonyu.klass.define({
  fullName: 'user.ItemProcLibs',
  shortName: 'ItemProcLibs',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_ItemProcLibs_main() {
        "use strict";
        var _this=this;
        
      },
      fiber$main :function _trc_ItemProcLibs_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.retVal=_this;return;
      },
      itemTypeInit :function _trc_ItemProcLibs_itemTypeInit() {
        "use strict";
        var _this=this;
        
        if (_this.badItem===false) {
          if (_this.itemType===0) {
            _this.p=Tonyu.globals.$pat_zubon;
          }
          if (_this.itemType===1) {
            _this.p=Tonyu.globals.$pat_autaa;
          }
          if (_this.itemType===2) {
            _this.p=Tonyu.globals.$pat_bousi;
          }
          
        } else {
          if (_this.badItem===true) {
            if (_this.itemType===0) {
              _this.p=Tonyu.globals.$pat_bad_zubon;
            }
            if (_this.itemType===1) {
              _this.p=Tonyu.globals.$pat_bad_autaa;
            }
            if (_this.itemType===2) {
              _this.p=Tonyu.globals.$pat_bad_bousi;
            }
            
          }
        }
      },
      fiber$itemTypeInit :function _trc_ItemProcLibs_f_itemTypeInit(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        if (_this.badItem===false) {
          if (_this.itemType===0) {
            _this.p=Tonyu.globals.$pat_zubon;
          }
          if (_this.itemType===1) {
            _this.p=Tonyu.globals.$pat_autaa;
          }
          if (_this.itemType===2) {
            _this.p=Tonyu.globals.$pat_bousi;
          }
          
        } else {
          if (_this.badItem===true) {
            if (_this.itemType===0) {
              _this.p=Tonyu.globals.$pat_bad_zubon;
            }
            if (_this.itemType===1) {
              _this.p=Tonyu.globals.$pat_bad_autaa;
            }
            if (_this.itemType===2) {
              _this.p=Tonyu.globals.$pat_bad_bousi;
            }
            
          }
        }
        
        _thread.retVal=_this;return;
      },
      scaleInit :function _trc_ItemProcLibs_scaleInit() {
        "use strict";
        var _this=this;
        
        _this.scaleX=Tonyu.globals.$W*0.0005;
      },
      fiber$scaleInit :function _trc_ItemProcLibs_f_scaleInit(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.scaleX=Tonyu.globals.$W*0.0005;
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"itemTypeInit":{"nowait":false},"scaleInit":{"nowait":false}},"fields":{"badItem":{},"itemType":{}}}
});
Tonyu.klass.define({
  fullName: 'user.Items',
  shortName: 'Items',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Items_main() {
        "use strict";
        var _this=this;
        
        _this.init();
      },
      fiber$main :function _trc_Items_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_Items_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$init(_thread);
              __pc=1;return;
            case 1:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      init :function _trc_Items_init() {
        "use strict";
        var _this=this;
        
        if (_this.badItem===false) {
          if (_this.itemType===0) {
            _this.p=Tonyu.globals.$pat_zubon;
          }
          if (_this.itemType===1) {
            _this.p=Tonyu.globals.$pat_autaa;
          }
          if (_this.itemType===2) {
            _this.p=Tonyu.globals.$pat_bousi;
          }
          
        } else {
          if (_this.badItem===true) {
            if (_this.itemType===0) {
              _this.p=Tonyu.globals.$pat_bad_zubon;
            }
            if (_this.itemType===1) {
              _this.p=Tonyu.globals.$pat_bad_autaa;
            }
            if (_this.itemType===2) {
              _this.p=Tonyu.globals.$pat_bad_bousi;
            }
            
          }
        }
        _this.firstX=_this.x;
        _this.firstY=_this.y;
        _this.angle=1;
        _this.radCos=Tonyu.globals.$W*_this.rnd(2,5)*0.01;
        _this.radSin=Tonyu.globals.$W*_this.rnd(2,5)*0.01;
      },
      fiber$init :function _trc_Items_f_init(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        if (_this.badItem===false) {
          if (_this.itemType===0) {
            _this.p=Tonyu.globals.$pat_zubon;
          }
          if (_this.itemType===1) {
            _this.p=Tonyu.globals.$pat_autaa;
          }
          if (_this.itemType===2) {
            _this.p=Tonyu.globals.$pat_bousi;
          }
          
        } else {
          if (_this.badItem===true) {
            if (_this.itemType===0) {
              _this.p=Tonyu.globals.$pat_bad_zubon;
            }
            if (_this.itemType===1) {
              _this.p=Tonyu.globals.$pat_bad_autaa;
            }
            if (_this.itemType===2) {
              _this.p=Tonyu.globals.$pat_bad_bousi;
            }
            
          }
        }
        _this.firstX=_this.x;
        _this.firstY=_this.y;
        _this.angle=1;
        _this.radCos=Tonyu.globals.$W*_this.rnd(2,5)*0.01;
        _this.radSin=Tonyu.globals.$W*_this.rnd(2,5)*0.01;
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"init":{"nowait":false}},"fields":{"badItem":{},"itemType":{},"firstX":{},"firstY":{},"angle":{},"radCos":{},"radSin":{}}}
});
Tonyu.klass.define({
  fullName: 'user.Main',
  shortName: 'Main',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Main_main() {
        "use strict";
        var _this=this;
        
        _this.frame=0;
        _this.scrScale=0.3338;
        _this.W=Math.floor(1080*_this.scrScale);
        _this.H=Math.floor(1920*_this.scrScale);
        Tonyu.globals.$Screen.resize(_this.W,_this.H);
        Tonyu.globals.$sound.stopBGM();
        Tonyu.globals.$Screen.setBGColor("#faf2ee");
        new Tonyu.classes.kernel.Label({x: _this.W*0.5,y: _this.H*0.3,text: "おっさんコーディネート",size: 30,fillStyle: "#88001b"});
        new Tonyu.classes.kernel.Label({x: _this.W*0.5,y: _this.H*0.4,text: "ver 1.2.4",size: 20,fillStyle: "#88001b"});
        new Tonyu.classes.kernel.Label({x: _this.W*0.5,y: _this.H*0.7,text: "タッチでスタート",size: 20,fillStyle: "#88001b"});
        while (true) {
          Tonyu.checkLoop();
          _this.frame++;
          if (Tonyu.globals.$touches[0].touched===1) {
            _this.loadPage(Tonyu.classes.user.Start);
            
          }
          _this.update();
          
        }
        ;
        
      },
      fiber$main :function _trc_Main_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.frame=0;
        _this.scrScale=0.3338;
        _this.W=Math.floor(1080*_this.scrScale);
        _this.H=Math.floor(1920*_this.scrScale);
        Tonyu.globals.$Screen.resize(_this.W,_this.H);
        Tonyu.globals.$sound.stopBGM();
        Tonyu.globals.$Screen.setBGColor("#faf2ee");
        new Tonyu.classes.kernel.Label({x: _this.W*0.5,y: _this.H*0.3,text: "おっさんコーディネート",size: 30,fillStyle: "#88001b"});
        new Tonyu.classes.kernel.Label({x: _this.W*0.5,y: _this.H*0.4,text: "ver 1.2.4",size: 20,fillStyle: "#88001b"});
        new Tonyu.classes.kernel.Label({x: _this.W*0.5,y: _this.H*0.7,text: "タッチでスタート",size: 20,fillStyle: "#88001b"});
        
        _thread.enter(function _trc_Main_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              _this.frame++;
              if (!(Tonyu.globals.$touches[0].touched===1)) { __pc=3     ; break; }
              _this.fiber$loadPage(_thread, Tonyu.classes.user.Start);
              __pc=2;return;
            case 2:
              
            case 3     :
              
              _this.fiber$update(_thread);
              __pc=4;return;
            case 4:
              
              __pc=1;break;
            case 5     :
              
              ;
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"frame":{},"scrScale":{},"W":{},"H":{}}}
});
Tonyu.klass.define({
  fullName: 'user.MainProcLibs',
  shortName: 'MainProcLibs',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_MainProcLibs_main() {
        "use strict";
        var _this=this;
        
      },
      fiber$main :function _trc_MainProcLibs_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.retVal=_this;return;
      },
      retry :function _trc_MainProcLibs_retry() {
        "use strict";
        var _this=this;
        
        Tonyu.globals.$stage=- 1;
        Tonyu.globals.$frame=0;
        Tonyu.globals.$difficulty=0;
        Tonyu.globals.$stageList=[];
        Tonyu.globals.$bossList=[];
        Tonyu.globals.$boss=- 1;
        Tonyu.globals.$bossDifficulty="";
        Tonyu.globals.$norma=Tonyu.globals.$normaMax;
        Tonyu.globals.$storyClear=true;
      },
      fiber$retry :function _trc_MainProcLibs_f_retry(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        Tonyu.globals.$stage=- 1;
        Tonyu.globals.$frame=0;
        Tonyu.globals.$difficulty=0;
        Tonyu.globals.$stageList=[];
        Tonyu.globals.$bossList=[];
        Tonyu.globals.$boss=- 1;
        Tonyu.globals.$bossDifficulty="";
        Tonyu.globals.$norma=Tonyu.globals.$normaMax;
        Tonyu.globals.$storyClear=true;
        
        _thread.retVal=_this;return;
      },
      init :function _trc_MainProcLibs_init() {
        "use strict";
        var _this=this;
        
        Tonyu.globals.$scrScale=0.3338;
        Tonyu.globals.$W=Math.floor(1080*Tonyu.globals.$scrScale);
        Tonyu.globals.$H=Math.floor(1920*Tonyu.globals.$scrScale);
        _this.rand=new Tonyu.classes.kernel.Random();
        _this.spawn=false;
        _this.nowBaseItem;
        _this.badItem0;
        _this.badItem1;
        _this.coolGuySpawn=0;
        Tonyu.globals.$Screen.resize(Tonyu.globals.$W,Tonyu.globals.$H);
        _this.ceiling=new Tonyu.classes.user.Floor({x: Tonyu.globals.$W,y: 0,scaleX: Tonyu.globals.$W*0.1,scaleY: 1,alpha: 0});
        _this.leftWall=new Tonyu.classes.user.Floor({x: 0,y: Tonyu.globals.$H*0.5,scaleY: Tonyu.globals.$H*0.1,alpha: 0});
        _this.rightWall=new Tonyu.classes.user.Floor({x: Tonyu.globals.$W,y: Tonyu.globals.$H*0.5,scaleY: Tonyu.globals.$H*0.1,alpha: 0});
        _this.ui=new Tonyu.classes.user.UI;
      },
      fiber$init :function _trc_MainProcLibs_f_init(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        Tonyu.globals.$scrScale=0.3338;
        Tonyu.globals.$W=Math.floor(1080*Tonyu.globals.$scrScale);
        Tonyu.globals.$H=Math.floor(1920*Tonyu.globals.$scrScale);
        _this.rand=new Tonyu.classes.kernel.Random();
        _this.spawn=false;
        _this.nowBaseItem;
        _this.badItem0;
        _this.badItem1;
        _this.coolGuySpawn=0;
        Tonyu.globals.$Screen.resize(Tonyu.globals.$W,Tonyu.globals.$H);
        _this.ceiling=new Tonyu.classes.user.Floor({x: Tonyu.globals.$W,y: 0,scaleX: Tonyu.globals.$W*0.1,scaleY: 1,alpha: 0});
        _this.leftWall=new Tonyu.classes.user.Floor({x: 0,y: Tonyu.globals.$H*0.5,scaleY: Tonyu.globals.$H*0.1,alpha: 0});
        _this.rightWall=new Tonyu.classes.user.Floor({x: Tonyu.globals.$W,y: Tonyu.globals.$H*0.5,scaleY: Tonyu.globals.$H*0.1,alpha: 0});
        _this.ui=new Tonyu.classes.user.UI;
        
        _thread.retVal=_this;return;
      },
      spawnItems :function _trc_MainProcLibs_spawnItems() {
        "use strict";
        var _this=this;
        var spawnRand;
        
        spawnRand = _this.rand.nextInt(0,6);
        
        if (spawnRand===0) {
          _this.nowBaseItem=new Tonyu.classes.user.FollItem({x: _this.rand.nextInt(0,Tonyu.globals.$W),y: - (Tonyu.globals.$H*0.2),itemType: _this.player.itemType,badItem: ! ! _this.rnd(2)});
          
        } else {
          if (spawnRand===1) {
            _this.nowBaseItem=new Tonyu.classes.user.ZigZagItem({x: Tonyu.globals.$W*0.5,y: - (Tonyu.globals.$H*0.2),itemType: _this.player.itemType,badItem: false});
            _this.badItem0=new Tonyu.classes.user.FollItem({x: 0,y: - (Tonyu.globals.$H*0.2),itemType: _this.player.itemType,badItem: true});
            _this.badItem1=new Tonyu.classes.user.FollItem({x: Tonyu.globals.$W,y: - (Tonyu.globals.$H*0.2),itemType: _this.player.itemType,badItem: true});
            _this.badItem0.lifeKeeper=_this.nowBaseItem;
            _this.badItem1.lifeKeeper=_this.nowBaseItem;
            
          } else {
            if (spawnRand===2) {
              _this.nowBaseItem=new Tonyu.classes.user.NozokiItem({dir: ! ! _this.rnd(2)?"Left":"Right",itemType: _this.player.itemType,badItem: ! ! _this.rnd(2)});
              
            } else {
              if (spawnRand===3) {
                _this.nowBaseItem=new Tonyu.classes.user.ZigZagItem({x: Tonyu.globals.$W,y: - (Tonyu.globals.$H*0.2),itemType: _this.player.itemType,badItem: ! ! _this.rnd(2)});
                
              } else {
                if (spawnRand===4) {
                  _this.nowBaseItem=new Tonyu.classes.user.FollItem({x: Tonyu.globals.$W*0.5,y: 0,itemType: _this.player.itemType,badItem: ! ! _this.rnd(2)});
                  _this.rotItems();
                  
                } else {
                  if (spawnRand===5) {
                    _this.nowBaseItem=new Tonyu.classes.user.ZigZagItem({x: Tonyu.globals.$W*0.5,y: 0,itemType: _this.player.itemType,badItem: ! ! _this.rnd(2)});
                    _this.rotItems();
                    
                  }
                }
              }
            }
          }
        }
      },
      fiber$spawnItems :function _trc_MainProcLibs_f_spawnItems(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var spawnRand;
        
        spawnRand = _this.rand.nextInt(0,6);
        
        
        _thread.enter(function _trc_MainProcLibs_ent_spawnItems(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              if (!(spawnRand===0)) { __pc=1     ; break; }
              {
                _this.nowBaseItem=new Tonyu.classes.user.FollItem({x: _this.rand.nextInt(0,Tonyu.globals.$W),y: - (Tonyu.globals.$H*0.2),itemType: _this.player.itemType,badItem: ! ! _this.rnd(2)});
              }
              __pc=13    ;break;
            case 1     :
              if (!(spawnRand===1)) { __pc=2     ; break; }
              {
                _this.nowBaseItem=new Tonyu.classes.user.ZigZagItem({x: Tonyu.globals.$W*0.5,y: - (Tonyu.globals.$H*0.2),itemType: _this.player.itemType,badItem: false});
                _this.badItem0=new Tonyu.classes.user.FollItem({x: 0,y: - (Tonyu.globals.$H*0.2),itemType: _this.player.itemType,badItem: true});
                _this.badItem1=new Tonyu.classes.user.FollItem({x: Tonyu.globals.$W,y: - (Tonyu.globals.$H*0.2),itemType: _this.player.itemType,badItem: true});
                _this.badItem0.lifeKeeper=_this.nowBaseItem;
                _this.badItem1.lifeKeeper=_this.nowBaseItem;
              }
              __pc=12    ;break;
            case 2     :
              if (!(spawnRand===2)) { __pc=3     ; break; }
              {
                _this.nowBaseItem=new Tonyu.classes.user.NozokiItem({dir: ! ! _this.rnd(2)?"Left":"Right",itemType: _this.player.itemType,badItem: ! ! _this.rnd(2)});
              }
              __pc=11    ;break;
            case 3     :
              if (!(spawnRand===3)) { __pc=4     ; break; }
              {
                _this.nowBaseItem=new Tonyu.classes.user.ZigZagItem({x: Tonyu.globals.$W,y: - (Tonyu.globals.$H*0.2),itemType: _this.player.itemType,badItem: ! ! _this.rnd(2)});
              }
              __pc=10    ;break;
            case 4     :
              if (!(spawnRand===4)) { __pc=6     ; break; }
              _this.nowBaseItem=new Tonyu.classes.user.FollItem({x: Tonyu.globals.$W*0.5,y: 0,itemType: _this.player.itemType,badItem: ! ! _this.rnd(2)});
              _this.fiber$rotItems(_thread);
              __pc=5;return;
            case 5:
              
              __pc=9     ;break;
            case 6     :
              if (!(spawnRand===5)) { __pc=8     ; break; }
              _this.nowBaseItem=new Tonyu.classes.user.ZigZagItem({x: Tonyu.globals.$W*0.5,y: 0,itemType: _this.player.itemType,badItem: ! ! _this.rnd(2)});
              _this.fiber$rotItems(_thread);
              __pc=7;return;
            case 7:
              
            case 8     :
              
            case 9     :
              
            case 10    :
              
            case 11    :
              
            case 12    :
              
            case 13    :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      rotItems :function _trc_MainProcLibs_rotItems() {
        "use strict";
        var _this=this;
        var rotItemList;
        var rotItem;
        
        rotItemList = [];
        
        _this.i=0;for (; _this.i<2 ; _this.i++) {
          Tonyu.checkLoop();
          {
            rotItem = new Tonyu.classes.user.FollowRotationItem({firstAngle: _this.i*180,radius: Tonyu.globals.$W*0.5,itemType: 0,badItem: true,lifeKeeper: _this.nowBaseItem,followActor: _this.nowBaseItem});
            
          }
        }
      },
      fiber$rotItems :function _trc_MainProcLibs_f_rotItems(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var rotItemList;
        var rotItem;
        
        rotItemList = [];
        
        _this.i=0;for (; _this.i<2 ; _this.i++) {
          Tonyu.checkLoop();
          {
            rotItem = new Tonyu.classes.user.FollowRotationItem({firstAngle: _this.i*180,radius: Tonyu.globals.$W*0.5,itemType: 0,badItem: true,lifeKeeper: _this.nowBaseItem,followActor: _this.nowBaseItem});
            
          }
        }
        
        _thread.retVal=_this;return;
      },
      shuffle :function _trc_MainProcLibs_shuffle(baseArr) {
        "use strict";
        var _this=this;
        
        _this.arr=Array.from(baseArr);
        _this.n=_this.arr.length;
        _this.temp;
        _this.i;
        while (_this.n) {
          Tonyu.checkLoop();
          _this.i=Math.floor(Math.random()*_this.n--);
          _this.temp=_this.arr[_this.n];
          _this.arr[_this.n]=_this.arr[_this.i];
          _this.arr[_this.i]=_this.temp;
          
        }
        return _this.arr;
      },
      fiber$shuffle :function _trc_MainProcLibs_f_shuffle(_thread,baseArr) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.arr=Array.from(baseArr);
        _this.n=_this.arr.length;
        _this.temp;
        _this.i;
        
        _thread.enter(function _trc_MainProcLibs_ent_shuffle(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              if (!(_this.n)) { __pc=2     ; break; }
              {
                _this.i=Math.floor(Math.random()*_this.n--);
                _this.temp=_this.arr[_this.n];
                _this.arr[_this.n]=_this.arr[_this.i];
                _this.arr[_this.i]=_this.temp;
              }
              __pc=1;break;
            case 2     :
              
              _thread.exit(_this.arr);return;
              _thread.exit(_this);return;
            }
          }
        });
      },
      nextScene :function _trc_MainProcLibs_nextScene(flag) {
        "use strict";
        var _this=this;
        
        if (! flag) {
          return _this;
        }
        Tonyu.globals.$norma--;
        if (Tonyu.globals.$norma<=0) {
          _this.retry();
          _this.loadPage(Tonyu.classes.user.Main);
          
        }
        ;
        
        if (Tonyu.globals.$stageList.length<=0) {
          Tonyu.globals.$stageList=_this.shuffle([Tonyu.classes.user.RocketScene,Tonyu.classes.user.ZigZagItemScene,Tonyu.classes.user.RotItemScene,Tonyu.classes.user.OsoujiScene,Tonyu.classes.user.SentakuScene]);
          
        }
        if (Tonyu.globals.$bossList.length<=0) {
          Tonyu.globals.$bossList=_this.shuffle([Tonyu.classes.user.BigFaceScene]);
          
        }
        if (Tonyu.globals.$stage<Tonyu.globals.$stageList.length-1) {
          Tonyu.globals.$stage++;
        } else {
          if (Tonyu.globals.$difficulty!==Tonyu.globals.$bossDifficulty) {
            Tonyu.globals.$bossDifficulty=Tonyu.globals.$difficulty;
          }
          Tonyu.globals.$stage=0;
          Tonyu.globals.$stageList=_this.shuffle(Tonyu.globals.$stageList);
          if (Tonyu.globals.$boss<Tonyu.globals.$bossList.length-1) {
            Tonyu.globals.$boss++;
          } else {
            Tonyu.globals.$boss=0;
          }
          Tonyu.globals.$difficulty++;
          _this.loadPage(Tonyu.globals.$bossList[Tonyu.globals.$boss]);
          
        }
        ;
        
        _this.loadPage(Tonyu.globals.$stageList[Tonyu.globals.$stage]);
      },
      fiber$nextScene :function _trc_MainProcLibs_f_nextScene(_thread,flag) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        if (! flag) {
          _thread.retVal=_this;return;
          
        }
        Tonyu.globals.$norma--;
        
        _thread.enter(function _trc_MainProcLibs_ent_nextScene(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              if (!(Tonyu.globals.$norma<=0)) { __pc=3     ; break; }
              _this.fiber$retry(_thread);
              __pc=1;return;
            case 1:
              
              _this.fiber$loadPage(_thread, Tonyu.classes.user.Main);
              __pc=2;return;
            case 2:
              
            case 3     :
              
              ;
              
              if (!(Tonyu.globals.$stageList.length<=0)) { __pc=5     ; break; }
              _this.fiber$shuffle(_thread, [Tonyu.classes.user.RocketScene,Tonyu.classes.user.ZigZagItemScene,Tonyu.classes.user.RotItemScene,Tonyu.classes.user.OsoujiScene,Tonyu.classes.user.SentakuScene]);
              __pc=4;return;
            case 4:
              Tonyu.globals.$stageList=_thread.retVal;
              
            case 5     :
              
              if (!(Tonyu.globals.$bossList.length<=0)) { __pc=7     ; break; }
              _this.fiber$shuffle(_thread, [Tonyu.classes.user.BigFaceScene]);
              __pc=6;return;
            case 6:
              Tonyu.globals.$bossList=_thread.retVal;
              
            case 7     :
              
              if (!(Tonyu.globals.$stage<Tonyu.globals.$stageList.length-1)) { __pc=8     ; break; }
              Tonyu.globals.$stage++;
              __pc=11    ;break;
            case 8     :
              if (Tonyu.globals.$difficulty!==Tonyu.globals.$bossDifficulty) {
                Tonyu.globals.$bossDifficulty=Tonyu.globals.$difficulty;
              }
              Tonyu.globals.$stage=0;
              _this.fiber$shuffle(_thread, Tonyu.globals.$stageList);
              __pc=9;return;
            case 9:
              Tonyu.globals.$stageList=_thread.retVal;
              
              if (Tonyu.globals.$boss<Tonyu.globals.$bossList.length-1) {
                Tonyu.globals.$boss++;
              } else {
                Tonyu.globals.$boss=0;
              }
              Tonyu.globals.$difficulty++;
              _this.fiber$loadPage(_thread, Tonyu.globals.$bossList[Tonyu.globals.$boss]);
              __pc=10;return;
            case 10:
              
            case 11    :
              
              ;
              
              _this.fiber$loadPage(_thread, Tonyu.globals.$stageList[Tonyu.globals.$stage]);
              __pc=12;return;
            case 12:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"retry":{"nowait":false},"init":{"nowait":false},"spawnItems":{"nowait":false},"rotItems":{"nowait":false},"shuffle":{"nowait":false},"nextScene":{"nowait":false}},"fields":{"rand":{},"spawn":{},"nowBaseItem":{},"badItem0":{},"badItem1":{},"coolGuySpawn":{},"ceiling":{},"leftWall":{},"rightWall":{},"ui":{},"player":{},"i":{},"arr":{},"n":{},"temp":{}}}
});
Tonyu.klass.define({
  fullName: 'user.OffsetFollowMotion',
  shortName: 'OffsetFollowMotion',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_OffsetFollowMotion_main() {
        "use strict";
        var _this=this;
        
        _this.target;
        _this.offsetX;
        _this.offsetY;
      },
      fiber$main :function _trc_OffsetFollowMotion_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.target;
        _this.offsetX;
        _this.offsetY;
        
        _thread.retVal=_this;return;
      },
      next :function _trc_OffsetFollowMotion_next() {
        "use strict";
        var _this=this;
        
        return {x: _this.target.x+_this.offsetX,y: _this.target.y+_this.offsetY};
      },
      fiber$next :function _trc_OffsetFollowMotion_f_next(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _thread.retVal={x: _this.target.x+_this.offsetX,y: _this.target.y+_this.offsetY};return;
        
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"next":{"nowait":false}},"fields":{"offsetX":{},"offsetY":{}}}
});
Tonyu.klass.define({
  fullName: 'user.OshiUriScene',
  shortName: 'OshiUriScene',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.user.MainProcLibs],
  methods: function (__superClass) {
    return {
      main :function _trc_OshiUriScene_main() {
        "use strict";
        var _this=this;
        
        _this.init();
        _this.throwGoodItem=false;
        _this.player=new Tonyu.classes.user.Player({speed: Tonyu.globals.$W*0.02,notMove: true});
        _this.boss=new Tonyu.classes.user.OshiUriTenin;
        _this.BG=new Tonyu.classes.user.BGBase({BGImg: Tonyu.globals.$pat_osouji_scene_bg,scaleX: Tonyu.globals.$scrScale,zOrder: 9});
        Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_94,true);
        while (true) {
          Tonyu.checkLoop();
          _this.player.gunMode=true;
          if (_this.boss.isDead()&&! _this.throwGoodItem) {
            _this.i=0;for (; _this.i<3 ; _this.i++) {
              Tonyu.checkLoop();
              {
                new Tonyu.classes.user.OshiUriItem({tarX: Tonyu.globals.$W*0.5,x: _this.boss.x,y: _this.boss.y-(_this.i*50),itemType: _this.i,badItem: false,invincible: true});
              }
            }
            _this.throwGoodItem=true;
            
          }
          _this.nextScene(_this.player.apeealEnd);
          _this.update();
          
        }
      },
      fiber$main :function _trc_OshiUriScene_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_OshiUriScene_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$init(_thread);
              __pc=1;return;
            case 1:
              
              _this.throwGoodItem=false;
              _this.player=new Tonyu.classes.user.Player({speed: Tonyu.globals.$W*0.02,notMove: true});
              _this.boss=new Tonyu.classes.user.OshiUriTenin;
              _this.BG=new Tonyu.classes.user.BGBase({BGImg: Tonyu.globals.$pat_osouji_scene_bg,scaleX: Tonyu.globals.$scrScale,zOrder: 9});
              Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_94,true);
            case 2:
              _this.player.gunMode=true;
              if (_this.boss.isDead()&&! _this.throwGoodItem) {
                _this.i=0;for (; _this.i<3 ; _this.i++) {
                  Tonyu.checkLoop();
                  {
                    new Tonyu.classes.user.OshiUriItem({tarX: Tonyu.globals.$W*0.5,x: _this.boss.x,y: _this.boss.y-(_this.i*50),itemType: _this.i,badItem: false,invincible: true});
                  }
                }
                _this.throwGoodItem=true;
                
              }
              _this.fiber$nextScene(_thread, _this.player.apeealEnd);
              __pc=3;return;
            case 3:
              
              _this.fiber$update(_thread);
              __pc=4;return;
            case 4:
              
              __pc=2;break;
            case 5     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"throwGoodItem":{},"boss":{},"BG":{}}}
});
Tonyu.klass.define({
  fullName: 'user.OsoujiScene',
  shortName: 'OsoujiScene',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.user.MainProcLibs],
  methods: function (__superClass) {
    return {
      main :function _trc_OsoujiScene_main() {
        "use strict";
        var _this=this;
        
        _this.init();
        _this.BGGW=new Tonyu.classes.kernel.Actor({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.5,p: Tonyu.globals.$pat_osouji_scene_bg_gw,scaleX: Tonyu.globals.$scrScale,zOrder: 10});
        _this.BG=new Tonyu.classes.user.BGBase({BGImg: Tonyu.globals.$pat_osouji_scene_bg,scaleX: Tonyu.globals.$scrScale,zOrder: 9});
        _this.timeSale=new Tonyu.classes.user.TimeSale;
        _this.ceiling.die();
        _this.leftWall.y=- (Tonyu.globals.$H*0.9);
        _this.rightWall.y=- (Tonyu.globals.$H*0.9);
        _this.leftWall.x=- (Tonyu.globals.$W*0.2);
        _this.rightWall.x=Tonyu.globals.$W*1.2;
        _this.floor=new Tonyu.classes.user.Floor({x: Tonyu.globals.$W,y: Tonyu.globals.$H,scaleX: Tonyu.globals.$W*0.1,scaleY: 1,alpha: 255});
        _this.player=new Tonyu.classes.user.Player({speed: Tonyu.globals.$W*0.02,bodyFlag: true});
        _this.uketuke=new Tonyu.classes.user.Uketuke({x: Tonyu.globals.$W*0.5,y: - (Tonyu.globals.$H*0.2)});
        _this.uketukeFollowMotion=new Tonyu.classes.user.OffsetFollowMotion({target: _this.uketuke,offsetX: 0,offsetY: Tonyu.globals.$H*0.2});
        if (Tonyu.globals.$difficulty===0) {
          _this.kyakuLen=5;
        }
        if (Tonyu.globals.$difficulty===1) {
          _this.kyakuLen=10;
        }
        if (Tonyu.globals.$difficulty===2) {
          _this.kyakuLen=20;
        }
        _this.kyakuList=[];
        _this.i=0;for (; _this.kyakuLen>_this.i ; _this.i++) {
          Tonyu.checkLoop();
          {
            _this.kyaku=new Tonyu.classes.kernel.BodyActor({x: _this.rnd(Tonyu.globals.$W),y: _this.rnd(Tonyu.globals.$H*0.5,Tonyu.globals.$H),p: Tonyu.globals.$pat_otherningen,scaleX: Tonyu.globals.$W*0.001,manualRotation: true});
            _this.kyakuList.push(_this.kyaku);
          }
        }
        Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_131,true);
        while (true) {
          Tonyu.checkLoop();
          _this.nextScene(_this.player.apeealEnd);
          if (_this.uketuke.horiNageItemOut&&_this.player.apeealTime>=0) {
            _this.player.apeealTime=- 1;
            
          }
          if (_this.timeSale.time<0&&_this.player.apeealTime>=0) {
            _this.player.apeealTime=- 1;
            
          }
          _this.uketuke.x=Tonyu.globals.$W*0.5;
          _this.BG.extend(_this.uketukeFollowMotion.next());
          _this.update();
          
        }
      },
      fiber$main :function _trc_OsoujiScene_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_OsoujiScene_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$init(_thread);
              __pc=1;return;
            case 1:
              
              _this.BGGW=new Tonyu.classes.kernel.Actor({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.5,p: Tonyu.globals.$pat_osouji_scene_bg_gw,scaleX: Tonyu.globals.$scrScale,zOrder: 10});
              _this.BG=new Tonyu.classes.user.BGBase({BGImg: Tonyu.globals.$pat_osouji_scene_bg,scaleX: Tonyu.globals.$scrScale,zOrder: 9});
              _this.timeSale=new Tonyu.classes.user.TimeSale;
              _this.ceiling.die();
              _this.leftWall.y=- (Tonyu.globals.$H*0.9);
              _this.rightWall.y=- (Tonyu.globals.$H*0.9);
              _this.leftWall.x=- (Tonyu.globals.$W*0.2);
              _this.rightWall.x=Tonyu.globals.$W*1.2;
              _this.floor=new Tonyu.classes.user.Floor({x: Tonyu.globals.$W,y: Tonyu.globals.$H,scaleX: Tonyu.globals.$W*0.1,scaleY: 1,alpha: 255});
              _this.player=new Tonyu.classes.user.Player({speed: Tonyu.globals.$W*0.02,bodyFlag: true});
              _this.uketuke=new Tonyu.classes.user.Uketuke({x: Tonyu.globals.$W*0.5,y: - (Tonyu.globals.$H*0.2)});
              _this.uketukeFollowMotion=new Tonyu.classes.user.OffsetFollowMotion({target: _this.uketuke,offsetX: 0,offsetY: Tonyu.globals.$H*0.2});
              if (Tonyu.globals.$difficulty===0) {
                _this.kyakuLen=5;
              }
              if (Tonyu.globals.$difficulty===1) {
                _this.kyakuLen=10;
              }
              if (Tonyu.globals.$difficulty===2) {
                _this.kyakuLen=20;
              }
              _this.kyakuList=[];
              _this.i=0;for (; _this.kyakuLen>_this.i ; _this.i++) {
                Tonyu.checkLoop();
                {
                  _this.kyaku=new Tonyu.classes.kernel.BodyActor({x: _this.rnd(Tonyu.globals.$W),y: _this.rnd(Tonyu.globals.$H*0.5,Tonyu.globals.$H),p: Tonyu.globals.$pat_otherningen,scaleX: Tonyu.globals.$W*0.001,manualRotation: true});
                  _this.kyakuList.push(_this.kyaku);
                }
              }
              Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_131,true);
            case 2:
              _this.fiber$nextScene(_thread, _this.player.apeealEnd);
              __pc=3;return;
            case 3:
              
              if (_this.uketuke.horiNageItemOut&&_this.player.apeealTime>=0) {
                _this.player.apeealTime=- 1;
                
              }
              if (_this.timeSale.time<0&&_this.player.apeealTime>=0) {
                _this.player.apeealTime=- 1;
                
              }
              _this.uketuke.x=Tonyu.globals.$W*0.5;
              _this.BG.extend(_this.uketukeFollowMotion.next());
              _this.fiber$update(_thread);
              __pc=4;return;
            case 4:
              
              __pc=2;break;
            case 5     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"BGGW":{},"BG":{},"timeSale":{},"uketuke":{},"uketukeFollowMotion":{},"kyakuLen":{},"kyakuList":{},"kyaku":{}}}
});
Tonyu.klass.define({
  fullName: 'user.RandItem',
  shortName: 'RandItem',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_RandItem_main() {
        "use strict";
        var _this=this;
        
        _this.item=new Tonyu.classes.user.FollItem({x: _this.itemX,y: _this.itemY,scaleX: _this.itemScaleX,itemType: _this.itemType,badItem: _this.badItem});
        _this.update();
        _this.print(_this.item.y);
      },
      fiber$main :function _trc_RandItem_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.item=new Tonyu.classes.user.FollItem({x: _this.itemX,y: _this.itemY,scaleX: _this.itemScaleX,itemType: _this.itemType,badItem: _this.badItem});
        
        _thread.enter(function _trc_RandItem_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$update(_thread);
              __pc=1;return;
            case 1:
              
              _this.print(_this.item.y);
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"item":{},"itemX":{},"itemY":{},"itemScaleX":{},"itemType":{},"badItem":{}}}
});
Tonyu.klass.define({
  fullName: 'user.Retry',
  shortName: 'Retry',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.user.MainProcLibs],
  methods: function (__superClass) {
    return {
      main :function _trc_Retry_main() {
        "use strict";
        var _this=this;
        
      },
      fiber$main :function _trc_Retry_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.retVal=_this;return;
      },
      retry :function _trc_Retry_retry() {
        "use strict";
        var _this=this;
        
        Tonyu.globals.$stage=- 1;
        Tonyu.globals.$frame=0;
        Tonyu.globals.$difficulty=0;
        Tonyu.globals.$stageList=[];
        Tonyu.globals.$bossList=[];
        Tonyu.globals.$boss=- 1;
        Tonyu.globals.$bossDifficulty="";
        Tonyu.globals.$norma=Tonyu.globals.$normaMax;
        _this.loadPage(Tonyu.classes.user.Start);
      },
      fiber$retry :function _trc_Retry_f_retry(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        Tonyu.globals.$stage=- 1;
        Tonyu.globals.$frame=0;
        Tonyu.globals.$difficulty=0;
        Tonyu.globals.$stageList=[];
        Tonyu.globals.$bossList=[];
        Tonyu.globals.$boss=- 1;
        Tonyu.globals.$bossDifficulty="";
        Tonyu.globals.$norma=Tonyu.globals.$normaMax;
        
        _thread.enter(function _trc_Retry_ent_retry(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$loadPage(_thread, Tonyu.classes.user.Start);
              __pc=1;return;
            case 1:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      retryText :function _trc_Retry_retryText() {
        "use strict";
        var _this=this;
        
        new Tonyu.classes.kernel.Label({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.5,text: "タッチして続ける",size: 30,fillStyle: "red"});
      },
      fiber$retryText :function _trc_Retry_f_retryText(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        new Tonyu.classes.kernel.Label({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.5,text: "タッチして続ける",size: 30,fillStyle: "red"});
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"retry":{"nowait":false},"retryText":{"nowait":false}},"fields":{}}
});
Tonyu.klass.define({
  fullName: 'user.RocketScene',
  shortName: 'RocketScene',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.user.MainProcLibs],
  methods: function (__superClass) {
    return {
      main :function _trc_RocketScene_main() {
        "use strict";
        var _this=this;
        
        _this.init();
        _this.bg=new Tonyu.classes.user.BGBase({BGImg: Tonyu.globals.$pat_rocket_scene_bg,scaleX: Tonyu.globals.$scrScale});
        _this.countDown=0;
        _this.frame=0;
        _this.playerGoTop=false;
        if (Tonyu.globals.$difficulty===0||Tonyu.globals.$difficulty===1) {
          _this.goodItemScaleX=Tonyu.globals.$W*0.0005;
          
        } else {
          if (Tonyu.globals.$difficulty===2) {
            _this.goodItemScaleX=Tonyu.globals.$W*0.0003;
            
          }
        }
        ;
        
        if (Tonyu.globals.$difficulty===1) {
          _this.badItemScaleX=Tonyu.globals.$W*0.001;
          
        } else {
          if (Tonyu.globals.$difficulty===2) {
            _this.badItemScaleX=Tonyu.globals.$W*0.0018;
            
          }
        }
        ;
        
        _this.item1=new Tonyu.classes.user.Items({x: Tonyu.globals.$W*0.2,y: Tonyu.globals.$H*0.25,scaleX: _this.goodItemScaleX,itemType: 0,badItem: false});
        _this.item2=new Tonyu.classes.user.Items({x: Tonyu.globals.$W*0.8,y: Tonyu.globals.$H*0.25,scaleX: _this.goodItemScaleX,itemType: 1,badItem: false});
        _this.item3=new Tonyu.classes.user.Items({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.25,scaleX: _this.goodItemScaleX,itemType: 2,badItem: false});
        if (Tonyu.globals.$difficulty>0) {
          _this.badItem=new Tonyu.classes.user.Items({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.5,scaleX: _this.badItemScaleX,itemType: _this.rnd(3),badItem: true});
          _this.badItemStand=new Tonyu.classes.user.Stand({x: _this.badItem.x,y: _this.badItem.y+Tonyu.globals.$H*0.15,scaleX: Tonyu.globals.$scrScale,zOrder: 1});
          _this.offsetFollowMotion=new Tonyu.classes.user.OffsetFollowMotion({offsetX: 0,offsetY: Tonyu.globals.$H*0.1,target: _this.badItem});
          
        }
        if (_this.badItem) {
          _this.shakeMotion=new Tonyu.classes.user.ShakeMotion({firstX: _this.badItem.x,firstY: _this.badItem.y});
          _this.roundTripMotion=new Tonyu.classes.user.RoundTripMotion({firstX: _this.badItem.x,firstY: _this.badItem.y});
          _this.roundTripMotion.sp=Tonyu.globals.$W*0.005;
          
        }
        _this.rocketItem=new Tonyu.classes.user.RocketItem({x: Tonyu.globals.$W*0.5,y: 0});
        _this.player=new Tonyu.classes.user.Player({speed: Tonyu.globals.$W*0.008,scaleX: Tonyu.globals.$W*0.001,gunMode: false,jump: false});
        Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_67);
        while (true) {
          Tonyu.checkLoop();
          _this.nextScene(_this.player.getApeealEnd());
          _this.badItemPos;
          _this.cr = _this.player.crashTo(_this.rocketItem);
          
          if (_this.cr) {
            _this.rocketItem.die();
            new Tonyu.classes.user.CountDownLabel({player: _this.player});
            
          }
          ;
          
          if (_this.player.y<Tonyu.globals.$H*0.4) {
            _this.playerGoTop=true;
            
          }
          if (_this.player.apeealTime>=0&&_this.playerGoTop&&_this.player.y>Tonyu.globals.$H*0.8) {
            _this.player.apeealTime=- 1;
            
          }
          if (_this.badItem) {
            _this.badItem.crashScale=0.8;
            _this.shakePos=_this.shakeMotion.next();
            if (Tonyu.globals.$difficulty===1) {
              _this.badItem.extend(_this.shakePos);
            }
            if (Tonyu.globals.$difficulty===2) {
              _this.shakeMotion.firstX=1;
              _this.roundTripPos=_this.roundTripMotion.next();
              _this.badItem.extend({x: _this.shakePos.x+_this.roundTripPos.x,y: _this.shakePos.y});
              
            }
            _this.badItemStand.extend(_this.offsetFollowMotion.next());
            
          }
          if (_this.item1.isDead()&&_this.item2.isDead()&&_this.item3.isDead()) {
            _this.all(Tonyu.classes.user.Items).die();
            
          }
          _this.update();
          
        }
      },
      fiber$main :function _trc_RocketScene_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_RocketScene_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$init(_thread);
              __pc=1;return;
            case 1:
              
              _this.bg=new Tonyu.classes.user.BGBase({BGImg: Tonyu.globals.$pat_rocket_scene_bg,scaleX: Tonyu.globals.$scrScale});
              _this.countDown=0;
              _this.frame=0;
              _this.playerGoTop=false;
              if (Tonyu.globals.$difficulty===0||Tonyu.globals.$difficulty===1) {
                _this.goodItemScaleX=Tonyu.globals.$W*0.0005;
                
              } else {
                if (Tonyu.globals.$difficulty===2) {
                  _this.goodItemScaleX=Tonyu.globals.$W*0.0003;
                  
                }
              }
              ;
              
              if (Tonyu.globals.$difficulty===1) {
                _this.badItemScaleX=Tonyu.globals.$W*0.001;
                
              } else {
                if (Tonyu.globals.$difficulty===2) {
                  _this.badItemScaleX=Tonyu.globals.$W*0.0018;
                  
                }
              }
              ;
              
              _this.item1=new Tonyu.classes.user.Items({x: Tonyu.globals.$W*0.2,y: Tonyu.globals.$H*0.25,scaleX: _this.goodItemScaleX,itemType: 0,badItem: false});
              _this.item2=new Tonyu.classes.user.Items({x: Tonyu.globals.$W*0.8,y: Tonyu.globals.$H*0.25,scaleX: _this.goodItemScaleX,itemType: 1,badItem: false});
              _this.item3=new Tonyu.classes.user.Items({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.25,scaleX: _this.goodItemScaleX,itemType: 2,badItem: false});
              if (Tonyu.globals.$difficulty>0) {
                _this.badItem=new Tonyu.classes.user.Items({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.5,scaleX: _this.badItemScaleX,itemType: _this.rnd(3),badItem: true});
                _this.badItemStand=new Tonyu.classes.user.Stand({x: _this.badItem.x,y: _this.badItem.y+Tonyu.globals.$H*0.15,scaleX: Tonyu.globals.$scrScale,zOrder: 1});
                _this.offsetFollowMotion=new Tonyu.classes.user.OffsetFollowMotion({offsetX: 0,offsetY: Tonyu.globals.$H*0.1,target: _this.badItem});
                
              }
              if (_this.badItem) {
                _this.shakeMotion=new Tonyu.classes.user.ShakeMotion({firstX: _this.badItem.x,firstY: _this.badItem.y});
                _this.roundTripMotion=new Tonyu.classes.user.RoundTripMotion({firstX: _this.badItem.x,firstY: _this.badItem.y});
                _this.roundTripMotion.sp=Tonyu.globals.$W*0.005;
                
              }
              _this.rocketItem=new Tonyu.classes.user.RocketItem({x: Tonyu.globals.$W*0.5,y: 0});
              _this.player=new Tonyu.classes.user.Player({speed: Tonyu.globals.$W*0.008,scaleX: Tonyu.globals.$W*0.001,gunMode: false,jump: false});
              Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_67);
            case 2:
              _this.fiber$nextScene(_thread, _this.player.getApeealEnd());
              __pc=3;return;
            case 3:
              
              _this.badItemPos;
              _this.cr = _this.player.crashTo(_this.rocketItem);
              
              if (_this.cr) {
                _this.rocketItem.die();
                new Tonyu.classes.user.CountDownLabel({player: _this.player});
                
              }
              ;
              
              if (_this.player.y<Tonyu.globals.$H*0.4) {
                _this.playerGoTop=true;
                
              }
              if (_this.player.apeealTime>=0&&_this.playerGoTop&&_this.player.y>Tonyu.globals.$H*0.8) {
                _this.player.apeealTime=- 1;
                
              }
              if (_this.badItem) {
                _this.badItem.crashScale=0.8;
                _this.shakePos=_this.shakeMotion.next();
                if (Tonyu.globals.$difficulty===1) {
                  _this.badItem.extend(_this.shakePos);
                }
                if (Tonyu.globals.$difficulty===2) {
                  _this.shakeMotion.firstX=1;
                  _this.roundTripPos=_this.roundTripMotion.next();
                  _this.badItem.extend({x: _this.shakePos.x+_this.roundTripPos.x,y: _this.shakePos.y});
                  
                }
                _this.badItemStand.extend(_this.offsetFollowMotion.next());
                
              }
              if (_this.item1.isDead()&&_this.item2.isDead()&&_this.item3.isDead()) {
                _this.all(Tonyu.classes.user.Items).die();
                
              }
              _this.fiber$update(_thread);
              __pc=4;return;
            case 4:
              
              __pc=2;break;
            case 5     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"cr":{},"bg":{},"countDown":{},"frame":{},"playerGoTop":{},"goodItemScaleX":{},"badItemScaleX":{},"item1":{},"item2":{},"item3":{},"badItem":{},"badItemStand":{},"offsetFollowMotion":{},"shakeMotion":{},"roundTripMotion":{},"rocketItem":{},"badItemPos":{},"shakePos":{},"roundTripPos":{}}}
});
Tonyu.klass.define({
  fullName: 'user.RotItemScene',
  shortName: 'RotItemScene',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.user.MainProcLibs],
  methods: function (__superClass) {
    return {
      main :function _trc_RotItemScene_main() {
        "use strict";
        var _this=this;
        
        _this.init();
        _this.frame=119;
        _this.danmakuLeftPos={x: Tonyu.globals.$W*0.2,y: Tonyu.globals.$H*0.2};
        _this.danmakuRightPos={x: Tonyu.globals.$W*0.8,y: Tonyu.globals.$H*0.2};
        Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_79,true);
        _this.bg=new Tonyu.classes.user.BGBase({BGImg: Tonyu.globals.$pat_rot_item_scene_bg,scaleX: Tonyu.globals.$scrScale});
        if (Tonyu.globals.$difficulty===0) {
          _this.baseItemScale=Tonyu.globals.$scrScale*0.5;
          _this.rotItemScale=Tonyu.globals.$scrScale*0.2;
          
        } else {
          if (Tonyu.globals.$difficulty>=1) {
            _this.baseItemScale=Tonyu.globals.$scrScale*0.3;
            _this.rotItemScale=Tonyu.globals.$scrScale*0.5;
            
          }
        }
        _this.itemType=0;
        _this.lastItemDie=false;
        _this.player=new Tonyu.classes.user.Player({speed: Tonyu.globals.$W*0.008});
        if (Tonyu.globals.$difficulty<2) {
          _this.nowRotItem=new Tonyu.classes.user.FollRotItem({baseItemX: Tonyu.globals.$W*0.5,baseItemY: Tonyu.globals.$H*0.15,itemType: _this.itemType,baseItemScale: _this.baseItemScale,rotItemScale: _this.rotItemScale});
          
        } else {
          if (Tonyu.globals.$difficulty>=2) {
            _this.nowRotItem1=new Tonyu.classes.user.HomingRotItem({target: _this.player,firstPos: _this.danmakuLeftPos,baseItemScale: _this.baseItemScale,rotItemScale: _this.rotItemScale,baseItemType: _this.itemType,rotItmeType: _this.itemType});
            _this.nowRotItem2=new Tonyu.classes.user.HomingRotItem({target: _this.player,firstPos: _this.danmakuRightPos,baseItemScale: _this.baseItemScale,rotItemScale: _this.rotItemScale,baseItemType: _this.itemType,rotItmeType: _this.itemType});
            
          }
        }
        ;
        
        while (true) {
          Tonyu.checkLoop();
          _this.frame++;
          _this.nextScene(_this.player.getApeealEnd());
          if (_this.itemType>=2&&_this.player.apeealTime>=0) {
            if (Tonyu.globals.$difficulty<2) {
              if (_this.nowRotItem.getBaseItemDead()) {
                _this.lastItemDie=true;
              }
              
            } else {
              if (Tonyu.globals.$difficulty>=2) {
                if (_this.nowRotItem1.followActor.isDead()||_this.nowRotItem2.followActor.isDead()) {
                  _this.lastItemDie=true;
                }
                
              }
            }
            ;
            
            if (_this.lastItemDie) {
              if (_this.player.followItemList.length-1<2) {
                _this.player.apeealTime=- 1;
                
              }
              ;
              
              
            }
            
          }
          if (_this.nowRotItem) {
            if (_this.nowRotItem.followActorOut) {
              _this.all(Tonyu.classes.user.Items).die();
            }
            
          }
          if (_this.nowRotItem1&&_this.nowRotItem2&&_this.nowRotItem1.followActor&&_this.nowRotItem2.followActor) {
            if (_this.nowRotItem1.followActor.isDead()||_this.nowRotItem2.followActor.isDead()) {
              _this.all(Tonyu.classes.user.Items).die();
            }
            if (_this.nowRotItem1.followActorOut||_this.nowRotItem2.followActorOut) {
              _this.all(Tonyu.classes.user.Items).die();
            }
            
          }
          if (_this.itemType<2) {
            if (Tonyu.globals.$difficulty<2) {
              _this.follRotItem();
              
            } else {
              if (Tonyu.globals.$difficulty>=2) {
                _this.rotItem();
                
              }
            }
            ;
            
            
          }
          _this.update();
          
        }
      },
      fiber$main :function _trc_RotItemScene_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_RotItemScene_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$init(_thread);
              __pc=1;return;
            case 1:
              
              _this.frame=119;
              _this.danmakuLeftPos={x: Tonyu.globals.$W*0.2,y: Tonyu.globals.$H*0.2};
              _this.danmakuRightPos={x: Tonyu.globals.$W*0.8,y: Tonyu.globals.$H*0.2};
              Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_79,true);
              _this.bg=new Tonyu.classes.user.BGBase({BGImg: Tonyu.globals.$pat_rot_item_scene_bg,scaleX: Tonyu.globals.$scrScale});
              if (Tonyu.globals.$difficulty===0) {
                _this.baseItemScale=Tonyu.globals.$scrScale*0.5;
                _this.rotItemScale=Tonyu.globals.$scrScale*0.2;
                
              } else {
                if (Tonyu.globals.$difficulty>=1) {
                  _this.baseItemScale=Tonyu.globals.$scrScale*0.3;
                  _this.rotItemScale=Tonyu.globals.$scrScale*0.5;
                  
                }
              }
              _this.itemType=0;
              _this.lastItemDie=false;
              _this.player=new Tonyu.classes.user.Player({speed: Tonyu.globals.$W*0.008});
              if (Tonyu.globals.$difficulty<2) {
                _this.nowRotItem=new Tonyu.classes.user.FollRotItem({baseItemX: Tonyu.globals.$W*0.5,baseItemY: Tonyu.globals.$H*0.15,itemType: _this.itemType,baseItemScale: _this.baseItemScale,rotItemScale: _this.rotItemScale});
                
              } else {
                if (Tonyu.globals.$difficulty>=2) {
                  _this.nowRotItem1=new Tonyu.classes.user.HomingRotItem({target: _this.player,firstPos: _this.danmakuLeftPos,baseItemScale: _this.baseItemScale,rotItemScale: _this.rotItemScale,baseItemType: _this.itemType,rotItmeType: _this.itemType});
                  _this.nowRotItem2=new Tonyu.classes.user.HomingRotItem({target: _this.player,firstPos: _this.danmakuRightPos,baseItemScale: _this.baseItemScale,rotItemScale: _this.rotItemScale,baseItemType: _this.itemType,rotItmeType: _this.itemType});
                  
                }
              }
              ;
              
            case 2:
              _this.frame++;
              _this.fiber$nextScene(_thread, _this.player.getApeealEnd());
              __pc=3;return;
            case 3:
              
              if (_this.itemType>=2&&_this.player.apeealTime>=0) {
                if (Tonyu.globals.$difficulty<2) {
                  if (_this.nowRotItem.getBaseItemDead()) {
                    _this.lastItemDie=true;
                  }
                  
                } else {
                  if (Tonyu.globals.$difficulty>=2) {
                    if (_this.nowRotItem1.followActor.isDead()||_this.nowRotItem2.followActor.isDead()) {
                      _this.lastItemDie=true;
                    }
                    
                  }
                }
                ;
                
                if (_this.lastItemDie) {
                  if (_this.player.followItemList.length-1<2) {
                    _this.player.apeealTime=- 1;
                    
                  }
                  ;
                  
                  
                }
                
              }
              if (_this.nowRotItem) {
                if (_this.nowRotItem.followActorOut) {
                  _this.all(Tonyu.classes.user.Items).die();
                }
                
              }
              if (_this.nowRotItem1&&_this.nowRotItem2&&_this.nowRotItem1.followActor&&_this.nowRotItem2.followActor) {
                if (_this.nowRotItem1.followActor.isDead()||_this.nowRotItem2.followActor.isDead()) {
                  _this.all(Tonyu.classes.user.Items).die();
                }
                if (_this.nowRotItem1.followActorOut||_this.nowRotItem2.followActorOut) {
                  _this.all(Tonyu.classes.user.Items).die();
                }
                
              }
              if (!(_this.itemType<2)) { __pc=9     ; break; }
              if (!(Tonyu.globals.$difficulty<2)) { __pc=5     ; break; }
              _this.fiber$follRotItem(_thread);
              __pc=4;return;
            case 4:
              
              __pc=8     ;break;
            case 5     :
              if (!(Tonyu.globals.$difficulty>=2)) { __pc=7     ; break; }
              _this.fiber$rotItem(_thread);
              __pc=6;return;
            case 6:
              
            case 7     :
              
            case 8     :
              
              ;
              
            case 9     :
              
              _this.fiber$update(_thread);
              __pc=10;return;
            case 10:
              
              __pc=2;break;
            case 11    :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      follRotItem :function _trc_RotItemScene_follRotItem() {
        "use strict";
        var _this=this;
        
        if (_this.nowRotItem.getBaseItemDead()) {
          _this.itemType++;
          if (_this.itemType<3) {
            Tonyu.globals.$sound.playSE(Tonyu.globals.$se_rakurai,128,0,4);
            new Tonyu.classes.kernel.FadeEffect({type: "in",duration: 15,fillStyle: "black"});
            _this.nowRotItem=new Tonyu.classes.user.FollRotItem({baseItemX: Tonyu.globals.$W*0.5,baseItemY: Tonyu.globals.$H*0.15,itemType: _this.itemType,baseItemScale: _this.baseItemScale,rotItemScale: _this.rotItemScale});
            
          }
          
        }
      },
      fiber$follRotItem :function _trc_RotItemScene_f_follRotItem(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        if (_this.nowRotItem.getBaseItemDead()) {
          _this.itemType++;
          if (_this.itemType<3) {
            Tonyu.globals.$sound.playSE(Tonyu.globals.$se_rakurai,128,0,4);
            new Tonyu.classes.kernel.FadeEffect({type: "in",duration: 15,fillStyle: "black"});
            _this.nowRotItem=new Tonyu.classes.user.FollRotItem({baseItemX: Tonyu.globals.$W*0.5,baseItemY: Tonyu.globals.$H*0.15,itemType: _this.itemType,baseItemScale: _this.baseItemScale,rotItemScale: _this.rotItemScale});
            
          }
          
        }
        
        _thread.retVal=_this;return;
      },
      rotItem :function _trc_RotItemScene_rotItem() {
        "use strict";
        var _this=this;
        
        if (_this.nowRotItem1.followActor==null||_this.nowRotItem2.followActor==null) {
          return _this;
        }
        if (! _this.nowRotItem1.followActor.isDead()||! _this.nowRotItem2.followActor.isDead()) {
          return _this;
        }
        _this.itemType++;
        if (_this.itemType>3) {
          return _this;
        }
        Tonyu.globals.$sound.playSE(Tonyu.globals.$se_rakurai,128,0,4);
        new Tonyu.classes.kernel.FadeEffect({type: "in",duration: 15,fillStyle: "black"});
        _this.nowRotItem1=new Tonyu.classes.user.HomingRotItem({target: _this.player,firstPos: _this.danmakuLeftPos,baseItemScale: _this.baseItemScale,rotItemScale: _this.rotItemScale,baseItemType: _this.itemType,rotItmeType: _this.itemType});
        _this.nowRotItem2=new Tonyu.classes.user.HomingRotItem({target: _this.player,firstPos: _this.danmakuRightPos,baseItemScale: _this.baseItemScale,rotItemScale: _this.rotItemScale,baseItemType: _this.itemType,rotItmeType: _this.itemType});
      },
      fiber$rotItem :function _trc_RotItemScene_f_rotItem(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        if (_this.nowRotItem1.followActor==null||_this.nowRotItem2.followActor==null) {
          _thread.retVal=_this;return;
          
        }
        if (! _this.nowRotItem1.followActor.isDead()||! _this.nowRotItem2.followActor.isDead()) {
          _thread.retVal=_this;return;
          
        }
        _this.itemType++;
        if (_this.itemType>3) {
          _thread.retVal=_this;return;
          
        }
        Tonyu.globals.$sound.playSE(Tonyu.globals.$se_rakurai,128,0,4);
        new Tonyu.classes.kernel.FadeEffect({type: "in",duration: 15,fillStyle: "black"});
        _this.nowRotItem1=new Tonyu.classes.user.HomingRotItem({target: _this.player,firstPos: _this.danmakuLeftPos,baseItemScale: _this.baseItemScale,rotItemScale: _this.rotItemScale,baseItemType: _this.itemType,rotItmeType: _this.itemType});
        _this.nowRotItem2=new Tonyu.classes.user.HomingRotItem({target: _this.player,firstPos: _this.danmakuRightPos,baseItemScale: _this.baseItemScale,rotItemScale: _this.rotItemScale,baseItemType: _this.itemType,rotItmeType: _this.itemType});
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"follRotItem":{"nowait":false},"rotItem":{"nowait":false}},"fields":{"frame":{},"danmakuLeftPos":{},"danmakuRightPos":{},"bg":{},"baseItemScale":{},"rotItemScale":{},"itemType":{},"lastItemDie":{},"nowRotItem":{},"nowRotItem1":{},"nowRotItem2":{}}}
});
Tonyu.klass.define({
  fullName: 'user.RotMotion',
  shortName: 'RotMotion',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_RotMotion_main() {
        "use strict";
        var _this=this;
        
        _this.firstX;
        _this.firstY;
        _this.sp;
        _this.radius;
        _this.angle;
      },
      fiber$main :function _trc_RotMotion_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.firstX;
        _this.firstY;
        _this.sp;
        _this.radius;
        _this.angle;
        
        _thread.retVal=_this;return;
      },
      next :function _trc_RotMotion_next() {
        "use strict";
        var _this=this;
        var pos;
        
        pos = {x: 0,y: 0};
        
        if (_this.firstX!=null&&_this.firstY!=null) {
          _this.angle+=_this.sp;
          pos.x=_this.firstX+_this.cos(_this.angle)*_this.radius;
          pos.y=_this.firstY+_this.sin(_this.angle)*_this.radius;
          
        }
        return pos;
      },
      fiber$next :function _trc_RotMotion_f_next(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var pos;
        
        pos = {x: 0,y: 0};
        
        if (_this.firstX!=null&&_this.firstY!=null) {
          _this.angle+=_this.sp;
          pos.x=_this.firstX+_this.cos(_this.angle)*_this.radius;
          pos.y=_this.firstY+_this.sin(_this.angle)*_this.radius;
          
        }
        _thread.retVal=pos;return;
        
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"next":{"nowait":false}},"fields":{"firstX":{},"firstY":{},"sp":{},"angle":{}}}
});
Tonyu.klass.define({
  fullName: 'user.RoundTripMotion',
  shortName: 'RoundTripMotion',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_RoundTripMotion_main() {
        "use strict";
        var _this=this;
        
        _this.firstX;
        _this.firstY;
        _this.sp;
        _this.angle=1;
        _this.radCos=Tonyu.globals.$W*0.5;
      },
      fiber$main :function _trc_RoundTripMotion_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.firstX;
        _this.firstY;
        _this.sp;
        _this.angle=1;
        _this.radCos=Tonyu.globals.$W*0.5;
        
        _thread.retVal=_this;return;
      },
      next :function _trc_RoundTripMotion_next(targetAct) {
        "use strict";
        var _this=this;
        
        _this.angle+=_this.sp;
        _this.pos={x: 0,y: 0};
        if (_this.firstX&&_this.firstY) {
          _this.pos.x=_this.firstX+_this.cos(_this.angle)*_this.radCos;
          _this.pos.y=_this.firstY;
          
        }
        return _this.pos;
      },
      fiber$next :function _trc_RoundTripMotion_f_next(_thread,targetAct) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.angle+=_this.sp;
        _this.pos={x: 0,y: 0};
        if (_this.firstX&&_this.firstY) {
          _this.pos.x=_this.firstX+_this.cos(_this.angle)*_this.radCos;
          _this.pos.y=_this.firstY;
          
        }
        _thread.retVal=_this.pos;return;
        
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"next":{"nowait":false}},"fields":{"firstX":{},"firstY":{},"sp":{},"angle":{},"radCos":{},"pos":{}}}
});
Tonyu.klass.define({
  fullName: 'user.SentakuScene',
  shortName: 'SentakuScene',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.user.MainProcLibs],
  methods: function (__superClass) {
    return {
      main :function _trc_SentakuScene_main() {
        "use strict";
        var _this=this;
        
        new Tonyu.classes.kernel.T2World({gravity: 0});
        _this.init();
        _this.frame=0;
        _this.BG=new Tonyu.classes.kernel.Actor({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.5,p: Tonyu.globals.$pat_osouji_scene_bg_gw,zOrder: 10});
        _this.ceiling.scaleY*=7;
        _this.ceiling.y=0;
        new Tonyu.classes.user.Floor({x: Tonyu.globals.$W,y: Tonyu.globals.$H,scaleX: Tonyu.globals.$W*0.1,scaleY: 1,alpha: 0});
        if (Tonyu.globals.$difficulty===0) {
          _this.badItemScale=Tonyu.globals.$scrScale*1.2;
          _this.sp=Tonyu.globals.$W*0.0025;
          
        }
        ;
        
        if (Tonyu.globals.$difficulty===1) {
          _this.badItemScale=Tonyu.globals.$scrScale*0.8;
          _this.sp=Tonyu.globals.$W*0.005;
          
        }
        ;
        
        if (Tonyu.globals.$difficulty===2) {
          _this.badItemScale=Tonyu.globals.$scrScale*0.55;
          _this.sp=Tonyu.globals.$W*0.01;
          
        }
        ;
        
        _this.player=new Tonyu.classes.user.Player({speed: Tonyu.globals.$W*0.008,scaleX: Tonyu.globals.$W*0.001,gunMode: false,jump: false,notMove: true});
        _this.sentaku=new Tonyu.classes.user.SentakuKi({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.25});
        _this.roundTripMotion=new Tonyu.classes.user.RoundTripMotion({firstX: Tonyu.globals.$W*0.5,firstY: Tonyu.globals.$H*0.25,sp: 1});
        _this.badItemList=[];
        _this.badItemList[0]=new Tonyu.classes.user.SentakuItem({x: Tonyu.globals.$W*0.2,y: Tonyu.globals.$H*0.5,moveX: Tonyu.globals.$W*0.2,moveY: Tonyu.globals.$H*0.5,itemType: 0,badItem: true,density: 0.1,restitution: 0.1,scaleX: _this.badItemScale,sp: _this.sp,sentakuKi: _this.sentaku,player: _this.player});
        _this.badItemList[1]=new Tonyu.classes.user.SentakuItem({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.5,moveX: Tonyu.globals.$W*0.5,moveY: Tonyu.globals.$H*0.5,itemType: 1,badItem: true,density: 0.1,restitution: 0.1,scaleX: _this.badItemScale,sp: _this.sp,sentakuKi: _this.sentaku,player: _this.player});
        _this.badItemList[2]=new Tonyu.classes.user.SentakuItem({x: Tonyu.globals.$W*0.8,y: Tonyu.globals.$H*0.5,moveX: Tonyu.globals.$W*0.8,moveY: Tonyu.globals.$H*0.5,itemType: 2,badItem: true,density: 0.1,restitution: 0.1,scaleX: _this.badItemScale,sp: _this.sp,sentakuKi: _this.sentaku,player: _this.player});
        _this.gun=new Tonyu.classes.user.Gun({x: Tonyu.globals.$W*0.5,y: 0});
        if (Tonyu.globals.$difficulty<=1) {
          _this.sentaku.scaleX=Tonyu.globals.$W*0.0008;
          
        } else {
          _this.sentaku.scaleX=Tonyu.globals.$W*0.0003;
          
        }
        Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_130,true);
        while (true) {
          Tonyu.checkLoop();
          if (_this.player.crashTo(_this.gun)) {
            Tonyu.globals.$sound.playSE(Tonyu.globals.$se_kamaeru);
            _this.gun.die();
            _this.player.gunMode=true;
            
          }
          _this.bullet=_this.ceiling.crashTo(Tonyu.classes.user.Bullet);
          if (_this.bullet) {
            _this.bullet.die();
          }
          _this.badItemList.map((function anonymous_1871(item) {
            
            if (item.y<- (Tonyu.globals.$W*0.2)&&_this.player.apeealTime>=- 1) {
              _this.player.apeealTime=- 1;
              
            }
            ;
            
          }));
          if (Tonyu.globals.$difficulty>0) {
            _this.sentaku.extend(_this.roundTripMotion.next());
            
          }
          _this.frame++;
          _this.nextScene(_this.player.apeealEnd);
          _this.update();
          
        }
      },
      fiber$main :function _trc_SentakuScene_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        new Tonyu.classes.kernel.T2World({gravity: 0});
        
        _thread.enter(function _trc_SentakuScene_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$init(_thread);
              __pc=1;return;
            case 1:
              
              _this.frame=0;
              _this.BG=new Tonyu.classes.kernel.Actor({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.5,p: Tonyu.globals.$pat_osouji_scene_bg_gw,zOrder: 10});
              _this.ceiling.scaleY*=7;
              _this.ceiling.y=0;
              new Tonyu.classes.user.Floor({x: Tonyu.globals.$W,y: Tonyu.globals.$H,scaleX: Tonyu.globals.$W*0.1,scaleY: 1,alpha: 0});
              if (Tonyu.globals.$difficulty===0) {
                _this.badItemScale=Tonyu.globals.$scrScale*1.2;
                _this.sp=Tonyu.globals.$W*0.0025;
                
              }
              ;
              
              if (Tonyu.globals.$difficulty===1) {
                _this.badItemScale=Tonyu.globals.$scrScale*0.8;
                _this.sp=Tonyu.globals.$W*0.005;
                
              }
              ;
              
              if (Tonyu.globals.$difficulty===2) {
                _this.badItemScale=Tonyu.globals.$scrScale*0.55;
                _this.sp=Tonyu.globals.$W*0.01;
                
              }
              ;
              
              _this.player=new Tonyu.classes.user.Player({speed: Tonyu.globals.$W*0.008,scaleX: Tonyu.globals.$W*0.001,gunMode: false,jump: false,notMove: true});
              _this.sentaku=new Tonyu.classes.user.SentakuKi({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.25});
              _this.roundTripMotion=new Tonyu.classes.user.RoundTripMotion({firstX: Tonyu.globals.$W*0.5,firstY: Tonyu.globals.$H*0.25,sp: 1});
              _this.badItemList=[];
              _this.badItemList[0]=new Tonyu.classes.user.SentakuItem({x: Tonyu.globals.$W*0.2,y: Tonyu.globals.$H*0.5,moveX: Tonyu.globals.$W*0.2,moveY: Tonyu.globals.$H*0.5,itemType: 0,badItem: true,density: 0.1,restitution: 0.1,scaleX: _this.badItemScale,sp: _this.sp,sentakuKi: _this.sentaku,player: _this.player});
              _this.badItemList[1]=new Tonyu.classes.user.SentakuItem({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.5,moveX: Tonyu.globals.$W*0.5,moveY: Tonyu.globals.$H*0.5,itemType: 1,badItem: true,density: 0.1,restitution: 0.1,scaleX: _this.badItemScale,sp: _this.sp,sentakuKi: _this.sentaku,player: _this.player});
              _this.badItemList[2]=new Tonyu.classes.user.SentakuItem({x: Tonyu.globals.$W*0.8,y: Tonyu.globals.$H*0.5,moveX: Tonyu.globals.$W*0.8,moveY: Tonyu.globals.$H*0.5,itemType: 2,badItem: true,density: 0.1,restitution: 0.1,scaleX: _this.badItemScale,sp: _this.sp,sentakuKi: _this.sentaku,player: _this.player});
              _this.gun=new Tonyu.classes.user.Gun({x: Tonyu.globals.$W*0.5,y: 0});
              if (Tonyu.globals.$difficulty<=1) {
                _this.sentaku.scaleX=Tonyu.globals.$W*0.0008;
                
              } else {
                _this.sentaku.scaleX=Tonyu.globals.$W*0.0003;
                
              }
              Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_130,true);
            case 2:
              if (_this.player.crashTo(_this.gun)) {
                Tonyu.globals.$sound.playSE(Tonyu.globals.$se_kamaeru);
                _this.gun.die();
                _this.player.gunMode=true;
                
              }
              _this.bullet=_this.ceiling.crashTo(Tonyu.classes.user.Bullet);
              if (_this.bullet) {
                _this.bullet.die();
              }
              _this.badItemList.map((function anonymous_1871(item) {
                
                if (item.y<- (Tonyu.globals.$W*0.2)&&_this.player.apeealTime>=- 1) {
                  _this.player.apeealTime=- 1;
                  
                }
                ;
                
              }));
              if (Tonyu.globals.$difficulty>0) {
                _this.sentaku.extend(_this.roundTripMotion.next());
                
              }
              _this.frame++;
              _this.fiber$nextScene(_thread, _this.player.apeealEnd);
              __pc=3;return;
            case 3:
              
              _this.fiber$update(_thread);
              __pc=4;return;
            case 4:
              
              __pc=2;break;
            case 5     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"frame":{},"BG":{},"badItemScale":{},"sp":{},"sentaku":{},"roundTripMotion":{},"badItemList":{},"gun":{},"bullet":{}}}
});
Tonyu.klass.define({
  fullName: 'user.ShakeMotion',
  shortName: 'ShakeMotion',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_ShakeMotion_main() {
        "use strict";
        var _this=this;
        
        _this.firstX;
        _this.firstY;
        _this.angle=1;
        _this.radCos=Tonyu.globals.$W*_this.rnd(2,5)*0.01;
        _this.radSin=Tonyu.globals.$W*_this.rnd(2,5)*0.01;
      },
      fiber$main :function _trc_ShakeMotion_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.firstX;
        _this.firstY;
        _this.angle=1;
        _this.radCos=Tonyu.globals.$W*_this.rnd(2,5)*0.01;
        _this.radSin=Tonyu.globals.$W*_this.rnd(2,5)*0.01;
        
        _thread.retVal=_this;return;
      },
      next :function _trc_ShakeMotion_next() {
        "use strict";
        var _this=this;
        
        _this.angle+=50;
        _this.pos={x: 0,y: 0};
        if (_this.firstX&&_this.firstY) {
          _this.radCos=Tonyu.globals.$W*_this.rnd(2,5)*0.01;
          _this.radSin=Tonyu.globals.$W*_this.rnd(2,5)*0.01;
          _this.pos.x=_this.firstX+_this.cos(_this.angle)*_this.radCos;
          _this.pos.y=_this.firstY+_this.sin(_this.angle)*_this.radSin;
          
        }
        return _this.pos;
      },
      fiber$next :function _trc_ShakeMotion_f_next(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.angle+=50;
        _this.pos={x: 0,y: 0};
        if (_this.firstX&&_this.firstY) {
          _this.radCos=Tonyu.globals.$W*_this.rnd(2,5)*0.01;
          _this.radSin=Tonyu.globals.$W*_this.rnd(2,5)*0.01;
          _this.pos.x=_this.firstX+_this.cos(_this.angle)*_this.radCos;
          _this.pos.y=_this.firstY+_this.sin(_this.angle)*_this.radSin;
          
        }
        _thread.retVal=_this.pos;return;
        
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"next":{"nowait":false}},"fields":{"firstX":{},"firstY":{},"angle":{},"radCos":{},"radSin":{},"pos":{}}}
});
Tonyu.klass.define({
  fullName: 'user.Stand',
  shortName: 'Stand',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Stand_main() {
        "use strict";
        var _this=this;
        
        _this.p=Tonyu.globals.$pat_rocket_scene_stand+0;
        _this.frame=0;
        _this.imgNo=0;
        while (true) {
          Tonyu.checkLoop();
          _this.frame++;
          if (! (_this.frame%6)) {
            _this.imgNo++;
          }
          _this.p=Tonyu.globals.$pat_rocket_scene_stand+_this.imgNo%3;
          _this.update();
          
        }
      },
      fiber$main :function _trc_Stand_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.p=Tonyu.globals.$pat_rocket_scene_stand+0;
        _this.frame=0;
        _this.imgNo=0;
        
        _thread.enter(function _trc_Stand_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              _this.frame++;
              if (! (_this.frame%6)) {
                _this.imgNo++;
              }
              _this.p=Tonyu.globals.$pat_rocket_scene_stand+_this.imgNo%3;
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"frame":{},"imgNo":{}}}
});
Tonyu.klass.define({
  fullName: 'user.Start',
  shortName: 'Start',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.user.MainProcLibs],
  methods: function (__superClass) {
    return {
      main :function _trc_Start_main() {
        "use strict";
        var _this=this;
        
        _this.init();
        _this.nextScene(true);
      },
      fiber$main :function _trc_Start_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_Start_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$init(_thread);
              __pc=1;return;
            case 1:
              
              _this.fiber$nextScene(_thread, true);
              __pc=2;return;
            case 2:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{}}
});
Tonyu.klass.define({
  fullName: 'user.TestScene',
  shortName: 'TestScene',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.user.MainProcLibs],
  methods: function (__superClass) {
    return {
      main :function _trc_TestScene_main() {
        "use strict";
        var _this=this;
        
        _this.shuffleList=_this.shuffle([0,1,2]);
        _this.print(_this.shuffleList[0],_this.shuffleList[1],_this.shuffleList[2]);
      },
      fiber$main :function _trc_TestScene_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_TestScene_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$shuffle(_thread, [0,1,2]);
              __pc=1;return;
            case 1:
              _this.shuffleList=_thread.retVal;
              
              _this.print(_this.shuffleList[0],_this.shuffleList[1],_this.shuffleList[2]);
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"shuffleList":{}}}
});
Tonyu.klass.define({
  fullName: 'user.TimeSale',
  shortName: 'TimeSale',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_TimeSale_main() {
        "use strict";
        var _this=this;
        
        _this.time=720;
        _this.timeOver=false;
        _this.label=new Tonyu.classes.kernel.Label({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.5,text: "タイムセール終了まで: ",size: Tonyu.globals.$scrScale*80,fillStyle: "red"});
        while (true) {
          Tonyu.checkLoop();
          _this.time--;
          if (_this.time>0) {
            _this.label.text="タイムセール終了まで: "+_this.time;
            
          } else {
            _this.timeOver=true;
            _this.label.die();
            
          }
          _this.update();
          
        }
      },
      fiber$main :function _trc_TimeSale_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.time=720;
        _this.timeOver=false;
        _this.label=new Tonyu.classes.kernel.Label({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.5,text: "タイムセール終了まで: ",size: Tonyu.globals.$scrScale*80,fillStyle: "red"});
        
        _thread.enter(function _trc_TimeSale_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              _this.time--;
              if (_this.time>0) {
                _this.label.text="タイムセール終了まで: "+_this.time;
                
              } else {
                _this.timeOver=true;
                _this.label.die();
                
              }
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"time":{},"timeOver":{},"label":{}}}
});
Tonyu.klass.define({
  fullName: 'user.Rogo',
  shortName: 'Rogo',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Rogo_main() {
        "use strict";
        var _this=this;
        
        _this.frame=0;
        _this.imgList=[Tonyu.globals.$pat_rogo0,Tonyu.globals.$pat_rogo0,Tonyu.globals.$pat_rogo0,Tonyu.globals.$pat_rogo0,Tonyu.globals.$pat_rogo1,Tonyu.globals.$pat_rogo1,Tonyu.globals.$pat_rogo1,Tonyu.globals.$pat_rogo1,Tonyu.globals.$pat_rogo2,Tonyu.globals.$pat_rogo2,Tonyu.globals.$pat_rogo2,Tonyu.globals.$pat_rogo2,Tonyu.globals.$pat_rogo3,Tonyu.globals.$pat_rogo3,Tonyu.globals.$pat_rogo3,Tonyu.globals.$pat_rogo3,Tonyu.globals.$pat_rogo4,Tonyu.globals.$pat_rogo4,Tonyu.globals.$pat_rogo4,Tonyu.globals.$pat_rogo4];
        while (true) {
          Tonyu.checkLoop();
          _this.frame++;
          _this.p=_this.imgList[_this.frame%20];
          _this.update();
          
        }
      },
      fiber$main :function _trc_Rogo_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.frame=0;
        _this.imgList=[Tonyu.globals.$pat_rogo0,Tonyu.globals.$pat_rogo0,Tonyu.globals.$pat_rogo0,Tonyu.globals.$pat_rogo0,Tonyu.globals.$pat_rogo1,Tonyu.globals.$pat_rogo1,Tonyu.globals.$pat_rogo1,Tonyu.globals.$pat_rogo1,Tonyu.globals.$pat_rogo2,Tonyu.globals.$pat_rogo2,Tonyu.globals.$pat_rogo2,Tonyu.globals.$pat_rogo2,Tonyu.globals.$pat_rogo3,Tonyu.globals.$pat_rogo3,Tonyu.globals.$pat_rogo3,Tonyu.globals.$pat_rogo3,Tonyu.globals.$pat_rogo4,Tonyu.globals.$pat_rogo4,Tonyu.globals.$pat_rogo4,Tonyu.globals.$pat_rogo4];
        
        _thread.enter(function _trc_Rogo_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              _this.frame++;
              _this.p=_this.imgList[_this.frame%20];
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"frame":{},"imgList":{}}}
});
Tonyu.klass.define({
  fullName: 'user.UI',
  shortName: 'UI',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_UI_main() {
        "use strict";
        var _this=this;
        
        _this.rogo=new Tonyu.classes.user.Rogo({x: Tonyu.globals.$W*0.65,y: Tonyu.globals.$H*0.0375});
        _this.rogo.zOrder=- 5;
        _this.face=new Tonyu.classes.kernel.Actor({x: Tonyu.globals.$W*0.15,y: Tonyu.globals.$H*0.06,p: Tonyu.globals.$pat_ojisan_face,scaleX: Tonyu.globals.$W*0.0008});
        _this.face.zOrder=- 5;
        new Tonyu.classes.kernel.Actor({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.075,width: Tonyu.globals.$W,height: Tonyu.globals.$H*0.15,fillStyle: "black",alpha: 180});
        _this.scoreLabel=new Tonyu.classes.kernel.Label({x: Tonyu.globals.$W*0.635,y: Tonyu.globals.$H*0.1,template: "ノルマ達成まで: $norma",size: Tonyu.globals.$W*0.07});
        while (true) {
          Tonyu.checkLoop();
          _this.update();
          
        }
      },
      fiber$main :function _trc_UI_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.rogo=new Tonyu.classes.user.Rogo({x: Tonyu.globals.$W*0.65,y: Tonyu.globals.$H*0.0375});
        _this.rogo.zOrder=- 5;
        _this.face=new Tonyu.classes.kernel.Actor({x: Tonyu.globals.$W*0.15,y: Tonyu.globals.$H*0.06,p: Tonyu.globals.$pat_ojisan_face,scaleX: Tonyu.globals.$W*0.0008});
        _this.face.zOrder=- 5;
        new Tonyu.classes.kernel.Actor({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.075,width: Tonyu.globals.$W,height: Tonyu.globals.$H*0.15,fillStyle: "black",alpha: 180});
        _this.scoreLabel=new Tonyu.classes.kernel.Label({x: Tonyu.globals.$W*0.635,y: Tonyu.globals.$H*0.1,template: "ノルマ達成まで: $norma",size: Tonyu.globals.$W*0.07});
        
        _thread.enter(function _trc_UI_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"rogo":{},"face":{},"scoreLabel":{}}}
});
Tonyu.klass.define({
  fullName: 'user.ZigZagItem',
  shortName: 'ZigZagItem',
  namespace: 'user',
  superclass: Tonyu.classes.user.Items,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_ZigZagItem_main() {
        "use strict";
        var _this=this;
        
        _this.angleDeg;
        _this.XSP;
        _this.YSP;
        __superClass.prototype.main.apply( _this, []);
        while (true) {
          Tonyu.checkLoop();
          _this.angleDeg+=_this.XSP;
          _this.angleRad=_this.angleDeg*(Math.PI/180);
          _this.x=Tonyu.globals.$W*0.5+Math.cos(_this.angleRad)*Tonyu.globals.$W*0.75;
          _this.y+=_this.YSP;
          _this.update();
          
        }
      },
      fiber$main :function _trc_ZigZagItem_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.angleDeg;
        _this.XSP;
        _this.YSP;
        
        _thread.enter(function _trc_ZigZagItem_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              __superClass.prototype.fiber$main.apply( _this, [_thread]);
              __pc=1;return;
            case 1:
              
            case 2:
              _this.angleDeg+=_this.XSP;
              _this.angleRad=_this.angleDeg*(Math.PI/180);
              _this.x=Tonyu.globals.$W*0.5+Math.cos(_this.angleRad)*Tonyu.globals.$W*0.75;
              _this.y+=_this.YSP;
              _this.fiber$update(_thread);
              __pc=3;return;
            case 3:
              
              __pc=2;break;
            case 4     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"angleDeg":{},"XSP":{},"YSP":{},"angleRad":{}}}
});
Tonyu.klass.define({
  fullName: 'user.ZigZagItemScene',
  shortName: 'ZigZagItemScene',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.user.MainProcLibs],
  methods: function (__superClass) {
    return {
      main :function _trc_ZigZagItemScene_main() {
        "use strict";
        var _this=this;
        
        _this.init();
        _this.BG=new Tonyu.classes.user.BGBase4({BGImg: Tonyu.globals.$pat_zig_zag_item_scene_bg,scaleX: Tonyu.globals.$scrScale,zOrder: 9});
        _this.itemTypeList=[];
        _this.i=0;for (; _this.i<3 ; _this.i++) {
          Tonyu.checkLoop();
          {
            _this.itemTypeList[_this.i]=_this.rnd(3);
          }
        }
        _this.YSP=Tonyu.globals.$W*0.006;
        _this.XSP=Tonyu.globals.$W*0.006;
        if (Tonyu.globals.$difficulty===0||Tonyu.globals.$difficulty===2) {
          _this.itemScale=Tonyu.globals.$W*0.001;
          
        } else {
          if (Tonyu.globals.$difficulty===1) {
            _this.itemScale=Tonyu.globals.$W*0.002;
            
          }
        }
        _this.crashScale=0.6;
        _this.spawnPosY=Tonyu.globals.$H*0.2;
        _this.player=new Tonyu.classes.user.Player({speed: Tonyu.globals.$W*0.008,scaleX: Tonyu.globals.$W*0.001,gunMode: false});
        Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_65,true);
        _this.itemList=[];
        _this.badItemList=[];
        _this.motList=[];
        _this.itemType=0;
        if (Tonyu.globals.$difficulty<=1) {
          _this.spawnItem_TypeFollow();
        }
        if (Tonyu.globals.$difficulty===2) {
          _this.spawnItem_TypeRand();
        }
        while (true) {
          Tonyu.checkLoop();
          _this.nextScene(_this.player.getApeealEnd());
          if (_this.itemType>2) {
            continue;
            
          }
          if (Tonyu.globals.$difficulty<=1) {
            _this.motList.map((function anonymous_2114(mot,i) {
              
              _this.badItemList[i].extend(mot.next());
            }));
            
          }
          _this.itemList.map((function anonymous_2218(i) {
            
            i.crashScale=_this.crashScale;
            if (i.scaleX<_this.itemScale) {
              i.scaleX+=0.01;
              
            } else {
              i.scaleX=_this.itemScale;
              
            }
          }));
          if (_this.itemList[0].y>Tonyu.globals.$H*1.2) {
            _this.itemList[0].die();
          }
          if (_this.itemList[0].isDead()) {
            _this.itemType++;
            _this.itemList.map((function anonymous_2539(item) {
              
              item.die();
            }));
            _this.motItem=[];
            _this.itemList=[];
            if (Tonyu.globals.$difficulty<=1) {
              _this.spawnItem_TypeFollow();
            }
            if (Tonyu.globals.$difficulty===2) {
              _this.spawnItem_TypeRand();
            }
            
          }
          _this.update();
          
        }
      },
      fiber$main :function _trc_ZigZagItemScene_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_ZigZagItemScene_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$init(_thread);
              __pc=1;return;
            case 1:
              
              _this.BG=new Tonyu.classes.user.BGBase4({BGImg: Tonyu.globals.$pat_zig_zag_item_scene_bg,scaleX: Tonyu.globals.$scrScale,zOrder: 9});
              _this.itemTypeList=[];
              _this.i=0;for (; _this.i<3 ; _this.i++) {
                Tonyu.checkLoop();
                {
                  _this.itemTypeList[_this.i]=_this.rnd(3);
                }
              }
              _this.YSP=Tonyu.globals.$W*0.006;
              _this.XSP=Tonyu.globals.$W*0.006;
              if (Tonyu.globals.$difficulty===0||Tonyu.globals.$difficulty===2) {
                _this.itemScale=Tonyu.globals.$W*0.001;
                
              } else {
                if (Tonyu.globals.$difficulty===1) {
                  _this.itemScale=Tonyu.globals.$W*0.002;
                  
                }
              }
              _this.crashScale=0.6;
              _this.spawnPosY=Tonyu.globals.$H*0.2;
              _this.player=new Tonyu.classes.user.Player({speed: Tonyu.globals.$W*0.008,scaleX: Tonyu.globals.$W*0.001,gunMode: false});
              Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_65,true);
              _this.itemList=[];
              _this.badItemList=[];
              _this.motList=[];
              _this.itemType=0;
              if (!(Tonyu.globals.$difficulty<=1)) { __pc=3     ; break; }
              _this.fiber$spawnItem_TypeFollow(_thread);
              __pc=2;return;
            case 2:
              
            case 3     :
              
              if (!(Tonyu.globals.$difficulty===2)) { __pc=5     ; break; }
              _this.fiber$spawnItem_TypeRand(_thread);
              __pc=4;return;
            case 4:
              
            case 5     :
              
            case 6:
              _this.fiber$nextScene(_thread, _this.player.getApeealEnd());
              __pc=7;return;
            case 7:
              
              if (!(_this.itemType>2)) { __pc=8     ; break; }
              __pc=6; break;
              
            case 8     :
              
              if (Tonyu.globals.$difficulty<=1) {
                _this.motList.map((function anonymous_2114(mot,i) {
                  
                  _this.badItemList[i].extend(mot.next());
                }));
                
              }
              _this.itemList.map((function anonymous_2218(i) {
                
                i.crashScale=_this.crashScale;
                if (i.scaleX<_this.itemScale) {
                  i.scaleX+=0.01;
                  
                } else {
                  i.scaleX=_this.itemScale;
                  
                }
              }));
              if (_this.itemList[0].y>Tonyu.globals.$H*1.2) {
                _this.itemList[0].die();
              }
              if (!(_this.itemList[0].isDead())) { __pc=13    ; break; }
              _this.itemType++;
              _this.itemList.map((function anonymous_2539(item) {
                
                item.die();
              }));
              _this.motItem=[];
              _this.itemList=[];
              if (!(Tonyu.globals.$difficulty<=1)) { __pc=10    ; break; }
              _this.fiber$spawnItem_TypeFollow(_thread);
              __pc=9;return;
            case 9:
              
            case 10    :
              
              if (!(Tonyu.globals.$difficulty===2)) { __pc=12    ; break; }
              _this.fiber$spawnItem_TypeRand(_thread);
              __pc=11;return;
            case 11:
              
            case 12    :
              
            case 13    :
              
              _this.fiber$update(_thread);
              __pc=14;return;
            case 14:
              
              __pc=6;break;
            case 15    :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      spawnItem_TypeFollow :function _trc_ZigZagItemScene_spawnItem_TypeFollow() {
        "use strict";
        var _this=this;
        var list;
        var badItem;
        var mot;
        
        Tonyu.globals.$sound.playSE(Tonyu.globals.$se_out);
        list = [];
        
        _this.zigItem=new Tonyu.classes.user.ZigZagItem({x: Tonyu.globals.$W*0.5,y: _this.spawnPosY,itemType: _this.itemType,badItem: false,XSP: _this.XSP,YSP: _this.YSP,scaleX: _this.itemScale*0.5,crashScale: 0.5,angleDeg: _this.rnd(0,180)});
        list.push(_this.zigItem);
        _this.i=0;for (; _this.i<2 ; _this.i++) {
          Tonyu.checkLoop();
          {
            badItem = new Tonyu.classes.user.Items({x: 0,y: _this.spawnPosY,itemType: _this.itemType,badItem: true,scaleX: _this.itemScale*0.5,crashScale: 0.5});
            
            mot = new Tonyu.classes.user.OffsetFollowMotion({target: _this.zigItem,offsetX: (_this.i===0?- (Tonyu.globals.$W*0.5):(Tonyu.globals.$W*0.5)),offsetY: 0});
            
            _this.motList.push(mot);
            list.push(badItem);
            _this.badItemList.push(badItem);
          }
        }
        _this.itemList=list;
      },
      fiber$spawnItem_TypeFollow :function _trc_ZigZagItemScene_f_spawnItem_TypeFollow(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var list;
        var badItem;
        var mot;
        
        Tonyu.globals.$sound.playSE(Tonyu.globals.$se_out);
        list = [];
        
        _this.zigItem=new Tonyu.classes.user.ZigZagItem({x: Tonyu.globals.$W*0.5,y: _this.spawnPosY,itemType: _this.itemType,badItem: false,XSP: _this.XSP,YSP: _this.YSP,scaleX: _this.itemScale*0.5,crashScale: 0.5,angleDeg: _this.rnd(0,180)});
        list.push(_this.zigItem);
        _this.i=0;for (; _this.i<2 ; _this.i++) {
          Tonyu.checkLoop();
          {
            badItem = new Tonyu.classes.user.Items({x: 0,y: _this.spawnPosY,itemType: _this.itemType,badItem: true,scaleX: _this.itemScale*0.5,crashScale: 0.5});
            
            mot = new Tonyu.classes.user.OffsetFollowMotion({target: _this.zigItem,offsetX: (_this.i===0?- (Tonyu.globals.$W*0.5):(Tonyu.globals.$W*0.5)),offsetY: 0});
            
            _this.motList.push(mot);
            list.push(badItem);
            _this.badItemList.push(badItem);
          }
        }
        _this.itemList=list;
        
        _thread.retVal=_this;return;
      },
      spawnItem_TypeRand :function _trc_ZigZagItemScene_spawnItem_TypeRand() {
        "use strict";
        var _this=this;
        var list;
        var angList;
        var item;
        
        Tonyu.globals.$sound.playSE(Tonyu.globals.$se_out);
        list = [];
        
        angList = [[90,0,180],[60,0,100]];
        
        _this.i=0;for (; _this.i<=2 ; _this.i++) {
          Tonyu.checkLoop();
          {
            item = new Tonyu.classes.user.ZigZagItem({x: Tonyu.globals.$W*0.5,y: _this.spawnPosY,itemType: _this.itemType,badItem: ! (_this.i===0),XSP: _this.XSP,YSP: _this.YSP,scaleX: _this.itemScale*0.5,crashScale: 0.5,angleDeg: angList[_this.rnd(0,2)][_this.i]});
            
            list.push(item);
          }
        }
        _this.itemList=list;
      },
      fiber$spawnItem_TypeRand :function _trc_ZigZagItemScene_f_spawnItem_TypeRand(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var list;
        var angList;
        var item;
        
        Tonyu.globals.$sound.playSE(Tonyu.globals.$se_out);
        list = [];
        
        angList = [[90,0,180],[60,0,100]];
        
        _this.i=0;for (; _this.i<=2 ; _this.i++) {
          Tonyu.checkLoop();
          {
            item = new Tonyu.classes.user.ZigZagItem({x: Tonyu.globals.$W*0.5,y: _this.spawnPosY,itemType: _this.itemType,badItem: ! (_this.i===0),XSP: _this.XSP,YSP: _this.YSP,scaleX: _this.itemScale*0.5,crashScale: 0.5,angleDeg: angList[_this.rnd(0,2)][_this.i]});
            
            list.push(item);
          }
        }
        _this.itemList=list;
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"spawnItem_TypeFollow":{"nowait":false},"spawnItem_TypeRand":{"nowait":false}},"fields":{"BG":{},"itemTypeList":{},"YSP":{},"XSP":{},"itemScale":{},"spawnPosY":{},"itemList":{},"badItemList":{},"motList":{},"itemType":{},"motItem":{},"zigItem":{}}}
});
Tonyu.klass.define({
  fullName: 'user.ChanceButton',
  shortName: 'ChanceButton',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_ChanceButton_main() {
        "use strict";
        var _this=this;
        
        _this.p=Tonyu.globals.$pat_button+0;
        _this.actScale=0.5;
        _this.actSize=512;
        _this.scaleX=_this.actScale;
        _this.x=Tonyu.globals.$W*0.5;
        _this.y=Tonyu.globals.$H*0.7;
        _this.touchPower=2;
        _this.barPower=0.4;
        _this.barFirstY=_this.y+(_this.actSize*_this.actScale*0.5)+- 120;
        _this.buttonSizeHerf=_this.actSize*_this.actScale*0.5;
        _this.gaugeMax=_this.y+- (_this.actSize*_this.actScale*0.5)+40;
        _this.bar=new Tonyu.classes.kernel.Actor({p: Tonyu.globals.$pat_yokobou,scaleX: _this.actScale});
        _this.on("die",(function anonymous_343() {
          
          _this.bar.die();
        }));
        _this.on("touch",(function anonymous_375(touchEvent) {
          var f;
          
          _this.p=Tonyu.globals.$pat_button+1;
          _this.barPower+=- (_this.touchPower*(Tonyu.globals.$chanceStep*0.01));
          Tonyu.globals.$sound.playSE(Tonyu.globals.$se_kamaeru);
          f = touchEvent.finger;
          
          f.on("end",(function anonymous_571() {
            
            _this.p=Tonyu.globals.$pat_button+0;
          }));
          _this.update();
        }));
        while (true) {
          Tonyu.checkLoop();
          if (_this.bar.y<_this.gaugeMax) {
            _this.sendEvent("complete");
            break;
            
            
          } else {
            if (_this.bar.y>_this.barFirstY+30) {
              _this.sendEvent("failed");
              break;
              
              
            }
          }
          ;
          
          _this.barPower+=0.1;
          _this.bar.y=_this.barFirstY+(_this.buttonSizeHerf-_this.buttonSizeHerf*(Tonyu.globals.$chanceStep*0.01))*_this.barPower;
          _this.bar.x=_this.x;
          _this.update();
          
        }
      },
      fiber$main :function _trc_ChanceButton_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.p=Tonyu.globals.$pat_button+0;
        _this.actScale=0.5;
        _this.actSize=512;
        _this.scaleX=_this.actScale;
        _this.x=Tonyu.globals.$W*0.5;
        _this.y=Tonyu.globals.$H*0.7;
        _this.touchPower=2;
        _this.barPower=0.4;
        _this.barFirstY=_this.y+(_this.actSize*_this.actScale*0.5)+- 120;
        _this.buttonSizeHerf=_this.actSize*_this.actScale*0.5;
        _this.gaugeMax=_this.y+- (_this.actSize*_this.actScale*0.5)+40;
        _this.bar=new Tonyu.classes.kernel.Actor({p: Tonyu.globals.$pat_yokobou,scaleX: _this.actScale});
        _this.on("die",(function anonymous_343() {
          
          _this.bar.die();
        }));
        
        _thread.enter(function _trc_ChanceButton_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.on("touch",(function anonymous_375(touchEvent) {
                var f;
                
                _this.p=Tonyu.globals.$pat_button+1;
                _this.barPower+=- (_this.touchPower*(Tonyu.globals.$chanceStep*0.01));
                Tonyu.globals.$sound.playSE(Tonyu.globals.$se_kamaeru);
                f = touchEvent.finger;
                
                f.on("end",(function anonymous_571() {
                  
                  _this.p=Tonyu.globals.$pat_button+0;
                }));
                _this.update();
              }));
            case 1:
              if (!(_this.bar.y<_this.gaugeMax)) { __pc=2     ; break; }
              _this.sendEvent("complete");
              __pc=6     ; break;
              
              __pc=4     ;break;
            case 2     :
              if (!(_this.bar.y>_this.barFirstY+30)) { __pc=3     ; break; }
              _this.sendEvent("failed");
              __pc=6     ; break;
              
            case 3     :
              
            case 4     :
              
              ;
              
              _this.barPower+=0.1;
              _this.bar.y=_this.barFirstY+(_this.buttonSizeHerf-_this.buttonSizeHerf*(Tonyu.globals.$chanceStep*0.01))*_this.barPower;
              _this.bar.x=_this.x;
              _this.fiber$update(_thread);
              __pc=5;return;
            case 5:
              
              __pc=1;break;
            case 6     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"actScale":{},"actSize":{},"touchPower":{},"barPower":{},"barFirstY":{},"buttonSizeHerf":{},"gaugeMax":{},"bar":{}}}
});
Tonyu.klass.define({
  fullName: 'user.ChanceScene',
  shortName: 'ChanceScene',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_ChanceScene_main() {
        "use strict";
        var _this=this;
        
        _this.t=_this.timeStop();
        _this.itemType;
        _this.dontTouch=true;
        _this.resumeBGMName=Tonyu.globals.$sound.getPlayingBGMName();
        _this.resumeBGMTime=Tonyu.globals.$sound.getCurrentTime();
        Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_40,true);
        Tonyu.globals.$sound.playSE(Tonyu.globals.$se_syaki);
        _this.panel=new Tonyu.classes.kernel.Panel;
        _this.panel.fillRect(0,0,Tonyu.globals.$W,Tonyu.globals.$H);
        _this.panel.alpha=80;
        _this.ojisanPerusona=new Tonyu.classes.user.OjisanPerusona({zOrder: - 10});
        _this.clickItem=[];
        _this.i=0;for (; _this.i<_this.rnd(3,5) ; _this.i++) {
          Tonyu.checkLoop();
          {
            _this.clickItem[_this.i]=_this.getItem();
          }
        }
        ;
        
        ;
        
        _this.waitEvent(_this.ojisanPerusona,"complete");
        _this.label;
        _this.parallel("buruText");
        _this.updateEx(Tonyu.globals.$chanceStep*0.5);
        _this.label.die();
        ;
        
        _this.cb=new Tonyu.classes.user.ChanceButton;
        _this.cb.on("complete",(function anonymous_1606() {
          
          _this.actDieButPanel();
          _this.completeEvent();
        }));
        _this.cb.on("failed",(function anonymous_1673() {
          
          _this.sendEvent("failed");
          _this.t.releaseAll();
          _this.allActDie();
        }));
      },
      fiber$main :function _trc_ChanceScene_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_ChanceScene_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$timeStop(_thread);
              __pc=1;return;
            case 1:
              _this.t=_thread.retVal;
              
              _this.itemType;
              _this.dontTouch=true;
              _this.resumeBGMName=Tonyu.globals.$sound.getPlayingBGMName();
              _this.resumeBGMTime=Tonyu.globals.$sound.getCurrentTime();
              Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_40,true);
              Tonyu.globals.$sound.playSE(Tonyu.globals.$se_syaki);
              _this.panel=new Tonyu.classes.kernel.Panel;
              _this.panel.fillRect(0,0,Tonyu.globals.$W,Tonyu.globals.$H);
              _this.panel.alpha=80;
              _this.ojisanPerusona=new Tonyu.classes.user.OjisanPerusona({zOrder: - 10});
              _this.clickItem=[];
              _this.i=0;
            case 2:
              if (!(_this.i<_this.rnd(3,5))) { __pc=5     ; break; }
              _this.fiber$getItem(_thread);
              __pc=3;return;
            case 3:
              _this.clickItem[_this.i]=_thread.retVal;
              
            case 4     :
              _this.i++;
              __pc=2;break;
            case 5     :
              
              ;
              
              ;
              
              _this.fiber$waitEvent(_thread, _this.ojisanPerusona, "complete");
              __pc=6;return;
            case 6:
              
              _this.label;
              _this.parallel("buruText");
              _this.fiber$updateEx(_thread, Tonyu.globals.$chanceStep*0.5);
              __pc=7;return;
            case 7:
              
              _this.label.die();
              ;
              
              _this.cb=new Tonyu.classes.user.ChanceButton;
              _this.cb.on("complete",(function anonymous_1606() {
                
                _this.actDieButPanel();
                _this.completeEvent();
              }));
              _this.cb.on("failed",(function anonymous_1673() {
                
                _this.sendEvent("failed");
                _this.t.releaseAll();
                _this.allActDie();
              }));
              _thread.exit(_this);return;
            }
          }
        });
      },
      getItem :function _trc_ChanceScene_getItem() {
        "use strict";
        var _this=this;
        
        _this.items=new Tonyu.classes.user.Items({p: Tonyu.globals.$pat_base+13});
        _this.items.extend({x: _this.rnd(_this.items.width,Tonyu.globals.$W+_this.items.width),y: _this.rnd(_this.items.height,Tonyu.globals.$Y+_this.items.height)});
      },
      fiber$getItem :function _trc_ChanceScene_f_getItem(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.items=new Tonyu.classes.user.Items({p: Tonyu.globals.$pat_base+13});
        _this.items.extend({x: _this.rnd(_this.items.width,Tonyu.globals.$W+_this.items.width),y: _this.rnd(_this.items.height,Tonyu.globals.$Y+_this.items.height)});
        
        _thread.retVal=_this;return;
      },
      actDieButPanel :function _trc_ChanceScene_actDieButPanel() {
        "use strict";
        var _this=this;
        
        if (_this.ojisanPerusona) {
          _this.ojisanPerusona.die();
        }
        if (_this.cb) {
          _this.cb.die();
        }
        if (_this.label) {
          _this.label.die();
        }
      },
      fiber$actDieButPanel :function _trc_ChanceScene_f_actDieButPanel(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        if (_this.ojisanPerusona) {
          _this.ojisanPerusona.die();
        }
        if (_this.cb) {
          _this.cb.die();
        }
        if (_this.label) {
          _this.label.die();
        }
        
        _thread.retVal=_this;return;
      },
      allActDie :function _trc_ChanceScene_allActDie() {
        "use strict";
        var _this=this;
        
        if (_this.panel) {
          _this.panel.die();
        }
        if (_this.ojisanPerusona) {
          _this.ojisanPerusona.die();
        }
        if (_this.cb) {
          _this.cb.die();
        }
        if (_this.label) {
          _this.label.die();
        }
        _this.die();
      },
      fiber$allActDie :function _trc_ChanceScene_f_allActDie(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        if (_this.panel) {
          _this.panel.die();
        }
        if (_this.ojisanPerusona) {
          _this.ojisanPerusona.die();
        }
        if (_this.cb) {
          _this.cb.die();
        }
        if (_this.label) {
          _this.label.die();
        }
        _this.die();
        
        _thread.retVal=_this;return;
      },
      buruText :function _trc_ChanceScene_buruText() {
        "use strict";
        var _this=this;
        
        _this.l_firstX=Tonyu.globals.$W*0.5;
        _this.l_firstY=Tonyu.globals.$H*0.5;
        _this.label=new Tonyu.classes.kernel.Label({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.5,text: "連打!!",size: 100});
        while (true) {
          Tonyu.checkLoop();
          _this.label.x=_this.l_firstX+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*3;
          _this.label.y=_this.l_firstY+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*3;
          _this.update();
          
        }
      },
      fiber$buruText :function _trc_ChanceScene_f_buruText(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.l_firstX=Tonyu.globals.$W*0.5;
        _this.l_firstY=Tonyu.globals.$H*0.5;
        _this.label=new Tonyu.classes.kernel.Label({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.5,text: "連打!!",size: 100});
        
        _thread.enter(function _trc_ChanceScene_ent_buruText(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              _this.label.x=_this.l_firstX+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*3;
              _this.label.y=_this.l_firstY+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*3;
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      completeEvent :function _trc_ChanceScene_completeEvent() {
        "use strict";
        var _this=this;
        
        _this.ci=new Tonyu.classes.user.ChangeItem({itemType: _this.itemType});
        _this.ci.on("complete",(function anonymous_1391() {
          
          _this.sendEvent("complete");
          _this.t.releaseAll();
          Tonyu.globals.$sound.playBGM(_this.resumeBGMName,true,_this.resumeBGMTime);
          _this.ci.die();
          _this.allActDie();
        }));
      },
      fiber$completeEvent :function _trc_ChanceScene_f_completeEvent(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.ci=new Tonyu.classes.user.ChangeItem({itemType: _this.itemType});
        
        _thread.enter(function _trc_ChanceScene_ent_completeEvent(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.ci.on("complete",(function anonymous_1391() {
                
                _this.sendEvent("complete");
                _this.t.releaseAll();
                Tonyu.globals.$sound.playBGM(_this.resumeBGMName,true,_this.resumeBGMTime);
                _this.ci.die();
                _this.allActDie();
              }));
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"getItem":{"nowait":false},"actDieButPanel":{"nowait":false},"allActDie":{"nowait":false},"buruText":{"nowait":false},"completeEvent":{"nowait":false}},"fields":{"t":{},"itemType":{},"dontTouch":{},"resumeBGMName":{},"resumeBGMTime":{},"panel":{},"ojisanPerusona":{},"clickItem":{},"i":{},"label":{},"cb":{},"items":{},"l_firstX":{},"l_firstY":{},"ci":{}}}
});
Tonyu.klass.define({
  fullName: 'user.ChangeItem',
  shortName: 'ChangeItem',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_ChangeItem_main() {
        "use strict";
        var _this=this;
        
        _this.itemType;
        if (_this.itemType===0) {
          _this.p=Tonyu.globals.$pat_bad_zubon;
        }
        if (_this.itemType===1) {
          _this.p=Tonyu.globals.$pat_bad_autaa;
        }
        if (_this.itemType===2) {
          _this.p=Tonyu.globals.$pat_bad_bousi;
        }
        _this.x=Tonyu.globals.$W*0.5;
        _this.y=Tonyu.globals.$H*0.5;
        _this.i=120;for (; _this.i>0 ; _this.i--) {
          Tonyu.checkLoop();
          {
            _this.scaleX=_this.i*0.5;
            _this.update();
          }
        }
        Tonyu.globals.$sound.playSE(Tonyu.globals.$se_rakurai,128,0,4);
        new Tonyu.classes.kernel.FadeEffect({type: "in",fillStyle: "white",duration: "10"});
        if (_this.itemType===0) {
          _this.p=Tonyu.globals.$pat_zubon;
        }
        if (_this.itemType===1) {
          _this.p=Tonyu.globals.$pat_autaa;
        }
        if (_this.itemType===2) {
          _this.p=Tonyu.globals.$pat_bousi;
        }
        _this.updateEx(60);
        _this.sendEvent("complete");
      },
      fiber$main :function _trc_ChangeItem_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.itemType;
        if (_this.itemType===0) {
          _this.p=Tonyu.globals.$pat_bad_zubon;
        }
        if (_this.itemType===1) {
          _this.p=Tonyu.globals.$pat_bad_autaa;
        }
        if (_this.itemType===2) {
          _this.p=Tonyu.globals.$pat_bad_bousi;
        }
        _this.x=Tonyu.globals.$W*0.5;
        _this.y=Tonyu.globals.$H*0.5;
        
        _thread.enter(function _trc_ChangeItem_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.i=120;
            case 1:
              if (!(_this.i>0)) { __pc=4     ; break; }
              _this.scaleX=_this.i*0.5;
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
            case 3     :
              _this.i--;
              __pc=1;break;
            case 4     :
              
              Tonyu.globals.$sound.playSE(Tonyu.globals.$se_rakurai,128,0,4);
              new Tonyu.classes.kernel.FadeEffect({type: "in",fillStyle: "white",duration: "10"});
              if (_this.itemType===0) {
                _this.p=Tonyu.globals.$pat_zubon;
              }
              if (_this.itemType===1) {
                _this.p=Tonyu.globals.$pat_autaa;
              }
              if (_this.itemType===2) {
                _this.p=Tonyu.globals.$pat_bousi;
              }
              _this.fiber$updateEx(_thread, 60);
              __pc=5;return;
            case 5:
              
              _this.sendEvent("complete");
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"itemType":{},"i":{}}}
});
Tonyu.klass.define({
  fullName: 'user.OjisanPerusona',
  shortName: 'OjisanPerusona',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_OjisanPerusona_main() {
        "use strict";
        var _this=this;
        
        _this.p=Tonyu.globals.$pat_ojisan_perusona;
        _this.firstX=Tonyu.globals.$W*0.5;
        _this.firstY=Tonyu.globals.$H*0.5;
        _this.angle=180;
        _this.sp=10;
        _this.vr=0;
        _this.r=Tonyu.globals.$W;
        while (_this.r>0) {
          Tonyu.checkLoop();
          _this.angle+=_this.sp;
          _this.vr+=- 0.2;
          _this.r+=_this.vr;
          _this.x=Tonyu.globals.$W*0.5+_this.cos(_this.angle)*_this.r;
          _this.y=_this.firstY;
          _this.update();
          
        }
        _this.updateEx(10);
        while (_this.y>Tonyu.globals.$H*0.3) {
          Tonyu.checkLoop();
          _this.y+=- _this.sp;
          _this.update();
          
        }
        _this.sendEvent("complete");
      },
      fiber$main :function _trc_OjisanPerusona_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.p=Tonyu.globals.$pat_ojisan_perusona;
        _this.firstX=Tonyu.globals.$W*0.5;
        _this.firstY=Tonyu.globals.$H*0.5;
        _this.angle=180;
        _this.sp=10;
        _this.vr=0;
        _this.r=Tonyu.globals.$W;
        
        _thread.enter(function _trc_OjisanPerusona_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              if (!(_this.r>0)) { __pc=3     ; break; }
              _this.angle+=_this.sp;
              _this.vr+=- 0.2;
              _this.r+=_this.vr;
              _this.x=Tonyu.globals.$W*0.5+_this.cos(_this.angle)*_this.r;
              _this.y=_this.firstY;
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3     :
              
              _this.fiber$updateEx(_thread, 10);
              __pc=4;return;
            case 4:
              
            case 5:
              if (!(_this.y>Tonyu.globals.$H*0.3)) { __pc=7     ; break; }
              _this.y+=- _this.sp;
              _this.fiber$update(_thread);
              __pc=6;return;
            case 6:
              
              __pc=5;break;
            case 7     :
              
              _this.sendEvent("complete");
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"firstX":{},"firstY":{},"angle":{},"sp":{},"vr":{},"r":{}}}
});
Tonyu.klass.define({
  fullName: 'user.CoolGuy',
  shortName: 'CoolGuy',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_CoolGuy_main() {
        "use strict";
        var _this=this;
        
        _this.sp=Tonyu.globals.$H*0.01;
        if (Tonyu.globals.$difficulty<=1) {
          _this.p=Tonyu.globals.$pat_coolguy;
        }
        if (Tonyu.globals.$difficulty>=2) {
          _this.p=Tonyu.globals.$pat_dosukoi;
        }
        if (Tonyu.globals.$difficulty<=1) {
          _this.scaleX=Tonyu.globals.$W*0.0006;
        }
        if (Tonyu.globals.$difficulty>=2) {
          _this.scaleX=Tonyu.globals.$scrScale*1.3;
        }
        _this.frame=0;
        _this.hp=15;
        _this.live=true;
        _this.follItemType=0;
        _this.entry=false;
        _this.follItem;
        _this.follItemOut=false;
        if (Tonyu.globals.$difficulty>=2) {
          _this.handList=[];
          _this.rotMotList=[];
          _this.handList[0]=new Tonyu.classes.kernel.Actor({x: 0,y: 0,p: Tonyu.globals.$pat_dosukoi_hand+0,scaleX: Tonyu.globals.$scrScale*0.8});
          _this.handList[1]=new Tonyu.classes.kernel.Actor({x: 0,y: 0,p: Tonyu.globals.$pat_dosukoi_hand+0,scaleX: Tonyu.globals.$scrScale*0.8});
          _this.rotMotList[0]=new Tonyu.classes.user.RotMotion({firstX: _this.x,firstY: _this.y,sp: 2,radius: 120,angle: 1});
          _this.rotMotList[1]=new Tonyu.classes.user.RotMotion({firstX: _this.x,firstY: _this.y,sp: 2,radius: 120,angle: 180});
          
        }
        while (true) {
          Tonyu.checkLoop();
          _this.frame+=_this.sp;
          if (Tonyu.globals.$difficulty===0) {
            _this.angle=_this.frame*(Math.PI/180);
            _this.x=Tonyu.globals.$W*0.5+Math.cos(_this.angle)*Tonyu.globals.$W*0.3;
            _this.y=Tonyu.globals.$H*0.3;
            
          } else {
            if (Tonyu.globals.$difficulty===1) {
              _this.angle=_this.frame*(Math.PI/180)*0.5;
              _this.x=Tonyu.globals.$W*0.5+Math.cos(_this.angle)*Tonyu.globals.$W*0.8;
              _this.y=Tonyu.globals.$H*0.3+Math.sin(_this.angle*2)*Tonyu.globals.$W*0.1;
              
            } else {
              if (Tonyu.globals.$difficulty===2) {
                _this.angle=_this.frame*(Math.PI/180)*0.25;
                _this.x=Tonyu.globals.$W*0.5+Math.cos(_this.angle)*Tonyu.globals.$W*0.8;
                _this.y=Tonyu.globals.$H*0.3+Math.sin(_this.angle*2)*Tonyu.globals.$W*0.1;
                _this.rotMotList.map((function anonymous_1451(mot,i) {
                  
                  mot.firstX=_this.x;
                  mot.firstY=_this.y;
                  _this.handList[i].extend(mot.next());
                }));
                
              }
            }
          }
          ;
          
          _this.br=_this.crashTo(Tonyu.classes.user.Bullet);
          if (_this.br) {
            _this.br.die();
            Tonyu.globals.$sound.playSE(Tonyu.globals.$se_coolguydamage);
            Tonyu.globals.$sound.playSE(Tonyu.globals.$se_doko);
            _this.hp--;
            if (_this.hp%5===0) {
              _this.follItem=new Tonyu.classes.user.CoolGuyFollItem({x: _this.x,y: _this.y,scaleX: (Tonyu.globals.$W*0.001),itemType: _this.follItemType,badItem: false});
              _this.follItemType++;
              
            }
            
          }
          if (_this.handList!=null) {
            _this.handList.map((function anonymous_2031(hand) {
              
              _this.br=hand.crashTo(Tonyu.classes.user.Bullet);
              if (_this.br) {
                _this.br.die();
              }
            }));
            
          }
          if (_this.hp<=0) {
            _this.die();
            
          }
          ;
          
          if (_this.follItem!=null) {
            if (_this.follItem.y>Tonyu.globals.$H*1.1) {
              _this.follItemOut=true;
            }
            
          }
          _this.update();
          
        }
      },
      fiber$main :function _trc_CoolGuy_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.sp=Tonyu.globals.$H*0.01;
        if (Tonyu.globals.$difficulty<=1) {
          _this.p=Tonyu.globals.$pat_coolguy;
        }
        if (Tonyu.globals.$difficulty>=2) {
          _this.p=Tonyu.globals.$pat_dosukoi;
        }
        if (Tonyu.globals.$difficulty<=1) {
          _this.scaleX=Tonyu.globals.$W*0.0006;
        }
        if (Tonyu.globals.$difficulty>=2) {
          _this.scaleX=Tonyu.globals.$scrScale*1.3;
        }
        _this.frame=0;
        _this.hp=15;
        _this.live=true;
        _this.follItemType=0;
        _this.entry=false;
        _this.follItem;
        _this.follItemOut=false;
        if (Tonyu.globals.$difficulty>=2) {
          _this.handList=[];
          _this.rotMotList=[];
          _this.handList[0]=new Tonyu.classes.kernel.Actor({x: 0,y: 0,p: Tonyu.globals.$pat_dosukoi_hand+0,scaleX: Tonyu.globals.$scrScale*0.8});
          _this.handList[1]=new Tonyu.classes.kernel.Actor({x: 0,y: 0,p: Tonyu.globals.$pat_dosukoi_hand+0,scaleX: Tonyu.globals.$scrScale*0.8});
          _this.rotMotList[0]=new Tonyu.classes.user.RotMotion({firstX: _this.x,firstY: _this.y,sp: 2,radius: 120,angle: 1});
          _this.rotMotList[1]=new Tonyu.classes.user.RotMotion({firstX: _this.x,firstY: _this.y,sp: 2,radius: 120,angle: 180});
          
        }
        
        _thread.enter(function _trc_CoolGuy_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              _this.frame+=_this.sp;
              if (Tonyu.globals.$difficulty===0) {
                _this.angle=_this.frame*(Math.PI/180);
                _this.x=Tonyu.globals.$W*0.5+Math.cos(_this.angle)*Tonyu.globals.$W*0.3;
                _this.y=Tonyu.globals.$H*0.3;
                
              } else {
                if (Tonyu.globals.$difficulty===1) {
                  _this.angle=_this.frame*(Math.PI/180)*0.5;
                  _this.x=Tonyu.globals.$W*0.5+Math.cos(_this.angle)*Tonyu.globals.$W*0.8;
                  _this.y=Tonyu.globals.$H*0.3+Math.sin(_this.angle*2)*Tonyu.globals.$W*0.1;
                  
                } else {
                  if (Tonyu.globals.$difficulty===2) {
                    _this.angle=_this.frame*(Math.PI/180)*0.25;
                    _this.x=Tonyu.globals.$W*0.5+Math.cos(_this.angle)*Tonyu.globals.$W*0.8;
                    _this.y=Tonyu.globals.$H*0.3+Math.sin(_this.angle*2)*Tonyu.globals.$W*0.1;
                    _this.rotMotList.map((function anonymous_1451(mot,i) {
                      
                      mot.firstX=_this.x;
                      mot.firstY=_this.y;
                      _this.handList[i].extend(mot.next());
                    }));
                    
                  }
                }
              }
              ;
              
              _this.br=_this.crashTo(Tonyu.classes.user.Bullet);
              if (_this.br) {
                _this.br.die();
                Tonyu.globals.$sound.playSE(Tonyu.globals.$se_coolguydamage);
                Tonyu.globals.$sound.playSE(Tonyu.globals.$se_doko);
                _this.hp--;
                if (_this.hp%5===0) {
                  _this.follItem=new Tonyu.classes.user.CoolGuyFollItem({x: _this.x,y: _this.y,scaleX: (Tonyu.globals.$W*0.001),itemType: _this.follItemType,badItem: false});
                  _this.follItemType++;
                  
                }
                
              }
              if (_this.handList!=null) {
                _this.handList.map((function anonymous_2031(hand) {
                  
                  _this.br=hand.crashTo(Tonyu.classes.user.Bullet);
                  if (_this.br) {
                    _this.br.die();
                  }
                }));
                
              }
              if (_this.hp<=0) {
                _this.die();
                
              }
              ;
              
              if (_this.follItem!=null) {
                if (_this.follItem.y>Tonyu.globals.$H*1.1) {
                  _this.follItemOut=true;
                }
                
              }
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"sp":{},"frame":{},"hp":{},"live":{},"follItemType":{},"entry":{},"follItem":{},"follItemOut":{},"handList":{},"rotMotList":{},"angle":{},"br":{}}}
});
Tonyu.klass.define({
  fullName: 'user.BaseHireiFollItem',
  shortName: 'BaseHireiFollItem',
  namespace: 'user',
  superclass: Tonyu.classes.user.Items,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_BaseHireiFollItem_main() {
        "use strict";
        var _this=this;
        
        __superClass.prototype.main.apply( _this, []);
        _this.firstY=_this.y;
        _this.YHirei=0;
      },
      fiber$main :function _trc_BaseHireiFollItem_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_BaseHireiFollItem_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              __superClass.prototype.fiber$main.apply( _this, [_thread]);
              __pc=1;return;
            case 1:
              
              _this.firstY=_this.y;
              _this.YHirei=0;
              _thread.exit(_this);return;
            }
          }
        });
      },
      hirei :function _trc_BaseHireiFollItem_hirei(a,posX) {
        "use strict";
        var _this=this;
        
        return a*posX*posX;
      },
      fiber$hirei :function _trc_BaseHireiFollItem_f_hirei(_thread,a,posX) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _thread.retVal=a*posX*posX;return;
        
        
        _thread.retVal=_this;return;
      },
      foll :function _trc_BaseHireiFollItem_foll() {
        "use strict";
        var _this=this;
        
        _this.YHirei+=Tonyu.globals.$W*0.005;
        _this.y=_this.hirei(0.03,_this.YHirei+- (50))+_this.firstY;
      },
      fiber$foll :function _trc_BaseHireiFollItem_f_foll(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.YHirei+=Tonyu.globals.$W*0.005;
        _this.y=_this.hirei(0.03,_this.YHirei+- (50))+_this.firstY;
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"hirei":{"nowait":false},"foll":{"nowait":false}},"fields":{"YHirei":{}}}
});
Tonyu.klass.define({
  fullName: 'user.BaseRotItem',
  shortName: 'BaseRotItem',
  namespace: 'user',
  superclass: Tonyu.classes.user.Items,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_BaseRotItem_main() {
        "use strict";
        var _this=this;
        
        __superClass.prototype.main.apply( _this, []);
        _this.radius;
        _this.firstAngle;
        _this.angle=_this.firstAngle;
        _this.moveX=Tonyu.globals.$W*0.5;
        _this.moveY=0;
        _this.sp=Tonyu.globals.$H*0.001;
        _this.rotSp=Tonyu.globals.$W*0.01;
      },
      fiber$main :function _trc_BaseRotItem_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_BaseRotItem_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              __superClass.prototype.fiber$main.apply( _this, [_thread]);
              __pc=1;return;
            case 1:
              
              _this.radius;
              _this.firstAngle;
              _this.angle=_this.firstAngle;
              _this.moveX=Tonyu.globals.$W*0.5;
              _this.moveY=0;
              _this.sp=Tonyu.globals.$H*0.001;
              _this.rotSp=Tonyu.globals.$W*0.01;
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"firstAngle":{},"moveX":{},"moveY":{},"sp":{},"rotSp":{}}}
});
Tonyu.klass.define({
  fullName: 'user.BodyItem',
  shortName: 'BodyItem',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.BodyActor,
  includes: [Tonyu.classes.user.ItemProcLibs],
  methods: function (__superClass) {
    return {
      main :function _trc_BodyItem_main() {
        "use strict";
        var _this=this;
        
        _this.scaleInit();
        _this.itemTypeInit();
        if (_this.rnd(2)===0) {
          _this.applyForce(- 300,0);
        }
        if (_this.rnd(2)===1) {
          _this.applyForce(300,0);
        }
      },
      fiber$main :function _trc_BodyItem_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_BodyItem_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$scaleInit(_thread);
              __pc=1;return;
            case 1:
              
              _this.fiber$itemTypeInit(_thread);
              __pc=2;return;
            case 2:
              
              if (!(_this.rnd(2)===0)) { __pc=4     ; break; }
              _this.fiber$applyForce(_thread, - 300, 0);
              __pc=3;return;
            case 3:
              
            case 4     :
              
              if (!(_this.rnd(2)===1)) { __pc=6     ; break; }
              _this.fiber$applyForce(_thread, 300, 0);
              __pc=5;return;
            case 5:
              
            case 6     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{}}
});
Tonyu.klass.define({
  fullName: 'user.Floor',
  shortName: 'Floor',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.BodyActor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Floor_main() {
        "use strict";
        var _this=this;
        
        _this.isStatic=true;
      },
      fiber$main :function _trc_Floor_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.isStatic=true;
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{}}
});
Tonyu.klass.define({
  fullName: 'user.FollItem',
  shortName: 'FollItem',
  namespace: 'user',
  superclass: Tonyu.classes.user.Items,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_FollItem_main() {
        "use strict";
        var _this=this;
        
        __superClass.prototype.main.apply( _this, []);
        _this.YSP;
        while (true) {
          Tonyu.checkLoop();
          _this.y+=_this.YSP;
          _this.update();
          
        }
      },
      fiber$main :function _trc_FollItem_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_FollItem_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              __superClass.prototype.fiber$main.apply( _this, [_thread]);
              __pc=1;return;
            case 1:
              
              _this.YSP;
            case 2:
              _this.y+=_this.YSP;
              _this.fiber$update(_thread);
              __pc=3;return;
            case 3:
              
              __pc=2;break;
            case 4     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"YSP":{}}}
});
Tonyu.klass.define({
  fullName: 'user.FollRotItem',
  shortName: 'FollRotItem',
  namespace: 'user',
  superclass: Tonyu.classes.user.Items,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_FollRotItem_main() {
        "use strict";
        var _this=this;
        
        __superClass.prototype.main.apply( _this, []);
        _this.baseItemScale;
        _this.rotItemScale;
        _this.baseItemX;
        _this.baseItemY;
        _this.itemType;
        _this.frame=0;
        _this.followActorOut=false;
        _this.baseItem=new Tonyu.classes.user.Items({x: _this.baseItemX,y: _this.baseItemY,scaleX: _this.baseItemScale,itemType: _this.itemType,badItem: false});
        _this.rotItemList=[];
        _this.i=0;for (; _this.i<2 ; _this.i++) {
          Tonyu.checkLoop();
          {
            _this.rotItem=new Tonyu.classes.user.FollowRotationItem({firstAngle: _this.i*180,radius: Tonyu.globals.$W*0.15,itemType: _this.itemType,badItem: true,lifeKeeper: _this.baseItem,followActor: _this.baseItem,scaleX: _this.rotItemScale});
            _this.rotItemList.push(_this.rotItem);
          }
        }
        while (true) {
          Tonyu.checkLoop();
          _this.frame++;
          _this.baseItem.y+=Tonyu.globals.$H*0.005;
          _this.i=0;for (; _this.i<_this.rotItemList.length ; _this.i++) {
            Tonyu.checkLoop();
            {
              _this.rotItemList[_this.i].radius+=Tonyu.globals.$W*0.0001*_this.frame;
            }
          }
          if (_this.baseItem.y>Tonyu.globals.$H*1.2) {
            _this.followActorOut=true;
          }
          _this.update();
          
        }
      },
      fiber$main :function _trc_FollRotItem_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_FollRotItem_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              __superClass.prototype.fiber$main.apply( _this, [_thread]);
              __pc=1;return;
            case 1:
              
              _this.baseItemScale;
              _this.rotItemScale;
              _this.baseItemX;
              _this.baseItemY;
              _this.itemType;
              _this.frame=0;
              _this.followActorOut=false;
              _this.baseItem=new Tonyu.classes.user.Items({x: _this.baseItemX,y: _this.baseItemY,scaleX: _this.baseItemScale,itemType: _this.itemType,badItem: false});
              _this.rotItemList=[];
              _this.i=0;for (; _this.i<2 ; _this.i++) {
                Tonyu.checkLoop();
                {
                  _this.rotItem=new Tonyu.classes.user.FollowRotationItem({firstAngle: _this.i*180,radius: Tonyu.globals.$W*0.15,itemType: _this.itemType,badItem: true,lifeKeeper: _this.baseItem,followActor: _this.baseItem,scaleX: _this.rotItemScale});
                  _this.rotItemList.push(_this.rotItem);
                }
              }
            case 2:
              _this.frame++;
              _this.baseItem.y+=Tonyu.globals.$H*0.005;
              _this.i=0;for (; _this.i<_this.rotItemList.length ; _this.i++) {
                Tonyu.checkLoop();
                {
                  _this.rotItemList[_this.i].radius+=Tonyu.globals.$W*0.0001*_this.frame;
                }
              }
              if (_this.baseItem.y>Tonyu.globals.$H*1.2) {
                _this.followActorOut=true;
              }
              _this.fiber$update(_thread);
              __pc=3;return;
            case 3:
              
              __pc=2;break;
            case 4     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      getBaseItemDead :function _trc_FollRotItem_getBaseItemDead() {
        "use strict";
        var _this=this;
        
        if (_this.baseItem) {
          return _this.baseItem.isDead();
        }
      },
      fiber$getBaseItemDead :function _trc_FollRotItem_f_getBaseItemDead(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        if (_this.baseItem) {
          _thread.retVal=_this.baseItem.isDead();return;
          
        }
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"getBaseItemDead":{"nowait":false}},"fields":{"baseItemScale":{},"rotItemScale":{},"baseItemX":{},"baseItemY":{},"frame":{},"followActorOut":{},"baseItem":{},"rotItemList":{},"i":{},"rotItem":{}}}
});
Tonyu.klass.define({
  fullName: 'user.FollowItem',
  shortName: 'FollowItem',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_FollowItem_main() {
        "use strict";
        var _this=this;
        
        _this.getRandItem=new Tonyu.classes.user.GetRandItem;
        if (_this.badItem===false) {
          if (_this.itemType===0) {
            _this.p=_this.getRandItem.getBottoms();
          }
          if (_this.itemType===1) {
            _this.p=_this.getRandItem.getTops();
          }
          if (_this.itemType===2) {
            _this.p=_this.getRandItem.getHat();
          }
          
        } else {
          if (_this.badItem===true) {
            if (_this.itemType===0) {
              _this.p=Tonyu.globals.$pat_bad_zubon_in;
            }
            if (_this.itemType===1) {
              _this.p=Tonyu.globals.$pat_bad_autaa_in;
            }
            if (_this.itemType===2) {
              _this.p=Tonyu.globals.$pat_bad_bousi_in;
            }
            
          }
        }
        _this.scaleX=Tonyu.globals.$W*0.0008;
        while (true) {
          Tonyu.checkLoop();
          _this.x=_this.player.x;
          _this.y=_this.player.y;
          _this.update();
          
        }
      },
      fiber$main :function _trc_FollowItem_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.getRandItem=new Tonyu.classes.user.GetRandItem;
        if (_this.badItem===false) {
          if (_this.itemType===0) {
            _this.p=_this.getRandItem.getBottoms();
          }
          if (_this.itemType===1) {
            _this.p=_this.getRandItem.getTops();
          }
          if (_this.itemType===2) {
            _this.p=_this.getRandItem.getHat();
          }
          
        } else {
          if (_this.badItem===true) {
            if (_this.itemType===0) {
              _this.p=Tonyu.globals.$pat_bad_zubon_in;
            }
            if (_this.itemType===1) {
              _this.p=Tonyu.globals.$pat_bad_autaa_in;
            }
            if (_this.itemType===2) {
              _this.p=Tonyu.globals.$pat_bad_bousi_in;
            }
            
          }
        }
        _this.scaleX=Tonyu.globals.$W*0.0008;
        
        _thread.enter(function _trc_FollowItem_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              _this.x=_this.player.x;
              _this.y=_this.player.y;
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"getRandItem":{},"badItem":{},"itemType":{},"player":{}}}
});
Tonyu.klass.define({
  fullName: 'user.FollowRotationItem',
  shortName: 'FollowRotationItem',
  namespace: 'user',
  superclass: Tonyu.classes.user.BaseRotItem,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_FollowRotationItem_main() {
        "use strict";
        var _this=this;
        
        __superClass.prototype.main.apply( _this, []);
        _this.followActor;
        while (true) {
          Tonyu.checkLoop();
          if (_this.followActor) {
            _this.angle+=_this.rotSp;
            _this.x=_this.followActor.x+_this.cos(_this.angle)*_this.radius;
            _this.y=_this.followActor.y+_this.sin(_this.angle)*_this.radius;
            
          }
          _this.update();
          
        }
      },
      fiber$main :function _trc_FollowRotationItem_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_FollowRotationItem_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              __superClass.prototype.fiber$main.apply( _this, [_thread]);
              __pc=1;return;
            case 1:
              
              _this.followActor;
            case 2:
              if (_this.followActor) {
                _this.angle+=_this.rotSp;
                _this.x=_this.followActor.x+_this.cos(_this.angle)*_this.radius;
                _this.y=_this.followActor.y+_this.sin(_this.angle)*_this.radius;
                
              }
              _this.fiber$update(_thread);
              __pc=3;return;
            case 3:
              
              __pc=2;break;
            case 4     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"followActor":{}}}
});
Tonyu.klass.define({
  fullName: 'user.Gun',
  shortName: 'Gun',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Gun_main() {
        "use strict";
        var _this=this;
        
        _this.p=Tonyu.globals.$pat_gun;
        _this.sp=Tonyu.globals.$W*0.01;
        _this.x=Tonyu.globals.$W*0.5;
        _this.y=0;
        _this.scaleX=Tonyu.globals.$W*0.0005;
        while (true) {
          Tonyu.checkLoop();
          if (_this.y<Tonyu.globals.$H*0.8) {
            _this.y+=_this.sp;
          }
          _this.update();
          
        }
      },
      fiber$main :function _trc_Gun_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.p=Tonyu.globals.$pat_gun;
        _this.sp=Tonyu.globals.$W*0.01;
        _this.x=Tonyu.globals.$W*0.5;
        _this.y=0;
        _this.scaleX=Tonyu.globals.$W*0.0005;
        
        _thread.enter(function _trc_Gun_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              if (_this.y<Tonyu.globals.$H*0.8) {
                _this.y+=_this.sp;
              }
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"sp":{}}}
});
Tonyu.klass.define({
  fullName: 'user.HoriNageItem',
  shortName: 'HoriNageItem',
  namespace: 'user',
  superclass: Tonyu.classes.user.Items,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_HoriNageItem_main() {
        "use strict";
        var _this=this;
        
        __superClass.prototype.main.apply( _this, []);
        _this.dir;
        _this.firstX=_this.x;
        _this.firstY=_this.y;
        while (true) {
          Tonyu.checkLoop();
          if (_this.dir===0) {
            _this.x+=- (Tonyu.globals.$W*0.005);
            _this.y=_this.hirei(0.03,(_this.x+- (_this.firstX)+50))+_this.firstY;
            
          }
          ;
          
          if (_this.dir===1) {
            _this.x+=Tonyu.globals.$W*0.005;
            _this.y=_this.hirei(0.03,(_this.x+- (_this.firstX)-50))+_this.firstY;
            
          }
          ;
          
          _this.update();
          
        }
      },
      fiber$main :function _trc_HoriNageItem_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_HoriNageItem_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              __superClass.prototype.fiber$main.apply( _this, [_thread]);
              __pc=1;return;
            case 1:
              
              _this.dir;
              _this.firstX=_this.x;
              _this.firstY=_this.y;
            case 2:
              if (_this.dir===0) {
                _this.x+=- (Tonyu.globals.$W*0.005);
                _this.y=_this.hirei(0.03,(_this.x+- (_this.firstX)+50))+_this.firstY;
                
              }
              ;
              
              if (_this.dir===1) {
                _this.x+=Tonyu.globals.$W*0.005;
                _this.y=_this.hirei(0.03,(_this.x+- (_this.firstX)-50))+_this.firstY;
                
              }
              ;
              
              _this.fiber$update(_thread);
              __pc=3;return;
            case 3:
              
              __pc=2;break;
            case 4     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      hirei :function _trc_HoriNageItem_hirei(a,posX) {
        "use strict";
        var _this=this;
        
        return a*posX*posX;
      },
      fiber$hirei :function _trc_HoriNageItem_f_hirei(_thread,a,posX) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _thread.retVal=a*posX*posX;return;
        
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"hirei":{"nowait":false}},"fields":{"dir":{}}}
});
Tonyu.klass.define({
  fullName: 'user.NozokiItem',
  shortName: 'NozokiItem',
  namespace: 'user',
  superclass: Tonyu.classes.user.Items,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_NozokiItem_main() {
        "use strict";
        var _this=this;
        
        __superClass.prototype.main.apply( _this, []);
        _this.dir;
        _this.spAdd=0;
        _this.dethMovingSp=0;
        _this.wait=0;
        _this.waitEnd=50;
        _this.dieWait=0;
        _this.dieWaitEnd=50;
        _this.sp=Tonyu.globals.$W*0.01;
        _this.x=_this.dir==="Left"?Tonyu.globals.$W*1.2:- (Tonyu.globals.$W*0.2);
        _this.y=Tonyu.globals.$H*0.8;
        _this.soundPlay=false;
        _this.warn=new Tonyu.classes.user.Warning({y: _this.y,scaleX: _this.scaleX,dir: _this.dir});
        while (true) {
          Tonyu.checkLoop();
          _this.spAdd+=0.1;
          _this.wait+=1;
          if (_this.dir==="Left") {
            if (Tonyu.bindFunc(_this,_this.wait)>_this.waitEnd) {
              if (! _this.warn.isDead()) {
                _this.warn.die();
              }
              _this.x+=- _this.sp;
              if (! _this.soundPlay) {
                Tonyu.globals.$sound.playSE(Tonyu.globals.$se_dash);
                _this.soundPlay=true;
                
              }
              ;
              
              
            }
            
          }
          if (_this.dir==="Right") {
            if (Tonyu.bindFunc(_this,_this.wait)>_this.waitEnd) {
              if (! _this.warn.isDead()) {
                _this.warn.die();
              }
              _this.x+=_this.sp;
              if (! _this.soundPlay) {
                Tonyu.globals.$sound.playSE(Tonyu.globals.$se_dash);
                _this.soundPlay=true;
                
              }
              ;
              
              
            }
            
          }
          if (_this.x>Tonyu.globals.$W*1.2) {
            _this.die();
            
          }
          if (_this.x<Tonyu.globals.$W*- 0.2) {
            _this.die();
            
          }
          _this.update();
          
        }
      },
      fiber$main :function _trc_NozokiItem_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_NozokiItem_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              __superClass.prototype.fiber$main.apply( _this, [_thread]);
              __pc=1;return;
            case 1:
              
              _this.dir;
              _this.spAdd=0;
              _this.dethMovingSp=0;
              _this.wait=0;
              _this.waitEnd=50;
              _this.dieWait=0;
              _this.dieWaitEnd=50;
              _this.sp=Tonyu.globals.$W*0.01;
              _this.x=_this.dir==="Left"?Tonyu.globals.$W*1.2:- (Tonyu.globals.$W*0.2);
              _this.y=Tonyu.globals.$H*0.8;
              _this.soundPlay=false;
              _this.warn=new Tonyu.classes.user.Warning({y: _this.y,scaleX: _this.scaleX,dir: _this.dir});
            case 2:
              _this.spAdd+=0.1;
              _this.wait+=1;
              if (_this.dir==="Left") {
                if (Tonyu.bindFunc(_this,_this.wait)>_this.waitEnd) {
                  if (! _this.warn.isDead()) {
                    _this.warn.die();
                  }
                  _this.x+=- _this.sp;
                  if (! _this.soundPlay) {
                    Tonyu.globals.$sound.playSE(Tonyu.globals.$se_dash);
                    _this.soundPlay=true;
                    
                  }
                  ;
                  
                  
                }
                
              }
              if (_this.dir==="Right") {
                if (Tonyu.bindFunc(_this,_this.wait)>_this.waitEnd) {
                  if (! _this.warn.isDead()) {
                    _this.warn.die();
                  }
                  _this.x+=_this.sp;
                  if (! _this.soundPlay) {
                    Tonyu.globals.$sound.playSE(Tonyu.globals.$se_dash);
                    _this.soundPlay=true;
                    
                  }
                  ;
                  
                  
                }
                
              }
              if (_this.x>Tonyu.globals.$W*1.2) {
                _this.die();
                
              }
              if (_this.x<Tonyu.globals.$W*- 0.2) {
                _this.die();
                
              }
              _this.fiber$update(_thread);
              __pc=3;return;
            case 3:
              
              __pc=2;break;
            case 4     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"dir":{},"spAdd":{},"dethMovingSp":{},"waitEnd":{},"dieWait":{},"dieWaitEnd":{},"sp":{},"soundPlay":{},"warn":{}}}
});
Tonyu.klass.define({
  fullName: 'user.RotationItem',
  shortName: 'RotationItem',
  namespace: 'user',
  superclass: Tonyu.classes.user.BaseRotItem,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_RotationItem_main() {
        "use strict";
        var _this=this;
        
        __superClass.prototype.main.apply( _this, []);
        while (true) {
          Tonyu.checkLoop();
          _this.moveY+=_this.sp;
          _this.angle+=_this.rotSp;
          _this.x=_this.moveX+_this.cos(_this.angle)*_this.radius;
          _this.y=_this.moveY+_this.sin(_this.angle)*_this.radius;
          _this.update();
          
        }
      },
      fiber$main :function _trc_RotationItem_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_RotationItem_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              __superClass.prototype.fiber$main.apply( _this, [_thread]);
              __pc=1;return;
            case 1:
              
            case 2:
              _this.moveY+=_this.sp;
              _this.angle+=_this.rotSp;
              _this.x=_this.moveX+_this.cos(_this.angle)*_this.radius;
              _this.y=_this.moveY+_this.sin(_this.angle)*_this.radius;
              _this.fiber$update(_thread);
              __pc=3;return;
            case 3:
              
              __pc=2;break;
            case 4     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{}}
});
Tonyu.klass.define({
  fullName: 'user.Warning',
  shortName: 'Warning',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Warning_main() {
        "use strict";
        var _this=this;
        
        _this.dir;
        _this.frame=0;
        _this.p=Tonyu.globals.$pat_warning;
        _this.x=_this.dir==="Left"?Tonyu.globals.$W*0.9:Tonyu.globals.$W*0.1;
        _this.scaleX=_this.dir==="Left"?- _this.scaleX:_this.scaleX;
        _this.scaleY=Math.abs(_this.scaleX);
        while (true) {
          Tonyu.checkLoop();
          _this.frame++;
          if (_this.frame%4===0) {
            _this.show();
            Tonyu.globals.$sound.playSE(Tonyu.globals.$se_pa);
            
          } else {
            if (_this.frame%4!==0) {
              _this.hide();
              
            }
          }
          ;
          
          _this.update();
          
        }
      },
      fiber$main :function _trc_Warning_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.dir;
        _this.frame=0;
        _this.p=Tonyu.globals.$pat_warning;
        _this.x=_this.dir==="Left"?Tonyu.globals.$W*0.9:Tonyu.globals.$W*0.1;
        _this.scaleX=_this.dir==="Left"?- _this.scaleX:_this.scaleX;
        _this.scaleY=Math.abs(_this.scaleX);
        
        _thread.enter(function _trc_Warning_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              _this.frame++;
              if (_this.frame%4===0) {
                _this.show();
                Tonyu.globals.$sound.playSE(Tonyu.globals.$se_pa);
                
              } else {
                if (_this.frame%4!==0) {
                  _this.hide();
                  
                }
              }
              ;
              
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"dir":{},"frame":{}}}
});
Tonyu.klass.define({
  fullName: 'user.OshiUriItem',
  shortName: 'OshiUriItem',
  namespace: 'user',
  superclass: Tonyu.classes.user.BaseHireiFollItem,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_OshiUriItem_main() {
        "use strict";
        var _this=this;
        
        __superClass.prototype.main.apply( _this, []);
        _this.tarX;
        _this.vx=1;
        _this.dist=_this.x+- (_this.tarX);
        _this.invincible;
        _this.hp;
        while (true) {
          Tonyu.checkLoop();
          _this.x=_this.tarX+(Tonyu.bindFunc(_this,_this.dist)/_this.vx);
          _this.vx+=1;
          _this.foll();
          _this.bul=_this.crashTo(Tonyu.classes.user.Bullet);
          if (_this.bul&&! _this.invincible) {
            _this.bul.die();
            _this.hp--;
            if (_this.hp<=0) {
              _this.die();
            }
            Tonyu.globals.$sound.playSE(Tonyu.globals.$se_gua);
            
          }
          ;
          
          _this.update();
          
        }
      },
      fiber$main :function _trc_OshiUriItem_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_OshiUriItem_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              __superClass.prototype.fiber$main.apply( _this, [_thread]);
              __pc=1;return;
            case 1:
              
              _this.tarX;
              _this.vx=1;
              _this.dist=_this.x+- (_this.tarX);
              _this.invincible;
              _this.hp;
            case 2:
              _this.x=_this.tarX+(Tonyu.bindFunc(_this,_this.dist)/_this.vx);
              _this.vx+=1;
              _this.fiber$foll(_thread);
              __pc=3;return;
            case 3:
              
              _this.bul=_this.crashTo(Tonyu.classes.user.Bullet);
              if (_this.bul&&! _this.invincible) {
                _this.bul.die();
                _this.hp--;
                if (_this.hp<=0) {
                  _this.die();
                }
                Tonyu.globals.$sound.playSE(Tonyu.globals.$se_gua);
                
              }
              ;
              
              _this.fiber$update(_thread);
              __pc=4;return;
            case 4:
              
              __pc=2;break;
            case 5     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"tarX":{},"vx":{},"invincible":{},"hp":{},"bul":{}}}
});
Tonyu.klass.define({
  fullName: 'user.OshiUriTenin',
  shortName: 'OshiUriTenin',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_OshiUriTenin_main() {
        "use strict";
        var _this=this;
        
        _this.p=Tonyu.globals.$pat_uketuke;
        _this.angle=0;
        _this.firstRadius=Tonyu.globals.$W*0.05;
        _this.radius=_this.firstRadius;
        _this.purunRun=false;
        _this.throwFlag=false;
        _this.frame=0;
        _this.shotCount=0;
        _this.moveWait=0;
        _this.posAngle=0;
        _this.posRadius=Tonyu.globals.$W*0.2;
        _this.posDir="right";
        _this.hp=30;
        _this.x=Tonyu.globals.$W*0.5+_this.cos(_this.posAngle)*_this.posRadius;
        _this.y=Tonyu.globals.$H*0.3;
        _this.scaleX=Tonyu.globals.$W*0.001;
        while (true) {
          Tonyu.checkLoop();
          _this.damageUpdate();
          _this.dieUpdate();
          if (_this.shotCount<4) {
            if (Tonyu.globals.$difficulty<=1&&! (_this.frame%60)) {
              _this.throwItem(true);
            }
            if (Tonyu.globals.$difficulty>=2&&! (_this.frame%_this.rnd(24,60))) {
              _this.throwItem(true);
            }
            
          } else {
            _this.moveWait++;
            
          }
          _this.newAlpha=255-_this.cos(120*_this.moveWait*0.01)*255;
          if (_this.newAlpha>127.5) {
            _this.alpha=_this.newAlpha;
          }
          _this.posChange();
          _this.purun();
          _this.frame++;
          _this.update();
          
        }
      },
      fiber$main :function _trc_OshiUriTenin_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.p=Tonyu.globals.$pat_uketuke;
        _this.angle=0;
        _this.firstRadius=Tonyu.globals.$W*0.05;
        _this.radius=_this.firstRadius;
        _this.purunRun=false;
        _this.throwFlag=false;
        _this.frame=0;
        _this.shotCount=0;
        _this.moveWait=0;
        _this.posAngle=0;
        _this.posRadius=Tonyu.globals.$W*0.2;
        _this.posDir="right";
        _this.hp=30;
        _this.x=Tonyu.globals.$W*0.5+_this.cos(_this.posAngle)*_this.posRadius;
        _this.y=Tonyu.globals.$H*0.3;
        _this.scaleX=Tonyu.globals.$W*0.001;
        
        _thread.enter(function _trc_OshiUriTenin_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              _this.fiber$damageUpdate(_thread);
              __pc=2;return;
            case 2:
              
              _this.fiber$dieUpdate(_thread);
              __pc=3;return;
            case 3:
              
              if (!(_this.shotCount<4)) { __pc=8     ; break; }
              if (!(Tonyu.globals.$difficulty<=1&&! (_this.frame%60))) { __pc=5     ; break; }
              _this.fiber$throwItem(_thread, true);
              __pc=4;return;
            case 4:
              
            case 5     :
              
              if (!(Tonyu.globals.$difficulty>=2&&! (_this.frame%_this.rnd(24,60)))) { __pc=7     ; break; }
              _this.fiber$throwItem(_thread, true);
              __pc=6;return;
            case 6:
              
            case 7     :
              
              __pc=9     ;break;
            case 8     :
              {
                _this.moveWait++;
              }
            case 9     :
              
              _this.newAlpha=255-_this.cos(120*_this.moveWait*0.01)*255;
              if (_this.newAlpha>127.5) {
                _this.alpha=_this.newAlpha;
              }
              _this.fiber$posChange(_thread);
              __pc=10;return;
            case 10:
              
              _this.fiber$purun(_thread);
              __pc=11;return;
            case 11:
              
              _this.frame++;
              _this.fiber$update(_thread);
              __pc=12;return;
            case 12:
              
              __pc=1;break;
            case 13    :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      purun :function _trc_OshiUriTenin_purun() {
        "use strict";
        var _this=this;
        
        if (! _this.purunRun) {
          return _this;
        }
        _this.rotation=_this.cos(_this.angle)*_this.radius;
        _this.angle+=Tonyu.globals.$W*0.1;
        if (_this.radius>0) {
          _this.radius+=- (Tonyu.globals.$W*0.0025);
          
        } else {
          _this.radius=_this.firstRadius;
          _this.purunRun=false;
          
        }
      },
      fiber$purun :function _trc_OshiUriTenin_f_purun(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        if (! _this.purunRun) {
          _thread.retVal=_this;return;
          
        }
        _this.rotation=_this.cos(_this.angle)*_this.radius;
        _this.angle+=Tonyu.globals.$W*0.1;
        if (_this.radius>0) {
          _this.radius+=- (Tonyu.globals.$W*0.0025);
          
        } else {
          _this.radius=_this.firstRadius;
          _this.purunRun=false;
          
        }
        
        _thread.retVal=_this;return;
      },
      throwItem :function _trc_OshiUriTenin_throwItem(badItem) {
        "use strict";
        var _this=this;
        
        if (Tonyu.globals.$difficulty===0) {
          _this.hp=1;
        } else {
          _this.hp=_this.rnd(1,5);
        }
        new Tonyu.classes.user.OshiUriItem({tarX: Tonyu.globals.$W*0.5,x: _this.x,y: _this.y,itemType: _this.rnd(3),badItem: badItem,scaleX: Tonyu.globals.$scrScale,hp: _this.hp});
        _this.purunRun=true;
        Tonyu.globals.$sound.playSE(Tonyu.globals.$se_out);
        _this.shotCount++;
      },
      fiber$throwItem :function _trc_OshiUriTenin_f_throwItem(_thread,badItem) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        if (Tonyu.globals.$difficulty===0) {
          _this.hp=1;
        } else {
          _this.hp=_this.rnd(1,5);
        }
        new Tonyu.classes.user.OshiUriItem({tarX: Tonyu.globals.$W*0.5,x: _this.x,y: _this.y,itemType: _this.rnd(3),badItem: badItem,scaleX: Tonyu.globals.$scrScale,hp: _this.hp});
        _this.purunRun=true;
        Tonyu.globals.$sound.playSE(Tonyu.globals.$se_out);
        _this.shotCount++;
        
        _thread.retVal=_this;return;
      },
      posChange :function _trc_OshiUriTenin_posChange() {
        "use strict";
        var _this=this;
        
        if (_this.moveWait===100) {
          Tonyu.globals.$sound.playSE(Tonyu.globals.$se_dash);
        }
        if (_this.moveWait>100) {
          if (_this.posDir==="right"&&_this.posAngle<180) {
            _this.x=Tonyu.globals.$W*0.5+_this.cos(_this.posAngle)*_this.posRadius;
            _this.posAngle++;
            
          } else {
            if (_this.posDir==="right"&&_this.posAngle>=180) {
              _this.moveWait=0;
              _this.shotCount=0;
              _this.posDir="left";
              
            }
          }
          if (_this.posDir==="left"&&_this.posAngle>0) {
            _this.x=Tonyu.globals.$W*0.5+_this.cos(_this.posAngle)*_this.posRadius;
            _this.posAngle--;
            
          } else {
            if (_this.posDir==="left"&&_this.posAngle<=0) {
              _this.moveWait=0;
              _this.shotCount=0;
              _this.posDir="right";
              
            }
          }
          
        }
      },
      fiber$posChange :function _trc_OshiUriTenin_f_posChange(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        if (_this.moveWait===100) {
          Tonyu.globals.$sound.playSE(Tonyu.globals.$se_dash);
        }
        if (_this.moveWait>100) {
          if (_this.posDir==="right"&&_this.posAngle<180) {
            _this.x=Tonyu.globals.$W*0.5+_this.cos(_this.posAngle)*_this.posRadius;
            _this.posAngle++;
            
          } else {
            if (_this.posDir==="right"&&_this.posAngle>=180) {
              _this.moveWait=0;
              _this.shotCount=0;
              _this.posDir="left";
              
            }
          }
          if (_this.posDir==="left"&&_this.posAngle>0) {
            _this.x=Tonyu.globals.$W*0.5+_this.cos(_this.posAngle)*_this.posRadius;
            _this.posAngle--;
            
          } else {
            if (_this.posDir==="left"&&_this.posAngle<=0) {
              _this.moveWait=0;
              _this.shotCount=0;
              _this.posDir="right";
              
            }
          }
          
        }
        
        _thread.retVal=_this;return;
      },
      damageUpdate :function _trc_OshiUriTenin_damageUpdate() {
        "use strict";
        var _this=this;
        
        if (_this.alpha>=255) {
          _this.crashBullet=_this.crashTo(Tonyu.classes.user.Bullet);
          if (_this.crashBullet) {
            _this.hp--;
            Tonyu.globals.$sound.playSE(Tonyu.globals.$se_coolguydamage);
            _this.crashBullet.die();
            
          }
          ;
          
          
        }
      },
      fiber$damageUpdate :function _trc_OshiUriTenin_f_damageUpdate(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        if (_this.alpha>=255) {
          _this.crashBullet=_this.crashTo(Tonyu.classes.user.Bullet);
          if (_this.crashBullet) {
            _this.hp--;
            Tonyu.globals.$sound.playSE(Tonyu.globals.$se_coolguydamage);
            _this.crashBullet.die();
            
          }
          ;
          
          
        }
        
        _thread.retVal=_this;return;
      },
      dieUpdate :function _trc_OshiUriTenin_dieUpdate() {
        "use strict";
        var _this=this;
        
        if (_this.hp<=0) {
          _this.die();
        }
      },
      fiber$dieUpdate :function _trc_OshiUriTenin_f_dieUpdate(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        if (_this.hp<=0) {
          _this.die();
        }
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"purun":{"nowait":false},"throwItem":{"nowait":false},"posChange":{"nowait":false},"damageUpdate":{"nowait":false},"dieUpdate":{"nowait":false}},"fields":{"angle":{},"firstRadius":{},"purunRun":{},"throwFlag":{},"frame":{},"shotCount":{},"moveWait":{},"posAngle":{},"posRadius":{},"posDir":{},"hp":{},"newAlpha":{},"crashBullet":{}}}
});
Tonyu.klass.define({
  fullName: 'user.Uketuke',
  shortName: 'Uketuke',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.BodyActor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Uketuke_main() {
        "use strict";
        var _this=this;
        
        _this.staticFrame=0;
        _this.p=Tonyu.globals.$pat_uketuke;
        _this.scaleX=Tonyu.globals.$W*0.001;
        _this.manualRotation=true;
        _this.itemType=0;
        if (Tonyu.globals.$difficulty===0) {
          _this.horiNageItemScl=Tonyu.globals.$W*0.001;
        }
        if (Tonyu.globals.$difficulty===1) {
          _this.horiNageItemScl=Tonyu.globals.$W*0.0005;
        }
        if (Tonyu.globals.$difficulty===2) {
          _this.horiNageItemScl=Tonyu.globals.$W*0.0002;
        }
        _this.horiNageItemList=[];
        _this.horiNageItemOut=false;
        while (true) {
          Tonyu.checkLoop();
          if (_this.y>Tonyu.globals.$H*0.3) {
            if (_this.staticFrame===0) {
              Tonyu.globals.$sound.playSE(Tonyu.globals.$se_get);
              
            }
            if (_this.staticFrame%60===0&&_this.itemType<3) {
              Tonyu.globals.$sound.playSE(Tonyu.globals.$se_irassyai);
              Tonyu.globals.$sound.playSE(Tonyu.globals.$se_suburi);
              _this.horiNageItemList.push(new Tonyu.classes.user.HoriNageItem({x: _this.x,y: _this.y,itemType: _this.itemType,badItem: false,dir: _this.rnd(2),scaleX: _this.horiNageItemScl}));
              _this.itemType++;
              
            }
            ;
            
            _this.staticFrame++;
            
          }
          _this.horiNageItemList.map((function anonymous_890(item) {
            
            if (item.y>Tonyu.globals.$H*1.05) {
              _this.horiNageItemOut=true;
            }
          }));
          _this.update();
          
        }
      },
      fiber$main :function _trc_Uketuke_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.staticFrame=0;
        _this.p=Tonyu.globals.$pat_uketuke;
        _this.scaleX=Tonyu.globals.$W*0.001;
        _this.manualRotation=true;
        _this.itemType=0;
        if (Tonyu.globals.$difficulty===0) {
          _this.horiNageItemScl=Tonyu.globals.$W*0.001;
        }
        if (Tonyu.globals.$difficulty===1) {
          _this.horiNageItemScl=Tonyu.globals.$W*0.0005;
        }
        if (Tonyu.globals.$difficulty===2) {
          _this.horiNageItemScl=Tonyu.globals.$W*0.0002;
        }
        _this.horiNageItemList=[];
        _this.horiNageItemOut=false;
        
        _thread.enter(function _trc_Uketuke_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              if (_this.y>Tonyu.globals.$H*0.3) {
                if (_this.staticFrame===0) {
                  Tonyu.globals.$sound.playSE(Tonyu.globals.$se_get);
                  
                }
                if (_this.staticFrame%60===0&&_this.itemType<3) {
                  Tonyu.globals.$sound.playSE(Tonyu.globals.$se_irassyai);
                  Tonyu.globals.$sound.playSE(Tonyu.globals.$se_suburi);
                  _this.horiNageItemList.push(new Tonyu.classes.user.HoriNageItem({x: _this.x,y: _this.y,itemType: _this.itemType,badItem: false,dir: _this.rnd(2),scaleX: _this.horiNageItemScl}));
                  _this.itemType++;
                  
                }
                ;
                
                _this.staticFrame++;
                
              }
              _this.horiNageItemList.map((function anonymous_890(item) {
                
                if (item.y>Tonyu.globals.$H*1.05) {
                  _this.horiNageItemOut=true;
                }
              }));
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"staticFrame":{},"itemType":{},"horiNageItemScl":{},"horiNageItemList":{},"horiNageItemOut":{}}}
});
Tonyu.klass.define({
  fullName: 'user.Back',
  shortName: 'Back',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Back_main() {
        "use strict";
        var _this=this;
        
        _this.x=0;
        _this.y=0;
        _this.p=Tonyu.globals.$pat_bg;
        _this.zOrder=1;
      },
      fiber$main :function _trc_Back_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.x=0;
        _this.y=0;
        _this.p=Tonyu.globals.$pat_bg;
        _this.zOrder=1;
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{}}
});
Tonyu.klass.define({
  fullName: 'user.Bullet',
  shortName: 'Bullet',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.BodyActor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Bullet_main() {
        "use strict";
        var _this=this;
        
        _this.sp=Tonyu.globals.$H*0.02;
        _this.p=Tonyu.globals.$pat_base+18;
        _this.scaleX=Tonyu.globals.$W*0.002;
        while (true) {
          Tonyu.checkLoop();
          _this.y+=- _this.sp;
          if (_this.x<0||_this.y<Tonyu.globals.$H*0.15||_this.x>Tonyu.globals.$W||_this.y>Tonyu.globals.$H) {
            _this.die();
          }
          _this.update();
          
        }
      },
      fiber$main :function _trc_Bullet_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.sp=Tonyu.globals.$H*0.02;
        _this.p=Tonyu.globals.$pat_base+18;
        _this.scaleX=Tonyu.globals.$W*0.002;
        
        _thread.enter(function _trc_Bullet_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              _this.y+=- _this.sp;
              if (_this.x<0||_this.y<Tonyu.globals.$H*0.15||_this.x>Tonyu.globals.$W||_this.y>Tonyu.globals.$H) {
                _this.die();
              }
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"sp":{}}}
});
Tonyu.klass.define({
  fullName: 'user.Kira',
  shortName: 'Kira',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Kira_main() {
        "use strict";
        var _this=this;
        
        _this.p=Tonyu.globals.$pat_pika;
        _this.scaleX=Tonyu.globals.$W*0.0001;
        _this.frame=0;
        while (true) {
          Tonyu.checkLoop();
          _this.scaleX+=_this.frame*0.001;
          _this.alpha+=- (_this.frame*0.8);
          if (_this.alpha<=0) {
            _this.die();
          }
          _this.frame++;
          _this.update();
          
        }
      },
      fiber$main :function _trc_Kira_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.p=Tonyu.globals.$pat_pika;
        _this.scaleX=Tonyu.globals.$W*0.0001;
        _this.frame=0;
        
        _thread.enter(function _trc_Kira_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              _this.scaleX+=_this.frame*0.001;
              _this.alpha+=- (_this.frame*0.8);
              if (_this.alpha<=0) {
                _this.die();
              }
              _this.frame++;
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"frame":{}}}
});
Tonyu.klass.define({
  fullName: 'user.Player',
  shortName: 'Player',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.user.Retry],
  methods: function (__superClass) {
    return {
      main :function _trc_Player_main() {
        "use strict";
        var _this=this;
        function failed() {
          
          Tonyu.globals.$sound.playSE(Tonyu.globals.$se_gua);
          Tonyu.globals.$sound.playSE(Tonyu.globals.$se_syaki);
          Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_40);
          _this.all(Tonyu.classes.user.Items).die();
          _this.p=Tonyu.globals.$pat_ojisan_damage;
          _this.apeealTime--;
          _this.retryText();
        }
        _this.p=Tonyu.globals.$pat_ojisan;
        _this.crashScale=0.8;
        _this.apeealTime=0;
        _this.firstX=Tonyu.globals.$W*0.5;
        _this.firstY=Tonyu.globals.$H*0.8;
        _this.x=_this.firstX;
        _this.y=_this.firstY;
        _this.followItemList=[];
        _this.playSyaki=false;
        _this.vy=0;
        _this.jumpSp=Tonyu.globals.$H*0.008;
        _this.gravity=Tonyu.globals.$H*0.00005;
        _this.onGround=true;
        _this.frame=0;
        _this.hitBall=new Tonyu.classes.kernel.Actor({p: Tonyu.globals.$pat_hitball,x: _this.firstX,y: _this.firstY,scaleX: Tonyu.globals.$W*0.0003,zOrder: - 1});
        _this.scaleX=Tonyu.globals.$W*0.0008;
        _this.speed=Tonyu.globals.$W*0.02;
        _this.nowBullet;
        _this.notMove;
        _this.fittedGun=new Tonyu.classes.user.FittedGun({followTarget: _this});
        _this.fittedGun.hide();
        _this.setApeealEnd(false);
        _this.setGunMode(false);
        while (true) {
          Tonyu.checkLoop();
          _this.frame++;
          _this.hitBallFollowUpdate();
          if (! _this.notMove) {
            _this.x+=Tonyu.globals.$touches[0].vx*2;
            if (_this.getkey("left")&&_this.x>0) {
              _this.x+=- _this.speed;
              
            } else {
              if (_this.x<0) {
                _this.x=0;
                
              }
            }
            ;
            
            if (_this.getkey("right")&&_this.x<Tonyu.globals.$W) {
              _this.x+=_this.speed;
              
            } else {
              if (_this.x>Tonyu.globals.$W) {
                _this.x=Tonyu.globals.$W;
                
              }
            }
            ;
            
            
          }
          if (_this.gunMode) {
            _this.fittedGun.show();
            if (Tonyu.globals.$touches[0].touched||_this.getkey("space")) {
              if (! _this.nowBullet||_this.nowBullet.isDead()) {
                _this.nowBullet=new Tonyu.classes.user.Bullet({x: _this.x+- (Tonyu.globals.$W*0.2),y: (_this.y+- 100)});
                Tonyu.globals.$sound.playSE(Tonyu.globals.$se_gunshot);
                
              }
              
            }
            
          } else {
            _this.fittedGun.hide();
            
          }
          _this.ci=_this.hitBall.crashTo(Tonyu.classes.user.Items)||_this.hitBall.crashTo(Tonyu.classes.user.BodyItem);
          if (_this.ci&&_this.apeealTime>- 1) {
            _this.existItem = _this.followItemList.filter((function anonymous_2051(item) {
              
              return item.itemType===_this.ci.itemType;
            }));
            
            if (_this.existItem.length<=0) {
              if (_this.ci.badItem===false) {
                Tonyu.globals.$sound.playSE(Tonyu.globals.$se_get);
                _this.followItemList.push(new Tonyu.classes.user.FollowItem({x: _this.x,y: _this.y,itemType: _this.ci.itemType,badItem: _this.ci.badItem,player: _this}));
                
              } else {
                if (_this.ci.badItem===true) {
                  _this.apeealTime--;
                  
                }
              }
              _this.ci.die();
              
            }
            
          }
          ;
          
          if (_this.apeealTime===1) {
            Tonyu.globals.$sound.playSE(Tonyu.globals.$se_syaki);
            Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_40);
            _this.all(Tonyu.classes.user.Items).die();
            _this.p=Tonyu.globals.$pat_ojisan_kime;
            _this.apeealTime++;
            
          }
          ;
          
          if (_this.apeealTime===- 1) {
            
            if (_this.ci) {
              _this.cs=new Tonyu.classes.user.ChanceScene({itemType: _this.ci.itemType});
              _this.cs.on("complete",(function anonymous_3194() {
                
                Tonyu.globals.$sound.playSE(Tonyu.globals.$se_burp1);
                _this.apeealTime=0;
                _this.followItemList.push(new Tonyu.classes.user.FollowItem({x: _this.x,y: _this.y,itemType: _this.ci.itemType,badItem: false,player: _this}));
                _this.ci.die();
              }));
              _this.cs.on("failed",(function anonymous_3465() {
                
                failed();
                _this.followItemList.push(new Tonyu.classes.user.FollowItem({x: _this.x,y: _this.y,itemType: _this.ci.itemType,badItem: true,player: _this}));
              }));
              
            } else {
              failed();
              
            }
            
          }
          ;
          
          if ((_this.apeealTime<50&&_this.apeealTime>1)||(_this.apeealTime>- 1&&_this.followItemList.length-1>=2)) {
            _this.x=Tonyu.globals.$W*0.5;
            _this.y=Tonyu.globals.$H*0.5;
            _this.apeealTime++;
            if (_this.apeealTime%6===0) {
              new Tonyu.classes.user.Kira({x: Tonyu.globals.$W*_this.rnd(3,7)*0.1,y: Tonyu.globals.$H*_this.rnd(3,7)*0.1});
              
            }
            if (_this.apeealTime>=50) {
              _this.setApeealEnd(true);
              
            }
            ;
            
            
          }
          if (_this.apeealTime<- 1) {
            _this.x=Tonyu.globals.$W*0.5;
            _this.y=Tonyu.globals.$H*0.5;
            _this.apeealTime--;
            if (_this.apeealTime%6===0) {
              new Tonyu.classes.user.Kira({x: Tonyu.globals.$W*_this.rnd(3,7)*0.1,y: Tonyu.globals.$H*_this.rnd(3,7)*0.1});
              
            }
            if (Tonyu.globals.$touches[0].touched===1) {
              _this.retry();
              
            }
            
          }
          _this.gravityUpdate();
          if (_this.bodyFlag) {
            _this.bodyUpdate();
          } else {
            if (_this.bodyFlag) {
              _this.bodyDeleted();
            }
          }
          _this.update();
          
        }
      },
      fiber$main :function _trc_Player_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        function failed() {
          
          Tonyu.globals.$sound.playSE(Tonyu.globals.$se_gua);
          Tonyu.globals.$sound.playSE(Tonyu.globals.$se_syaki);
          Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_40);
          _this.all(Tonyu.classes.user.Items).die();
          _this.p=Tonyu.globals.$pat_ojisan_damage;
          _this.apeealTime--;
          _this.retryText();
        }
        _this.p=Tonyu.globals.$pat_ojisan;
        _this.crashScale=0.8;
        _this.apeealTime=0;
        _this.firstX=Tonyu.globals.$W*0.5;
        _this.firstY=Tonyu.globals.$H*0.8;
        _this.x=_this.firstX;
        _this.y=_this.firstY;
        _this.followItemList=[];
        _this.playSyaki=false;
        _this.vy=0;
        _this.jumpSp=Tonyu.globals.$H*0.008;
        _this.gravity=Tonyu.globals.$H*0.00005;
        _this.onGround=true;
        _this.frame=0;
        _this.hitBall=new Tonyu.classes.kernel.Actor({p: Tonyu.globals.$pat_hitball,x: _this.firstX,y: _this.firstY,scaleX: Tonyu.globals.$W*0.0003,zOrder: - 1});
        _this.scaleX=Tonyu.globals.$W*0.0008;
        _this.speed=Tonyu.globals.$W*0.02;
        _this.nowBullet;
        _this.notMove;
        _this.fittedGun=new Tonyu.classes.user.FittedGun({followTarget: _this});
        _this.fittedGun.hide();
        
        _thread.enter(function _trc_Player_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$setApeealEnd(_thread, false);
              __pc=1;return;
            case 1:
              
              _this.fiber$setGunMode(_thread, false);
              __pc=2;return;
            case 2:
              
            case 3:
              _this.frame++;
              _this.fiber$hitBallFollowUpdate(_thread);
              __pc=4;return;
            case 4:
              
              if (! _this.notMove) {
                _this.x+=Tonyu.globals.$touches[0].vx*2;
                if (_this.getkey("left")&&_this.x>0) {
                  _this.x+=- _this.speed;
                  
                } else {
                  if (_this.x<0) {
                    _this.x=0;
                    
                  }
                }
                ;
                
                if (_this.getkey("right")&&_this.x<Tonyu.globals.$W) {
                  _this.x+=_this.speed;
                  
                } else {
                  if (_this.x>Tonyu.globals.$W) {
                    _this.x=Tonyu.globals.$W;
                    
                  }
                }
                ;
                
                
              }
              if (_this.gunMode) {
                _this.fittedGun.show();
                if (Tonyu.globals.$touches[0].touched||_this.getkey("space")) {
                  if (! _this.nowBullet||_this.nowBullet.isDead()) {
                    _this.nowBullet=new Tonyu.classes.user.Bullet({x: _this.x+- (Tonyu.globals.$W*0.2),y: (_this.y+- 100)});
                    Tonyu.globals.$sound.playSE(Tonyu.globals.$se_gunshot);
                    
                  }
                  
                }
                
              } else {
                _this.fittedGun.hide();
                
              }
              _this.ci=_this.hitBall.crashTo(Tonyu.classes.user.Items)||_this.hitBall.crashTo(Tonyu.classes.user.BodyItem);
              if (!(_this.ci&&_this.apeealTime>- 1)) { __pc=5     ; break; }
              _this.existItem = _this.followItemList.filter((function anonymous_2051(item) {
                
                return item.itemType===_this.ci.itemType;
              }));
              
              if (_this.existItem.length<=0) {
                if (_this.ci.badItem===false) {
                  Tonyu.globals.$sound.playSE(Tonyu.globals.$se_get);
                  _this.followItemList.push(new Tonyu.classes.user.FollowItem({x: _this.x,y: _this.y,itemType: _this.ci.itemType,badItem: _this.ci.badItem,player: _this}));
                  
                } else {
                  if (_this.ci.badItem===true) {
                    _this.apeealTime--;
                    
                  }
                }
                _this.ci.die();
                
              }
            case 5     :
              
              ;
              
              if (_this.apeealTime===1) {
                Tonyu.globals.$sound.playSE(Tonyu.globals.$se_syaki);
                Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_40);
                _this.all(Tonyu.classes.user.Items).die();
                _this.p=Tonyu.globals.$pat_ojisan_kime;
                _this.apeealTime++;
                
              }
              ;
              
              if (_this.apeealTime===- 1) {
                
                if (_this.ci) {
                  _this.cs=new Tonyu.classes.user.ChanceScene({itemType: _this.ci.itemType});
                  _this.cs.on("complete",(function anonymous_3194() {
                    
                    Tonyu.globals.$sound.playSE(Tonyu.globals.$se_burp1);
                    _this.apeealTime=0;
                    _this.followItemList.push(new Tonyu.classes.user.FollowItem({x: _this.x,y: _this.y,itemType: _this.ci.itemType,badItem: false,player: _this}));
                    _this.ci.die();
                  }));
                  _this.cs.on("failed",(function anonymous_3465() {
                    
                    failed();
                    _this.followItemList.push(new Tonyu.classes.user.FollowItem({x: _this.x,y: _this.y,itemType: _this.ci.itemType,badItem: true,player: _this}));
                  }));
                  
                } else {
                  failed();
                  
                }
                
              }
              ;
              
              if (!((_this.apeealTime<50&&_this.apeealTime>1)||(_this.apeealTime>- 1&&_this.followItemList.length-1>=2))) { __pc=8     ; break; }
              _this.x=Tonyu.globals.$W*0.5;
              _this.y=Tonyu.globals.$H*0.5;
              _this.apeealTime++;
              if (_this.apeealTime%6===0) {
                new Tonyu.classes.user.Kira({x: Tonyu.globals.$W*_this.rnd(3,7)*0.1,y: Tonyu.globals.$H*_this.rnd(3,7)*0.1});
                
              }
              if (!(_this.apeealTime>=50)) { __pc=7     ; break; }
              _this.fiber$setApeealEnd(_thread, true);
              __pc=6;return;
            case 6:
              
            case 7     :
              
              ;
              
            case 8     :
              
              if (!(_this.apeealTime<- 1)) { __pc=11    ; break; }
              _this.x=Tonyu.globals.$W*0.5;
              _this.y=Tonyu.globals.$H*0.5;
              _this.apeealTime--;
              if (_this.apeealTime%6===0) {
                new Tonyu.classes.user.Kira({x: Tonyu.globals.$W*_this.rnd(3,7)*0.1,y: Tonyu.globals.$H*_this.rnd(3,7)*0.1});
                
              }
              if (!(Tonyu.globals.$touches[0].touched===1)) { __pc=10    ; break; }
              _this.fiber$retry(_thread);
              __pc=9;return;
            case 9:
              
            case 10    :
              
            case 11    :
              
              _this.fiber$gravityUpdate(_thread);
              __pc=12;return;
            case 12:
              
              if (!(_this.bodyFlag)) { __pc=14    ; break; }
              _this.fiber$bodyUpdate(_thread);
              __pc=13;return;
            case 13:
              
              __pc=17    ;break;
            case 14    :
              if (!(_this.bodyFlag)) { __pc=16    ; break; }
              _this.fiber$bodyDeleted(_thread);
              __pc=15;return;
            case 15:
              
            case 16    :
              
            case 17    :
              
              _this.fiber$update(_thread);
              __pc=18;return;
            case 18:
              
              __pc=3;break;
            case 19    :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      setApeealEnd :function _trc_Player_setApeealEnd(flag) {
        "use strict";
        var _this=this;
        
        _this.apeealEnd=flag;
      },
      fiber$setApeealEnd :function _trc_Player_f_setApeealEnd(_thread,flag) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.apeealEnd=flag;
        
        _thread.retVal=_this;return;
      },
      getApeealEnd :function _trc_Player_getApeealEnd() {
        "use strict";
        var _this=this;
        
        return _this.apeealEnd;
      },
      fiber$getApeealEnd :function _trc_Player_f_getApeealEnd(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _thread.retVal=_this.apeealEnd;return;
        
        
        _thread.retVal=_this;return;
      },
      hitBallFollowUpdate :function _trc_Player_hitBallFollowUpdate() {
        "use strict";
        var _this=this;
        
        _this.hitBall.x=_this.x;
        _this.hitBall.y=_this.y;
      },
      fiber$hitBallFollowUpdate :function _trc_Player_f_hitBallFollowUpdate(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.hitBall.x=_this.x;
        _this.hitBall.y=_this.y;
        
        _thread.retVal=_this;return;
      },
      gravityUpdate :function _trc_Player_gravityUpdate() {
        "use strict";
        var _this=this;
        
        if (_this.y>=_this.firstY) {
          _this.y=_this.firstY;
          _this.vy=0;
          _this.onGround=true;
          
        } else {
          if (_this.apeealTime===0) {
            _this.vy+=_this.gravity;
            _this.y+=_this.vy;
            
          }
          
        }
      },
      fiber$gravityUpdate :function _trc_Player_f_gravityUpdate(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        if (_this.y>=_this.firstY) {
          _this.y=_this.firstY;
          _this.vy=0;
          _this.onGround=true;
          
        } else {
          if (_this.apeealTime===0) {
            _this.vy+=_this.gravity;
            _this.y+=_this.vy;
            
          }
          
        }
        
        _thread.retVal=_this;return;
      },
      setGunMode :function _trc_Player_setGunMode(flag) {
        "use strict";
        var _this=this;
        
        _this.gunMode=flag;
      },
      fiber$setGunMode :function _trc_Player_f_setGunMode(_thread,flag) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.gunMode=flag;
        
        _thread.retVal=_this;return;
      },
      bodyUpdate :function _trc_Player_bodyUpdate() {
        "use strict";
        var _this=this;
        
        if (! _this.body) {
          _this.body=new Tonyu.classes.kernel.BodyActor({x: _this.x,y: _this.y,p: Tonyu.globals.$pat_ojisan,scaleX: _this.scaleX,isStatic: true});
          
        }
        _this.body.x=_this.x;
        _this.body.y=_this.y;
      },
      fiber$bodyUpdate :function _trc_Player_f_bodyUpdate(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        if (! _this.body) {
          _this.body=new Tonyu.classes.kernel.BodyActor({x: _this.x,y: _this.y,p: Tonyu.globals.$pat_ojisan,scaleX: _this.scaleX,isStatic: true});
          
        }
        _this.body.x=_this.x;
        _this.body.y=_this.y;
        
        _thread.retVal=_this;return;
      },
      bodyDeleted :function _trc_Player_bodyDeleted() {
        "use strict";
        var _this=this;
        
        if (! _this.body) {
          return _this;
        }
        _this.body.die();
        _this.body=undefined;
      },
      fiber$bodyDeleted :function _trc_Player_f_bodyDeleted(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        if (! _this.body) {
          _thread.retVal=_this;return;
          
        }
        _this.body.die();
        _this.body=undefined;
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"setApeealEnd":{"nowait":false},"getApeealEnd":{"nowait":false},"hitBallFollowUpdate":{"nowait":false},"gravityUpdate":{"nowait":false},"setGunMode":{"nowait":false},"bodyUpdate":{"nowait":false},"bodyDeleted":{"nowait":false}},"fields":{"existItem":{},"apeealTime":{},"firstX":{},"firstY":{},"followItemList":{},"playSyaki":{},"vy":{},"jumpSp":{},"gravity":{},"onGround":{},"frame":{},"hitBall":{},"speed":{},"nowBullet":{},"notMove":{},"fittedGun":{},"gunMode":{},"ci":{},"cs":{},"bodyFlag":{},"apeealEnd":{},"body":{}}}
});
Tonyu.klass.define({
  fullName: 'user.CountDownLabel',
  shortName: 'CountDownLabel',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.user.ActPattern],
  methods: function (__superClass) {
    return {
      main :function _trc_CountDownLabel_main() {
        "use strict";
        var _this=this;
        
        _this.player;
        _this.label=new Tonyu.classes.kernel.Label({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.5,text: "0",fillStyle: "black",size: Tonyu.globals.$W*0.15});
        _this.countDown=3;
        _this.frame=0;
        while (true) {
          Tonyu.checkLoop();
          _this.frame++;
          _this.label.text=_this.countDown;
          if (_this.frame%60===0) {
            _this.countDown--;
          }
          if (_this.countDown<=0) {
            _this.actJump(_this.player);
            _this.label.die();
            _this.die();
            
          }
          _this.update();
          
        }
      },
      fiber$main :function _trc_CountDownLabel_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.player;
        _this.label=new Tonyu.classes.kernel.Label({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.5,text: "0",fillStyle: "black",size: Tonyu.globals.$W*0.15});
        _this.countDown=3;
        _this.frame=0;
        
        _thread.enter(function _trc_CountDownLabel_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              _this.frame++;
              _this.label.text=_this.countDown;
              if (_this.frame%60===0) {
                _this.countDown--;
              }
              if (!(_this.countDown<=0)) { __pc=3     ; break; }
              _this.fiber$actJump(_thread, _this.player);
              __pc=2;return;
            case 2:
              
              _this.label.die();
              _this.die();
            case 3     :
              
              _this.fiber$update(_thread);
              __pc=4;return;
            case 4:
              
              __pc=1;break;
            case 5     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"player":{},"label":{},"countDown":{},"frame":{}}}
});
Tonyu.klass.define({
  fullName: 'user.RocketItem',
  shortName: 'RocketItem',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_RocketItem_main() {
        "use strict";
        var _this=this;
        
        _this.p=Tonyu.globals.$pat_imo;
        _this.sp=Tonyu.globals.$W*0.01;
        _this.scaleX=Tonyu.globals.$scrScale;
        while (true) {
          Tonyu.checkLoop();
          if (_this.y<Tonyu.globals.$H*0.8) {
            _this.y+=_this.sp;
          }
          _this.update();
          
        }
      },
      fiber$main :function _trc_RocketItem_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.p=Tonyu.globals.$pat_imo;
        _this.sp=Tonyu.globals.$W*0.01;
        _this.scaleX=Tonyu.globals.$scrScale;
        
        _thread.enter(function _trc_RocketItem_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              if (_this.y<Tonyu.globals.$H*0.8) {
                _this.y+=_this.sp;
              }
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"sp":{}}}
});
Tonyu.klass.define({
  fullName: 'user.CoolSentakuItem',
  shortName: 'CoolSentakuItem',
  namespace: 'user',
  superclass: Tonyu.classes.user.BaseHireiFollItem,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_CoolSentakuItem_main() {
        "use strict";
        var _this=this;
        
        __superClass.prototype.main.apply( _this, []);
        _this.scaleX=Tonyu.globals.$W*0.001;
        _this.sentakuKi;
        _this.frame=0;
        _this.player;
        _this.mot=new Tonyu.classes.user.AttractionMotion({sp: 10});
        while (true) {
          Tonyu.checkLoop();
          if (_this.frame===100) {
            Tonyu.globals.$sound.playSE(Tonyu.globals.$se_chin);
            _this.x=_this.sentakuKi.x;
            
          }
          ;
          
          if (_this.frame>100) {
            _this.alpha=255;
            if (_this.y<Tonyu.globals.$H*0.8) {
              _this.foll();
            } else {
              _this.mot.app(_this,_this.player);
            }
            
          }
          _this.frame++;
          _this.update();
          
        }
      },
      fiber$main :function _trc_CoolSentakuItem_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_CoolSentakuItem_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              __superClass.prototype.fiber$main.apply( _this, [_thread]);
              __pc=1;return;
            case 1:
              
              _this.scaleX=Tonyu.globals.$W*0.001;
              _this.sentakuKi;
              _this.frame=0;
              _this.player;
              _this.mot=new Tonyu.classes.user.AttractionMotion({sp: 10});
            case 2:
              if (_this.frame===100) {
                Tonyu.globals.$sound.playSE(Tonyu.globals.$se_chin);
                _this.x=_this.sentakuKi.x;
                
              }
              ;
              
              if (!(_this.frame>100)) { __pc=6     ; break; }
              _this.alpha=255;
              if (!(_this.y<Tonyu.globals.$H*0.8)) { __pc=4     ; break; }
              _this.fiber$foll(_thread);
              __pc=3;return;
            case 3:
              
              __pc=5     ;break;
            case 4     :
              _this.mot.app(_this,_this.player);
            case 5     :
              
            case 6     :
              
              _this.frame++;
              _this.fiber$update(_thread);
              __pc=7;return;
            case 7:
              
              __pc=2;break;
            case 8     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"sentakuKi":{},"frame":{},"player":{},"mot":{}}}
});
Tonyu.klass.define({
  fullName: 'user.SentakuItem',
  shortName: 'SentakuItem',
  namespace: 'user',
  superclass: Tonyu.classes.user.Items,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_SentakuItem_main() {
        "use strict";
        var _this=this;
        
        __superClass.prototype.main.apply( _this, []);
        _this.sp;
        _this.frame=0;
        _this.futtobi=false;
        _this.houriKomare=0;
        _this.moveX;
        _this.moveY;
        _this.radius=300;
        _this.angle=0;
        _this.YHirei=0;
        _this.YTobioriFirstPos=0;
        _this.sentakuKi;
        _this.player;
        while (true) {
          Tonyu.checkLoop();
          _this.bullet=_this.crashTo(Tonyu.classes.user.Bullet);
          if (_this.bullet) {
            _this.futtobi=true;
            _this.bullet.die();
            
          }
          ;
          
          _this.moving();
          _this.crash();
          if (_this.crashTo(Tonyu.classes.user.SentakuKi)) {
            _this.houriKomare=1;
            new Tonyu.classes.user.CoolSentakuItem({y: Tonyu.globals.$H*0.15,x: 0,sentakuKi: _this.sentakuKi,itemType: _this.itemType,badItem: false,alpha: 0,player: _this.player});
            _this.die();
            
          }
          if (_this.houriKomare===1) {
            Tonyu.globals.$sound.playSE(Tonyu.globals.$se_pyun);
          }
          _this.angle+=_this.sp;
          _this.update();
          
        }
      },
      fiber$main :function _trc_SentakuItem_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_SentakuItem_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              __superClass.prototype.fiber$main.apply( _this, [_thread]);
              __pc=1;return;
            case 1:
              
              _this.sp;
              _this.frame=0;
              _this.futtobi=false;
              _this.houriKomare=0;
              _this.moveX;
              _this.moveY;
              _this.radius=300;
              _this.angle=0;
              _this.YHirei=0;
              _this.YTobioriFirstPos=0;
              _this.sentakuKi;
              _this.player;
            case 2:
              _this.bullet=_this.crashTo(Tonyu.classes.user.Bullet);
              if (_this.bullet) {
                _this.futtobi=true;
                _this.bullet.die();
                
              }
              ;
              
              _this.fiber$moving(_thread);
              __pc=3;return;
            case 3:
              
              _this.fiber$crash(_thread);
              __pc=4;return;
            case 4:
              
              if (_this.crashTo(Tonyu.classes.user.SentakuKi)) {
                _this.houriKomare=1;
                new Tonyu.classes.user.CoolSentakuItem({y: Tonyu.globals.$H*0.15,x: 0,sentakuKi: _this.sentakuKi,itemType: _this.itemType,badItem: false,alpha: 0,player: _this.player});
                _this.die();
                
              }
              if (_this.houriKomare===1) {
                Tonyu.globals.$sound.playSE(Tonyu.globals.$se_pyun);
              }
              _this.angle+=_this.sp;
              _this.fiber$update(_thread);
              __pc=5;return;
            case 5:
              
              __pc=2;break;
            case 6     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      moving :function _trc_SentakuItem_moving() {
        "use strict";
        var _this=this;
        
        if (_this.futtobi) {
          return _this;
        }
        _this.x=_this.moveX+_this.cos(_this.angle)*_this.radius;
        if (Tonyu.globals.$difficulty===2) {
          _this.y=_this.moveY+_this.sin(_this.angle*2)*(_this.radius/10);
          
        }
      },
      fiber$moving :function _trc_SentakuItem_f_moving(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        if (_this.futtobi) {
          _thread.retVal=_this;return;
          
        }
        _this.x=_this.moveX+_this.cos(_this.angle)*_this.radius;
        if (Tonyu.globals.$difficulty===2) {
          _this.y=_this.moveY+_this.sin(_this.angle*2)*(_this.radius/10);
          
        }
        
        _thread.retVal=_this;return;
      },
      crash :function _trc_SentakuItem_crash() {
        "use strict";
        var _this=this;
        
        if (! _this.futtobi) {
          return _this;
        }
        _this.rotation+=Tonyu.globals.$W*0.05;
        _this.y+=- (Tonyu.globals.$W*0.01+_this.frame);
      },
      fiber$crash :function _trc_SentakuItem_f_crash(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        if (! _this.futtobi) {
          _thread.retVal=_this;return;
          
        }
        _this.rotation+=Tonyu.globals.$W*0.05;
        _this.y+=- (Tonyu.globals.$W*0.01+_this.frame);
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"moving":{"nowait":false},"crash":{"nowait":false}},"fields":{"sp":{},"frame":{},"futtobi":{},"houriKomare":{},"moveX":{},"moveY":{},"YHirei":{},"YTobioriFirstPos":{},"sentakuKi":{},"player":{},"bullet":{}}}
});
Tonyu.klass.define({
  fullName: 'user.SentakuKi',
  shortName: 'SentakuKi',
  namespace: 'user',
  superclass: Tonyu.classes.user.Items,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_SentakuKi_main() {
        "use strict";
        var _this=this;
        
        __superClass.prototype.main.apply( _this, []);
        _this.p=Tonyu.globals.$pat_sentaku;
      },
      fiber$main :function _trc_SentakuKi_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_SentakuKi_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              __superClass.prototype.fiber$main.apply( _this, [_thread]);
              __pc=1;return;
            case 1:
              
              _this.p=Tonyu.globals.$pat_sentaku;
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{}}
});
Tonyu.klass.define({
  fullName: 'user.BigFaceScene',
  shortName: 'BigFaceScene',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.user.MainProcLibs],
  methods: function (__superClass) {
    return {
      main :function _trc_BigFaceScene_main() {
        "use strict";
        var _this=this;
        
        _this.init();
        _this.scr=1.5;
        _this.frame=0;
        _this.attackTime=0;
        _this.goBackToFirstPos=false;
        _this.attackArm=0;
        _this.firstRadius=Tonyu.globals.$scrScale*100;
        _this.firstLeftArmPosX=- (Tonyu.globals.$W*0.1);
        _this.firstRightArmPosX=Tonyu.globals.$W*1.1;
        _this.itemType=- 1;
        _this.bg=new Tonyu.classes.user.BGBase({BGImg: Tonyu.globals.$pat_bigface_scene_bg,scaleX: Tonyu.globals.$scrScale});
        _this.BGGW=new Tonyu.classes.kernel.Actor({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.5,p: Tonyu.globals.$pat_osouji_scene_bg_gw,scaleX: Tonyu.globals.$scrScale,zOrder: 100});
        Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_94,true);
        _this.player=new Tonyu.classes.user.Player({speed: Tonyu.globals.$W*0.008,scaleX: Tonyu.globals.$W*0.001,gunMode: false,jump: false});
        _this.bigFace=new Tonyu.classes.user.BigFace({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.3,img: Tonyu.globals.$pat_bigface,scaleX: Tonyu.globals.$scrScale*_this.scr});
        _this.nowBadItem;
        _this.goodItemList=[];
        _this.goodItemMotList=[];
        _this.badItemBulletList=[];
        _this.i=2;for (; _this.i<5 ; _this.i++) {
          Tonyu.checkLoop();
          {
            _this.item=new Tonyu.classes.user.Items({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*_this.i*0.1,scaleX: Tonyu.globals.$scrScale,itemType: _this.i-2,badItem: false,zOrder: 100});
            _this.item.alpha=0;
            _this.goodItemList.push(_this.item);
          }
        }
        _this.i=0;for (; _this.i<3 ; _this.i++) {
          Tonyu.checkLoop();
          {
            _this.goodItemMotList.push(new Tonyu.classes.user.FollMotion({firstY: _this.goodItemList[_this.i].y}));
          }
        }
        _this.leftArm=new Tonyu.classes.kernel.Actor({x: _this.firstLeftArmPosX,y: 0,p: Tonyu.globals.$pat_bigface_hand+0,scaleX: Tonyu.globals.$scrScale*_this.scr*1.2,rotation: 45});
        _this.rightArm=new Tonyu.classes.kernel.Actor({x: _this.firstRightArmPosX,y: Tonyu.globals.$H*0.7,p: Tonyu.globals.$pat_bigface_hand+0,scaleX: - (Tonyu.globals.$scrScale*_this.scr*1.2),scaleY: Tonyu.globals.$scrScale*_this.scr*1.2,rotation: - 45});
        _this.leftRoundTripMotion=new Tonyu.classes.user.RotMotion({firstX: - (Tonyu.globals.$W*0.1),firstY: Tonyu.globals.$H*0.7,sp: Tonyu.globals.$scrScale*10,radius: Tonyu.globals.$scrScale*100,angle: 1});
        _this.rightRoundTripMotion=new Tonyu.classes.user.RotMotion({firstX: Tonyu.globals.$W*1.1,firstY: Tonyu.globals.$H*0.7,sp: Tonyu.globals.$scrScale*10,radius: Tonyu.globals.$scrScale*100,angle: 180});
        _this.rotMotion=new Tonyu.classes.user.RotMotion({firstX: Tonyu.globals.$W*0.1,firstY: Tonyu.globals.$H*0.9,sp: Tonyu.globals.$scrScale*10,radius: Tonyu.globals.$scrScale*200,angle: 1});
        while (true) {
          Tonyu.checkLoop();
          _this.frame++;
          _this.nextScene(_this.player.apeealEnd);
          if (_this.itemType>2) {
            _this.goodItemList.map((function anonymous_3119(item) {
              
              if (item.alpha===0) {
                item.alpha=255;
              }
            }));
            _this.bg.y+=10;
            _this.bigFace.y+=10;
            _this.leftArm.y+=10;
            _this.rightArm.y+=10;
            _this.goodItemMotList.map((function anonymous_3319(m,i) {
              
              _this.playerItemLen=_this.player.followItemList.length-1;
              _this.goodItem=_this.goodItemList[i];
              _this.goodItem.extend(m.next());
              if (_this.goodItem.y>=Tonyu.globals.$H+130&&_this.player.apeealTime>=0&&_this.playerItemLen<2) {
                _this.player.apeealTime=- 1;
                
              }
            }));
            _this.update();
            continue;
            
            
          }
          if (_this.attackArm!==- 1) {
            _this.leftArm.y=_this.leftRoundTripMotion.next().y;
            _this.leftArm.p=Tonyu.globals.$pat_bigface_hand+0;
            
          } else {
            _this.leftArm.p=Tonyu.globals.$pat_bigface_hand+1;
            
          }
          if (_this.attackArm!==1) {
            _this.rightArm.y=_this.rightRoundTripMotion.next().y;
            _this.rightArm.p=Tonyu.globals.$pat_bigface_hand+0;
            
          } else {
            _this.rightArm.p=Tonyu.globals.$pat_bigface_hand+1;
            
          }
          if (_this.attackTime===1) {
            _this.bigFace.attack=true;
            if (Tonyu.globals.$bossDifficulty===0) {
              _this.attackArm=- 1;
            }
            if (Tonyu.globals.$bossDifficulty===1) {
              _this.attackArm=_this.rnd(0,2)?1:- 1;
            }
            if (Tonyu.globals.$bossDifficulty===2) {
              _this.attackArm=_this.rnd(- 1,2);
            }
            if (_this.itemType<=2) {
              _this.itemType++;
            }
            if (_this.attackArm===- 1) {
              _this.leftRoundTripMotion.angle=180;
            }
            if (_this.attackArm===1) {
              _this.rightRoundTripMotion.angle=180;
            }
            if (_this.attackArm!==0&&_this.itemType<=2) {
              _this.nowBadItem=new Tonyu.classes.user.Items({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.5,itemType: _this.itemType,badItem: true,scaleX: Tonyu.globals.$scrScale,zOrder: - 1});
              _this.nowBadItem.itemType=_this.itemType;
              
            }
            
          }
          if (_this.attackTime===18) {
            Tonyu.globals.$sound.playSE(Tonyu.globals.$se_suburi,128,0,0.5);
          }
          if (_this.attackTime>24) {
            if (_this.attackArm===- 1) {
              _this.attackUpdate(_this.leftRoundTripMotion,2,_this.leftArm,- 1);
            }
            if (_this.attackArm===1) {
              _this.attackUpdate(_this.rightRoundTripMotion,2,_this.rightArm,1);
            }
            if (_this.attackArm===0) {
              _this.itemBulletUpdate(_this.bigFace,_this.player,5);
            }
            
          }
          if (_this.attackTime>0&&_this.itemType<=2) {
            _this.attackTime++;
            if (_this.attackArm===- 1) {
              _this.nowBadItem.extend({x: _this.leftArm.x+60,y: _this.leftArm.y+- 50});
            }
            if (_this.attackArm===1) {
              _this.nowBadItem.extend({x: _this.rightArm.x+- 60,y: _this.rightArm.y+- 50});
            }
            
          }
          if (! (_this.frame%60)&&! _this.bigFace.attack) {
            _this.attackTime=1;
            
          }
          _this.update();
          
        }
      },
      fiber$main :function _trc_BigFaceScene_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_BigFaceScene_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$init(_thread);
              __pc=1;return;
            case 1:
              
              _this.scr=1.5;
              _this.frame=0;
              _this.attackTime=0;
              _this.goBackToFirstPos=false;
              _this.attackArm=0;
              _this.firstRadius=Tonyu.globals.$scrScale*100;
              _this.firstLeftArmPosX=- (Tonyu.globals.$W*0.1);
              _this.firstRightArmPosX=Tonyu.globals.$W*1.1;
              _this.itemType=- 1;
              _this.bg=new Tonyu.classes.user.BGBase({BGImg: Tonyu.globals.$pat_bigface_scene_bg,scaleX: Tonyu.globals.$scrScale});
              _this.BGGW=new Tonyu.classes.kernel.Actor({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.5,p: Tonyu.globals.$pat_osouji_scene_bg_gw,scaleX: Tonyu.globals.$scrScale,zOrder: 100});
              Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_94,true);
              _this.player=new Tonyu.classes.user.Player({speed: Tonyu.globals.$W*0.008,scaleX: Tonyu.globals.$W*0.001,gunMode: false,jump: false});
              _this.bigFace=new Tonyu.classes.user.BigFace({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.3,img: Tonyu.globals.$pat_bigface,scaleX: Tonyu.globals.$scrScale*_this.scr});
              _this.nowBadItem;
              _this.goodItemList=[];
              _this.goodItemMotList=[];
              _this.badItemBulletList=[];
              _this.i=2;for (; _this.i<5 ; _this.i++) {
                Tonyu.checkLoop();
                {
                  _this.item=new Tonyu.classes.user.Items({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*_this.i*0.1,scaleX: Tonyu.globals.$scrScale,itemType: _this.i-2,badItem: false,zOrder: 100});
                  _this.item.alpha=0;
                  _this.goodItemList.push(_this.item);
                }
              }
              _this.i=0;for (; _this.i<3 ; _this.i++) {
                Tonyu.checkLoop();
                {
                  _this.goodItemMotList.push(new Tonyu.classes.user.FollMotion({firstY: _this.goodItemList[_this.i].y}));
                }
              }
              _this.leftArm=new Tonyu.classes.kernel.Actor({x: _this.firstLeftArmPosX,y: 0,p: Tonyu.globals.$pat_bigface_hand+0,scaleX: Tonyu.globals.$scrScale*_this.scr*1.2,rotation: 45});
              _this.rightArm=new Tonyu.classes.kernel.Actor({x: _this.firstRightArmPosX,y: Tonyu.globals.$H*0.7,p: Tonyu.globals.$pat_bigface_hand+0,scaleX: - (Tonyu.globals.$scrScale*_this.scr*1.2),scaleY: Tonyu.globals.$scrScale*_this.scr*1.2,rotation: - 45});
              _this.leftRoundTripMotion=new Tonyu.classes.user.RotMotion({firstX: - (Tonyu.globals.$W*0.1),firstY: Tonyu.globals.$H*0.7,sp: Tonyu.globals.$scrScale*10,radius: Tonyu.globals.$scrScale*100,angle: 1});
              _this.rightRoundTripMotion=new Tonyu.classes.user.RotMotion({firstX: Tonyu.globals.$W*1.1,firstY: Tonyu.globals.$H*0.7,sp: Tonyu.globals.$scrScale*10,radius: Tonyu.globals.$scrScale*100,angle: 180});
              _this.rotMotion=new Tonyu.classes.user.RotMotion({firstX: Tonyu.globals.$W*0.1,firstY: Tonyu.globals.$H*0.9,sp: Tonyu.globals.$scrScale*10,radius: Tonyu.globals.$scrScale*200,angle: 1});
            case 2:
              _this.frame++;
              _this.fiber$nextScene(_thread, _this.player.apeealEnd);
              __pc=3;return;
            case 3:
              
              if (!(_this.itemType>2)) { __pc=5     ; break; }
              _this.goodItemList.map((function anonymous_3119(item) {
                
                if (item.alpha===0) {
                  item.alpha=255;
                }
              }));
              _this.bg.y+=10;
              _this.bigFace.y+=10;
              _this.leftArm.y+=10;
              _this.rightArm.y+=10;
              _this.goodItemMotList.map((function anonymous_3319(m,i) {
                
                _this.playerItemLen=_this.player.followItemList.length-1;
                _this.goodItem=_this.goodItemList[i];
                _this.goodItem.extend(m.next());
                if (_this.goodItem.y>=Tonyu.globals.$H+130&&_this.player.apeealTime>=0&&_this.playerItemLen<2) {
                  _this.player.apeealTime=- 1;
                  
                }
              }));
              _this.fiber$update(_thread);
              __pc=4;return;
            case 4:
              
              __pc=2; break;
              
            case 5     :
              
              if (_this.attackArm!==- 1) {
                _this.leftArm.y=_this.leftRoundTripMotion.next().y;
                _this.leftArm.p=Tonyu.globals.$pat_bigface_hand+0;
                
              } else {
                _this.leftArm.p=Tonyu.globals.$pat_bigface_hand+1;
                
              }
              if (_this.attackArm!==1) {
                _this.rightArm.y=_this.rightRoundTripMotion.next().y;
                _this.rightArm.p=Tonyu.globals.$pat_bigface_hand+0;
                
              } else {
                _this.rightArm.p=Tonyu.globals.$pat_bigface_hand+1;
                
              }
              if (_this.attackTime===1) {
                _this.bigFace.attack=true;
                if (Tonyu.globals.$bossDifficulty===0) {
                  _this.attackArm=- 1;
                }
                if (Tonyu.globals.$bossDifficulty===1) {
                  _this.attackArm=_this.rnd(0,2)?1:- 1;
                }
                if (Tonyu.globals.$bossDifficulty===2) {
                  _this.attackArm=_this.rnd(- 1,2);
                }
                if (_this.itemType<=2) {
                  _this.itemType++;
                }
                if (_this.attackArm===- 1) {
                  _this.leftRoundTripMotion.angle=180;
                }
                if (_this.attackArm===1) {
                  _this.rightRoundTripMotion.angle=180;
                }
                if (_this.attackArm!==0&&_this.itemType<=2) {
                  _this.nowBadItem=new Tonyu.classes.user.Items({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.5,itemType: _this.itemType,badItem: true,scaleX: Tonyu.globals.$scrScale,zOrder: - 1});
                  _this.nowBadItem.itemType=_this.itemType;
                  
                }
                
              }
              if (_this.attackTime===18) {
                Tonyu.globals.$sound.playSE(Tonyu.globals.$se_suburi,128,0,0.5);
              }
              if (!(_this.attackTime>24)) { __pc=12    ; break; }
              if (!(_this.attackArm===- 1)) { __pc=7     ; break; }
              _this.fiber$attackUpdate(_thread, _this.leftRoundTripMotion, 2, _this.leftArm, - 1);
              __pc=6;return;
            case 6:
              
            case 7     :
              
              if (!(_this.attackArm===1)) { __pc=9     ; break; }
              _this.fiber$attackUpdate(_thread, _this.rightRoundTripMotion, 2, _this.rightArm, 1);
              __pc=8;return;
            case 8:
              
            case 9     :
              
              if (!(_this.attackArm===0)) { __pc=11    ; break; }
              _this.fiber$itemBulletUpdate(_thread, _this.bigFace, _this.player, 5);
              __pc=10;return;
            case 10:
              
            case 11    :
              
            case 12    :
              
              if (_this.attackTime>0&&_this.itemType<=2) {
                _this.attackTime++;
                if (_this.attackArm===- 1) {
                  _this.nowBadItem.extend({x: _this.leftArm.x+60,y: _this.leftArm.y+- 50});
                }
                if (_this.attackArm===1) {
                  _this.nowBadItem.extend({x: _this.rightArm.x+- 60,y: _this.rightArm.y+- 50});
                }
                
              }
              if (! (_this.frame%60)&&! _this.bigFace.attack) {
                _this.attackTime=1;
                
              }
              _this.fiber$update(_thread);
              __pc=13;return;
            case 13:
              
              __pc=2;break;
            case 14    :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      attackUpdate :function _trc_BigFaceScene_attackUpdate(mot,sp,arm,aarm) {
        "use strict";
        var _this=this;
        
        if (_this.attackArm!==aarm) {
          return _this;
        }
        if (! _this.goBackToFirstPos) {
          _this.newPos=mot.next();
          mot.radius+=sp;
          arm.extend(_this.newPos);
          if (mot.radius>250) {
            _this.goBackToFirstPos=true;
            
          }
          
        } else {
          _this.newPos=mot.next();
          mot.radius+=- sp;
          arm.extend(_this.newPos);
          if (mot.radius<_this.firstRadius) {
            _this.attackTime=0;
            _this.attackArm=0;
            _this.bigFace.attack=false;
            _this.goBackToFirstPos=false;
            mot.radius=_this.firstRadius;
            _this.nowBadItem.die();
            _this.nowBadItem=undefined;
            if (aarm===- 1) {
              arm.x=_this.firstLeftArmPosX;
            }
            if (aarm===1) {
              arm.x=_this.firstRightArmPosX;
            }
            
          }
          
        }
      },
      fiber$attackUpdate :function _trc_BigFaceScene_f_attackUpdate(_thread,mot,sp,arm,aarm) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        if (_this.attackArm!==aarm) {
          _thread.retVal=_this;return;
          
        }
        if (! _this.goBackToFirstPos) {
          _this.newPos=mot.next();
          mot.radius+=sp;
          arm.extend(_this.newPos);
          if (mot.radius>250) {
            _this.goBackToFirstPos=true;
            
          }
          
        } else {
          _this.newPos=mot.next();
          mot.radius+=- sp;
          arm.extend(_this.newPos);
          if (mot.radius<_this.firstRadius) {
            _this.attackTime=0;
            _this.attackArm=0;
            _this.bigFace.attack=false;
            _this.goBackToFirstPos=false;
            mot.radius=_this.firstRadius;
            _this.nowBadItem.die();
            _this.nowBadItem=undefined;
            if (aarm===- 1) {
              arm.x=_this.firstLeftArmPosX;
            }
            if (aarm===1) {
              arm.x=_this.firstRightArmPosX;
            }
            
          }
          
        }
        
        _thread.retVal=_this;return;
      },
      itemBulletUpdate :function _trc_BigFaceScene_itemBulletUpdate(base,pl,maxBullet) {
        "use strict";
        var _this=this;
        
        if (_this.frame%24) {
          return _this;
        }
        Tonyu.globals.$sound.playSE(Tonyu.globals.$se_out,128,0,1.5);
        if (_this.badItemBulletList.length>maxBullet) {
          _this.attackTime=0;
          _this.bigFace.attack=false;
          _this.badItemBulletList=[];
          return _this;
          
        }
        ;
        
        _this.badItemBulletList.push(new Tonyu.classes.user.ItemBullet({firstX: base.x-30,firstY: base.y+80,itemType: 0,badItem: true,target: {x: pl.x,y: pl.y+500}}));
      },
      fiber$itemBulletUpdate :function _trc_BigFaceScene_f_itemBulletUpdate(_thread,base,pl,maxBullet) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        if (_this.frame%24) {
          _thread.retVal=_this;return;
          
        }
        Tonyu.globals.$sound.playSE(Tonyu.globals.$se_out,128,0,1.5);
        if (_this.badItemBulletList.length>maxBullet) {
          _this.attackTime=0;
          _this.bigFace.attack=false;
          _this.badItemBulletList=[];
          _thread.retVal=_this;return;
          
          
        }
        ;
        
        _this.badItemBulletList.push(new Tonyu.classes.user.ItemBullet({firstX: base.x-30,firstY: base.y+80,itemType: 0,badItem: true,target: {x: pl.x,y: pl.y+500}}));
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"attackUpdate":{"nowait":false},"itemBulletUpdate":{"nowait":false}},"fields":{"scr":{},"frame":{},"attackTime":{},"goBackToFirstPos":{},"attackArm":{},"firstRadius":{},"firstLeftArmPosX":{},"firstRightArmPosX":{},"itemType":{},"bg":{},"BGGW":{},"bigFace":{},"nowBadItem":{},"goodItemList":{},"goodItemMotList":{},"badItemBulletList":{},"item":{},"leftArm":{},"rightArm":{},"leftRoundTripMotion":{},"rightRoundTripMotion":{},"rotMotion":{},"playerItemLen":{},"goodItem":{},"newPos":{}}}
});
Tonyu.klass.define({
  fullName: 'user.ClearScreen',
  shortName: 'ClearScreen',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.user.Retry],
  methods: function (__superClass) {
    return {
      main :function _trc_ClearScreen_main() {
        "use strict";
        var _this=this;
        
        _this.frame=0;
        new Tonyu.classes.kernel.Actor({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.5,p: Tonyu.globals.$pat_bg_clear_scene,scaleX: Tonyu.globals.$scrScale,zOrder: 100});
        _this.retryText();
        while (true) {
          Tonyu.checkLoop();
          _this.frame++;
          if (Tonyu.globals.$touches[0].touched) {
            _this.retry();
            
          }
          if (_this.frame%6===0) {
            new Tonyu.classes.user.Kira({x: Tonyu.globals.$W*_this.rndFloat(0.1,1),y: Tonyu.globals.$H*_this.rndFloat(0.1,1)});
            
          }
          _this.update();
          
        }
        ;
        
      },
      fiber$main :function _trc_ClearScreen_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.frame=0;
        new Tonyu.classes.kernel.Actor({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.5,p: Tonyu.globals.$pat_bg_clear_scene,scaleX: Tonyu.globals.$scrScale,zOrder: 100});
        
        _thread.enter(function _trc_ClearScreen_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$retryText(_thread);
              __pc=1;return;
            case 1:
              
            case 2:
              _this.frame++;
              if (!(Tonyu.globals.$touches[0].touched)) { __pc=4     ; break; }
              _this.fiber$retry(_thread);
              __pc=3;return;
            case 3:
              
            case 4     :
              
              if (_this.frame%6===0) {
                new Tonyu.classes.user.Kira({x: Tonyu.globals.$W*_this.rndFloat(0.1,1),y: Tonyu.globals.$H*_this.rndFloat(0.1,1)});
                
              }
              _this.fiber$update(_thread);
              __pc=5;return;
            case 5:
              
              __pc=2;break;
            case 6     :
              
              ;
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"frame":{}}}
});
Tonyu.klass.define({
  fullName: 'user.CoolBottoms',
  shortName: 'CoolBottoms',
  namespace: 'user',
  superclass: Tonyu.classes.user.FollItem,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_CoolBottoms_main() {
        "use strict";
        var _this=this;
        
        _this.p=Tonyu.globals.$pat_zubon;
      },
      fiber$main :function _trc_CoolBottoms_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.p=Tonyu.globals.$pat_zubon;
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{}}
});
Tonyu.klass.define({
  fullName: 'user.CoolGuyScene',
  shortName: 'CoolGuyScene',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.user.MainProcLibs],
  methods: function (__superClass) {
    return {
      main :function _trc_CoolGuyScene_main() {
        "use strict";
        var _this=this;
        
        _this.init();
        _this.frame=0;
        _this.gun=new Tonyu.classes.user.Gun({x: Tonyu.globals.$W*0.5,y: 0});
        if (Tonyu.globals.$difficulty<=1) {
          _this.bg=new Tonyu.classes.kernel.Actor({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.5,p: Tonyu.globals.$pat_road_bg,scaleX: Tonyu.globals.$scrScale,zOrder: 100});
          
        } else {
          _this.bg=new Tonyu.classes.user.BGBase({BGImg: Tonyu.globals.$pat_cool_guy_scene_bg2,scaleX: Tonyu.globals.$scrScale});
          
        }
        _this.crashCheck=new Tonyu.classes.user.CrashCheck;
        _this.roundTripMotion=new Tonyu.classes.user.RoundTripMotion({firstX: Tonyu.globals.$W*0.5,firstY: Tonyu.globals.$H*0.3});
        _this.attractionMotion=new Tonyu.classes.user.AttractionMotion({sp: Tonyu.globals.$W*0.005});
        _this.follMotion=new Tonyu.classes.user.FollMotion;
        _this.coolGuy=new Tonyu.classes.user.CoolGuy({x: Tonyu.globals.$W*0.5,y: 0});
        _this.player=new Tonyu.classes.user.Player({speed: Tonyu.globals.$W*0.008,scaleX: Tonyu.globals.$W*0.0008});
        if (Tonyu.globals.$difficulty<2) {
          Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_94,true);
        } else {
          Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_128,true);
        }
        while (true) {
          Tonyu.checkLoop();
          _this.frame++;
          if (_this.coolGuy.follItemOut&&_this.player.apeealTime>=0) {
            _this.player.apeealTime=- 1;
          }
          if (_this.player.crashTo(_this.gun)) {
            Tonyu.globals.$sound.playSE(Tonyu.globals.$se_kamaeru);
            _this.gun.die();
            _this.player.setGunMode(true);
            
          }
          if (_this.coolGuy.isDead()&&_this.player.getApeealEnd()) {
            _this.nextScene(true);
            
          }
          _this.update();
          
        }
      },
      fiber$main :function _trc_CoolGuyScene_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_CoolGuyScene_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$init(_thread);
              __pc=1;return;
            case 1:
              
              _this.frame=0;
              _this.gun=new Tonyu.classes.user.Gun({x: Tonyu.globals.$W*0.5,y: 0});
              if (Tonyu.globals.$difficulty<=1) {
                _this.bg=new Tonyu.classes.kernel.Actor({x: Tonyu.globals.$W*0.5,y: Tonyu.globals.$H*0.5,p: Tonyu.globals.$pat_road_bg,scaleX: Tonyu.globals.$scrScale,zOrder: 100});
                
              } else {
                _this.bg=new Tonyu.classes.user.BGBase({BGImg: Tonyu.globals.$pat_cool_guy_scene_bg2,scaleX: Tonyu.globals.$scrScale});
                
              }
              _this.crashCheck=new Tonyu.classes.user.CrashCheck;
              _this.roundTripMotion=new Tonyu.classes.user.RoundTripMotion({firstX: Tonyu.globals.$W*0.5,firstY: Tonyu.globals.$H*0.3});
              _this.attractionMotion=new Tonyu.classes.user.AttractionMotion({sp: Tonyu.globals.$W*0.005});
              _this.follMotion=new Tonyu.classes.user.FollMotion;
              _this.coolGuy=new Tonyu.classes.user.CoolGuy({x: Tonyu.globals.$W*0.5,y: 0});
              _this.player=new Tonyu.classes.user.Player({speed: Tonyu.globals.$W*0.008,scaleX: Tonyu.globals.$W*0.0008});
              if (Tonyu.globals.$difficulty<2) {
                Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_94,true);
              } else {
                Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_128,true);
              }
            case 2:
              _this.frame++;
              if (_this.coolGuy.follItemOut&&_this.player.apeealTime>=0) {
                _this.player.apeealTime=- 1;
              }
              if (_this.player.crashTo(_this.gun)) {
                Tonyu.globals.$sound.playSE(Tonyu.globals.$se_kamaeru);
                _this.gun.die();
                _this.player.setGunMode(true);
                
              }
              if (!(_this.coolGuy.isDead()&&_this.player.getApeealEnd())) { __pc=4     ; break; }
              _this.fiber$nextScene(_thread, true);
              __pc=3;return;
            case 3:
              
            case 4     :
              
              _this.fiber$update(_thread);
              __pc=5;return;
            case 5:
              
              __pc=2;break;
            case 6     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"frame":{},"gun":{},"bg":{},"crashCheck":{},"roundTripMotion":{},"attractionMotion":{},"follMotion":{},"coolGuy":{}}}
});
Tonyu.klass.define({
  fullName: 'user.CoolGuyFollItem',
  shortName: 'CoolGuyFollItem',
  namespace: 'user',
  superclass: Tonyu.classes.user.BaseHireiFollItem,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_CoolGuyFollItem_main() {
        "use strict";
        var _this=this;
        
        __superClass.prototype.main.apply( _this, []);
        _this.sp=Tonyu.globals.$W*0.05;
        while (true) {
          Tonyu.checkLoop();
          _this.foll();
          _this.update();
          
        }
      },
      fiber$main :function _trc_CoolGuyFollItem_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_CoolGuyFollItem_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              __superClass.prototype.fiber$main.apply( _this, [_thread]);
              __pc=1;return;
            case 1:
              
              _this.sp=Tonyu.globals.$W*0.05;
            case 2:
              _this.fiber$foll(_thread);
              __pc=3;return;
            case 3:
              
              _this.fiber$update(_thread);
              __pc=4;return;
            case 4:
              
              __pc=2;break;
            case 5     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"sp":{}}}
});

//# sourceMappingURL=concat.js.map