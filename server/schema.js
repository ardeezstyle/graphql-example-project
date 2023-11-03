export const typeDefs = `#graphql
type User {
    id: ID!
    name: String!
    role: Role!
    address: Address
		applications: [Application!]
}

type Address {
    id: ID!
    street: String!
    city: String!
    state: String!
    country: Country!
}

type Job {
    id: ID!
    title: String!
    company: String!
    location: String!
    salary: Float!
    description: String!
    keywords: [String!]
    jobType: JobType!
    applications: [Application!]
}

type Application {
    id: ID!
    jobId: ID!
    candidateId: ID!
    users: [User!]
}

type Query {
    users: [User!]
    user(id: ID!): User!
    jobs: [Job!]
    job(id: ID!): Job!
    applications: [Application!]
    application(id: ID!): Application!
}

input CreateUserInput {
    name: String!
    role: Role!
    address: AddressInput
}

input AddressInput {
    street: String!
    city: String!
    state: String!
    country: Country!
}

type Mutation {
    createUser(user: CreateUserInput!): User
}

enum Role {
    CANDIDATE,
    EMPLOYER
}

enum Country {
    INDIA,
    UNITED STATES
}

enum JobType {
    PERMANENT,
    CONTRACTUAL,
    PART TIME
}
`