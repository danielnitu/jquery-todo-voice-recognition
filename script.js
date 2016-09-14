var template = function(text) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

var main = function() {
  $('form').submit(function() {
    var text = $('#todo').val();
    var html;
    if (text.length > 0) {
      html = template(text);
      $('.list').append(html);
      $('#todo').val('');
    }
    return false;
  });
  $('body').on('click', '.glyphicon-star', function() {
    $(this).toggleClass('active');
  });
  $('body').on('click', '.glyphicon-remove', function() {
    $(this).parent().remove();
  });
  var add = function(item) {
      var html = template(item);
      $('.list').append(html);
    };

  var commands = {
      '*item': add
    };
  annyang.addCommands(commands);
  
  $('.btn-speech').on('click', function() {
    if (annyang.isListening()) {
      annyang.abort();
      $('.btn-speech .glyphicon-bullhorn').css('color', '#fff');
    }
    else {
      annyang.start();
      $('.btn-speech .glyphicon-bullhorn').css('color', '#FF2719');
    }
  }); 
};

$(document).ready(main);