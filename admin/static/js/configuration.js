function saveConfiguration() {
  var _csrftoken = $("#csrftoken").val();
  var _editor = $('#conf').data('CodeMirrorInstance');
  var _configuration = _editor.getValue();

  var _url = window.location.pathname;

  var data = {
    csrftoken: _csrftoken,
    configuration: btoa(_configuration),
  };
  sendPostRequest(data, _url, '', true);
  $('#configuration_header').removeClass("bg-changed");
}

function saveIntervals() {
  var _csrftoken = $("#csrftoken").val();
  var _config = $("#conf_range").val();
  var _log = $("#logging_range").val();
  var _query = $("#query_range").val();

  var _url = '/intervals/' + window.location.pathname.split('/').pop();

  var data = {
    csrftoken: _csrftoken,
    config: parseInt(_config),
    log: parseInt(_log),
    query: parseInt(_query),
  };
  sendPostRequest(data, _url, '', true);
  $('#intervals_header').removeClass("bg-changed");
}

function changeIntervalValue(range_input, range_output) {
  range_output.value = range_input.value;
  $('#intervals_header').addClass("bg-changed");
}

function lineCharPosition(_pos) {
  var line = 0;
  var ttl = 0;
  $('.CodeMirror-line').each(function () {
    //console.log('Line ' + line);
    var l = $(this).text().length;
    ttl += l;
    if (ttl >= _pos) {
      return 'line ' + line;
    }
    line++;
  });
  return 'line ' + line;
}
