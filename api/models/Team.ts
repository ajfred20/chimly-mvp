import mongoose from 'mongoose';

export interface TeamMember {
  userId: mongoose.Types.ObjectId | string;
  role: string;
  joinedAt: Date;
}

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  members: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    role: {
      type: String,
      enum: ['Admin', 'Product Manager', 'Designer', 'Content Writer', 'Viewer'],
      default: 'Viewer'
    },
    joinedAt: {
      type: Date,
      default: Date.now
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Team = mongoose.model('Team', teamSchema);