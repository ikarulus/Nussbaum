/**
 * @desc        app globals
 */
define([
    "jquery",
    "underscore",
    "backbone"
],
    function ($, _, Backbone) {

        var app = {
            root: "/",                     // The root path to run the application through.
            URL: "/",                      // Base application URL
            API: "",                   // Base API URL (used by models & collections)

            // Show alert classes and hide after specified timeout
            showAlert: function (text, klass, duration) {
                if (text == 403) text = "Forbidden";
                else text = "HTTP "+text;
                    $("#header-alert").removeClass("alert-danger alert-warning alert-success alert-info");
                $("#header-alert").addClass(klass);
                $("#header-alert").html(
                    '<button type="button" class="close" data-dismiss="alert">&times;</button><p class="mb-0">' + text + '</p>');
                $("#header-alert").show();
                if (typeof duration === "undefined") var duration = 3000
                if (!duration == 0) {
                    setTimeout(function () {
                        $("#header-alert").hide();
                    }, duration);
                }
            },
            // TODO: Create module for this...
            timeAgo: function (timestamp) {
                var date = new Date(timestamp);
                return date.toDateString();
            }
        };
        //TODO ANTI-cache in backend
        // remove timestamp from jquery ajax (https://bugs.jquery.com/ticket/8298)
        //$.ajaxSetup({ cache: false });          // force ajax call on all browsers
        $.ajaxSetup({ cache: true }); 

        // Global event aggregator
        app.eventAggregator = _.extend({}, Backbone.Events);

        // View.close() event for garbage collection
        Backbone.View.prototype.close = function () {
            this.remove();
            this.unbind();
            if (this.onClose) {
                this.onClose();
            }
        };

        return app;

    });
