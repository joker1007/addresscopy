if(!com) var com={};
if(!com.ngmen) com.ngmen={};

com.ngmen.AddressCopy = {
  generateMail: function() {
    var message = gFolderDisplay.selectedMessage;
    var recipients = message.recipients;
    var ccRecipients = message.ccList;
    var bccRecipients = message.bccList;
    var msgComposeService =
      Components.classes["@mozilla.org/messengercompose;1"].getService(Components.interfaces.nsIMsgComposeService);
    var msgComposeType = Components.interfaces.nsIMsgCompType;
    var msgComposeFormat = Components.interfaces.nsIMsgCompFormat;
    dump(msgComposeService);
    var params = Components.classes['@mozilla.org/messengercompose/composeparams;1'].createInstance(Components.interfaces.nsIMsgComposeParams);
    if (params) {
      params.type = msgComposeType.New;
      params.format = msgComposeFormat.Default;
      var composeFields = Components.classes['@mozilla.org/messengercompose/composefields;1'].createInstance(Components.interfaces.nsIMsgCompFields);
      if (composeFields) {
        composeFields.to = recipients;
        composeFields.cc = ccRecipients;
        composeFields.bcc = bccRecipients;

        params.composeFields = composeFields;
        dump(params);

        msgComposeService.OpenComposeWindowWithParams(null, params);
      }
    }
  }
}
