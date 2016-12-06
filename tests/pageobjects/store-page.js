var basepage = require('./basepage')
var acPage = require('./access-control-page')

var storePage = Object.create(basepage, {
    /**
     * define elements
     */
    private: {
        get: function() {
            return browser.element("a[href*='/store/section/private']");
        }
    },
    /**
     * define or overwrite page methods
     */
    open: {
        value: function() {
            browser.deleteCookie();
            acPage.open();
            var valid_token = "";
            browser.call(function() {
                return snaputil.getToken().then(function(res) {
                    valid_token = res.trim();
                });
            });
            acPage.submit_token(valid_token);
            loginpage = browser.element(".region-installed");
            loginpage.waitForVisible();
            browser.url('/store');
        }
    },

});

module.exports = storePage