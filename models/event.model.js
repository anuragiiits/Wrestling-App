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
          event_name: String,
          description: String,
          event_date: String,
          event_id: String,
          banner_link: String,
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