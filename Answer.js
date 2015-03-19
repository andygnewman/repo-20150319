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
      console.log('idName', idName);
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
      console.log('className', className);
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
      console.log('tagName', tagName);
    }
  }

  findIdName(selector);
  findClassName(selector);
  findTagName(selector);

//Find matching elements
  var resultMatches = [];
  var resultId = [];
  var resultClass = [];
  var resultTag = [];
  var selectorsUsed = 0;

  if (idName !== undefined) {
    resultId.push(document.getElementById(idName));
    selectorsUsed += 1;
    console.log('ResultId', resultId);
  }
  if (className !== undefined) {
    resultClass = [].slice.call(document.getElementsByClassName(className));
    selectorsUsed += 1;
    console.log('ResultClass', resultClass);
  }
  if (tagName !== undefined) {
    resultTag = [].slice.call(document.getElementsByTagName(tagName));
    selectorsUsed += 1;
    console.log('ResultTag', resultTag);
  }

//concatonate results from all selectors
  var concatResult = resultId.concat(resultClass, resultTag);
  console.log('concatresult', concatResult);

//get unique values from concatonated results
  var uniqueItems  = concatResult.filter(function(value, index, self) {
    return self.indexOf(value) === index;
  });

  console.log('uniqueItems', uniqueItems);

  console.log('elements', elements);
  return elements;
}
