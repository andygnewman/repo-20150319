var $ = function (selector) {
  var elements = [];
  var idName = findName(selector, 'id');
  var className = findName(selector, 'class');
  var tagName = findTagName(selector);
  var resultId = [], resultClass = [], resultTag = [];
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

var findTagName = function(selector) {
  if (selector.slice(0,1).search(/[\W]/) === -1 ) {
    var tagNameStart = 0, tagNameLength;
    if (/[\W]/.exec(selector)) {
      tagNameLength = selector.indexOf(/[\W]/.exec(selector));
    }
    else tagNameIndexEnd = selector.length;
    return selector.substr(tagNameStart, tagNameLength);
  }
}

var findName = function(selector, type) {
  if (type === 'class') var first = '.', second = '#';
  else if (type === 'id') var first = '#', second = '.';
  else return 'Unhandled type';
  if (selector.indexOf(first) !== -1) {
    var nameStart = selector.indexOf(first) + 1, nameLength;
    if (selector.substr(selector.indexOf(first)).indexOf(second) !== -1) {
      nameLength = selector.substr(selector.indexOf(first) + 1).
        indexOf(second);
    }
    else nameLength = selector.length - nameStart;
    return selector.substr(nameStart, nameLength);
  }
}
