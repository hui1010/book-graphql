const express = require('express')
const expressGraphQL = require('express-graphql').graphqlHTTP
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql')
const app = express()

const schema = new GraphQLSchema({
    //query defines all different use cases that we can use for querying
    query: new GraphQLObjectType({
        name: 'HelloWorld',
        //all the different sections of this object that we query to return data from, for example name of the book, author of the book
        fields: () => ({
            message: {
                //return type
                type: GraphQLString,
                //how to implement it
                resolve: (parent, args) => 'Hello World'
            }
        })
    })
})

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}))
app.listen(5000, () => console.log('server running...'))