const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
 * Collection Name: bet
 */
const betSchema = new Schema({
    name           :  { type: String, default: null },
    category       :  { type: String, default: null },
    prizepool      :  { type: String, default: null },
    buyIn          :  { type: String, default: null },
    maxPlayers     :  { type: String, default: null },
    description    :  { type: String, default: null },
    users          :  [{ type: String, default: null }],
    isDeleted      :  { type: Boolean, default: false }
},
{
    timestamps: true
});

module.exports = mongoose.model("bet" , betSchema, "bets");
