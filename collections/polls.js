Polls = new Mongo.Collection('polls');

Polls.attachSchema(
  new SimpleSchema({
    question: {
      type: String,
      max: 120
    },
    choices: {
      type: [Object]
    },
    "choices.$.text": {
      type: String,
      label: "Choice",      
      autoform: {
        rows: 2,
        placeholder: 'Enter a choice'
      }
    },
    "choices.$.votes": {
      type: Number,
      defaultValue: 0,
      autoform: {
        type: 'hidden',
      }
    },
    infoUrl: {
      type: String,
      label: "More Info URL",
      max: 1024,
      optional: true,
      regEx: SimpleSchema.RegEx.Url
    },
    submitter: {
      type: String,
      label: "Submitter Name",
      optional: true
    },
    createdAt: {
      type: Date,
      autoValue: function() {
        if (this.isInsert) {
          return new Date();
        } else if (this.isUpsert) {
          return {
            $setOnInsert: new Date()
          };
        } else {
          this.unset();
        }
      },
      denyUpdate: true
    },
    updatedAt: {
      type: Date,
      autoValue: function() {
        if (this.isUpdate) {
          return new Date();
        }
      },
      denyInsert: true,
      optional: true
    }
  })
);

Polls.allow({
  insert: function () {
    return true;
  },

  update: function () {
    return true;
  }
});
