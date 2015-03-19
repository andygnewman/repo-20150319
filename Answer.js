var $ = function (selector) {
  var elements = [];

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
    resultClass = document.getElementsByClassName(className);
    selectorsUsed += 1;
    console.log('ResultClass', resultClass);
  }
  if (tagName !== undefined) {
    resultTag = document.getElementsByTagName(tagName);
    selectorsUsed += 1;
    console.log('ResultTag', resultTag);
  }

  if (selectorsUsed === 1) {
    if (resultId.length > 0) {
      resultMatches = resultId;
    }
    if (resultClass.length > 0) {
      resultMatches = resultClass;
    }
    if (resultTag.length > 0) {
      resultMatches = resultTag;
    }
  }

  for (var i = 0; i < resultMatches.length; i++) {
    console.log('result', resultMatches[i]);
    console.log('tagname', resultMatches[i].tagName);
  }

  elements = resultMatches;

  console.log('elements', elements);
  return elements;
}
