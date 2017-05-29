var mongoose = require('mongoose');

module.exports = mongoose.model('Estudiant', {
    nom: String,
    titulacio: String,
    direccio: String,
    telefons: {
        casa: String,
        feina: String   },
    assignatures: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Assignatura'
        }]
});
