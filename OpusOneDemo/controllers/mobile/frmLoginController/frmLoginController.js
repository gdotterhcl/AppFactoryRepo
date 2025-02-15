define({ 

  isLoginDisplayed : false,
  
  fadeInLogo : function()
  {
    var self = this;
    
    voltmx.print("##### fadeInLogo() start #####");

    voltmx.print("##### fadeInLogo() setting definitions #####");

    var fadeInDef = {
      100: {
        "stepConfig": {
          "timingFunction": voltmx.anim.EASE_IN
        },
        "opacity" : 1.0
      }        
    };

    var fadeInAnim = voltmx.ui.createAnimation(fadeInDef);

    voltmx.print("##### fadeInLogo() setting configurations #####");

    var fadeInConfig = {
      "delay": 0,
      "iterationCount": 1,
      "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
      "duration": 1.5
    };

    voltmx.print("##### fadeInLogo() setting callbacks #####");

    var fadeInCallback = {
      "animationEnd": function(){self.slideInTitle(); /*self.slideInImage();*/ self.slideUpPoweredBy(); self.startLoginTimer();}
    };

    voltmx.print("##### fadeInLogo() calling animate() #####");

    self.view.imghclsw.animate(fadeInAnim, fadeInConfig, fadeInCallback);

    voltmx.print("##### fadeInLogo() end #####");
  },
  
  animateLogin : function()
  {
    this.slideUpPoweredBy(); 
    this.startLoginTimer();   
  },
  
  fadeInLogin : function()
  {
    var self = this;
    
    voltmx.print("##### fadeInLogo() start #####");

    voltmx.print("##### fadeInLogo() setting definitions #####");

    var fadeInDef = {
      100: {
        "stepConfig": {
          "timingFunction": voltmx.anim.EASE_IN
        },
        "opacity" : 1.0
      }        
    };

    var fadeInAnim = voltmx.ui.createAnimation(fadeInDef);

    voltmx.print("##### fadeInLogo() setting configurations #####");

    var fadeInConfig = {
      "delay": 0,
      "iterationCount": 1,
      "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
      "duration": 1.0
    };

    voltmx.print("##### fadeInLogo() setting callbacks #####");

    var fadeInCallback = {
      "animationEnd": function(){isLoginDisplayed = true;}
    };

    voltmx.print("##### fadeInLogo() calling animate() #####");

    self.view.flxLoginFields.animate(fadeInAnim, fadeInConfig, fadeInCallback);
    //self.view.flxAnonFunctions.animate(fadeInAnim, fadeInConfig, fadeInCallback);
    
    self.isLoginDisplayed = true;

    voltmx.print("##### fadeInLogo() end #####");
  },
  
  slideInTitle : function()
  {
    var self = this;
    
    voltmx.print("##### slideInTitle() start #####");

    voltmx.print("##### slideInTitle() setting definitions #####");

    var slideInDef = {
      100: {
        "stepConfig": {
          "timingFunction": voltmx.anim.EASE_IN
        },
        "centerX" : "50%"
      }        
    };

    var slideInAnim = voltmx.ui.createAnimation(slideInDef);

    voltmx.print("##### slideInTitle() setting configurations #####");

    var slideInConfig = {
      "delay": 0,
      "iterationCount": 1,
      "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
      "duration": 1.0
    };

    voltmx.print("##### slideInTitle() setting callbacks #####");

    var slideInCallback = {
      "animationEnd": null
    };

    voltmx.print("##### slideInTitle() calling animate() #####");

    self.view.lblTitle.animate(slideInAnim, slideInConfig, slideInCallback);

    voltmx.print("##### slideInTitle() end #####");
  },
  
  slideInImage : function()
  {
    var self = this;
    
    voltmx.print("##### slideInImage() start #####");

    voltmx.print("##### slideInImage() setting definitions #####");

    var slideInDef = {
      100: {
        "stepConfig": {
          "timingFunction": voltmx.anim.EASE_IN
        },
        "right" : "0%"
      }        
    };

    var slideInAnim = voltmx.ui.createAnimation(slideInDef);

    voltmx.print("##### slideInImage() setting configurations #####");

    var slideInConfig = {
      "delay": 0,
      "iterationCount": 1,
      "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
      "duration": 1.0
    };

    voltmx.print("##### slideInImage() setting callbacks #####");

    var slideInCallback = {
      "animationEnd": self.animateClouds
    };

    voltmx.print("##### slideInImage() calling animate() #####");

    self.view.imgSplash.animate(slideInAnim, slideInConfig, slideInCallback);

    voltmx.print("##### slideInImage() end #####");
  },
  
  slideUpPoweredBy : function()
  {
    var self = this;
    
    voltmx.print("##### slideUpPoweredBy() start #####");

    voltmx.print("##### slideUpPoweredBy() setting definitions #####");

    var slideUpDef = {
      100: {
        "stepConfig": {
          "timingFunction": voltmx.anim.EASE_IN
        },
        "bottom" : "24dp"
      }        
    };

    var slideUpAnim = voltmx.ui.createAnimation(slideUpDef);

    voltmx.print("##### slideUpPoweredBy() setting configurations #####");

    var slideUpConfig = {
      "delay": 0,
      "iterationCount": 1,
      "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
      "duration": 1.0 /* 1.0 */
    };

    voltmx.print("##### slideUpPoweredBy() setting callbacks #####");

    var slideUpCallback = {
      "animationEnd": null
    };

    voltmx.print("##### slideUpPoweredBy() calling animate() #####");

    self.view.imgPoweredBy.animate(slideUpAnim, slideUpConfig, slideUpCallback);

    voltmx.print("##### slideUpPoweredBy() end #####");
  },
  
  animateClouds : function()
  {
    var self = this;
    
    voltmx.print("##### animateClouds() start #####");

    voltmx.print("##### animateClouds() setting definitions #####");

    var deviceScrWidth = voltmx.os.deviceInfo().screenWidth + "dp";
    
    var cloudDef = {
      100: {
        "stepConfig": {
          "timingFunction": voltmx.anim.LINEAR
        },
        "right" : deviceScrWidth
      }        
    };

    var cloudAnim = voltmx.ui.createAnimation(cloudDef);

    voltmx.print("##### animateClouds() setting configurations #####");

    var cloud1Config = {
      "delay": 0,
      "iterationCount": 0,
      "fillMode": voltmx.anim.FILL_MODE_BACKWARDS,
      "duration": 4.0
    };

    var cloud2Config = {
      "delay": 0,
      "iterationCount": 0,
      "fillMode": voltmx.anim.FILL_MODE_BACKWARDS,
      "duration": 3.0
    };    
    
    var cloud3Config = {
      "delay": 0,
      "iterationCount": 0,
      "fillMode": voltmx.anim.FILL_MODE_BACKWARDS,
      "duration": 8.0
    };    
    
    var cloud4Config = {
      "delay": 0,
      "iterationCount": 0,
      "fillMode": voltmx.anim.FILL_MODE_BACKWARDS,
      "duration": 6.0
    };
    
    var cloud5Config = {
      "delay": 0,
      "iterationCount": 0,
      "fillMode": voltmx.anim.FILL_MODE_BACKWARDS,
      "duration": 5.0
    };
    
    voltmx.print("##### animateClouds() setting callbacks #####");

    var cloudCallback = {
      "animationEnd": null
    };

    voltmx.print("##### animateClouds() calling animate() #####");

    self.view.imgMovingCloud1.animate(cloudAnim, cloud1Config, cloudCallback);
    self.view.imgMovingCloud2.animate(cloudAnim, cloud2Config, cloudCallback);
    self.view.imgMovingCloud3.animate(cloudAnim, cloud3Config, cloudCallback);
    self.view.imgMovingCloud4.animate(cloudAnim, cloud4Config, cloudCallback);
    self.view.imgMovingCloud5.animate(cloudAnim, cloud5Config, cloudCallback);

    voltmx.print("##### animateClouds() end #####");    
  },
  
  slideUpLoginBox : function()
  {
    var self = this;
    
    voltmx.print("##### animateLoginBox() start #####");

    voltmx.print("##### animateLoginBox() setting definitions #####");

    var slideUpDef = {
      100: {
        "stepConfig": {
          "timingFunction": voltmx.anim.EASE_IN
        },
        "bottom" : "-144dp"
      }        
    };

    var slideUpAnim = voltmx.ui.createAnimation(slideUpDef);

    voltmx.print("##### animateLoginBox() setting configurations #####");

    var slideUpConfig = {
      "delay": 0,
      "iterationCount": 1,
      "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
      "duration": 1.5
    };

    voltmx.print("##### animateLoginBox() setting callbacks #####");

    var slideUpCallback = {
      "animationEnd": self.fadeInLogin
    };

    voltmx.print("##### animateLoginBox() calling animate() #####");

    self.view.flxLoginBox.animate(slideUpAnim, slideUpConfig, slideUpCallback);

    voltmx.print("##### animateLoginBox() end #####");    
  },
  
  startLoginTimer : function()
  {
    voltmx.timer.schedule("LOGINTIMER", this.slideUpLoginBox, 2, false);
  }

 });