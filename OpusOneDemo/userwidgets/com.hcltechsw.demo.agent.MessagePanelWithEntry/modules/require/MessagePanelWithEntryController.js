define(function() {

  //#ifdef PLATFORM_NATIVE_ANDROID_IOS
  let userMessage = require("com/hcltechsw/demo/agent/UserMessage");
  let agentMessage = require("com/hcltechsw/demo/agent/AgentMessage");
  //#endif

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },

    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },

    addMessage : function(textMsg, timeAMPM, msgType)
    {
      voltmx.print("##### MessagePanelWithEntry.addMessage() start");

      let msgNew = null;
      let currMsgCount = this.view.flxMessages.widgets().length;
      let newMsgId = "";

      voltmx.print("##### MessagePanelWithEntry.addMessage() - Current message count: " + currMsgCount);

      switch (msgType)
      {
        case MSGTYPE.USER:
          voltmx.print("##### MessagePanelWithEntry.addMessage() - Creating user message.");

          newMsgId = "flxUserMsg" + (currMsgCount + 1);

          msgNew = new com.hcltechsw.demo.agent.UserMessage({id:newMsgId,"top":"12dp", "left":"0dp", "right":"0dp"}, {}, {});

          msgNew.textMsg = textMsg;
          msgNew.textTime = timeAMPM;

          voltmx.print("##### MessagePanelWithEntry.addMessage() - User Message " + msgNew.id + " created.");

          break;
        case MSGTYPE.AGENT:
          voltmx.print("##### MessagePanelWithEntry.addMessage() - Creating agent message.");

          newMsgId = "flxAgentMsg" + (currMsgCount + 1);

          msgNew = new com.hcltechsw.demo.agent.AgentMessage({id:newMsgId,"top":"12dp", "left":"0dp", "right":"0dp"}, {}, {});

          msgNew.src = IMAGES.AGENT.AVATAR;
          msgNew.textAgentName = "James";
          msgNew.textAgentPos = "Product Specialist";
          msgNew.textMsg = textMsg; //"Yes sir, I think I see your point.";
          msgNew.textTime = timeAMPM;

          voltmx.print("##### MessagePanelWithEntry.addMessage() - Agent Message " + msgNew.id + " created.");

          break;
      }

      this.view.flxMessagePanelWithEntry.flxMessages.add(msgNew);

      this.view.txtMessageEntry.text = "";

      this.view.flxMessagePanelWithEntry.flxMessages.scrollToEnd();
    },

    clearAllMessages : function()
    {
      this.view.flxMessages.removeAll();
      this.view.txtMessageEntry.text = "";
    },

    toggleTypingPanel : function(bShow, who)
    {
      if (bShow === true)
      {
        // Toggle who
        switch (who)
        {
          case MSGTYPE.AGENT:
            this.view.TypingIconPanel.isAgentVisible = true;
            this.view.TypingIconPanel.isUserVisible = false;
            break;
          case MSGTYPE.USER:
            this.view.TypingIconPanel.isAgentVisible = false;
            this.view.TypingIconPanel.isUserVisible = true;
            break;
        } 
      }

      this.animateTypingPanel(bShow);
    },

    animateTypingPanel : function(bMoveUp)
    {
      let moveMsgsDef = {
        100: {
          "stepConfig": {
            "timingFunction": voltmx.anim.EASE_IN
          },
          "bottom" : ((bMoveUp === true) ? "136dp" : "72dp")
        }        
      };

      let moveMsgsAnim = voltmx.ui.createAnimation(moveMsgsDef);

      voltmx.print("##### animateTypingPanel() setting configurations #####");

      let moveConfig = {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
        "duration": 0.3
      };

      voltmx.print("##### animateTypingPanel() setting callbacks #####");

      let moveCallback = {
        "animationEnd": null
      };

      voltmx.print("##### animateTypingPanel() calling animate() #####");

      this.view.flxMessages.animate(moveMsgsAnim, moveConfig, moveCallback);
    }

  };
});