var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var WebApiClient;
(function (WebApiClient) {
    /* tslint:disable */
    //----------------------
    // <auto-generated>
    //     Generated using the NSwag toolchain v11.3.3.0 (NJsonSchema v9.4.2.0) (http://NSwag.org)
    // </auto-generated>
    //----------------------
    // ReSharper disable InconsistentNaming
    var CountriesClient = (function () {
        function CountriesClient(baseUrl, http) {
            this.jsonParseReviver = undefined;
            this.http = http ? http : window;
            this.baseUrl = baseUrl ? baseUrl : "http://localhost:60142";
        }
        CountriesClient.prototype.getCountries = function () {
            var _this = this;
            var url_ = this.baseUrl + "/api/Countries";
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetCountries(_response);
            });
        };
        CountriesClient.prototype.processGetCountries = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (_responseText) {
                    var result200 = null;
                    var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                    if (resultData200 && resultData200.constructor === Array) {
                        result200 = [];
                        for (var _i = 0, resultData200_1 = resultData200; _i < resultData200_1.length; _i++) {
                            var item = resultData200_1[_i];
                            result200.push(Country.fromJS(item));
                        }
                    }
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (_responseText) {
                    return throwException("An unexpected server error occurred.", status, _responseText);
                });
            }
            return Promise.resolve(null);
        };
        CountriesClient.prototype.getCountry = function (id) {
            var _this = this;
            var url_ = this.baseUrl + "/api/Countries/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetCountry(_response);
            });
        };
        CountriesClient.prototype.processGetCountry = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (_responseText) {
                    var result200 = null;
                    var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                    result200 = resultData200 ? Country.fromJS(resultData200) : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (_responseText) {
                    return throwException("An unexpected server error occurred.", status, _responseText);
                });
            }
            return Promise.resolve(null);
        };
        return CountriesClient;
    }());
    WebApiClient.CountriesClient = CountriesClient;
    var ValuesClient = (function () {
        function ValuesClient(baseUrl, http) {
            this.jsonParseReviver = undefined;
            this.http = http ? http : window;
            this.baseUrl = baseUrl ? baseUrl : "http://localhost:60142";
        }
        ValuesClient.prototype.getAll = function () {
            var _this = this;
            var url_ = this.baseUrl + "/api/Values";
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGetAll(_response);
            });
        };
        ValuesClient.prototype.processGetAll = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (_responseText) {
                    var result200 = null;
                    var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                    if (resultData200 && resultData200.constructor === Array) {
                        result200 = [];
                        for (var _i = 0, resultData200_2 = resultData200; _i < resultData200_2.length; _i++) {
                            var item = resultData200_2[_i];
                            result200.push(Data.fromJS(item));
                        }
                    }
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (_responseText) {
                    return throwException("An unexpected server error occurred.", status, _responseText);
                });
            }
            return Promise.resolve(null);
        };
        ValuesClient.prototype.post = function (value) {
            var _this = this;
            var url_ = this.baseUrl + "/api/Values";
            url_ = url_.replace(/[?&]$/, "");
            var content_ = JSON.stringify(value);
            var options_ = {
                body: content_,
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processPost(_response);
            });
        };
        ValuesClient.prototype.processPost = function (response) {
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (_responseText) {
                    return;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (_responseText) {
                    return throwException("An unexpected server error occurred.", status, _responseText);
                });
            }
            return Promise.resolve(null);
        };
        ValuesClient.prototype.get = function (id) {
            var _this = this;
            var url_ = this.baseUrl + "/api/Values/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processGet(_response);
            });
        };
        ValuesClient.prototype.processGet = function (response) {
            var _this = this;
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (_responseText) {
                    var result200 = null;
                    var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                    result200 = resultData200 !== undefined ? resultData200 : null;
                    return result200;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (_responseText) {
                    return throwException("An unexpected server error occurred.", status, _responseText);
                });
            }
            return Promise.resolve(null);
        };
        ValuesClient.prototype.put = function (id, value) {
            var _this = this;
            var url_ = this.baseUrl + "/api/Values/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var content_ = JSON.stringify(value);
            var options_ = {
                body: content_,
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processPut(_response);
            });
        };
        ValuesClient.prototype.processPut = function (response) {
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (_responseText) {
                    return;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (_responseText) {
                    return throwException("An unexpected server error occurred.", status, _responseText);
                });
            }
            return Promise.resolve(null);
        };
        ValuesClient.prototype["delete"] = function (id) {
            var _this = this;
            var url_ = this.baseUrl + "/api/Values/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");
            var options_ = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            };
            return this.http.fetch(url_, options_).then(function (_response) {
                return _this.processDelete(_response);
            });
        };
        ValuesClient.prototype.processDelete = function (response) {
            var status = response.status;
            if (status === 200) {
                return response.text().then(function (_responseText) {
                    return;
                });
            }
            else if (status !== 200 && status !== 204) {
                return response.text().then(function (_responseText) {
                    return throwException("An unexpected server error occurred.", status, _responseText);
                });
            }
            return Promise.resolve(null);
        };
        return ValuesClient;
    }());
    WebApiClient.ValuesClient = ValuesClient;
    var Country = (function () {
        function Country(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        Country.prototype.init = function (data) {
            if (data) {
                this.name = data["name"] !== undefined ? data["name"] : null;
                if (data["region"] && data["region"].constructor === Array) {
                    this.region = [];
                    for (var _i = 0, _a = data["region"]; _i < _a.length; _i++) {
                        var item = _a[_i];
                        this.region.push(Region.fromJS(item));
                    }
                }
            }
        };
        Country.fromJS = function (data) {
            var result = new Country();
            result.init(data);
            return result;
        };
        Country.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["name"] = this.name !== undefined ? this.name : null;
            if (this.region && this.region.constructor === Array) {
                data["region"] = [];
                for (var _i = 0, _a = this.region; _i < _a.length; _i++) {
                    var item = _a[_i];
                    data["region"].push(item.toJSON());
                }
            }
            return data;
        };
        return Country;
    }());
    WebApiClient.Country = Country;
    var Region = (function () {
        function Region(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        Region.prototype.init = function (data) {
            if (data) {
                this.id = data["id"] !== undefined ? data["id"] : null;
                this.name = data["name"] !== undefined ? data["name"] : null;
            }
        };
        Region.fromJS = function (data) {
            var result = new Region();
            result.init(data);
            return result;
        };
        Region.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["id"] = this.id !== undefined ? this.id : null;
            data["name"] = this.name !== undefined ? this.name : null;
            return data;
        };
        return Region;
    }());
    WebApiClient.Region = Region;
    var Data = (function () {
        function Data(data) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        this[property] = data[property];
                }
            }
        }
        Data.prototype.init = function (data) {
            if (data) {
                this.value = data["value"] !== undefined ? data["value"] : null;
            }
        };
        Data.fromJS = function (data) {
            var result = new Data();
            result.init(data);
            return result;
        };
        Data.prototype.toJSON = function (data) {
            data = typeof data === 'object' ? data : {};
            data["value"] = this.value !== undefined ? this.value : null;
            return data;
        };
        return Data;
    }());
    WebApiClient.Data = Data;
    var SwaggerException = (function (_super) {
        __extends(SwaggerException, _super);
        function SwaggerException(message, status, response, result) {
            var _this = _super.call(this) || this;
            _this.message = message;
            _this.status = status;
            _this.response = response;
            _this.result = result;
            return _this;
        }
        return SwaggerException;
    }(Error));
    WebApiClient.SwaggerException = SwaggerException;
    function throwException(message, status, response, result) {
        if (result !== null && result !== undefined)
            throw result;
        else
            throw new SwaggerException(message, status, response, null);
    }
})(WebApiClient || (WebApiClient = {}));
