module.exports = mongoose => {

    var linkSchema = mongoose.Schema(
        {
          DM1: [String],
          DM2: [String],
          DM3: [String],
        },
        { _id : false }
    );

    var schema = mongoose.Schema(
        {
          title: String,
          description: String,
          event_date: Number,
          event_id: String,
          all_links: linkSchema
        },
        { timestamps: true }
    ); 

    schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
    });

    const Event = mongoose.model("event", schema);
    return Event;
};