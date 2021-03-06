function LocalStorageStateSource(options) {
  options = options || {};

  var defaultNamespace = '';

  var mixin  = {
    _isLocalStorageStateSource: true,
    get: function (key) {
      return localStorage.getItem(getNamespacedKey(key));
    },
    set: function (key, value) {
      localStorage.setItem(getNamespacedKey(key), value);
    }
  };

  return mixin;

  function getNamespacedKey(key) {
    return getNamespace() + key;
  }

  function getNamespace() {
    return options.namespace || defaultNamespace;
  }
}

module.exports = LocalStorageStateSource;