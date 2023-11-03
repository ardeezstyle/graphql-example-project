import {Applications, Jobs, Users} from "./data/_db.js";

export const resolvers = {
  Query: {
    users: () => Users,
    user: (_, {id}) => Users.find((user) => Number(id) === Number(user.id)),
    jobs: () => Jobs,
    job: (_, {id}) => Jobs.find((job) => Number(job.id) === Number(id)),
    applications: () => Applications,
    application: (_, {id}) => Applications.find((application) => Number(id) === Number(application.id)),
  },

  User: {
    applications: ({id}) => Applications.filter(({candidateId}) => Number(candidateId) === Number(id))
  },

  Job: {
    applications: ({id}) => Applications.filter(({jobId}) => Number(jobId) === Number(id))
  },

  Application: {
    users: ({candidateId}) => Users.filter(({id}) => Number(id) === Number(candidateId))
  },

  Mutation: {
    createUser: (_, args) => {
      const user = args.user;
      Users.push(user);
    }
  }
}