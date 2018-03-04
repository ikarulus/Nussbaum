define([
    "app",

    "text!templates/CreateTicket.html",

    "collections/TicketCollection",

    "parsley"
], function (app, CreateTicketViewTpl, TicketCollection) {

    var CreateTicketView = Backbone.View.extend({

        initialize: function () {
            _.bindAll(this);
            this.TicketCollection = new TicketCollection({});
        },

        events: {
            "click #CreateTicket-btn": "onCreateTicket"
        },

        render: function () {
            if (app.session.get('logged_in')) this.template = _.template(CreateTicketViewTpl);
            else this.template = _.template(CreateTicketViewTpl);
            //If no login was required: 
            //this.template = _.template(CreateTicketViewTpl);

            this.$el.html(this.template({ user: app.session.user.toJSON() }));
            return this;
        },

        onCreateTicket: function (e) {
            e.preventDefault();
            this.TicketCollection.create({
                issuer: this.$("#CreateTicket-issuer").val(),
                headline: this.$("#CreateTicket-headline").val(),
                //room: this.$("#CreateTicket-room").val(),
                content: this.$("#CreateTicket-content").val()
            });
            Backbone.history.navigate('#', true);
        }

    });

    return CreateTicketView;
});