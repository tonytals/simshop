Mensagem = new Meteor.Collection("mensagem");

if (Meteor.isClient) {
  Template.formulario.events({
    'click #enviar': function(event, template) {
      var nome = template.find('#nome').value;
      var conteudo = template.find('#conteudo').value;
      Mensagem.insert({nome: nome,
                       conteudo: conteudo,
                       data: new Date().toLocaleString()});
      event.preventDefault();
    }
  });

  Template.mensagens.created = function() {
    Meteor.subscribe("mensagens");
  };

  Template.mensagens.timeline = function() {
    return Mensagem.find({});
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Meteor.publish("mensagens", function () {
      return Mensagem.find({});
    });
    console.log("Rodando MicroTwitter");
  });
}