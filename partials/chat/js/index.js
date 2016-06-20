'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Messenger = function () {
  function Messenger() {
    _classCallCheck(this, Messenger);

    this.messageList = [];
    this.deletedList = [];

    this.me = 1; // completely arbitrary id
    this.them = 5; // and another one

    this.onRecieve = function (message) {
      return console.log('Recieved: ' + message.text);
    };
    this.onSend = function (message) {
      return console.log('Sent: ' + message.text);
    };
    this.onDelete = function (message) {
      return console.log('Deleted: ' + message.text);
    };
  }

  Messenger.prototype.send = function send() {
    var text = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    text = this.filter(text);

    if (this.validate(text)) {
      var message = {
        user: this.me,
        text: text,
        time: new Date().getTime()
      };

      this.messageList.push(message);

      this.onSend(message);
    }
  };

  Messenger.prototype.recieve = function recieve() {
    var text = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    text = this.filter(text);

    if (this.validate(text)) {
      var message = {
        user: this.them,
        text: text,
        time: new Date().getTime()
      };

      this.messageList.push(message);

      this.onRecieve(message);
    }
  };

  Messenger.prototype.delete = function _delete(index) {
    index = index || this.messageLength - 1;

    var deleted = this.messageLength.pop();

    this.deletedList.push(deleted);
    this.onDelete(deleted);
  };

  Messenger.prototype.filter = function filter(input) {
    var output = input.replace('bad input', 'good output'); // such amazing filter there right?
    return output;
  };

  Messenger.prototype.validate = function validate(input) {
    return !!input.length; // an amazing example of validation I swear.
  };

  return Messenger;
}();

var BuildHTML = function () {
  function BuildHTML() {
    _classCallCheck(this, BuildHTML);

    this.messageWrapper = 'message-wrapper';
    this.circleWrapper = 'circle-wrapper';
    this.textWrapper = 'text-wrapper';

    this.meClass = 'me';
    this.themClass = 'them';
  }

  BuildHTML.prototype._build = function _build(text, who) {
    return '<div class="' + this.messageWrapper + ' ' + this[who + 'Class'] + '">\n              <div class="' + this.circleWrapper + ' animated bounceIn"></div>\n              <div class="' + this.textWrapper + '">...</div>\n            </div>';
  };

  BuildHTML.prototype.me = function me(text) {
    return this._build(text, 'me');
  };

  BuildHTML.prototype.them = function them(text) {
    return this._build(text, 'them');
  };

  return BuildHTML;
}();

$(document).ready(function () {

  setInterval(function(){
    document.getElementById('input').placeholder = "Type message . . .";

    var messenger = new Messenger();
    var buildHTML = new BuildHTML();

    var $input = $('#input');
    var $send = $('#send');
    var $content = $('#content');
    var $inner = $('#inner');

    function safeText(text) {
      $content.find('.message-wrapper').last().find('.text-wrapper').text(text);
    }

    function animateText() {
      setTimeout(function () {
        $content.find('.message-wrapper').last().find('.text-wrapper').addClass('animated fadeIn');
      }, 350);
    }

    function scrollBottom() {
      $($inner).animate({
        scrollTop: $($content).offset().top + $($content).outerHeight(true)
      }, {
        queue: false,
        duration: 'ease'
      });
    }

    function buildSent(message) {
      //console.log('sending: ', message.text);

      $content.append(buildHTML.me(message.text));
      safeText(message.text);
      animateText();

      scrollBottom();
    }

    function buildRecieved(message) {
      //console.log('recieving: ', message.text);

      $content.append(buildHTML.them(message.text));
      safeText(message.text);
      animateText();

      scrollBottom();
    }

    function sendMessage() {
      var text = $input.val();
      messenger.send(text);

      $input.val('');
      $input.focus();
    }

    messenger.onSend = buildSent;
    messenger.onRecieve = buildRecieved;

    setTimeout(function () {
      messenger.recieve('message one!');
    }, 1500);

    setTimeout(function () {
      buildSent({'text':'message one!'});
    }, 3000);

    setTimeout(function () {
      messenger.recieve('message two!');
    }, 4500);

    setTimeout(function () {
      buildSent({'text':'message two!'});
    }, 6000);

    setTimeout(function () {
      messenger.recieve('message three!');
    }, 7500);

    setTimeout(function () {
      buildSent({'text':'message three!'});
    }, 9000);

    $input.focus();

    $send.on('click', function (e) {
      sendMessage();
    });

    $input.on('keydown', function (e) {
      var key = e.which || e.keyCode;

      if (key === 13) {
        // enter key
        e.preventDefault();

        sendMessage();
      }
    });

  }, 5000);

});
