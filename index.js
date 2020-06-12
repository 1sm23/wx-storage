export default {
  getStorage: function (e) {
    return new Promise(function (r) {
      wx.getStorage({
        key: e,
        success: function (e) {
          r(e.data);
        },
        fail: function () {
          r(!1);
        }
      });
    });
  },
  setStorage: function (e, r) {
    return new Promise(function (t) {
      wx.setStorage({
        key: e,
        data: r,
        success: t,
        fail: t
      });
    });
  },
  removeStorage: function (e) {
    return new Promise(function (r) {
      wx.removeStorage({
        key: e,
        success: r,
        fail: r
      });
    });
  },
  getStorageSync: function (e) {
    try {
      return wx.getStorageSync(e);
    } catch (e) {
      console.error(e);
    }
  },
  setStorageSync: function (e, r) {
    try {
      wx.setStorageSync(e, r);
    } catch (e) {
      console.error(e);
    }
  },
  removeStorageSync: function (e) {
    try {
      wx.removeStorageSync(e);
    } catch (e) {
      console.error(e);
    }
  },
}