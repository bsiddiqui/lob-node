// Generated by CoffeeScript 1.6.3
(function() {
  var BankAccounts,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  module.exports = BankAccounts = (function(_super) {
    __extends(BankAccounts, _super);

    function BankAccounts(api) {
      this.api = api;
      this.path = "bank_accounts";
      this;
    }

    BankAccounts.prototype.create = function(_object, callback) {
      this.api.request("POST", this.path, _object, callback);
      return this;
    };

    return BankAccounts;

  })(require("./common"));

}).call(this);
