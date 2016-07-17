(function (window) {
  var title = 'Wanna use some java-script? Please, don't!';
  window.alert = window.alert.bind(window, title);

  var ignore = [
    'alert', 'document'
  ];

  function override(obj) {

    for (var prop in obj) {
      if (ignore.indexOf(prop) > -1) continue;

      switch (typeof obj[prop]) {
        case 'object':
          override(prop);
          break;
        case 'string':
          obj[prop] = title;
          break;
        case 'function':
          obj[prop] = function () {
            alert(title);
          }
          break;
        case 'number':
          obj[prop] = NaN;
          break;
      }
    }
  }

  override(window);

  window.console = {
    log: alert,
    assert: alert,
    clear: alert,
    constructor: alert,
    count: alert,
    debug: alert,
    dir: alert,
    dirxml: alert,
    error: alert,
    group: alert,
    groupCollapsed: alert,
    groupEnd: alert,
    info: alert,
    log: alert,
    markTimeline: alert,
    profile: alert,
    profileEnd: alert,
    table: alert,
    time: alert,
    timeEnd: alert,
    timeStamp: alert,
    timeline: alert,
    timelineEnd: alert,
    trace: alert,
    warn: alert,
  };

})(window);
