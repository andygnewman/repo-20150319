var $ = function (selector) {
  var elements = [];

// Parse individual selectors
  var idName;
  var className;
  var tagName;

  var findIdName = function(selector) {
    if (selector.indexOf('#') !== -1) {
      var idNameStart = selector.indexOf('#') + 1;
      var idNameLength;
      if (selector.substr(selector.indexOf('#')).indexOf('.') !== -1) {
        idNameLength = selector.substr(selector.indexOf('#') + 1).indexOf('.');
      }
      else {
        idNameLength = selector.length - idNameStart;
      }
      idName = selector.substr(idNameStart, idNameLength);
    }
  }

  var findClassName = function(selector) {
    if (selector.indexOf('.') !== -1) {
      var classNameStart = selector.indexOf('.') + 1;
      var classNameLength;
      if (selector.substr(selector.indexOf('.')).indexOf('#') !== -1) {
        classNameLength = selector.substr(selector.indexOf('.') + 1).indexOf('#');
      }
      else {
        classNameLength = selector.length - classNameStart;
      }
      className = selector.substr(classNameStart, classNameLength);
    }
  }

  var findTagName = function(selector) {
    if (selector.slice(0,1).search(/[\W]/) === -1 ) {
      var tagNameStart = 0;
      var tagNameLength;
      if (/[\W]/.exec(selector)) {
        tagNameLength = selector.indexOf(/[\W]/.exec(selector));
      }
      else {
        tagNameIndexEnd = selector.length;
      }
      tagName = selector.substr(tagNameStart, tagNameLength);
    }
  }

  findIdName(selector);
  findClassName(selector);
  findTagName(selector);

//Find matching elements
  var resultId = [];
  var resultClass = [];
  var resultTag = [];
  var selectorsUsed = 0;

  if (idName !== undefined) {
    resultId.push(document.getElementById(idName));
    selectorsUsed += 1;
  }
  if (className !== undefined) {
    resultClass = [].slice.call(document.getElementsByClassName(className));
    selectorsUsed += 1;
  }
  if (tagName !== undefined) {
    resultTag = [].slice.call(document.getElementsByTagName(tagName));
    selectorsUsed += 1;
  }

  var concatResult = resultId.concat(resultClass, resultTag);

  var uniqueItems  = concatResult.filter(function(value, index, self) {
    return self.indexOf(value) === index;
  });

  for (var i = 0; i < uniqueItems.length; i++) {
    var uniqueValue = uniqueItems[i];
    var filterByProperty = concatResult.filter(function(value) {
      return value === uniqueValue;
    });
    if (filterByProperty.length === selectorsUsed) {
      elements.push(uniqueValue);
    }
  }

  return elements;
}
